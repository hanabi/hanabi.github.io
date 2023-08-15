#!/bin/bash

set -euo pipefail # Exit on errors and undefined variables.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

SECONDS=0

cd "$DIR"

# Test to see if all of the YAML files are valid by manually invoking the "create_svg.py" script on
# every YAML file.
echo "Testing to see if all of the YAML files are valid..."
YAML_FILES=$(find "$DIR/yml" -name '*.yml' -type f)
for YAML_FILE in $YAML_FILES; do
  echo "$YAML_FILE"
  python "$DIR/create_svg.py" < "$YAML_FILE" > /dev/null
done

echo "All the YAML files are valid. (It took $SECONDS seconds.)"
