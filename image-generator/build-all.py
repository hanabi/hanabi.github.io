#!/usr/bin/env python

import glob
import os
import subprocess
import sys

if sys.version_info < (3, 0):
    print("This script requires Python 3.x.")
    sys.exit(1)

# Get the directory of this file
dir_path = os.path.dirname(os.path.realpath(__file__))

# Constants
YAML_DIR = "yml"
SVG_DIR = os.path.join(dir_path, "..", "static", "img", "generated")

# Get all the subdirectories of the YAML directory
subdirectories = glob.glob(os.path.join(dir_path, YAML_DIR, "*"))
for subdirectory_path in subdirectories:
    # Create the corresponding output directory, if it does not already exist
    subdirectory_name = os.path.basename(subdirectory_path)
    output_dir = os.path.join(SVG_DIR, subdirectory_name)
    os.makedirs(output_dir)

    # Get all the YAML files in this subdirectory
    files = glob.glob(os.path.join(subdirectory_path, "*"))
    for file_path in files:
        # Get the new file name (e.g. "finesse.yml" --> "finesse.svg")
        file_name = os.path.basename(file_path)
        file_name_without_extension = os.path.splitext(file_name)[0]
        file_name_svg = file_name_without_extension + ".svg"

        output_file_path = os.path.join(output_dir, file_name_svg)
        print("Creating:", output_file_path, flush=True)

        stdin = open(file_path, "r")
        stdout = open(output_file_path, "w")
        subprocess.run(["python", "./create-svg.py"], stdin=stdin, stdout=stdout)
