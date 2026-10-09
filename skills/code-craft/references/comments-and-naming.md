# Comments and Naming

## The comment rule

**Default to writing no comments.** Add one only when the *why* is non-obvious:

- a hidden constraint the code cannot express;
- a subtle invariant that must hold across functions;
- a workaround for a specific, named bug;
- behaviour that would genuinely surprise a careful reader;
- a reference to an external spec or an issue number that explains a strange choice.

Test: *if I removed this comment, would a future reader be confused?* If no, do not write it.

## Comments that are always wrong

| Kind | Example | Why |
|---|---|---|
| Narration of what the code says | `// increment the counter` above `i++` | The code says it |
| Narration of the change | `// added validation here` | Belongs in the commit message; rots |
| Reference to the current task | `// for issue #123`, `// used by X flow` | Belongs in the PR; rots as the codebase moves |
| Placeholder | `// TODO: implement` | A hole in the deliverable |
| Commented-out code | `// const old = ...` | Use version control |
| Removal marker | `// removed the old check` | Meaningless once merged |
| Banners and dividers | `// ===== HELPERS =====` | Structure belongs in structure |
| Restating a type | `// a number` above `n: number` | Redundant |
| Apology | `// hack, sorry` | Say what the constraint is, or fix it |

Never use a comment as a thinking scratchpad, and never as a way to communicate with the user — your response text is for that.

## Docstrings

- One short line for an exported function whose contract is not obvious from its name and signature.
- Document **parameters that are not self-evident**, **thrown errors**, and **side effects**. Do not document the obvious.
- Never write multi-paragraph docstrings or multi-line comment blocks. One short line, maximum, unless the project's convention requires a fuller template — in which case follow the project.
- Do not document what the code does; document what a caller must know to use it correctly.

## When a comment is genuinely required

Write it in the shape `why`, not `what`:

```
// The API returns 0 for "unknown" as well as for "zero", so sentinel -1 marks absence.
// Retry only on 429: a 500 indicates a bug that a retry would reproduce.
// Coordinates are stored y-first to match the legacy export format.
```

Each of these says something the code cannot.

## Naming

### Match, do not invent

Read the surrounding file and the sibling modules before naming anything. The convention is whatever the code already does, even if you would have chosen differently.

- Case convention: `camelCase`, `snake_case`, `PascalCase`, `SCREAMING_CASE`.
- Boolean prefix: `is`, `has`, `can`, `should`, or the local variant.
- Collection naming: singular for one item, plural for many; do not encode the type (`userList`, `dataArray`).
- Function naming: verb phrase for actions (`parseConfig`, `encodeFrame`), noun phrase for pure accessors if the local code does that.
- Test naming: match the existing test names' shape.

### Qualities of a good name

- **Specific.** `retryCount` beats `count` beats `n` (unless `n` is the local convention for a loop).
- **Honest.** A function named `validate` that also mutates is lying.
- **Pronounceable.** You will say it out loud in a review.
- **Free of origin.** `legacyAuth`, `tempBuffer`, `newParser` describe history, not behaviour.
- **Free of type.** `userIdString` is redundant under a type system.

### Renaming

Rename only what the task requires. A rename touches every reference, invalidates every reviewer's memory of the file, and appears in the diff as noise. If you believe a name is genuinely harmful, mention it in one line rather than doing it.

Exception: if you are already rewriting the function's behaviour, a clearer name for the new behaviour is part of the change.

### The naming test

Cover the body of the function. Can you infer what it does, what it takes, and what it returns, from the signature and the names inside?

If yes, the code needs no comment. If no, fix the names before writing prose about them.

## Checklist

- [ ] Every comment explains a why that the code cannot express.
- [ ] No comment narrates the change, the task, or the code.
- [ ] No commented-out code, placeholder, or divider.
- [ ] Docstrings are one short line and add information.
- [ ] Every name matches the local convention.
- [ ] No symbol was renamed without being required.
