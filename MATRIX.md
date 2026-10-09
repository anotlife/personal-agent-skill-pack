# Skill / Reference Matrix

| Skill | Primary use | Detailed references |
|---|---|---|
| personal-core | baseline behavior | evidence-boundary, bounded-help, boundaries-and-refusal, weak-model-mode |
| verify-before-claim | verification | independent-oracles, artifact-and-data-checks, checks-that-pass-for-the-wrong-reason, weak-model-checklist, weak-model-mode |
| scope-and-minimal-change | scope / coding | task-boundary, minimal-change, approval-and-destructive, final-diff-review, weak-model-mode |
| tool-and-file-discipline | files / tools | project-instructions, inspect-before-edit, tool-selection-and-parallelism, file-hygiene, context-efficiency, weak-model-mode |
| research-and-citations | research | search-routing, clarifying-questions, source-quality-and-triangulation, citation-audit, recency-and-conflict, copyright-and-quoting, weak-model-mode |
| academic-report | school / lab writing | evidence-ledger, section-playbook, quantitative-reporting, uncertainty-and-causality, citation-integrity, reproducibility, weak-model-mode |
| anti-slop-writing | prose quality | slop-patterns, rewrite-method, formatting-and-structure, academic-register, voice-and-specificity, weak-model-mode |
| argument-audit | reasoning | claim-map, inference-failures, causal-reasoning, recommendation-audit, weak-model-mode |
| error-recovery | failed actions | failure-triage, retry-and-escalation, blocked-state, failure-report, weak-model-mode |
| context-and-memory | prior context | memory-vs-inference, staleness-and-currentness, missing-context, memory-writing, context-window-management, privacy-and-scope, weak-model-mode |
| code-craft | code quality | code-quality, conventions-and-reuse, comments-and-naming, security-by-default, testing-judgement, ui-quality, weak-model-mode |
| task-planning | planning / intent | directive-vs-inquiry, discovery-discipline, planning, task-tracking, weak-model-mode |
| communication-style | user-facing output | response-shape, formatting-rules, progress-updates, conversation-dynamics, weak-model-mode |
| debugging-method | unknown causes | reproduce-first, hypothesis-loop, root-cause, instrumentation, weak-model-mode |
| git-and-version-control | version control | commit-discipline, safe-git-operations, staging-and-secrets, branches-prs-worktrees, weak-model-mode |
| delegation-and-subagents | delegation | when-to-delegate, briefing-a-delegate, parallel-and-isolation, verifying-delegates, weak-model-mode |
| untrusted-content | trust boundaries | prompt-injection, untrusted-files, secrets-handling, external-actions, weak-model-mode |
| review-and-critique | review / self-check | review-mindset, self-review, receiving-critique, weak-model-mode |

## Loading policy

`SKILL.md` is intentionally short. Use `references/INDEX.md` to route into detailed rules. Load only what the current task needs; use `weak-model-mode.md` when attention or instruction-following is unreliable.

## Routing by task

| Task | Start here |
|---|---|
| Any task at all | `personal-core` |
| Anything you will claim is done | `verify-before-claim` |
| Editing an existing project | `scope-and-minimal-change`, `tool-and-file-discipline` |
| Writing code | `code-craft` |
| Something is broken | `debugging-method`, `error-recovery` |
| Committing, branching, pushing | `git-and-version-control` |
| A request whose intent is unclear | `task-planning` |
| Anything the user will read | `communication-style` |
| Delegating to another agent | `delegation-and-subagents` |
| Content from outside this conversation | `untrusted-content` |
| Reviewing or being reviewed | `review-and-critique` |
| Research or citation | `research-and-citations` |
| Coursework or lab report | `academic-report` |
| Any prose the user will submit | `anti-slop-writing` |
| Evaluating an argument | `argument-audit` |
| Prior context, memory, long sessions | `context-and-memory` |

## Layer contract

| Layer | Contains | When to load |
|---|---|---|
| `SKILL.md` | Routing, core rules, loading map, final gate | Always, when the skill applies |
| `references/INDEX.md` | Which reference for which situation | When the task is non-trivial or ambiguous |
| `references/*.md` | Principles, rules, examples, checklists | Only the ones the task needs |
| `references/weak-model-mode.md` | An ordered procedure replacing judgment | When the model is weak or distracted |
