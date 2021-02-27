---
id: level-3
title: Level 3 - Basic Strategy
---

- Level 3 strategies should only be learned if you have played with the group for a few days (20+ games of experience).

<br />

## Conventions

### Fix Clues

- Nearly every clue that is either a *Save Clue* or *Play Clue*. One small exception to this is a *Fix Clue*, which is an attempt to "fix" an impending misplay.
- *Fix Clues* are often needed when a duplicate card is touched. Cards are not normally duplicated (which follows from *Good Touch Principle*), but sometimes someone makes a mistake, or a sequence of particular cards makes duplicating necessary. Duplicate cards will lead to misplays, so it is the team's responsibility to fix the problem and intervene before this happens.

![Fix Clue](/img/level-2/fix-clue.png)

- In the above screenshot:
  - Before the clue was given, Alice had an unknown purple card in her hand.
  - From *Good Touch Principle*, Alice concluded that her card must be purple 5, and had planned to play it as soon as possible.
  - Bob clues number 3 to Alice, which "fills in" the purple card and reveals that it is purple 3.
  - Since Alice was just about to play this card, Alice knows that this was a *Fix Clue* and that she can now safely discard the purple 3.

![Fix Clue](/img/level-2/fix-clue-2.png)

- **A clue cannot be a *Play Clue* and a *Fix Clue* at the same time.** If you receive a *Fix Clue* and it touches other ancillary cards, none of them are necessarily playable; the primary point of the clue is to fix the impending misplay.
- In the above screenshot:
  - Before the clue was given, Alice has an unknown 1 in her hand.
  - From *Good Touch Principle*, Alice concluded that her 1 must be green 1, and had planned to play it as soon as possible.
  - Bob clues blue to Alice, which "fills in" the 1 and reveals that it is blue 1. The blue clue also touches a blue card on slot 1.
  - In this situation, Alice might be tempted to think that this is a *Play Clue* on a blue 2 in slot 1, especially considering that the slot 1 card was the only brand new card introduced in the clue (and that the focus of a clue should always be on the brand new card introduced).
  - However, the fact that the blue clue "fixed" an impending misplay means that Bob may have had no choice but to clue blue, and he may not necessarily be trying to give a *Play Clue*.
  - Alice marks the blue card as either blue 2, blue 3, blue 4, or blue 5, and discards the blue 1.

### Fix Clues (That Give No Additional Information)

- Usually a *Fix Clue* will "fill in" the card to explicitly make it known that the card is unplayable or duplicated. However, it is also possible to perform a *Fix Clue* just by cluing the card again. For example:
  - Alice clues Bob number 1 and it touches three 1's.
  - Bob successfully plays two 1's.
  - Before Bob can play the 3rd 1, Alice clues Bob number 1 again, and all the clue does is re-touch the remaining 1.
  - Now it is Bob's turn. Since he was going to play the 1 already without Alice doing anything, the clue must have some other meaning. Thus, it is a *Fix Clue*: the remaining 1 is bad, and Bob can safely discard it.
- *Fix Clues* that give no additional information only "fix" one card. For example:
  - Alice clues Bob number 1 and it touches three 1's.
  - Bob successfully plays one 1.
  - Before Bob can play the 2nd 1, Alice clues Bob number 1 again, and all the clue does is re-touch the two remaining 1's.
  - Now it is Bob's turn. Since he was going to play both of these 1's already without Alice doing anything, the clue must have some other meaning. Thus, it is a *Fix Clue*: the 1 that Bob was about to play is bad, and Bob can safely discard it. Bob skips over the 1 that he was about to play and plays the other one.

### Playing Multiple 1's

#### Part 1 - Play Order Inversion in the Starting Hand

- If one or more 1's in your hand are clued, **you should assume that they are all playable**. (This only applies to 1's, and follows from *Good Touch Principle*.)
- We agree that playing 1's at the beginning of the game is a special case - you should always **play the 1's in your starting hand from oldest to newest**. (This is a special case because normally, *Play Clues* mean to play the left-most card.)

