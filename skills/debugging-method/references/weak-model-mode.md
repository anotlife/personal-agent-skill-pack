# Weak-Model / Low-Attention Mode

Weak models shotgun-debug: change several things, see it fix itself, and stop. This file replaces that with a mandatory loop.

## The loop, with a required artefact

For every debugging iteration, write these four lines before running anything:

```
Observation: <what I saw, verbatim>
Hypothesis:  <what I think causes it>
Prediction:  <what I will see if the hypothesis is right>
Test:        <the one thing I will change or run>
```

Then run the test, then write one more line:

```
Result: <what actually happened, verbatim>
```

If you cannot write a Prediction that could be **false**, you do not have a hypothesis. Rewrite it.

If the Result matches the previous Result exactly, your hypothesis is wrong. Change the hypothesis, not the value.

## Hard rules

1. **Reproduce before fixing.** If you have not seen the failure, say so; do not change code.
2. **One variable per iteration.** Never change two things at once.
3. **Read the first error.** Not the last one. Not the list.
4. **Never bypass the check.** No `--no-verify`, no skipping, no deleting the test, no `.skip()`.
5. **Never delete unfamiliar state.** A lock file, a branch, a stray file — investigate first.
6. **Never widen a tolerance or a timeout** unless you can state why the original was wrong.
7. **Delete all debug output** before finishing.
8. **Never say "fixed" without re-running the reproduction.**

## The three cheap checks to run before anything else

Most "mysteries" are one of these:

1. **Am I running what I think I am running?** Check the version, the path, the branch, the build output's mtime. A stale build is the most common cause of an inexplicable result.
2. **Did I change the thing I think I changed?** Re-read the file on disk.
3. **Is the failing input what I think it is?** Log it. Do not assume.

Check these before writing a hypothesis. They cost seconds.

## The shotgun ban

Do not:

- Change several lines and see if it helps.
- Revert to a previous state and declare it solved without knowing what differed.
- Add a retry, a timeout increase, or a null check as the first response.
- Restart the process and call it fixed.
- Comment out code until the error stops, then leave it commented out.

Each of these produces a state where you do not know what the fix was, which means you cannot know whether it is fixed.

## Escalation caps

- **3 iterations** with no new information → change the hypothesis space, not the value.
- **3 attempts** with an identical result → your model is wrong. Re-derive from the observation.
- **No reproduction after a bounded effort** → report it as unreproduced. Do not patch blind.

## Final gate

- [ ] I reproduced the failure and recorded the exact command and output.
- [ ] I wrote a Hypothesis and a Prediction for each iteration.
- [ ] Each iteration changed one variable.
- [ ] The mechanism is named, not just the location.
- [ ] The reproduction now passes.
- [ ] Nothing was bypassed, deleted, or widened to make it pass.
- [ ] All debug output is removed.
- [ ] If unresolved, I said so with the evidence.
