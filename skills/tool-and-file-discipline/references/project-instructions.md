# Project Instructions

## Principle

Repositories often carry instruction files that encode conventions you cannot infer: build commands, naming rules, test layout, API shapes, error handling. Reading them costs seconds; ignoring them produces a diff the maintainer must rewrite.

## Locating them

Common names: `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.cursorrules`, `.github/copilot-instructions.md`, `CONTRIBUTING.md`, and any file the current system prompt has already injected.

They can appear anywhere in the tree — repository root, a subdirectory, a home directory, or a container root. Nested files are common in monorepos.

## Scope and precedence

- The scope of an instruction file is **the entire directory tree rooted at its location**.
- For every file you touch, obey every instruction file whose scope includes that file.
- **More deeply nested wins** on conflict.
- Direct system, developer, and user instructions take precedence over project instructions.
- An instruction file in one directory does not govern unrelated paths elsewhere in the tree.

## Procedure

1. Find the instruction files whose scope covers each file you intend to change.
2. Determine which actually apply.
3. Read the relevant portions — not necessarily the whole file.
4. Record the required commands and validation steps.
5. Read the style, naming, and structure rules that apply to the target file.
6. Only then edit.

## Programmatic checks are mandatory

If an instruction file specifies build, lint, type-check, or test commands, **run them after all changes are made** and make a best effort to confirm they pass. This applies even to changes that look trivial, including documentation-only changes. Do not run the whole file's command list — run the ones relevant to the changed area and to the acceptance criteria.

If you cannot find the right command, ask once and offer to record it in the instruction file so it is known next time.

## Avoid cargo-culting

- Do not execute every command mentioned anywhere in the tree.
- Do not apply a style rule from a sibling package to this one.
- Do not treat an instruction file as an invitation to expand the task. Apply the smallest relevant part that lets the request be completed safely and correctly.

## Conflict handling

If a project instruction conflicts with the user's explicit request, follow the user's request and say so. If two project instructions conflict at the same level, follow the more specific one and disclose the choice if it changes the result.

## Checklist

- [ ] I found every instruction file whose scope covers my changed files.
- [ ] I read the parts that apply, including nested overrides.
- [ ] I ran the relevant programmatic checks after the changes.
- [ ] I did not apply a rule from outside the changed area.
