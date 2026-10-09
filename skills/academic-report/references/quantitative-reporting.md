# Quantitative Reporting

## Every number needs three things

1. A **source** — measured, given by the user, or derived (with the method).
2. A **unit**.
3. **Conditions** — the denominator, sample size, settings, or scope.

"37" is not a result. "37 ± 2 colonies per plate, n = 3, incubated 24 h at 37 °C" is.

## Units and scale

- Report units on every value, in every table and axis label.
- Do not mix units inside a column or a comparison.
- Convert once, at the start, and record the factor used.
- Watch scaling errors: `ms` vs `s`, `kB` vs `KB`, `%` vs percentage points, `mg` vs `µg`.
- Percentages need their base. "A 20% increase" is ambiguous: 20% of the baseline, or 20 percentage points?
- A ratio without its reference is meaningless.

## Significant figures and rounding

- Do not report more digits than the measurement supports. A stopwatch read to 0.1 s does not produce `12.3478 s`.
- Carry full precision through intermediate steps; round only the reported value.
- The reported value should match the precision of the input with the fewest significant figures.
- When reporting a mean, report the spread at a comparable precision: `12.3 ± 0.4`, not `12.3478 ± 0.4213`.
- Never round in a direction that changes the conclusion. If the conclusion depends on the third decimal, say so.

## Uncertainty

| Situation | What to report |
|---|---|
| Repeated measurements | Mean with standard deviation or standard error, and n |
| Single instrument reading | Instrument resolution or stated tolerance |
| Derived quantity | Propagated uncertainty, or at least the dominant contribution |
| Fitted parameter | Value with its confidence interval |
| Simulated result | Seeds, repetitions, and a spread across seeds |

State which quantity the error bar represents: SD, SE, SEM, CI, or range. "±" alone does not say.

Do not silently drop a failed replicate. If you exclude data, say what was excluded, why, and how the result changes if it is included.

## Tables and figures

- A table: columns of one kind each, units in the header, aligned decimals, sorted or grouped meaningfully.
- A figure: labelled axes with units, a legend, and a caption that stands alone.
- A caption states what is shown, under what conditions, with what n, and what the reader should notice.
- Do not use a figure for two numbers, or a table for a sentence.
- Do not plot a bar chart of two values to make them look different. Show the actual spread.
- Keep axis scales honest: a truncated y-axis exaggerates small differences. If you truncate, say so.
- Log scales need a reason, and the reason should be visible in the caption.

## Statistical reporting

When reporting a test, include:

- the test name and why it fits;
- the statistic and its degrees of freedom;
- the p-value, without over-interpreting thresholds;
- the **effect size**, which is what a reader actually cares about;
- the confidence interval;
- the sample size per group.

A p-value is not an effect size. "Statistically significant" is not "important", and with a large enough n almost anything is significant.

## Sanity checks before submitting

- Order of magnitude: is the number physically plausible for this system?
- Limits: does a proportion lie in [0, 1]? Is a mass non-negative?
- Consistency: do the parts sum to the whole? Do subtotals match the total?
- Units: do the units of a formula's left side match its right?
- Direction: does the sign make sense?
- Comparison: how does this compare to the textbook value, and is the difference within the stated uncertainty?
- Reproducibility of the headline number: recompute it by a second route.

## Checklist

- [ ] Every number has a source, a unit, and conditions.
- [ ] Significant figures match the measurement precision.
- [ ] Every error bar states what it represents.
- [ ] Tables and figures are self-explanatory.
- [ ] Effect sizes accompany p-values.
- [ ] Excluded data is disclosed.
- [ ] The headline number was recomputed by an independent route.
