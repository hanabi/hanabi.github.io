#!/bin/bash

set -euo pipefail # Exit on errors and undefined variables.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

if [[ "$(uname)" == "Darwin" ]]; then
  # Install Homebrew if it already doesn't exist.
  if ! command -v brew &> /dev/null; then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  fi

  if ! command -v node &> /dev/null; then
    brew install node
  fi
fi

echo "Installing JavaScript dependencies..."
cd "$DIR"
npm ci
echo "Complete."
