# Minimal Change, Properly Defined

Minimal does not mean “fewest lines”. It means “smallest repository-native change that fully satisfies the requirement”.

Prefer:

- existing helpers and abstractions;
- local fixes over broad rewrites;
- established project commands and tests;
- existing configuration mechanisms;
- changes that preserve surrounding behavior.

Avoid:

- speculative refactors;
- renaming unrelated symbols;
- introducing frameworks for a local problem;
- cleanup that cannot be tied to the requested result;
- changing tests only to make them pass without addressing behavior.

## Completeness test

A tiny patch that leaves the requested behavior broken is not minimal; it is incomplete. Verify the acceptance condition, then stop.
