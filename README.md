# Personal Agent Skill Pack

A progressively-loaded personal Skill Pack distilled from recurring high-value agent behavior patterns found across public system-prompt collections such as `elder-plinius/CL4R1T4S` and `asgeirtj/system_prompts_leaks`.

This package is a synthesis and paraphrase, not a verbatim copy of those repositories.

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

By default this installs to:

```text
~/.agents/skills/
```

Existing skills with the same name are moved to `~/.agents/skills-backups/<timestamp>/` before being replaced.

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

1. load the matching `SKILL.md`;
2. open that skill's `references/INDEX.md`;
3. load only the clearly relevant references;
4. load `references/weak-model-mode.md` and follow it as a procedure;
5. run the skill's final checklist before responding.

## Source note

The two source repositories are living collections and change over time. This pack deliberately extracts cross-model patterns rather than copying any single vendor's entire prompt. See `SOURCES.md` for the source map and extraction notes.

## Conflict handling

Higher-priority instructions and explicit user requirements remain authoritative. If a local project instruction directly applies, follow it. Use this pack to improve execution quality, not to override task-specific constraints.
