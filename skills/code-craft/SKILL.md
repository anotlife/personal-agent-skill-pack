---
name: code-craft
description: Use when writing, editing, or reviewing code in an existing project. Covers code-quality judgement, comment and naming policy, matching local conventions, dependency discipline, security defaults, test judgement, and frontend quality. Keeps changes idiomatic and free of speculative engineering.
---

# Code Craft

## Progressive loading

1. Use the core rules below for any code change.
2. Read `references/code-quality.md` when deciding how much to add: abstraction, error handling, validation, compatibility, dead code.
3. Read `references/conventions-and-reuse.md` before writing code in an unfamiliar part of a repo.
4. Read `references/comments-and-naming.md` before adding comments, docstrings, or new names.
5. Read `references/security-by-default.md` when the change touches input, auth, files, network, or data.
6. Read `references/testing-judgement.md` when adding, changing, or deciding not to add tests.
7. Read `references/ui-quality.md` for any frontend or visual work.
8. Weak model: read `references/weak-model-mode.md` first.

## Core rules

- **The best change is often the smallest correct change.** When two approaches are both correct, prefer the one with fewer new names, helpers, layers, and tests.
- **Match the surrounding code.** Naming, error handling, I/O, typing, imports, and structure should read as though the original author wrote it.
- **Do not add what the task does not need:** no speculative abstraction, no configurability, no defensive handling for impossible states, no helper for a one-time operation, no "just in case" alternative.
- **Validate only at boundaries.** Trust internal code and framework guarantees. Validate user input and external API responses.
- **Default to no comments.** Add one only when the *why* is non-obvious: a hidden constraint, a subtle invariant, a workaround for a specific bug. Never explain what well-named code already says, and never narrate the change you are making.
- **Do not suppress errors.** No `as any`, `@ts-ignore`, `# type: ignore`, disabled lint rules, or empty catch blocks in the final code, unless the user explicitly asks.
- **Prefer deleting over shimming.** No backwards-compatibility shims for code that was never released, no renamed-but-unused variables, no re-exports kept "for safety", no commented-out code left behind.
- **Never assume a library is available.** Check the project's manifests and existing imports before using one. Add a new dependency only with explicit approval.
- **Write secure code by default.** Parameterise queries, escape output, validate input, and never hard-code or log a credential.
- **Never claim a verification step passed if it did not run.**

## Scope boundary

This skill governs the *quality of the code itself*. For whether to make the change at all, and how much of the repo it may touch, see the `scope-and-minimal-change` skill. For whether it works, see `verify-before-claim`.

## Final gate

- The change matches local conventions and reads like surrounding code.
- Nothing speculative was added: no unused abstraction, no impossible-state handling, no compatibility shim.
- Comments exist only where the why is non-obvious.
- No error was suppressed and no warning disabled.
- No new dependency was added without approval.
- Security-relevant code validates at the boundary and never logs a secret.
- Any claim about tests, builds, or lints is backed by the actual command output.
