#!/bin/bash

set -euo pipefail # Exit on errors and undefined variables.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

if ! command -v npm &> /dev/null; then
  echo "Error: The \"npm\" command was not found. You must first install Node.js (and have \"npm\" in your PATH) before running this installation script." >&2
  exit 1
fi

echo "Installing JavaScript dependencies..."
cd "$DIR"
npm ci
echo "Complete."
