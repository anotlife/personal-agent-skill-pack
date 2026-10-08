# Anti-Premature-Completion Checklist

Before saying done, answer in order:

1. What exact property did the user ask for?
2. What evidence would prove that property?
3. Did I actually obtain that evidence?
4. Is the evidence independent enough?
5. Did any check fail or get skipped?
6. Am I using “fixed” where the evidence only shows “attempted”?

If any answer is unclear, downgrade the claim.

## Common trap

“Command exited successfully” proves only that the command completed with a zero exit code. It does not necessarily prove the intended state.

## Final response pattern

- Result: what is now true.
- Verification: how it was checked.
- Caveat: what was not checked or remains uncertain.
