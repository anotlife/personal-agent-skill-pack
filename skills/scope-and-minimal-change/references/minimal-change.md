# Minimal Change, Properly Defined

## Definition

**The smallest repository-native change that fully satisfies the requirement.**

Two failure modes, in opposite directions:

- **Over-change** — a rewrite where a two-line fix was asked for. Adds review burden, risk, and diff noise.
- **Under-change** — a tiny patch that leaves the requested behavior broken. Cheap to write, expensive to discover.

"Minimal" forbids both. It is a claim about the *shape* of the change, not its size.

## Prefer

- Existing helpers, utilities, and abstractions in the repo.
- A local fix over a broad rewrite.
- The project's established commands, test framework, and configuration mechanisms.
- Following the naming, error-handling, I/O, and typing style of the surrounding code.
- Changes that preserve surrounding behavior exactly.

## Avoid

| Anti-pattern | Why it is out of bounds |
|---|---|
| Speculative refactor | Not requested; increases blast radius |
| Renaming unrelated symbols | Diff noise; breaks reviewers' mental model |
| New abstraction for one use site | "Three similar lines is better than a premature abstraction" |
| Framework introduced for a local problem | Massive dependency; not requested |
| Cleanup that cannot be tied to the result | Scope creep wearing a quality badge |
| Changing a test's expectation to match broken output | Manufactures a green result |
| Formatting-only churn across a file | Hides the real change in the diff |
| Backwards-compatibility shim for unreleased code | Dead weight; the old shape was a draft |

## Do not add what the task does not need

- No new features, configurability, or options beyond the request.
- No error handling, fallbacks, or validation for scenarios that cannot happen. Trust internal code and framework guarantees; validate only at system boundaries (user input, external APIs).
- No helper, wrapper, or utility for a one-time operation.
- No defensive branch for an impossible internal state.
- No comment explaining what well-named code already says.
- No "just in case" alternative implementation.

## Do not remove what the task does not require

- Do not delete code because it looks unused without checking that it is unused.
- Do not remove a public symbol, config key, or persisted field because it is unreferenced in the files you read.
- Do not downgrade or remove a dependency as a side effect.
- Do not delete tests that fail for unrelated reasons; report them instead.

## Completeness test

Before stopping, ask: *is the requested behavior now actually correct, for the inputs the user named and the obvious adjacent ones?* If not, the patch is incomplete, not minimal.

Then stop. Do not continue improving something that is now correct.

## Duplication judgement

Accept a small amount of duplication over a speculative abstraction. Extract a helper only when it is:

- used more than once, or
- hides real complexity, or
- names a genuine domain concept.

If the existing helper is not shared with consumers that need different behaviour, change the source of truth directly rather than layering a one-off override on top.

## Checklist

- [ ] Every changed line is required by the request or by correctness.
- [ ] I reused existing project patterns rather than inventing a style.
- [ ] No new abstraction exists with a single use site.
- [ ] No defensive code exists for an impossible state.
- [ ] No back-compat shim exists for code that was never released.
- [ ] The requested behavior actually works — verified, not assumed.
