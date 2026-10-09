# Commit Discipline

## When to commit

**Only when asked.** Completing work is not an instruction to commit it. "Wrap up this PR", "tidy this", and "let me see the diff" are not commit instructions.

Explicit triggers: "commit this", "make a commit", "commit the change", "save this to git". Ambiguous phrasing leans toward not committing and asking.

## Before committing

1. `git status` — see the full picture, including untracked files.
2. `git diff` — review unstaged content.
3. `git diff --staged` — review exactly what will be committed.
4. `git log -n 5` — read the recent messages to match the local style.
5. Draft a message.
6. Stage the specific files the change requires — not `git add .` by reflex.
7. Review the staged diff one more time for secrets and unrelated files.
8. Commit.
9. Confirm with `git status` or the log line.

## The message

- Match the repository's existing convention above all else. If the log uses `feat(auth): ...`, do not write prose. If it uses plain sentences, do not invent conventional-commit prefixes.
- **Imperative mood, present tense**: "Fix TTL comparison", not "Fixed" or "Fixes".
- Subject under about 72 characters, no trailing period.
- **The body explains why, not what.** The diff already shows what changed. The reason it changed is the part that cannot be recovered from the code later.
- Name the constraint, the incident, or the requirement that motivated it: "Retry loop was re-sending non-idempotent writes; now retries only on 429."
- Reference the issue or ticket if the project does so.
- Do not pad with a bullet list of files. Do not restate the diff.

If the project's instruction file specifies a commit format, a signature line, or an attribution trailer, follow it exactly.

## What belongs in a commit

One logical change. If the message needs "and", it is probably two commits — unless the two parts are inseparable (a rename plus its call sites, a schema plus its migration).

Do not include:

- unrelated formatting;
- an unrelated dependency bump;
- debug output or scratch files;
- changes you did not make;
- generated artifacts the project does not commit.

## Amend

**Do not amend unless explicitly asked.** Amending rewrites a commit that may already be shared, and it silently discards whatever was in the original.

If asked to amend, check first whether the commit has been pushed. If it has, say so and confirm before proceeding.

## Reverting

- Prefer `git revert` (a new commit) over rewriting history, for anything already pushed.
- Do not delete a commit to undo a mistake; revert or fix forward.
- Do not `reset --hard` to a prior commit to discard changes the user has not seen.

## Fixing a bad commit

| Problem | Response |
|---|---|
| Wrong message, not yet pushed | `commit --amend` if asked; otherwise leave it |
| Missing file | A follow-up commit, or amend if asked and unpushed |
| Extra file included | Remove it in a follow-up; do not rewrite shared history |
| Secret committed | Say so immediately. Deleting the file does not remove it from history; removing it requires a rewrite that the user must decide on |
| Committed on the wrong branch | Report it; do not silently move it |

## Reporting a commit

Include the short hash and the subject: "Committed `a1b2c3d`: 'Fix TTL unit mismatch in cache expiry'". If a push followed, say whether it succeeded. If a hook failed, quote the failure.

## Checklist

- [ ] The commit was requested.
- [ ] I read `git status`, the diff, the staged diff, and recent log style.
- [ ] The message matches the repo's convention and explains why.
- [ ] One logical change, no unrelated files.
- [ ] I confirmed the commit succeeded.
- [ ] I did not amend anything that was pushed.
