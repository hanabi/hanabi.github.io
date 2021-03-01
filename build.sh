#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# First, build all the SVG files from the YAML specifications (to show off example game states)
rm -rf "$DIR/static/img/generated"
pip3 install --quiet --requirement "$DIR/image-generator/requirements.txt"
if [ "$(expr substr $(uname -s) 1 5)" == "MINGW" ]; then
  python "$DIR/image-generator/create-svg-all.py"
else
  "$DIR/image-generator/create-svg-all.py"
fi

# Second, build the website, which will go into the "build" subdirectory
cd "$DIR"
rm -rf "$DIR/build"
npm run build
