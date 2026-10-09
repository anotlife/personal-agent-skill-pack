---
name: debugging-method
description: Use when something is broken, throwing, failing, slow, or behaving unexpectedly and the cause is not yet known. Provides a hypothesis-driven diagnosis loop: reproduce, isolate, instrument, bisect, fix the cause rather than the symptom.
---

# Debugging Method

## Progressive loading

1. Start with the loop and the first-error rule below.
2. Read `references/reproduce-first.md` before changing any code.
3. Read `references/hypothesis-loop.md` when the cause is not obvious after one pass.
4. Read `references/root-cause.md` before applying a fix, especially a "quick" one.
5. Read `references/instrumentation.md` when you need to see what the code is actually doing.
6. If the failure is a failed operation rather than a wrong behaviour, see the `error-recovery` skill instead.
7. Weak model: read `references/weak-model-mode.md` first.

## The loop

```
reproduce → observe → hypothesise → test one variable → compare → repeat
```

Every step must produce information. If an iteration produced none, the hypothesis was untestable, not wrong.

## The first-error rule

**The first error is the culprit.** Compilers, parsers, and fail-fast runners stop at the first failure; everything after it may be a consequence or may never have run. Never attribute a failure to anything later than the first error.

The same applies across a pipeline: the stage that reports the failure is often not the stage that broke.

## Reproduce before fixing

You cannot know a bug is fixed unless you can make it happen on demand.

1. Find the smallest input that triggers it.
2. Record the exact command and the exact output.
3. Confirm it fails for the reason you think, not coincidentally.
4. Fix.
5. Confirm the reproduction now passes.
6. Confirm nothing else broke.

If you cannot reproduce it, say so. Do not fix a bug you have not seen.

## One variable at a time

Change one thing, then re-measure. Two simultaneous changes produce a result you cannot attribute.

Corollary: when you need to know whether *the input* or *the processing* is at fault, test them separately — add the new piece paired with a deliberately trivial assertion, or swap the suspect for a variable.

## Distinguish the four kinds of "broken"

| Symptom | What to look for |
|---|---|
| **Wrong value** | A unit mismatch, an off-by-one, a wrong default, a rounding step, a stale cache |
| **Crash / exception** | An unhandled input shape at a boundary |
| **Hang / timeout** | An await that never resolves, a lock, an unbounded retry, a blocking call in an async path |
| **Nondeterministic failure** | Shared mutable state, ordering, time, randomness, concurrency, an unseeded RNG |

The category determines the technique. Do not instrument for a race condition when the value is simply off by one.

## Bisect instead of reading

When the cause is unclear and you have a known-good state and a known-bad state, bisect:

- **In history**: find the commit where it changed.
- **In input**: halve the failing input until the trigger is minimal.
- **In code path**: disable halves of the pipeline and see which half carries the symptom.
- **In configuration**: revert settings in groups.

Binary search turns an unbounded search into a logarithmic one. Reaching for it early is usually faster than reading code.

## Fix the cause, not the symptom

A symptom fix places a guard where the bad value appears. A cause fix removes the reason it appears.

| Symptom fix | Cause fix |
|---|---|
| Clamp the negative value | Find why the value went negative |
| Catch and ignore the error | Find why the error occurs |
| Add a retry | Find why the first call fails |
| Widen the tolerance | Find the unit or precision error |
| `if (x != null)` everywhere | Fix the thing that produced null |
| Delete the failing test | Fix the code |
| `--no-verify`, `--force` | Fix what the check caught |

A symptom fix is acceptable only when the cause is genuinely out of scope, and then it must be labelled as a workaround with the cause recorded.

## Do not break things to make the problem go away

- Do not delete a lock file without finding the process holding it.
- Do not discard unfamiliar files that may be in-progress work.
- Do not bypass a check whose failure you have not understood. If a check is wrong, say why; do not silence it.
- Do not "fix" a test by changing its expectation.

## Root-cause reporting

A diagnosis is complete when it answers:

1. **What** is wrong — the exact line or condition.
2. **Why** it produces this symptom — the mechanism.
3. **When** it started — the change or condition that introduced it, if determinable.
4. **What else** it affects — other call sites, other inputs.
5. **The fix**, and whether it is a cause fix or a workaround.

"A null check fixed it" is not a diagnosis. "The cache stores a timestamp in seconds while the comparison expects milliseconds, so any entry older than ~24 days is treated as fresh" is.

## Checklist

- [ ] I reproduced the failure before changing anything.
- [ ] I identified the first error, not the last.
- [ ] Each iteration changed one variable.
- [ ] I have a mechanism, not just a correlation.
- [ ] The fix addresses the cause, or is labelled a workaround.
- [ ] The reproduction now passes and nothing else broke.
- [ ] I said what I could not determine.
