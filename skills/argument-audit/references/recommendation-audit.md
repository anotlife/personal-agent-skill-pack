# Recommendation Audit

## Separate four layers

Almost every bad recommendation conflates these. Keeping them apart is the whole method.

| Layer | Content | How it can be wrong |
|---|---|---|
| **Facts** | Specs, price, compatibility, availability, versions | Stale, wrong, or missing |
| **Criteria** | What the user actually values | Assumed rather than asked |
| **Trade-offs** | What improves one criterion at the cost of another | Hidden or misstated |
| **Judgment** | The recommendation itself | Presented as fact |

A recommendation is only valid relative to a stated criterion set. Change the criteria and the answer changes.

## Extract the criteria before comparing

Ask or infer, then state: speed, cost, reliability, learning curve, ecosystem, maintenance, lock-in, privacy, team familiarity, licence, support, long-term viability.

If the user's criteria are unstated, state the ones you are assuming. "Assuming you care most about setup time and least about vendor lock-in, ..." is honest. A bare ranking is not.

## Avoid hidden preference injection

- Do not present your own priorities as objective facts. "X is better" without a criterion is a value statement.
- Do not rank on a criterion the user did not mention and would not accept.
- Do not use "best practice" as a criterion — it is an appeal to an unnamed authority.
- Do not let popularity stand in for fit. What most people use is evidence about the median user, not this user.
- When your preference is genuinely doing work, say so: "I would pick X, mainly because I weight maintenance cost heavily."

## The comparison table

For two or more options, a table forces the criteria into the open.

| Criterion | Option A | Option B | Notes |
|---|---|---|---|

Fill cells with measured or sourced values, not adjectives. "Fast" is not a comparison; "40 ms p95 vs 240 ms p95" is.

Then state the trade-off explicitly: "A wins on latency; B wins on operational simplicity; they are equal on cost."

## Confidence and currency

- If the underlying data are weak, current status is uncertain, or your information may be out of date, narrow the recommendation rather than manufacturing a decisive ranking.
- For anything version-, price-, or policy-dependent, verify current state before recommending.
- Give a confidence level when the ranking is genuinely close: "these are close; either is defensible".

## Output shape

> Best for X because A and B. Weaker for Y because C. The uncertainty is D. If you weight E more, the answer flips to Z.

This shape does four things: it commits to an answer, it names the criteria, it discloses the weakness, and it tells the user when the answer changes. A recommendation that cannot say what would flip it is not grounded in criteria.

## Reversibility and cost of being wrong

For decisions under uncertainty, weight by reversibility:

- Cheap to reverse → decide now, iterate.
- Expensive to reverse → gather more evidence, or choose the option that preserves optionality.
- Irreversible → say explicitly that this is a one-way decision and what evidence would justify it.

A recommendation should account for the cost of being wrong, not only the expected value if right.

## Second-order effects

Ask what happens *after* the recommendation is adopted:

- What does it make harder later?
- What does it commit the user to?
- What is the migration path out?
- Who else is affected?

A recommendation optimised only for first-order benefit tends to be regretted.

## Checklist

- [ ] The criteria are stated, not assumed.
- [ ] Criteria I introduced are labelled as mine.
- [ ] Cells contain values, not adjectives.
- [ ] The trade-off is named explicitly.
- [ ] Confidence and currency are stated.
- [ ] What would flip the recommendation is stated.
- [ ] Reversibility and second-order effects were considered.
