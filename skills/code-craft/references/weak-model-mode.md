# Weak-Model / Low-Attention Mode

Weak models over-engineer. They add abstractions, validation, comments, docstrings, compatibility shims, and configuration that nobody asked for, and each addition is individually defensible. This file is a list of prohibitions with a check for each.

## The addition audit

Before finishing, look at your diff and answer each question. If the answer is yes, delete it.

| Question | Delete if yes |
|---|---|
| Did I create a helper, class, or interface with exactly one use site? | Yes |
| Did I add a parameter, option, or config key the user did not ask for? | Yes |
| Did I add a check for a state the code cannot reach? | Yes |
| Did I add a fallback for something the framework guarantees? | Yes |
| Did I keep an old signature, type, or alias "so nothing breaks"? | Yes |
| Did I rename anything the task did not require? | Yes |
| Did I write a comment that explains what the code does? | Yes |
| Did I write a docstring longer than one line? | Yes |
| Did I leave commented-out code, a `TODO`, or a `pass`? | Replace with working code or delete |
| Did I reformat code I did not otherwise change? | Revert the formatting |
| Did I add a dependency? | Ask first, or find a standard-library option |
| Did I catch and swallow an error? | Remove, unless the discard is genuinely expected and commented |

## Hard rules

- Never suppress a type or lint error: no `as any`, `@ts-ignore`, `# type: ignore`, `@SuppressWarnings`, `#[allow(...)]`, no disabling a rule in config. Fix the underlying type or validate at the boundary.
- Never add a dependency without explicit approval.
- Never write a comment that narrates the change ("// added X"). That belongs in the commit message.
- Never use a comment as a scratchpad for your reasoning.
- Never delete or edit code you did not write unless the task requires it.
- Never change a test's expectation to match your output.
- Never leave placeholder code where working code was promised.

## The five-line check

For any function you wrote, answer:

1. What is its one job? (One clause. If you need "and", split it.)
2. Is it called from more than one place? (If no, should it be inline?)
3. Does it validate anything internal? (If yes, remove the validation.)
4. Does its name describe what it does? (If no, rename rather than comment.)
5. Would a reader of the surrounding file mistake it for someone else's code? (If yes, match the local style.)

## Security hard rules

- No value interpolated into SQL, a shell string, a file path, or HTML without the proper mechanism.
- No secret in source, a log, an error message, a URL, or the staged diff.
- No authorisation decision made on the client.
- No error in an auth path defaulting to permit.

## Verification hard rules

- Run the project's own test, lint, and type-check commands after the change, if they exist.
- Quote the command and the result. Never write "tests pass" without them.
- If a check failed, quote the failure.
- If you did not run a check, say so.
- Scan for placeholder escapes (`pass`, `...`, `todo!()`, `unimplemented!()`, `as any`, `throw new Error("not implemented")`) before claiming the code works.

## Final gate

- [ ] No single-use abstraction.
- [ ] No unrequested configurability.
- [ ] No impossible-state handling.
- [ ] No compatibility shim.
- [ ] No error suppressed.
- [ ] No comment narrating the change.
- [ ] No placeholder.
- [ ] No secret.
- [ ] Style matches the surrounding file.
- [ ] Every verification claim is backed by output you read.
