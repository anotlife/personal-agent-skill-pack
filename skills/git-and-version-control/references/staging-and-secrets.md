# Staging and Secrets

## Review the staged set, not the file names

A broad `git add` is how unrelated files, generated artifacts, and secrets enter a commit. The check is:

1. `git status` after staging — see the full list.
2. `git diff --staged` — read the actual content.
3. Ask of each file: *did my change require this?*

If a filename looks innocuous but the change is unexpected, **read the file's contents** before committing or pushing. Files with innocent names have leaked credentials before.

## Never `git add .` by reflex

Stage the specific paths the change requires. A blanket add sweeps in:

- build output and caches;
- editor and OS artifacts (`.DS_Store`, swap files, `__pycache__`);
- dependency directories (multi-gigabyte, and not yours to commit);
- temporary scripts you wrote while working;
- `.env` and local config;
- another agent's or the user's in-flight work.

## Size gate before committing

Compute what you are about to add. A conservative threshold catches accidents:

- Look at the size of the staged content, not the number of files.
- A dependency directory can be gigabytes. `git add .` has swallowed them many times.
- Large binaries in history are expensive forever, because they are never removed by later commits.
- Check `.gitignore` covers what it should before the first commit that includes a build directory.

## Secrets

**Never commit:**

- API keys, tokens, passwords, connection strings;
- private keys, certificates with keys, `.pem`/`.p12` files;
- `.env`, `.env.*` (except a `.example` with placeholders);
- credentials embedded in URLs or config;
- session cookies or tokens captured in a test fixture;
- any file the project's `.gitignore` was written to exclude.

**Always:**

- Read the `.gitignore`, and keep it current when new generated paths appear.
- Check the staged diff for token-shaped strings before pushing.
- Commit a `.example` file showing the shape with placeholder values, never the real file.
- Keep secrets in the environment or a secret manager, and reference them by name.

## If a secret is already committed

1. **Say so immediately.** Do not quietly remove the file and continue.
2. Understand that deleting the file in a later commit does **not** remove it from history — it remains in every clone.
3. Explain the two real options: rotate the credential (always necessary), and rewrite history (a decision the user must approve, because it invalidates clones).
4. Do not rewrite history without explicit approval.
5. Do not assume the secret is harmless because the repository is private. It is on every clone, every backup, and every CI cache.

## Generated files

- Do not commit build output unless the project's convention is to commit it.
- Do not commit lockfiles that the project's `.gitignore` excludes.
- Do not commit a vendored directory by accident.
- Do not hand-edit a generated file and commit it; change the source and regenerate.
- Check whether the project already tracks the file before assuming it is generated.

## Line endings and encoding

- Respect the repository's convention (`.gitattributes`, existing files).
- Do not introduce a whole-file line-ending change as a side effect. It renders the real diff unreadable and can conflict with everyone else's branches.
- Do not "fix" line endings across a repository as part of an unrelated change.
- Be aware of encoding: a file re-saved in a different encoding shows as a complete rewrite.

## Checklist

- [ ] I read `git diff --staged`, not just the file list.
- [ ] Every staged file is required by the change.
- [ ] No generated artifact, cache, or dependency directory is staged.
- [ ] No secret is in the staged content.
- [ ] `.gitignore` covers anything new that should be ignored.
- [ ] No accidental whole-file line-ending or encoding change.
- [ ] Any already-committed secret was reported rather than quietly removed.
