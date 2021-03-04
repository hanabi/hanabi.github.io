#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Build all the SVG files from the YAML specifications (to show off example game states)
rm -rf "$DIR/static/img/generated"
if [ "$(expr substr $(uname -s) 1 5)" == "MINGW" ]; then
  pip install --user --quiet --requirement "$DIR/image-generator/requirements.txt"
  python "$DIR/image-generator/create-svg-all.py"
else
  pip3 install --user --quiet --requirement "$DIR/image-generator/requirements.txt"
  "$DIR/image-generator/create-svg-all.py"
fi
