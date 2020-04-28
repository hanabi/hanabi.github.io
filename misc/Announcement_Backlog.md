## Introduction

As noted in the [convention changes document](Convention_Changes.md), sometimes a change to the conventions is made but is not yet announced due to there being a backlog of things to announce. This document contains the backlog.

<br />

## The Backlog

@everyone Renamed conventions:

**Selfish Focus Inversion** (by IAMJEFF)

```
* *Occupied Focus Inversion* is renamed to *Selfish Focus Inversion*.
```

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

**Pink Positional Clues**

```
* Towards the end of the game, a player may have multiple pink cards in their hand, with one of them being playable. If the playable pink card is in between other pink cards, it can be difficult to "get" the card to play.
* In cases where a number clue would be nonsensical, it is an indication to the player with two or more pink cards of which slot to play.
* For example, in a 3-player game:
  * The pink 4 is played and all of the other 3's are played.
  * Bob's hand is completely unclued.
  * Alice clues Bob number 2, touching slot 1, slot 2, and slot 3.
  * Bob knows that since all of the 3's are already played, this might be a *Trash Chop Move*. If this is the case, slot 1 is focused, and he should discard that card, and then chop move slot 4 and slot 5.
  * However, Bob also knows that it is near the end of the game and there are no cards left to chop move, so this interpretation does not make much sense.
  * Thus, Bob knows that this must be a *Positional Clue*, and he plays his slot 2 card as the pink 5.
* *Positional Clues* are different from *Pink Choice Tempo Clues* in that they can touch brand new cards. (*Pink Choice Tempo Clues* only re-touch known pink cards.) For this reason, *Positional Clues* can only typically be done at the end of the game when the clue is not likely to be interpreted as anything else.
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
  * Alice clues yellow to Cathy, touching a yellow 1.
  * Bob knows that normally, this would be an *Unknown Trash Discharge*. But all *Discharges* are "turned off" in null variants. Instead, this must be a *Null Positional Clue*.
  * Bob knows that normally, yellow would refer to slot 4, since there are 5 slots in the hand and yellow is the 2nd rightmost color. But since Bob's slot 5 card already has a clue on it, he should skip over that card. So this must be targeting his slot 3 (e.g. his 2nd rightmost unclued slot).
  * Bob blind-plays null 1 from slot 3.
```

**Null Color Positional Clue Wraparound** (by Jeff)

```
* This convention only applies to variants with a null suit.
* *Color Positional Clues* always "wrap around" to the oldest card.
* For example, in a 3-player game of the "Null (5 Suits)" variant:
  * All the 1's are played on the stacks except for the null 1.
  * Bob hand is as follows: red 1, red 1, red 5, blue 5, green 5
  * All of Bob's 5's have a number 5 clue on them. (They were clued with a *5 Save* earlier on.)
  * Alice clues red to Cathy, touching a red 1.
  * Bob knows that normally, this would be an *Unknown Trash Discharge*. But all *Discharges* are "turned off" in null variants. Instead, this must be a *Null Positional Clue*.
  * Bob knows that if his hand was completely unclued, red would refer to slot 2, since there are 5 slots in the hand and red is the 4th rightmost color. But since Bob's slot 3, slot 4, and slot 5 card already have a clue on it, he should skip over those cards.
  * This means that blue would target slot 2 and green would target slot 1. Yellow would target slot 2 again (because of the wraparound) and red would target slot 1.
  * Bob blind-plays null 1 from slot 1.
```

@everyone EDIT THIS

**Out-of-Position Unknown Trash Discharge** (by Jeff)

```
* Normally, players are only allowed to perform a *Discharge* on the very next player (similar to a *Bluff*).
* However, if a *Unknown Trash Discharge* is performed, and the very next player does not have a *Third Finesse Position*, then they cannot demonstrate to the team that the clued card is trash.
* In this situation, the *Discharge* is on the next player with a *Third Finesse Position*:
  * The player being passed over knows that the next player will blind-play, so they can either discard or give an unrelated clue.
  * After that, the next player should blind-play their card immediately to demonstrate what is going on.
* For example, in a 4-player game:
  * All of the 1's are played on the stacks.
  * Bob's has two 5's in his hand in slots 3 and 4. (They were clued with number 5 as a *5 Save* earlier on in the game.)
  * Alice clues red to Donald, touching a red 1 on his slot 1 as a *Play Clue*.
  * Bob knows that Donald will think that this red card is red 2. But if a card blind-plays from *Finesse Position*, then Donald will think that the card is red 3. Thus, this must be an *Unknown Trash Discharge*.
  * Bob does not have a *Third Finesse Position*. (He only has two unclued cards in his hand.)
  * Thus, Bob knows that this is an *Out-of-Position Unknown Trash Discharge* on Cathy.
  * Bob discards.
  * Cathy blind-plays her *Third Finesse Position* and it successfully plays as red 2.
  * Donald knows that since Cathy blind-played her *Third Finesse Position* card, this must be an *Unknown Trash Discharge* and that his red card is red 1. Donald discards the red 1.
```

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
