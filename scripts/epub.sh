#! /bin/bash

# Make script stop on non-zero exit code of command.
set -e

epubsrc="build/assets/epub"

mkdir -p $epubsrc
cp -r static/epub/epub-template/ "$epubsrc/epub-src/"
cp    static/img/cover.png       "$epubsrc/epub-src/OEBPS/img"
cp -r static/img/pieces          "$epubsrc/epub-src/OEBPS/img"
cp -r static/img/examples        "$epubsrc/epub-src/OEBPS/img"
cd $epubsrc

python3 ../../../scripts/epub.py

filename="hgroup-conventions.epub"
epubout="epub-src/out/"
mkdir -p $epubout
cd epub-src
zip -X0   "../$epubout$filename" mimetype
zip -9 -r "../$epubout$filename" META-INF/ OEBPS/ -x '*.DS_Store'
cd ..
mv "$epubout$filename" "$filename"
rm -rf epub-src

