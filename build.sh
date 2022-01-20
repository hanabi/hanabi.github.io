#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Install Python dependencies
pip install -r "$DIR/image-generator/requirements.txt" --quiet

# Reset the internal SECONDS variable so that we can measure how long validation takes
# https://stackoverflow.com/questions/16908084/bash-script-to-calculate-time-elapsed
SECONDS=0

# Test to see if all of the YAML files are valid
# (by manually invoking the "create-svg.py" script on every YAML file)
echo "Testing to see if all of the YAML files are valid..."
YAML_FILES=$(find "$DIR/image-generator/yml" -name '*.yml' -type f)
for YAML_FILE in $YAML_FILES; do
  echo $YAML_FILE
  "$DIR/image-generator/create-svg.py" < "$YAML_FILE" > /dev/null
done
echo "All the YAML files are valid. (It took $SECONDS seconds.)"

# Build the website, which will go into the "build" subdirectory
cd "$DIR"
SECONDS=0
rm -rf "$DIR/build"
npm run build
echo "Build successful. (It took $SECONDS seconds.)"
