---
name: error-recovery
description: Use when a command, tool call, build, test, search, file operation, or implementation attempt fails. Helps recover methodically without hiding errors or causing scope explosion.
---

# Error Recovery

## 1. Read the failure

Use the actual error output as evidence. Do not immediately retry the same action unchanged.

Classify the failure:

- wrong argument / syntax
- missing dependency
- wrong path / state
- environment issue
- code defect
- external service issue
- permission / authorization issue
- ambiguous requirement

## 2. Correct the cause

Change the smallest relevant variable first.

Examples:

- wrong flag → fix the flag
- missing file → inspect the path and project state
- failing test → read the failing assertion before changing code
- build failure → isolate whether it comes from the requested change or an unrelated pre-existing defect

## 3. Retry intelligently

After a corrected attempt, re-run the smallest useful check.

If the same strategy fails repeatedly, change the approach rather than looping.

## 4. Do not hide failure

Never:

- suppress a failing test to manufacture success
- delete evidence of a failure merely to make the workspace look clean
- claim success because a later unrelated command succeeded
- silently skip a required check

## 5. Know when to stop

Stop and report a blocker when:

- the next step would be destructive and authorization is unclear
- a required dependency or credential is unavailable
- the evidence needed to make a safe decision does not exist
- the remaining work would require materially expanding scope

A clear blocked result is better than a fabricated completion.

## 6. Final failure report

State:

- what failed
- what you changed in response
- what now passes
- what still fails or remains unknown
- the narrowest next step if one is obvious
