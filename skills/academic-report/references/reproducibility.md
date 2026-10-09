# Reproducibility

## Principle

A result is reproducible if someone else — including you in three weeks — can obtain the same output from the same inputs. If a step exists only in the transcript of the session that produced it, it does not exist.

## What must be recorded

| Item | Why it matters |
|---|---|
| Exact commands, in order | A near-miss command produces a different result |
| Software and library versions | Behaviour changes across versions |
| Environment | OS, shells, locale, encoding, hardware where relevant |
| Random seeds | Without them, a stochastic result is not reproducible |
| Input data source, version, and hash | The data may change under the same name |
| Parameters and settings | The values actually used, not the defaults |
| Derivation steps for reported numbers | So the number can be recomputed |
| What was excluded, and why | Exclusions change results |
| Where outputs were written | So the artifact can be found |

## Rules

1. **A command that produced a result is part of the result.** Do not report an output whose command you cannot restate.
2. **Do not report a number you cannot recompute.** If it came from a one-off script that no longer exists, say so.
3. **Record the seed** for anything random. A range across seeds is stronger than a single seed's value.
4. **Pin versions** in the report when a dependency's behaviour matters.
5. **Note environment quirks that affect results**: locale-dependent number formatting, encoding, timezone, floating-point differences across platforms.
6. **Never write "as expected"** in place of the actual check. State what the expected value was and where it came from.
7. **Distinguish "I ran this" from "this is the standard command".** The report describes what happened.

## Reproducibility debt is a finding

If a step cannot be reproduced — a value copied by hand, a manual GUI operation, a data file that changed — record it explicitly as a limitation. That is honest reporting, not a failure of the report.

## Code deliverables

- A script that must be run twice belongs somewhere durable, not in a fresh temp file each time.
- Record the invocation, not just the code: how it is called, with what arguments, from what directory.
- Preserve the full output of a run to a file, not only the summary shown in the console. Scrollback is not storage.
- If an output is large or regenerable, store the file and note the command that regenerates it — do not paste a truncated version into the report as though it were complete.

## The reproducibility test

Hand the Method section and the code to someone who has never seen the work. Can they produce your headline number?

If not, the missing item is the defect. Add it to the Method, or downgrade the claim to "obtained under conditions not fully recorded".

## Checklist

- [ ] Every reported number has a restatable derivation.
- [ ] Versions, seeds, and parameters are recorded.
- [ ] The commands are in the document, not only in a session transcript.
- [ ] Non-reproducible steps are disclosed as limitations.
- [ ] Outputs were written to a durable location, not only printed.
