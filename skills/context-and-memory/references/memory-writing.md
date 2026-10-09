# Memory Writing

## Principle

A memory is read by every future session. It is a durable, load-bearing artifact, not a note to self. Write few, and write them well — a wrong memory keeps producing the same mistake forever, and a derivable memory is permanent clutter that competes with the ones that matter.

## What to save

| Type | Content | Why it is not derivable |
|---|---|---|
| **User profile** | Role, expertise, how to pitch explanations | Nothing in the repo says it |
| **Feedback** | Corrections *and* confirmations of non-obvious choices | The reason is not in the code |
| **Project** | Who is doing what, why, by when, deadlines, drivers | Motivation is not in the diff |
| **Reference** | Pointers to external systems (where bugs are tracked, which dashboard on-call watches) | Not discoverable locally |

## What NOT to save

Never save, even when asked:

- Code patterns, conventions, architecture, file paths, project structure — **derivable** by reading the project.
- Git history, recent changes, who-changed-what — `git log` and `git blame` are authoritative and always current.
- Debugging solutions and fix recipes — the fix is in the code, and the commit message has the context.
- Anything already documented in the project's instruction files.
- Ephemeral task state: in-progress work, temporary decisions, current conversation context.
- Secrets, credentials, tokens, or personal data that is not needed for the work.

If the user asks you to save a list, an activity log, or a summary, ask what was **surprising or non-obvious** about it — that is the part worth keeping. The rest is derivable.

## Structure

Lead with the rule or the fact, then two labelled lines:

```
<the rule, in one sentence>
Why: <the reason the user gave — often a past incident or a specific constraint>
How to apply: <when and where this kicks in>
```

The `Why` is load-bearing. A rule without its reason cannot be applied to a case the user did not anticipate, and the next session will either follow it blindly or ignore it. Knowing *why* lets both the reader and the writer judge edge cases.

Example:

> Integration tests must hit a real database, not a mock.
> Why: a mock/prod divergence masked a broken migration last quarter.
> How to apply: when writing or modifying tests that cross the persistence boundary.

## Recording corrections and confirmations

Save both. If only failures are recorded, the agent avoids past mistakes but drifts away from approaches the user has already validated.

Corrections are easy to notice ("no, not that"). Confirmations are quiet — an unusual choice accepted without pushback, a "yes exactly", a plan approved on first try. Watch for them.

## Deduplication

Before writing, search for an existing memory on the same topic. **Update it rather than adding a parallel entry.** Two memories about the same preference will eventually disagree, and then neither is trustworthy.

## Absolute dates

Convert relative time references to absolute dates at write time. "Thursday" → "2026-03-05". "Next sprint" → the actual range, or a note that it was relative to the write date.

## Index discipline

If the memory system uses an index file that is always loaded, keep entries to a single line each. The index is a routing table, not storage. Long indexes crowd out the working context and are then truncated — which silently hides the entries at the end.

## Privacy

Write only what the work needs. Do not record personal details, health information, relationships, or sensitive identifiers merely because they came up. If a detail is not needed to do the work better, it does not belong in permanent storage.

## Review

Memories decay. When you rely on one and find it wrong, **fix or delete it in the same turn** rather than working around it. A stale entry that stays in place is worse than no entry, because it looks authoritative.

## Checklist

- [ ] The fact is not derivable from the repository.
- [ ] It is not ephemeral session state.
- [ ] It has a `Why` line that makes it applicable to new cases.
- [ ] Any date is absolute.
- [ ] I checked for an existing entry and updated rather than duplicated.
- [ ] It contains no secret or unnecessary personal detail.
