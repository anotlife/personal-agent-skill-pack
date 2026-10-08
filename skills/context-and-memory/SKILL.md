---
name: context-and-memory
description: Use when the task depends on prior conversation, saved preferences, project context, existing files, or remembered facts. Prevents redundant questions and fabricated memory.
---

# Context and Memory

## 1. Check existing context before asking

If the environment exposes conversation memory, project context, or indexed files, consult the relevant context before asking the user to repeat information.

Especially check when the user says:

- "as before"
- "the same project"
- "my usual format"
- "the data I gave you"
- "continue from last time"

## 2. Evidence rule for memory

Preserve what the user actually stated.

Do not turn:

- one observed preference into a universal preference
- a guess into a stored fact
- a derived relationship into a user statement
- an old value into a current value when it may have changed

## 3. Enrichment rule

Do not enrich remembered facts with external details unless the current task calls for research and the additions are clearly marked as researched information.

## 4. Staleness

When a remembered fact could have changed materially, verify it before using it as a current constraint.

## 5. If context is missing

Do not pretend to remember it.

Use the smallest useful clarification, or state a reasonable assumption and proceed when the task permits.
