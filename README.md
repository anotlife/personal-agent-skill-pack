# Personal Agent Skill Pack

A progressively-loaded personal Skill Pack distilled from recurring high-value agent behavior patterns found across public system-prompt collections such as `elder-plinius/CL4R1T4S` and `asgeirtj/system_prompts_leaks`.

This package is a synthesis and paraphrase, not a verbatim copy of those repositories.

## Structure

Each skill follows:

```text
skill/
├── SKILL.md              # short routing + core behavior
└── references/
    ├── INDEX.md          # load-routing table
    ├── weak-model-mode.md
    └── *.md              # detailed operational rules, examples, checklists
```

The point is progressive disclosure: strong models can often operate from the short skill; weaker or distracted models can load the detailed references only when needed.

## Skills

- `personal-core`
- `verify-before-claim`
- `scope-and-minimal-change`
- `tool-and-file-discipline`
- `research-and-citations`
- `academic-report`
- `anti-slop-writing`
- `argument-audit`
- `error-recovery`
- `context-and-memory`

## Install

```bash
unzip personal-agent-skill-pack.zip
cd personal-agent-skill-pack
bash install.sh
```

By default this installs to:

```text
~/.agents/skills/
```

## Recommended use

For everyday coding and study work, enable the baseline (`personal-core`) plus the skills relevant to the current task. Do not force all ten into every prompt.

For a less capable / attention-poor model, the intended behavior is:

1. load the matching `SKILL.md`;
2. open that skill's `references/INDEX.md`;
3. load only clearly relevant detailed references;
4. use the final checklist before responding.

## Source note

The two source repositories are living collections and change over time. This pack deliberately extracts cross-model patterns rather than copying any single vendor's entire prompt. See `SOURCES.md` for the source map and extraction notes.
