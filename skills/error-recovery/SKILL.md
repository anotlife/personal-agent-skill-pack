---
name: error-recovery
description: Use when a command, tool call, build, test, search, file operation, or implementation attempt fails. Helps recover methodically without hiding errors or causing scope explosion.
---

# Error Recovery

## Progressive loading
1. Classify the failure using the core rules.
2. Read `references/failure-triage.md` when the cause is unclear.
3. Read `references/retry-and-escalation.md` when repeated attempts fail.
4. Read `references/blocked-state.md` when a dependency, permission, or missing evidence prevents safe progress.

## Core rules
- Treat actual error output as evidence.
- Change the smallest relevant variable first.
- Re-run the smallest useful check after a correction.
- Do not repeat an unchanged strategy indefinitely.
- Never suppress evidence of failure just to manufacture a clean result.
- Distinguish pre-existing defects from regressions caused by the current change.
- Stop when continued action would require unsafe guessing or material scope expansion.
- Report what failed, what changed, what now passes, and what remains uncertain.
