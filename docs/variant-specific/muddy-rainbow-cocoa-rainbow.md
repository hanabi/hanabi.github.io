---
id: muddy-rainbow-cocoa-rainbow
title: Muddy Rainbow & Cocoa Rainbow
---

These conventions apply to any variant with a muddy rainbow suit or a cocoa rainbow suit.

<br />

### Inherited Conventions

- By default, muddy rainbow cards inherit all of the rainbow conventions and all of the brown conventions.
  - With that said, some of the conventions further down on this page will overwrite some rainbow/brown conventions, so read on.
- Similarly, by default, cocoa rainbow cards inherit all of the rainbow conventions, all of the brown conventions, and all of the black conventions.

### Tempo Clues

- Similar to brown cards, if a player gives a *Tempo Clue* to a single muddy rainbow card, it is never a *Tempo Clue Chop Move*.
- This is because it is fairly valuable to get muddy rainbow cards out of the hand as soon as possible in case blocking cards are drawn.

### Muddy Rainbow Saves

- Since muddy rainbow 2 cannot be *2 Saved* and muddy rainbow 5 cannot be *5 Saved*, there needs to be a separate way to save these cards.
- Any red color clue (the left-most color) to a chop card is treated as a potential *Muddy Rainbow Save* on a muddy rainbow 2 or a muddy rainbow 5.
- Similar to brown saves, the *Always Loaded Principle* applies to muddy rainbow saves.
- In the special case of a variant where a one-of-each color is available, then the above convention does not apply and the one-of-each color should be used instead of red.

### Mud Clues

- In variants with a pink suit, the *[Pink Choice Tempo Clue](pink.md#the-pink-choice-tempo-clue)* convention is "turned on", since players often have a *Free Choice* with how they can clue pink cards. Muddy rainbow has a similar convention.
- When one or more muddy rainbow cards are retouched with a color clue, and there are no "new" cards introduced (or, if the only "new" cards introduced are trash), then extra information can be conveyed by what color is chosen. The color chosen should correspond to the slot that they should play.
- This is called a *Muddy Rainbow Choice Tempo Clue*, or just a *Mud Clue* for short.
- The slot number is calculated in roughly the same way that *[Null Color Positional Clues](null.md#color-positional-clues)* are calculated. In short, the slot number corresponds to the ordering of the colors **from right to left**. But skip the cards that are not touched by the color clue (and the known unplayable cards). Furthermore, colors always "wrap around" to the oldest card.
- For example, in a 3-player game of the "Muddy Rainbow (6 Suits)" variant:
  - All of the 2's are played on the stacks.
  - Bob has two muddy rainbow cards clued in his hand on slot 3 and slot 4. He does not know the rank of either card.
  - Alice clues red to Bob, which re-touches both muddy rainbow cards and nothing else.
  - Bob knows that this must be a *Tempo Clue* on the muddy rainbow cards, so now he must figure out which slot Alice wants him to play. To start with, Bob knows that the colors available to clue in this variant are red, yellow, green, blue, and purple.
  - Starting from the final color, a purple clue would mean to play slot 4, a blue clue would mean to play slot 3, a green clue would mean to play slot 4 (wraparound), a yellow clue would mean to play slot 3, and a red clue would mean to play slot 4 (another wraparound).
  - Bob plays his slot 4 card as a muddy rainbow 3. It successfully plays on the stacks.
- Similar to how *Tempo Clues* work with pink cards and brown cards, *Tempo Clues* on muddy rainbow cards are never *Tempo Clue Chop Moves* or *Double Tempo Clues* - they only promise the one card and that's it.
- *Muddy Rainbow Choice Tempo Clues* are only allowed to get muddy rainbow cards.
  - An exception to this rule can be made for extremely difficult variants. If the team needs to get a non-muddy card for some specific purpose (e.g. to "unlock" another player), and there was not another good way to "get" the card, then it should be clear to everyone what is happening.

### Mud Clues (Skipping Over Unplayable Cards)

- If known-unplayable cards are touched as part of a *Mud Clue*, then they should be skipped over.
- For example, in a 3-player game of the "Muddy Rainbow (6 Suits)" variant:
  - All of the 2's are played on the stacks.
  - Bob has two muddy rainbow cards clued in his hand on slot 2 and slot 4. He does not know the rank of either card. He also has a red 5 on slot 3 with a 5 clue on it.
  - Alice clues red to Bob, which re-touches both muddy rainbow cards and the red 5.
  - Bob knows that this must be a *Tempo Clue* on the muddy rainbow cards, so now he must figure out which slot Alice wants him to play. To start with, Bob knows that the colors available to clue in this variant are red, yellow, green, blue, and purple.
  - Starting from the final color, a purple clue would mean to play slot 4.
  - A blue clue would normally mean to play slot 3, but the red 5 is a known unplayable card, so Bob skips over that. Thus, a blue clue would mean to play slot 2.
  - A green clue would mean to play slot 4 (wraparound).
  - A yellow clue would mean to play slot 2 (skipping over the red 5 again).
  - A red clue would mean to play slot 4 (another wraparound).
  - Bob plays slot 4 as the muddy rainbow 3.

### Positional Clues

- Any clue that looks like one of the following is instead considered to be a *Muddy Positional Clue* (that promises the slot number of the muddy rainbow card to play):
  - *Double Play Ejection* (re-cluing a playable card)
  - *Known-Trash Ejection* (re-cluing a known-trash card)
  - *Trash Pushes* (cluing a known-trash card on chop for the first time)
  - a rank clue that has no conventional interpretation
- Note that *Trash Chop Moves* are still "turned on".
