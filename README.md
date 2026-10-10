# Personal Agent Skill Pack + System Prompt Layers

A personal behavior configuration for Pi / OpenCode and other tool-using agents. It combines a **small always-on core**, **task-conditioned prompt overlays**, and **progressively loaded procedural Skills**.

A progressively-loaded personal Skill Pack distilled from recurring high-value agent behavior patterns found across public system-prompt collections such as `elder-plinius/CL4R1T4S` and `asgeirtj/system_prompts_leaks`.

This package is a synthesis and paraphrase, not a verbatim copy of those repositories.

## Architecture

```text
Global core (short, always on)          AGENTS.core.md, system-prompts/00-global-core.md
  ├── direct, non-sycophantic communication
  ├── truth / uncertainty boundaries
  ├── scope fidelity
  └── no false claims of completed actions
        ↓ when the task matches
Domain overlay (one or a few)           system-prompts/overlays/
  ├── student learning          ├── coding agent
  ├── academic writing          ├── data analysis
  ├── research & web            ├── creative / artist
  ├── decision & argument       └── roleplay
        ↓ when the task needs tools/files
Agent operations                        system-prompts/10-agent-operations.md
        ↓ when a procedure is needed
Skill + reference checklist             skills/*/SKILL.md, skills/*/references/
```

**Why the split matters.** A rule like "do not open with generic praise" belongs in the always-on core, because it applies to every task and costs nothing to omit. A roleplay persona, a student-tutoring method, or a multi-source research workflow should activate *only* when the task calls for it — loading them permanently fights the task's own requirements. `system-prompts/PLACEMENT-RUBRIC.md` holds the five tests for deciding which side of that line a rule falls on.

**Why no universal role prompt.** "Act as a professor", "be a researcher", "always be concise", "always be comprehensive", and "always ask questions" each optimize for a subset of tasks. A computer-science student may need a worked explanation in one turn, a ready-to-submit formatted draft in another, and unembellished code in a third. The router identifies the **task mode** instead of treating one identity as permanent.

See `SYSTEM-PROMPT-ARCHITECTURE.md` for the design summary and `system-prompts/INDEX.md` for the task-cue router.

## Structure

Each skill follows:

```text
skill/
├── SKILL.md              # short routing + core behavior + progressive-loading map
└── references/
    ├── INDEX.md          # load-routing table
    ├── weak-model-mode.md
    └── *.md              # detailed operational rules, examples, checklists
```

The point is progressive disclosure: a capable model can operate from the short `SKILL.md` alone; a weaker or distracted model is told, in the skill itself, exactly which reference to open and in what order.

### The two layers

- **`SKILL.md`** — deliberately short. It holds the rules that apply to *every* task in that skill's domain, plus a numbered loading map. It should be readable in under a minute.
- **`references/*.md`** — the operational layer. Each file carries a principle, explicit rules, worked examples, edge cases, and a checklist. They are procedures, not inspiration.

`references/weak-model-mode.md` exists in every skill. It replaces judgment with an ordered checklist, because weak models fail through omission rather than through bad reasoning.

## Skills

### Baseline and integrity

- `personal-core` — evidence boundary, bounded help, refusal boundaries
- `verify-before-claim` — verification ladder, independent oracles, hollow green checks
- `context-and-memory` — memory vs inference, staleness, what to save, context management
- `untrusted-content` — prompt injection, untrusted files, secrets, external actions

### Doing work

- `task-planning` — directive vs inquiry, discovery discipline, decision-complete plans
- `scope-and-minimal-change` — task boundary, minimal change, destructive-action gates
- `code-craft` — code quality, comments, conventions, security, tests, UI quality
- `tool-and-file-discipline` — inspect-before-edit, tool routing, parallelism, file hygiene
- `debugging-method` — reproduce, hypothesis loop, root cause, instrumentation
- `error-recovery` — failure triage, retry and escalation, blocked state, failure reports
- `git-and-version-control` — commit discipline, safe operations, staging, secrets
- `delegation-and-subagents` — when to delegate, briefing, isolation, verifying results

### Communicating and judging

- `communication-style` — response shape, formatting, progress updates, conversation dynamics
- `review-and-critique` — review mindset, self-review, receiving critique
- `argument-audit` — claim maps, inference failures, causal reasoning, recommendations

### Writing

- `academic-report` — evidence ledger, section playbook, quantitative reporting, reproducibility
- `anti-slop-writing` — slop patterns, rewrite method, formatting, register, voice
- `research-and-citations` — search routing, source quality, citation audit, copyright

## Install

```bash
unzip personal-agent-skill-pack.zip
cd personal-agent-skill-pack
bash install.sh
```

The installer places:

| Content | Destination |
|---|---|
| Skills | `~/.agents/skills/` |
| Prompt layers | `~/.agents/system-prompts/personal-agent-skill-pack/` |
| Portable core | `~/.agents/AGENTS.core.personal.md` |

Replaced skill or profile directories are moved to `~/.agents/personal-pack-backups/<timestamp>/` rather than silently deleted.

The installer does **not** edit your active Pi or OpenCode configuration. Review and activate manually:

- **Pi** — review `system-prompts/adapters/pi-append-system.template.md` and append its body to your existing `~/.pi/agent/APPEND_SYSTEM.md`. Do not replace `SYSTEM.md` unless you intend to replace Pi's default system prompt.
- **OpenCode** — review `system-prompts/adapters/opencode-global-AGENTS.template.md` and append its rules to `~/.config/opencode/AGENTS.md`. Exact instruction-file behavior can differ between release lines, so confirm against the documentation for your installed version.

## Recommended use

Do not force every skill into every prompt. Enable the baseline (`personal-core`) plus the skills that match the current task.

Typical combinations:

| Task | Skills |
|---|---|
| Everyday coding | `personal-core`, `scope-and-minimal-change`, `tool-and-file-discipline`, `code-craft`, `verify-before-claim` |
| Debugging | `debugging-method`, `error-recovery`, `verify-before-claim` |
| Lab report or assignment | `academic-report`, `anti-slop-writing`, `research-and-citations`, `argument-audit` |
| Research answer | `research-and-citations`, `anti-slop-writing`, `argument-audit` |
| Repo work with commits | add `git-and-version-control` |
| Large multi-part task | add `task-planning`, `delegation-and-subagents` |

### Intended behavior on a less capable model

1. identify the task mode in one short internal label;
2. load the matching `SKILL.md`;
3. open that skill's `references/INDEX.md`;
4. load only the clearly relevant references;
5. load `references/weak-model-mode.md` and follow it as a procedure;
6. run the skill's final checklist before responding.

Do not rely on the router's judgment on a weak model. `system-prompts/INDEX.md` §3 gives the ordered procedure.

## Source note

The two source repositories are living collections and change over time. This pack deliberately extracts cross-model patterns rather than copying any single vendor's entire prompt. See `SOURCES.md` for the source map and extraction notes, and `system-prompts/research-notes/SOURCES-AND-RATIONALE.md` for why the layers are separated.

## Conflict handling

Higher-priority instructions and explicit user requirements remain authoritative. If a local project instruction directly applies, follow it. Use this pack to improve execution quality, not to override task-specific constraints.

Resolve conflicts in this order: platform safety → explicit user request → project instruction files → global core → active overlay → active skill → style defaults. See `AGENTS.core.md` for the full order.
