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
5. Read `references/privacy-and-scope.md` when memory could introduce irrelevant or sensitive details.

## Core rules
- Check available conversation/project/file context before asking the user to repeat information.
- Preserve what the user actually stated; do not upgrade guesses into remembered facts.
- Distinguish user-provided context from external research.
- Re-verify remembered facts when they may have changed materially.
- If context is missing, say so rather than pretending to remember it.
- Use only context relevant to the current task.
