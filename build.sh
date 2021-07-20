#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Install Python dependencies
pip install -r "$DIR/image-generator/requirements.txt" --quiet

# Test to see if all of the YAML files are valid
# (by manually invoking the "create-svg.py" script on every YAML file)
echo "Testing to see if all of the YAML files are valid..."
YAML_FILES=$(find "$DIR/image-generator/yml" -name '*.yml' -type f)
for YAML_FILE in $YAML_FILES; do
  echo $YAML_FILE
  "$DIR/image-generator/create-svg.py" < "$YAML_FILE" > /dev/null
done
echo "All the YAML files are valid."

# Build the website, which will go into the "build" subdirectory
cd "$DIR"
rm -rf "$DIR/build"
npm run build
