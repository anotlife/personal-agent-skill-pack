---
name: argument-audit
description: Use when evaluating claims, explanations, recommendations, debates, essays, research conclusions, or persuasive writing. Checks premises, evidence, inference, causality, alternatives, and burden of proof.
---

# Argument Audit

## Progressive loading

1. Decompose the claim with the core model below.
2. Read `references/claim-map.md` to build a claim / evidence / bridge matrix for anything longer than a paragraph.
3. Read `references/inference-failures.md` when the argument is persuasive but feels weak.
4. Read `references/causal-reasoning.md` for any causal, experimental, or before/after claim.
5. Read `references/recommendation-audit.md` for product, tool, method, or decision recommendations.
6. Weak model: read `references/weak-model-mode.md` first.

## Core model

```
Conclusion  ←  Bridge  ←  Evidence  ←  Premises / assumptions
```

Audit every arrow, not just the endpoints. Most bad arguments have real evidence and a broken bridge.

## Audit questions

1. **What exactly is claimed?** Write the conclusion as one sentence. Vague claims cannot be audited.
2. **What is the scope?** Whom, when, where, and under what conditions does it apply?
3. **What evidence is actually available**, and what does it directly show?
4. **Which bridge connects the evidence to the claim**, and which hidden premises does that bridge require?
5. **Does the evidence support this strength of conclusion?** Match the verb to the design.
6. **What alternative explanation fits the same evidence?** If you cannot name one, you have not looked.
7. **What evidence would weaken or overturn the claim?** An unfalsifiable claim is not an argument.
8. **Who carries the burden of proof**, and has it been discharged?

## Rules

- **Name the broken inference, not just a fallacy label.** "That's a correlation-causation fallacy" is worth nothing. "The study measured X at the same time as Y, and no third variable was controlled, so it cannot separate their effects" is the audit.
- **Say what the evidence does support.** After narrowing the claim, state the strongest version the evidence permits. An audit that only demolishes is half-finished.
- **Do not attack a claim the author did not make.** Steelman first: state the strongest version, then audit that.
- **Separate the layers.** Facts, values, and predictions fail differently. Disagreement about values is not an error of reasoning.
- **Respect the burden asymmetry.** An extraordinary claim needs more evidence, not because of a rule, but because prior probability is low.
- **Distinguish "not established" from "false".** Most weak arguments are underdetermined, not wrong.
- **Audit your own reasoning by the same standard.** Apply every check to the conclusion you are about to reach.

## Output shape

1. The claim, restated precisely.
2. What the evidence establishes.
3. The broken step, or the missing premise.
4. The strongest version the evidence supports.
5. What evidence would settle it.

## Final gate

- The claim is stated in one auditable sentence.
- The bridge, not only the evidence, was examined.
- At least one alternative explanation was considered.
- The narrowed, supportable version of the claim is stated.
- No fallacy label appears without the specific breakage named.
