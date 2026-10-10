#!/usr/bin/env node
// retell.mjs — manifest-driven VERBATIM extractor.
//
// Implements rules 1-33 mechanically. This tool only ever:
//   selects (rule 17), copies verbatim (rule 3), preserves original order (rule 4),
//   adds source markers (rule 19), adds delimiters (rule 25), adds status markers (rule 18).
// It never rewrites, summarises, reorders, merges, splits, or normalises.
//
// TWO PHASES, deliberately separated:
//   Phase 1 writes the files.
//   Phase 2 RE-READS the written files from disk and verifies every body line against the
//   source file (rule 26). The check runs on the artifact, not on the in-memory slice —
//   a slice always trivially "matches" its own source, so an in-memory check cannot fail
//   and would be a gate that passes for the wrong reason.
//
// Usage:
//   node scripts/retell.mjs --manifest <path> --out <dir> [--source-root <dir>] [--report <path>]

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const opt = (name, dflt = null) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt;
};

const MANIFEST = opt("manifest");
const OUT = opt("out");
const SOURCE_ROOT = opt("source-root", ".");
const REPORT = opt("report");
const VERIFY_ONLY = args.includes("--verify-only");

if ((!MANIFEST && !VERIFY_ONLY) || !OUT) {
  console.error(
    "usage: retell.mjs --out <dir> [--manifest <path>] [--source-root <dir>] [--report <path>] [--verify-only]",
  );
  process.exit(2);
}

// Non-original content whitelist (rule 18). Anything else in the output is a violation.
const OPEN = "<<<原文开始>>>";
const CLOSE = "<<<原文结束>>>";
const MISSING = "[原文未提供]";
const CONFLICT = "[冲突]";
const OMITTED = "[原文省略]";
const NAV = "[非原文/导航]";

// Rule 18: the only non-original content permitted, and it must stay separated from the body.
const WHITELIST = new Set([MISSING, CONFLICT, OMITTED, NAV]);

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (err) {
    console.error(`无法解析 manifest：${file}\n${err.message}`);
    process.exit(2);
  }
}

const manifest = VERIFY_ONLY ? {} : readJson(MANIFEST);

const srcCache = new Map();
function sourceRaw(rel) {
  if (!srcCache.has(rel)) {
    const abs = path.join(SOURCE_ROOT, rel);
    srcCache.set(rel, fs.existsSync(abs) ? fs.readFileSync(abs, "utf8") : null);
  }
  return srcCache.get(rel);
}
const sourceLines = (rel) => {
  const raw = sourceRaw(rel);
  return raw === null ? null : raw.split(/\r\n|\n|\r/);
};

const report = {
  generated: new Date().toISOString(),
  rules: "1-33",
  entries: [],
  changed: [],
  deleted: [],
  violations: [],
  verification: { checked: 0, passed: 0, failed: 0, failures: [] },
};

// ---------- Phase 1: build and write ----------
for (const [slot, selections] of Object.entries(manifest)) {
  const outFile = path.join(OUT, `${slot}.md`);
  const chunks = [];

  for (const sel of selections) {
    if (sel.missing) {
      // Rule 20: the source does not contain this, so say so rather than padding with
      // adjacent-but-irrelevant text that would still pass the verbatim check.
      chunks.push(`${OPEN}\n${MISSING}\n${CLOSE}\n\n[来源：原文未提供]${sel.note ? `（${sel.note}）` : ""}\n`);
      report.deleted.push({ slot, source: "-", reason: `源文档未涵盖该主题${sel.note ? `：${sel.note}` : ""}` });
      continue;
    }

    const lines = sourceLines(sel.source);
    if (!lines) {
      chunks.push(`${OPEN}\n${MISSING}\n${CLOSE}\n\n[来源：${sel.source}][来源未定位]\n`);
      report.deleted.push({ slot, source: sel.source, reason: "源文件不存在" });
      continue;
    }

    const start = Math.max(1, sel.start);
    const end = Math.min(lines.length, sel.end ?? lines.length);

    if (sel.omit) {
      chunks.push(`${OPEN}\n${OMITTED}\n${CLOSE}\n\n[来源：${sel.source} 第${start}-${end}行]\n`);
      report.deleted.push({ slot, source: sel.source, reason: "manifest 标记为省略" });
      continue;
    }
    if (sel.conflict) {
      chunks.push(`${OPEN}\n${CONFLICT}\n${CLOSE}\n\n[来源：${sel.source} 第${start}-${end}行]\n`);
      report.violations.push({ slot, source: sel.source, kind: "conflict-preserved-not-adjudicated" });
      continue;
    }

    // Verbatim slice in original order. No trim, no reflow, no dedupe (rules 4, 10, 11, 14, 22).
    const body = lines.slice(start - 1, end);
    const marker = `[来源：${sel.source} 第${start}-${end}行]`;
    chunks.push(`${OPEN}\n${body.join("\n")}\n${CLOSE}\n\n${marker}\n`);
    report.entries.push({ slot, source: sel.source, start, end, lines: body.length });
  }

  if (chunks.length === 0) continue;
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  const header = `${NAV} 本文件内容逐字复制自源文档，未作改写。\n\n`;
  fs.writeFileSync(outFile, header + chunks.join("\n"), "utf8");
  report.changed.push({ slot, file: path.relative(process.cwd(), outFile), selections: selections.length });
}

