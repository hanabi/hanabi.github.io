#!/bin/bash

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

case "$(uname -s)" in
    MINGW*)
        python "$DIR/create-svg.py"
        ;;
    *)
        "$DIR/create-svg.py"
	;;
esac
