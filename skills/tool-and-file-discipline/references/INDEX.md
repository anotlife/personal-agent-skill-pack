# Tool and File Discipline — Reference Index

| Situation | Read |
|---|---|
| Repo contains `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, or nested instruction files | `project-instructions.md` |
| About to edit a file | `inspect-before-edit.md` |
| Choosing a tool, or deciding what may run in parallel | `tool-selection-and-parallelism.md` |
| Creating a file, or finishing a task that created one | `file-hygiene.md` |
| Tool output is filling the context window | `context-efficiency.md` |
| Model is weak, distracted, or using the wrong tool by default | `weak-model-mode.md` |

## Reference contract

These references encode mechanical rules — which tool, in what order, with what cleanup. They are cheap to follow and expensive to skip. On a weak model they should be read literally.

## Default routing

- Will touch a tracked file → `project-instructions.md`, then `inspect-before-edit.md`.
- Will create a file → `file-hygiene.md`.
- Three or more tool calls in a row → `context-efficiency.md`.
- Anything about parallelism → `tool-selection-and-parallelism.md`.
