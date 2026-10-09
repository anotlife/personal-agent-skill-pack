# File Hygiene

## Principle

Every file you create is a file someone must later understand, review, and possibly delete. Create the minimum, in the right place, and remove what was temporary.

## The default is: do not create

- Prefer editing an existing file to creating a new one.
- Never create a file unless the requested deliverable *is* a file.
- Do not create planning, decision, analysis, or summary documents unless asked. Those belong in the conversation, not in the repo.
- Do not create a helper, script, or config that becomes an accidental second source of truth.
- Do not create a `.md` file to explain your change. Explain it in the response.

## If you must create a file

1. Put a requested deliverable in the location the user implied, using the project's naming convention.
2. Put temporary work in a scratch location, not in a tracked directory.
3. Confirm the file exists, is readable, and contains what you intended — existence is not content.
4. Register it wherever the project requires registration (index, manifest, `__init__`, table of contents).
5. If it is a script you will run twice, put it somewhere durable rather than in a fresh temp file each time.

## Temporary artifacts

Remove them before reporting completion. Check for:

- temporary scripts and one-off generators;
- debug logs and captured stdout;
- accidental backups (`*.bak`, `*.orig`, `*.rej`, `file 2.md`);
- copied datasets or downloaded archives;
- build products that should not be committed;
- editor artifacts (`.DS_Store`, swap files).

If a temporary artifact is genuinely useful to the user, say so and leave it — but name it explicitly so it is not mistaken for a deliverable.

## Generated files

- Do not hand-edit generated code. Change the source of truth and regenerate.
- Do not commit build output unless the project's convention is to commit it.
- Do not normalize or reformat generated files as a side effect of an unrelated change.

## User changes

- Unexpected changes in the worktree belong to the user or to another agent working concurrently.
- Never overwrite, revert, or normalize them because they are adjacent to your change.
- If they conflict with your task, read them carefully and work around them; if you cannot, escalate.
- Do not mention unrelated changes unless they affect the user's decision.

## Text-format hygiene

- Prefer ASCII unless the file already uses non-ASCII or there is a clear reason. Mixed encodings produce mojibake that is hard to diagnose later.
- Match the file's existing line endings, quoting style, and indentation.
- Never save a source file with a `.txt` "safer" rename, or a binary payload with a text extension.
- Do not write very long hash strings or non-textual data into source files.
- Pass an explicit encoding when reading or writing text in scripts; never rely on the platform default.

## Checklist

- [ ] Every new file is either a requested deliverable or in a scratch location.
- [ ] No file exists that a future reader will mistake for part of the deliverable.
- [ ] All temporary artifacts are removed or explicitly named as leftovers.
- [ ] I did not hand-edit generated code.
- [ ] I did not touch user changes or reformat anything gratuitously.
