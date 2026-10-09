# Formatting and Structure

## Principle

Format is an argument about how the content is organised. Using the wrong one makes correct content harder to read and signals that the writer was not thinking about the reader. Over-formatting is as much a slop pattern as padding.

## Choose the shape from the content

| Content | Shape |
|---|---|
| A sequence of steps or operations | Numbered list |
| A set of parallel items with no order | Bulleted list |
| A comparison across 2+ dimensions | Table |
| Reasoning, causation, mechanism, nuance | Prose |
| A single fact or answer | A sentence |
| Two or three related facts | A sentence, or a short paragraph |
| Structure that changes across an event sequence | A small diagram or a short table |

The most common error is converting reasoning into bullets. Bullets strip the connective tissue — "because", "therefore", "however", "which means" — and with it the argument.

## Lists

- Use numbers when order or count matters; bullets otherwise.
- One item per line, no indentation before the bullet.
- Do not nest bullets. If an item needs sub-points, fold them into the same line with commas, semicolons, or parentheses; if that fails, promote them into their own section with a heading.
- Keep items grammatically parallel within a list.
- Sentence capitalisation; periods only for complete sentences.
- Do not use a list for two items. Two items are a sentence.
- Do not open a list with a full paragraph that already said the items.

## Paragraphs

- One point per paragraph. If the point needs two clauses to state, it is two paragraphs.
- Separate paragraphs with blank lines.
- Keep paragraphs to roughly five sentences. A 200-word paragraph is unreadable; a one-sentence paragraph is usually a bullet in disguise.
- Start with the point, not the setup. The first sentence should be the claim; the rest supports it.

## Headings

- Headings are optional. Use them when a document is long enough that a reader needs a map, or when the required format demands them.
- Short — under about eight words.
- Parallel in form across the same level.
- Descriptive, not decorative. "Results" beats "Exploring the outcomes".
- Not numbered unless the format requires it.
- Plain text, not sentences.
- Do not put a heading over two sentences. If a section is that short, it is a paragraph in the previous section — unless the required format demands the heading, in which case keep it and add the content it needs.
- Do not use a heading as a rhetorical device to make a claim feel structured.

## Length

Match length to the request:

| Request | Target |
|---|---|
| A yes/no or single fact | One sentence |
| "How does X work?" | A paragraph, plus a code block if it helps |
| "Explain the tradeoffs" | A short sectioned answer |
| "Write me a lab report" | The assignment's length |
| "Summarize this" | Substantially shorter than the source |

Do not add sections because a document feels short. Padding is the most visible form of slop in a long document.

## Banned formatting habits

- **Emoji** in any non-casual text, unless the user asks. Never in academic, technical, or professional writing.
- **Bold for emphasis across a whole sentence** — if everything is emphasised, nothing is.
- **Decorative separators** (`---`, `***`, `===`) between sections that have headings already.
- **Nested bullets**, always.
- **Tables used for non-tabular content** — a table with two rows is a pair of sentences.
- **Numbered lists with one item.**
- **Headings in a three-paragraph answer.**
- **A "Conclusion" that restates the introduction.**
- **A "Key Takeaways" box appended to a short answer.**

## Prose versus bullets: the test

Ask: *if I joined these bullets into sentences, would the meaning survive?* If yes, the bullets were hiding prose — write the prose. If joining them loses the structure (a sequence, an inventory, a checklist), the list is correct.

## Math and notation

- Follow the document's convention. For academic work, inline and display math in the required notation; do not mix systems.
- Do not use a bare dollar sign for math in prose where it could be read as currency.
- Symbols get defined at first use.
- Do not use Unicode lookalikes for math symbols in a document that has a notation.
- Prices, percentages, dates, and similar numeric text are plain text, not formulas.

## Code and commands

- Fence code blocks and give them a language tag.
- Inline code for paths, commands, filenames, variables, and function names.
- Never indent a code fence, even inside a list.
- Put a blank line before a code fence.
- Do not include line numbers inside the code content.

## Checklist

- [ ] Each block's shape matches its content.
- [ ] No nested bullets.
- [ ] No list of fewer than three items.
- [ ] Headings are short, parallel, and justified.
- [ ] No emoji, decorative separators, or emphasis inflation.
- [ ] Length matches the request rather than the writer's comfort.
