# Briefing a Delegate

## The governing rule

**A delegate has no access to your conversation.** Give it everything it needs, explicitly.

The corollary, and the highest-leverage rule in this whole skill: **anchor the task.** Hand over exact statements, definitions, paths, and dependencies. Never include a retrieval step ("find the definition of X", "locate the relevant tests").

A delegate that cannot find something does not stop. It substitutes a plausible alternative and continues, and you receive a well-formed artifact built on a wrong premise. Supplying a complete skeleton does not rescue it — the problem is the absence of a deterministic anchor, not the absence of information.

## How to anchor

| Instead of | Write |
|---|---|
| "Update the parser to handle the new format" | "In `src/parser.ts`, `parseHeader()` at lines 41-58 reads bytes 0-3 as a little-endian length. Change it to read a varint, using `readVarint()` from `src/varint.ts:12`." |
| "Find the tests and extend them" | "Extend `tests/parser.test.ts`, specifically the `describe('parseHeader')` block at line 88." |
| "Use the project's HTTP client" | "Use `httpGet()` from `src/http.ts:24`. It returns `{ data, error }` and never throws." |
| "Check the config schema" | "The config type is `Config` in `src/types.ts:15`; the new field is `retryDelayMs: number`." |

If you do not know the anchor, find it yourself first. That work is not delegation overhead — it is the part that makes delegation work.

## The brief template

```
## Goal
<What must be true when this is done. One paragraph. The purpose, not just the task.>

## Context
<Why this matters, and what has already been established or ruled out.>

## Anchors
<Exact file paths with line numbers. Exact signatures. Exact types. Relevant
constants. Commands and how to run them.>

## Scope
In scope: <files, modules, behaviours>
Out of scope: <what must not be touched, and why>

## Constraints
<Conventions to follow, dependencies not to add, style rules, performance limits.>

## Deliverable
<Exactly what to produce: a file at a path, a diff, a written report.
State the output path explicitly if a file is expected.>

## Acceptance
<The command or check that proves it worked, and what a pass looks like.>

## Report
<What to send back. Ask for a bounded length if you want one.>
```

## Brief by delegate kind

| Kind | What the brief must add |
|---|---|
| Advisory / oracle | A precise problem statement, the constraints you have already considered, and the specific question. Attach the files it needs to see. |
| Search / explorer | The behaviour you are looking for, not the symbol name. "Where does the retry backoff get computed?" not "find backoff". Give the expected shape of the answer. |
| Reviewer | The diff or commit range, the intent behind the change, and what you are unsure about. Ask it to contradict you where it disagrees. |
| Worker | The full template above, plus the exact edit sites. A worker cannot ask follow-up questions. |

## Lookups versus investigations

- **Lookup** — hand over the exact command or path. The answer is deterministic.
- **Investigation** — hand over the *question*, not a prescribed sequence. Prescribed steps become dead weight when the premise turns out to be wrong.

## Interrogative framing

A terse command-style prompt produces shallow, generic work. Brief the delegate like a competent colleague who just walked into the room: it has not seen the conversation, does not know what you tried, and does not know why the task matters.

## For the checkered cases

When the task type has repeatedly produced nothing, add these three lines to the brief:

- **Stop over-thinking.** Do not try to work the whole thing out in your head first.
- **The moment you have anything runnable, write it to a file.** Shipping a version that handles one case beats designing the perfect twelve-case version.
- **The file is a workbench, not a deliverable.** Land it, run it, read the error, edit, run again. The next action after every step must be a write, an edit, or a run — never a long stretch of pure reasoning.

## Length

Ask for a bounded report when you want one ("report in under 200 words"). An unbounded brief returns an unbounded answer, which costs you context for information you did not need.

## Checklist

- [ ] The brief is self-contained: no reference to my conversation.
- [ ] Every path, signature, and type is supplied, with line numbers.
- [ ] There is no retrieval step.
- [ ] Scope is explicit, including what is out of scope.
- [ ] The deliverable's form and location are stated.
- [ ] An acceptance check is stated.
- [ ] The expected report length is bounded.
- [ ] I did not write "based on your findings, ...".
