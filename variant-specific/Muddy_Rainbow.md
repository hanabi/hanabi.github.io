# Specific Conventions for Muddy Rainbow & Cocoa Rainbow

These conventions apply to any variant with a muddy rainbow suit or a cocoa rainbow suit.

<br />

### Muddy Rainbow Saves

* Since muddy rainbow 2 cannot be *2 Saved* and and muddy rainbow 5 cannot be *5 Saved*, there needs to be a separate way to save these cards.
* Any red color clue (the left-most color) to a chop card is treated as a potential *Muddy Rainbow Save* on a muddy rainbow 2 or a muddy rainbow 5.

### Muddy Rainbow Choice Tempo Clues

* In variants with a pink suit, the *[Pink Choice Tempo Clue](Pink.md#pink-choice-tempo-clue)* convention is "turned on", since players often have a *Free Choice* with how they can clue pink cards. Muddy rainbow has a similar convention.
* When one or more muddy rainbow cards are retouched with a color clue, and there are no "new" cards introduced (or, if the only "new" cards introduced are trash), then extra information can be conveyed by what color is chosen. The color chosen should correspond to the slot that they should play.
* The slot number is calculated in roughly the same way that *[Null Color Positional Clues](Null.md#color-positional-clues)* are calculated. In short, the slot number corresponds to the ordering of the colors **from right to left**. But skip the cards that are not touched by the color clue (and the known unplayable cards). Furthermore, colors always "wrap around" to the oldest card.
* For example, in a 3-player game of the "Muddy Rainbow (6 Suits)" variant:
  * All of the 2's are played on the stacks.
  * Bob has two muddy rainbow cards clued in his hand on slot 3 and slot 4. He does not know the rank of either card.
  * Alice clues red to Bob, which re-touches both muddy rainbow cards and nothing else.
  * Bob knows that the colors available to clue in this variant are red, yellow, green, blue, and purple.
  * Starting from the final color, a purple clue would mean to play slot 4, a blue clue would mean to play slot 3, a green clue would mean to play slot 4 (wraparound), a yellow clue would mean to play slot 3, and a red clue would mean to play slot 4 (another wraparound).
  * Bob plays his slot 4 card as a muddy rainbow 3. It successfully plays on the stacks.
* Similar to how *Tempo Clues* work with pink cards and brown card, *Tempo Clues* on muddy rainbow cards are never *Tempo Clue Chop Moves* or *Double Tempo Clues* - they only promise the one card and that's it.
* *Muddy Rainbow Choice Tempo Clues* are only allowed to get muddy rainbow cards.
  * An exception to this rule can be made for extremely difficult variants. If the team needs to get a non-muddy card for some specific purpose (e.g. to "unlock" another player), and there was not another good way to "get" the card, then it should be clear to everyone what is happening.

### Positional Clues

* Any clue that looks like one of the following is instead considered to be a *Muddy Positional Clue* (that promises the slot number of the muddy rainbow card to play):
  * *Double Play Ejection* (re-cluing a playable card)
  * *Known Trash Ejection* (re-cluing a known trash card)
  * *Trash Pushes* (cluing a known trash card on chop for the first time)
  * a rank clue that has no conventional interpretation
* Note that *Trash Chop Moves* are still "turned on".
