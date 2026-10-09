# Weak-Model / Low-Attention Mode

Delegation fails silently: a brief with a retrieval step produces a confident artifact built on an invented fact, and a delegate's report is believed without inspection. This file makes both checks mechanical.

## Before delegating, two questions

1. **Was I asked to delegate?** If the user did not ask, and no standing instruction applies, do not delegate. Complexity is not authorisation.
2. **Can I finish this in one response?** If yes, do it yourself.

If both answers allow delegation, continue.

## The brief: required sections

Write all eight. Do not omit one because it seems obvious.

```
Goal:        <one paragraph, with the purpose>
Context:     <what is established, what was ruled out>
Anchors:     <exact paths with line numbers, signatures, types, commands>
In scope:    <files and behaviours>
Out of scope:<what must not be touched>
Constraints: <conventions, no new dependencies, style>
Deliverable: <the exact output path and form>
Acceptance:  <the command and what a pass looks like>
Report:      <what to send back, and how long>
```

**The Anchors line is mandatory.** If you cannot fill it, stop and find the anchors yourself first.

## The banned briefs

Never write:

- "Find the relevant code and update it."
- "Based on your findings, implement the change."
- "Look at the codebase and tell me what to do."
- "Use your judgement."
- Any brief whose steps require the delegate to locate something you could have located.

Each of these either pushes a retrieval step onto the delegate (which invites invention) or pushes synthesis onto it (which defeats the purpose).

## After the delegate returns: the three checks

Run all three. Do not skip.

1. **Existence.** Does the file exist at the stated path? Check the size and the mtime.
2. **Content.** Read the head, the tail, and the middle. Is it real work?
3. **Acceptance.** Run the command from the brief yourself. Read the output.

Then scan for placeholders: `pass`, `...`, `todo!()`, `unimplemented!()`, `as any`, `@ts-ignore`, `throw new Error("not implemented")`, `Admitted`, `sorry`, a hard-coded return.

If all three pass and the scan is clean, the task is done. Otherwise it is not, regardless of what the report says.

## Never

- Never say "the delegate completed it" without checking the artifact.
- Never present a delegate's claim as a verified result.
- Never restart a delegate that produced nothing — resume it.
- Never delegate a git operation.
- Never launch two writers on the same file.

## If the delegate produced nothing

1. Do not start a new delegate.
2. Resume the same one.
3. In the resume message, include: corrected information if the reasoning was wrong; a redefined, smaller deliverable; and the sentence "your first action must be a write".
4. If it fails a second time on the same shape, split it into smaller units — ideally single values — rather than trying again.

## Final gate

- [ ] Delegation was authorised.
- [ ] Every brief section is filled, including anchors.
- [ ] No brief contains a retrieval step.
- [ ] No two writers share a file.
- [ ] I inspected the artifact and ran the acceptance check myself.
- [ ] I scanned for placeholders.
- [ ] I did not report a delegate's claim as verified.
