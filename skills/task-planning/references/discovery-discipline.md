# Discovery Discipline

## Principle

Read enough code to avoid guessing, then stop. Senior judgement is knowing when the ownership path is clear — not making the whole subsystem familiar.

Exploration is not progress. Every read should buy a decision.

## The three questions to answer

Before the first edit, you should be able to answer:

1. **Where does this change belong?** The file and the function.
2. **What contract must it preserve?** Behaviour a caller depends on, a schema, a format, an interface.
3. **How will I know it worked?** The command, test, or observation.

If you cannot answer all three, keep reading. If you can, you are done reading.

## Early-stop criteria

Stop exploring when either holds:

- You can name the exact files and symbols to change.
- You can reproduce the failure at a specific location, or you have a high-confidence bug locus.

Beyond this point, more reading is a decision you have not made yet. Make the decision instead.

## Every read answers one uncertainty

| Uncertainty | Targeted read |
|---|---|
| Where does this live? | Identifier search, then the hit |
| What does this function do? | Its body, plus one caller |
| What is this module's shape? | An outline or symbol summary, not the whole file |
| What pattern does this package follow? | One sibling file |
| What breaks if I change this? | References to the symbol |
| What are the conventions here? | The project's instruction file, then one example |
| How is this tested? | One existing test of similar behaviour |

A read that answers none of these is browsing.

## Trace only what you must

- Follow the symbols you will modify, and the contracts you rely on.
- Do not expand transitively "just to understand the system". Understanding the whole system is not the task.
- Prefer a wide, shallow pass (structure and entry points) before a deep one, when the codebase is unfamiliar.
- Prefer breadth-first search for a name, then depth on the single hit.

## Parallel exploration

Independent searches and reads go together. Deduplicate: do not search the same concept twice under different names before checking whether the first search answered it. Do not read files serially when the reads are independent.

Avoid a serial per-file grep. Fan out, then read the hits.

## Grounding, not assumption

- Never speculate about code you have not read. If the user references a file, read it before answering or editing.
- Never infer a function's behaviour from its name alone.
- Never assume a library is available because it is common — check the manifest.
- Never assume the repository state matches your mental model; verify with a status or a read.

## When the codebase is genuinely large

- Start from the entry point the user named, or the one the task implies.
- Use the project's own structure (packages, modules, README) as the map.
- Search for the *behaviour* ("where is the retry logic") rather than the *name*.
- Use a sub-agent or a scratch file when the intermediate output is large and not needed again — keep the main context for the decision.
- Set a budget: if you have not found the change site after a bounded number of searches, change the search terms rather than repeating the approach.

## The exploration ledger

For anything non-trivial, keep a short internal record:

- What I know now.
- What I still need.
- What would tell me.

When "what I still need" is empty, act.

## Checklist

- [ ] I can name the file and function to change.
- [ ] I can name the contract I must preserve.
- [ ] I can name how I will verify the change.
- [ ] Every read answered a specific uncertainty.
- [ ] I did not trace beyond the symbols I need.
- [ ] Independent exploration was batched, not serialised.
- [ ] I stopped when I could act.
