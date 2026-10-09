# Task Boundary

## Principle

Extract the boundary before acting. Most scope violations are not decisions to overstep — they are the result of never having stated what the task was.

## Extract four things

1. **Outcome** — what must be true when finished. Written as an observable, not a verb.
2. **Scope** — which files, components, data, or systems are involved.
3. **Constraints** — language, version, style, performance, format, deadline, and platform limits.
4. **Exclusions** — what must *not* change, even if it looks wrong.

Write these down for anything beyond a trivial edit. Reading them back before the first edit catches most drift.

## Directive or inquiry

This single distinction prevents more unwanted changes than any other rule.

| Signal | Reading |
|---|---|
| "How would I...", "What's the best way to...", "Should we..." | Inquiry — answer, do not edit |
| "Can you explain...", "Why does..." | Inquiry |
| "Make a plan for..." | Plan only |
| "Review / audit / check this" | Findings only |
| "I noticed X is broken" | Information, not a work order |
| "Fix / implement / add / change / rename / remove X" | Directive — do the work |
| "Do it", "Go ahead", "Ship it" | Directive, scoped to what was just discussed |

**If the user asks *how* to do something, explain first; do not do it.** This is the most frequently violated rule in agent behavior, because doing the work feels more helpful than explaining it.

## Underspecified directives

An underspecified directive is still a directive. "Change `methodName` to snake case" does not want the string `method_name` back — it wants the method renamed in the code. Locate the referent and act on it.

When the request is generic, interpret it in the context of the current working directory and the project's purpose. Do not ask for clarification that the repository can supply.

## Implied authorization

A directive authorizes the steps required to complete it, plus the reversibility-cheap steps that keep it correct. It does not authorize:

- fixing adjacent defects;
- upgrading dependencies;
- reformatting files you touched;
- adding configuration, flags, or options "while we're here";
- writing documentation the user did not ask for;
- creating a plan document, design document, or analysis document as an artifact.

Planning material belongs in the conversation, not in a new file in the repo.

## Ambiguity resolution

Resolve low-impact ambiguity with a conventional default and state it in one line. Ask only when different interpretations would produce materially different deliverables, or when the risk of guessing wrong is real.

Two questions are almost never both necessary. Ask the one whose answer changes the most.

## Blocker test

An unrelated defect becomes actionable only when it prevents verification, or prevents the requested path from working. Otherwise mention it in one line and record it separately; do not fix it.

## Checklist

- [ ] I can state the outcome as an observable.
- [ ] I listed what is out of scope, including things that look wrong.
- [ ] I classified the request as directive or inquiry, and my actions match.
- [ ] Anything I added maps to a numbered request or a stated constraint.
- [ ] I did not create a planning or analysis document the user did not ask for.
