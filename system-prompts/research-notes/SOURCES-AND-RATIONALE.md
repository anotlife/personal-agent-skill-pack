# Research Notes: Why the layers are separated

This is a synthesis of transferable behavior patterns, not a claim that any leak is an authoritative or complete account of a vendor's deployed model. The source repositories are community-maintained collections; individual captures can be partial, outdated, tool-specific, or model-version-specific. The generated prompts here are original paraphrases designed for personal use.

## Representative observations

- **Content authority.** The Claude Code captures state that tool results may contain data from external sources and that a suspected prompt-injection attempt should be flagged to the user rather than acted on, and they treat pasted content as possibly containing instructions the user did not write. That is a cross-task rule with a high cost of omission, which is why it belongs in the core rather than in a skill.
- **Credential protection.** The Gemini CLI capture opens with “Never log, print, or commit secrets, API keys, or sensitive credentials” as a core mandate, alongside protecting `.env` files and system configuration folders. A single leak is unrecoverable, so the rule is always-on rather than task-conditional.
- **Authorization scope.** The Claude Code captures are explicit that “a user approving an action (like a git push) once does NOT mean that they approve it in all contexts” and that “authorization stands for the scope specified, not beyond.” The principle is universal; the specific gates depend on what the host platform permits, which is why the detail sits in the agent-operations layer.
- The CL4R1T4S Claude 4.1 capture explicitly bans generic praise at the beginning of a response and separately says to critically evaluate claims rather than agree for politeness. This supports a global rule against empty flattery, but the broader principle is independent evaluation, not a ban on all positive feedback.
- The same capture contains extensive separate workflows for search, citations, safety, and roleplay, which illustrates why domain/tool-specific instructions should not all be permanently loaded.
- The system_prompts_leaks OpenCode capture explicitly describes loading a specialized Skill to inject detailed workflow guidance and same-directory resources. That is evidence for progressive disclosure as an architecture, not a requirement to place all details in the global prompt.
- The public Anthropic prompting guidance recommends clear and direct instructions, examples for specialized behaviors, and warns that different model versions may differ in how much self-checking they need. This argues for an invariant core plus model/task-specific overlays, and for testing instead of blindly importing one model's prompt.
- Google's public prompting guidance recommends putting critical behavioral constraints, persona, and output format up front. That supports a small core, not a giant catch-all that tries to encode every possible user and task.
- Pi documents distinct user-level `SYSTEM.md`, `APPEND_SYSTEM.md`, and instruction/context files. OpenCode documents global user instructions via `~/.config/opencode/AGENTS.md` and also supports separately configured instruction files. The file placement must therefore be adapted to the host agent.

## Sources

1. CL4R1T4S, Claude 4.1 capture: https://github.com/elder-plinius/CL4R1T4S/blob/main/ANTHROPIC/Claude-4.1.txt
2. CL4R1T4S, Codex capture: https://github.com/elder-plinius/CL4R1T4S/blob/main/OPENAI/Codex.md
3. system_prompts_leaks, OpenCode instructions and Skill loading: https://github.com/asgeirtj/system_prompts_leaks/blob/main/OpenCode/opencode.md
4. system_prompts_leaks, Claude Code captures (content authority, authorization scope, tone and style): https://github.com/asgeirtj/system_prompts_leaks/blob/main/Anthropic/claude-code/claude-code-sonnet-5.md
5. system_prompts_leaks, Gemini CLI core mandates (credential protection, context efficiency): https://github.com/asgeirtj/system_prompts_leaks/blob/main/Google/gemini-cli.md
6. Anthropic, Claude prompting best practices: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
7. Google AI for Developers, Prompt design strategies: https://ai.google.dev/gemini-api/docs/prompting-strategies.md
8. Pi, Configuration: https://pi.dev/docs/latest/configuration
9. OpenCode, Rules: https://opencode.ai/docs/rules/

Research pass checked: 2026-10-10. Extended pass on the global core (content authority, secrets, authorization scope) checked against the sources above; re-check these living sources when adapting the pack to a new model or agent version.
