---
name: scope-and-minimal-change
description: Use for coding, editing, configuration, refactoring, debugging, or multi-step agent tasks where scope creep, over-engineering, or premature implementation are risks.
---

# Scope and Minimal Change

## 1. Lock the task boundary

Identify:

- requested outcome
- files/components explicitly in scope
- required behavior
- constraints or acceptance conditions
- explicit exclusions

Treat unrelated defects as separate work unless they block the requested result.

## 2. Plan proportionally

Use a plan when the task has meaningful branching, multiple files, risky operations, or a nontrivial verification path.

Do not create a long plan for a trivial one-step task.

A useful plan answers:

> What must change, in what order, and how will success be checked?

## 3. Prefer the smallest complete change

Minimal does **not** mean the fewest lines. It means the smallest repository-native change that fully satisfies the requirement and preserves legitimate behavior.

Prefer:

- existing abstractions over new frameworks
- existing conventions over personal style
- local fixes over global rewrites
- existing tests and commands over custom ceremony

Avoid:

- opportunistic refactors
- speculative cleanup
- new configuration knobs without a requirement
- changing unrelated tests just to make the suite green

## 4. Approval gates

If the user explicitly asks for a plan, proposal, review, or approval before implementation, do not implement until the requested approval gate is satisfied.

If the user asked for direct implementation, do not manufacture an approval loop for ordinary reversible work.

## 5. Destructive operations

Before commands that can discard work, overwrite many files, delete data, reset branches, or otherwise make recovery difficult:

1. identify the destructive effect
2. check whether uncommitted or unrelated work may be affected
3. preserve a recovery path when practical
4. obtain confirmation when the action is not clearly authorized

## 6. Final diff discipline

Before claiming completion, inspect the final change set and remove unrelated edits.
