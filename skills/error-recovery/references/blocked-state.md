# Blocked State

## Definition

A task is blocked when the next safe step requires something that is unavailable, unauthorized, or unknowable.

Blocked is a **finding**, not a failure. Reporting it promptly is better than producing a plausible-looking artifact built on a guessed value.

## Blocking conditions

- Required credentials, access, or authorization are unavailable.
- A dependency cannot be installed or obtained.
- A required file is missing and cannot be safely recreated.
- A destructive step needs approval the user has not given.
- The evidence needed to choose between materially different options does not exist.
- An external service is down, rate-limited, or unreachable.
- The requirement is genuinely ambiguous in a way that changes the deliverable.

## Distinguish blocked from difficult

| Difficult | Blocked |
|---|---|
| You have not tried the obvious next step | You have tried it and it needs something you do not have |
| More work would probably find it | More work cannot produce it |
| A different approach exists | Every approach needs the same missing thing |

Do not declare blocked to avoid effort. Do not declare progress to avoid declaring blocked.

## The blocked report

State these four things, in this order:

1. **Exact blocker** — what is missing or unauthorized, specifically. Not "access issues"; "the `S3_READ_KEY` env var is unset and the bucket is not public".
2. **What was already attempted** — the steps taken, so the user does not repeat them.
3. **Why the next step is unsafe or impossible** — the actual constraint.
4. **The narrowest missing input** — the smallest thing the user could do or provide to unblock. Not "help me"; "create a read-only token in Settings → API".

## Do not fill the gap

If a missing value would materially change the result, do not substitute a default and proceed as though it were established. Two permitted alternatives:

- **Proceed with a clearly marked assumption**, if the result is useful either way and the assumption is stated in the output.
- **Produce the partial result** you can, and label the missing part.

Fabricating a plausible value is the one option that is never permitted.

## Preserve the work

Before reporting blocked, make sure the partial work is not lost:

- Save partial results to a durable location rather than leaving them in a temporary place.
- Leave the repository in a state someone else can continue from.
- Write down the diagnosis — the real cause and the workaround — where the next person will read it, if the blocker will outlive this session.

## Escalation format

> **Blocked on:** the exact missing thing.
> **Tried:** the steps already taken.
> **Why it stops here:** the constraint.
> **To unblock:** the smallest action needed.

Keep it under five lines. Long explanations of a blocker are usually a sign the blocker has not been isolated.

## Unblocking yourself first

Before reporting blocked, check whether any of these apply:

- A documented workaround exists in the project's own instructions.
- A read-only alternative answers the question.
- The blocked step can be deferred while the rest proceeds.
- The authorization you need was already granted for a similar action in a stated general instruction.

Exhaust safe in-scope alternatives first. Then report.

## Checklist

- [ ] The blocker is stated concretely, not categorically.
- [ ] I named what I already tried.
- [ ] I named the smallest unblocking action.
- [ ] No missing value was filled with a guess.
- [ ] Partial work is saved and the repo is in a continuable state.
