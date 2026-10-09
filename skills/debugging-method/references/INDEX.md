# Debugging Method — Reference Index

| Situation | Read |
|---|---|
| About to change code to fix something | `reproduce-first.md` |
| One pass did not find the cause | `hypothesis-loop.md` |
| About to apply a fix, especially a quick one | `root-cause.md` |
| You cannot see what the code is doing | `instrumentation.md` |
| Model is weak, distracted, or shotgun-debugging | `weak-model-mode.md` |

## Reference contract

`reproduce-first.md` is the one that most changes outcomes: a bug you can make happen on demand is a bug you can verify you fixed. Everything else is technique.

## Default routing

- Crash or wrong value with an obvious location → `hypothesis-loop.md`.
- Nondeterministic or environment-dependent → `instrumentation.md`.
- Anything you are tempted to patch quickly → `root-cause.md`.
- Any fix at all → `reproduce-first.md` first.

## Scope note

This skill is for finding an unknown cause. When an *operation* fails and you need to recover — a build fails, a command errors, an API returns 500 — use the `error-recovery` skill instead. The two overlap on the comparison rule (compare the new error to the old), and both apply when you are fixing code that fails.

## When instruction-following is unreliable

Read `weak-model-mode.md` first. It forbids the shotgun and the symptom patch, which are the two failure modes a weak model defaults to.
