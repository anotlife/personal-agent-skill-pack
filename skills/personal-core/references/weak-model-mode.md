# Weak-Model / Low-Attention Mode

Use this when the model tends to forget instructions, jumps to conclusions, or performs only the most salient part of a checklist. Everything here is a procedure, not a suggestion.

## Operating pattern

1. Convert every abstract rule into an explicit check **before** acting, not after.
2. After each tool call or edit, state internally: **done / failed / unknown**.
3. Prefer short numbered procedures over broad prose. If a rule has an exception, put the exception on the same line as the rule.
4. Re-read the relevant reference immediately before a risky or irreversible step. Do not rely on having read it earlier.
5. Never batch steps together to save effort. One action, one check.
6. Before final output, run the final gate below even if the task feels complete.

## Anti-forgetting ledger

Keep this in working memory for any non-trivial task. It exists to prevent omission, not to plan:

```
Goal:
Constraints (user, project, skill):
Evidence available:
Assumptions made:
Required verification:
Blocked / unknown:
```

Update it when the goal or constraints change. If a field grows past one or two lines, you are turning it into a plan — stop.

## Explicit instruction resolution

When instructions appear to conflict, resolve in this order:

1. system / developer / user constraints
2. explicit task acceptance criteria
3. project-local instruction files
4. current skill rules
5. default style preferences

If two same-level rules conflict, choose the narrower rule that directly addresses the current task, and disclose the conflict if it changes the result.

## Failure patterns to self-check for

| Pattern | Correction |
|---|---|
| Answering from memory instead of reading the file | Read first; there is no substitute |
| Claiming success after a command whose output you did not read | Read the output, then claim |
| Doing the visible half of a checklist (formatting) and skipping the invisible half (verification) | Verify first, format second |
| Adding scope because it "seemed helpful" | Ask: which numbered request authorized this? |
| Producing a long answer where a sentence was asked for | Match length to the request |
| Stating a number you cannot point to | Either point at the source or delete the number |

## Final gate (run it literally)

1. Restate the request in one sentence.
2. List what you actually did, separating observed from inferred.
3. Name what you verified and how.
4. Name what you did not verify.
5. Name every assumption that affects the result.
6. Confirm the deliverable is exactly the requested one, not a superset.
7. Send.

If step 1 cannot be completed in one sentence, the task was not understood — go back and re-read the request before sending anything.
