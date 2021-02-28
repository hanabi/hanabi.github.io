#!/bin/bash

set -e # Exit on any errors

# We set to quiet to output only warnings and errors
# We set to frail to exit with 1 on warnings (for CI)
npx remark --quiet --frail docs misc
