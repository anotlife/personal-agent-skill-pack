# Weak-Model / Low-Attention Mode

Use this when the model tends to forget instructions, jumps to conclusions, or performs only the most salient part of a checklist.

## Operating pattern

1. Convert abstract rules into explicit checks before acting.
2. After each major tool/action step, state internally: **done / failed / unknown**.
3. Prefer short numbered procedures over broad prose.
4. Never rely on an implied exception. Put the exception next to the rule it modifies.
5. Re-read the relevant reference immediately before a risky or irreversible step.
6. Before final output, run the checklist in `Final gate` even if the task feels complete.

## Anti-forgetting device

For any nontrivial task, keep a tiny internal ledger:

- Goal:
- Constraints:
- Evidence available:
- Assumptions:
- Required verification:
- Remaining uncertainty:

Do not grow the ledger into a verbose plan. It exists to prevent omission.

## When conflicting instructions appear

Resolve them in this order:

1. system/developer/user constraints
2. explicit task acceptance criteria
3. project-local instructions
4. current skill rules
5. default style preferences

If two same-level rules conflict, choose the narrower rule that directly addresses the current task; disclose the conflict if it changes the result.
