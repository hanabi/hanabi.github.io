#!/bin/bash

# From: https://github.com/eleven-labs/blog.eleven-labs.com/blob/master/bin/check-spelling.sh

MARKDOWN_TEXT=`(find . -name '*.md' -exec cat {} \;)`
echo $MARKDOWN_TEXT
MISSPELLED=`echo $MARKDOWN_TEXT | aspell --lang=en --encoding=utf-8 --personal=./.aspell.en.pws list | sort -u`
NUM_MISSPELLED=`echo "$MISSPELLED" | wc -l`
if [[ $NB_MISSPELLED -gt 0 ]]; then
  echo -e "Misspelled words:"
  MISSPELLED=`echo "$MISSPELLED" | sed -E ':a;N;$!ba;s/\n/, /g'`
  echo "$MISSPELLED"
  exit 1
fi
echo "No misspelled words."
