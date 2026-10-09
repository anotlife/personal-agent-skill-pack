# Review Mindset

## What a review is

A review is a **list of problems**, ordered by severity, each with a location and a consequence. It is not a summary, not a compliment sandwich, and not a restatement of what the code does.

The author already knows what the code does. They do not know what is wrong with it.

## Procedure

1. **Establish the intent.** What was this change supposed to accomplish? Without it, you cannot tell a bug from a design choice. Read the commit message, the PR description, the issue, or ask.
2. **Read the whole change first, without commenting.** Comments made during a first pass are usually about style.
3. **Re-read for correctness.** Inputs, boundaries, error paths, concurrency, state, and cleanup.
4. **Check the tests.** Do they cover the change? Do they assert behaviour or implementation?
5. **Check the interactions.** Callers, callees, serialization, schema, config, migrations.
6. **Check the security surface.** Input validation, authorisation, injection, secrets.
7. **Order the findings by severity.**
8. **State what you did not examine.**

## Severity model

| Severity | Definition | Examples |
|---|---|---|
| **Critical** | Data loss, security hole, corruption, or wrong results under normal use | SQL injection, an off-by-one that drops records, an unhandled null on a common path |
| **Major** | Wrong behaviour in a plausible case, or a missing boundary check | No validation on user input, a race on shared state, an error path that silently succeeds |
| **Minor** | Correct but fragile, unclear, or inconsistent | A misleading name, duplicated logic, a missing test for an error path |
| **Nit** | Preference | Formatting, an alternative phrasing |

Do not inflate a nit into a major to seem thorough, and do not bury a critical under ten minors.

## What to look for, by category

### Correctness
- Off-by-one and boundary conditions (empty, one, many, exactly-at-limit).
- Null, undefined, absent, and empty-string handling.
- Integer overflow, floating-point comparison, rounding.
- Units and scale.
- Ordering assumptions and non-determinism.
- Concurrency: shared mutable state, check-then-act, missing locks.

### Failure
- Errors swallowed, logged and ignored, or converted into a success.
- Retries on non-idempotent operations.
- Resource leaks (files, connections, locks) on the error path.
- Partial failure leaving inconsistent state.
- Timeouts with no fallback.

### Interfaces
- A changed signature with unupdated callers.
- A changed schema with no migration.
- A changed serialization with no version handling.
- Behaviour changed under an unchanged name.

### Tests
- The change has no test for its new behaviour.
- A test asserts implementation detail rather than behaviour.
- A test that would pass even if the change were reverted.
- Mocks that replace the thing under test.
- A test whose expected value was copied from the output.

### Security
- User input reaching a query, a shell, a path, or HTML unescaped.
- Authorisation checked on the client only.
- A secret in the diff.
- A permissive default.

### Maintainability
- A name that misleads.
- A duplication that will drift.
- An abstraction with one use site.
- Dead code left behind.
- A comment that will be wrong soon.

## Rules of delivery

- **Findings first**, then open questions, then residual risk.
- **Keep lists flat.** No sub-bullets under a finding.
- **One finding per issue.** Do not bundle three problems into one paragraph.
- **Name the location.** `file.ts:41`.
- **Name the consequence.** What breaks, when, and for whom.
- **Do not propose a rewrite** unless asked. Point at the problem; suggest the fix where it clarifies.
- **Label preference as preference.** "I would name this `retryCount` (style, not correctness)."
- **Do not review the person.** No "you forgot", no "this is sloppy". State the issue.
- **Praise sparingly and specifically**, if at all. "The retry logic correctly handles the idempotency case" is useful; "nice work!" is not.

## If you find nothing

Say so explicitly, and then say what you did not cover:

> No findings. I reviewed `parser.ts` and `parser.test.ts` for correctness and error handling. I did not examine the concurrency behaviour under load, or the interaction with the cache layer.

This is a stronger result than a vague approval, and it tells the author where the remaining risk is.

## What a review does not prove

A passing review is not proof of correctness. It is evidence that one reader, at one time, with one mental model, did not find a problem. State that limit when the stakes are high.

## Checklist

- [ ] I established the intent before judging the implementation.
- [ ] Findings come first, ordered by severity.
- [ ] Every finding has a location and a consequence.
- [ ] Lists are flat.
- [ ] Style opinions are labelled as opinions.
- [ ] If there were no findings, I said so and named the residual risk.
- [ ] I stated what I did not examine.
