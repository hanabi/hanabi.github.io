#! /bin/bash

epubsrc="build/assets/epub/"

mkdir $epubsrc
cd $epubsrc
git clone git@github.com:d20cay/epub-template.git epub-src

cp ../../../static/img/logo.png epub-src/OEBPS/img/logo.png
rm epub-src/OEBPS/img/cover.png
# Remove following line once generation of cover works.
mv ../../../static/img/cover.png epub-src/OEBPS/img/cover.png
python3 ../../../scripts/epub.py

filename="hgroup-conventions.epub"
epubout="epub-src/out/"
mkdir $epubout
cd epub-src
zip -X0   "../$epubout$filename" mimetype
zip -9 -r "../$epubout$filename" META-INF/ OEBPS/ -x '*.DS_Store'
cd ..
mv "$epubout$filename" "$filename"
rm -rf epub-src

