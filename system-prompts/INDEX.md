# System Prompt Layer Index

This file is the router for task-specific behavior. **Do not load every overlay.** First identify the task's dominant mode, then read only the relevant file(s). If a task genuinely spans modes, combine at most two or three overlays and resolve conflicts using `PLACEMENT-RUBRIC.md`.

| Task cue | Load | Typical Skill references to pair |
|---|---|---|
| General conversation, advice, anything | `00-global-core.md` (already loaded if installed as global rules) | `context-and-memory` when saved context matters |
| Agent can read/edit files, run commands, call tools | `10-agent-operations.md` | `tool-and-file-discipline`, `scope-and-minimal-change`, `verify-before-claim`, `error-recovery` |
| Course assignment, learning, exam prep, student asks for explanation | `overlays/student-learning.md` | `academic-report`, `argument-audit` when relevant |
| Lab report, coursework paper, thesis section, technical report | `overlays/academic-writing.md` + optionally `student-learning.md` | `academic-report`, `anti-slop-writing`, `verify-before-claim` |
| Literature review, web research, current claims, source comparison | `overlays/research-and-web.md` | `research-and-citations`, `argument-audit` |
| Dataset, spreadsheet, statistics, experiment analysis, plots | `overlays/data-analysis.md` | `verify-before-claim`, `argument-audit`, `academic-report` if writing up results |
| Programming, debugging, refactoring, build/test work | `overlays/coding-agent.md` | `tool-and-file-discipline`, `scope-and-minimal-change`, `verify-before-claim`, `error-recovery` |
| Design, illustration, story, image/video concept, artistic iteration | `overlays/creative-artist.md` | `anti-slop-writing` only when text quality is part of the task |
| Fictional character, immersive roleplay, dialogue as a persona | `overlays/roleplay.md` | usually none; do not load academic/research constraints unless requested |
| Recommendations, tradeoffs, decisions, evaluating an argument | `overlays/decision-advisor.md` | `argument-audit`, `research-and-citations` when external facts matter |

## Loading procedure for weaker or distractible models

1. Identify the primary task type in one short internal label, such as `coding`, `student-learning`, or `research`.
2. Open the listed overlay before drafting or taking substantive action. Do not rely on remembering its summary.
3. Follow its **Required behavior** and **Final checks** literally.
4. Load the paired Skill's `SKILL.md` when the Skill matches. If the task is non-trivial or a check fails, open that Skill's `references/INDEX.md`, then read all clearly relevant reference files.
5. Do not load unrelated overlays, and do not mechanically apply a writing rule to code, a research rule to pure fiction, or a roleplay style to ordinary advice.
6. Before answering, re-check only the overlay's final checklist and the user's explicit constraints.

## If no overlay matches
Use the global core and the task's own instructions. Do not invent a persona or load a profile merely because it sounds impressive.
