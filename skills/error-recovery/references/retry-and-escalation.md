# Retry and Escalation

## The comparison rule

After every retry, **compare the new error to the old one**.

| Comparison | Meaning | Action |
|---|---|---|
| Different error, further along | Progress | Continue on the same strategy |
| Different error, earlier | The change broke something | Revert the change |
| Identical error, identical output | The change was irrelevant | Change the *approach*, not the parameter |
| Empty output, unchanged status | The command did not run as expected | Check invocation, not the target |

Identical output after a changed input is the strongest possible signal that you changed the wrong variable. It is also the signal a weak model most reliably ignores.

## Attempt budget

- **Attempt 1** — fix the obvious local cause, re-run the smallest check.
- **Attempt 2** — the error should be different. If it is, continue. If it is not, stop tuning parameters.
- **Attempt 3** — change one of: tool, approach, abstraction level, test method, data source, or order of operations. Not a value inside the current approach.
- **After 3** — if the error is still identical, the hypothesis is wrong. Re-derive the cause from evidence rather than trying another variant.

Three attempts with the same output is a diagnosis problem, not a persistence problem.

## Changing the approach, not the parameter

| Parameter tuning (weak) | Approach change (strong) |
|---|---|
| Try another timeout value | Find out what the process is actually waiting on |
| Try another regex | Read what the input actually contains |
| Try another port | Check what the process binds to and why |
| Retry the request | Check whether the first request partially succeeded |
| Try a different flag | Read the tool's output, not its help text |
| Try again with a bigger buffer | Find out where the truncation actually occurs |

## The anti-loop rule

Never run the same failing command repeatedly expecting a different result. If a command is nondeterministic, make that explicit and bound the retries with a backoff — do not silently repeat it.

When a timeout fires, a retry is not the response. A timeout is a signal that the command hung. Switch to a stepped diagnosis: check whether the output file is still growing, narrow to one input, run the cheapest part first, add verbose output to find where it stalls.

## Escalation ladder

Escalate — in this order — when local diagnosis stops producing new information:

1. **Narrow the input.** One file instead of a directory; one case instead of a suite.
2. **Get more output.** Verbose flags, staged printing, logging at each boundary.
3. **Reduce to a minimal reproduction.** Strip everything not needed to trigger it.
4. **Change the tool** for the same job (different parser, different build path, different client).
5. **Search for the exact error text.** Someone has usually hit it; check whether the answer applies to your version.
6. **Report the blocker** with the evidence gathered.

Each rung produces information. Do not skip to rung 6 without at least reaching rung 3, and do not stay on rungs 1-2 forever.

## Bounded probes

When a command has already hung or failed ambiguously, each probe should be small, separately timed, and change exactly one thing. Before adding anything, measure the **baseline** — how long does the unmodified input take? Without a baseline you cannot distinguish "this is slow" from "I made it slow".

Separate two questions worth asking independently:

- Is the problem the input, or the work done on the input? (Add only the new piece, paired with a deliberately trivial failing assertion.)
- Is it this instance, or the general form? (Swap the suspect for a variable.)

Finally, write a one-line reproduction: a single command someone else can paste to see the same failure. That is the artifact of a successful diagnosis.

## Stop condition

Stop retrying and switch to a blocked state when:

- two attempts produced the identical error;
- further progress needs information or access you do not have;
- the next useful experiment would change something outside the requested scope;
- you would have to guess a value that materially changes the outcome.

## Checklist

- [ ] I compared the new error to the previous one before retrying.
- [ ] Identical output led to an approach change, not a parameter change.
- [ ] I have not exceeded three attempts on one strategy.
- [ ] Any nondeterministic retry is bounded and labelled.
- [ ] A timeout triggered diagnosis, not a retry.
- [ ] I have a one-line reproduction, or a stated reason I could not produce one.
