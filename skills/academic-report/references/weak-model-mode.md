# Weak-Model / Low-Attention Mode

Weak models fail at academic writing in one specific way: they fill blanks. This file replaces judgment about what may be written with a fill-in structure.

## The blank-filling ban

Before writing any sentence containing a number, a measurement, a citation, or a result, check:

| Question | If the answer is no |
|---|---|
| Did the user supply this value? | Do not write it |
| Is it in data I can see? | Do not write it |
| Did I derive it, with a method I can state? | Do not write it |
| Did I read it in a source I opened? | Do not cite it |

If a required value is missing, write one of:

- `[value not provided]`
- "This was not recorded."
- "The measurement is not available; the following analysis assumes X."

Never write a plausible value. A blank is a question the user can answer; a fabricated value is a defect they will hand in.

## The report skeleton

Fill this in order. Do not write prose outside these slots until every slot has content.

1. **Question** — one sentence.
2. **What was done** — list of steps actually performed.
3. **What was measured** — list of values with units and n. Mark any missing value explicitly.
4. **What was derived** — each derived number with its method in one clause.
5. **What it means** — 2-3 interpretations, each with a stated alternative.
6. **What limits it** — at least two limitations.
7. **What would settle it** — one concrete next measurement.

Only after this is filled does the prose get written. Every sentence in the prose must be traceable to a slot.

## Claim-strength checklist

For each sentence you produce, answer in one word:

- Is this an **observation** (from the record), a **derivation** (with a method), an **interpretation** (a reading), or an **assumption**?

If you cannot answer, rewrite the sentence as an observation or delete it.

## Banned moves

- Inventing a temperature, concentration, timing, sample size, or instrument.
- Writing "as expected" instead of stating the expected value and its source.
- Deleting an outlier without saying so.
- Turning "we expected" into "we observed".
- Writing a specific number in the abstract that does not appear in the results.
- Adding a citation you did not open.
- Writing a Conclusion that introduces a new claim.

## Verification pass

Before finishing, check each of these, one line each:

1. Every number appears in the user's data or in a derivation you can state.
2. Every unit is present.
3. Every n is stated.
4. Every causal word is supported by the design.
5. Every citation was opened.
6. Every limitation is stated.
7. No blank was filled with a guess.

If any line fails, fix it before sending.
