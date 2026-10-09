# Checks That Pass for the Wrong Reason

## Principle

The most dangerous state is not a red check. It is a green check that passed for a reason other than the one you needed. Every check answers exactly one question; the failure mode is silently assuming it answered yours.

Before you believe a green light: **name the one question it actually answered, and confirm that is the question you needed.**

## Four shapes of hollow success

### 1. Formal compliance is not the goal

A gate that rejects placeholders, enforces a line budget, or validates a schema proves the text is well formed. It cannot see that the goal is circular, that you proved something stronger or weaker than asked, or that you proved a restatement of the request. These are honest but hollow failures, and none of them trips a well-formedness error.

Ask: *what would a well-formed artifact that is nevertheless wrong look like here?* That is the shape you must rule out by hand.

### 2. A check that passes may not be running

To find out whether a guard, audit, or lint rule does anything, do not feed it a correct input. A correct input passes whether the check ran, was misconfigured, or was silently skipped.

**Feed it a deliberately wrong input.** A live check reports the error; a dead one stays silent. A dead check and a missing check are indistinguishable on correct input, and only a wrong input separates them. This is the cheapest known way to tell "the check exists" from "the check is working".

### 3. Self-check is not usability

A verifier reporting "complete" is checking the artifact's internal consistency, never whether everything you meant to put in it is actually there. These two questions are orthogonal. A `git bundle verify` success once hid 16 gitignored files; only a real `git clone` exposed it.

For backups, exports, and serialized output: "self-check passed" is necessary and not sufficient. The only thing that proves completeness is using the artifact once for its real purpose.

### 4. Existence is not content

After a tool writes a file, the natural checks are existence, size, and exit code. All three miss: *is the content what it claims to be?* Reading a few hundred lines costs seconds. Discovering that the whole task rested on a wrong premise costs the task.

## The escape-hatch scan

Every ecosystem has a construct that compiles, type-checks, and passes CI while implementing nothing. They are legal code, so no error surfaces, and "it built" reads as "it works".

| Ecosystem | Silent no-op |
|---|---|
| Python | `pass`, `...` |
| Rust | `todo!()`, `unimplemented!()`, `panic!("todo")` |
| TypeScript | `as any`, `@ts-ignore`, non-null `!` |
| Java | `throw new UnsupportedOperationException()` |
| Lean / Coq | `Admitted`, `sorry` |
| Any | Function that returns a constant, hard-coded expected value |

**A separate scan that greps for these is the only thing that catches them.** Never let "it built" stand in for "it works", and quote that scan next to any success claim.

## Partial-failure misattribution

When a multi-stage operation fails, a partial failure is not automatically a retry signal. Diagnose which stage failed first:

- Did the server accept the request? (quota spent, work done)
- Did the transfer start?
- Did parsing the result fail?

If the server side succeeded and a later stage died, blind retries re-spend the cost and fail identically. Fix the failing stage's environment before retrying.

## Checklist

- [ ] I named the question each green check answered.
- [ ] I confirmed that is the question the user needed answered.
- [ ] I tested any guard I am relying on with a deliberately wrong input.
- [ ] I scanned for placeholder escapes rather than trusting "it built".
- [ ] I checked content, not only existence and size.
- [ ] If the artifact has a real consumer, I used it once for its real purpose.
