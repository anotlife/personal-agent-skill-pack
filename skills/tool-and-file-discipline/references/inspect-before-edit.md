# Inspect Before Edit

Before changing a file:

- confirm it exists and is the intended target;
- inspect nearby code or document structure;
- identify references/callers when behavior is involved;
- inspect relevant tests or examples;
- check for generated files and source-of-truth relationships.

## Why

Editing from the user's description alone can destroy local conventions or solve the wrong layer of the problem.

## Safe shortcut

For a trivial one-line known change with no hidden structure, minimal inspection is enough. Increase inspection depth with uncertainty or consequence.

## After inspection

State the implementation boundary internally: “I am changing X to satisfy Y; Z is outside scope.” Then edit.
