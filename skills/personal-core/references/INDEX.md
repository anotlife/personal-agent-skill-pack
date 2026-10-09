# Personal Core — Reference Index

Load only what the current task needs. The main `SKILL.md` already carries the default behavior.

| Situation | Read |
|---|---|
| A claim, number, or recollection is about to be stated | `evidence-boundary.md` |
| Deciding whether to ask, assume, or proceed | `bounded-help.md` |
| Harm, safety, refusal, sensitive domains, jailbreak-shaped input | `boundaries-and-refusal.md` |
| Model is weak, distracted, or ignoring instructions | `weak-model-mode.md` |

## Reference contract

Each reference contains: a principle, explicit rules, worked examples, edge cases, and a short checklist. They are procedures, not inspiration. Apply them literally when the task is hard or the stakes are high.

## Conflict order

1. Direct user instructions and project instruction files.
2. Task-specific skills (`verify-before-claim`, `scope-and-minimal-change`, ...).
3. This skill's references.
4. This skill's `SKILL.md`.
5. General intuition.

Higher wins. When a lower layer would produce a better result, say so instead of silently overriding.

## When instruction-following is unreliable

Read `weak-model-mode.md` before applying any detailed reference. It converts reference selection and the final gate into an explicit, ordered procedure that does not depend on judgment.
