# Personal Agent Prompt Architecture

This document is the design summary for the prompt layers in this pack.

## Layers

1. **Global core (`system-prompts/00-global-core.md`)** — short, stable defaults: anti-sycophancy, epistemic honesty, scope fidelity, direct communication, and honest action reporting.
2. **Agent operations (`system-prompts/10-agent-operations.md`)** — only for sessions with tool/file/action capabilities.
3. **Domain and audience overlays (`system-prompts/overlays/`)** — student, academic, research, coding, data, creative, roleplay, or decision tasks. Load only when the current task matches.
4. **Skills and references (`skills/*/SKILL.md`, `references/`)** — detailed procedures, checklists, repair patterns, examples, and edge cases. Eighteen skills, each with a short `SKILL.md` plus a `references/` directory loaded at point of need.
5. **Task-local instructions** — current output schema, requested tone, word count, grading rubric, specific data, and deliverable constraints.

## Loading policy

Load in this order, and stop as soon as the task is covered:

1. the global core (always on);
2. one or two overlays, only if the task matches (`INDEX.md` §1);
3. the matching skill's `SKILL.md`, then its `references/INDEX.md`, then only the references the task needs;
4. situation-specific skills (`INDEX.md` §2) when the session — not the domain — calls for them;
5. `references/weak-model-mode.md` from the single most relevant skill, on a weak or distracted model.

**Budget.** More than three skills for one task means the dominant mode has not been identified yet. Do not load every skill into every prompt: eighteen sets of core rules is a worse instruction set than three relevant ones, because the model can no longer tell which rule governs.

**Conflict order.** Platform safety → explicit user request → project instruction files → global core → active overlay → active skill → style defaults. When two rules at the same level conflict, follow the narrower one that directly addresses the task, and say so if the choice changes the result.

## Design goal

Put **high-frequency, cross-domain, high-cost-to-omit, low-conflict** rules in the global core. Put **conditional process** in operations layers and Skills. Put **audience, domain, genre, and persona** in overlays. Keep exact deliverable formatting in the user task unless it is a stable user preference.

## Why no universal role prompt?

“Act as a professor,” “be a researcher,” “be concise,” “always be comprehensive,” and “always ask questions” all optimize for a subset of tasks. A computer-science student may need a worked explanation in one turn, a ready-to-submit formatted report draft in another, and unembellished code in a third. The router should identify the task mode instead of treating one identity as permanent.

## Platform note

“System prompt” here means the highest-level personal behavior instructions the host agent lets the user configure. It is not the same as editing the model provider's hidden system prompt. Pi exposes `APPEND_SYSTEM.md` and `SYSTEM.md`; OpenCode's usual user-level persistent instructions live in `~/.config/opencode/AGENTS.md`. Follow `system-prompts/adapters/` for the host you use.

## Further reading

- `system-prompts/INDEX.md` — the task-cue router (overlays and situation-specific skills).
- `system-prompts/PLACEMENT-RUBRIC.md` — the five tests for whether a rule belongs in the always-on core.
- `system-prompts/research-notes/SOURCES-AND-RATIONALE.md` — the evidence behind each placement decision.
- `AGENTS.core.md` — the portable core plus the pack's loading and conflict order.
- `MATRIX.md` — the skill/reference matrix and the prompt-layer routing matrix.
