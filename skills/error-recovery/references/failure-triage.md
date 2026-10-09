# Failure Triage

## Classify before changing anything

Changing things without a classification is how a one-line fix turns into four commits.

| Class | Signature | Typical first move |
|---|---|---|
| **Syntax / argument** | Parser error, missing comma, wrong arity, unexpected token | Fix the source, not the environment |
| **Type error** | Type mismatch, nullability, generic bound | Fix the type, not the cast |
| **Missing dependency** | Module not found, unresolved import, package absent | Install or add it (with approval if it is new) |
| **Wrong path / state** | File not found, empty result, stale artifact | Confirm the path and the state |
| **Permission / auth** | `EACCES`, 401, 403, expired token | Obtain access; do not work around it |
| **Environment** | Version mismatch, missing tool, wrong shell, encoding, path separator | Fix the environment or the invocation |
| **Code defect** | Wrong result, assertion failure, exception in business logic | Read the code path |
| **External service** | Timeout, 5xx, rate limit, DNS | Back off, retry, or report |
| **Ambiguous requirement** | The code is doing what it says; the request was unclear | Ask one narrow question |
| **Pre-existing failure** | Fails on a clean checkout, unrelated to your change | Report it; do not fix it silently |

Getting the class right usually determines the fix. Misclassifying a syntax error as an environment problem produces an hour of `PATH` debugging.

## Evidence-first procedure

1. **Capture the exact error**, verbatim. Copy the message, not your summary of it.
2. **Find the first meaningful failure.** Compilers and fail-fast runners stop at the first error; everything after it is unknown, not "also broken". Never attribute a failure to anything later than the first error.
3. **Inspect the relevant state**: does the file exist, is the process running, what version is installed, what is on the input.
4. **Propose the narrowest cause consistent with the evidence.** One cause, not five.
5. **Change one variable** (or a small related set that must move together).
6. **Re-run the smallest check** that would confirm the change worked.

## Read the error, not the exit code

An exit code tells you nothing about cause. The message does. `EXIT=1` from a test suite could be one failing assertion out of 400 or a missing binary.

When output is long, redirect the full output to a file and read the error lines, rather than scrolling.

## Distinguish pre-existing from introduced

Before blaming your change, check whether the failure existed before it:

- Did the check pass before the change?
- Does it fail on a clean checkout of the same revision?
- Is the failing file one you touched?

Reporting someone else's pre-existing failure as your regression, or as fixed, are both wrong.

## Do not infer depth from shallowness

A shallow symptom — a syntax error — is not evidence of an architectural problem. Conversely, a deep symptom (a wrong number at the top) is not evidence of a deep bug; it may be a unit conversion two lines down.

## Version and environment checks

Before deep debugging, confirm the cheap facts:

- the version of the tool you think you are running (`which`, `--version`);
- the interpreter or runtime actually used (not the one you assumed);
- the working directory;
- the environment variables that matter;
- whether a stale cache, build artifact, or lock file is in play.

## Checklist

- [ ] I copied the exact error text.
- [ ] I identified the first failure, not the last.
- [ ] I named a class from the table.
- [ ] I proposed one narrow cause.
- [ ] I changed one variable.
- [ ] I re-ran the smallest check.
- [ ] I know whether this failure pre-existed my change.
