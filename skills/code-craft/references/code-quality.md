# Code Quality

## The governing judgement

**The right amount of complexity is the minimum needed for the current task.** Not the minimum that could ever be needed, and not the amount that makes the code feel complete.

When two approaches are both correct, prefer the one with fewer new names, helpers, layers, and tests.

## Do not add

### Speculative abstraction

- A helper, utility, or base class with one use site.
- A layer that exists only to separate two things that will never change independently.
- A parameter, flag, or config key the user did not ask for.
- An interface with a single implementation, added "for testability".
- A generic solution to a specific problem.

Extract a helper only when it is reused, hides real complexity, or names a genuine domain concept. **A small amount of duplication is better than a premature abstraction.** Three similar lines beat a shared function with a `mode` parameter.

### Defensive code for impossible states

- Error handling for conditions internal code cannot produce.
- Fallbacks for failures the framework guarantees will not happen.
- Validation of values that a type already constrains.
- `null` checks on values that cannot be null.
- try/catch around code that cannot throw.

Trust internal code and framework guarantees. **Validate only at system boundaries**: user input, file contents, network responses, environment variables, and anything else you did not create.

### Backwards-compatibility shims

- Re-exporting a type "so nothing breaks" when nothing outside this change uses it.
- Keeping an old function signature alongside the new one.
- Renaming an unused variable to `_unused` instead of deleting it.
- An adapter for an old format that only exists in unreleased code.
- `// removed` comments where code used to be.

If something is certainly unused, delete it completely. Earlier unreleased shapes in the same thread are drafts, not contracts. Preserve an old format only when it already exists outside the current edit — persisted data, shipped behaviour, external consumers, or an explicit user requirement. If unclear, ask one short question instead of adding speculative compatibility.

### Composition of the unnecessary

- Configuration for behaviour that has one setting.
- A wrapper that only forwards its arguments.
- An event system for a single synchronous call.
- A plugin architecture for a two-case branch.

## Do delete

- Code you are certain is unused.
- A helper that became redundant when you inlined it.
- Debug scaffolding you added while working.
- A flag you added and then did not need.
- A comment that restates the code.
- Imports you made redundant.

## Error handling philosophy

| Situation | Correct handling |
|---|---|
| Internal call between your own components | Do not handle; let it fail loudly |
| User input | Validate and return a clear error |
| External API response | Treat as untrusted; handle malformed data |
| Network or filesystem operation | Handle the realistic failure (timeout, missing file) |
| A condition the type system excludes | Do not handle |
| A bug in someone else's library | Do not paper over it; surface it |

An empty `catch` block is always wrong unless the discarded error is genuinely expected and mentioned in a comment.

## Suppressing errors

Never, in final code:

- `as any`, `@ts-ignore`, `@ts-expect-error` in TypeScript.
- `# type: ignore`, `# noqa` in Python.
- `@SuppressWarnings` in Java, `#[allow(...)]` in Rust.
- Disabling a lint rule in a config to make a warning vanish.
- Deleting a failing assertion.

Use an idiomatic narrow construct instead: a type guard, a runtime check at the boundary, an explicit enum, a `let` with a validating constructor. Suppression hides exactly the information the tool was built to give you. If the user explicitly asks for a suppression, add it with a comment naming the reason.

## Naming

- Match the surrounding convention exactly: `camelCase` vs `snake_case`, plural vs singular collections, verb-first function names, `is`/`has` prefix for booleans.
- Names describe what the thing **is** or **does**, not where it came from or why it exists. Avoid `newThing`, `tempData`, `handleDataFromIssue123`.
- Do not rename symbols the task did not require renaming. Renames are diff noise and destroy the reviewer's mental model.
- Abbreviations: match the local convention. Do not introduce a new abbreviation scheme.
- A name that needs a comment to be understood is the wrong name.

## Style and layout

- Match indentation, quoting, trailing commas, and line width of the file.
- Do not reformat lines you did not otherwise change. Formatting churn hides the real diff.
- Prefer ASCII. Only introduce non-ASCII when the file already uses it or the content requires it.
- Keep the file's existing import order and grouping.
- Preserve the file's line endings.

## Function shape

- One job per function. If the name needs "and", split it.
- Prefer early returns over deep nesting.
- Keep the happy path at the lowest indentation.
- Do not thread state across unrelated layers to avoid passing a value.
- Keep obvious single-use logic inline.

## Checklist

- [ ] Every new name is used more than once, or names a real concept.
- [ ] No validation exists for a state the code cannot reach.
- [ ] No compatibility shim exists for unreleased code.
- [ ] Dead code and debug scaffolding are removed.
- [ ] No error is suppressed or ignored.
- [ ] Names and style match the surrounding file.
- [ ] No line was reformatted without a reason.
