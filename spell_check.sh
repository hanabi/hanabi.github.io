#!/bin/bash

# From: https://github.com/eleven-labs/blog.eleven-labs.com/blob/master/bin/check-spelling.sh

MARKDOWN_TEXT=`(find . -name '*.md' -exec cat {} \;)`
MISSPELLED=`echo $MARKDOWN_TEXT | aspell --lang=en --encoding=utf-8 --personal=./.aspell.en.pws list | sort -u`

if [[ -z $MISSPELLED ]]; then
  echo "No misspelled words."
  exit 0
fi

echo -e "Misspelled words:"
MISSPELLED=`echo "$MISSPELLED" | sed -E ':a;N;$!ba;s/\n/, /g'`
echo "$MISSPELLED"
exit 1
