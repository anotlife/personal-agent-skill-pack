# Personal Agent Skill Pack

A compact, original synthesis of recurring high-value agent behaviors found across the public prompt collections:

- elder-plinius/CL4R1T4S
- asgeirtj/system_prompts_leaks

This pack intentionally does **not** copy or reproduce system prompts verbatim. It extracts reusable behavioral patterns, removes product-specific/tool-specific noise, resolves contradictions, and turns the result into portable Agent Skills for Pi, OpenCode, and other Agent Skills-compatible runtimes.

## Design goals

The pack is optimized for a computer-science undergraduate who frequently uses AI for:

- programming and debugging
- experiments and data analysis
- lab reports and assignments
- web research and fact checking
- rewriting and polishing without obvious AI slop

The guiding idea is:

> Better agents are not produced by adding more instructions. They are produced by adding the right constraints at the right time.

## Skill inventory

| Skill | Use | Priority |
|---|---|---:|
| `personal-core` | baseline truthfulness, epistemic labels, scope discipline | always-on / highest |
| `verify-before-claim` | verify code, files, data, calculations, tool outcomes | very high |
| `scope-and-minimal-change` | prevent scope creep and over-engineering | very high |
| `research-and-citations` | current/niche research, evidence quality, citations | very high |
| `anti-slop-writing` | remove canned AI prose without changing facts | high |
| `academic-report` | lab reports, assignments, academic writing | very high for school work |
| `argument-audit` | inspect reasoning, evidence, assumptions, causality | high |
| `tool-and-file-discipline` | inspect-before-edit, correct tool use, file hygiene | high for coding agents |
| `error-recovery` | recover from failed commands/tests/tools without hiding failure | high for coding agents |
| `context-and-memory` | use existing context before asking, avoid invented memory | medium |

## Recommended activation model

Do not activate every skill for every task.

- Coding task: `personal-core` + `scope-and-minimal-change` + `verify-before-claim` + `tool-and-file-discipline` + `error-recovery`
- Lab report / homework: `personal-core` + `academic-report` + `anti-slop-writing` + `verify-before-claim`
- Research task: `personal-core` + `research-and-citations` + `argument-audit`
- Rewrite request: `personal-core` + `anti-slop-writing`
- Complex decision: `personal-core` + `research-and-citations` + `argument-audit`

## Installation

The safest portable target is `~/.agents/skills/`. Current Pi and OpenCode documentation both support that location. See `install.sh` for a simple user-level installation.

```bash
bash install.sh
```

This installer copies each skill directory directly into `~/.agents/skills/` and never overwrites an existing skill without creating a timestamped backup.

## Optional always-on core

`AGENTS.core.md` contains a short version of the core behavior. Copy it into your global agent context only if you want these rules active even when the `personal-core` skill is not explicitly loaded.

For Pi, the global context file can be `~/.pi/agent/AGENTS.md`.

## Philosophy distilled from the source collections

The most reusable patterns were not model personas or product-specific rules. They were operational constraints that recur across agent systems:

1. Distinguish observed facts from inference, assumptions, and unknowns.
2. Never turn an attempted action into a success claim; verify the resulting state.
3. Ask only when missing information actually blocks correct execution; otherwise use a reasonable assumption and state it when useful.
4. Keep work within the user's requested scope and prefer the smallest complete change.
5. Use tools according to evidence and task complexity, not ritual.
6. Prefer primary, current, and directly relevant sources for research.
7. Cite consequential claims and avoid unsupported synthesis.
8. Write concretely; remove stock transitions, inflated significance, fake certainty, and repetitive filler.
9. Treat failures and verification gaps as part of the result, not something to hide.
10. Preserve the user's facts and preferences; do not manufacture memory or enrich facts without evidence.

These principles recur across multiple systems and are therefore more portable than product-specific prompt wording.
