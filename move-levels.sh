#!/bin/bash

set -euo pipefail # Exit on errors and undefined variables.

function usage() {
	echo "Usage: ./move-levels.sh A"
	echo "Moves levels A, A+1, ..., to A+1, A+2, ..."
	exit 64
}

if [ $# -ne 1 ]; then
	usage
fi

if ! [[ $1 =~ ^[0-9]+$ ]]; then
	usage
fi

MAX_LEVEL="$(find docs/ -maxdepth 1 -name 'level-*.mdx' | wc --lines)"
echo "Setting old MAX_LEVEL to $MAX_LEVEL"
readarray -t MDX_FILES < <(git ls-files 'docs/*.mdx')

for x in $(seq "$MAX_LEVEL" -1 "$1"); do
	((y = x + 1))
	sed -i "s/Level $x\\b/Level $y/g" "${MDX_FILES[@]}"
	sed -i "s/level $x\\b/level $y/g" "${MDX_FILES[@]}"
	sed -i "s/level-$x\\b/level-$y/g" "${MDX_FILES[@]}"
	sed -i "s/\\[$x\\]/\\[$y\\]/g" docs/learning-path.mdx
done
git diff --stat
for x in $(seq "$MAX_LEVEL" -1 "$1"); do
	((y = x + 1))
	if [ -d "image-generator/yml/level-$x" ]; then
		git mv "image-generator/yml/level-$x" "image-generator/yml/level-$y"
	fi
	if [ -d "image-generator/yml/challenge-questions/level-$x" ]; then
		git mv "image-generator/yml/challenge-questions/level-$x" "image-generator/yml/challenge-questions/level-$y"
	fi
	if [ -f "docs/challenge-questions/level-$x.mdx" ]; then
		git mv "docs/challenge-questions/level-$x.mdx" "docs/challenge-questions/level-$y.mdx"
	fi
	if [ -f "docs/level-$x.mdx" ]; then
		git mv "docs/level-$x.mdx" "docs/level-$y.mdx"
	fi
done

echo "+----------------------------------------------------------+"
echo "|                    ==  REMINDERS  ==                     |"
echo "| Adjust sidebars.js and MAX_LEVEL in static/js/hotkey.js  |"
echo "| and verify he table at the end of docs/learning-path.mdx |"
echo "| You should also create the file docs/level-$1.mdx        |"
echo "+----------------------------------------------------------+"
