## Introduction

As noted in the [convention changes document](Convention_Changes.md), sometimes a change to the conventions is made but is not yet announced due to there being a backlog of things to announce. This document contains the backlog.

<br />

## The Backlog (General Conventions)

n/a

<br />

## The Backlog (Variant-Specific Conventions)

@everyone New variant-specific conventions:

**Muddy Rainbow Choice Tempo Clues** (by Jeff)

```
- This convention only applies to variants with a muddy rainbow suit.
- In variants with a pink suit, the *Pink Choice Tempo Clue* convention is "turned on", since players often have a *Free Choice* with how they can clue pink cards. Muddy rainbow has a similar convention.
- When one or more muddy rainbow cards are retouched with a color clue, and there are no "new" cards introduced (or, if the only "new" cards introduced are trash), then extra information can be conveyed by what color is chosen. The color chosen should correspond to the slot that they should play.
- The slot number is calculated in roughly the same way that *Null Color Positional Clues* are calculated. In short, the slot number corresponds to the ordering of the colors **from right to left**. But skip the cards that are not touched by the color clue. Furthermore, colors always "wrap around" to the oldest card.
- For example, in a 3-player game of the "Muddy Rainbow (6 Suits)" variant:
  - All of the 2's are played on the stacks.
  - Bob has two muddy rainbow cards clued in his hand on slot 3 and slot 4. He does not know the rank of either card.
  - Alice clues red to Bob, which re-touches both muddy rainbow cards and nothing else.
  - Bob knows that this must be a *Tempo Clue* on the muddy rainbow cards, so now he must figure out which slot Alice wants him to play. To start with, Bob knows that the colors available to clue in this variant are red, yellow, green, blue, and purple.
  - Starting from the final color, a purple clue would mean to play slot 4, a blue clue would mean to play slot 3, a green clue would mean to play slot 4 (wraparound), a yellow clue would mean to play slot 3, and a red clue would mean to play slot 4 (another wraparound).
  - Bob plays his slot 4 card as a muddy rainbow 3. It successfully plays on the stacks.
- Similar to how *Tempo Clues* work with pink cards and brown card, *Tempo Clues* on muddy rainbow cards are never *Tempo Clue Chop Moves* or *Double Tempo Clues* - they only promise the one card and that's it.
- *Muddy Rainbow Choice Tempo Clues* are only allowed to get muddy rainbow cards.
  - An exception to this rule can be made for extremely difficult variants. If the team needs to get a non-muddy card for some specific purpose (e.g. to "unlock" another player), and there was not another good way to "get" the card, then it should be clear to everyone what is happening.
```

**Muddy Rainbow Choice Tempo Clues (Skipping Over Unplayable Cards)** (by Jeff)

```
- If known-unplayable cards are touched as part of a *Muddy Rainbow Choice Tempo Clue*, then they should be skipped over.
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
```

**Bubblegum Wraparound**

```
- This convention applies to any variant with a pink suit.
- When players violate *Pink Promise* on an unplayable pink card, it usually indicates a *Bubblegum Prompt* or a *Bubblegum Finesse* (with the rank corresponding to the slot number to play).
- In 4-player and 5-player games, there are only 4 cards in the hand. If a player does a *Bubblegum Finesse* with a 5, then that would be nonsensical, since there is no slot 5.
- Similarly, in a 6-player game, there are only 3 cards in the hand. If a player does a *Bubblegum Finesse* with a 4, then that would be nonsensical, since there is no slot 4.
- In this situation, it should "wraparound" to slot 1, communicating that the first slot is playable.
- This kind of thing is useful in some edge-case scenarios (e.g. helping satisfy *Good Touch Principle* in variants with a light pink suit).
```

**Bubblegum Slides**

```
- This convention applies to any variant with a pink suit.
- If a *Bubblegum Prompt* or a *Bubblegum Finesse* is telling a player to play a card in a slot that has negative pink, then that is nonsensical.
- In this situation, if there is no other possible interpretation for the clue other than a *Bubblegum Prompt* or a *Bubblegum Finesse*, and it is unlikely for the cluer to be making a mistake, then the target slot should "slide" to the right.
- If the slot immediately to the right is also impossible to be a pink card, then it should continue to slide right until it finds a pink card, wrapping around to the other side of the hand if necessary.
```

**The Slot Finesse** (by Jeff)

