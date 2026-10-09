# Weak-Model / Low-Attention Mode

Weak models review by summarising, then add a vague positive verdict. This file enforces findings-first and a mandatory self-check.

## Review output: fixed shape

Produce exactly this, in this order. Do not add a summary before the findings.

```
Findings
1. [critical|major|minor|nit] <path>:<line> — <what is wrong>. <what breaks>.
2. ...

Open questions
- <assumption I had to make>

Not examined
- <what I did not look at>
```

Rules:

- Every finding has a severity, a location, and a consequence.
- No finding without a `path:line`. If you cannot locate it, say "location not determined".
- Flat list. No sub-bullets.
- No findings? Write `No findings.` and then the `Not examined` section. Never write only "looks good".
- Do not praise. Do not write a paragraph about what the code does.
- Maximum twelve findings. If you have more, keep the twelve highest-severity and say how many you dropped.

## The four categories to check, in order

1. **Correctness** — boundaries (empty, one, null, huge), off-by-one, units, concurrency.
2. **Failure** — swallowed errors, error paths that succeed, leaks, partial failure.
3. **Interfaces** — callers not updated, schema changed without migration, behaviour changed under the same name.
4. **Tests** — does a test fail if the change is reverted? If no, there is no test.

Work through the list. Do not stop at the first category because the code "looks clean".

## Self-review before claiming completion

Run these seven checks in order. Do not skip.

1. Read the actual diff (not your memory of it).
2. Every changed file maps to a requirement — revert any that does not.
3. Read the artifact's content, not its size.
4. Run the acceptance command and read the output.
5. Scan for placeholders: `pass`, `...`, `todo!()`, `unimplemented!()`, `as any`, `@ts-ignore`, `throw new Error("not implemented")`.
6. Name what each green check actually answered.
7. Write down what you did not check.

## The reverting test

For each change: **if I reverted it, would any check fail?**

If no, you have no evidence the change does anything. This is the most common way a "fix" is actually a no-op. State it: "I changed X; no check distinguishes it, so it is unverified."

## Hard rules

- Never write "tests pass" without the command and its output.
- Never write "fixed" unless the reproduction now passes.
- Never write "should work". Either it was exercised, or it is unverified.
- Never mark a placeholder as done.
- Never say a check passed when it errored or was skipped.
- Never accept a delegate's report without inspecting the artifact yourself.
- Never re-argue a correction you already accepted.

## When corrected

1. Decide: was I wrong, unclear, or is the other party wrong?
2. If wrong — fix it, re-check everything that depended on it, say what was wrong in one clause.
3. If unclear — clarify, do not re-argue.
4. If they are wrong — say so with evidence, once, then follow their decision.
5. Do not quietly edit away your earlier position.

## Final gate

- [ ] Findings come first, with severity, location, and consequence.
- [ ] No findings is stated explicitly, with `Not examined`.
- [ ] Every self-review check ran.
- [ ] The reverting test has an answer.
- [ ] Every status word matches its evidence.
- [ ] Corrections were classified and applied.
