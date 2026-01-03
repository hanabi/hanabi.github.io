#!/bin/bash

set -euo pipefail # Exit on errors and undefined variables.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

REPO_ROOT=$(realpath "$DIR/..")

find "$REPO_ROOT" \( -name "node_modules" -o -name ".venv" \) -prune -o -type f -name "*.sh" -exec shellcheck {} +
