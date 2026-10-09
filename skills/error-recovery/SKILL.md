---
name: error-recovery
description: Use when a command, tool call, build, test, search, file operation, or implementation attempt fails. Helps recover methodically without hiding errors or causing scope explosion.
---

# Error Recovery

## Progressive loading

1. Classify the failure with the core rules below.
2. Read `references/failure-triage.md` when the cause is unclear.
3. Read `references/retry-and-escalation.md` when repeated attempts fail.
4. Read `references/blocked-state.md` when a dependency, permission, or missing evidence prevents safe progress.
5. Read `references/failure-report.md` before reporting an incomplete result.
6. Weak model: read `references/weak-model-mode.md` first.

## Core rules

- **Read the actual error output.** Not the exit code, not your expectation. The message.
- **Find the first meaningful failure**, not the last cascade message. Everything after the first error may be a consequence.
- **Change the smallest relevant variable first.** One change per attempt.
- **Re-run the smallest useful check** after a correction, not the whole pipeline.
- **Never repeat an unchanged strategy indefinitely.** If the same command failed with the same output twice, the third attempt is not a strategy.
- **Never suppress evidence of failure** to manufacture a clean result: no skipping tests, no `--no-verify`, no editing the expectation to match the output.
- **Distinguish pre-existing defects from regressions.** Check whether it failed before your change.
- **Stop when the next step would require unsafe guessing or material scope expansion.**
- **Report what failed, what changed, what now passes, and what remains unknown.**

## The recovery loop

1. **Capture** the exact error text.
2. **Classify** it (syntax, dependency, state, permission, environment, defect, external service, ambiguous requirement, pre-existing failure).
3. **Locate** the narrowest cause consistent with the evidence.
4. **Change** one variable.
5. **Re-run** the smallest check that would show the change worked.
6. **Compare** the new error with the old one. Different error = progress; identical error = change the approach, not the parameter.

## When to stop recovering and report instead

- Two attempts produced the identical error.
- The fix would require changing something outside the requested scope.
- The cause is a missing credential, dependency, or file you cannot obtain.
- You would have to guess at a value that materially changes the result.

Report the blocker rather than continuing to probe.

## Final gate

- I read the error text, not just the status.
- I identified the first failure, not the last.
- Each attempt changed exactly one thing.
- No failure evidence was suppressed.
- I know whether the defect pre-existed my change.
- The report names what works, what does not, and the narrowest next step.
