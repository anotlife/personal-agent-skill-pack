# Safe Git Operations

## The rule

A git command can destroy work that no one has copied. The cost of pausing to think is seconds; the cost of a lost uncommitted afternoon is not recoverable.

## Before anything that could discard work

**Always run `git status` first.** Then:

1. Identify what is uncommitted, including untracked files.
2. Decide whether it matters.
3. Preserve it: stash with `-u`, commit to a scratch branch, or copy it aside.
4. Only then run the destructive command.

## The destructive commands

| Command | What it destroys |
|---|---|
| `git reset --hard` | All uncommitted changes in tracked files |
| `git checkout -- <path>` / `git restore <path>` | Uncommitted changes in that file |
| `git clean -fd` | All untracked files and directories |
| `git clean -fdx` | Untracked files **and** gitignored files — including local config and secrets |
| `git push --force` | Remote history; may discard others' commits |
| `git push --force-with-lease` | Same, but refuses if the remote moved — safer, still destructive |
| `git branch -D` | An unmerged branch |
| `git stash drop` / `clear` | Stashed work |
| `git rebase` of shared history | Everyone else's base |
| `git commit --amend` on a pushed commit | The published commit |
| `git checkout <branch>` with uncommitted changes | Changes that the checkout overwrites |

None of these may run without explicit approval, and each needs the status check first.

## Safe alternatives

| Instead of | Prefer |
|---|---|
| `reset --hard` to undo local changes | `stash -u`, or commit to a scratch branch |
| Discarding a file's changes | Read the diff first; the change may be needed |
| `clean -fd` | List first (`clean -nd`), then remove named paths |
| `push --force` | Report the divergence and ask |
| `branch -D` | `branch -d`, which refuses unmerged branches |
| Deleting a stash | Leave it; stashes cost nothing |
| Deleting a lock file | Find the process holding it |

## Investigating before removing

Unfamiliar state is a signal, not an obstacle. Before deleting anything:

- **A lock file**: find which process holds it. Deleting it can corrupt the repository or leave a transaction half-applied.
- **An unfamiliar branch**: check its log. It may be someone's work in progress.
- **A stray file**: check whether it is untracked user work or a build artifact.
- **A merge conflict**: resolve it. Discarding a side loses one of the two intentions, and choosing silently is worse than asking.

## Merge conflicts

1. Read both sides. Understand what each was trying to do.
2. Resolve so both intentions survive where they can.
3. Do not choose a side because it is shorter, newer, or yours.
4. Run the tests after resolving — a clean textual merge is not a correct semantic merge.
5. If the intentions are genuinely incompatible, stop and ask.

## Recovering lost work

`git reflog` records where `HEAD` and branches have been. It is the first thing to check after an accidental reset or rebase:

```
git reflog
git reset --hard <sha>   # only after the user approves
```

Uncommitted work destroyed by `reset --hard` or `checkout --` is generally **not** recoverable through git. That is why the status check comes first.

## Force-pushing

Force-push rewrites history that others may have based work on. Even `--force-with-lease` can lose commits if someone pushed after your last fetch.

If a push is rejected as non-fast-forward:

1. Fetch and look at what you are missing.
2. Report the divergence to the user.
3. Do not force, and do not rebase, without approval.

## Working in a shared repository

- Do not rewrite history on a branch others use.
- Do not delete branches you did not create without asking.
- Do not change remote configuration.
- Do not push to a protected or shared branch unless explicitly asked.

## Checklist

- [ ] `git status` ran before anything destructive.
- [ ] Any uncommitted work was preserved before it could be lost.
- [ ] I used a safe alternative where one existed.
- [ ] Unfamiliar state was investigated rather than removed.
- [ ] Any conflict was resolved deliberately, and the tests were re-run.
- [ ] Nothing destructive ran without explicit approval.
