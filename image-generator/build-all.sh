#!/bin/bash

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd "$DIR/yml"
for yml in *yml; do
  echo ${yml}
  #python ./create-svg.py < ${yml} > ../static/img/generated/${yml/yml/}svg
done
