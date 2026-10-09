# Slop Pattern Catalog

These are **failure modes, not a banned-word list**. The question is never "does this word look AI-generated" but "does this sentence carry information". A precise sentence may use any word; a vague sentence is slop however plain its vocabulary.

## A. Empty framing

Sentences that announce the existence of content rather than containing it.

| Pattern | Example |
|---|---|
| Generic opener | "In today's rapidly changing world, ..." |
| Importance announcement | "It is important to note that ..." |
| Scope announcement | "There are several factors to consider." |
| Promise-of-content | "Let us delve into the complexities of ..." |
| Metadiscourse | "This section will discuss ..." (when the heading already says so) |

**Fix:** start with the actual subject, constraint, result, or question. Delete the announcement.

## B. Artificial contrast

| Pattern | Problem |
|---|---|
| "It's not just X; it's Y" | Usually false — it is both, or it is X |
| "This isn't about X. It's about Y." | Rhetorical escalation with no content |
| "Rather than X, we do Y" where X was never a live option | Strawman for rhythm |
| "X is not merely A but B" | Doubles the claim without evidence |

**Fix:** state the relationship directly. If X and Y both hold, say both.

## C. Forced triads and parallelism

Everything arrives in threes: three adjectives, three clauses, three benefits. Rhythm is doing the work that evidence should do.

**Fix:** use as many points as the content requires. Two is fine. Four is fine. One is fine.

## D. Significance inflation

| Pattern | Correction |
|---|---|
| "This groundbreaking approach" | State what it does and how much better |
| "Revolutionises how we think about X" | Say what changed |
| "Opens up a world of possibilities" | Name one possibility |
| "A testament to the importance of X" | Say what X did |
| "Paves the way for future research" | Name the specific next question |

Rule: scale the claim to the evidence. A 3% improvement is a 3% improvement.

## E. Synonym inflation

| Slop | Plain |
|---|---|
| leverage, utilise, harness | use |
| facilitate, enable (as filler) | let, allow |
| delve into, dive into | examine, read |
| myriad, plethora, a wealth of | many |
| robust, comprehensive, cutting-edge | (state the specific property) |
| navigate the complexities of | handle |
| embark on a journey | start |
| underscore, highlight (as filler verbs) | show |
| tapestry, landscape, realm, testament | (delete) |

**Fix:** choose the most ordinary precise term. Do not "improve" a word by making it grander, because grandeur trades precision for tone.

## F. Hedge stacking

"It may potentially suggest that there could possibly be..." — four hedges for one uncertainty is not more accurate, it is less informative, because it hides which inference is uncertain.

**Fix:** hedge the inference, not the measurement. "The trend is consistent with X" is one hedge, at the right place.

## G. Formulaic closers

Paragraphs end with a "therefore / broader implication / ultimately" sentence that adds nothing. Documents end with a "In conclusion" section that restates the introduction.

**Fix:** end where the reasoning ends. Delete the closer. If a conclusion section is required by format, it must add the synthesis, not the summary.

## H. Repetitive semantics

The same claim appears three times in different words. Each repetition feels like emphasis; the reader experiences it as padding and begins to distrust the density of the rest.

**Fix:** keep the strongest instance, delete the echoes. Check the introduction against the conclusion: they often say the same thing twice.

## I. Fake specificity

Invented examples, made-up statistics, plausible-looking names, imagined scenarios, unverifiable citations. This is the most damaging slop, because it is indistinguishable from real content until checked.

**Fix:** use only supplied or verified specifics. If none exist, write in the abstract and say what is missing.

## J. Vague magnitude

| Pattern | Problem |
|---|---|
| "significantly improved" | How much? |
| "vastly more efficient" | By what measure? |
| "a large number of users" | How many? |
| "much faster" | Than what? |
| "widely regarded as" | By whom? |

**Fix:** attach a number, a comparison, or a source — or drop the magnitude word entirely.

## K. Nominalisation

Actions become abstract nouns, and the actor disappears.

| Slop | Direct |
|---|---|
| "The implementation of the optimisation resulted in an improvement" | "We optimised the loop; runtime fell 40%" |
| "There is a need for consideration of X" | "Consider X" |
| "The utilisation of caching enables performance enhancement" | "Caching makes responses faster" |

**Fix:** verbs instead of noun phrases. Name the actor when the actor matters.

## L. Bullet-point prose

Content that is genuinely a sequence or a set is presented as bullets so it looks organised; or prose is chopped into bullets to look scannable, destroying the argument's connective tissue.

**Fix:** use lists for enumerable items, comparisons, or steps. Use prose for reasoning, causation, and nuance. See `formatting-and-structure.md`.

## M. Symmetric padding

Every section the same length, every paragraph the same shape, every list three items. Symmetry is a signal that the content was shaped to a form rather than to the material.

**Fix:** let sections be as long as their content. A one-sentence method section is fine if the method is one sentence.

## N. Empty transitions

"Furthermore", "Moreover", "Additionally", "In addition to this" connecting sentences that have no actual logical relationship — or whose relationship is additive but unstated ("and", not "moreover").

**Fix:** name the actual relationship: causes, contradicts, refines, precedes, is an instance of. If there is no relationship, the sentences should not be adjacent.

## O. Unearned confidence verbs

"proves", "demonstrates", "establishes", "confirms" applied to a single observation or a correlation.

**Fix:** match the verb to the design. "proves" requires a proof; a single run "produced" or "showed".

## The meta-rule

Delete the sentence if it survives the delete test, the specificity test, and the falsifiability test from the skill body. Most slop is not bad prose — it is prose that should not exist.
