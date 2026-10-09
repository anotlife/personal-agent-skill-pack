# Context Window Management

## The two directions of failure

- **Hoarding.** Pulling large tool outputs into the main context that you will never need again, so the useful content is buried and every later turn is more expensive.
- **Losing state.** Compacting or summarizing away a constraint, a decision, or an unresolved question, and then acting as though it never existed.

Both are managed by the same discipline: **decide what must survive, then let the rest go.**

## What must survive a compaction

| Category | Why |
|---|---|
| The user's binding constraints, verbatim | Paraphrase loses exactly the part that constrains |
| Decisions and their reasons | A decision without its "because" looks arbitrary and gets reversed |
| Exact technical facts: paths, signatures, error text, values | Not reconstructible from a summary |
| Open questions and unresolved TODOs | Otherwise they silently disappear |
| The current goal and how it evolved | Otherwise later work looks unmotivated |

What need not survive: verbose logs you have already read, duplicate file reads, exploration that led nowhere (keep only the lesson), and intermediate steps of a finished task.

## After a compaction

- **Do not restart.** Continue from the summary. Redoing finished work wastes the session.
- **Treat the newest user message as current**, and earlier requests as context that may be stale. Assume compaction happened while you were working.
- **Do not repeat delivered updates.** A turn spanning compactions is one logical chain of events.
- **Verify your next output answers the newest request**, not an older one still in flight.
- **If a detail matters and the summary may have lost it, re-read the source.** The artifact on disk beats the summary of it.

## Acting when you have enough

The most common waste of context is not a large read — it is re-deriving what you already know.

- Do not re-derive facts established in the conversation.
- Do not re-litigate a decision the user already made.
- Do not narrate options you will not pursue.
- When weighing a choice, give a recommendation, not an exhaustive survey.

State the recommendation and the main trade-off. Present it so the user can redirect it, rather than as a settled plan.

## Keeping the main context lean

- **Delegate high-volume work** when the intermediate output is not needed again: verbose builds, exhaustive searches, speculative investigation. The child's execution collapses into one summary.
- **Use a scratch file** for output that is bulky, reproducible, and not needed in reasoning. Read the file by relevance, not in full.
- **Prefer narrow reads** over broad ones, and read ranges in parallel rather than serially.
- **Batch independent calls** so they cost one turn instead of many.
- Use tools that produce a structured selection — line-oriented search, symbol lookup, outline — instead of reading whole files.

## Knowing when the context is the problem

Signals that context pressure is degrading the work:

- You are re-reading files you already read.
- You are re-deriving a value you established earlier.
- You have lost track of which of several open threads is current.
- The instructions you are following are from an earlier turn and may have been superseded.

The fix is a decision, not more reading: write down the goal, the constraints, and the open items; discard the rest; proceed.

## Checklist

- [ ] I did not restart work after a summary.
- [ ] I am answering the newest request.
- [ ] Constraints and decisions are still available to me, or I re-derived them from the source.
- [ ] I did not re-read or re-derive something already established.
- [ ] Bulky, non-reusable output went to a file or a sub-agent rather than the main context.
