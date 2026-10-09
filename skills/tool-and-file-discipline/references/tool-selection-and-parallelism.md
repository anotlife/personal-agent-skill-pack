# Tool Selection and Parallelism

## Principle

Choose the tool from the question, not from habit. Then issue independent calls together and dependent calls in order. Most wasted turns come from picking a shell command where a tool exists, or from serializing reads that had no dependency.

## Route by question

| Question | Route |
|---|---|
| A known file, or a known range in it | Read that range directly |
| Where is X defined? | Search for the identifier, then read the hit |
| What is the shape of this module? | An outline or module-summary tool, not a full read |
| Who calls this? | An LSP or reference tool, not text search |
| Does the behavior work? | Execute the path |
| What is the project's structure? | A project-level report, not `ls -R` |
| What changed? | A diff, not a file listing |
| A config value's effective origin | A config-provenance tool, not manual file chasing |

## Dedicated tools beat shell equivalents

Shell readers cost a permission prompt and lose structure. A `cat` that would pass instantly becomes a prompt the moment the same command also contains `sed`. One command, one shape.

| Instead of | Use |
|---|---|
| `cat f`, `head`, `tail`, `sed -n 'a,bp'` | Read tool with offset/limit |
| `grep -rn pat`, `rg pat` | Grep tool |
| `ls -R`, `find -type f` | List/find tool |
| `sed -i`, `awk` rewrite | Edit tool |
| `cat <<EOF > f`, `echo > f` | Write tool |

Reserve the shell for what tools cannot do: pipelines into a second stage, process control, globs across trees, git, builds, tests, and programs.

## Shell hygiene

- Never prefix with `cd <dir> &&`. Use the tool's working-directory parameter.
- Never chain with `;` or decorative separators (`echo "===="`, `printf '---'`). It renders badly and obscures which part failed. Use `&&` only for a genuine dependency, and prefer two calls.
- Quote paths containing spaces.
- Prefer non-interactive flags (`--yes`, `-y`, `--no-pager`, CI flags) so an environment never hangs waiting for input.
- Before starting a long-running process, check whether it is already running.
- Verify a script name exists in `package.json` (or the equivalent) before running it.

## Parallelism

**Parallelize** genuinely independent work:

- reads of different files;
- searches for different concepts;
- independent diagnostics;
- reads, searches, and listings that all feed the same decision.

**Serialize** when there is a real dependency:

- a value from call A is an argument to call B;
- an edit must land before the test that checks it;
- two operations touch the same file or the same shared contract;
- a plan must be finished before edits that depend on it.

Parallelism reduces latency; it is not a way to widen exploration. Do not launch ten searches hoping one is relevant.

## Tool output is evidence

Extract the exact fact you needed. Do not smooth over a missing detail because the output "looks like" what you expected. If the output does not contain the fact, the fact is unknown — say so rather than inferring it from context.

## Checklist

- [ ] Each call's tool matches the question.
- [ ] No shell command duplicated a dedicated tool.
- [ ] Independent calls were issued together; dependent calls were ordered.
- [ ] No two parallel operations touched the same file.
- [ ] Every fact I am about to use appears in the output I received.
