# Search Routing

## Decide whether to search

Search when the answer depends on:

- current versions, prices, policies, laws, schedules, availability, or people's roles;
- niche terms or unfamiliar entities, products, papers, or datasets;
- a named paper, repository, PDF, or webpage;
- recommendations where current options matter;
- explicit user verification requests;
- anything after your knowledge cutoff.

Do **not** search to add citations to stable general knowledge. Explaining what a binary search is does not require a source; stating the current Python release does.

## Evidence hierarchy before searching

1. **The user's own materials** — files, data, the repo, the message. Cheapest and most authoritative for their question.
2. **Authoritative APIs or datasets** — a database, registry, or first-party endpoint. Reproducible and citable.
3. **Web search** — for what neither of the above covers.
4. **Your own knowledge** — last, and only for stable, general facts.

Prefer a structured source over a search engine, and a search engine over recall.

## Query progression

1. Start with a **narrow** query containing the decision-relevant terms (entity + property + date).
2. Identify promising first-party or primary sources from the results.
3. Open the **original page**, not the snippet. Snippets are not valid sources — they omit scope, date, and context.
4. Broaden only if evidence is missing, contradictory, or incomplete.
5. Search the **unresolved edge case**, not a paraphrase of the original query. Repeating a query gets the same result.

Run 2-4 *varied* queries rather than one, when the first pass leaves real uncertainty: different phrasing, different scope, different angle. Run them in parallel.

## Research decomposition

For broad questions, split into independent subquestions and research them separately, then synthesize. Do not let the first result become the answer to every subquestion.

Search multiple attributes of a single entity separately; process multiple entities one at a time. A combined query returns a blurred answer.

## Opening pages, not just reading results

- Read the page you are citing. If you cannot open it, you cannot cite it — cite something you did open, or say the page was unreachable.
- Extract the specific passage that supports the claim, and note where it sits (methods, discussion, an editorial aside).
- Record the publication or update date while you are on the page; it is expensive to go back for.

## Stop rule

Stop when:

- additional searches are unlikely to change the answer;
- every requested claim has direct support;
- important conflicts have been checked rather than avoided;
- you can name what you could not establish.

Stopping with a named gap is a complete answer. Continuing without a new question is churn.

## Checklist

- [ ] Every claim's source was a page I actually opened.
- [ ] I used the original source, not a snippet or a secondary summary of it.
- [ ] Queries after the first were for genuinely new subquestions.
- [ ] I can state what remains unestablished.
