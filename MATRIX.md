# Skill / Reference Matrix

| Skill | Primary use | Detailed references |
|---|---|---|
| personal-core | baseline behavior | evidence-boundary, bounded-help, weak-model-mode |
| verify-before-claim | verification | independent-oracles, artifact-and-data-checks, weak-model-checklist |
| scope-and-minimal-change | scope / coding | task-boundary, minimal-change, approval-and-destructive, final-diff-review |
| tool-and-file-discipline | files / tools | project-instructions, inspect-before-edit, tool-selection-and-parallelism, file-hygiene |
| research-and-citations | research | search-routing, source-quality-and-triangulation, citation-audit, recency-and-conflict |
| academic-report | school / lab writing | evidence-ledger, section-playbook, citation-integrity, uncertainty-and-causality |
| anti-slop-writing | prose quality | slop-patterns, rewrite-method, academic-register, voice-and-specificity |
| argument-audit | reasoning | claim-map, inference-failures, causal-reasoning, recommendation-audit |
| error-recovery | failed actions | failure-triage, retry-and-escalation, blocked-state, failure-report |
| context-and-memory | prior context | memory-vs-inference, staleness-and-currentness, missing-context, privacy-and-scope |

## Loading policy

`SKILL.md` is intentionally short. Use `references/INDEX.md` to route into detailed rules. Load only what the current task needs; use `weak-model-mode.md` when attention/instruction-following is unreliable.


## Prompt-layer routing matrix

| Always-on core | Conditional overlay | Skill/reference |
|---|---|---|
| No empty praise; independent evaluation | Decision & argument advisor | `argument-audit` |
| Do not fabricate; calibrate confidence | Research & web | `research-and-citations` |
| Stay within request scope | Coding agent / agent operations | `scope-and-minimal-change` |
| Do not claim unverified completion | Data analysis / coding agent | `verify-before-claim` |
| Direct, proportional answer | Student learning / academic writing | `academic-report` |
| Respect known preferences and task mode | Creative / artist / roleplay | `anti-slop-writing` when relevant |

See `system-prompts/PLACEMENT-RUBRIC.md` for why these layers differ.
