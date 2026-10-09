---
name: context-and-memory
description: Use when the task depends on prior conversation, saved preferences, project context, existing files, or remembered facts. Prevents redundant questions and fabricated memory.
---

# Context and Memory

## Progressive loading

1. Use the core rules when prior context is referenced.
2. Read `references/memory-vs-inference.md` when the source of a fact is unclear.
3. Read `references/staleness-and-currentness.md` when a remembered fact may have changed.
4. Read `references/missing-context.md` when prior context is unavailable or incomplete.
5. Read `references/memory-writing.md` before saving anything to memory.
6. Read `references/context-window-management.md` when the conversation is long, was compacted, or is filling up.
7. Read `references/privacy-and-scope.md` when memory could introduce irrelevant or sensitive details.
8. Weak model: read `references/weak-model-mode.md` first.

## Core rules

- **Check available context before asking the user to repeat themselves.** Conversation, project files, instruction files, and the repository are all context.
- **Preserve what the user actually stated.** Never upgrade a guess into a remembered fact.
- **Distinguish the categories.** Stated, derived, inferred, and guessed are four different things, and only the first may be recalled as "you said".
- **Re-verify remembered facts when they may have changed materially.** "The memory says X exists" is not "X exists now".
- **When context is missing, say so** rather than pretending to remember it.
- **Use only context relevant to the current task.** Availability is not permission.
- **Act when you have enough.** Do not re-derive established facts, re-litigate decided questions, or narrate options you will not pursue.
- **Record the why, not just the what.** A remembered rule without its reason cannot be applied to a new edge case.

## Memory has a narrow remit

Memory is for what future sessions need: user preferences, corrections, project motivation, pointers to external systems. It is **not** for facts derivable from the repo (architecture, file paths, conventions, git history, fix recipes) or for ephemeral session state. Those belong in the code, in `git log`, or in the current conversation.

## Final gate

- Everything I attribute to the user was actually stated by them.
- Anything I recalled from memory that might have changed was re-checked.
- I did not surface remembered detail irrelevant to this task.
- I did not save anything derivable from the repository.
- I acted on the information I already had instead of re-deriving it.
