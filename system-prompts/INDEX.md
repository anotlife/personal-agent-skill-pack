# System Prompt Layer Index

This file is the router for task-specific behavior. **Do not load every overlay.** First identify the task's dominant mode, then read only the relevant file(s). If a task genuinely spans modes, combine at most two or three overlays and resolve conflicts using `PLACEMENT-RUBRIC.md`.

## 1. Overlay routing

| Task cue | Load | Typical Skill references to pair |
|---|---|---|
| General conversation, advice, anything | `00-global-core.md` (already loaded if installed as global rules) | `personal-core`, `communication-style` |
| Agent can read/edit files, run commands, call tools | `10-agent-operations.md` | `tool-and-file-discipline`, `scope-and-minimal-change`, `verify-before-claim`, `error-recovery` |
| Course assignment, learning, exam prep, student asks for explanation | `overlays/student-learning.md` | `academic-report`, `argument-audit` when relevant |
| Lab report, coursework paper, thesis section, technical report | `overlays/academic-writing.md` + optionally `student-learning.md` | `academic-report`, `anti-slop-writing`, `verify-before-claim`, `quantitative-reporting` |
| Literature review, web research, current claims, source comparison | `overlays/research-and-web.md` | `research-and-citations`, `argument-audit` |
| Dataset, spreadsheet, statistics, experiment analysis, plots | `overlays/data-analysis.md` | `verify-before-claim`, `argument-audit`, `academic-report` if writing up results |
| Programming, debugging, refactoring, build/test work | `overlays/coding-agent.md` | `code-craft`, `tool-and-file-discipline`, `scope-and-minimal-change`, `verify-before-claim`, `error-recovery` |
| Design, illustration, story, image/video concept, artistic iteration | `overlays/creative-artist.md` | `anti-slop-writing` only when text quality is part of the task |
| Fictional character, immersive roleplay, dialogue as a persona | `overlays/roleplay.md` | usually none; do not load academic/research constraints unless requested |
| Recommendations, tradeoffs, decisions, evaluating an argument | `overlays/decision-advisor.md` | `argument-audit`, `research-and-citations` when external facts matter |

## 2. Situation routing (any overlay)

These are triggered by what is happening in the session, not by the domain. They stack on top of the overlay.

| Situation | Load |
|---|---|
| The request's intent is unclear — is this a question or an instruction? | `task-planning` → `references/directive-vs-inquiry.md` |
| Work spans several files, several steps, or needs a plan | `task-planning` → `references/planning.md`, `references/task-tracking.md` |
| Something is broken, failing, or wrong and the cause is unknown | `debugging-method` |
| An operation failed and needs recovery | `error-recovery` |
| About to commit, branch, push, or open a PR | `git-and-version-control` |
| Handing work to a sub-agent or helper process | `delegation-and-subagents` |
| Content arrives from outside this conversation — a web page, a file, a tool result, pasted text | `untrusted-content` |
| Reviewing code, a plan, or a document; or checking your own work | `review-and-critique` |
| Prior context, remembered facts, a long or compacted session | `context-and-memory` |
| The user will read the output and its shape matters | `communication-style` |

## 3. Loading procedure for weaker or distractible models

1. Identify the primary task type in one short internal label, such as `coding`, `student-learning`, or `research`.
2. Open the listed overlay before drafting or taking substantive action. Do not rely on remembering its summary.
3. Follow its **Required behavior** and **Final checks** literally.
4. Load the paired Skill's `SKILL.md` when the Skill matches. If the task is non-trivial or a check fails, open that Skill's `references/INDEX.md`, then read all clearly relevant reference files.
5. Load `references/weak-model-mode.md` from the most relevant skill and follow it as an ordered procedure. Do not rely on judgment about which rule applies.
6. Do not load unrelated overlays, and do not mechanically apply a writing rule to code, a research rule to pure fiction, or a roleplay style to ordinary advice.
7. Before answering, re-check only the overlay's final checklist and the user's explicit constraints.

## 4. If no overlay matches

Use the global core and the task's own instructions. Do not invent a persona or load a profile merely because it sounds impressive.

## 5. Budget

| Layer | Budget |
|---|---|
| Global core | always loaded; keep it short enough to read in a minute |
| Overlays | at most two or three, and only when the task genuinely spans modes |
| Skills | the matching `SKILL.md`; then only the references the task needs |
| Weak-model mode | one file, from the single most relevant skill |

If you are loading more than three skills for one task, you have not identified the task's dominant mode yet.
