# Weak-Model / Low-Attention Mode

Weak models fail at error recovery in two specific ways: they retry identical attempts, and they convert failures into plausible-looking successes. This file caps both.

## The attempt ledger

Before starting, set a counter at 0. For every attempt, write one line:

```
#N | command | error text (first 10 words) | changed from #N-1
```

When attempt N's error text matches attempt N-1's, **stop tuning parameters**. The rule is absolute:

- Identical error, identical input → you changed the wrong variable. Change the approach.
- Different error → progress. Continue.
- No error but no expected output → the command did not do what you think. Check the invocation.

Three attempts with the identical error is the hard limit. At that point, either escalate to a minimal reproduction, or report blocked. Do not attempt a fourth parameter change.

## Missing-information gate

Before any attempt, ask: *does this attempt require a value, file, credential, or authorization I do not have?*

If yes, do not proceed and do not guess. Go straight to the blocked report:

> Blocked on: EXACT THING. Tried: STEPS. Why it stops: CONSTRAINT. To unblock: SMALLEST ACTION.

## The honesty gate

Before writing any status word, check the table.

| You wrote | Allowed only if |
|---|---|
| "fixed" | something exercised the fix and it passed |
| "works" | the user-visible path was run |
| "passes" | the command was run and its output read |
| "should work" | never — replace with "unverified because X" |
| "done" | every requested part is verified, not just attempted |

If nothing was verified, the only permitted status is `blocked` or `unverified`.

## Forbidden moves

- Editing a test's expected value so it passes.
- Skipping, disabling, or deleting a failing check.
- `--no-verify`, `--force`, or any flag whose purpose is to bypass a check.
- Deleting a lock file, cache, or unfamiliar file to make an error go away.
- Re-running the same command and hoping.
- Reporting a workaround as a fix.
- Producing a partial result and labelling it complete.
- Leaving a placeholder (`pass`, `TODO`, `unimplemented!()`, `throw new Error("not implemented")`) in place of working code.

## Escalation ladder (in order)

1. Narrow the input to one case.
2. Get more output.
3. Reduce to a minimal reproduction.
4. Change the tool.
5. Search the exact error text.
6. Report blocked with the evidence.

Do not jump to 6 before 3. Do not stay at 1-2 past three attempts.

## Final gate

- [ ] I kept the attempt ledger and compared consecutive errors.
- [ ] No more than three attempts with identical output.
- [ ] No check was suppressed, skipped, or weakened.
- [ ] No placeholder stands where working code was promised.
- [ ] Every status word matches its evidence.
- [ ] If incomplete, the report names the blocker and the smallest next step.
