# H-Group Conventions Editing Guidelines

## Capitalization and Formatting of Game Terms

- **Always capitalize and italicize special moves and terms:**
  - _Finesse Position_ (not "finesse position")
  - _Play Clue_ (not "play clue")
  - _Save Clue_ (not "save clue")
  - Other convention names: _Prompt_, _Finesse_, _Bluff_, _Chop Move_, _Trash Chop Move_, _Gentleman's Discard_, etc.

- **Inflected forms should also be italicized:**
  - _Finessed_ and _Finesseable_ (not "finessed" and "finesseable")
  - _Chop Moved_ (not "chop moved")
  - _Prompted_ (not "prompted")

- **Compound terms - only capitalize/italicize the convention part:**
  - "_Bluff_ target" (not "_Bluff Target_")

## Hand Descriptions

- **Use code formatting (backticks) for card lists, and use lowercase for card names in lists:**
  - "Cathy's hand is, from newest to oldest: `red 2, yellow 4, green 1, blue 3`"

## Clue Descriptions

- **Use "number X" or "color name" when describing clues:**
  - "Alice clues number 4 to Bob" (not "Alice clues 4 to Bob")
  - "Alice clues red to Bob"

## Card Notes

- **Use compact shorthand notation for card notes in written text:**
  - Use lowercase letters for colors: r (red), g (green), b (blue), y (yellow), p (purple), m (multicolor/rainbow)
  - Bob writes "r2" (not "red 2")
  - Bob writes "b3, p3" (not "blue 3, purple 3")

- **When multiple cards are possible, use commas with spaces:**
  - "r2, g2, b2" (not "rgb2")
  - "b2, b3" (not "b23")
  - In YAML `middleNote` fields, use the same format.

- **Special card note abbreviations:**
  - `cm` for _Chop Moved_ cards
  - `kt` for known trash cards
  - When using these in YAML, also set the corresponding attribute (`cm: true` or `trash: true`).

- **For conditional notes, use descriptive phrases:**
  - "r2 or r3 if red 2 f" (f = finesse)
  - "b2, b3 if blue 2 f | b3" (using pipe to show note update after another action)

## Writing Style

- **Be precise and explicit about player perspectives:**
  - Show what each player knows vs. what they assume
  - Use phrases like "From Bob's perspective" or "Bob sees that..."
  - Example: "Bob sees that Cathy will go on to misplay the blue 2 as a red 2. Thus, Bob knows that he is promised to have the red 2."

- **Use clear, step-by-step explanations:**
  - Break down complex scenarios into discrete steps
  - Show the reasoning chain for each player
  - Make implicit assumptions explicit

## Cross-References

- **Reference other sections consistently:**
  - "First, see the section on the _[Move Name]_"
  - For forward references: "For level N players, see..."
  - Always use italics for move names in references

## Lists and Bullets

- **Use dashes for bullets** (not asterisks):
  - Use `-` for main bullets
  - Use `  -` (two-space indent) for sub-bullets

- **Introduce lists with colons:**
  - "There is a 4-step process:"
  - "You are allowed to give a _Save Clue_ on these specific cards:"

- **Punctuation in bullets:**
  - No periods at end of bullets that are fragments
  - Periods at end of bullets that are complete sentences

## Section Organization

- **Standard section hierarchy when present:**
  - ## Conventions
  - ## Special Moves
  - ## General Principles
  - ## Common Mistakes
  - ## Challenge Questions (always at end)

- **Move/convention naming in headers:**
  - "### The [Move Name] ([ABBREVIATION])"

## Card Notation in Prose

- **Full card names use lowercase:**
  - "a red 2" (color then number, no hyphen)
  - In shorthand notes: "r2", "b3", "y5"
