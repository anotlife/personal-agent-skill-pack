# Inspect Before Edit

## Principle

Never edit a file you have not just read. Editing from a description alone destroys local conventions, resolves the wrong layer of the problem, and produces diffs that do not match the codebase.

The rule is mechanical: **read → edit**. Re-read immediately before the edit, not earlier in the session, because the file may have changed.

## Minimum inspection

1. Confirm the path exists and is the intended target (not a same-named file elsewhere).
2. Read the region you will change, plus enough surrounding context to see the pattern: imports, sibling functions, error handling, naming style.
3. Identify callers or references when behavior is involved.
4. Inspect the relevant tests or examples to learn the expected shape.
5. Check whether the file is generated. If it is, find and change the source of truth instead.

## Depth scales with consequence

| Change | Minimal inspection |
|---|---|
| Known one-line constant, no hidden structure | The line and two lines of context |
| Local function body | The function, its imports, one caller |
| Public symbol, schema, or shared contract | All references, all tests, the docs |
| Unfamiliar subsystem | Area map first, then the specific region |

Increase depth with uncertainty and blast radius, not with file size.

## Choosing the edit anchor

- Use an anchor that is **unique in the file**. If two identical blocks exist, include surrounding lines until it is unique.
- Read the exact bytes you intend to match. Whitespace, quoting style, and line endings must match exactly.
- Prefer the smallest anchor that is still unique. Long anchors are fragile; short non-unique anchors fail.
- When an edit's anchor will not match, the file changed or you misread it — re-read rather than widening the anchor arbitrarily.

## Parallel edit safety

- Never issue two edits to the **same file** in one batch. The second is computed against content the first has already changed.
- Edits to **different** files may run in parallel.
- After an edit, the previously read content is stale. Re-read before a further change to the same file.

## State the boundary before editing

Write one internal line: *I am changing X to satisfy Y; Z is outside scope.* If Y cannot be named, the change is not yet understood.

## Checklist

- [ ] I read this file in this session, close to now.
- [ ] My anchor is unique and byte-exact.
- [ ] I checked whether the file is generated.
- [ ] I did not batch two edits onto the same file.
- [ ] I named the boundary (X for Y, Z out of scope) before editing.