```
- Normally, if a *Positional Clue* is used to get a non-null card, then the blind-playing player would continue blind-playing cards as a *Positional Layered Finesse*. For that reason, it is normally impossible to *just* get a non-null card with a *Positional Clue*.
- As a rare exception, players can perform a *Finesse* using a *Positional Clue* that has the blind-play "match" the card that was clued. If they match, then **no null cards are promised**.
- This is called a *Slot Finesse* to distinguish it from a *Positional Finesse*. In other words, *Positional Finesses* use *Positional Clues* to get null cards to blind-play into other null cards. And *Slot Finesses* use *Positional Clues* to get non-null cards to play into other non-null cards.
- For example, in a 3-player game of the "Null (6 Suits)" variant:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 2 to Cathy, touching a red 2 as a *Play Clue*.
  - Bob sees that Cathy has no other red cards in her hand, so Alice had a *Free Choice* between cluing red and cluing number 2. If Bob really had a red 1 on his *Finesse Position*, then Alice would clue red. Thus, this must be a *Rank Choice Positional Clue*.
  - Bob blind-plays his slot 2 card as a null 1. Instead, it is the red 1 and it successfully plays. Bob now knows that this must be a *Positional Layered Finesse*, so Bob marks his slot 3 card as the null 1.
  - Cathy knows that since Bob played slot 2 instead of slot 1, this must be a *Positional Clue*. However, Cathy also knows that you are only supposed to use *Positional Clues* to get null cards. So this must be a *Positional Layered Finesse* on Bob.
  - However, from Cathy's perspective, Bob has no null cards, so Alice must have been intending something else. If Cathy does nothing, then Bob will go on to misplay his slot 3 card as a null 1. Cathy knows that since a red 1 matches a number 2 clue, then this must be a *Slot Finesse*.
  - Cathy plays her 2 as a red 2 and it successfully plays.
  - Bob knows that cards clued as part of *Positional Clues* are not promised to be playable, so it was very strange that Cathy played her 2. This must mean that he does not have the null 1 after all and that Alice's clue was simply a *Slot Finesse*.
```

**The Slot Double Bluff** (by Jeff)

```
- Normally, if a *Positional Clue* is used to get a non-null card, then the blind-playing player would continue blind-playing cards as a *Positional Layered Finesse*. For that reason, it is normally impossible to *just* get a non-null card with a *Positional Clue*.
- One way to get the blind-playing player to stop searching for a null card is to perform a *Slot Finesse* (see above).
- One other way to get the blind-playing player to stop searching for a null card is to force the next player after that to blind-play their *Finesse Position* card (in the exact same way as a *Pestilent Double Bluff*). After seeing the second blind-play, the first player will know that it is impossible for them to have a layered null card.
- For example, in a 4-player game of the "Null (6 Suits)" variant:
  - All the 1's are played on the stacks.
  - Alice clues number 4 to Donald, touching a red 4 as a *Play Clue*.
  - Bob does not see anyone else have any red cards. And Bob knows that *Double Self-Finesses* are turned off in null variants, so this must be a *Positional Clue*.
  - Slot 4 is Bob's chop, so normally Bob would treat this as a *Positional Save Clue* on a null 5. However, Bob currently has a globally-known playable blue 2 in his hand on slot 1 (e.g. he is *Loaded*). That means that this is a *Loaded Play Clue* and that he has a playable null 2 on his slot 4.
  - Bob blind-plays slot 4 as null 2. It is instead a green 2 and it successfully plays. Bob now knows that this must be a *Positional Inverted Layered Finesse*, so Bob marks his slot 3 card as the null 2.
  - Cathy sees that since Bob did not play a null card, Bob will assume an *Positional Inverted Layered Finesse* and will go on to play his slot 3 on his next turn. However, Bob does not have any null cards in his hand. Alice must have intended for something else to happen.
  - Cathy knows that this must be a *Slot Double Bluff*, so she blind-plays her *Finesse Position* as any playable card. It is yellow 2 and it successfully plays.
  - Donald knows that from the sequence of events that Alice performed a *Slot Double Bluff*, so the 4 clue is to be treated as a *Positional Clue* (e.g. the 4 in his hand might be trash).
  - Bob sees that since Cathy blind-played her *Finesse Position* card for "no reason", he must not actually have the null 2 in his hand after all. Bob can reason that Alice performed a *Slot Double Bluff*.
```

**The Turnabout Ejection (For 1's and 5's)** (by pianoblook)

```
- If a player uses *Pink Promise* to falsely indicate a pink 1 as a pink 5 **or** a pink 5 as a pink 1, this is a dangerous lie that must be immediately resolved.
- In this situation, the next player must immediately play their *Second Finesse Position* to prove what happened. This is called a *Turnabout Ejection*.
- After the *Ejection*, the player who received the clue will know that the focused card's identity has been "reversed".
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues number 5 to Cathy, which touches a pink 1 on Cathy's chop.
  - Bob knows that Alice is violating *Pink Promise*. This must be a *Turnabout Ejection*.
  - Bob blind-plays his *Second Finesse Position* (slot 2). It is a blue 1 and it successfully plays on the stacks.
  - At first, Cathy thought that the number 5 clue from Alice was a *5 Save*.
  - After Bob blind-plays, Cathy knows that Alice did not perform a *5 Save* and instead did something else.
  - Cathy knows that Alice did not perform a *Bubblegum Bluff*, because Bob would have played his slot 5 card instead of his slot 2 card.
  - Thus, Cathy knows that this must be a *Turnabout Ejection*. She marks her slot 5 card as a pink 1.
- If a *Turnabout Ejection* occurs from a number 1 clue that also touches other 1s, the non-focused cards should still be assumed to be 1s (using the *1's Assumption* convention).
```
