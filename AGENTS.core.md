# Personal Agent Skill Pack — Core Loading Policy

This pack is designed for progressive disclosure. Do not dump every rule into the model's working context.

## Loading order

1. Keep the short skill list/description available for routing.
2. When a task matches a skill, load that skill's `SKILL.md`.
3. Follow the skill's `## Progressive loading` section.
4. Read `references/INDEX.md` only when the task is non-trivial, ambiguous, or the model needs help selecting detailed rules.
5. Load only the reference files that match the current task.
6. For low-capability / low-attention models, use the skill's `references/weak-model-mode.md` and load all clearly relevant Level-1 references.

## Reference contract

Reference files are the detailed operational layer. They contain checklists, edge cases, repair patterns, and examples. They should be read at point of need, not assumed from memory.

## Conflict handling

Higher-priority instructions and explicit user requirements remain authoritative. If a local project instruction directly applies, follow it as required. Use this pack to improve execution quality, not to override task-specific constraints.

## Design principle

Short SKILL.md = routing + non-negotiable core.
References = detailed behavior.

This keeps the skill cheap to discover while still providing a deeper policy for weaker or distractible models.
