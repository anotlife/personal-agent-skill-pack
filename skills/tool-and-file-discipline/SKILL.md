---
name: tool-and-file-discipline
description: Use when reading, searching, editing, or creating files, choosing between tools, or operating in a repo with instruction files. Prevents blind edits, wasted turns, and repo pollution.
---

# Tool and File Discipline

## Progressive loading

1. Start with the routing table and the non-negotiables below.
2. If the repo contains `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, or similar, read `references/project-instructions.md` before editing anything in its scope.
3. Before editing a file you have not read in this session, read `references/inspect-before-edit.md`.
4. To choose between tools, or to decide what may run in parallel, read `references/tool-selection-and-parallelism.md`.
5. Before creating any new file, or before finishing a task that created one, read `references/file-hygiene.md`.
6. If context is filling with tool output, read `references/context-efficiency.md`.
7. Weak model: read `references/weak-model-mode.md` first.

## Non-negotiables

- **Never edit a file you have not just read.** Edits fail, or succeed wrongly, on stale content.
- **Never run a shell command to read, search, or list.** Use the dedicated tool. Shell readers cost a permission prompt and return unstructured output.
- **Never begin a command with `cd <dir> &&`.** Pass the working directory as a parameter.
- **Never chain commands with separators** (`;`, `echo "===="`, `printf '---'`). It renders badly and hides which part failed.
- **Never create a file unless the deliverable is a file.** Prefer editing what exists.
- **Never leave scratch state behind.** Temporary artifacts are removed before you report completion.
- **Never write to a file with shell redirection** when a write/edit tool exists.

## Routing

| Need | Use | Not |
|---|---|---|
| Read a file or a range | the read tool, with offset/limit | `cat`, `sed -n`, `head`, `tail` |
| Find text in files | the grep tool | `grep -r`, `rg` piped through another stage |
| Find files by path | the find/glob tool | `ls -R`, `find ... \| grep` |
| List a directory | the list tool | `ls -la` through a shell |
| Edit a file | the edit tool with a unique anchor | `sed -i`, `awk`, `python -c` |
| Create or overwrite a file | the write tool | `cat <<EOF >`, `echo >` |
| Structural code search or rewrite | an AST-aware tool | text grep |
| Symbol definition or references | an LSP tool | text grep |
| Run a build, test, or program | the shell | — |

Bash is for what tools cannot do: piping into a second stage, process control, globs across trees, git operations.

## Final gate

- Every edit was preceded by a read of that file.
- No shell command duplicated a dedicated tool.
- No file was created that the deliverable did not require.
- Every temporary artifact is gone.
- No parallel edits were issued against the same file.
