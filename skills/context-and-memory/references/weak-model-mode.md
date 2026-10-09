# Weak-Model / Low-Attention Mode

Weak models fabricate continuity ("as we discussed"), apply stale memories with full confidence, and get lost after a compaction. This file makes the checks mechanical.

## The four-question test for any recalled fact

Before using a remembered or assumed fact, answer all four:

1. **Where did this come from?** The user's words, a file I read, a tool result, or my own earlier output?
2. **When was it true?** Today, or at some point in the past?
3. **Could it have changed?** (Versions, status, prices, file paths, symbols, deadlines — yes.)
4. **What would I do to check it?** If the answer is "nothing", you may not rely on it for anything the user will act on.

If any answer is unclear, either check it or state it as an assumption. Do not state it as a fact.

## Banned phrases (unless the material is actually present)

- "As we established earlier"
- "As you mentioned previously"
- "Based on your earlier preference"
- "Continuing from our previous session"
- "Per your notes"
- "You said..."

Replace with: "I do not have that in this session — can you confirm X?" or "If X holds, then ...".

## Before writing to memory

Run the exclusion list. Do **not** save any of these, even if asked:

- file paths, architecture, conventions, code patterns (derivable);
- git history or recent changes (`git log` is authoritative);
- fix recipes or debugging solutions;
- anything already in the project's instruction files;
- in-progress task state;
- secrets or unnecessary personal detail.

If asked to save a list or summary, ask what was surprising or non-obvious, and save only that.

## After a compaction

1. Do **not** restart the task.
2. Read the newest user message and treat it as the current request.
3. Check whether any constraint or decision you are about to rely on is present. If not, re-read the source file.
4. Do not repeat updates you already sent.
5. Continue from where the summary says the work stopped.

## The scope check

Before using remembered information, ask: *does this change the current result?* If no, leave it out. Availability is not permission.

## Final gate

- [ ] Every "you said" points at words I can see.
- [ ] Every time-sensitive fact was checked or labelled as an assumption.
- [ ] Nothing derivable from the repo was written to memory.
- [ ] No secret is in memory, output, or a log.
- [ ] After a compaction, I continued rather than restarted.
- [ ] I used only context that affects this task.
