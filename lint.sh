#!/bin/bash

set -e # Exit on any errors.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd "$DIR"

# Step 1 - Use Prettier to check formatting.
npx prettier --check .

# Step 2 - Use ESLint to lint the JavaScript
# Since all ESLint errors are set to warnings, we set max warnings to 0 so that warnings will fail
# in CI.
npx eslint --max-warnings 0 src
npx eslint --max-warnings 0 static/js

# Step 3 - Use remark to check Markdown files for errors.
# We set to quiet to output only warnings and errors.
# We set to frail to exit with 1 on warnings (for CI).
npx remark --quiet --frail docs misc

# Step 4 - Spell check every file using cspell.
# We use no-progress and no-summary because we want to only output errors.
npx cspell --no-progress --no-summary

# Step 5 - Check for orphaned words.
bash "$DIR/check-orphaned-words.sh"

# Step 6 - Check for unused YML files
python "$DIR/image-generator/check_unused.py"

echo "Success!"
