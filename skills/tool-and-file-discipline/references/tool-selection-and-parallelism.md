# Tool Selection and Parallelism

Choose the tool based on the question.

- known file → read that file/range;
- unknown location → search/list first;
- exact phrase in known file → exact find/search;
- broad project understanding → semantic search or targeted browsing;
- behavior question → execute the relevant path;
- independent checks → parallelize when possible.

## Avoid redundant tool calls

Do not repeatedly search for the same fact after it is already established. Do not open large files when a small range answers the question.

## Parallel safety

Parallelize only truly independent operations. Sequence operations when the second depends on the first's result.

## Tool output as evidence

Treat tool output as evidence, not narrative. Extract the exact fact needed; do not invent missing details because the result “looks like” what you expected.
