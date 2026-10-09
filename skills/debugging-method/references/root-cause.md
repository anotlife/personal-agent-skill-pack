# Root Cause

## The distinction

A **cause fix** removes the reason the bad state arises. A **symptom fix** prevents the bad state from causing visible damage. Symptom fixes accumulate: each one adds a guard, and the guards interact.

| Symptom fix | Cause fix |
|---|---|
| Clamp the negative value | Find why it went negative |
| Catch and ignore the error | Find why the error occurs |
| `if (x != null)` at every use | Fix what produced the null |
| Add a retry | Find why the first attempt fails |
| Widen the tolerance | Find the unit or precision error |
| Delete or skip the failing test | Fix the code the test caught |
| `--no-verify` | Fix what the hook caught |
| Restart the service | Find why it stops |

Symptom fixes are not always wrong. They are wrong when they **replace** the diagnosis rather than following it.

## The five questions

A diagnosis is complete when you can answer all five:

1. **What** is wrong — the exact line, condition, or configuration.
2. **Why** it produces this symptom — the mechanism, in terms of values and control flow.
3. **When** it started — the change or condition that introduced it, if determinable.
4. **What else** it affects — other call sites, inputs, or environments.
5. **The fix** — and whether it is a cause fix or a workaround.

"A null check fixed it" answers none of them.

> "The cache stores a timestamp in seconds while the comparison expects milliseconds, so any entry older than about 24 days is treated as fresh. It affects both the TTL path and the manual expiry check. Fixing the comparison; the stored format stays for compatibility with existing entries, which is a workaround we should revisit."

That answers all five.

## Do not use destructive shortcuts

- **Do not bypass the check.** If a hook, test, or lint caught something, fix the cause. If the check itself is wrong, say why and change the check deliberately — do not silence it.
- **Do not delete unexpected state.** A lock file, an unfamiliar branch, an unstaged change, a stray file may be someone's in-progress work. Investigate before removing.
- **Do not discard to make it go away.** Reverting a change that caused the failure is legitimate; deleting the thing that revealed the failure usually is not.
- **Do not lower the bar.** Widen a tolerance, increase a timeout, or reduce a sample size only when you can say why the original was wrong.

## Wake-up questions before you call something fixed

- Could this same bug exist at another call site? Search for the pattern, not the one instance.
- Does the fix hold for inputs other than the failing one?
- Did the fix change behaviour anywhere else?
- Is the bug now impossible, or merely harder to trigger?
- Would a reviewer call this a fix or a patch?

## Workarounds

A workaround is acceptable when:

- the cause is genuinely outside your control (a third-party bug, a platform limitation);
- fixing the cause would exceed the task's scope and the user has been told;
- a fix is needed now and the cause can be addressed later.

When you use one, record it where the next person will read it: what the real cause is, and why the workaround exists. A comment is appropriate here precisely because it explains a non-obvious why.

Do not leave a workaround unlabelled. The next reader will assume it is the intended behaviour and build on it.

## Intermittent and unreproduced bugs

If you cannot reproduce it, you cannot confirm a fix. Options:

- Add instrumentation that will capture the state if it recurs.
- Add an assertion that turns a silent corruption into a loud failure.
- Report it as unresolved with the evidence gathered.

Do not present a speculative change as a fix. "I made a change that might address it" is honest; "fixed" is not.

## Cleanup

After a cause fix:

- Remove the debugging instrumentation you added, unless it has lasting value — in which case, make it a proper log line rather than a print.
- Remove guards you added speculatively while investigating, if the cause fix made them unnecessary.
- Check that the diff contains only the fix, not the archaeology.

## Checklist

- [ ] I named the mechanism, not just the location.
- [ ] I checked whether the same bug exists elsewhere.
- [ ] The fix addresses the cause, or is labelled a workaround with the cause recorded.
- [ ] I did not bypass a check or delete unexpected state.
- [ ] I know whether the bug is impossible now, or merely harder to hit.
- [ ] Debugging instrumentation is removed or promoted to a real log.
