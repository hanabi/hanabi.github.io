# Specific Conventions for Null

These conventions apply to any variant with a null (touched by no clues) suit.

<br />

### Hard Variant

- Any variant with a null suit is treated as a *Hard Variant*, meaning that *Loaded Play Clues* are "turned on" and so forth.

<br />

### Positional Clues

#### 1) What is a *Positional Clue*?

- *Positional Clues* correspond to a slot number.
- A **number** positional clue corresponds directly to the slot number.
  - For example, a number 3 clue equals slot 3.
  - In a 4-player, 5-player game, or 6-player game a number 5 clue equals *Chop Move* (since there is no slot 5 card).
- A **color** positional clue corresponds to a slot number that is based on the order of the stacks. Stacks correspond to the slot numbers **from right to left**.
  - For example, in a 3-player game of the *Null (6 Suit)* variant, there are 5 color clues and 5 slots in the hand. Thus, a purple clue equals slot 5 (since it is the right-most color), a blue clue equals slot 4 (since it is the 2nd right-most color), and so forth.
  - More examples for *Color Positional Clues* are listed below in a separate section. (*Color Positional Clues* have a dedicated section since they are a bit more complicated.)

#### 2) Specifically, what kinds of moves are "turned off" in favor of being a *Positional Clue*?

- Any clue that looks like one of the following is now a *Positional Clue* instead:
  - a *Double Finesse* or a *Triple Finesse* where one player has to blind-play **two or more** cards
  - a *Double Bluff* or a *Triple Bluff*
  - an *Ejection* or a *Discharge*
  - a *Rank Choice Finesse* or a *Rank Choice Bluff*
  - a *Self Color Bluff*
  - a *5 Pull* or a *Trash Pull*
  - a *Trash Push*
  - a *Black 4 Bluff* (with black)
  - a *Finesse* or *Bluff* that was initiated with a rank clue when a ***Free Choice*** was available between rank and color
- Additionally, any clue that has no "normal" conventional interpretation is also a *Positional Clue*.

#### 3) Are *Positional Clues* a *Save Clue* or a *Play Clue*?

- A *Positional Clue* can be either a *Save Clue* or a *Play Clue*:
  - If the slot corresponds to the chop of a player, then they have to respect that it could be a *Save Clue*. In other words, it could be a *2 Save* on a null 2, a *5 Save* on a null 5, or a save on a critical null 3 or null 4 (if the other copy is in the trash).
  - If the slot corresponds to a slot that is not on the chop, then it is a *Play Clue*.
  - However, *Loaded Play Clues* **always** apply to *Positional Clues*, even in the *Early Game*. (This means that you cannot ever give a *Positional Save Clue* to a player that has one or more known-playable cards.)

#### 4) What about if all the Null cards are already played?

- *Positional Clues* are "turned off" once all of the null cards have been played. Once that happens, *Double Finesses*, *Ejections*, and so forth are turned back on.

#### 5) Do I discard cards touched as a *Positional Clue*?

- *Good Touch Principle* applies to cards touched with a *Positional Clue* in the same way that normal clues are.
- Thus, if a trash card is used as part of a *Positional Clue*, then a *Fix Clue* must be given to the trash card later on.

#### 6) How about an example?

- For example, in a 3-player null game:
  - On the first turn of the game, Alice clues Cathy about one 4.
  - Bob knows that normally, this would be a *4's Double Bluff*. But *Double Bluffs* are turned off in variants with a null suit.
  - Bob instead knows that this is a *Positional Clue*, indicating that someone should play their slot 4 card.
  - Bob sees that Cathy's slot 4 card is not a null card, so he plays his slot 4 card as the null 1.

#### 7) Do you have to be in *Bluff Seat* to give a *Positional Clue*?

- Yes. You are only allowed to give a *Positional Clue* to the very next player.
- The only exceptions is when it is an extraordinary situation or it is very obvious to the team what is going on.

<br />

### Color Positional Clues

- A color positional clue corresponds to a slot number that is based on the order of the stacks. Stacks correspond to the slot numbers **from right to left**.
  - For example, in a 3-player game of the *Null (6 Suit)* variant, there are 5 color clues and 5 slots in the hand. Thus, a purple clue equals slot 5 (since it is the right-most color), a blue clue equals slot 4 (since it is the 2nd right-most color), and so forth.
  - For example, in a 3-player game of the *Null (5 Suit)* variant, there are 4 color clues and 5 slots in the hand. Thus, a blue clue equals slot 5 (since it is the right-most color), a green clue equals slot 4 (since it is the 2nd right-most color), and so forth.

#### Color Positional Clues Skip Over Clued Cards

