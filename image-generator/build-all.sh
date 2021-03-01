#!/bin/bash

for yml in *yml; do
  echo ${yml}
  python ./create-svg.py < ${yml} > ../static/img/examples/${yml/yml/}svg
done
