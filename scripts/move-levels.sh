#!/bin/bash

set -euo pipefail # Exit on errors and undefined variables.

function usage() {
  echo "Usage: ./move-levels.sh A"
  echo "Moves levels A, A+1, ..., to A+1, A+2, ..."
  exit 64
}

if [ $# -ne 1 ]; then
  usage
fi

if ! [[ $1 =~ ^[0-9]+$ ]]; then
  usage
fi

MAX_LEVEL=$(find docs/ -maxdepth 1 -name 'level-*.mdx' | wc --lines)
readarray -t MDX_FILES < <(git ls-files 'docs/*.mdx' 'docs/**/*.mdx')

for x in $(seq "$MAX_LEVEL" -1 "$1"); do
  ((y = x + 1))
  sed -i "s/Level $x\\b/Level $y/g" "${MDX_FILES[@]}"
  sed -i "s/level $x\\b/level $y/g" "${MDX_FILES[@]}"
  sed -i "s/level-$x\\b/level-$y/g" "${MDX_FILES[@]}"
  sed -i "s/\\[$x\\]/\\[$y\\]/g" docs/learning-path.mdx
  sed -i "s/level={$x}/level={$y}/g" "${MDX_FILES[@]}"
done
for x in $(seq "$MAX_LEVEL" -1 "$1"); do
  ((y = x + 1))
  # Move main level page
  if [ -f "docs/level-$x.mdx" ]; then
    git mv "docs/level-$x.mdx" "docs/level-$y.mdx"
  fi
  # Move main level YML directory
  if [ -d "docs/level-$x" ]; then
    git mv "docs/level-$x" "docs/level-$y"
  fi
  # Move challenge question intro page
  if [ -f "docs/challenge-questions/level-$x.mdx" ]; then
    git mv "docs/challenge-questions/level-$x.mdx" "docs/challenge-questions/level-$y.mdx"
  fi
  # Move all challenge question pages for this level
  for file in docs/challenge-questions/level-$x-*.mdx; do
    if [ -f "$file" ]; then
      new_file=$(echo "$file" | sed "s/level-$x-/level-$y-/")
      git mv "$file" "$new_file"
    fi
  done
  # Move all challenge question YML directories for this level
  for dir in docs/challenge-questions/level-$x-*/; do
    if [ -d "$dir" ]; then
      new_dir=$(echo "$dir" | sed "s/level-$x-/level-$y-/")
      git mv "$dir" "$new_dir"
    fi
  done
done

# Update sidebars.ts - shift level references up
for x in $(seq "$MAX_LEVEL" -1 "$1"); do
  ((y = x + 1))
  # Update paths like "level-8" -> "level-9"
  sed -i "s/level-$x\\>/level-$y/g" sidebars.ts
  # Update labels like "Level 8" -> "Level 9"
  sed -i "s/\"Level $x\"/\"Level $y\"/g" sidebars.ts
done
# Add the new level entry at position $1
# Find the line before (level-$1 is now level-($1+1)) and insert before it
((next_level = $1 + 1))
sed -i "/\"level-$next_level\",/i\\        \"level-$1\"," sidebars.ts
echo "Updated sidebars.ts: shifted levels and added level-$1"

# Update MAX_LEVEL in static/js/hotkey.js
NEW_MAX_LEVEL=$((MAX_LEVEL + 1))
sed -i "s/^const MAX_LEVEL = $MAX_LEVEL;$/const MAX_LEVEL = $NEW_MAX_LEVEL;/" static/js/hotkey.js
echo "Updated MAX_LEVEL in static/js/hotkey.js to $NEW_MAX_LEVEL"

# Create the new level file
cat > "docs/level-$1.mdx" <<EOF
---
title: Level $1 - TODO
---

## Special Moves

### TODO

- TODO: Add content here
EOF
echo "Created docs/level-$1.mdx from template"

# Create the directory for level YAML files
mkdir -p "docs/level-$1"
echo "Created docs/level-$1/ directory for example images"

echo "+-----------------------------------------------------------"
echo "|                    ==  REMINDERS  ==                      "
echo "| Verify the table at the end of docs/learning-path.mdx     "
echo "| You should edit docs/level-$1.mdx to add actual content   "
echo "+-----------------------------------------------------------"
