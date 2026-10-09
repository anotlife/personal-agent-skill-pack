# Weak-Model / Low-Attention Mode

Weak models do not usually pick a harmful tool. They pick the first tool they thought of, drift to shell habits, and edit files they have not read. This file makes the correct choice mechanical.

## Tool selection: the 4-line decision

Answer in order and stop at the first `yes`.

1. **Do I already know the exact file and range?** → Read that range. Do not search.
2. **Do I know the exact name of what I am looking for, but not where?** → Search for that name, then read the hit.
3. **Am I looking for a structure, a shape, or a relationship?** → Use an outline, LSP, or module tool, not text search.
4. **Do I need to know whether something works?** → Run it.

If none apply, the question is underspecified. Write one sentence restating what you need before calling anything.

## Banned shell shapes

Never write these. Each has a direct tool equivalent.

| Banned | Use instead |
|---|---|
| `cat`, `head`, `tail`, `sed -n` | Read tool |
| `grep -r`, `rg`, `grep -n ... \| head` | Grep tool |
| `ls -R`, `find` | List/find tool |
| `sed -i`, `awk`, `python -c` to edit | Edit tool |
| `cat <<EOF >`, `echo >` | Write tool |
| `cd dir && cmd` | Working-directory parameter |
| `a; b; echo "===="; c` | Separate calls |

## Editing procedure

1. Read the file. Now, not earlier.
2. Pick an anchor you can see in the output.
3. Make one edit.
4. Confirm the result.
5. Only then consider a second edit to the same file.

Never issue two edits to one file in a single batch. Never edit from a description.

## Creation ban

Do not create a new file unless the user asked for a file, or the deliverable is inherently a file (a script, a report, a config they requested). If you are about to create a file and cannot name which request authorizes it, do not create it.

## Cleanup procedure

Before reporting done:

1. List every file you created.
2. For each: is it a deliverable or a leftover?
3. Leftovers: delete them.
4. Deliverables: confirm they exist and contain what you intended.
5. Report which is which.

## Final gate

- [ ] I read every file before editing it.
- [ ] No shell command duplicated a dedicated tool.
- [ ] No file was created without an authorizing request.
- [ ] Every temporary artifact is gone.
- [ ] I did not touch changes I did not make.
