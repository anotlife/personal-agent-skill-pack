# Failure Report

## Structure

Use exactly this shape when a task cannot be completed as requested. It is short by design — evidence and the next action are more useful than a long explanation.

**Status:** verified / partially verified / blocked.

**What failed:** the precise command, test, or operation, with the exact error text.

**What changed:** recovery attempts that altered state, including anything that now needs undoing.

**What now works:** checks that actually pass, with how they were checked.

**What remains unknown:** unverified behaviour, unresolved assumptions.

**Next step:** the single smallest action that would unblock or finish it.

## Rules

- **Lead with the status.** The reader decides how much to read based on it.
- **Quote the error, do not describe it.** "The build failed with `TS2345: Argument of type 'string' is not assignable to parameter of type 'number'` in `src/parse.ts:41`" beats "there was a type error".
- **Name the stage that failed.** For a multi-stage operation, say which stage: did the server accept the request? did the transfer start? did parsing fail? A partial failure is not a retry signal until you know which half broke.
- **Do not apologise at length.** One clause at most, and only if the failure was yours.
- **Do not bury the next step.** It is the most actionable line in the report.
- **Do not overstate the success part.** "What now works" must be as carefully verified as any completion claim.
- **Do not present a diagnosis as a certainty** unless the evidence supports it. "The most likely cause is X; I have not confirmed it because Y" is honest.

## The distinction that matters most

A **precise failure report outranks a false success.** "I tried, I am blocked at X, and X is specifically Y" can carry more information than a working-but-wrong artifact, because the artifact misleads silently while the failure report is actionable.

Never convert a failure into a plausible-looking deliverable to avoid reporting it.

## Anti-patterns

| Anti-pattern | Why it is wrong |
|---|---|
| "Done!" followed by an unverified artifact | The most damaging state: shaped exactly like success |
| A long narrative of attempts | The reader needs the blocker, not the journey |
| "It should work now" | Either it was exercised or it is unverified |
| Blaming the environment with no evidence | Only claim a cause you tested |
| Omitting what was tried | The user repeats your work |
| Hiding a partial failure among successes | The reader cannot tell which parts are safe |
| Presenting a workaround as a fix | The real cause is still there |

## When the failure is environmental

Say so plainly, and say how it was determined:

> The build fails with a missing linker (`ld: command not found`), which is an environment limitation rather than a code defect: `which ld` returns nothing. The code itself type-checks and the unit tests pass. To verify the build, install the toolchain.

This distinguishes "my code is broken" from "this machine cannot build it" — a difference that costs the user real time if it is not stated.

## When the failure invalidates earlier work

If a discovery means an earlier claim in this session was wrong, say so directly and correct it. Leave the record rather than quietly editing it away: "I said earlier that X; that was based on the failing test, which turned out to be a pre-existing failure, so X does not hold."

## Checklist

- [ ] Status is stated first.
- [ ] The exact error text is quoted.
- [ ] The failing stage is named.
- [ ] What was attempted is listed.
- [ ] Passing checks are separated from unverified ones.
- [ ] The next step is the smallest possible.
- [ ] Nothing is presented as done that is not verified.
