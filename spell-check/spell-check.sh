#!/bin/bash

echo getting here 1

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

source "$DIR/get-files.sh"

# Spell check every file using cspell
cd "$PARENT_DIR"
npx cspell --no-summary --config "$PARENT_DIR/.cspell.json" $FILES

echo getting here 2
