# File Hygiene

## Deliverables

Create requested files in the expected location and validate that they exist and are readable.

## Temporary work

Use scratch locations for intermediate files when practical. Remove or isolate debugging debris before completion.

## Generated output

Prefer existing project generators and conventions. Do not create helper files that become an accidental second source of truth.

## User changes

Do not overwrite or normalize unrelated user edits merely because they are adjacent to your change.

## Final cleanup

Check for:

- temporary scripts;
- debug logs;
- accidental backups;
- copied datasets;
- build products that should not be committed;
- unrelated formatting churn.
