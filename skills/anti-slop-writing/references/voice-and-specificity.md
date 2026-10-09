# Voice and Specificity

## Principle

Natural writing is not characterised by quirks. It is characterised by **specific choices**: the actual object, the real constraint, the exact number, the named person. Vagueness is what makes writing feel machine-made, and specificity is the fix — not the addition of personality.

## The specificity ladder

For any vague phrase, climb as far as the available evidence permits.

| Rung | Example |
|---|---|
| 1. Empty | "This aspect is important" |
| 2. Named | "The cache eviction policy is important" |
| 3. Qualified | "The cache eviction policy determines worst-case latency" |
| 4. Quantified | "The LRU eviction policy adds up to 40 ms at 90% occupancy" |
| 5. Evidenced | "... measured over 1,000 runs on the staging cluster (p95 = 38 ms)" |

Stop at the rung your evidence supports. Rung 5 with invented numbers is worse than rung 3 with real ones.

## Replacements

| Vague | Specific |
|---|---|
| "this aspect", "this area", "this topic" | name the thing |
| "various factors", "several considerations" | list them, or say you cannot |
| "significantly", "substantially", "greatly" | quantify, or delete |
| "some users", "many people" | a number, or "we did not measure how many" |
| "widely regarded", "it is well known" | cite, or attribute to no one |
| "in some cases" | which cases |
| "recently", "nowadays" | a date |
| "a lot of work" | hours, commits, lines, or nothing |
| "the problem", "the issue" | which problem |
| "improved", "optimised" | what changed, by how much |

## Concrete nouns and verbs

Prefer the actor and the action over the abstraction:

| Abstract noun phrase | Noun and verb |
|---|---|
| "the implementation of the optimisation" | "we optimised the loop" |
| "a reduction in latency was achieved" | "latency fell" |
| "consideration should be given to" | "consider" |
| "makes use of" | "uses" |

If a sentence has no agent doing anything, it is usually reporting an abstraction rather than an event.

## The user's own terminology

Use the words the user uses, consistently. If they call it a "ledger", do not rename it a "register" for variety. Consistency signals you are writing about *their* thing; synonym variation signals you are generating text.

Same for their domain's terms, their project's names, and their abbreviations.

## Personal voice

Use a person's style only from evidence they supplied: their previous writing, an explicit request, or a stated preference.

- Do not infer personality from sparse context.
- Do not invent a backstory, an opinion, or a habit.
- Do not add first-person experience the writer did not have.
- Do not make writing deliberately sloppy to seem human.

If asked to match a voice, extract its measurable features — sentence length, formality, whether they use contractions, how they open, how direct they are — and apply those, not an impression of the person.

## Sentence rhythm

Rhythm follows from content, not from a formula:

- Let a long sentence carry a complex relationship.
- Let a short one land a conclusion. 
- Do not alternate lengths on a pattern; readers notice mechanical variation.
- If three consecutive sentences share the same structure, one of them probably wants to be merged or cut.

## The two tests

**Specificity test:** could this sentence appear in a document about a different topic? If yes, it says nothing about this one.

**Falsifiability test:** is there any evidence that could contradict it? If no, it is not a claim.

## What "sounding human" does not mean

- Adding "honestly" or "to be fair".
- Adding a joke.
- Making grammatical mistakes.
- Writing shorter, choppier sentences everywhere.
- Using casual vocabulary in a formal document.
- Pretending to have opinions or experiences you do not have.

## Checklist

- [ ] Every vague phrase was climbed as far as the evidence permits.
- [ ] Terms match the user's own vocabulary consistently.
- [ ] No invented experience, opinion, example, or number.
- [ ] No sentence survives the specificity test unless it is a transition.
- [ ] Sentence length varies with content, not with a pattern.
