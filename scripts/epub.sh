#! /bin/bash

set -euo pipefail # Exit on errors and undefined variables.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

REPO_ROOT=$(realpath "$DIR/..")
EPUB_DIR="$REPO_ROOT/build/assets/epub"

mkdir -p "$EPUB_DIR"
cp -r static/epub/epub-template/ "$EPUB_DIR/epub-src/"
cp static/img/cover.png "$EPUB_DIR/epub-src/OEBPS/img"
cp -r static/img/pieces "$EPUB_DIR/epub-src/OEBPS/img"
cp -r static/img/examples "$EPUB_DIR/epub-src/OEBPS/img"
cd "$EPUB_DIR"

python ../../../scripts/epub.py

FILE_NAME="hgroup-conventions.epub"
EPUB_OUT="epub-src/out"
mkdir -p "$EPUB_OUT"
cd epub-src
zip -X0 "../$EPUB_OUT/$FILE_NAME" mimetype
zip -9 -r "../$EPUB_OUT/$FILE_NAME" META-INF/ OEBPS/ -x '*.DS_Store'
cd ..
mv "$EPUB_OUT/$FILE_NAME" "$FILE_NAME"
rm -rf epub-src
