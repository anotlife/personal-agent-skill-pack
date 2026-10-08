#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$ROOT/skills"
DEST="${HOME}/.agents/skills"
BACKUP_ROOT="${HOME}/.agents/skills-backups"
STAMP="$(date +%Y%m%d-%H%M%S)"

mkdir -p "$DEST"

for skill_dir in "$SRC"/*; do
  [ -d "$skill_dir" ] || continue
  name="$(basename "$skill_dir")"
  target="$DEST/$name"

  if [ -e "$target" ] || [ -L "$target" ]; then
    mkdir -p "$BACKUP_ROOT/$STAMP"
    mv "$target" "$BACKUP_ROOT/$STAMP/"
    echo "Backed up existing $name -> $BACKUP_ROOT/$STAMP/$name"
  fi

  cp -a "$skill_dir" "$target"
  echo "Installed $name"
done

echo
echo "Installed personal agent skills into: $DEST"
echo "The pack is compatible with Pi and OpenCode through the shared ~/.agents/skills location."
echo "Optional always-on core: copy AGENTS.core.md to ~/.pi/agent/AGENTS.md after reviewing it."
