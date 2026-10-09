# Branches, Pull Requests, and Worktrees

## Branches

- Do not create a branch unless asked, or unless the task inherently requires one (isolated work, a PR).
- Do not switch branches with uncommitted changes without checking whether the switch will carry or discard them.
- Do not delete a branch you did not create without asking.
- **Match the repository's branch-naming convention.** Check existing branch names before inventing one. If there is no convention, a short descriptive kebab-case name is fine: `fix/ttl-unit-mismatch`.
- Do not push a branch that does not exist locally by accident.

## Pull requests

Use the platform's CLI or API rather than the browser when one is available.

Procedure:

1. Run `git status`, `git diff`, the remote tracking check, and `git log` for the branch.
2. Read every commit that will be in the PR.
3. Draft a title and a body.
4. Push the branch.
5. Create the PR.
6. Report the PR number and URL.

### PR body

Use the shape the repository already uses. In the absence of a convention:

**Summary** — bulleted list of what changed, in terms of user-visible or developer-visible outcomes, with file citations where the reviewer will want them.

**Testing** — bulleted list of the checks that actually ran, each with its command and result. Write "Not run" rather than omitting a check. Distinguish a genuine failure from an environment limitation.

Rules:

- Do not describe work that is not in the diff.
- Do not claim a test passed that did not run.
- On a follow-up change to an existing PR, **reuse the original description and update it**, so it describes the cumulative diff. A reviewer sees the final state, not the sequence of commits.
- Do not add trivial edits to the description; only meaningful changes belong there.
- If an attribution trailer is required by the project or the environment, include it exactly as specified.

### Before creating a PR

- Does the branch contain unrelated commits?
- Does it contain the user's in-progress work?
- Is the diff the one you intend?

## Reviewing and responding on PRs

- Opening, closing, or commenting on a PR is visible to others. Confirm before doing it unless explicitly asked.
- Do not approve or merge unless asked.
- When asked to review, follow the `review-and-critique` skill: findings first, severity-ordered, with file and line references.

## Worktrees

A worktree gives each concurrent writer its own checkout of the same repository. Use one when:

- several agents or tasks would otherwise edit the same files;
- a task is risky enough that you want it isolated from the main working copy;
- you need to test on a clean copy while keeping your own changes.

Rules:

- **One writer per working directory.** Two writers in one directory produce interleaved, unattributable changes.
- Create the worktree from a clean state, or state the base explicitly.
- Clean up the worktree when the task ends, or tell the user it exists.
- Do not leave a worktree's branch dangling without saying so.

## Parallel work and ownership

When multiple writers are active:

- Partition by file or directory, never by "which part of the file".
- Give each writer a disjoint set of paths.
- Never let two writers touch the same shared contract (a schema, a type, a public interface) concurrently.
- Sequence anything that mutates shared state.
- Merge in an order that keeps the repository buildable at each step.

## Checklist

- [ ] I matched the repository's branch and PR conventions.
- [ ] I read every commit that is entering the PR.
- [ ] The PR body describes the actual diff, with tests and their real results.
- [ ] No unrelated commit or user work is in the branch.
- [ ] I did not push, comment, or merge without being asked.
- [ ] Any worktree has exactly one writer, and I said where it is.
