#!/bin/bash

set -e # Exit on any errors.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd "$DIR"

# Use Prettier to check formatting.
# "--log-level=warn" makes it only output errors.
npx prettier --loglevel=warn --check .

# Use ESLint to lint the JavaScript.
# "--max-warnings 0" makes warnings fail in CI, since we set all ESLint errors to warnings.
npx eslint --max-warnings 0 .

# Use remark to check Markdown files for errors.
# "--quiet" output only warnings and errors.
# "--frail" exits with 1 on warnings (for CI).
npx remark --quiet --frail docs misc

# Spell check every file using CSpell.
# "--no-progress" and "--no-summary" make it only output errors.
npx cspell --no-progress --no-summary .

# Check for unused CSpell words.
npx cspell-check-unused-words

# Check for unused YML files.
python "$DIR/image-generator/check_unused.py"

echo "Success!"
