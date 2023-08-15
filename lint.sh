#!/bin/bash

set -euo pipefail # Exit on errors and undefined variables.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

SECONDS=0

cd "$DIR"

# Ensure that the code passes the TypeScript compiler.
npx tsc --noEmit

# Use Prettier to check formatting.
# "--log-level=warn" makes it only output errors.
npx prettier --log-level=warn --check .

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

# Check for invalid YAML files.
bash "$DIR/image-generator/check_valid.sh"

# Check for unused YAML files.
python "$DIR/image-generator/check_unused.py"

echo "Successfully linted in $SECONDS seconds."
