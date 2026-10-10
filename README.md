# Personal Agent Skill Pack + System Prompt Layers

A personal behavior configuration for Pi / OpenCode and other tool-using agents. It combines a small always-on core, task-conditioned prompt overlays, and progressively loaded procedural Skills.

## Architecture

```text
Global core (short, always on)
  ├── direct, non-sycophantic communication
  ├── truth / uncertainty boundaries
  ├── scope fidelity
  └── no false claims of completed actions
        ↓ when the task matches
Domain overlay (one or a few)
  ├── student learning
  ├── academic writing
  ├── research & web
  ├── coding agent
  ├── data analysis
  ├── creative / artist
  ├── roleplay
  └── decision & argument advice
        ↓ when a procedure is needed
Skill / reference checklist
```

## What's different from the previous version?

The previous version primarily captured task procedures as Skills. This version separates **default assistant behavior** from **conditional work modes**. For example, “do not begin with generic praise; independently evaluate claims” belongs in the global core. A roleplay persona, a student-tutor method, or a multi-source research workflow should only activate when the task calls for it.

## Read these first

- `SYSTEM-PROMPT-ARCHITECTURE.md` — overview of the layers.
- `system-prompts/PLACEMENT-RUBRIC.md` — how to decide where each rule belongs.
- `system-prompts/INDEX.md` — which overlay to load for a given task.
- `system-prompts/00-global-core.md` — portable always-on core.
- `system-prompts/10-agent-operations.md` — only for agents that operate tools/files.
- `system-prompts/overlays/` — task/audience profiles.
- `system-prompts/research-notes/SOURCES-AND-RATIONALE.md` — evidence and extraction notes.

## Install

```bash
unzip personal-agent-skill-pack.zip
cd personal-agent-skill-pack
bash install.sh
```

The installer installs Skills to `~/.agents/skills/`, prompt overlays to `~/.agents/system-prompts/personal-agent-skill-pack/`, and a portable core copy to `~/.agents/AGENTS.core.personal.md`. It backs up replaced Skill/profile directories instead of silently deleting them. It does **not** automatically edit active Pi/OpenCode configuration, so you can review and manually activate the appropriate adapter.

### Activate in Pi

Pi documents `~/.pi/agent/APPEND_SYSTEM.md` as the file that adds instructions to its default system prompt. Review `system-prompts/adapters/pi-append-system.template.md` and append the content to your existing file. Do not replace `SYSTEM.md` unless you intentionally want to replace Pi's default system prompt.

### Activate in OpenCode

OpenCode's standard global personal rules file is `~/.config/opencode/AGENTS.md`. Review `system-prompts/adapters/opencode-global-AGENTS.template.md` and append its rules to the existing file. OpenCode also supports configured instruction files; exact behavior can differ between release lines, so confirm against the documentation for your installed version.

## Weak / distractible model mode

1. Read the global core once through your host adapter.
2. At task start, select the closest overlay via `system-prompts/INDEX.md`.
3. Read the chosen overlay in full. Do not rely on the model to infer a long rule set from a one-line summary.
4. Load the matching Skill's `SKILL.md`; for non-trivial or error-prone tasks, follow its `references/INDEX.md` and read the listed checks.
5. Run the overlay's final checks before responding.

## Important distinction

This is a **synthesis and paraphrase**, not a verbatim reproduction of the two source repositories, and it is not the hidden native system prompt of any vendor model. Local host applications provide user-configurable instruction layers with different names and precedence. The pack uses “global core” to mean your personal always-on defaults within that configurable layer.
