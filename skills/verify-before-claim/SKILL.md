---
name: verify-before-claim
description: Use when implementing, editing, debugging, generating files, analyzing data, running commands, or otherwise claiming that something works, matches, or is complete. Prevents attempted = successful reasoning.
---

# Verify Before Claim

## Progressive loading

1. Use the ladder and claim language below for every completion claim.
2. For exactness-sensitive work, read `references/independent-oracles.md`.
3. For generated files, conversions, data, documents, or UI, read `references/artifact-and-data-checks.md`.
4. Before trusting any green check, read `references/checks-that-pass-for-the-wrong-reason.md`.
5. If the model claims success too early, also read `references/weak-model-checklist.md`.

## Verification ladder

Choose the cheapest level that can actually establish the requested property:

1. **Inspect** relevant state or artifact.
2. **Execute** the affected path when behavior matters.
3. **Test** the important success and failure cases.
4. **Compare** against an independent oracle when exactness matters.
5. **Report** the observed result plus remaining uncertainty.

Stopping at level 1 and reporting level 3 is the single most common verification failure. Name the level you actually reached.

## Scale verification to blast radius

A typo fix needs nothing. A localized change needs one targeted check. A change to shared behavior, a cross-module contract, or a user-facing path needs broader coverage. Before running anything, choose the narrowest check that would change your confidence, and broaden only when the narrow check leaves meaningful uncertainty.

For explanation, investigation, or read-only tasks, skip verification of the output and verify the *evidence* instead.

## Independence rule

A check that shares the implementation's hidden assumption can confirm the wrong thing. Reuse of the same helper, the same parser, or the same in-memory value on both sides of a comparison is not a test. Prefer a materially different path when the distinction matters.

## Report outcomes honestly

- Never claim tests pass when output shows failures.
- Never suppress, skip, or weaken a failing check to manufacture a green result.
- Never hard-code an expected value, special-case an input, or add a shim so a test passes. Write correct code and let the test pass as a consequence.
- Never describe incomplete or partial work as done.
- If you could not verify, say so explicitly and name the obstacle.

## Claim language

| Word | Requires |
|---|---|
| **verified** | the requested property was directly checked and passed |
| **partially verified** | important checks passed, coverage incomplete |
| **unverified** | insufficient evidence |
| **blocked** | the required verification could not be performed |

Never say "fixed", "works", "matches", or "all tests pass" unless the evidence supports that exact statement.

## Final gate

Record in the answer: what was checked, how, the result, what was skipped, and the residual uncertainty. If the user asked whether something works, a truthful "I could not verify it because X" outranks a confident guess.