- When players are determining which slot number the *Color Positional Clue* is talking about, they should always skip over any cards that have one or more positive clues on them.
- For example, in a 3-player game of the "Null (5 Suits)" variant:
  - All the 1's are played on the stacks except for the null 1.
  - Bob hand is as follows, from newest to oldest: `red 1, red 1, null 1, blue 1, blue 5`
  - Bob's blue 5 has a number 5 clue on it. (It was clued with a *5 Save* earlier on.)
  - Alice clues green to Cathy, touching a green 1.
  - Bob knows that normally, this would be an *Unknown Trash Discharge*. But all *Discharges* are "turned off" in null variants. Instead, this must be a *Null Positional Clue*.
  - Bob knows that if his hand was completely unclued, green would refer to slot 4, since there are 5 slots in the hand and green is the 2nd rightmost color. But since Bob's slot 5 card already has a clue on it, he should skip over that card. So this must be targeting his slot 3 (e.g. his 2nd rightmost unclued slot).
  - Bob blind-plays null 1 from slot 3.

#### Color Positional Clues Wrap Around

- *Color Positional Clues* always "wrap around" to the oldest card. In other words, if they go "past" slot 1, then they would apply to slot 5 again.
- For example, in a 3-player game of the "Null (5 Suits)" variant:
  - All the 1's are played on the stacks except for the null 1.
  - Bob hand is as follows, from newest to oldest: `null 1, red 1, red 5, blue 5, green 5`
  - All of Bob's 5's have a number 5 clue on them. (They were clued with a *5 Save* earlier on.)
  - Alice clues red to Cathy, touching a red 1.
  - Bob knows that normally, this would be an *Unknown Trash Discharge*. But all *Discharges* are "turned off" in null variants. Instead, this must be a *Null Positional Clue*.
  - Bob knows that if his hand was completely unclued, red would refer to slot 2, since there are 5 slots in the hand and red is the 4th rightmost color. But since Bob's slot 3, slot 4, and slot 5 card already have a clue on it, he should skip over those cards.
  - This means that blue would target slot 2 and green would target slot 1. Yellow would target slot 2 again (because of the wraparound) and red would target slot 1.
  - Bob blind-plays null 1 from slot 1.

#### One-of-Each Colors Are Skipped

- One-of-each colors are skipped over when finding the "rightmost color". This is because the right-most color is the most important color, and one-of-each colors are less likely to be around.
- For example, in a 3-player game of the "Black & Null (6 Suits)" variant:
  - Everyone has 5 cards in their hand.
  - There are 5 possible colors: red, yellow, green, blue, and black.
  - Normally, the rightmost color would be black, meaning that black would be assigned to slot 5. But black is skipped over, so blue is assigned to slot 5.
  - Subsequently, green is assigned to slot 4, yellow is assigned to slot 3, and red is assigned to slot 2.
  - Black is then assigned to slot 1. (In a 4-player game with 4 cards in the hand, then black would wrap-around and be assigned to the oldest slot again.)

<br />

### Null Saves

Some additional rules apply to *Positional Clues* that are intended to be *Save Clues*.

#### Relaxed 2 Saves

- It is optional for players to give *Save Clues* to null 2's.
- Thus, if a null 2 is discarded, players should not make any *Elimination Notes* for them.

#### No Early Null 3 or Null 4 Saves

- It is considered illegal to perform any kind of *Chop Move* on a non-critical null 3 or a non-critical null 4.
  - This rule counts for both *Positional Saves* and normal *Chop Moves* (such as the *5's Chop Move*).
- Thus, when a player is *Chop Moved* early on for a null card, they can know for sure that it is either a null 2 or a null 5.

<br />

### No Positional Finesses

- Theoretically, it would be possible to do a *Finesse* with a *Positional Clue*. However, we explicitly disallow this.
- For example, in a 3-player game:
  - Null 1 is played on the stacks.
  - Alice gives a *Positional Clue*, indicating that someone should play a null card from slot 3.
  - Bob sees that Cathy has a null 3 on her slot 3.
  - Bob plays his *Finesse Position* as a null 2 (into the null 3).
  - Bob misplays a red 5 and loses the game.
  - Bob realizes that the null 2 was actually on his slot 3.

<br />

### The Scream Blind-Play (Blind-Playing Chop)

- Sometimes, a player will have two critical cards in a row on chop. Usually, the team will work together to clue both of the cards. However, in variants with a null suit, it is sometimes difficult to do this.
- In cases where one player needs to save two cards at once, they can perform a *Scream Blind-Play* by blind-playing their chop card. This is similar to a *Scream Discard*, except it *Chop Moves* two cards instead of one.
- Just like the *Scream Discard*, the *Scream Blind-Play* is only to be used as a last resort.
