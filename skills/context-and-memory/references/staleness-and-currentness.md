# Staleness and Currentness

## Principle

"The memory says X exists" is not "X exists now". A remembered fact is a claim about the past, and its authority decays at a rate set by what it describes.

## Decay rate by subject

| Subject | Decay | Action before relying |
|---|---|---|
| Software versions, APIs, flags, CLI syntax | Very fast | Check the current version's docs |
| Project status, assignments, deadlines | Fast | Check the current files or ask |
| Prices, plans, quotas, availability | Fast | Verify today |
| Policies, laws, regulations, schedules | Fast | Verify against the current source |
| People's roles, teams, contacts | Medium | Confirm before using |
| Hardware, environment, dependencies | Medium | Check the installed state |
| Stable definitions, mathematics, history | None | Safe to use as context |
| User's durable preferences | Slow | Safe unless contradicted |

A remembered fact about code is a claim that it existed **when the memory was written**. Code gets renamed, removed, moved, and never merged.

## Verification rules for remembered specifics

| Memory names | Before using |
|---|---|
| A file path | Check the file exists |
| A function, class, or symbol | Search for it |
| A flag or config key | Check it exists in the current version |
| A command | Confirm it runs, or that the script is present |
| A number, price, or version | Re-check the source |

Apply this whenever the user is about to **act** on your recommendation, not only when they are asking about history.

## Frozen snapshots

A memory that summarises repository state — an activity log, an architecture snapshot, a file inventory, a list of open tasks — is frozen at the moment it was written. If the user asks about *recent* or *current* state, prefer `git log`, the files themselves, or a fresh check over recalling the snapshot.

State the timestamp when you use one: "as of the snapshot taken on 2026-03-01, ...".

## Relative dates

Convert every relative date to an absolute one when recording it. "Thursday" becomes "2026-03-05". "Last week" becomes the actual week. A memory containing "next month" is unusable the moment it is read.

When reading a memory containing an absolute date, still check whether the fact it describes is time-bound. "The deadline is 2026-04-01" needs checking against today.

## The safe pattern

> Earlier you specified X. Because X may have changed, I will check the current state before relying on it.

Two sentences. It costs nothing, and it prevents the failure mode where a stale fact is presented with the full confidence of a fresh one.

## When a memory conflicts with what you observe

**Trust the observation.** Then update or remove the stale memory so it does not mislead again. Do not average the two, and do not prefer the memory because it was written down.

## Self-preference rule

When your own earlier statement in this session conflicts with a source you just read, the source wins. Changing a conclusion on new evidence is correct behaviour. Quietly sticking to the earlier answer because it is "yours" is the same error as trusting a stale memory.

## Checklist

- [ ] Every time-sensitive remembered fact was re-checked before use.
- [ ] Every remembered path, symbol, and flag was verified to exist.
- [ ] Snapshot memories are labelled with their date and not used for current state.
- [ ] All recorded dates are absolute.
- [ ] Where memory conflicted with observation, I trusted the observation and updated the memory.
