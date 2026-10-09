# Hypothesis Loop

## The loop

```
observe → hypothesise → predict → test one variable → compare → repeat
```

Each iteration must produce information. If an iteration produced none, the hypothesis was untestable — write a prediction that could be false.

## Write the prediction before the test

A hypothesis without a prediction is a hunch. Before running anything, write:

> If the cause is X, then Y should be observed when I do Z.

If you cannot complete that sentence, you do not have a testable hypothesis. Reformulate until you can.

Example:

> If the cache stores seconds but compares milliseconds, then an entry with a TTL of 60 should be treated as expired immediately, and logging the stored value should show `60` where `60000` is expected.

That prediction can fail. A hypothesis that cannot fail is not doing work.

## One variable per iteration

Change one thing and re-measure. Two simultaneous changes make the result unattributable, and you will spend the next iteration working out which one mattered.

If two changes genuinely must move together, treat them as one variable and say so.

## Compare the new observation to the old one

| Comparison | Meaning |
|---|---|
| New error, further along | Progress — keep the strategy |
| New error, earlier | You broke something — revert |
| Identical output after a changed input | You changed the wrong variable |
| No output, unchanged status | The command did not run as expected |

Identical output after a deliberate change is the strongest signal in debugging. It means your model of the code is wrong somewhere upstream, not that the fix needs a different value.

## Bisection

When the cause is unclear and you have a good state and a bad state, bisect:

| Axis | Method |
|---|---|
| History | Find the commit where behaviour changed (`git bisect`, or manual halving) |
| Input | Halve the failing input until the trigger is minimal |
| Code path | Disable or stub halves of the pipeline to see which carries the symptom |
| Configuration | Revert settings in groups |
| Data | Filter the dataset in halves |

Binary search converts an unbounded search into a logarithmic one. It is usually faster than reading the code, especially in an unfamiliar codebase.

## Differential debugging

The most powerful question is often: *what is different about the case that fails?*

- The failing input versus a passing input.
- The failing environment versus the working one.
- The failing path versus the working path.
- The version that worked versus the version that does not.

Build a table of differences, then test them in order of plausibility. This is faster than reading code hoping to spot the bug.

## Avoiding rabbit holes

- If you have spent several iterations without progress, the hypothesis space is probably wrong. Step back: what do you actually know for certain?
- Re-read the original error. Debugging often drifts to a nearby, easier problem.
- Check the cheap facts you assumed: the version actually running, the file actually loaded, the branch actually checked out, the config actually read.
- If you are exploring rather than testing, you are not debugging. Write a prediction.
- If you have been stuck for a long time on the same approach, change one of: the tool, the abstraction level, the input, or the question.

## Escalation

When local diagnosis stops producing information:

1. Narrow the input further.
2. Get more output (see `instrumentation.md`).
3. Reduce to a minimal reproduction.
4. Change the tool or the approach.
5. Search for the exact error text.
6. Report the blocker with the evidence gathered.

Do not skip to 6 before 3, and do not loop on 1-2.

## Checklist

- [ ] I wrote a falsifiable prediction before each test.
- [ ] Each iteration changed exactly one variable.
- [ ] I compared the new observation to the previous one.
- [ ] Identical output after a change led me to question my model, not my value.
- [ ] I reached for bisection or differential debugging before reading widely.
- [ ] I know which facts I have checked cheaply and which I assumed.
