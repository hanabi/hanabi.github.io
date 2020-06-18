#!/bin/bash

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

FILES=$(find "$DIR/.." -type f \
  -not -path "$DIR/../.git/*" \
  -not -path "$DIR/../academic-papers/*" \
  -not -path "$DIR/../img/*" \
  -not -path "$DIR/../misc/*.pdf" \
  -not -path "$DIR/../spell_checker/node_modules/*" \
  -not -path "$DIR/../LICENSE" \
)

cd "$DIR"
npx cspell --no-summary --config "$DIR/../.cspell.json" $FILES
