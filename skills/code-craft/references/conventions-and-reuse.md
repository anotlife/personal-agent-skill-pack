# Conventions and Reuse

## Principle

Your code will be read by people who know this codebase and not your style. A change that is idiomatic costs nothing extra to write and disappears into the project; a change that introduces a parallel style is a permanent tax.

## Before writing, read

1. The file you are changing, in full if it is small.
2. One or two sibling files that do the same kind of thing.
3. The imports of the file — they tell you which libraries and helpers are already in play.
4. The project's instruction files and manifests.
5. An existing test for a similar behaviour.

## What to mirror

| Aspect | Mirror from |
|---|---|
| Naming and casing | The file itself, then its package |
| Error handling | How the neighbours report failures: exceptions, result types, error returns, logging |
| I/O | How the neighbours read files, call APIs, write output |
| Typing | Whether the project annotates everything, uses interfaces, or relies on inference |
| Imports | Order, grouping, absolute vs relative paths, aliasing |
| Testing style | Framework, naming, fixture patterns, assertion style |
| Logging | The project's logger, level conventions, and message shape |
| Configuration | How existing settings are declared and read |
| Directory layout | Where similar modules live |

## Do not assume a library is available

Never assume a well-known library is present. Check:

1. The manifest (`package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, `go.mod`, `pom.xml`).
2. The lockfile, to confirm a transitive dependency is a direct one.
3. Existing imports, to see how the project already uses it.

Adding a dependency is a durable commitment: it affects install time, security surface, version conflicts, and every future contributor. **Do not add one without explicit approval**, and when you propose one, say why the standard library or an existing dependency will not do.

Prefer, in this order:

1. The standard library.
2. Something already in the project.
3. Something already in the project that does 80% of the job.
4. A new dependency, with approval.

## Reuse before re-implementing

Search for an existing helper before writing one. A near-duplicate utility is worse than a slightly awkward call to the real one, because the two drift apart.

But note the opposite failure: if the existing helper is not shared with consumers that need different behaviour, change the source of truth directly rather than layering a one-off override, a wrapper, or a `mode` parameter on top. An override that exists for one caller is a fork in disguise.

## Framework and version discipline

- Do not use an API from a newer version of a library than the project depends on.
- Do not use a language feature above the project's configured target.
- Do not assume a runtime flag exists in the version in use.
- Check the version line in the manifest rather than assuming "the latest".

## Respecting the existing structure

- Do not reorganise directories, rename modules, or move files unless asked.
- Do not introduce a new architectural layer (repository, service, adapter, facade) unless the task requires it.
- Do not convert one file's style to another file's style.
- Do not add a new config mechanism when the project has one.

## Generated files and sources of truth

- Do not hand-edit generated code, lockfiles, or vendored dependencies. Change the source and regenerate.
- Do not commit build output unless the project commits it by convention.
- If two files hold the same data, find which one is authoritative before changing either. The classic bug is editing the copy.

## Redaction markers

If you see a marker such as `[REDACTED:github-pat]`, the original content contained a secret that a security layer removed. Do not overwrite the marker with real content, do not treat it as a literal string to match, and do not print surrounding context that might contain the rest of the secret.

## Environment and platform

- Check the platform before writing platform-specific code: path separators, shell, line endings, case-sensitivity of the filesystem, available commands.
- Do not assume a Unix shell on a Windows host, or vice versa.
- Do not assume locale-dependent behaviour: number formatting, collation order, encoding.
- Pass an explicit encoding when reading or writing text in scripts.

## Checklist

- [ ] I read a sibling file before writing.
- [ ] My style matches the local convention, including imports and error handling.
- [ ] Every library I used is already a dependency, verified in the manifest.
- [ ] No new dependency was added without approval.
- [ ] I searched for an existing helper before writing one.
- [ ] No file was moved, renamed, or reorganised.
- [ ] No generated file was hand-edited.
