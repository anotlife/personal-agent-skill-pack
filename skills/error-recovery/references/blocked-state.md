# Blocked State

A task is blocked when the next safe step requires something unavailable or unauthorized.

Examples:

- required credentials are unavailable;
- a dependency cannot be obtained;
- the requested file is missing and cannot be recreated safely;
- a destructive action needs authorization;
- evidence needed to choose safely does not exist.

## Blocked report

State:

1. exact blocker;
2. what was already attempted;
3. why the next step is unsafe or impossible;
4. the narrowest missing input or action needed to proceed.

Do not fill the gap with a fabricated default if the result would materially change.
