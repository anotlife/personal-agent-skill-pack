# Error Recovery — Reference Index

| Situation | Read |
|---|---|
| The cause is unclear or the failure is unfamiliar | `failure-triage.md` |
| A retry failed, or several attempts produced the same error | `retry-and-escalation.md` |
| A dependency, permission, credential, or missing input blocks progress | `blocked-state.md` |
| About to report an incomplete result | `failure-report.md` |
| Model is weak, distracted, or retrying blindly | `weak-model-mode.md` |

## Reference contract

Error recovery fails in two directions: looping on an unchanged attempt, and abandoning a viable approach after one failure. These references mark both edges. The single most useful habit is comparing the *new* error to the *old* one — identical output means the strategy, not the parameter, must change.

## Default routing

- First failure → `failure-triage.md`.
- Second failure with the same error → `retry-and-escalation.md`.
- Any missing external input → `blocked-state.md`.
- Any task that ends incomplete → `failure-report.md`.

## When instruction-following is unreliable

Read `weak-model-mode.md` first. It caps attempts and forces a written comparison between consecutive errors, which is the check a weak model most reliably skips.
