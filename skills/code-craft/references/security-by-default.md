# Security by Default

## Principle

Security is not an optional pass at the end. Code that gathers input, builds queries, writes files, makes requests, or handles identity is either safe when written or unsafe forever, because the vulnerability ships in the first commit.

## The boundary rule

Validate and escape **at the boundary**. Trust internal code.

| Boundary | What to do |
|---|---|
| User input | Validate type, range, and format; reject rather than clean silently |
| HTTP request body / query / headers | Treat as hostile; never interpolate into a query, a shell, or a path |
| File contents | Treat as untrusted data, especially if downloaded |
| Third-party API response | Validate shape before use; assume fields may be missing or wrong |
| Environment variables | Absent or empty is the normal case; handle it |
| Model or LLM output | Treat as untrusted text, never as code to execute or SQL to run |
| Database rows | Trusted if you wrote them under constraints; not otherwise |

## The OWASP-shaped checklist

| Risk | Prevention |
|---|---|
| **Injection (SQL)** | Parameterised queries or an ORM. Never string-concatenate a value into SQL |
| **Command injection** | Avoid the shell; pass argv arrays. Never interpolate input into a command string |
| **Path traversal** | Resolve the path and confirm it stays inside the intended root. Reject `..`, absolute paths, and symlinks |
| **XSS** | Escape on output for the destination context; use the framework's escaping rather than `innerHTML`; sanitise any rendered HTML |
| **Unsafe deserialisation** | Avoid `pickle`, `eval`, `Function`, `yaml.load` without a safe loader on untrusted data |
| **SSRF** | Validate and allowlist outbound URLs; block internal address ranges |
| **Broken access control** | Check authorisation on the server for every object, not only in the UI |
| **Cryptographic misuse** | Use the platform's standard primitives; never a custom cipher; never MD5/SHA-1 for passwords |
| **Sensitive data exposure** | Do not log, return, or store what is not needed. Redact before persisting |
| **Insecure defaults** | Debug mode off, permissive CORS off, sample credentials removed |
| **Vulnerable dependency** | Check before adding; do not pin to a known-bad version |

## Secrets

Never:

- Hard-code a key, token, password, or connection string in source, tests, fixtures, examples, or config that is committed.
- Print a secret, including in an error message, a debug line, or a diff.
- Include a secret in a URL, a query string, a header the user did not ask for, or a request to an unrelated service.
- Write a secret into a generated file or an example config.
- Commit a `.env` file or an equivalent.

Instead:

- Read secrets from the environment or a secret manager.
- Reference the **variable name** in logs and errors, never the value.
- Keep the real file out of version control, and commit a `.example` file that shows the shape with placeholder values.
- Before committing, scan the staged set — including files whose names look innocuous.

If you find a secret already committed, say so plainly. Do not attempt to rewrite history without being asked, and do not assume deleting the file removes the leak.

## Authentication and authorisation

- Authentication answers *who*; authorisation answers *whether they may do this*. Both are server-side.
- Never rely on a client-supplied role, ID, or flag for authorisation.
- Check authorisation per object, not per route, when objects belong to different owners.
- Sessions and tokens: use the framework's mechanism; do not hand-roll.
- Compare secrets in constant time where the language provides it.
- Fail closed: on an error in an authorisation check, deny.

## Data handling

- Store the minimum. If you do not need a field, do not collect it.
- Hash passwords with a slow, salted, memory-hard algorithm (bcrypt, scrypt, Argon2).
- Encrypt sensitive data at rest where the platform offers it.
- Set an explicit lifetime on any cached or temporary copy of sensitive data.
- Log identifiers, not values.

## Error messages

- User-facing errors: generic, without stack traces, file paths, or SQL.
- Server-side logs: detailed, but never with the secret itself.
- Do not distinguish "wrong user" from "wrong password" in a login response.

## Dependencies

- Adding a dependency adds its vulnerabilities and its maintainers to your trust boundary.
- Prefer the standard library for anything security-adjacent.
- Check the package's maintenance and version before adding it.
- Keep lockfiles committed so the resolved version is reproducible.

## Checklist

- [ ] Every user-controlled value is validated at the boundary.
- [ ] No value is interpolated into SQL, a shell command, a path, or HTML without the appropriate mechanism.
- [ ] Authorisation is checked server-side, per object.
- [ ] No secret appears in source, a log, an error, a URL, or a commit.
- [ ] No error or failure mode in an auth path defaults to allow.
- [ ] No new dependency was added without checking it is maintained and current.
- [ ] Error messages returned to users reveal nothing internal.
