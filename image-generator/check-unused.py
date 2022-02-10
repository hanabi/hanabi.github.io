#!/usr/bin/python

import glob
import re

PATTERN = re.compile(r"import.*from.*@site/(image-generator/yml.*yml)")

used_ymls = set()
used_ymls.add("image-generator/yml/template.yml")

for md in glob.iglob("docs/**.md"):
    with open(md, "rt") as f:
        for line in f.readlines():
            m = PATTERN.match(line)
            if m:
                used_ymls.add(m.group(1))

unused = set(glob.iglob("image-generator/yml/**.yml")) - used_ymls

if unused:
    for yml in sorted(unused):
        print("unused:", yml)
    raise Exception("Unused YMLs found")
