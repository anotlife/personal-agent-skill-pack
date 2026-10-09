# Weak-Model / Low-Attention Mode

Weak models commit without being asked, use `git add .`, force-push to resolve a rejection, and lose work with `reset --hard`. This file reduces git to a fixed sequence with mandatory preconditions.

## The commit procedure (only when asked)

Run these steps in order. Do not skip a step because the change looks simple.

1. `git status` → read the full output.
2. `git diff` → read what is unstaged.
3. `git diff --staged` → read what is staged.
4. `git log -n 5` → read the message style.
5. `git add <specific paths>` → never `git add .`, never `git add -A`.
6. `git diff --staged` → read it again. Look for secrets and unrelated files.
7. `git commit -m "<message>"` → message explains **why**, imperative mood, matches the log style.
8. `git status` → confirm the tree is clean or that the intended files are gone from the list.
9. Report the short hash and subject.

If step 6 shows a file you cannot explain, unstage it and stop.

## The destructive-command gate

Before running any command in this list, you MUST have (a) run `git status`, (b) confirmed nothing valuable is uncommitted, and (c) received explicit approval:

```
git reset --hard
git checkout -- <path>
git restore <path>
git clean -fd
git clean -fdx
git push --force
git push --force-with-lease
git branch -D
git stash drop
git rebase
git commit --amend
```

If any of (a), (b), (c) is missing, do not run the command. Ask instead.

## Hard rules

- **Do not commit unless asked.** "Finish this" is not a commit instruction.
- **Do not amend.** Ever, unless explicitly asked.
- **Do not force-push.** If a push is rejected, fetch, look, and report. Do not force.
- **Do not change git config.** Not `user.name`, `user.email`, `core.hooksPath`, `core.autocrlf`.
- **Do not bypass a hook.** No `--no-verify`. If the hook fails, fix the cause.
- **Do not revert changes you did not make.** Unexplained changes may be the user's.
- **Do not commit a secret.** Read the staged diff, not the file names.
- **Do not delete a branch, stash, or lock file without approval.**

## Banned commands

```
git add .            (unreviewable; sweeps in artifacts and secrets)
git add -A           (same)
git commit -a        (stages files you did not review)
git commit --amend   (rewrites history)
git push --force     (destroys others' work)
git reset --hard     (destroys uncommitted work)
git clean -fdx       (deletes gitignored files, including local secrets)
git config --global  (changes the user's machine-wide settings)
```

## The secret check

Before pushing, look at the staged diff for:

- strings that look like tokens (long random alphanumeric sequences);
- `sk-`, `ghp_`, `github_pat_`, `AKIA`, `xox`, `-----BEGIN`;
- `.env` files or files named `*credentials*`, `*secret*`, `*token*`;
- connection strings with embedded passwords.

If you find one, stop. Say so. Do not push.

## Interpreting a rejected push

A non-fast-forward rejection means the remote has commits you do not have. The correct response is:

1. `git fetch`
2. Look at what you are missing.
3. Report the divergence to the user.
4. Wait for direction.

The incorrect response is `--force`, which discards whatever you could not see.

## Final gate

- [ ] A commit happened only because it was requested.
- [ ] The staged diff was read, and contains no secret and no unrelated file.
- [ ] No destructive command ran, or approval was obtained first.
- [ ] No config was changed, no hook bypassed, no history rewritten.
- [ ] The result was confirmed and the hash reported.
