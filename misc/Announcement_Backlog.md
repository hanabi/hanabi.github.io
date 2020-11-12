## Introduction

As noted in the [convention changes document](Convention_Changes.md), sometimes a change to the conventions is made but is not yet announced due to there being a backlog of things to announce. This document contains the backlog.

<br />

## The Backlog (General Conventions)

@everyone Renamed principles:

- *Good Lie Principle* has been renamed to *Lie Principle*:

```
### 8. Lie Principle

- Normally, players try to make their clues as clear as possible and convey the exact identity of one or more cards.
- Rarely, players can use clues to trick other players into thinking that they have cards that they really don't.
- If this untruth **resolves immediately** (e.g. the very next turn), it is called a *Fib*. For intermediate and advanced players, *Fibs* are legal and expected.
- If this untruth does **not resolve immediately**, it is called a *Lie*. *Lies* are illegal. Players should **never** assume that they are *Lied* to.
```

@everyone Moved conventions:

```
- *5 Number Discharge* has been moved to level 15.
- Level 17 has been moved to Level 19.
- The *Echo Scream Discard Chop Move* and some other emergency discards have been moved to level 17.
- The *Good Touch Bluff* and the *Pestilent Double Bluff* have been moved to level 18.
```

@everyone New conventions:

**Self Color Double Bluff (SCDB)**

```
- Just like normal bluffs, *Self Color Bluffs* are done by "filling in" a card that is *one-away-from-playable* (or a legal *Bluff* target).
- However, players can also perform a *Self Color Double Bluff* by "filling in" a card that is *two-or-more-away-from-playable* (and not a legal *Bluff* target).
- For example, in a 3-player game (similar to the previous example):
  - Red 2 is played on the stacks.
  - Alice clues red to Bob, which touches a brand new red card on his slot 2.
  - This must be a *Play Clue* on the red card, since Alice is not in a stalling situation. (If Alice was in a stalling situation, then she would be allowed to give a "fill-in" clue without anything special happening.)
  - Bob has a negative 3 clue on his red card, so he knows it cannot possibly be a red 3 (the next playable red card).
  - Bob does not see any red cards in other player's hands, so it cannot be a *Prompt* or a *Reverse Finesse*.
  - Bob cannot possibly have the red 3 in his *Finesse Position*, because that card now has negative red.
  - Thus, Bob knows that this must be a *Self Color Bluff*, so he blind-plays his *Finesse Position* card as a *Known Bluff* on any playable non-red card. It is a blue 1 and it successfully plays on the stacks.
  - Bob marks his red card as a red 4 (since that is the red card that is *one-away-from-playable*).
  - Cathy sees that Alice did a *Self Color Bluff* on Bob. However, Cathy sees that the red card in Bob's hand is the red 5, which is *two-away-from-playable*. That means that Alice means to perform a *Self Color Double Bluff* (instead of a single *Bluff*).
  - Cathy blind-plays her *Finesse Position* card as a *Known Bluff*. It is a blue 2 and it successfully plays on the stacks.
  - Bob is surprised by Cathy's blind-play and realizes that it must be related to the clue that Alice gave. If Bob had a red 4 in his hand, then Cathy would not have gone on to blind-play anything. So, Bob erases his note of "red 4" and instead writes "red 5", because that is the only red card that is *two-away-from-playable*, and is the only card that would make Cathy blind-play.
- More examples of a *Self Color Double Bluff* can be found [here](examples/Self_Color_Double_Bluff.md).
```

**The Safety Charm (Declined 5 Pull)** (by pianoblook)

```
- This convention only applies in the *Low Score Phase*.
- If a card could be freely gotten by initiating a *5 Pull*, it would be very strange if the *5 Pull* was declined and the card was directly touched as a 1-for-1.
- When this occurs, this player is trying to communicate something deeper - a *Charm* on the very next player.
- Normally, when an card is blind-played after an innocent-looking *Play Clue*, the clue receiver knows to not play that card anymore. In this situation, since the *Fourth Finesse Position* card was played instead of the *First*, *Second*, or *Third*, the clue receiver will know that their card is still playable **and** that the unclued card directly to its left must be a 5.
- This untouched 5 is now globally known; everyone on the team should treat it as a *Chop Moved* card.
- For example, in a 4-player game:
  - Red 1 is played on the stacks.
  - It is the *Early Game* and the *Low Score Phase*.
  - Alice clues red to Cathy, touching a new red 2 on slot 2.
  - Cathy hand is, from newest to oldest: `blue 5, red 2, blue 3, blue 2`
  - Bob sees that Alice could have cleanly *5 Pulled* Cathy's red 2. (It is globally known that Alice had another *Play Clue* to give, so a number 5 clue would not have been interpreted as a *5 Stall*.)
  - Bob knows that this signals a blind-play:
    - A *First Finesse Position* blind-play would look like a *Bluff* on a red 2 or a red 3, which would be a lie.
    - A *Second Finesse Position* blind-play would look like a *5 Color Ejection* on a red 5, which would be a lie.
    - A *Third Finesse Position* blind-play would look like an *Unknown Trash Discharge* on a red 1, which would be a lie.
  - Thus, Bob knows that this must be a *Safety Charm*. He blind-plays his *Fourth Finesse Position*. It is a blue 1 and it successfully plays.
  - Cathy knows that she must have the red 2. She also knows that her slot 1 card is a 5 that could have been used for a *5 Pull*. Cathy marks the 5 as being *Chop Moved* for later.
- More examples of a *Safety Charm* can be found [here](https://github.com/Zamiell/hanabi-conventions/blob/master/examples/Safety_Charm.md).
```

