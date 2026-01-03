#!/bin/bash

# Script to rename a challenge question file and update all references
# Usage: ./rename-challenge-question.sh <path> "<new-title>"

set -euo pipefail # Exit on errors and undefined variables.

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <path> \"<new-title>\""
  exit 1
fi

CURRENT_PATH="$1"
NEW_TITLE="$2"

# Add .mdx extension if not present
if [[ ! "$CURRENT_PATH" =~ \.mdx$ ]]; then
  CURRENT_PATH="${CURRENT_PATH}.mdx"
fi

# Validate current path exists
if [ ! -f "$CURRENT_PATH" ]; then
  echo "Error: File $CURRENT_PATH does not exist"
  exit 1
fi

# Extract directory and filename information
DOCS_DIR="docs/challenge-questions"
CURRENT_BASENAME=$(basename "$CURRENT_PATH" .mdx)
CURRENT_ASSET_DIR="$DOCS_DIR/$CURRENT_BASENAME"

# Extract level number from the current filename (e.g., level-2-question-1 -> 2)
if [[ "$CURRENT_BASENAME" =~ ^level-([0-9]+)- ]]; then
  LEVEL_NUM="${BASH_REMATCH[1]}"
else
  echo "Error: Could not extract level number from $CURRENT_BASENAME"
  exit 1
fi

# Convert new title to slug (lowercase, replace spaces with hyphens, remove special chars)
TITLE_SLUG=$(echo "$NEW_TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-//' | sed 's/-$//')
NEW_SLUG="level-${LEVEL_NUM}-${TITLE_SLUG}"
NEW_PATH="$DOCS_DIR/$NEW_SLUG.mdx"
NEW_ASSET_DIR="$DOCS_DIR/$NEW_SLUG"

echo "Rename: $CURRENT_ASSET_DIR -> $NEW_ASSET_DIR"
echo ""

# Check if target already exists
if [ -f "$NEW_PATH" ] && [ "$CURRENT_PATH" != "$NEW_PATH" ]; then
  echo "Error: Target file $NEW_PATH already exists"
  exit 1
fi

# Step 1: Update the MDX file contents before renaming
echo "Updating MDX file contents..."

# Update title
sed -i "s/^title: .*/title: $NEW_TITLE/" "$CURRENT_PATH"

# Update import statements (replace old directory name with new slug)
sed -i "s|from \"./$CURRENT_BASENAME/|from \"./$NEW_SLUG/|g" "$CURRENT_PATH"

# Update ChallengeQuestionProgress id
sed -i "s|id=\"$CURRENT_BASENAME\"|id=\"$NEW_SLUG\"|g" "$CURRENT_PATH"

# Step 2: Rename asset directory if it exists
if [ -d "$CURRENT_ASSET_DIR" ]; then
  # Only rename directory if the name is actually changing
  if [ "$CURRENT_ASSET_DIR" != "$NEW_ASSET_DIR" ]; then
    echo "Renaming asset directory..."
    git mv "$CURRENT_ASSET_DIR" "$NEW_ASSET_DIR"
  fi
else
  echo "No asset directory found at $CURRENT_ASSET_DIR (skipping)"
fi

# Step 3: Rename the MDX file
if [ "$CURRENT_PATH" != "$NEW_PATH" ]; then
  echo "Renaming MDX file..."
  git mv "$CURRENT_PATH" "$NEW_PATH"
fi

# Step 4: Update sidebars.ts
echo "Updating sidebars.ts..."
SIDEBAR_OLD_PATH="challenge-questions/$CURRENT_BASENAME"
SIDEBAR_NEW_PATH="challenge-questions/$NEW_SLUG"

sed -i "s|\"$SIDEBAR_OLD_PATH\"|\"$SIDEBAR_NEW_PATH\"|g" sidebars.ts

echo ""
echo "Successfully renamed challenge question!"
