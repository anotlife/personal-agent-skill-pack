# Instrumentation

## Principle

When you cannot see what the code is doing, make it observable. Reading the code tells you what it *should* do; instrumentation tells you what it *did*.

Instrumentation is temporary by default. Add it, learn from it, remove it.

## What to instrument

| Question | Instrument |
|---|---|
| Which path executed? | A log line at the branch, with the condition value |
| What value arrived? | Log the value **and its type and length** at the boundary |
| How many times? | A counter, or a log line with an index |
| In what order? | A timestamped or monotonically-increasing sequence number |
| How long? | Timers around the suspected region, not the whole function |
| Is it the same object? | Log an identity, not the contents |

## Log the interesting thing

| Weak | Strong |
|---|---|
| `log("here")` | `log("enter retry, attempt=%d, backoff=%dms", n, ms)` |
| `log(x)` | `log("ttl stored=%s expected=%s", stored, expected)` |
| `log("error")` | `log("%T: %v", err, err)` — the type carries information |
| Logging inside a loop with no index | Include the index and the item identity |

A log line that does not distinguish this execution from the previous one carries no information.

## Boundaries first

Instrument at boundaries, not deep in the call stack:

- the entry point of the failing operation;
- the input as received, before any transformation;
- the output before it is returned or written;
- each transformation that could change the value (parse, convert, round, cache, serialize).

Most bugs are a mismatch between what one layer produces and what the next expects. Boundaries expose that mismatch directly.

## Types and shapes, not just values

Many bugs are type or shape bugs, and `log(x)` hides them because both a string `"5"` and the number `5` print similarly.

Log the type, the length, the shape, the encoding. `"5"` and `5`, `null` and `false`, `0` and `0.0`, a list of one item and a scalar — all print similarly and behave differently.

## Debugger versus logs

| Use a debugger | Use logs |
|---|---|
| Interactive, one process, easy to reproduce | Concurrency, multiple processes, or timing-sensitive |
| You want to step through once | You want a trace of a long run |
| The bug is in a single-threaded path | The bug is in production or a CI environment |
| You can attach | You cannot attach |

For anything intermittent, concurrent, or in CI, logs win because they survive the failure. For a wrong value in a single function, the debugger is faster.

## Reproduce-and-observe loop

1. Add the minimum instrumentation that would distinguish your two leading hypotheses.
2. Run once. Do not add more instrumentation before reading the output.
3. Read the output and update the hypothesis.
4. Remove instrumentation that answered its question; keep what still matters.

Do not instrument ten places at once — you will read a wall of output and learn less than from one precise line.

## Performance and other side effects

- Logging inside a hot loop can change the timing enough to hide a race condition. Be aware; prefer a counter over a per-iteration print.
- Logging can allocate, flush, or take a lock, which changes behaviour in a concurrency bug.
- For timing bugs, measure *durations* and log them, rather than adding prints that alter the timing.

## Browser and front-end debugging

- Read console messages, filtering by a pattern rather than dumping everything.
- Check network requests for status, payload, and timing.
- Avoid triggering modal dialogs (`alert`, `confirm`, `prompt`) as a debugging step — they block all further browser events.
- Inspect the actual DOM state rather than reasoning from the source.
- Verify the user-visible path in a browser, not by calling an internal function.

## The budget rule

Instrumentation has a cost: it changes the code, and it can change behaviour. Set a small budget — a handful of lines — and remove them when the question is answered.

Leaving debug output in a final diff is a defect. If a line has lasting diagnostic value, promote it to a proper log at the right level with a stable message.

## Checklist

- [ ] I instrumented boundaries before internals.
- [ ] Each log line distinguishes this execution from another.
- [ ] I logged types and shapes, not only values.
- [ ] I added the minimum that distinguishes my hypotheses, then read the output.
- [ ] I chose debugger or logs based on reproducibility and concurrency.
- [ ] All temporary instrumentation is removed or promoted.
