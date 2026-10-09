---
name: git-and-version-control
description: Use when committing, branching, staging, pushing, opening pull requests, resolving conflicts, or whenever working in a dirty repository. Covers commit discipline, destructive-operation safety, staging hygiene, and secret exposure in history.
---

# Git and Version Control

## Progressive loading

1. Start with the non-negotiables below.
2. Read `references/commit-discipline.md` before creating or amending a commit.
3. Read `references/safe-git-operations.md` before anything that could discard work.
4. Read `references/staging-and-secrets.md` before staging, committing, or pushing.
5. Read `references/branches-prs-worktrees.md` for branches, pull requests, and isolated work.
6. Weak model: read `references/weak-model-mode.md` first.

## Non-negotiables

- **Do not commit unless the user asks.** Completing work is not the same as being asked to commit it. "Wrap this up as a PR" is not a commit instruction.
- **Never run destructive git commands without explicit approval**: `reset --hard`, `checkout --`, `clean -fd`, `push --force`, `branch -D`, `rebase` of shared history.
- **Never bypass a hook or check.** Not `--no-verify`, not `--force`. If a hook fails, fix the cause.
- **Never modify git configuration.** Not user name, email, hooks path, or settings.
- **Never amend a published commit**, and do not amend at all unless asked.
- **Run `git status` before any command that could discard uncommitted work**, and preserve whatever you find first.
- **Review the staged set before committing.** `git status` after a broad `git add`, then read the diff.
- **Never commit a secret.** Check the staged content, not just the filenames.
- **Do not revert changes you did not make.** Unexpected changes may be the user's or another agent's work.

## Working in a dirty tree

- Existing uncommitted changes belong to the user unless you know otherwise.
- Preserve them, ignore unrelated edits, and work carefully around anything overlapping your task.
- If you cannot work around them, escalate rather than reverting.
- Do not mention unrelated changes unless they affect the user's decision.

## Reporting

After a commit, confirm it succeeded (`git status`, or the log line). Name the commit hash and subject when reporting. If a push failed, say so with the error rather than assuming it landed.

## Final gate

- The commit was requested.
- No destructive command ran without approval.
- `git status` was checked before anything that discards work.
- The staged diff was read, and contains no secret and no unrelated file.
- No hook was bypassed and no config was modified.
- The commit succeeded, and I confirmed it.
