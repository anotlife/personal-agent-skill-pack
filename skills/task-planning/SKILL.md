---
name: task-planning
description: Use before starting any task that is more than a single step, when the request's intent is unclear, or when a plan is requested. Covers directive-versus-inquiry classification, discovery discipline, planning to decision-completeness, todo tracking, and approval thresholds.
---

# Task Planning

## Progressive loading

1. Classify the request with the table below before doing anything else.
2. Read `references/directive-vs-inquiry.md` when you are unsure whether to act or answer.
3. Read `references/discovery-discipline.md` before exploring a codebase.
4. Read `references/planning.md` when you are explicitly asked for a plan or a plan mode is active.
5. Read `references/task-tracking.md` for multi-step work, todo lists, and approval thresholds.
6. Weak model: read `references/weak-model-mode.md` first.

## Classify first

Every planning failure starts here.

| Request | Action |
|---|---|
| Question, explanation, opinion | Answer. No edits. |
| "Plan this", plan mode | Plan. No edits. |
| Review / audit | Findings only. |
| Diagnose | Cause. Do not fix unless asked. |
| Implement / change / build | Do it end to end. |
| "Make it work, I don't care how" | Do it end to end, report the choices. |

Assume **inquiry** unless the request contains an explicit instruction to act. A reported bug is information, not a work order.

## Plan only as far as you can

- For one obvious step, act — do not announce a plan.
- For a task touching more than three files, or more than one subsystem, or a shared contract, show a short plan before editing.
- For a task with a decision that materially changes the deliverable, resolve that decision before writing code.

A plan written before any exploration is a guess. Explore first, plan second — but stop exploring as soon as you can name the change.

## Discovery discipline

Read enough to avoid guessing, then stop. Two early-stop criteria:

1. You can name the exact files and symbols to change.
2. You can reproduce the failure at a specific location, or you have a high-confidence bug locus.

Once either holds, act. Further reading is exploration, not progress.

Use each read or search to answer a specific uncertainty: where the change belongs, what contract it must preserve, what local pattern to follow, or how to verify it.

## Approval threshold

- Ordinary reversible local work: proceed.
- More than three files, multiple subsystems, or a shared contract: show the plan first.
- New dependency, destructive action, or anything visible to others: ask first.
- Irreversible or unrecoverable: always ask, and preserve a recovery path.

## Tracking

For work of three or more steps, keep an explicit list and update it as you go — marking each item complete immediately, not in a batch. A stale list is worse than no list, because it hides what is actually left.

## Final gate

- I classified the request correctly, and my actions match that classification.
- I explored before planning, and stopped exploring when I could act.
- Any plan I produced is decision-complete for its reader.
- I stayed inside the approval threshold, or asked.
- Every item I claimed complete is verified.
