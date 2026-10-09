# Evidence Ledger

## The seven bases

For every important statement, assign exactly one:

| Basis | Meaning | May be stated as |
|---|---|---|
| **given** | supplied by the user (their data, notes, results) | a fact, attributed to them |
| **observed** | measured or seen in the provided material | a fact about this run |
| **derived** | computed from observations by a stated method | a result, with its method |
| **source-backed** | supported by an external source | a fact, with the citation |
| **interpretation** | explanatory reading of the evidence | a reading, explicitly |
| **assumption** | temporary premise needed to proceed | an assumption, stated |
| **unknown** | not established | "not determined" |

## Never promote silently

This is the single rule that makes the ledger worth keeping.

| Illegal promotion | Correct form |
|---|---|
| Protocol says 80 °C → "the temperature was 80 °C" | "the protocol specifies 80 °C (assumption: followed as written)" |
| Two variables moved together → "X caused Y" | "X and Y moved together; this design cannot separate X's effect from Z" |
| One successful run → "the method works" | "the method produced a valid result in one run" |
| A textbook standard → "our measurement matched theory" | "our measurement is 4% below the textbook value" |
| A missing value → a plausible value | "the value was not recorded" |
| A simulated/expected result → an observed result | "no measured result was provided" |

## The four questions per claim

1. Where did this come from — the user, a measurement, a derivation, a source, or me?
2. Does the report say so?
3. Is the strength of the wording appropriate to that basis?
4. What observation would weaken or falsify it?

Question 4 is the one that catches overreach. A claim nobody could falsify with the available data is usually a claim the data cannot support.

## Minimal ledger

Keep this even if it never appears in the report:

| # | Claim | Basis | Location (data, source, derivation) | Confidence | What would weaken it |
|---|---|---|---|---|---|

If a row's "Location" is empty, the claim has no basis. Either find one or mark it as an assumption or as unknown.

## Numeric claims specifically

Every number in a report needs three things:

1. a **source** — measured, given, or derived (with the derivation);
2. a **unit**;
3. a **denominator or conditions**, where the number is a rate, ratio, or share.

"I got 37" is not a result. "37 ± 2 colonies per plate (n = 3)" is.

## Uncertainty vocabulary

| Strength | Wording |
|---|---|
| Direct measurement | "The recorded value was X" |
| Derived with a method | "Computing X from the recorded values by METHOD gives Y" |
| Consistent with a hypothesis | "The result is consistent with H" |
| One of several readings | "One possible explanation is H" |
| Causal | Reserve for designs that identify causality; otherwise say "associated with" |
| Not established | "This was not determined" |

## Checklist

- [ ] Every claim has a basis from the seven.
- [ ] No claim was promoted between bases.
- [ ] Every number has a source, a unit, and conditions where relevant.
- [ ] Missing values are named as missing rather than filled.
- [ ] Causal language appears only where the design supports it.
