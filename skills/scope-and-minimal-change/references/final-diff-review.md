# Final Diff Review

Before completion:

1. inspect the final diff or file set;
2. confirm every changed file is relevant;
3. remove debug output, scratch files, accidental formatting churn, and speculative cleanup;
4. check that user changes outside the task are preserved;
5. map the diff back to acceptance criteria;
6. verify the behavior affected by the diff.

## Red flags

- unexpected new files;
- broad formatting-only changes;
- unrelated dependency updates;
- test changes without behavior rationale;
- generated debris;
- changes outside the requested subsystem.

A clean diff is evidence of scope discipline, not proof of correctness. Pair it with the verification skill.
