# Causal Reasoning

## A causal claim needs four things

1. **Association** — X and Y vary together, measured, not assumed.
2. **Temporal order** — X precedes Y.
3. **Non-spuriousness** — no third variable explains both.
4. **Mechanism** — a plausible pathway, ideally measured.

Association plus time is not causation. Most bad causal claims have (1) and (2) and assert (3) and (4).

## The questions

1. What changed? Precisely — which variable, by how much, over what period.
2. What outcome changed? The same three details.
3. What **else** changed at the same time? Weather, staffing, a policy, a measurement instrument, a version, an incentive, a season.
4. Is there a control, comparison group, repeated observation, or natural experiment?
5. Could any of these explain the pattern on their own: selection, measurement error, regression to the mean, confounding, reverse causality, or a common cause?
6. Is the proposed mechanism measured, or merely plausible?

## The alternative-explanation checklist

| Alternative | Ask |
|---|---|
| **Confounding** | Is there a variable that causes both X and Y? |
| **Reverse causality** | Could Y be causing X? (Symptoms diagnosed after illness, features shipped after adoption) |
| **Selection** | Did the groups differ before the intervention in ways related to the outcome? |
| **Regression to the mean** | Were the extreme cases selected *because* they were extreme? |
| **Measurement** | Did the way the outcome was measured change at the same time? |
| **Common cause** | Is a third event driving both? |
| **Simultaneous trend** | Was the outcome already trending this way before X? |
| **Hawthorne / placebo** | Did attention alone change behaviour? |
| **Attrition** | Who dropped out, and did they differ from who stayed? |

If you cannot name at least one plausible alternative for a given dataset, you have not examined the data.

## Designs, ranked by what they identify

| Design | What it can support |
|---|---|
| Randomised controlled trial | Causal effect in the studied population |
| Natural experiment / discontinuity | Causal effect under the discontinuity's assumptions |
| Difference-in-differences | Causal effect if the parallel-trends assumption holds |
| Instrumental variable | Causal effect if the instrument is valid and relevant |
| Pre/post with a control | Effect if the control isolates the change |
| Pre/post, no control | "X changed after Y" and nothing more |
| Cross-sectional correlation | Association only |
| Single case | An observation, not a pattern |

State which design was used and therefore which rung the evidence reaches.

## The safe ladder

1. "X and Y were observed together."
2. "The change in Y followed the change in X, with no control group."
3. "The difference between the treated and control groups was Z, assuming the groups were comparable."
4. "The evidence supports X as one contributor, alongside A and B."
5. "X caused a change of Z in the studied population under the study's conditions."

Use the strongest rung the design warrants. The most common error is jumping from 2 to 5.

## Mechanism

A plausible mechanism strengthens a claim; it does not establish it. Many plausible mechanisms are wrong, and the strongest causal evidence comes from designs, not narratives.

When the mechanism is proposed rather than measured, say so: "the mechanism is inferred from the timing, not measured."

## Bidirectional and feedback systems

Where X affects Y and Y affects X, a single correlation cannot identify direction. Ask for an exogenous shock, a lag structure, or an intervention. State plainly that the data cannot separate the directions.

## Writing it up

- Match the causal verb to the design: "associated with" for cross-sectional, "followed" for pre/post, "caused" only where identified.
- Name the main alternative and say why it is less likely, or say you cannot rule it out.
- Name the check that would discriminate.

## Checklist

- [ ] I named at least one plausible alternative explanation.
- [ ] I stated the design and therefore the rung.
- [ ] The causal verb matches the design.
- [ ] The mechanism is labelled measured or inferred.
- [ ] I said what would discriminate between the explanations.
