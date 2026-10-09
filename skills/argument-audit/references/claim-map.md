# Claim Map

## The six fields

For each important conclusion:

| Field | Question |
|---|---|
| **Claim** | What exactly is asserted? One sentence. |
| **Evidence** | What observation, measurement, source, or example supports it? |
| **Bridge** | What reasoning connects the evidence to the claim? |
| **Assumptions** | What must be true for the bridge to hold? |
| **Scope** | Where does the claim apply, and where does it not? |
| **Falsifier** | What new evidence would weaken or overturn it? |

This structure prevents the most common failure in long arguments: an evidence pile followed by an unsupported conclusion.

## Why the bridge is the important field

Evidence and conclusion can both be true while the link between them is broken. The bridge makes that link explicit, so it can be inspected.

Example:

> **Claim:** The new sorting routine is faster.
> **Evidence:** Benchmark shows 120 ms vs 240 ms.
> **Bridge:** The benchmark measures the same workload the application performs.
> **Assumption:** The benchmark's input distribution matches production.
> **Scope:** This workload size and this hardware.
> **Falsifier:** A production trace where the new routine is slower.

The evidence is solid and the conclusion is still conditional. Without the bridge field, that condition is invisible.

## Assumption classes

| Class | Where it comes from | How to test it |
|---|---|---|
| Definitional | The meaning of a term | Ask whether both sides mean the same thing |
| Empirical | A claim about the world | Check whether anyone measured it |
| Methodological | "This measure tracks the thing we care about" | Ask for a validity argument |
| Scope | "This result generalises" | Ask for the population and conditions |
| Value | "This is the criterion that matters" | Ask the person, do not decide it |

The fourth and fifth are the ones people omit, and the ones that cause most disagreements.

## Working rules

- One row per important claim. Do not audit every sentence equally; effort should follow consequence.
- Write the claim **before** reading the evidence. Otherwise the evidence shapes the claim.
- If an assumption cannot be stated, the bridge is not understood.
- If a field is empty, the argument has a gap — evidence with no bridge, or a claim with no falsifier.
- For a chain of reasoning, map each link. A chain is as strong as its weakest bridge, not its average.
- Map claims the author makes *implicitly*. The conclusion of a paper is usually a stronger claim than anything the methods section supports.

## Applying the map to your own writing

Build the map for your own draft before submitting it. The field that is usually empty is **Falsifier** — which means the claim is not testable, which means it is not yet an argument.

## Output when auditing

Report in this order:

1. The claim as restated.
2. The strongest evidence for it.
3. The weakest link, named.
4. The strongest version the evidence supports.
5. What would settle it.

## Checklist

- [ ] Every conclusion is stated in one auditable sentence.
- [ ] Every bridge is written out.
- [ ] Every assumption is typed (definitional / empirical / methodological / scope / value).
- [ ] Every scope boundary is stated.
- [ ] Every claim has a falsifier.
- [ ] I applied the same map to my own conclusion.
