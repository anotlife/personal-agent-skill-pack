# Personal Agent Skill Pack — Core Loading Policy

This pack is designed for progressive disclosure. Do not dump every rule into the model's working context.

## Loading order

1. Keep the short skill list/description available for routing.
2. When a task matches a skill, load that skill's `SKILL.md`.
3. Follow the skill's `## Progressive loading` section — it is a numbered map, not a suggestion.
4. Read `references/INDEX.md` only when the task is non-trivial, ambiguous, or the model needs help selecting detailed rules.
5. Load only the reference files that match the current task.
6. For low-capability or low-attention models, read the skill's `references/weak-model-mode.md` **first**, and follow it as a procedure rather than as advice.

## Reference contract

Reference files are the detailed operational layer. Each contains a principle, explicit rules, worked examples, edge cases, and a checklist. They are procedures. Read them at point of need, not assumed from memory.

When a reference and intuition disagree, the reference wins.

## Layer contract

| Layer | Role | Cost |
|---|---|---|
| `SKILL.md` | Routing, non-negotiable core, loading map, final gate | Always loaded when the skill applies |
| `references/INDEX.md` | Situation → reference table | Loaded when the task is non-trivial |
| `references/*.md` | Principles, rules, examples, checklists | Loaded selectively |
| `references/weak-model-mode.md` | Ordered procedure replacing judgment | Loaded first when the model is weak |

## Conflict handling

Resolve in this order:

1. system / developer / user constraints;
2. explicit task acceptance criteria;
3. project-local instruction files (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, and nested equivalents);
4. the active skill's rules;
5. default style preferences.

If two same-level rules conflict, choose the narrower rule that directly addresses the current task, and disclose the conflict if it changes the result.

## Composition

Skills are additive, not exclusive. Load the baseline plus the skills the task needs:

- `personal-core` is always the baseline.
- `verify-before-claim` applies to anything you will call done.
- Everything else is situational — see `MATRIX.md` for a task → skill routing table.

Do not load every skill into every prompt. Eighteen skills of core rules is a worse instruction set than three relevant ones, because the model can no longer tell which rule governs.

## Design principle

Short `SKILL.md` = routing + non-negotiable core.
References = detailed behavior, loaded on demand.
`weak-model-mode.md` = the same behavior expressed as a checklist that cannot be skimmed past.

This keeps the skill cheap to discover while still providing a deeper policy for weaker or distractible models.
