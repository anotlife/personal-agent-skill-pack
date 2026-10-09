# Planning

## Principle

A plan is a decision-making artifact, not a description of the obvious. **A plan that leaves the reader making decisions has not done its job.**

## Decision-complete

A plan is finished when the implementer needs no further decisions. That means it names:

- the approach, and why this one rather than the alternatives considered;
- the interfaces: APIs, function signatures, schemas, I/O shapes;
- the data flow, end to end;
- the edge cases and failure modes, and what happens in each;
- the testing and acceptance criteria — what observation counts as success;
- the rollout, migration, or compatibility constraints;
- the explicit assumptions made where a choice was needed.

If any of those would be a decision the implementer has to make, the plan is incomplete.

## Two kinds of unknown

Treat these completely differently.

### Discoverable facts

Repository truth: file locations, config values, current implementations, API shapes, existing conventions, whether a flag exists.

**Explore first. Do not ask.** "Where is this struct defined?" is answerable in one search. If multiple candidates exist, present them with a recommendation rather than asking an open question.

### Preferences and trade-offs

Not discoverable: priorities, acceptable cost, willingness to break compatibility, preferred style, timeline.

**Ask early**, with two to four mutually exclusive options and a recommended default. If the answer does not come, proceed with the default and record it as an assumption in the plan.

The most common planning failure is asking a discoverable question, or failing to ask a preference question and quietly choosing.

## Exploration before planning

Do at least one targeted non-mutating pass before proposing anything. A plan written from the request alone is a guess about the codebase.

Allowed while planning: reading, searching, inspecting configs and schemas, static analysis, dry runs, and builds or tests that write only to caches and build directories.

Not allowed while planning: editing files, running formatters that rewrite files, applying migrations or codegen that updates tracked files, and any side-effecting command whose purpose is to carry out the plan rather than refine it.

The test: *would this be described as "doing the work" or "planning the work"?* If doing, do not do it.

## Plan mode is not changed by tone

If a plan mode or an explicit "plan first" instruction is active, it stays active regardless of how imperative the user's next message sounds. "Do it now" while in plan mode is a request to **plan the doing**.

## Structure of a plan

1. **Title and one-line summary.**
2. **Objective** — what must be true when this is done.
3. **Approach** — the chosen design, and the alternative rejected and why.
4. **Interfaces** — exact signatures, schemas, and shapes that change.
5. **Steps** — ordered, each with its own completion criterion.
6. **Edge cases and failure modes.**
7. **Testing and acceptance criteria** — concrete scenarios.
8. **Assumptions and defaults** — the choices you made where the request was silent.
9. **Out of scope** — what this plan deliberately does not do.
10. **Risks** — what could go wrong, and the mitigation.

Keep it readable by a person and by an agent. Headings, short paragraphs, tables where a table fits.

## Do not ask "should I proceed?"

Once a complete plan exists, hand it over. The user can act on it or refine it. Adding an approval question to a finished plan wastes a turn.

Exception: if the plan mode explicitly requires approval to exit, follow that instruction.

## Presenting options

When two approaches are genuinely competitive, present them as a small table of criteria — effort, risk, reversibility, effect on existing users — and recommend one with a reason. Do not present five options and no recommendation; that pushes the decision back onto the user, which is what a plan exists to prevent.

## After approval

If the plan changes during implementation, say so and say what changed. A plan that silently diverges from the work is worse than no plan, because it was used to authorise the work.

## Checklist

- [ ] Every interface change is stated exactly.
- [ ] Every step has a completion criterion.
- [ ] Edge cases and failure modes are covered.
- [ ] Testing and acceptance criteria are concrete.
- [ ] Assumptions are listed.
- [ ] Out-of-scope items are explicit.
- [ ] The plan contains no decision left to the implementer.
- [ ] I explored before planning, and did not mutate anything while planning.
