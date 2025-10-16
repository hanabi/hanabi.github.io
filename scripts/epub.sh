#! /bin/bash

epubsrc="build/assets/epub/"

mkdir $epubsrc
cd $epubsrc
git clone git@github.com:d20cay/epub-template.git epub-src
python3 ../../../scripts/epub.py

filename="hgroup-conventions.epub"
epubout="epub-src/out/"
mkdir $epubout
zip -X0   "$epubout$filename" epub-src/mimetype
zip -9 -r "$epubout$filename" epub-src/META-INF/ epub-src/OEBPS/
mv        "$epubout$filename" "$filename"
rm -rf epub-src

