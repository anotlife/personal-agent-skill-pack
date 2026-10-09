# Verifying Delegates

## The rule

**A delegate's report is a claim, not a result.** An agent's summary describes what it intended to do. Inspect the artifact yourself.

This is not distrust of the delegate — it is the same standard you apply to your own output.

## The post-return checklist

For every delegated run:

1. **Does the artifact exist?** Check the path, the size, and the modification time. Not the report's assertion that it exists.
2. **Is the content what it claims?** Open it. Read enough to see whether it is real work or a stub.
3. **Run the acceptance check yourself.** The command from the brief. Read the output.
4. **Only then** treat the task as done.
5. **Scan for placeholder escapes** where relevant — see the table below.

The heavier the reasoning, the more often the deliverable is simply absent. Verify hardest where the delegate thought hardest.

## Three shapes of zero delivery

| Shape | How it looks | How to catch it |
|---|---|---|
| **No file at all** | The report describes work; nothing is on disk | Check the path and mtime |
| **A placeholder stub** | A few hundred bytes that print `placeholder` and exit 0 | Read the file; check its size against the task |
| **A stub the toolchain accepts** | Compiles, type-checks, passes CI, implements nothing | A separate grep for the escape hatches |

The third is the dangerous one, because every ordinary check passes. Each ecosystem has a legal construct that does nothing:

| Ecosystem | Silent no-op |
|---|---|
| Python | `pass`, `...` |
| Rust | `todo!()`, `unimplemented!()`, `panic!("todo")` |
| TypeScript | `as any`, `@ts-ignore`, non-null `!` |
| Java | `throw new UnsupportedOperationException()` |
| Lean / Coq | `Admitted`, `sorry` |
| Any | A function returning a hard-coded expected value |

**Quote that scan next to any success claim.** "It built" is not "it works".

## A precise failure outranks a false success

Not every failure is equal. "I tried, I am blocked at X, and X is specifically Y" can carry more information than a real-but-wrong artifact, because the artifact misleads you silently while the failure report is actionable.

So: do not trust success — verify it. But **do** trust a well-specified failure, and act on the diagnosis rather than reflexively re-dispatching.

## The delegate may veto you

A delegate whose only role is to obey amplifies your mistakes faithfully. So:

- Give it explicit licence to contradict numbers you supplied.
- Ask it to reject proposals outright if they are wrong.
- Tell it that overturning its own earlier conclusion is wanted.

Recorded instances of this paying off: a delegate corrected a coefficient taken from a source document, rejected a "generalise the parameter" suggestion as adding no mathematics, and retracted its own earlier misattribution.

## Zero delivery: resume, do not restart

If a delegate thought hard and produced nothing, its accumulated analysis is the expensive part. Keep it.

- Resume **that session** with a follow-up, not a fresh delegate.
- On resume, supply: corrected information if the reasoning was wrong, a redefined deliverable, and an explicit "your first action must be a write".
- Starting over discards the context for nothing.

**Two zero-deliveries on the same shape ⇒ stop delegating that shape.** Shrink to the smallest unit that can reach disk. The unit that matters is not logical atomicity but budget: a task dies when its output allowance runs out after the reasoning is finished but before anything is written. Two one-line computations merged into "do both" failed twice; asked as two single values, each succeeded first try.

## Reporting a delegate's result to the user

- Summarize it. The user cannot see the delegate's output.
- Attribute it: "the reviewer found ...", "the explorer reports ...".
- Do not present an unverified delegate claim as your own verified finding.
- If the delegate's output contradicts yours, say so.

## Checklist

- [ ] The artifact exists on disk, at the stated path, with a plausible size.
- [ ] I read part of it.
- [ ] I ran the acceptance check myself and read the output.
- [ ] I scanned for placeholder escapes where relevant.
- [ ] I did not restate an unverified claim as verified.
- [ ] If it delivered nothing, I resumed rather than restarted.
