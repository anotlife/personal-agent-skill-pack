# Weak-Model / Low-Attention Mode

Scope discipline fails on weak models almost never through bad reasoning — it fails through omission. The model does the salient thing and skips the boundary check. This file replaces judgment with a checklist.

## Before acting

Answer these five questions in one line each. Write them down if the task is non-trivial.

1. Is this a **question** or an **instruction**? (Question → answer only, no edits.)
2. What single observable must be true when I am done?
3. Which files or systems may I touch? Which may I not?
4. Is any step destructive, irreversible, or visible to others?
5. Did the user authorize this exact action, for this exact target, now?

If (1) is a question, stop. If (4) is yes and (5) is not clearly yes, stop and ask.

## While acting

- Before each edit: **which numbered request authorizes this?** If there is no answer, do not make the edit.
- Do not fix anything you noticed but were not asked to fix. Write it down in one line instead.
- Do not reformat. Do not rename. Do not "tidy up". Do not add a comment.
- Do not create a new file unless the requested deliverable *is* a file.
- If you are about to touch a fourth file, stop and show a short plan first.

## Before reporting

1. List every changed file.
2. Next to each, write the requirement it satisfies.
3. If a file has no requirement next to it, revert that file.
4. Re-read the user's message. Does your diff answer it?
5. Confirm you did not delete or overwrite anything the user did not ask you to delete or overwrite.

## Hard rules

- "Continue" means keep going on the **current** task. It is not permission to start a new one.
- "Fix the bug" does not authorize refactoring the file the bug lives in.
- "Add X" does not authorize adding Y that X seems to need.
- A nearby ugly thing stays ugly unless the user asks.
- Approval once is not approval always.

## The single best self-check

Ask: *if the user reads only the diff, will they see exactly what they asked for and nothing else?*

If the answer is no, remove lines until it is yes.
