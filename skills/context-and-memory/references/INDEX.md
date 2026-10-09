# Context and Memory — Reference Index

| Situation | Read |
|---|---|
| Unsure whether a fact was stated, derived, or inferred | `memory-vs-inference.md` |
| A remembered fact may have changed | `staleness-and-currentness.md` |
| Prior context is referenced but unavailable | `missing-context.md` |
| About to save something to memory | `memory-writing.md` |
| Conversation is long, was compacted, or is filling up | `context-window-management.md` |
| Memory could surface irrelevant or sensitive detail | `privacy-and-scope.md` |
| Model is weak, distracted, or fabricates continuity | `weak-model-mode.md` |

## Reference contract

Two distinct jobs live here: **reading** context (the first three references) and **writing** it (the next three). The writing side is where the lasting damage happens — a stale or derivable memory poisons every future session that reads it.

## Default routing

- About to write to memory → `memory-writing.md` first, then `privacy-and-scope.md`.
- Any "you mentioned earlier" → `memory-vs-inference.md`.
- Any mid-session summary, compaction, or context limit → `context-window-management.md`.
- Any remembered fact that could have changed → `staleness-and-currentness.md`.

## When instruction-following is unreliable

Read `weak-model-mode.md` first. It provides the four-question test for whether a recalled fact may be used, which is the check that most often fails silently.
