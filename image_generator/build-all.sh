#!/bin/bash

for yml in *yml; do
	echo ${yml}
	python ./createsvg.py < ${yml} > ../static/img/examples/${yml/yml/}svg
done
