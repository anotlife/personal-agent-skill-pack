#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_SRC="$ROOT/skills"
PROMPT_SRC="$ROOT/system-prompts"
SKILL_DEST="${HOME}/.agents/skills"
PROMPT_DEST="${HOME}/.agents/system-prompts"
BACKUP_ROOT="${HOME}/.agents/personal-pack-backups/$(date +%Y%m%d-%H%M%S)"

mkdir -p "$SKILL_DEST" "$PROMPT_DEST"
backup_target() {
  local target="$1"
  if [ -e "$target" ] || [ -L "$target" ]; then
    mkdir -p "$BACKUP_ROOT"
    mv "$target" "$BACKUP_ROOT/$(basename "$target")"
    echo "Backed up existing target: $target"
  fi
}

for skill_dir in "$SKILL_SRC"/*; do
  [ -d "$skill_dir" ] || continue
  name="$(basename "$skill_dir")"
  target="$SKILL_DEST/$name"
  backup_target "$target"
  cp -a "$skill_dir" "$target"
  echo "Installed Skill: $name"
done

# Install the prompt library as a versioned folder to avoid destroying hand edits.
VERSIONED_PROMPT_DEST="$PROMPT_DEST/personal-agent-skill-pack"
backup_target "$VERSIONED_PROMPT_DEST"
mkdir -p "$VERSIONED_PROMPT_DEST"
cp -a "$PROMPT_SRC/." "$VERSIONED_PROMPT_DEST/"
cp -f "$ROOT/AGENTS.core.md" "$HOME/.agents/AGENTS.core.personal.md"

echo
echo "Skills installed at: $SKILL_DEST"
echo "Prompt layers installed at: $VERSIONED_PROMPT_DEST"
echo "Portable core saved at: $HOME/.agents/AGENTS.core.personal.md"
echo
echo "Activation is deliberately manual:"
echo "- Pi: review system-prompts/adapters/pi-append-system.template.md and append its rules to ~/.pi/agent/APPEND_SYSTEM.md."
echo "- OpenCode: review system-prompts/adapters/opencode-global-AGENTS.template.md and append its rules to ~/.config/opencode/AGENTS.md."
echo "Do not overwrite an existing instruction file; append and deduplicate deliberately."
