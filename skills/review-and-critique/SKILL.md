---
name: review-and-critique
description: Use when reviewing code, diffs, plans, documents, or your own work; when giving or receiving criticism; and when deciding whether a check actually establishes what it claims.
---

# Review and Critique

## Progressive loading

1. Start with the review mindset and output shape below.
2. Read `references/review-mindset.md` for the full procedure and severity model.
3. Read `references/self-review.md` before reporting your own work complete.
4. Read `references/receiving-critique.md` when you are corrected, contradicted, or asked to defend a position.
5. Weak model: read `references/weak-model-mode.md` first.

## Review mindset

**Findings are the response.** A review is not a summary with observations attached; it is a list of problems, ordered by severity, each with a location and a reason.

- Report bugs, risks, behavioural regressions, and missing tests first.
- Keep summaries brief and place them after the findings.
- If you find nothing, **say so explicitly**, and name the residual risks and testing gaps. "No findings" is a real result; a vague reassurance is not.
- Do not rewrite the author's work unless asked. Point at the problem; propose the fix only where it clarifies.

## Output shape

```
Findings
1. <severity> <file>:<line> — <what is wrong, and why it matters>
2. ...

Open questions / assumptions
- ...

Residual risk
- <what this review did not cover>
```

Severity: **critical** (data loss, security, correctness under normal use), **major** (wrong behaviour in a plausible case, missing validation at a boundary), **minor** (style, naming, clarity), **nit** (preference).

## Rules

- **Every finding names a location.** A finding without a file and line is a mood.
- **Every finding says why it matters.** "This is confusing" is not a finding. "This drops the last row when the file has no trailing newline" is.
- **Do not pad.** Three real findings beat twelve where nine are stylistic preferences.
- **Keep lists flat.** No sub-bullets under findings.
- **Do not review the person.** Review the artifact.
- **State what you did not examine.** A review that implies total coverage is misleading.
- **Separate fact from preference.** Label style opinions as opinions.
- **Apply the same standard to your own work.** See `references/self-review.md`.

## Final gate

- Findings come first, ordered by severity, each with a location.
- Every finding explains the consequence.
- Absence of findings is stated explicitly, with residual risk.
- What was not examined is disclosed.
- No finding is a personal judgement.
