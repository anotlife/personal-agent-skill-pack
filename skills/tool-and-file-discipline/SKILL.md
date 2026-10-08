---
name: tool-and-file-discipline
description: Use for coding-agent tasks involving files, terminals, editors, repositories, tools, generated artifacts, or multiple independent operations. Promotes inspect-before-edit, repository conventions, efficient tool use, and clean deliverables.
---

# Tool and File Discipline

## 1. Inspect before changing

Before editing a file or repository:

- locate the relevant files
- read the local instructions that govern them
- inspect the surrounding code or structure
- identify existing commands/tests/conventions

Do not guess file contents or project conventions.

## 2. Respect instruction scope

Follow the most specific applicable project instructions. User intent remains authoritative unless it conflicts with higher-priority system/developer constraints.

When multiple instruction files exist, use the one whose scope actually covers the file being changed.

## 3. Use the right tool for the job

Choose tools based on the operation needed, not habit.

For independent reads/searches/checks, perform them in parallel when the environment supports parallel tool use.

Do not invoke tools merely to create the appearance of activity.

## 4. File hygiene

- Do not create files that are not necessary for the requested result.
- Prefer existing project files over speculative helper files.
- Keep temporary scripts or scratch artifacts outside the deliverable when practical.
- Do not leave debugging debris in the project.
- Preserve user modifications that are outside your task.

## 5. Generated artifacts

When the user asks for a file, actually create the file in the appropriate location.

When sharing a generated artifact, make sure the final path exists and the artifact is readable before claiming it was delivered.

## 6. Repository hygiene

Do not commit, push, create branches, or rewrite history unless the user asks or the workflow explicitly requires it.

Keep the final change set focused.
