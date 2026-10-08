---
name: verify-before-claim
description: Use when implementing, editing, debugging, generating files, analyzing data, running commands, or otherwise claiming that something works, matches, or is complete. Prevents "attempted = successful" reasoning.
---

# Verify Before Claim

## Objective

Only claim the property that the available evidence actually establishes.

## Verification ladder

Choose the cheapest level that can genuinely prove the requested property, escalating when necessary:

1. **Inspect** the relevant state or artifact.
2. **Execute** the relevant path when behavior matters.
3. **Test** the important success and failure cases.
4. **Compare** against an independent oracle when exactness matters: repository tests, a golden file, a trusted reference, a second implementation, a known value, or a falsifiable prediction.
5. **Report** exact outcomes and remaining uncertainty.

## Independence rule

A check built from the same assumption as the thing being tested is weak evidence.

Examples:

- A script that reproduces its own hard-coded expected output is not an independent oracle.
- A test that shares the same buggy helper as the implementation may miss the bug.
- Re-reading a file you just wrote proves existence, not correctness.

Prefer evidence from a different path whenever the distinction matters.

## Scope-aware verification

Verify what the user actually asked to work.

- Small text edit: inspect the final text.
- Code bug fix: run the relevant path and tests.
- Data analysis: reproduce the key result and check basic invariants.
- File conversion: inspect the generated file and, where practical, open/parse it with an independent reader.
- Exact reimplementation: compare the whole relevant output, not just a sampled subset.

## Completion language

Use precise status labels:

- **verified**: the requested property was directly checked and passed.
- **partially verified**: some important properties were checked, others were not.
- **unverified**: there is not enough evidence.
- **blocked**: a required check could not be performed.

Do not write "works", "fixed", "all tests pass", or equivalent unless the evidence supports that exact claim.

## Verification report

When verification is material, include:

- what was checked
- how it was checked
- observed result
- failures or skipped checks
- what remains uncertain