![Playing Multiple 1's](/img/level-3/playing-multiple-1s.png)

- In the above screenshot, on the first turn of the game, Alice clues number 1 to Bob, which touches three 1s on slot 2, slot 3, and slot 4.
- From *Good Touch Principle*, Bob knows that he can now play all 3 of these cards.
- Bob should play the slot 4 card first, and then the slot 3 card, and then the slot 2 card.
- The logic behind this convention is explained [here](https://github.com/hanabi/hanabi.github.io/blob/main/misc/convention-reasons.md#play-order-of-multiple-1s).

#### Part 2 - The Fresh 1's Rule

- If two (or more) 1's are clued in someone's hand, and one of the 1's was in the starting hand, and one of the 1's was not, then the "fresh" card is probably more important. (Otherwise, the clue might have been given earlier.)
- Thus, freshly drawn 1's should always be played before any 1's that were present in the starting hand.
- Continuing on from the example in the previous section, imagine that:
  - Bob plays the slot 4 card. (He then draws a card, and all of the other cards in his hand slide over.)
  - Alice clues 1's to Bob, which touches a brand new card on slot 1 and re-touches the ones on slot 3 and slot 4.

![Playing Multiple 1's](/img/level-3/playing-multiple-1s-2.png)

- Bob knows that fresh 1's have precedence, so he plays the slot 1 card next. After that, he should play the slot 4 card, and then the slot 3 card (e.g. resuming the play order from before).

#### Part 3 - The Chop Focus Exception

- The *Fresh 1's Rule* has an exception: *Chop-Focus* **overrides** it.
- For example, in a 3-player game:
  - No cards are played on the stacks.
  - Alice discards a red 4.
  - Bob discards.
  - Cathy clues number 1 to Alice, touching four 1's on slots 1, 2, 3, and 5.
  - Alice knows that the correct order to play all of the 1's in is 5, 1, 3, 2:
    - Alice knows that normally, you are supposed to play freshly-drawn 1's before 1's that were present in your starting hand. However, *Chop-Focus* overrides this rule, so she knows that the slot 5 card (her chop) should play first.
    - After that, she uses the *Fresh 1's Rule*, and knows to play the 1 in slot 1 next.
    - After that, she will play the rest of the 1's from oldest to newest (since they were in her starting hand), so she will play slot 3 and then slot 2.

<br />

## Special Moves

### The Sarcastic Discard

- Occasionally, through a mistake (or complicated situation), the same card will be clued in two different people's hands. Generally, this is to be avoided, but sometimes it happens. Handling this can be tricky.
- Generally, the **first** player who fully realizes that they have the duplicate card should discard it (as opposed to playing it or holding on to it). This is called a *Sarcastic Discard*, and it communicates to the other player that they 100% have the discarded card. (This is because normally, from *Good Touch Principle*, we never discard cards that have been clued, so if a player discards a clued card, something special must be going on.)
- For example, in a 3-player game:
  - Red 2 is played on the stacks.
  - Alice has one red 3 clued in his hand with just number 3.
  - Alice clues number 3 to Bob, which touches one 3. (This is a mistake, because it might be violating *Good Touch Principle*.)
  - Bob knows that the only playable 3 is red 3. He also knows that Alice has a clued red 3 already in her hand. Thus, he knows that he has the red 3 and that Alice made a mistake.
  - Bob performs a *Sarcastic Discard* to pass the red 3 back to Alice.
- The *Sarcastic Discard* is similar to the *Prompt*, except that it is initiated by a discard instead of a clue.
- However, unlike a *Prompt*, if there are multiple cards that a *Sarcastic Discard* could apply to, then it does **not** promise that it is the left-most card. It only promises that they have the card somewhere. For example:
  - Alice *Sarcastic Discards* a red 3.
  - Bob has two cards clued with number 3 in his hand. He does not have any color information on either 3.
  - Bob can be certain that one of the two 3's is red 3, but he does not know which one it is yet.

<br />

## General Principles

### Misplay Cost Principle

- On a turn where a player misplays and accumulates a strike for the team, they could have discarded instead and generated a clue.
- So, if you can spend one clue to stop one misplay, the value comes out even.
- Thus, since there are only 2 strikes allowed and accumulating strikes limits flexibility, it is almost always worth it to spend one clue to stop one strike.
- If it would require two clues to stop an impending misplay, then as long as the strike would not lose the game, it is usually best to let the player misplay the card and get a strike.

### Efficiency

- A big part of Hanabi is of trying to be as efficient as possible. This means that players will generally try to "get" as many cards with one clue as possible.
- If you use one clue to get one card, we refer to that as a 1-for-1 clue. For example:
  - On the first turn of the game, Alice clues Bob number 1, touching one 1 as a 1-for-1.
- If you use one clue to get two cards, we refer to that as a 2-for-1 clue. For example:
  - On the first turn of the game, Alice clues Bob number 1, touching two 1's as a 2-for-1. (Bob will play both.)
- 3-for-1 clues are even better than 2-for-1 clues, and so forth. It is even possible to perform a 9-for-1 clue with advanced techniques.
- If a clue touches two cards but only one of them will play right now, it **still counts** as a 2-for-1. This is because we assume that all touched cards will eventually play from *Good Touch Principle*. For example:
  - On the first turn of the game, Alice clues Bob red, touching a red 1 on slot 1 and a red 5 on slot 2 as a 2-for-1. (Bob will only play the red 1 and save the other red card for later.)
- On Hanab Live, the future required efficiency is shown on the right side of the screen. Future required efficiency is calculated by the following formula:
  - `number of cards that remain to be clued / number of clues remaining`
- **If future required efficiency is high, players should probably not perform 1-for-1 clues!** Instead, it is better to discard and try to let someone perform a *Finesse*.

### Tempo

- *Tempo* is a term used to describe the speed at which cards are played. (This is similar to how it is used in other games such as chess.)
- Hanabi can be thought of a race to get all the cards played before the time runs out. This means that even if the team is being extremely efficient, they can still lose the game if they are not playing their cards fast enough. Thus, players have to **strike a balance between *Efficiency* and *Tempo***. You can think of *Efficiency* and *Tempo* as the yin and yang of Hanabi.
- At the beginning of the game, there is a lot of time left, so players will generally prefer clues that get a lot of efficiency over clues that get a lot of tempo.
- At the end of the game, there is almost no time left, so players stop caring about efficiency and start caring only about tempo.
- On Hanab Live, "Pace" is shown at the right side of the screen. Pace is a measure of how many more discards can occur, so this essentially tells you how much time is left in the game. Starting pace is calculated by the following formula:
  - `current score + cards in deck + number of players - maximum score`
- Even at the beginning of the game, players might prefer a clue that gets tempo over a more efficient clue if it will prevent the discard of some other useful card. It all depends on the context of the game!

### Information Lock Principle

#### Information Lock with the Full Identity

- As soon as a clue is given to a card, if it is enough to determine the card's full identity, then the assumed identity is said to be locked in to the card. (On Hanab Live, this is usually represented as a player writing an "identity note" on the card.)
- For example, in a 3-player no variant game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues Bob red, touching a red card on slot 1 as a *Play Clue*.
  - Bob immediately right-clicks on the card and writes a note of "red 1".
  - This card is now "locked in" as a red 1. No future clues or actions from other players can ever change that.

#### Information Lock with a Superposition

- A *[superposition](https://en.wikipedia.org/wiki/Quantum_superposition)* is a term from [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics) that describes how something can be two different things at the same time. For example, an electron is a type of a particle, and an electron can either be "spin up" or "spin down". But an electron could also be in a superposition of both "spin up" and "spin down" at the same time, as weird as that sounds. If a electron happens to bounce off of something (e.g. is measured), then the superposition will "collapse" and it will **only** be in a "spin up" or "spin down" state. The details of quantum mechanics are not important - the main point is that we treat unknown Hanabi cards sort of like unknown particles: even though they **really** have a true identity, we ignore that and treat them as being all of the possibilities at the same time.
- As soon as a clue is given to a card that could be two or more different things, then the assumed superposition of all of the possibilities is locked in to the card.
- For example, in 3-player rainbow game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues Bob red, touching a red card on slot 1 as a *Play Clue*.
  - Bob immediately right-clicks on the card and writes a note" of "red 1 or rainbow 1".
  - This card is now "locked in" as this specific superposition. Future clues and actions can narrow down the cards in the superposition or completely collapse the superposition, but new cards can never be added to the superposition.

#### Information Lock on In-Between Cards

- As soon as a clue is given to a card that is not immediately playable, the assumed identity is locked in to the card **and** all of the in-between cards.
- For example, in a 4-player no variant game:
  - Red 1 is played on the stacks.
  - Bob has one card in his hand clued with number 2. (It is currently unknown.)
  - Cathy has one card in her hand clued with number 3. (It is currently unknown.)
  - Alice clues Donald red, touching a red 4 as a *Play Clue*.
  - Bob is promised to have the red 2. He writes a note of "red 2" on his clued 2. It is now locked in forever as that card.
  - Cathy is promised to have the red 3. She writes a note of "red 3" on her clued 3. It is now locked in forever as that card.
  - Donald knows that from *Good Touch Principle*, his red card cannot be red 2, since Bob has that card clued in his hand.
  - Donald knows that from *Good Touch Principle*, his red card cannot be red 3, since Cathy has that card clued in her hand.
  - Donald knows that he must therefore have the red 4. He writes a note of "red 4" on his red card. It is now locked in forever as that card.

#### Breaking Information Lock

- A direct conflict is the only thing that can "break" an information lock.
- For example, in a 3-player game:
  - Bob has a card in his hand that is touched with a number 2 clue. (It has no color clues on it.)
  - Bob has a written a note of "red 2" on the card, meaning that it has been "locked in" as a red 2. (Bob will permanently think that it is a red 2.)
  - Alice clues blue to Bob, which "fills in" the card as a blue 2.
  - It is now impossible for this card to be a red 2 - Bob knows that he was lied to earlier on in the game. Bob erases his note of "red 2" on the card and the *Information Lock* is broken.
