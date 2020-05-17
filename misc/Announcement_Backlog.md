## Introduction

As noted in the [convention changes document](Convention_Changes.md), sometimes a change to the conventions is made but is not yet announced due to there being a backlog of things to announce. This document contains the backlog.

<br />

## The Backlog

@everyone Variant-specific conventions:

**Pink Tempo Clues**

```
* This convention only applies to variants with a pink suit.
* If a player gives a *Tempo Clue* to a pink card, it is never a *Tempo Clue Chop Move*, even if it only gets one card played. (This is the same convention as with brown cards.)
* This is because it is fairly valuable to get pink cards out of the hand as soon as possible in case blocking cards are drawn.
```

**Brown Tempo Clues**

```
* This convention only applies to variants with a brown suit.
* If a player gives a *Tempo Clue* to a brown card, it is never a *Tempo Clue Chop Move*, even if it only gets one card played.
* This is because it is fairly valuable to get brown cards out of the hand as soon as possible in case blocking cards are drawn.
```

**Muddy Rainbow Saves**

```
* This convention applies to variants with a muddy rainbow suit or a cocoa rainbow suit.
* Since muddy rainbow 2 cannot be *2 Saved* and and muddy rainbow 5 cannot be *5 Saved*, there needs to be a separate way to save these cards.
* Any red color clue (the left-most color) to a chop card is treated as a potential *Muddy Rainbow Save* on a muddy rainbow 2 or a muddy rainbow 5.
```

**Muddy Rainbow Inversion**

```
* This convention applies to variants with a muddy rainbow suit or a cocoa rainbow suit.
* Muddy rainbow cards are like brown cards. This means that *Brown Inversion* also applies to muddy rainbow cards.
* This means that when multiple muddy rainbow cards are re-clued with **any** color clue, it only means to play the right-most one and nothing else.
```

**Muddy Rainbow Assumption**

```
* This convention only applies to variants with both a rainbow suit and a muddy rainbow suit.
* If players get a *Tempo Clue* on two or more cards that could be either rainbow cards or muddy rainbow cards, this puts them in a conundrum:
  * If they are rainbow cards, then they should play the left-most touched card as a normal *Tempo Clue*.
  * If they are muddy rainbow cards, then they should play the right-most touched card as an *Inverted Tempo Clue* (because *Brown Inversion* applies to muddy rainbow cards).
* In this situation, players always assume that they are muddy rainbow cards, and play the right-most card.
```

**The Bubblegum Bluff** (by Stephen)

```
* Similar to a *Bubblegum Finesse*, it is also possible to perform a *Bubblegum Bluff*.
* For example, in a 3-player game:
  * It is the first turn and nothing is played on the stacks.
  * Alice clues number 3 to Cathy, touching a pink 2 on slot 5.
  * Bob knows that Alice is violating *Pink Promise*. This must mean that he is supposed to play his slot 3 card.
  * Bob blind-plays slot 3 and it is a red 1.
  * Cathy knows that if this was a *3 Bluff*, then Bob would have played his *Finesse Position*. So it cannot be a *3 Bluff*.
  * Thus, Cathy knows that this must be a *Bubblegum* clue. Since blue 3 is not a pink card and Alice was in *Bluff Seat* for Bob, this must be a *Bubblegum Bluff*.
  * Cathy marks her slot 5 card as the one-away-from-playable pink card, the pink 2.
* *Bubblegum Bluffs* can only be performed on non-pink cards; otherwise, it will look like a *Double Finesse* with one part *Bubblegum Finesse* and one part normal *Finesse*.
* Note that it is impossible to *3 Bluff* and *Bubblegum Bluff* at the same time.
```

**Reverse Finesse Restriction** (by Florrat)

```
* This convention only applies in a Cow & Pig variant.
* It is illegal to perform a *Reverse Finesse* with a rank clue on the first turn. (This makes things more clear for players when they are given a *Save Clue* and there are some playable cards on *Finesse Position* to get.)
```

@everyone Variant-specific conventions:

**Dark Omni & Gray Pink Pseudo Saves**

```
* This convention only applies in variants with a Dark Omni or Gray Pink suit .
* Dark Omni or Gray Pink cards on chop should be saved with number 5 clue. *Pink Promise* does not apply in this variant.
```

**Dark Omni & Gray Pink Pseudo-Rank Saves**

