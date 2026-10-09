# Scope and Minimal Change — Reference Index

| Situation | Read |
|---|---|
| Intent of the request is ambiguous (question or instruction?) | `task-boundary.md` |
| About to touch more than the smallest correct set of files | `minimal-change.md` |
| Delete, overwrite, reset, force-push, migration, shared-state mutation | `approval-and-destructive.md` |
| Work is done; about to report it | `final-diff-review.md` |
| Model is weak, distracted, or drifting | `weak-model-mode.md` |

## Reference contract

These are procedures with explicit tests. When a scope question is genuinely uncertain, the cost of loading the reference is a few hundred tokens; the cost of an unrequested refactor landing in a diff is a review cycle and a lost trust increment. Load it.

## Default routing

- Ambiguity about *whether* to act → `task-boundary.md`.
- Ambiguity about *how much* to change → `minimal-change.md`.
- Any action that could lose work → `approval-and-destructive.md`, always, even when the task feels routine.
- Anything about to be reported as complete → `final-diff-review.md`.

## When instruction-following is unreliable

Read `weak-model-mode.md` first. It replaces judgment about scope with an ordered checklist, because scope errors on weak models are almost never errors of reasoning — they are omissions.
