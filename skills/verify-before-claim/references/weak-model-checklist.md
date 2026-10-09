# Anti-Premature-Completion Checklist

Run this before saying done. Answer in order, in writing if the task is large.

1. What exact property did the user ask for?
2. What evidence would prove that property?
3. Did I actually obtain that evidence?
4. Is the evidence independent enough to fail for the right reason?
5. Did any check fail, error, or get skipped?
6. Am I using "fixed" where the evidence only shows "attempted"?

If any answer is unclear, **downgrade the claim** rather than the checklist.

## Common traps

| Trap | What it actually proves |
|---|---|
| "Command exited successfully" | The command completed with exit code 0 — not the intended state |
| "The linter passed" | Style and some statics — not behavior |
| "It compiled" | Syntax and types — not semantics |
| "I read the file and it looks right" | Existence and appearance — not that anything runs |
| "The test file exists" | A file exists — not that the test was executed |
| "My earlier analysis covered this" | Nothing new was verified |
| "The code path is obviously correct" | Nothing was verified |

## Verification levels and their ceiling

| Level | Establishes | Does not establish |
|---|---|---|
| Inspect | State on disk right now | Behavior |
| Execute | It ran once, here | It runs under other inputs |
| Test | Named cases | Unnamed cases |
| Independent oracle | Correctness against another route | Absence of unknown unknowns |

## Final response pattern

Use three short lines. Do not pad them.

- **Result** — what is now true.
- **Verification** — how it was checked, with the exact command or evidence.
- **Caveat** — what was not checked, what remains uncertain, what is assumed.

## Language to delete from your draft

Before sending, search the answer for these and repair each one:

- "should work", "ought to", "probably fine" attached to a completion claim → replace with the actual evidence, or with "unverified".
- "all tests pass" without a command and a result → replace with the command and its outcome.
- "done" where the work is partial → replace with what is done and what is not.
- "I verified" without naming how → name the check.
- A number with no source → add the source or delete the number.

## Checklist

- [ ] The claim's strength matches the level I actually reached.
- [ ] Every completion word is backed by a named check.
- [ ] Skipped and errored checks are disclosed, not absorbed.
- [ ] The caveat line is present and honest, even when the news is good.
