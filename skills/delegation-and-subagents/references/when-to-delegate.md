# When to Delegate

## Two gates, in order

### Gate 1 — authorisation

Delegation requires authorisation from the current request or an applicable instruction. Not from:

- task size;
- complexity;
- the number of files;
- a desire for parallelism;
- the availability of a delegate.

If it is not authorised, either do the work directly or offer delegation as an option, with a rough cost, so the user can decide.

### Gate 2 — suitability

Once authorised, delegate when the work is independent, focused, bounded, and either high-volume or independently reviewed.

## Good candidates

| Candidate | Why it fits |
|---|---|
| Independent parallel investigations | No shared state; results combine |
| High-volume output (verbose builds, exhaustive searches) | Keeps the main context lean |
| Repetitive batch work across many files | Bounded, mechanical, verifiable |
| Speculative exploration with many dead ends | The dead ends stay out of the main context |
| Independent review of work you produced | A fresh context cannot inherit your assumptions |
| Research where the question can be split | Each subquestion gets a clean context |

## Bad candidates

| Candidate | Why it fails |
|---|---|
| Work you could finish in one response | Overhead exceeds the benefit |
| "Go understand this and tell me what to do" | Pushes synthesis onto the delegate |
| Anything needing your conversation's history | A fresh delegate does not have it |
| Git operations | Staging and committing decide permanent history; keep them with the session owner |
| A task with no acceptance criterion | You cannot verify the result |
| Work with a retrieval step | The delegate substitutes a plausible fact instead of erroring |
| One atomic computation split into two | Budget exhaustion: nothing lands |

## Which kind of delegate

| Need | Kind |
|---|---|
| Answer a question, advise, decide an unknown | Advisory / oracle-style, read-only |
| Find code, map a codebase | Search / explorer, read-only |
| Review what you produced | Reviewer, read-only, fresh context |
| Execute a defined, mechanical change | Worker / task executor |
| Continue an interrupted line of reasoning | Resume the same session, not a new one |

Choose the closest fit even when the delegate's expertise is broader than the task.

## Cost awareness

Delegation is not free:

- the brief costs tokens to write;
- a fresh delegate pays to rebuild context the main session already had;
- the result must be verified, which costs attention;
- a delegate that produces nothing costs the whole round trip.

Delegation wins when the intermediate work is large and disposable, or when independence is the point. It loses when the work is small, or when the context is the expensive part.

## Zero delivery

If a delegate produced nothing, **resume the same session** rather than starting a new one — its accumulated analysis is the expensive part.

On resume, supply three things: corrected information if the reasoning was wrong, a redefined deliverable, and an explicit "your first action must be a write".

Two zero-deliveries on the same shape means stop splitting that way, and shrink to the smallest unit that can reach disk.

## Checklist

- [ ] Delegation is authorised by a current instruction.
- [ ] The work is independent, bounded, and has an acceptance criterion.
- [ ] I chose the closest-fitting delegate kind.
- [ ] I considered whether the brief plus verification costs more than doing it.
- [ ] Git operations are not delegated.
