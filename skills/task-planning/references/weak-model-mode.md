# Weak-Model / Low-Attention Mode

Weak models skip classification and skip the approval check. Everything else in planning follows from those two. This file makes both mechanical.

## The two questions, asked before anything else

Ask these in order and act on the answer literally.

**Question 1: Is this a question or an instruction?**

- Does it contain "how", "why", "what", "should we", "can you explain", "what do you think"? → **Question.** Answer. Do not edit anything.
- Does it contain "fix", "add", "change", "implement", "rename", "remove", "make it"? → **Instruction.** Do the work.
- Does it contain "plan", "approach", "design", "how would you"? → **Plan.** Produce a plan. Do not edit.
- Does it contain "review", "check", "any issues", "look at"? → **Review.** Findings only. Do not edit.
- Does it report a problem without asking for a fix? → **Information.** Explain or investigate. Do not edit.

If two signals appear, the more explicit instruction wins. If none appears, treat it as a question.

**Question 2: How many files will this touch?**

- If you do not know yet, find out — that is what the exploration is for.
- 1-2 files, local, reversible → proceed.
- 3 or more files, or more than one subsystem → write out a short plan first, then proceed.
- Anything destructive, shared, or visible to others → ask before doing.

## The classification log

For any task longer than a few steps, write one line before starting:

```
Class: <question | plan | review | diagnosis | instruction>
Files: <count or names>
Threshold: <proceed | plan first | ask first>
Done when: <one observable>
```

Then work. If any of the four lines changes, rewrite the line.

## Hard rules

- Never edit files in response to a question.
- Never implement in response to "how would I".
- Never fix a reported problem unless the fix was requested.
- Never stop at a plan when the user asked for the change.
- Never proceed past three files without showing the plan.
- Never add a dependency without asking.
- Never mark a step complete without a check.

## Exploration budget

Set a number of searches before starting (five is usually plenty for a single-file change). When you reach it:

1. Write down what you still do not know.
2. Change the search terms, not the number of searches.
3. If you find the change site, stop reading.
4. If you cannot find it, ask one question rather than searching indefinitely.

## Todo procedure

1. Write the list before starting.
2. Mark exactly one item in progress.
3. Do that item.
4. Check it.
5. Mark it complete immediately.
6. Move to the next item.
7. When the list is empty, run the final gate.

Never mark two items complete in one update. Never mark an item complete because it "should" be.

## Final gate

- [ ] I classified the request and my actions match.
- [ ] I know how many files I changed and it is inside the threshold.
- [ ] Every completed item was checked.
- [ ] I can state, in one sentence, what is done and what is not.
- [ ] I did not stop at a plan when the user asked for work.
