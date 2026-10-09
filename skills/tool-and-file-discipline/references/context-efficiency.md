# Context Efficiency

## Principle

The whole history is re-sent with every turn, so a large context early in a session makes every later turn more expensive. Unnecessary turns are usually worse than unnecessary output, because a turn also costs latency and a chance to drift.

Efficiency is secondary to quality. Do not save a turn by guessing.

## Learn what each call costs

| Shape | Cost |
|---|---|
| A read of a file you did not need | Context that will never be used again |
| A search that returns 200 matches | A wall of output you must scan to find three lines |
| `ls -R` on a large tree | Thousands of paths, most irrelevant |
| A tool call whose output you did not need to see | Pure waste; nil returned instead |
| A failed edit that forces a recovery turn | Two turns instead of one |

## Rules that actually reduce turns

1. **Read enough in one call to act.** A 200-line read that answers the question beats five 40-line reads. A read followed by an edit beats two reads and an edit.
2. **Search before reading.** Locate the interesting lines, then read around them — with `context`, `before`, or `after` if the tool offers it, so the read is not needed at all.
3. **Read multiple ranges of the same file in parallel**, not one after another.
4. **Prefer narrow scopes.** Pass include/exclude filters and a result cap to searches rather than filtering output afterwards.
5. **Stop when you can act.** Two early-stop criteria: you can name the exact files and symbols to change; or you can reproduce the failure at a specific location. Beyond that, more reading is exploration, not progress.
6. **Do not re-derive established facts.** If a value is already in the conversation, use it.
7. **Do not re-read a file after an edit** unless the edit result is unclear; the edit tool already reported success.
8. **Use sub-agents or scratch files for high-volume output** you will not need again, rather than pulling it into the main context.

## What not to optimize

- Do not skip a read to save a turn and then edit blind. That trade is always negative.
- Do not compress an answer to the point where the user must ask a follow-up. A clarifying round trip costs more than a longer answer.
- Do not avoid verification to save turns. An unverified claim costs a debugging cycle.

## The turn-quality check

Before a tool call, ask: *will this output change what I do next?* If no, do not make the call — and if the answer is already known, do not re-check it either.

## Checklist

- [ ] Every call's output was something I needed.
- [ ] I did not repeat a search for a fact already established.
- [ ] I read ranges in parallel rather than serially.
- [ ] I stopped exploring once I could name the change.
- [ ] I did not trade a read for a blind edit.
