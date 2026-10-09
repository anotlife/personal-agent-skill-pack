# Sources and Extraction Notes

## Primary source repositories

- elder-plinius/CL4R1T4S — https://github.com/elder-plinius/CL4R1T4S
- asgeirtj/system_prompts_leaks — https://github.com/asgeirtj/system_prompts_leaks

Both are living collections and change over time. This pack extracts cross-model patterns rather than reproducing any single vendor's prompt.

## Representative patterns consulted

### Agentic coding systems

- Claude Code system prompts and tool guidance — `Anthropic/claude-code/*.md` (task execution, memory system, sub-agents and forks, tool discipline, git committing, text output and tone, executing actions with care)
- Claude Code agent definitions — `Anthropic/claude-code/agents/*.md`
- OpenAI Codex — `OpenAI/Codex/*.md`, `CL4R1T4S/OPENAI/Codex*.md` (autonomy by request type, destructive actions, skills protocol, communication channels, file-editing constraints, dirty worktree)
- Cursor — `Cursor/cursor.md`, `CL4R1T4S/CURSOR/Cursor_2.0_Sys_Prompt.txt` (code citation formats, tool-calling rules, comment policy, mode selection)
- Amp — `Misc/amp-code.md` (mode-specific agency, pragmatism and scope, discovery discipline, parallel execution policy, sub-agent roles, response channels, file links, frontend anti-slop)
- Gemini CLI — `Google/gemini-cli.md` (context efficiency, research→strategy→execution lifecycle, sub-agent orchestration, git rules, confirmation protocol, topic updates)
- t3 code — `Misc/t3-code.md` (plan mode: discoverable facts vs preferences, decision-complete plans, mutation rules)
- GitHub Copilot CLI — `Microsoft/copilot-cli.md` (mode prompts, sub-agent definitions, continuation summaries)
- Zed — `Misc/zed.md` (communication, tool use, code block formatting, multi-agent delegation)
- Devin, Windsurf, Cline, Replit Agent, Manus, ZCode, v0, Lovable, Same.dev, Mistral Code, Grok Build, Grok CLI — assorted agentic prompts

### Research, memory, and safety

- Anthropic research instructions — `Anthropic/research_instructions.md` (clarifying-question limits, source handling, copyright and quotation limits, harmful-source rules)
- Perplexity Deep Research — `Perplexity/deep-research.md` (citation placement, response formatting, lists and paragraphs, summaries, copyright budget)
- OpenAI deep research tool — `OpenAI/tool-deep-research.md`
- Anthropic reminders — `Anthropic/anthropic_reminders.md` (image handling, cyber warnings, jailbreak resistance, IP, long-conversation drift)
- OpenAI advanced memory tool — `OpenAI/tool-advanced-memory.md`
- OpenAI Codex Desktop — `CL4R1T4S/OPENAI/Codex_Desktop/*`

## What was extracted

### First pass (baseline pack)

- progressive / point-of-need skill loading;
- truth and uncertainty boundaries;
- verify-before-claim behavior;
- independent validation / oracle thinking;
- scope control and minimal complete changes;
- inspect-before-edit and tool discipline;
- evidence-led research and citation integrity;
- anti-slop writing and non-inflated claims;
- academic evidence / discussion discipline;
- argument and causal reasoning audits;
- methodical failure recovery;
- explicit memory-vs-inference boundaries.

### Second pass (this revision)

**Deepened existing skills** with the operational detail the source prompts carry but the first pass compressed away: the four-category evidence boundary and the direction-of-uncertainty rules; hollow green checks and the escape-hatch scan; the full slop catalogue and the delete/specificity/falsifiability tests; quantitative reporting and reproducibility for lab work; the inference-failure catalogue with repairs; the retry comparison rule and bounded probes; memory-writing exclusions and context-window discipline; copyright and quotation budgets; clarifying-question limits.

**Added eight skills** for clusters the first pass left uncovered:

| Skill | Cluster |
|---|---|
| `code-craft` | code-quality judgement, comment and naming policy, convention matching, dependency discipline, security defaults, test judgement, frontend quality |
| `task-planning` | directive-vs-inquiry classification, discovery discipline, decision-complete planning, task tracking and approval thresholds |
| `communication-style` | response shape, formatting rules, progress-update cadence, conversation dynamics |
| `debugging-method` | reproduce-first, hypothesis loop, bisection, root cause vs symptom, instrumentation |
| `git-and-version-control` | commit discipline, destructive-operation safety, staging and secrets, branches and PRs |
| `delegation-and-subagents` | authorisation gates, anchored briefs, isolation, verifying delegate output |
| `untrusted-content` | prompt injection, untrusted files, secret handling, external side effects |
| `review-and-critique` | review mindset and severity, self-review, receiving critique |

**Made `weak-model-mode.md` skill-specific.** In the first pass this file was a byte-identical shared template in all ten skills. It is now a per-skill procedure, because a weak model fails differently in each domain — filling blanks in a lab report, over-engineering in code, retrying blindly in recovery.

## Attribution and limits

The detailed files in `references/` are original synthesis and paraphrase written for this pack. They are not verbatim reproductions of the source prompts, and no source prompt is quoted at length.

Where a source states a rule that is product-specific (a particular tool name, a particular sandbox, a particular memory path), the pack generalises it to the behaviour the rule is protecting. The behavioural principle is the extractable part; the product detail is not.

Patterns that appear in only one vendor's prompt and cannot be corroborated elsewhere were treated as product-specific and generally excluded, unless they protect against a failure mode that is clearly general.
