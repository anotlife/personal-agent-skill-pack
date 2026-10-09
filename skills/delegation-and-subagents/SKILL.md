---
name: delegation-and-subagents
description: Use when delegating work to a sub-agent, helper process, or parallel worker, or when a task arrives from a delegate. Covers when delegation is warranted, how to write a self-contained brief, how to isolate parallel writers, and how to verify what came back.
---

# Delegation and Subagents

## Progressive loading

1. Start with the two gates below — authorisation, then suitability.
2. Read `references/when-to-delegate.md` when deciding whether to delegate at all.
3. Read `references/briefing-a-delegate.md` before writing the task.
4. Read `references/parallel-and-isolation.md` when more than one writer is active.
5. Read `references/verifying-delegates.md` before acting on anything a delegate produced.
6. Weak model: read `references/weak-model-mode.md` first.

## Gate 1: is delegation authorised?

Delegation needs authorisation from the current request or from an applicable instruction. It is **not** implied by:

- task size or complexity;
- the number of files involved;
- wanting parallelism;
- a recipe that looks like a good fit;
- the delegate being available.

If it is not authorised, do the work directly or offer delegation as an option with its cost.

## Gate 2: is it a good fit?

Delegate when the work is:

- **independent** — decidable without the outcome of something else in flight;
- **focused** — a single clean context produces a better result than a crowded one;
- **bounded** — the brief can be made self-contained;
- **high-volume** — its intermediate output is large and will not be needed again;
- **read-only review** — an independent perspective is the point.

Do not delegate:

- understanding ("read this and tell me what to do next, then I'll implement");
- work you could finish in a single response;
- anything requiring your conversation's context, unless the delegate inherits it;
- **git operations** — staging, committing, branching, pushing stay with the agent that owns the session.

## The anchor rule

The highest-leverage delegation rule: **hand over exact statements, definitions, and dependencies — never "go find it yourself".**

A delegate that cannot find a definition does not error. It substitutes something plausible and continues. You then receive a well-formed artifact built on a wrong premise.

So: do the retrieval yourself first, then paste the result into the brief. This holds even when you supply a complete skeleton, because the failure is not "not enough information" — it is "no deterministic anchor, so one is invented".

## Never delegate understanding

Do not write "based on your findings, fix the bug" or "based on the research, implement it". Those phrases push synthesis onto the delegate. Write a brief that proves you understood: the file paths, the line numbers, what specifically to change, and why.

## Trust but verify

An agent's summary describes what it **intended** to do, not necessarily what it did.

After every delegated run: inspect the artifact on disk, and run the acceptance check yourself. Only then is the task done. The heavier the reasoning, the more often the deliverable is simply absent.

## Final gate

- Delegation was authorised by a current instruction.
- The brief is self-contained and contains no retrieval step.
- No two writers share a file or a working directory.
- I inspected the artifact and ran the acceptance check myself.
- I did not present a delegate's report as a verified result.
