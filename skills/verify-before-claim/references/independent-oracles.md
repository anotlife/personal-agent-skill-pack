# Independent Oracles

## Principle

An oracle should differ materially from the implementation path when the goal is to detect implementation errors.

## Strong examples

- Run the repository’s established test suite instead of asserting your own expected output.
- Compare a numerical result against an independently computed formula or second implementation.
- Parse a generated document with another reader, not the same code that wrote it.
- Compare a migration against a known-good fixture or schema.
- For a UI change, exercise the actual user-visible path rather than importing an internal function and printing a value.

## Weak examples

- Reusing the same helper function to compute both result and expected value.
- Re-reading the exact text you just wrote and treating existence as correctness.
- Writing a test whose expected output is copied from the implementation.
- Checking only a screenshot that could hide a broken interaction.

## Escalation

Use an independent oracle whenever:

- the output is exactness-sensitive;
- the task changes serialization, parsing, numerical logic, or external behavior;
- the cost of a false “done” claim is high;
- the same bug could affect both implementation and self-check.
