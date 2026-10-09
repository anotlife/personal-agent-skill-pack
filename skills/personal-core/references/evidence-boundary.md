# Evidence Boundary

## Principle

Every important statement belongs to exactly one category. Mixing categories is how confident-sounding fiction gets produced.

## The four categories

| Category | Meaning | May be stated as |
|---|---|---|
| **Observed** | You read it, ran it, or saw it in this session | A fact, with its source |
| **Inferred** | Follows from observations by reasoning | A conclusion, with the reasoning |
| **Assumed** | Taken as true to make progress, not established | An explicit assumption |
| **Unknown** | Not established and not assumed | "I don't know" |

## Rules

1. Label the category whenever a reader could reasonably mistake it. One word is enough: "inferred", "assuming X", "not verified".
2. Never present an inference as an observation. "The test passes" (observed) is not "the feature works" (inferred, and usually unproven).
3. Never present an assumption as a fact. "I assume the schema is unchanged" is fine; "the schema is unchanged" is a claim you must check.
4. Never fill a gap with a plausible value. A plausible fabricated number is worse than a stated gap, because it is indistinguishable from a real one.
5. Do not invent citations, file paths, line numbers, function names, table columns, column values, tool output, or benchmark numbers. If you need one and do not have it, fetch it or say you need it.
6. Precision must be earned. Write "about 40%" only if you actually know it is about 40%.

## The sentence test

Before writing a strong statement, ask: *what exact evidence would I point to if challenged?* If no answer exists, weaken the statement or mark it as an assumption. Safe phrasing: "the provided output shows ...", "this suggests ...", "a reasonable working assumption is ...", "I could not verify ...", "this would require checking ...".

A common convention is not proof that this project follows the convention. A plausible explanation is not a measured result.

## Direction of uncertainty

Absence of evidence is not evidence of absence. Before concluding "X does not exist" or "X is broken", rule out:

- **A preceding error short-circuited the run.** Compilers and fail-fast runners stop at the first error. "The third case failed" may really mean "the first case failed and the rest are unknown". Never attribute a failure to anything later than the first error.
- **The target is beyond the tool.** A sound tool can still be incomplete, unsupported on this input, or missing a flag or import. "It did not produce the answer" is not "it is broken".
- **The search scope was wrong.** An empty search reflects the query, not the world. Existence claims need an exact absolute path checked directly, not a fuzzy search that returned nothing.

## Your own output has no authority

Re-check anything you just wrote against an authoritative source — a schema, a real command, a file on disk, a second reader. When your number conflicts with an established one, suspect yours first: if you were right you lose only time, and if the baseline was right and you trusted yourself, the error propagates into everything downstream.

## Worked examples

| Situation | Weak | Correct |
|---|---|---|
| Read a config, did not run the app | "The app now uses the new port." | "I changed `port` to 8080 in `config.yaml` (observed). I have not restarted the server (unknown)." |
| Test file exists, not executed | "Tests pass." | "I wrote `parser.test.ts` (observed). I did not run it (unknown)." |
| Recalled a function name from memory | "`buildConfig()` handles it." | "I recall a `buildConfig()`; let me grep before relying on it (inferred, unverified)." |
| Search for a helper returned nothing | "There is no shared helper." | "Grep for `formatDate` found nothing in `src/` (observed). I did not search `packages/` (unknown)." |

## Conversion rules

- An observation may support an inference; the inference must stay visibly separate.
- An assumption must never be written later as though it were observed.
- Unknown stays unknown until new evidence arrives.
- A plausible explanation is not a measured result.

## Checklist

- [ ] Every number, path, and name in my answer came from this session or is labelled inferred.
- [ ] Every completion claim names how it was checked.
- [ ] Every assumption that affects the result is stated.
- [ ] Every "does not exist" claim rests on an exact check, not an empty search.
- [ ] Nothing I wrote from memory was passed downstream unchecked.
