# Testing Judgement

## When to add a test

Add a test when the user asks, or when the change fixes a subtle bug or protects a behavioural boundary that existing tests do not already cover.

Do **not** add tests for:

- a helper, a simple predicate, or glue code;
- behaviour already enforced by the type system;
- behaviour already covered indirectly by an integration test;
- a one-line change where the type checker is the check;
- a function you just wrote to satisfy the test you are about to write.

When you do add tests, prefer **one high-leverage regression test at the highest relevant layer** over a set of unit tests that mirror the implementation's structure.

## Match the test you did not write

Before adding any test, find an existing one for a similar behaviour and follow its shape: framework, file location, naming, fixture style, assertion style, and how it sets up state and tears it down.

If the project's instruction file names a test command, use that command. If you cannot find it, ask once, and offer to record it in the instruction file.

## What to test

| Target | Right level |
|---|---|
| A bug fix | The exact failing input, as a regression test |
| A new feature | The behaviour the user described, end to end where feasible |
| A cross-module contract | An integration test at the contract boundary |
| Numeric or serialisation logic | A property or round-trip test, plus a known-good fixture |
| An error path | That it fails, with a clear error |
| A pure helper | Usually nothing, unless it is subtly wrong |

## Do not fake a pass

Never:

- Change an expected value to match observed output without investigating why they differ.
- Hard-code an expected result, add a special case, or add a branch that only the test triggers.
- Skip, disable, or delete a failing test to get a green run.
- Mock the thing under test so thoroughly that the test only exercises the mock.
- Assert on an implementation detail (a method was called) where the behaviour is what matters.
- Widen a tolerance until the test passes.

Write correct code and let the tests pass as a consequence. A test that passes for the wrong reason is worse than no test, because it converts an unknown into a false certainty.

## Mock boundaries, not subjects

Mock or fake things that are:

- slow (network, disk, external service);
- nondeterministic (clock, randomness);
- destructive (real payments, real emails);
- unavailable in the test environment.

Do not mock:

- the module you are testing;
- pure functions and data structures;
- anything whose real behaviour is cheap and is what you actually want to verify.

A test whose every dependency is mocked verifies that the wiring matches your assumptions — not that the code works.

## Determinism

- Seed randomness explicitly.
- Do not depend on wall-clock time, locale, timezone, or filesystem ordering.
- Do not depend on the order in which tests run, or on state left by another test.
- Do not depend on the network.
- Clean up temp files and processes.

A flaky test is a defect. If a test is flaky and you did not cause it, report it rather than retrying until it passes.

## The bug-fix sequence

1. Reproduce the failure with a test or a minimal script **before** fixing it.
2. Confirm the reproduction fails for the reason you think it does.
3. Fix the code.
4. Confirm the reproduction now passes.
5. Confirm the rest of the suite still passes.

Step 1 is what makes the fix a fix rather than a change.

## Reporting

State the command and the outcome. Not "tests pass", but "`pytest tests/parser` — 34 passed". If you did not run them, say so. If they failed, quote the failure and say what it means. If a test failed for an unrelated pre-existing reason, say that and do not fix it silently.

## Checklist

- [ ] The test is at the right level for what it verifies.
- [ ] It follows the project's existing test style.
- [ ] It fails before the fix and passes after.
- [ ] The assertion checks behaviour, not implementation detail.
- [ ] No mock replaced the thing under test.
- [ ] The test is deterministic.
- [ ] The command and its result are reported honestly.
