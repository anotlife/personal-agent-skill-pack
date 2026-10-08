---
name: verify-before-claim
description: Use when implementing, editing, debugging, generating files, analyzing data, running commands, or otherwise claiming that something works, matches, or is complete. Prevents attempted = successful reasoning.
---

# Verify Before Claim

## Progressive loading
1. Use the ladder below for every completion claim.
2. For exactness-sensitive work, read `references/independent-oracles.md`.
3. For generated files or data, read the matching section in `references/artifact-and-data-checks.md`.
4. If the model is prone to premature “done” claims, also read `references/weak-model-checklist.md`.

## Verification ladder
Choose the cheapest level that can actually establish the requested property:

1. **Inspect** relevant state/artifact.
2. **Execute** the affected path when behavior matters.
3. **Test** important success/failure cases.
4. **Compare** against an independent oracle when exactness matters.
5. **Report** observed result plus remaining uncertainty.

## Independence rule
A check that shares the same hidden assumption as the implementation can confirm the wrong thing. Prefer a different path when the distinction matters.

## Claim language
- **verified** = requested property directly checked and passed.
- **partially verified** = important checks passed but coverage is incomplete.
- **unverified** = insufficient evidence.
- **blocked** = required verification could not be performed.

Never say “fixed”, “works”, “matches”, or “all tests pass” unless the evidence supports that exact statement.

## Final gate
Record what was checked, how it was checked, result, skipped checks, and residual uncertainty.
