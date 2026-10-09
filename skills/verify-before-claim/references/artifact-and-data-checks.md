# Artifact and Data Checks

## The four questions

For any produced artifact, four different questions are routinely confused:

1. **Does it exist?** — path, size, mtime.
2. **Is it well formed?** — parses, opens, validates against a schema.
3. **Is the content what it claims to be?** — the actual values, sections, rows, images.
4. **Is it usable for its real purpose?** — someone or something else consumes it successfully.

Passing (1) is not passing (2). Passing (2) is not passing (3). Passing (3) is not passing (4). Small files are the most worth reading, not the least: a few hundred bytes read in seconds versus a whole task built on a wrong premise.

## Files

1. Path and existence.
2. Type and parseability (open it with the right reader).
3. Expected major contents — read the head, the tail, and the middle.
4. Truncation, encoding errors, and line-ending artifacts.
5. The user-visible result when the file is meant to be opened.

## Data analysis

- Row and column counts, and the actual schema, not the assumed one.
- Missing values, duplicates, out-of-range values, sentinel values like `-1` or `999`.
- Units, scale, and timezone. A number without a unit is not a result.
- Key invariants (totals match, shares sum to 1, foreign keys resolve).
- Reproduce the headline calculation independently, by a different route.
- Check whether rounding or unit conversion changed the conclusion.
- Check the denominator: "30% of X" is meaningless without saying what X is.
- Check the base rate before interpreting a rate.

## Documents, spreadsheets, slides

Existence is not enough. Validate structure and open or parse with an independent reader: page count, section headings, table dimensions, formula cells, slide count, embedded images. A generated `.docx` that cannot be parsed by a second library is not a deliverable.

## Conversion tasks

Compare source and target on the properties that matter: text content, page count, dimensions, schema, formulas, metadata, or visual layout. A zero exit code from a converter proves only that the converter finished.

## Code and UI

- Type check, lint, and build outputs are code-correctness signals, not feature-correctness signals.
- For UI work, start the server and exercise the golden path plus one edge case. Watch for regressions in adjacent features.
- If you cannot exercise the UI, say so explicitly rather than implying you did.
- For CLI work, run the real command, not the function it wraps.

## Report wording

State what was verified, not what you intended to verify.

| Do not write | Write |
|---|---|
| "The file was created." | "The file opens in a second reader and contains the requested 5 sections." |
| "The script ran." | "The script exited 0 and wrote 812 rows; row count matches the input." |
| "The build passes." | "`npm run build` exited 0 (log attached); I did not run the app." |

## Checklist

- [ ] I answered all four questions, or said which ones I could not.
- [ ] I read part of the artifact, not just its size.
- [ ] Numbers in my answer have units and a stated denominator.
- [ ] My wording names the property I checked, not the one I meant to check.
