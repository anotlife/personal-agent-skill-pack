---
name: scope-and-minimal-change
description: Use when editing, refactoring, or implementing anything in an existing project, when the request is ambiguous, or when an action could be destructive. Keeps work inside the requested boundary and prevents unrequested changes.
---

# Scope and Minimal Change

## Progressive loading

1. Start with the request-type table and the scope test below.
2. If the request's intent is unclear (question vs instruction), read `references/task-boundary.md`.
3. If you are about to change more than the smallest correct set of files, read `references/minimal-change.md`.
4. Before any delete, overwrite, reset, force-push, migration, or mutation of shared state, read `references/approval-and-destructive.md`.
5. Before reporting completion, read `references/final-diff-review.md`.
6. Weak or distracted model: read `references/weak-model-mode.md` first.

## Classify the request first

Almost every scope error is a misclassification of the request. Decide which of these it is *before* touching anything.

| Request shape | Response | Edit files? |
|---|---|---|
| "What do you think about X?", "How would I...", "Can we..." | Recommendation plus the main tradeoff, 2-3 sentences | No |
| "Make a plan to...", "Plan mode" | A plan | No |
| "Review this", "Look at my diff" | Findings first, severity-ordered | No |
| "Diagnose this failure" | Cause and explanation; do not fix unless asked | No |
| "Fix / add / change / implement X" | Implement, verify, report the diff | Yes |
| "Make it work, I don't care how" | Implement fully; report choices made | Yes, broadly within the goal |

Default assumption is **inquiry** unless the request contains an explicit instruction to perform work. Reporting a bug is not asking for a fix.

## Scope test

A change is in scope if it is:

- directly required for the requested outcome;
- required to keep the requested change correct;
- required by explicit project instructions.

A change is **not** in scope because it is nearby, ugly, old, easy, or something you would design differently.

The test for anything you added yourself: *which numbered request, which step?* If you cannot point at the line the user asked for, it is scope you invented — cut it, or ask.

"Continue" means advance the current task, not "the current task is finished, so here is something else I thought would help".

## Minimal, properly defined

Minimal is not "fewest lines". It means **the smallest repository-native change that fully satisfies the requirement**. A tiny patch that leaves the requested behavior broken is not minimal; it is incomplete.

Prefer: existing helpers and abstractions, local fixes over broad rewrites, the project's own commands, existing configuration mechanisms, changes that preserve surrounding behavior.

Avoid: speculative refactors, renaming unrelated symbols, introducing a framework for a local problem, cleanup that cannot be tied to the requested result, changing tests to match broken behavior.

## Blast-radius signalling

- More than three files, or more than one subsystem, or a change to a shared contract (public API, schema, type): show a short plan before editing.
- New dependency: do not add one without explicit approval.
- Unrelated defect noticed: mention it in one line, record it, and do not fix it unless it blocks the requested work.

## Authorization is scoped

Approval once is not approval always. A user who approved `git push` yesterday has not approved it now. Authorization covers the action, the target, and the context it was given for — not a broader class.

## Final gate

- Every changed file maps to a numbered request or a stated constraint.
- No debug output, scratch files, formatting churn, or speculative cleanup remains.
- The diff is the smallest correct set, and nothing the user cares about was deleted.
- Completion is claimed only for what was verified.
