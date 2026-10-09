# Secrets Handling

## The rule

A secret that reaches output, a log, a commit, or a third party is disclosed. There is no partial disclosure and no undoing it — a token in a commit is in every clone forever.

## Never

- **Log it.** Not in a debug line, not in an error message, not in a traceback.
- **Echo it.** Not in your response, not in a code block, not as an example value.
- **Commit it.** Not in source, a test fixture, a config, a notebook output, or a comment.
- **Put it in a URL.** Query strings appear in logs, proxies, and browser history.
- **Send it to an unrelated service.** Not in a header, a payload, or an analytics call.
- **Write it into a generated file** or an example config.
- **Include it in a diff** you are about to show or apply.
- **Store it in memory** or a durable note.
- **Paste it into a third-party tool** — a pastebin, a diagram renderer, a gist, an LLM playground.

## Always

- **Read from the environment** or a secret manager.
- **Reference the name, not the value.** Log `API_KEY is set` or `API_KEY is missing`, never the key.
- **Redact before printing.** If a value must be identifiable, print a prefix and a length: `sk-...f3a2 (48 chars)`.
- **Keep the real file out of version control.** Commit a `.example` with placeholder values that shows the shape.
- **Keep `.gitignore` current** when a new secret-bearing path appears.
- **Scan the staged diff** before committing, including files whose names look innocuous.
- **Rotate first, investigate second**, if a secret is exposed. The credential is compromised the moment it is written, regardless of whether anyone read it.

## Where secrets hide

| Location | Note |
|---|---|
| `.env`, `.env.local`, `.env.*` | The obvious case |
| Config files | `config.json`, `settings.py`, `application.yml` |
| Test fixtures and snapshots | Captured responses containing tokens |
| Notebook outputs | Saved cell output often embeds a request with a header |
| CI configuration | Sometimes with a real value committed "temporarily" |
| Comments | "TODO: move this to env" next to a live key |
| Docker files and compose files | Environment values written inline |
| Log files committed by accident | Full request dumps |
| URLs in code | `https://user:pass@host` |
| Private keys | `.pem`, `.p12`, `.key`, `id_rsa` |
| Session cookies | In a saved HAR file or a test fixture |
| History | A secret deleted in a later commit is still in the earlier one |

## Recognising a secret

Patterns worth scanning for in a staged diff:

- long random-looking alphanumeric strings;
- prefixes: `sk-`, `sk-ant-`, `ghp_`, `gho_`, `github_pat_`, `AKIA`, `xox`, `AIza`, `glpat-`;
- `-----BEGIN ... PRIVATE KEY-----`;
- `password=`, `passwd=`, `secret=`, `token=`, `api_key=` followed by a value;
- a connection string with embedded credentials.

## Redaction markers

If you see a marker such as `[REDACTED:github-pat]` in a file or a message, the original content held a secret that a security layer removed.

- Do not overwrite the marker with real content.
- Do not treat it as a literal string to match or search for.
- Do not print surrounding context that might contain the rest of the secret.
- Do not "fix" it by reconstructing the value.

## If a secret is already committed

1. **Say so immediately.** Do not quietly delete the file and continue.
2. State the fact that matters: deleting the file later does **not** remove it from history.
3. Recommend rotation of the credential — this is necessary regardless of anything else.
4. Present history rewriting as a separate decision the user must make, because it invalidates every clone and every open branch.
5. Do not rewrite history without explicit approval.

## Working with a file that contains secrets

- Read it to understand the shape; do not print the values.
- If you must show the structure, replace values with placeholders in what you show.
- Do not copy the file to a scratch location that is not gitignored.
- Do not include it in a sub-agent brief.

## Checklist

- [ ] No secret appears in my output, a log, an error, or a commit.
- [ ] I referenced names, not values.
- [ ] The staged diff was scanned before committing.
- [ ] `.gitignore` covers any new secret-bearing path.
- [ ] Any exposed secret was reported, with rotation as the first step.
- [ ] No redaction marker was overwritten or reconstructed.
