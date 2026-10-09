# Code Craft — Reference Index

| Situation | Read |
|---|---|
| Deciding how much code to add — abstraction, validation, compatibility, dead code | `code-quality.md` |
| Writing in an unfamiliar part of a repo; unsure of the local style | `conventions-and-reuse.md` |
| Adding a comment, docstring, TODO, or a new name | `comments-and-naming.md` |
| Change touches input, auth, files, network, queries, or data | `security-by-default.md` |
| Adding, changing, or deciding not to add tests | `testing-judgement.md` |
| Frontend, UI, layout, or visual work | `ui-quality.md` |
| Model is weak, distracted, or over-engineers | `weak-model-mode.md` |

## Reference contract

These rules are stated as prohibitions because the failure mode is almost always **addition**: extra abstraction, extra validation, extra comments, extra compatibility, extra configuration. Every one of them is individually defensible and collectively produces a diff nobody asked for.

## Default routing

- Any new file or new abstraction → `code-quality.md`.
- Any security-adjacent change → `security-by-default.md`, always.
- Any comment you are about to write → `comments-and-naming.md`.
- Any frontend change → `ui-quality.md`.

## When instruction-following is unreliable

Read `weak-model-mode.md` first. It lists the specific additions a weak model makes without being asked, and the checks that catch them.
