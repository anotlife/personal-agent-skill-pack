# Artifact and Data Checks

## Files

After generating a file, check:

1. path and existence;
2. file type / parseability;
3. expected major contents;
4. obvious truncation or encoding errors;
5. user-visible result when relevant.

## Data analysis

Check:

- row/column counts or schema;
- missing values and invalid ranges;
- units and scale;
- key invariants;
- reproduction of headline calculations;
- whether rounding changed the conclusion.

## Documents / spreadsheets / slides

Existence is not enough. Validate structure and, when possible, open or parse using an independent reader.

## Conversion tasks

Compare source and target on the properties that matter: text, page count, dimensions, schema, formulas, metadata, or visual layout. Do not assume successful conversion from exit code alone.

## Report wording

State what was verified, not what you intended to verify. “The file was created” is different from “The file opens correctly and contains the requested sections.”
