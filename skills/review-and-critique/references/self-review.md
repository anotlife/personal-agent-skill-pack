# Self-Review

## Principle

You review your own work more often than anyone else's, and you are the worst-placed reviewer for it: you already believe the change is correct, which is exactly the assumption the review is supposed to test.

So make the checks mechanical. Do not ask "does this look right?" Ask the specific questions below.

## Before claiming completion

1. **Re-read the actual diff.** Not your memory of it. Not the summary you wrote. The diff.
2. **Every changed file maps to a requirement.** If a file has no requirement next to it, revert it.
3. **Read the artifact.** Existence is not content. A few hundred bytes read in seconds.
4. **Run the acceptance check.** The command, the output, the exit code.
5. **Scan for placeholders.** `pass`, `...`, `todo!()`, `unimplemented!()`, `as any`, `@ts-ignore`, `throw new Error("not implemented")`, a hard-coded return value.
6. **Check the tests actually ran.** Not "there are tests", not "it compiled".
7. **State the residual uncertainty.** What you did not check.

## The four questions a green check must answer

Every check answers exactly one question. Name it, and confirm it is the question you needed.

| Check | Actually answers | Does not answer |
|---|---|---|
| It compiles | Syntax and types | Behaviour |
| Lint passes | Style and some statics | Behaviour |
| Unit tests pass | Named cases | Unnamed cases |
| It runs once | It ran here | It runs elsewhere |
| The file exists | It exists | Its content |
| The output looks right | It looks right | It is right |

The most dangerous state is a green check that passed **for the wrong reason**.

## Does the check actually run?

To find out whether a guard, lint rule, or audit does anything, do not feed it a correct input — a correct input passes whether the check ran, was misconfigured, or was silently skipped.

**Feed it a deliberately wrong input.** A live check reports the error; a dead one stays silent. A dead check and a missing check are indistinguishable on correct input.

## Adversarial pass

After the mechanical checks, try to break your own work:

- What is the smallest input that would break this? (Empty, one, null, huge, negative.)
- What happens if the operation fails halfway?
- What happens if two of these run at once?
- What did I assume about the environment, the input, or the caller?
- Which of my claims rests on something I did not check?
- If a reviewer wanted to find a flaw, where would they look first?

## Reverting test

For each change: **if I reverted this, would any check fail?**

If no, the change is unverified — you have no evidence that it does anything. That is the most common way a fix is actually a no-op.

## The overreach check

Re-read your claims and compare them to your evidence:

| Claim | Requires |
|---|---|
| "Fixed" | The reproduction now passes |
| "Works" | The user-visible path was exercised |
| "Tests pass" | The command ran and its output was read |
| "Matches" | A comparison against an independent source |
| "Complete" | Every requested part verified |

Downgrade any claim whose evidence you do not have.

## What a self-check cannot establish

- **Internal consistency is not usability.** A verifier reporting "complete" checks the artifact against itself, never whether everything you meant to put in it is there. For backups, exports, and serialized output, the only thing that proves completeness is using the artifact once for its real purpose.
- **Self-review is not independence.** You share your own assumptions. When the stakes are high, get a different reader — a fresh context that cannot inherit your mental model.
- **A passing review is not proof.** It is evidence that one reader found nothing.

## Reporting

Say what you verified, how, and what you did not. Three lines:

> Changed the TTL comparison in `cache.ts:41`. `npm test` — 42 passed, including the new regression test at `cache.test.ts:88`. I did not run the app against a real Redis instance.

## Checklist

- [ ] I read the real diff.
- [ ] Every changed file maps to a requirement.
- [ ] I read the artifact, not just its metadata.
- [ ] I ran the acceptance check and read its output.
- [ ] I scanned for placeholders.
- [ ] I named what each green check actually answered.
- [ ] The reverting test fails for at least one check.
- [ ] I stated the residual uncertainty.
