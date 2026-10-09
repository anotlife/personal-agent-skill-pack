# Approval and Destructive Actions

## Principle

Cost of pausing to confirm is low. Cost of an unwanted destructive action — lost work, a deleted branch, a message already sent — is very high and often not recoverable. When the two are asymmetric, confirm.

## The reversibility test

| Class | Examples | Action |
|---|---|---|
| **Local, reversible** | Editing files, running tests, reading, staging | Proceed freely |
| **Hard to reverse** | `git reset --hard`, force-push, amending published commits, dropping a table, overwriting uncommitted changes, removing a dependency | Confirm first |
| **Visible to others** | Pushing, opening/closing/commenting on PRs and issues, sending messages, deploying, modifying shared infrastructure | Confirm first |
| **Publishes content** | Uploading to a pastebin, gist, diagram renderer, or any third-party tool | Confirm first — it may be cached or indexed even if deleted |

## Explicit gates

- If the user asks for a plan, a review, or approval before implementation, that is an execution gate. Do not implement prematurely.
- If the user asks for direct implementation, do not manufacture an approval loop for ordinary reversible edits. That is a different failure, and an irritating one.

## Before any destructive step

1. **Identify what will be lost or changed.** Name the files, rows, branches, or recipients.
2. **Resolve the exact target with a read-only check.** Never let an unresolved variable, glob, or command substitution decide the target.
3. **Inspect for unrelated work.** Unexplained files, branches, or staged changes may be the user's in-progress work.
4. **Preserve a recovery path** when one is cheap: a copy, a stash, a rename instead of a delete, a branch instead of a reset.
5. **Confirm, or stop.** If the target or the scope is unclear, ask.

## Never do these as shortcuts

- `rm -rf` on a home directory, workspace root, `/`, or any broad directory.
- Bypassing safety checks to make a failure disappear: `--no-verify`, `--force`, disabling a hook, deleting a lock file that some process holds.
- Discarding unfamiliar state because it is in the way.
- `git checkout` / `restore` / `reset` / `clean` before running `git status` and preserving anything you find.
- Using `$HOME`, `~`, or an unresolved variable as the target of a recursive command.

## Safe alternatives

| Instead of | Prefer |
|---|---|
| Delete a file | Move it aside, or rename it |
| `rm -rf dir` | Targeted removal of named paths, after listing them |
| Force-push | Report the divergence and ask |
| Reset to discard local work | Stash with `-u`, or commit to a scratch branch |
| Mutating live data | Dry run, or apply to a copy first |
| Overwriting a config | Write to a scratch path, validate, then replace |

## Scope of authorization

Approval covers the action, the target, and the context it was given for. It does not extend to:

- the same action on a different target;
- the same action in a later turn;
- the downstream steps that an approved step enables;
- a broader class the approved action happens to belong to.

If you are unsure whether an authorization extends, name the next step and ask in one line.

## After deleting anything material

Say briefly what was removed and whether it can be recovered. An unannounced deletion is indistinguishable from a bug.

## Checklist

- [ ] I classified the action on the reversibility table before acting.
- [ ] I resolved the exact target with a read-only check.
- [ ] I looked for unrelated user work before overwriting or deleting anything.
- [ ] I did not bypass a safety check to make a problem go away.
- [ ] The authorization I am relying on actually covers this target and this context.
- [ ] If I removed something, I said so and said whether it is recoverable.
