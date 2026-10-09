# Parallel and Isolation

## The one-writer rule

**One writer per file, per working directory.** Two writers in the same place produce interleaved changes that cannot be attributed, and no amount of review will untangle them.

Partition by path, not by "which part of the file". If two tasks need the same file, they are sequential, not parallel.

## What may run in parallel

| Parallel-safe | Reason |
|---|---|
| Read-only tasks of any kind | No state is mutated |
| Writes to **disjoint** file sets | No conflict |
| Independent investigations | Results combine, nothing shared |
| Separate tests on separate artifacts | No shared output |

## What must be serialised

| Must serialise | Reason |
|---|---|
| Two writers on one file | Attribution and conflict |
| Anything touching a shared contract (schema, type, public API, migration) | Order determines the result |
| A step that consumes another's output | Real dependency |
| Anything mutating shared external state (a database, a deployment, a remote branch) | Non-deterministic interleaving |
| Plan then implement | Implementation depends on the plan |

## Isolation

For concurrent writers, give each its own checkout:

- a **worktree** per writer when the work touches the same repository;
- a **separate directory** when the work is on separate artifacts;
- a **separate branch** when results must be reviewed independently.

Rules:

- Create the isolation from a known base, and state the base.
- Confirm the isolated copy is clean before the writer starts.
- Never let two writers share an isolated copy.
- Clean up the isolation when the work ends, or tell the user where it is.
- Merge in an order that keeps the repository buildable at each step.

## Batching independent calls

When you are the one issuing parallel calls (not delegating):

- Issue genuinely independent reads, searches, and diagnostics together.
- Do not issue two edits to the same file in one batch — the second is computed against stale content.
- Sequence anything that depends on a previous result.
- Parallelism reduces latency; it is not a way to widen exploration. Do not fire ten searches hoping one is relevant.

## Dispatch without blocking

- Launch independent work and return control, rather than waiting for each result in turn.
- Consume results at the dependency barrier, not before.
- If you need a result immediately for the next step, that work was not parallel — it was sequential with extra ceremony.

## One writer, one contract

Never let two writers modify the same shared contract concurrently, even in different files. Two independent changes to a schema, a type, or an interface compose into something neither writer tested.

Sequence them, or give one writer ownership of the contract and the other a dependency on it.

## Checklist

- [ ] Every concurrent writer has a disjoint path set or its own checkout.
- [ ] No shared contract is being mutated by two writers.
- [ ] Dependencies are serialised, not parallelised.
- [ ] Parallel calls are genuinely independent.
- [ ] Isolated copies were created from a known base and will be cleaned up.
- [ ] I did not wait synchronously for work I launched in parallel.
