#!/bin/bash

# Script to create a new challenge question.
# Usage: ./create-challenge-question.sh <level> "<title>"

set -euo pipefail # Exit on errors and undefined variables.

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <level> \"<title>\""
  exit 1
fi

LEVEL=$1
TITLE=$2

# Convert title to filename-friendly format (lowercase, replace spaces with hyphens, remove special chars).
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-//' | sed 's/-$//')
FULL_NAME="level-${LEVEL}-${FILENAME}"

BASE_DIR="docs/challenge-questions"
QUESTION_DIR="${BASE_DIR}/${FULL_NAME}"
MDX_FILE="${BASE_DIR}/${FULL_NAME}.mdx"

if [ -d "$QUESTION_DIR" ] || [ -f "$MDX_FILE" ]; then
  echo "Error: Files already exist for this question"
  exit 1
fi

# Create question page, and directories with question and answer YML files.
mkdir -p "$QUESTION_DIR"

YML_TEMPLATE="stacks:
  - r: 0
  - y: 0
  - g: 0
  - b: 0
  - p: 0
players:
  - clueGiver: true
    cards:
      - type: x
      - type: x
      - type: x
      - type: x
      - type: x
  - cards:
      - type: x
      - type: x
      - type: x
      - type: x
      - type: x
  - cards:
      - type: x
      - type: x
      - type: x
      - type: x
      - type: x
"

echo "$YML_TEMPLATE" > "${QUESTION_DIR}/question.yml"
echo "$YML_TEMPLATE" > "${QUESTION_DIR}/answer.yml"
cat > "$MDX_FILE" << EOF
---
title: ${TITLE}
---

import ChallengeQuestionProgress from "@site/src/challengeQuestions.tsx";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Question from "./${FULL_NAME}/question.yml";
import Answer from "./${FULL_NAME}/answer.yml";

<ChallengeQuestionProgress level={${LEVEL}} id="${FULL_NAME}" />

<Tabs
  queryString="tab"
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- TODO: Add question text here.

<Question />

</TabItem>
<TabItem value="solution">

- TODO: Add solution text here.

<Answer />

</TabItem>
</Tabs>
EOF

# Update sidebars.ts.
SIDEBAR_FILE="sidebars.ts"
LEVEL_INDEX="docs/challenge-questions/level-${LEVEL}.mdx"
LEVEL_INDEX_CREATED=false

if grep -q "\"Level ${LEVEL}\":" "$SIDEBAR_FILE"; then
  # Level section exists, add the question to it.
  sed -i "/\"Level ${LEVEL}\":/,/^[[:space:]]*\],/{
      /^[[:space:]]*\],/i\\            \"challenge-questions/${FULL_NAME}\",
    }" "$SIDEBAR_FILE"
else
  # Level section doesn't exist, need to create it.
  # First, check if the level index page exists and create it if needed.
  if [ ! -f "$LEVEL_INDEX" ]; then
    LEVEL_INDEX_CREATED=true
    cat > "$LEVEL_INDEX" << EOF
---
title: Level ${LEVEL} Challenge Questions
---

import ChallengeQuestionProgress, {
  ChallengeQuestionToC,
} from "@site/src/challengeQuestions.tsx";

<ChallengeQuestionProgress level={${LEVEL}} id="intro" />

These questions are for [level ${LEVEL}](../level-${LEVEL}.mdx) strategies.

<ChallengeQuestionToC level={${LEVEL}} />
EOF
    echo "Created level index page: ${LEVEL_INDEX}"
  fi

  # Find the right place to insert the new level section.
  # Get all existing level numbers in the Challenge Questions section and
  # find the first level number that's greater than our new level.
  EXISTING_LEVELS=$(grep -oP '"Level \K\d+(?=":)' "$SIDEBAR_FILE" | sort -n)
  NEXT_LEVEL=""
  for existing in $EXISTING_LEVELS; do
    if [ "$existing" -gt "$LEVEL" ]; then
      NEXT_LEVEL=$existing
      break
    fi
  done

  # Use sed with multi-line pattern to insert in the right place.
  if [ -z "$NEXT_LEVEL" ]; then
    # No higher level found, insert before the closing of Challenge Questions section.
    # Match exactly 6 spaces to find the Challenge Questions closing bracket.
    sed -i "/\"Challenge Questions\":/,/^      \],/{
          /^      \],/{
            i\\
        {\\
          \\\"Level ${LEVEL}\\\": [\\
            \\\"challenge-questions/level-${LEVEL}\\\",\\
            \\\"challenge-questions/${FULL_NAME}\\\",\\
          ],\\
        },
          }
        }" "$SIDEBAR_FILE"
  else
    # Insert before the next higher level.
    # We need to insert before the opening brace that precedes "Level X":
    # Use a multi-line pattern to match the brace followed by "Level X" on next line.
    sed -i "/^[[:space:]]*{[[:space:]]*$/{
          N
          /\\n.*\"Level ${NEXT_LEVEL}\":/{
            i\\
        {\\
          \\\"Level ${LEVEL}\\\": [\\
            \\\"challenge-questions/level-${LEVEL}\\\",\\
            \\\"challenge-questions/${FULL_NAME}\\\",\\
          ],\\
        },
            P
            D
          }
          P
          D
        }" "$SIDEBAR_FILE"
  fi
fi

# If we created a new level index, add a link to it from the main level doc.
if [ "$LEVEL_INDEX_CREATED" = true ]; then
  LEVEL_DOC="docs/level-${LEVEL}.mdx"
  if [ -f "$LEVEL_DOC" ]; then
    cat >> "$LEVEL_DOC" << EOF

## Challenge Questions

If you are new to level ${LEVEL}, see if you can complete [these challenge questions](challenge-questions/level-${LEVEL}.mdx).
EOF
  fi
fi

echo ""
echo "Created challenge question ${QUESTION_DIR}:"
if [ "$LEVEL_INDEX_CREATED" = true ]; then
  echo "  - Level index created: ${LEVEL_INDEX}"
  echo "  - Updated ${LEVEL_DOC} with challenge questions link"
fi
echo "  - Updated: ${SIDEBAR_FILE}"
echo ""
echo "Next steps:"
echo "  1. Edit ${MDX_FILE} to add question and solution text"
echo "  2. Edit ${QUESTION_DIR}/question.yml with the question game state"
echo "  3. Edit ${QUESTION_DIR}/answer.yml with the answer game state"
