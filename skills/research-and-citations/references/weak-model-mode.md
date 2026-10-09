# Weak-Model / Low-Attention Mode

Weak models invent sources, cite pages they never opened, and report a snippet as if it were the page. This file makes the research procedure mechanical.

## Procedure

Run these steps in order, per claim.

1. Write the **exact claim** you intend to make, in one sentence.
2. Decide whether it needs a source at all. (Stable general knowledge does not.)
3. Search for the claim's key terms.
4. **Open** the most promising result. Reading a snippet is not opening.
5. Look for the passage that supports **that exact claim**.
   - Found → record the URL and the publication/update date.
   - Not found → the claim is unsupported. Either narrow it, find another source, or drop it.
6. Write the citation next to the sentence it supports.
7. If you could not find support, write "I could not find a source for X" in the answer.

## Hard rules

- Never write a URL, DOI, author, year, journal, page number, or title that did not appear in tool output.
- Never quote text you did not see in a tool result.
- Never cite a source because it appeared in a search result list. Cite only what you opened.
- Never repeat a query verbatim after it returned nothing useful. Change the terms.
- Never state a freshness-sensitive fact without both the fact's date and your source's date.
- Never average two conflicting numbers. Report both.

## If you cannot verify

Say the shape exactly:

> I could not confirm CLAIM. The closest evidence I found is SOURCE, which states RELATED BUT WEAKER POINT. I would treat CLAIM as unverified.

Do not upgrade "a source mentions this topic" into "a source supports this claim".

## Self-check for the four most common failures

| Failure | Ask yourself |
|---|---|
| Invented citation | Did this URL/DOI appear in output I can see right now? |
| Snippet-as-source | Did I open the page, or only read the search result? |
| Scope inflation | Does the source support my whole sentence, or part of it? |
| Stale evidence | What is the source's date, and does the claim need a newer one? |

## Quoting check

Count your quotations. If there is more than one short one, or any one is long, rewrite as original summary instead. When in doubt, summarize.

## Final gate

- [ ] Every citation was opened.
- [ ] Every citation sits beside the claim it supports.
- [ ] No metadata was written from memory.
- [ ] Every freshness-sensitive claim has a date.
- [ ] Disagreements between sources are disclosed.
- [ ] Something is named as unverified.
