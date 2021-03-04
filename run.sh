#!/bin/bash

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

if [ ! -d "$DIR/image-generator/create-svg-all.py" ]; then
  "$DIR/build.sh"
fi

cd "$DIR"
npm run start