```
* This convention only applies in variants with a Dark Omni or Gray Pink suit.
* In situations where there are critical cards behind Dark Omni or Gray Pink cards, you are also allowed to *Fake Save* the cards with any number (either 2, 3, or 4). (Again, *Pink Promise* does not apply to this variant.)
```

**Null Color Positional Clue Skips** (by Jeff)

```
* This convention only applies to variants with a null suit.
* When determining the slot number of a *Null Positional Clue* that uses a color, you are now supposed to skip over any card with one or more positive clues on it. (But do not skip over the card if it is considered "untouched" from a *Positional Clue*.)
* For example, in a 3-player game of the "Null (5 Suits)" variant:
  * All the 1's are played on the stacks except for the null 1.
  * Bob hand is as follows: red 1, red 1, null 1, blue 1, blue 5
  * Bob's blue 5 has a number 5 clue on it. (It was clued with a *5 Save* earlier on.)
  * Alice clues green to Cathy, touching a green 1.
  * Bob knows that normally, this would be an *Unknown Trash Discharge*. But all *Discharges* are "turned off" in null variants. Instead, this must be a *Null Positional Clue*.
  * Bob knows that if his hand was completely unclued, green would refer to slot 4, since there are 5 slots in the hand and green is the 2nd rightmost color. But since Bob's slot 5 card already has a clue on it, he should skip over that card. So this must be targeting his slot 3 (e.g. his 2nd rightmost unclued slot).
  * Bob blind-plays null 1 from slot 3.
```

**Null Color Positional Clue Wraparound** (by Jeff)

```
* This convention only applies to variants with a null suit.
* *Color Positional Clues* always "wrap around" to the oldest card.
* For example, in a 3-player game of the "Null (5 Suits)" variant:
  * All the 1's are played on the stacks except for the null 1.
  * Bob hand is as follows: null 1, red 1, red 5, blue 5, green 5
  * All of Bob's 5's have a number 5 clue on them. (They were clued with a *5 Save* earlier on.)
  * Alice clues red to Cathy, touching a red 1.
  * Bob knows that normally, this would be an *Unknown Trash Discharge*. But all *Discharges* are "turned off" in null variants. Instead, this must be a *Null Positional Clue*.
  * Bob knows that if his hand was completely unclued, red would refer to slot 2, since there are 5 slots in the hand and red is the 4th rightmost color. But since Bob's slot 3, slot 4, and slot 5 card already have a clue on it, he should skip over those cards.
  * This means that blue would target slot 2 and green would target slot 1. Yellow would target slot 2 again (because of the wraparound) and red would target slot 1.
  * Bob blind-plays null 1 from slot 1.
```

## 2-Player Backlog

@everyone New 2-player conventions:

**Self-Bluffs with Color Clues** (by Jeff)

```
* In non-2-player games, *Self-Bluffs* with color clues are [explicitly illegal](../Reference.md#self-bluffs-with-color-clues-illegal). However, in 2-player games, they are allowed.
* In other words, if a color clue does not touch a brand-new card and the player who receives the clue knows that the cards touched are not playable, then they know it is a signal to blind-play their *Finesse Position*.
* Note that you are also allowed to perform a *Self-Bluff* by touching a *Chop Moved* card.
```

**The Delayed Bluff** (by Jeff)

```
* In non-2-player games, *Delayed Bluffs* are explicitly illegal, since they violate [*Good Lie Principle*](../Reference.md#8-good-lie-principle). However, in 2-player games, they are allowed.
* Note that this convention also applies to *Double Bluffs*. For example, if cluing a 4 at the beginning of the game causes two 1's to blind-play, then the blind-playing player is not promised to have any more playable cards.
```

**The Dark Chop Move (by Jeff)**

```
* This convention only applies to variants with a one-of-each suit where *One-Away Saves* are turned off.
* Normally, we are only allowed to save black cards on chop. So, if a black clue is performed on a black card that is not on chop, and it is not a stalling situation, then it will normally look like a *Play Clue* on that black card.
* However, if the black card is one-away from chop, and there is context to know that the card is not playable, then the clue is not a *Play Clue* at all. Instead, it is understood that the clue is a *Dark Chop Move*, and the player should *Chop Move* in a manner similar to the *5's Chop Move*.
```

**4 Bluffs**

```
* In non-2-player games, you are not allowed to use a 4 to perform a *Bluff*. (*Bluffs* must be on one-away-from-playable cards or on 3's.)
* In 2-player games, you are allowed to perform a *Bluff* by using a 4.
```
