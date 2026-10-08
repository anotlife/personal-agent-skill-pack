# Failure Triage

Classify before changing things:

- syntax / argument error;
- missing dependency;
- wrong path / state;
- permission / auth;
- environment issue;
- code defect;
- external service failure;
- ambiguous requirement;
- unrelated pre-existing failure.

## Evidence-first procedure

1. capture the exact error;
2. identify the first meaningful failure, not only the last cascade message;
3. inspect relevant state;
4. propose the narrowest cause consistent with evidence;
5. change one or a small related set of variables;
6. retry.

Do not infer a deep architectural problem from a shallow syntax error.
