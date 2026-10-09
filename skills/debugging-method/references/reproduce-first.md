# Reproduce First

## Why

A bug you can make happen on demand is a bug you can verify you fixed. A bug you cannot reproduce is a bug you can only guess about — and a guess that appears to work is indistinguishable from no fix at all.

The reproduction is also the deliverable of the first phase: it is what you hand to the next person, and what protects the fix from regressing.

## The reproduction record

Write these down before changing anything:

```
Command:   <the exact command, with arguments and working directory>
Input:     <the exact input, or a path to it>
Expected:  <what should happen>
Actual:    <the exact output or error, verbatim>
Frequency: <always / intermittent, N of M runs>
```

The verbatim output matters. A paraphrase loses the string you will later grep for.

## Minimise the reproduction

Strip everything not required to trigger it:

1. Reduce the input to the smallest failing case.
2. Remove unrelated configuration, steps, and dependencies.
3. Confirm it still fails after each removal.
4. Confirm it passes with the suspect element removed (the two-sided test).

A minimal reproduction is worth more than a description, because it is executable and unambiguous. When you reach the end, you should have a one-line command someone else can paste.

## Confirm the mechanism

Failing for the right reason is not the same as failing.

- Does it fail because of the bug you suspect, or because of a typo in your reproduction?
- Does the failure message correspond to the code path you think is running?
- Does it fail on the original input too, not just your reduction?

A reproduction that fails for a different reason will produce a fix that does not fix anything.

## Intermittent failures

For a bug that does not reproduce reliably:

- Run it N times and record the frequency. "3 of 20" is data.
- Look for shared state, ordering, timing, concurrency, randomness, and clock dependence.
- Check whether the environment matters: locale, timezone, filesystem case-sensitivity, available memory, network latency.
- Try to raise the failure rate: more iterations, larger input, more concurrency, slower I/O. A 1-in-100 bug that becomes 1-in-3 is a tractable bug.
- Do not "fix" an intermittent bug by adding a retry before you know what varies.

## Environment failures

Distinguish these three, and say which one you have:

| Kind | Evidence |
|---|---|
| **Reproducible bug** | Fails on a clean checkout, on another machine |
| **Environment problem** | Fails here, passes on a clean environment; a tool, version, or path differs |
| **Pre-existing failure** | Fails before your change; unrelated to the task |

Never report a pre-existing failure as caused by your change, and never report an environment problem as a code bug without evidence. Conversely, never dismiss a real bug as "just the environment".

## When you cannot reproduce

Say so explicitly, and say what you tried. Then either:

- gather more evidence from the environment where it does occur;
- add logging or assertions that will capture the state next time it happens;
- report the blocker rather than patching blind.

Patching blind is the failure mode: a change that "might help" cannot be evaluated, and it is indistinguishable from having done nothing.

## Checklist

- [ ] I can make the bug happen on demand, or I know the frequency.
- [ ] The reproduction record names command, input, expected, actual verbatim.
- [ ] The reproduction is minimal, and removing the suspect makes it pass.
- [ ] It fails for the mechanism I suspect.
- [ ] I know whether it is a bug, an environment problem, or pre-existing.
- [ ] If I could not reproduce it, I said so rather than patching blind.
