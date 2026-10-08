# Approval and Destructive Actions

## Explicit gates

If the user asks for a plan, review, or approval before implementation, treat that as an execution gate. Do not implement prematurely.

If the user asks for direct implementation, do not add an unnecessary approval loop for ordinary reversible edits.

## Destructive boundary

Before deletion, overwrite, reset, force-push, bulk migration, data mutation, or other hard-to-recover action:

1. identify what will be lost or changed;
2. inspect whether unrelated user work is present;
3. preserve a recovery path when practical;
4. verify authorization or stop before the destructive step.

## Safe alternatives

Prefer narrow commands, backups, dry runs, targeted edits, or temporary copies when they provide materially better recoverability at low cost.
