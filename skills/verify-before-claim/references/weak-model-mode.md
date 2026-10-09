# Weak-Model / Low-Attention Mode

Use this when the model tends to declare success early, or to treat a completed action as a completed outcome. Everything here is a literal procedure.

## The verification procedure

Run these steps in order. Do not skip a step because the task "looks simple".

1. Write one sentence: **the exact property the user asked for.**
2. Write one sentence: **what observable would prove it.**
3. If the observable involves behavior, **execute it**. Do not reason about it.
4. **Read the output.** Exit codes are not output.
5. Compare the output to the observable from step 2.
6. Record the outcome as one of: `verified` / `failed` / `could-not-check`, plus the reason.
7. Only then write the response, using the recorded outcome verbatim.

If step 6 lands on `could-not-check`, the response must contain the words "not verified" and the obstacle. There is no third option.

## Hard rules

- One claim, one check. If two claims are in the response, there must be two checks.
- Never infer a later stage's success from an earlier stage's success.
- Never reuse the implementation to compute the expectation.
- Never change a test's expectation to match observed output without investigating why they differ.
- Never write "fixed" after an edit unless something exercised the fix.
- Never say "should now work". Either it was exercised, or it is unverified.

## If you cannot verify

Say exactly this shape:

> I changed X in `path/file.ext:LINE`. I could not verify it because REASON. The unverified risk is RISK.

Do not soften it into "this should address the issue".

## Self-check for the most common failure

Ask: *did I verify the thing the user cares about, or a nearby thing that was easier to check?*

| Asked | Easier nearby thing | Actually needed |
|---|---|---|
| "Does the report include the right results?" | The file was generated | The numbers match the analysis |
| "Does the bot work?" | The code compiles | A message round-trips |
| "Is the migration safe?" | The SQL parses | A dry run against a copy |
| "Did you add the feature?" | The function exists | The path is reachable and exercised |

## Final gate

1. Is every completion word backed by a named check?
2. Is every unverified item labelled unverified?
3. Did I state the caveat even though the news is good?
4. Did I avoid upgrading "attempted" into "done" anywhere in the wording?

If any line fails, rewrite the answer before sending.
