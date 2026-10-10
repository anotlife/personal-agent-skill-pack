# Personal Agent Prompt Architecture

This document is the design summary for the prompt layers in this pack.

## Layers

1. **Global core (`system-prompts/00-global-core.md`)** — short, stable defaults: anti-sycophancy, epistemic honesty, scope fidelity, direct communication, and honest action reporting.
2. **Agent operations (`system-prompts/10-agent-operations.md`)** — only for sessions with tool/file/action capabilities.
3. **Domain and audience overlays (`system-prompts/overlays/`)** — student, academic, research, coding, data, creative, roleplay, or decision tasks. Load only when the current task matches.
4. **Skills and references (`skills/*/SKILL.md`, `references/`)** — detailed procedures, checklists, repair patterns, examples, and edge cases. Load at point of need.
5. **Task-local instructions** — current output schema, requested tone, word count, grading rubric, specific data, and deliverable constraints.

## Design goal

Put **high-frequency, cross-domain, high-cost-to-omit, low-conflict** rules in the global core. Put **conditional process** in operations layers and Skills. Put **audience, domain, genre, and persona** in overlays. Keep exact deliverable formatting in the user task unless it is a stable user preference.

## Why no universal role prompt?

“Act as a professor,” “be a researcher,” “be concise,” “always be comprehensive,” and “always ask questions” all optimize for a subset of tasks. A computer-science student may need a worked explanation in one turn, a ready-to-submit formatted report draft in another, and unembellished code in a third. The router should identify the task mode instead of treating one identity as permanent.

## Platform note

“System prompt” here means the highest-level personal behavior instructions the host agent lets the user configure. It is not the same as editing the model provider's hidden system prompt. Pi exposes `APPEND_SYSTEM.md` and `SYSTEM.md`; OpenCode's usual user-level persistent instructions live in `~/.config/opencode/AGENTS.md`. Follow `system-prompts/adapters/` for the host you use.
