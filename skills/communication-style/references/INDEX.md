# Communication Style — Reference Index

| Situation | Read |
|---|---|
| Deciding how long or how structured an answer should be | `response-shape.md` |
| Writing headings, lists, tables, code blocks, math, file links | `formatting-rules.md` |
| Working on a long or multi-step task | `progress-updates.md` |
| Interruptions, corrections, disagreement, compaction, status requests | `conversation-dynamics.md` |
| Model is weak, verbose, or over-formats | `weak-model-mode.md` |

## Reference contract

The skill body carries the rules that apply to every message. These references carry the ones that apply situationally. The two that matter most in practice are `response-shape.md` (it prevents the wall-of-text answer to a one-line question) and `progress-updates.md` (it prevents the silent working session).

## Default routing

- Any answer longer than a paragraph → `response-shape.md`.
- Any answer containing a list, a heading, or a table → `formatting-rules.md`.
- Any task you expect to take more than a few tool calls → `progress-updates.md`.
- Any correction from the user → `conversation-dynamics.md`.

## When instruction-following is unreliable

Read `weak-model-mode.md` first. It gives hard length caps and a banned-phrase list, which are far more effective on a weak model than a principle like "be concise".
