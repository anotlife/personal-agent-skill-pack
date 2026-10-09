# Formatting Rules

## The proportionality rule

Use the **minimum** formatting that makes the answer clear. Over-formatting is a defect: it implies structure the content does not have, and it makes a short answer look like a document.

A two-sentence answer with a heading, three bullets, and a bolded conclusion is worse than the two sentences alone.

## Markdown

- GitHub-flavoured Markdown. The output is rendered in a monospace font.
- Blank line before any list, and between a heading and the content that follows it.
- Use backticks for paths, filenames, commands, function names, variables, and keywords.
- Fenced code blocks for anything multi-line, with a language tag.
- Do not indent a code fence, even inside a list.
- Never include line numbers inside code content.

## Headings

- Optional. Use them when the answer has real parts, or when the format requires them.
- Title case, short, under about eight words.
- Parallel in form at the same level.
- No heading over a single short paragraph.
- Not numbered unless the format requires it.
- Never use a heading as rhetorical emphasis.

## Lists

- Bullets for a set of parallel items; numbers for a sequence.
- Flat only. Never nest bullets. Fold sub-points into the same line with commas, semicolons, or parentheses; if that fails, promote them to a headed section.
- At least three items. Two items are a sentence.
- One clause per item where possible.
- Parallel grammar within a list.
- Do not restate an intro paragraph as the first bullet.

## Emphasis

- Bold for a term being defined, or a result the reader must not miss. Not for whole sentences.
- Italic sparingly, for terminology at first use.
- No ALL CAPS emphasis.
- Do not bold every other phrase. If everything is emphasised, nothing is.

## Tables

Use a table when the content is genuinely tabular: several items compared across the same dimensions, or exact mappings.

Do not use a table for:
- two items;
- content that reads linearly;
- a summary at the end of an answer;
- a list of one column.

## Emoji and decoration

- No emoji unless the user asks for them. None in academic, technical, or professional output.
- No decorative separators (`---`, `***`) between sections that already have headings.
- No "✅ / ❌" status markers unless the format or the user calls for them.
- No banner comments or ASCII dividers.

## Referring to code

| Style | Use |
|---|---|
| `` `src/client.ts:41` `` | A specific location — the most useful form |
| `` `parseConfig()` `` | A named symbol |
| `` `src/client.ts` `` | A file as a whole |
| A link, if the renderer supports it | Clickable navigation; link text should be the path |

- Never cite a line number you did not confirm. A wrong line number is worse than none.
- Do not paste large blocks of code the user already has. Quote the changed lines.
- When showing code that exists in the codebase, reference the file and lines rather than reproducing the whole function.

## Math

- Follow the document's convention. Do not mix notations within one document.
- In academic output, inline and display math in the required markup; define symbols at first use.
- Never include a citation inside a math span.
- Treat prices, percentages, dates, and units as text, not formulas.
- Do not use Unicode lookalikes for math symbols in a document that has a notation.

## Diagrams

When a relationship is genuinely clearer as a picture than as prose — three or more components, a data flow, a state sequence, a hierarchy — use a diagram. Prefer the **smallest** useful one: a table for mappings, a short flow for a sequence, a tree for hierarchy.

Do not add a diagram because an answer has parts. Do not use a diagram for a single fact or a one-step action.

If the renderer supports Mermaid, use it; if not, a plain-text diagram in a fenced block is fine. Never invent a renderer that is not there.

## Language and tone

- Plain words over jargon, except where the term is the precise one.
- Active voice by default.
- Define a term on first use if the reader may not know it.
- Match the user's own terminology rather than introducing synonyms.
- Do not use a technical term when a common one is exact; do not use a common one when the technical term is required.

## Inclusivity in prose

- When a person's pronouns are unknown and unstated, use they/them. A name does not tell you someone's pronouns, and a wrong guess misgenders a real person.
- Do not infer any personal attribute from a name.

## Checklist

- [ ] Formatting is the minimum that makes this clear.
- [ ] No heading over one paragraph.
- [ ] No nested bullets; no list of fewer than three items.
- [ ] No emoji, decorative separators, or emphasis inflation.
- [ ] Code references use confirmed line numbers.
- [ ] Any table has more than one row of real comparison.
