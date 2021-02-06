#!/bin/bash

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PARENT_DIR=$(dirname "$DIR")

# Get the files that we should perform checks on
FILES=$(find "$PARENT_DIR" -type f \
  -not -path "$PARENT_DIR/.git/*" \
  -not -path "$PARENT_DIR/academic-papers/*.pdf" \
  -not -path "$PARENT_DIR/img/*" \
  -not -path "$PARENT_DIR/misc/*.pdf" \
  -not -path "$PARENT_DIR/node_modules/*" \
  -not -path "$PARENT_DIR/spell-check/node_modules/*" \
  -not -path "$PARENT_DIR/spell-check/package-lock.json" \
  -not -path "$PARENT_DIR/src/theme/SearchBar/*" \
  -not -path "$PARENT_DIR/LICENSE" \
  -not -path "$PARENT_DIR/package.json" \
  -not -path "$PARENT_DIR/package-lock.json" \
  -not -path "$PARENT_DIR/yarn.lock" \
)
