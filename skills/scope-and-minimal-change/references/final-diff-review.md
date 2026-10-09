# Final Diff Review

## Principle

The diff is the deliverable. Review it as a reviewer would, before anyone else sees it. A clean diff is evidence of scope discipline, not proof of correctness — pair this with verification.

## Procedure

1. **Inspect the full diff or file set.** Not a summary of it. The actual changes.
2. **Confirm every changed file is relevant** to a numbered request or a stated constraint.
3. **Remove debris:** debug prints, commented-out experiments, scratch files, temporary scripts, accidental formatting churn, editor artifacts (`.DS_Store`, `.orig`, `.rej`, swap files).
4. **Check that user changes outside the task are preserved.** Unexpected changes in the worktree belong to the user or to another agent. Never revert them.
5. **Map the diff back to the acceptance criteria.** Every criterion should have a corresponding change; every change should have a corresponding criterion.
6. **Verify the behavior the diff affects.** A diff is a hypothesis about behavior; only running it tests the hypothesis.

## Red flags

- Unexpected new files, especially at the repo root or in tracked directories.
- Broad formatting-only changes that bury the real edit.
- Unrelated dependency or lockfile updates.
- Test changes without a behavioral rationale.
- Generated or build debris committed.
- Changes outside the requested subsystem or ownership boundary.
- A `TODO`, `FIXME`, `pass`, or `unimplemented!()` left where working code was promised.
- Diff line-ending churn (`CRLF` ↔ `LF`) that will conflict with the repo's convention.
- Secrets, tokens, or `.env` content in the staged set.

## Before staging or committing

- Run `git status` after any broad `git add`.
- Read the actual staged diff; do not trust the command summary.
- If a filename looks innocuous but the change is unexpected, read the file's contents before pushing.
- Compute the size of what is about to enter history. `git add .` has swallowed multi-gigabyte dependency directories more than once.

## Reporting the diff

Say what changed, in terms of user-visible outcomes, not file inventory. "The retry path now respects `Retry-After`" beats "modified `client.ts`". Name files only when the reader will need to open them.

If something was left undone, say so in the same breath as what was done. Do not let the diff imply completeness.

## Checklist

- [ ] I read the real diff, not a stat summary.
- [ ] Every changed file maps to a requirement.
- [ ] No debug output, scratch file, or debris remains.
- [ ] No user change was reverted.
- [ ] No placeholder or escape hatch stands where working code was promised.
- [ ] No secret is in the staged set.
- [ ] I reported outcomes, and disclosed what is not done.
