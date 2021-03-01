#!/usr/bin/env python3

import glob
import subprocess

files = glob.glob('./yml/**/*.yml', recursive=True)
for f in files:
    subprocess.call([])
