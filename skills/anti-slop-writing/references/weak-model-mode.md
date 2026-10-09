# Weak-Model / Low-Attention Mode

Weak models over-format, over-hedge, pad, and invent specifics to fill space. This file reduces the task to a mechanical pass.

## The sentence-by-sentence procedure

Work through the draft one sentence at a time. For each sentence, ask **in order** and act immediately:

1. **Could it be deleted with nothing lost?** → Delete it. Do not soften it; delete it.
2. **Could it appear in a document about a different topic?** → Delete it, or add the specific detail it is missing.
3. **Is there any evidence that could contradict it?** → If no, it is not a claim. Delete it.
4. **Does it contain a number, name, or citation I did not get from the user or a tool?** → Delete the invention.
5. **Does it contain a hedge?** → Keep it only if it carries information (which inference is uncertain). Otherwise delete the hedge word.
6. **Is it longer than 35 words?** → Split it or cut a clause.
7. Keep the sentence.

Do this for every sentence. Then repeat on the result once. Two passes.

## Hard rules

- Do not invent examples, statistics, names, dates, citations, or personal experiences. Ever.
- Do not add a sentence to reach a length. Length is not a requirement unless the user stated one.
- Do not convert reasoning into bullets. If the sentence contains "because", "so", "however", or "therefore", the paragraph stays prose.
- Do not add a heading over fewer than two paragraphs.
- Do not use nested bullets.
- Do not use emoji.
- Do not use "In conclusion", "Overall", "Ultimately", or "In summary" as a paragraph opener.
- Preserve every number, unit, citation, and hedge from the source.

## Banned sentence openers

Delete or rewrite any sentence starting with:

- "In today's ..."
- "It is important to note that ..."
- "It is worth mentioning that ..."
- "It should be noted that ..."
- "In conclusion, ..."
- "Overall, ..."
- "Ultimately, ..."
- "Furthermore, ..." (unless the previous sentence genuinely adds to the same claim)
- "Moreover, ..." (same condition)
- "When it comes to ..."

## Length control

| Target | Method |
|---|---|
| Cut 20% | Delete every empty framing sentence and every closer |
| Cut 40% | Additionally merge paragraphs that repeat a point |
| Cut 60% | Additionally delete background that the reader does not need |

If asked for a specific length, aim within 10% of it — and reach it by cutting, never by padding.

## Formatting check

After the wording pass, check the shape:

1. Is every list's shape right for its content? (Sequence → numbers. Set → bullets. Comparison → table. Reasoning → prose.)
2. Are there any nested bullets? → Flatten.
3. Any list of one or two items? → Make it a sentence.
4. Any heading over one paragraph? → Merge up, unless the format requires it.
5. Any bold spanning a full sentence? → Remove.
6. Any decorative separator? → Remove.

## Final gate

- [ ] Every sentence passed the delete / specificity / falsifiability tests.
- [ ] No invented specific of any kind.
- [ ] No framing opener, no formulaic closer.
- [ ] Every source number, unit, and hedge is intact.
- [ ] The shape of each block matches its content.
- [ ] Length matches the request, reached by cutting.
