# Git and Version Control — Reference Index

| Situation | Read |
|---|---|
| About to create, amend, or message a commit | `commit-discipline.md` |
| A command could discard uncommitted work | `safe-git-operations.md` |
| About to stage, commit, or push | `staging-and-secrets.md` |
| Branches, pull requests, isolated or parallel work | `branches-prs-worktrees.md` |
| Model is weak, distracted, or over-eager with git | `weak-model-mode.md` |

## Reference contract

Git is the one area where a mistake is durable and shared. These references are deliberately prohibitive. Most of the rules exist because the alternative is unrecoverable — a force-push, a lost stash, a secret in permanent history.

## Default routing

- Any `reset`, `checkout`, `clean`, `stash`, or `restore` → `safe-git-operations.md`, always.
- Any `add` or `commit` → `staging-and-secrets.md`.
- Any `push`, `pr`, or branch → `branches-prs-worktrees.md`.
- Any commit message → `commit-discipline.md`.

## When instruction-following is unreliable

Read `weak-model-mode.md` first. It reduces git to a fixed command sequence with a mandatory status check, because a weak model's git errors are almost always an omitted precondition.
