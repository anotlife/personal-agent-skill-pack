# Retry and Escalation

## First retry

Correct the obvious local cause and rerun the smallest check.

## Second failure

Compare the new error with the previous one. If materially different, use the new evidence. If nearly identical, do not blindly repeat.

## Strategy change

After repeated failure, change one of:

- tool;
- approach;
- abstraction level;
- test method;
- dependency source;
- order of operations.

## Anti-loop rule

Never run the same failing command many times merely because the model “expects it to work this time”.

## Stop condition

If the remaining uncertainty cannot be resolved with available evidence, switch to a blocked state rather than guess.
