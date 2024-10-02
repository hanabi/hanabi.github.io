#!/bin/bash

set -euo pipefail # Exit on errors and undefined variables.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

if [[ $OSTYPE == 'darwin'* ]]; then
  # Install Homebrew if it already doesn't exist.
  if ! which -s brew; then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  fi

  if ! which -s node; then
    brew install node
  fi
fi

echo "Installing JavaScript dependencies..."
cd "$DIR"
npm ci
echo "Complete."