// ---------- Phase 2: verify the written artifacts (rule 26) ----------
// In --verify-only mode, take the artifacts already on disk instead of regenerating them,
// so the gate can be exercised against a deliberately corrupted file.
if (VERIFY_ONLY) {
  const found = [];
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".md")) found.push(p);
    }
  };
  walk(OUT);
  report.changed = found.map((f) => ({ slot: path.basename(f, ".md"), file: path.relative(process.cwd(), f) }));
}
// Parse each written file back from disk, then require every body line to occur verbatim
// in the source file named by its own marker.
function verifyFile(absFile) {
  const raw = fs.readFileSync(absFile, "utf8");
  const lines = raw.split(/\r\n|\n|\r/);
  let i = 0;
  while (i < lines.length) {
    if (lines[i] !== OPEN) {
      i++;
      continue;
    }
    const bodyStart = i + 1;
    let j = bodyStart;
    while (j < lines.length && lines[j] !== CLOSE) j++;
    const body = lines.slice(bodyStart, j);

    // marker is two lines after CLOSE
    let k = j + 1;
    while (k < lines.length && lines[k].trim() === "") k++;
    const marker = lines[k] ?? "";
    const m = marker.match(/^\[来源：(.+?) 第(\d+)-(\d+)行/);
    const rel = m ? m[1] : null;
    const src = rel ? sourceRaw(rel) : null;

    for (let b = 0; b < body.length; b++) {
      const text = body[b];
      if (text === "") continue;
      // Rule 18 whitelists these as non-original content. They are markers, not body text,
      // so requiring them to appear in the source is a false positive that would delete a
      // compliant file. Only rule-18 content is skipped; everything else must be verbatim.
      if (WHITELIST.has(text.trim()) || text.trim().startsWith("[来源")) continue;
      report.verification.checked++;
      const ok = src !== null && src.includes(text);
      if (ok) {
        report.verification.passed++;
      } else {
        report.verification.failed++;
        report.verification.failures.push({
          file: path.relative(process.cwd(), absFile),
          source: rel,
          bodyLine: bodyStart + b + 1,
          text: text.slice(0, 160),
        });
        report.deleted.push({
          file: path.relative(process.cwd(), absFile),
          source: rel,
          reason: "规则26自检失败：输出正文无法在原文中定位完全一致的字符串（规则27：删除）",
          text: text.slice(0, 160),
        });
      }
    }
    i = j + 1;
  }
}

for (const c of report.changed) {
  verifyFile(path.resolve(c.file));
}

// Rule 27: a file with any unverifiable body line is removed outright.
const failedFiles = new Set(report.verification.failures.map((f) => f.file));
for (const f of failedFiles) {
  const abs = path.resolve(f);
  if (fs.existsSync(abs)) fs.unlinkSync(abs);
  report.changed = report.changed.filter((c) => c.file !== f);
}

const summary = [
  "",
  "【改动清单】",
  ...(report.changed.length
    ? report.changed.map((c) => `- 新增 ${c.file}${c.selections ? `（${c.selections} 个逐字块）` : ""}`)
    : ["- 无"]),
  "",
  "【删除清单】",
  ...(report.deleted.length
    ? report.deleted.map(
        (d) =>
          `- ${d.slot ?? d.file} | ${d.source ?? "-"} | ${d.reason}${d.text ? ` | 正文：${d.text}` : ""}`,
      )
    : ["- 无"]),
  "",
  `规则26自检：检查 ${report.verification.checked} 行，通过 ${report.verification.passed}，失败 ${report.verification.failed}`,
  failedFiles.size ? `因自检失败整体删除的文件：${[...failedFiles].join(", ")}` : "因自检失败整体删除的文件：无",
  "",
].join("\n");

console.log(summary);
if (REPORT) {
  fs.mkdirSync(path.dirname(REPORT), { recursive: true });
  fs.writeFileSync(REPORT, JSON.stringify(report, null, 2) + "\n" + summary, "utf8");
  console.log(`报告写入：${REPORT}`);
}
