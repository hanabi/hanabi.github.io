#!/usr/bin/python

import glob
import os
import re
import sys

DIR = os.path.dirname(os.path.realpath(__file__))
PATTERN = re.compile(r"import.*from.*@site/(image-generator/yml.*yml)")


def main():
    used_yaml_files = set()
    for markdown_file in glob.iglob("docs/**/*.mdx", recursive=True):
        with open(markdown_file, "r", encoding="utf-8") as file:
            for line in file.readlines():
                match = PATTERN.match(line)
                if match:
                    yaml_path = match.group(1)
                    used_yaml_files.add(yaml_path)

    all_yaml_files = set()
    for yaml_file in glob.iglob("image-generator/yml/**/*.yml", recursive=True):
        yaml_path = yaml_file
        yaml_path = yaml_path.replace("\\", "/")  # Windows fix
        all_yaml_files.add(yaml_path)

    unused_yaml_files = all_yaml_files - used_yaml_files

    if unused_yaml_files:
        for yml in sorted(unused_yaml_files):
            printf("Unused YAML file:", yml)
        error("Unused YML files found.")


def printf(*args):
    print(*args, flush=True)


def error(msg: str):
    print(f"Error: {msg}", file=sys.stderr, flush=True)
    sys.exit(1)


if __name__ == "__main__":
    main()
