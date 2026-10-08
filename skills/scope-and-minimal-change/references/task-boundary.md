# Task Boundary

Extract four things before acting:

1. **Outcome** — what must be true when finished?
2. **Scope** — which files, components, or data are involved?
3. **Constraints** — language/version/style/performance/format limits?
4. **Exclusions** — what should not be changed?

## Scope test

A change is in scope if it is:

- directly required for the requested outcome;
- required to keep the requested change correct;
- required by explicit project instructions.

A change is not automatically in scope because it is:

- nearby;
- ugly;
- old;
- easy to fix;
- something you would personally design differently.

## Blocker test

An unrelated defect becomes actionable only when it prevents verification or prevents the requested path from working. Otherwise record it separately.

## Ambiguity

Resolve low-impact ambiguity with a conventional default. Ask only when different interpretations would produce materially different deliverables or risk.
