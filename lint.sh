#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# The latest version of some ESLint plugins require Node.js v16
NODE_VERSION=$(node --version | cut -c 2-3)
if (($NODE_VERSION < 16)); then
  echo "error: requires Node.js version 16"
  exit 1
fi

cd "$DIR"

# Step 1 - Use ESLint to lint the JavaScript
# Since all ESLint errors are set to warnings,
# we set max warnings to 0 so that warnings will fail in CI
npx eslint --max-warnings 0 src
npx eslint --max-warnings 0 static/js

# Step 2 - Use remark to check Markdown files for errors
# We set to quiet to output only warnings and errors
# We set to frail to exit with 1 on warnings (for CI)
npx remark --quiet --frail docs misc

# Step 3 - Spell check every file using cspell
# We use no-progress and no-summary because we want to only output errors
npx cspell --no-progress --no-summary "*.md"
npx cspell --no-progress --no-summary "*.sh"
npx cspell --no-progress --no-summary "docs/**"
npx cspell --no-progress --no-summary "image-generator/**"
npx cspell --no-progress --no-summary "misc/**"
npx cspell --no-progress --no-summary "src/**"
npx cspell --no-progress --no-summary "static/js/**"

echo "Success!"
