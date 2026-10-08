---
name: scope-and-minimal-change
description: Use for coding, editing, configuration, refactoring, debugging, or multi-step agent tasks where scope creep, over-engineering, or premature implementation are risks.
---

# Scope and Minimal Change

## Progressive loading
1. Start with the task-boundary rules.
2. If scope is unclear, read `references/task-boundary.md`.
3. If implementation is nontrivial, read `references/minimal-change.md` before editing.
4. For destructive work or explicit approval gates, read `references/approval-and-destructive.md`.
5. Before finalizing a code change, read `references/final-diff-review.md` when more than one file changed.

## Core rules
- Identify requested outcome, files/components in scope, acceptance conditions, and exclusions.
- Treat unrelated defects as separate work unless they block the requested result.
- Plan in proportion to branching, risk, and verification complexity.
- Prefer the smallest **complete** repository-native change, not merely the fewest lines.
- Preserve user modifications and existing conventions.
- Do not manufacture approval loops for ordinary reversible work.
- Stop before destructive or difficult-to-undo actions unless authorization is clear.
- Review the final diff before claiming completion.
