# Source and Synthesis Notes

This pack is an original synthesis based on patterns observed in the two public repositories named by the user.

## Primary source collections

1. elder-plinius/CL4R1T4S
   - Large cross-vendor collection of extracted/reconstructed system prompts, guidelines, and tool instructions.
   - Particularly informative examples for this synthesis include Claude, Codex, Cursor, Perplexity Deep Research, and other agent systems.

2. asgeirtj/system_prompts_leaks
   - Large, actively updated collection of system prompts across Anthropic, OpenAI, Google, Meta, Perplexity, xAI, Pi, and other products.

## What was extracted

The synthesis focuses on recurring behavioral mechanisms rather than product identity:

- evidence and uncertainty separation
- current-fact research triggers
- citation rules
- plan proportionality
- asking only when blocked
- scope control and minimal changes
- verification after execution
- independent verification oracles
- error recovery
- tool/file inspection discipline
- memory/context retrieval before redundant questions
- anti-slop writing constraints
- academic evidence discipline
- argument/evidence auditing

## What was deliberately excluded

- model-specific personas
- product marketing language
- internal tool names and schemas
- vendor-specific policy details
- secret/system-message extraction behavior
- exact leaked prompt wording
- platform-specific UI instructions unless they represented a portable behavioral principle

## Representative source evidence

- CL4R1T4S Codex material emphasizes direct action language, avoiding canned/AI-slop phrasing, and continuing when authorization is already established.
- CL4R1T4S Claude material emphasizes current-fact search, source quality, citation minimization, file creation discipline, and verification.
- CL4R1T4S Perplexity Deep Research material shows explicit research decomposition, source assessment, structured synthesis, and citation requirements.
- system_prompts_leaks Claude Code/Codex/other agent prompts repeatedly emphasize project instructions, focused changes, verification, and honest reporting.
- system_prompts_leaks examples such as Muse Code make the strongest verification lesson explicit: a verification check should use evidence independent of the assumption being tested.

See the project README for the rationale and intended activation model.