<br />

## The Backlog (Variant-Specific Conventions)

@everyone Variant-specific conventions:

**Advanced Conventions for Variant with No Positive Clues**

```
- Various conventions for Duck have been deleted / reformulated.
- We now have a framework that is used for any variant with no positive clues (e.g. Extremely Ambiguous, Duck, etc.).
- For more information, please see: https://github.com/Zamiell/hanabi-conventions/blob/master/variant-specific/No_Positive_Clues.md
```

**Null Color Positional Clue Skips** (by Jeff)

```
- This convention only applies to variants with a null suit.
- When determining the slot number of a *Null Positional Clue* that uses a color, you are now supposed to skip over any card with one or more positive clues on it. (But do not skip over the card if it is considered "untouched" from a *Positional Clue*.)
- For example, in a 3-player game of the "Null (5 Suits)" variant:
  - All the 1's are played on the stacks except for the null 1.
  - Bob hand is as follows, from newest to oldest: `red 1, red 1, null 1, blue 1, blue 5`
  - Bob's blue 5 has a number 5 clue on it. (It was clued with a *5 Save* earlier on.)
  - Alice clues green to Cathy, touching a green 1.
  - Bob knows that normally, this would be an *Unknown Trash Discharge*. But all *Discharges* are "turned off" in null variants. Instead, this must be a *Null Positional Clue*.
  - Bob knows that if his hand was completely unclued, green would refer to slot 4, since there are 5 slots in the hand and green is the 2nd rightmost color. But since Bob's slot 5 card already has a clue on it, he should skip over that card. So this must be targeting his slot 3 (e.g. his 2nd rightmost unclued slot).
  - Bob blind-plays null 1 from slot 3.
```

**Null Color Positional Clue Wraparound** (by Jeff)

```
- This convention only applies to variants with a null suit.
- *Color Positional Clues* always "wrap around" to the oldest card.
- For example, in a 3-player game of the "Null (5 Suits)" variant:
  - All the 1's are played on the stacks except for the null 1.
  - Bob hand is as follows, from newest to oldest: `null 1, red 1, red 5, blue 5, green 5`
  - All of Bob's 5's have a number 5 clue on them. (They were clued with a *5 Save* earlier on.)
  - Alice clues red to Cathy, touching a red 1.
  - Bob knows that normally, this would be an *Unknown Trash Discharge*. But all *Discharges* are "turned off" in null variants. Instead, this must be a *Null Positional Clue*.
  - Bob knows that if his hand was completely unclued, red would refer to slot 2, since there are 5 slots in the hand and red is the 4th rightmost color. But since Bob's slot 3, slot 4, and slot 5 card already have a clue on it, he should skip over those cards.
  - This means that blue would target slot 2 and green would target slot 1. Yellow would target slot 2 again (because of the wraparound) and red would target slot 1.
  - Bob blind-plays null 1 from slot 1.
```

**The Scream Blind-Play (Blind-Playing Chop)** (for null)

```
- This convention only applies to variants with a null suit.
- Sometimes, a player will have two critical cards in a row on chop. Usually, the team will work together to clue both of the cards. However, in variants with a null suit, it is sometimes difficult to do this.
- In cases where one player needs to save two cards at once, they can perform a *Scream Blind-Play* by blind-playing their chop card. This is similar to a *Scream Discard*, except it *Chop Moves* two cards instead of one.
- Just like the *Scream Discard*, the *Scream Blind-Play* is only to be used as a last resort. This should be obvious, since it uses up a strike.
```

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

**Order Chop Move Change**

```
- This convention applies to the "Dual-Color (6 Suits)" variant.
- Normally, *Order Chop Moves*, are "turned off" when two different 1's have different positive clues on them.
  - For example, Order Chop Moves would be "turned off" in the situation where Alice has one 1 has a positive 1 clue on it, and Alice has another 1 with a positive 1 clue on it and a positive red clue on it.
- In the "Dual Color (6 Suit)" variant, *Order Chop Moves* are never turned off when there are two different 1's, regardless of different positive or negative color clues on them.
- The only exception is when the exact identity of the 1 is known (e.g. from being completely "filled in"). In this situation, *Order Chop Moves* are turned off.
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
