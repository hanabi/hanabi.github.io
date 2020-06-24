# The Hat-Guessing Convention Framework

[Floris van Doorn](https://github.com/fpvandoorn/) created [a convention framework called Hat-Guessing](https://github.com/fpvandoorn/hanabi/blob/master/doc_hat_player.md) in June 2016. This is based on the paper [How to Make the Perfect Fireworks Display: Two Strategies for Hanabi](../academic-papers/2015-02-01%20-%20How%20to%20Make%20the%20Perfect%20Fireworks%20Display.pdf) by Christopher Cox, Jessica De Silva, Phillip Deorsey, and Josh Tobin.

This framework is entirely separate from the Hyphen-ated convention framework. This document contains a basic description of how it works and has some helpful tools for people attempting to play with it.

<br />

## Table of Contents

1. [Basic Description](#basic-description)
2. [Clue Interpretation Tables](#clue-interpretation-tables)
3. [Modulus Cheat Sheet](#modulus-cheat-sheet)
4. [Other Conventions](#other-conventions)
5. [Advanced Tables](#advanced-tables)
6. [Variant-Specific Tables](#variant-specific-tables)

<br />

## Basic Description

* In most Hanabi convention frameworks, you clue cards to tell the player to play that card (or discard that card). In Hat-Guessing, clues have nothing to do with the cards that are "touched" by the clue.
* When a player gives a clue in Hat-Guessing, they encode actions for all other members of the team within the clue using [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic).
* For example, on the first turn of a 4-player game:
  * Alice goes first.
  * Bob has blue 1 on slot 1, Cathy has red 1 on slot 1, and Donald has green 1 on slot 1.
  * So, Alice wants all three of her teammates to play slot 1.
  * From the clue interpretation table below, we see that "play slot 1" is assigned a value of 1.
  * Alice adds up all of the actions: 1 + 1 + 1 = 3
  * Thus, Alice needs to convey "3" to the team, so she clues number 1 to Cathy (which is number to the newest card to the player two seats away).
  * Bob comes next and has to figure out which move that Alice has planned for him.
  * From the clue interpretation table below, Bob knows that Alice encoded a value of 3.
  * Bob also can look ahead and see that Cathy will be assigned a value of 1 and Donald will be assigned a value of 1.
  * Bob calculates: 3 (Alice's clue) - 1 (Cathy's future action) - 1 (Donald's future action) = 1 (play slot 1)
  * Bob blind-plays slot 1.
  * Cathy performs a similar analysis that Bob does, but it is a bit easier for her. Instead of having to figure out the actions of two future players (Cathy + Donald), she only has to figure out the action of 1 player (Donald) in order to make her calculation.
  * Cathy calculates: 3 (Alice's clue) - 1 (Bob's past action) - 1 (Donald's future action) = 1 (play slot 1)
  * Cathy plays slot 1.
  * Donald has the easiest time of all. He does not have to figure out anyone's action. He just has to plug in the values for what the two previous players did in order to determine that he is supposed to play slot 1.
  * Donald calculates: 3 (Alice's clue) - 1 (Bob's past action) - 1 (Cathy's past action) = 1 (play slot 1)
  * Donald blind-plays slot 1.

<br />

## Clue Interpretation Tables

### 3-Player

| # mod 9 | action    | person clued   | type of clue
| ------- | --------- | -------------- | -------------
| 0 (9)   | give clue | 1 player away  | number on newest card
| 1 (10)  | play 1    | 1 player away  | color on newest card
| 2 (11)  | discard 5 | 1 player away  | number clue which is not 1 and doesn't hit newest card
| 3 (12)  | play 3    | 1 player away  | color clue not on newest card
| 4 (13)  | play 4    | 2 players away | number on newest card
| 5 (14)  | play 5    | 2 players away | color on newest card
| 6 (15)  | discard 2 | 2 players away | number clue which is not 1 and doesn't hit newest card
| 7 (16)  | discard 3 | 2 players away | color clue not on newest card
| 8 (17)  | discard 4 | any player     | 1 clue not on newest card

<br />

### 4-Player

| # mod 12 | action                    | person clued   | type of clue
| -------- | ------------------------- | -------------- | -------------
| 0  (12)  | give clue                 | 1 player away  | number on newest card
| 1  (13)  | play 1                    | 1 player away  | color on newest card
| 2  (14)  | play 2                    | 1 player away  | number not on newest card
| 3  (15)  | play 3                    | 1 player away  | color not on newest card
| 4  (16)  | play 4                    | 2 players away | number on newest card
| 5  (17)  | discard 1                 | 2 players away | color on newest card
| 6  (18)  | discard 2                 | 2 players away | number not on newest card
| 7  (19)  | discard 3                 | 2 players away | color not on newest card
| 8  (20)  | discard 4                 | 3 players away | number on newest card
| 9  (21)  | 3rd rightmost is critical | 3 players away | color on newest card
| 10 (22)  | 2nd rightmost is critical | 3 players away | number not on newest card
| 11 (23)  | rightmost is critical     | 3 players away | color not on newest card

<br />

### 5-Player

| # mod 13 | action             | person clued   | type of clue
| -------- | ------------------ | -------------- | -------------
| 0  (13)  | give clue          | 1 player away  | number on newest card
| 1  (14)  | play 1             | 1 player away  | color on newest card
| 2  (15)  | play 2             | 1 player away  | number not on newest card
| 3  (16)  | play 3             | 1 player away  | color not on newest card
| 4  (17)  | play 4             | 2 players away | number on newest card
| 5  (18)  | discard 1          | 2 players away | color on newest card
| 6  (19)  | discard 2          | 2 players away | number not on newest card
| 7  (20)  | discard 3          | 2 players away | color not on newest card
| 8  (21)  | discard 4          | 3 players away | number on newest card
| 9  (22)  | slot 1 is critical | 3 players away | color on newest card
| 10 (23)  | slot 2 is critical | 3 players away | number not on newest card
| 11 (24)  | slot 3 is critical | 3 players away | color not on newest card
| 12 (25)  | slot 4 is critical | 4 players away | any clue

<br />

## Terminology

### Obvious Play/Critical/Discard

* A **positively identified** (i.e. touched by a clue) card is an obvious play/critical/discard if it can be deduced as such **purely through**
  * the positive and negative information on it,
  * the state of the play stacks,
  * the state of the discard stacks,
  * totally identified cards in hands,
  * global elimination notes.
* A card is not positively identified if a player can only deduce its identity through context deduction and induction.
* The fastest way to check if a card is an obvious play/critical/discard is to use empathy mode, ignoring the crosses that originate from not-totally-identified cards in hands, and checking all resultant possible identities against the play stacks.
* This concept is used as an error mitigation tradeoff; it is easy for a player to miss e.g. a negative 5 on an unclued chop card, and the benefit of being able to skip cluing non-obviously known cards is quite small.

### Called Card
* Any card that has been targeted by an instruction.

### Global Elimination Notes

* Since we have rigid rules around discard target priority, an apparent contravention of these rules globally indicates the presence of the other copy of the target, triggering all players to make identical elimination notes; if the other copy is in the same hand as the target, it is to the right of the target.

### Trash
* Duplicate (dupe) copies of called cards (in a previous clue) are considered to be trash.

## Instruction Priority

* When cluing, you give each other play an instruction. You have to give the instructions with the following priority
* Instruction type priority:
  * Give a play instruction, targeting an unclued card or a card that is not an obvious play or called card.
  * Give a discard or critical instruction, targeting an unclued card or a card that is not an obvious/called discard/critical.
  * Give a clue instruction
* When there are multiple play instructions possible, this is the priority:
  * Unique cards, i.e. 5s, critical cards, and cards of which the player holds all copies.
  * Leftmost 1 where the player holds two copies.
  * Lowest rank.
  * Left-most.
* When there are multiple discard/critical instructions possible, this is the priority:
  * Rightmost of leftmost copies of important dupes in a hand (not called or obvious). E.g. in a hand of `y2 r2 r2 y2`, tell them to discard slot 2.
  * Rightmost trash, if the receiving player has no known trash (called trash, called dupe or obvious trash).
  * Rightmost critical (not called or obvious).
  * Rightmost trash (not called or obvious).

## Instruction rules
* Each player has a *Play Queue*.
  * These are the cards that this player will play, in the given order.
  * Normally, it is impossible to change the order of this queue, or add a play instruction at the start or in the middle of the queue (play instructions can only be added to the end of the queue)
* When giving a clue, the clue giver gives an instruction to all players.
  * All play instructions are added at the end of their *Play Queue*.
  * You have to assign the instructions according to the *Instruction Priority* above (but see *First Responder Exception* below).
* When giving a clue, you first have to decide in which order the players are able to respond to this clue. This is called the *Respond Order*
  * The players with the longest play clue respond to this clue last
  * If tied, the player furthest away from you responds last.
* You have to decide the instructions in **reverse** *Respond Order*.
  * This is relevant when two players have the same playable card in their hand: you should give this instruction to the last player in *Respond Order*, and give a different instruction to the first player in *Respond Order*.
  * For example, first turn of the game, Alice sees that both Cathy and Donald both have a red 1 as their leftmost 1.
  * Since Donald is last in Respond Order, Donald will receive the instruction to play red 1
  * Cathy will not receive the instruction to play red 1, but instead gets an instruction to play the leftmost 1 behind red 1 (if any), or gets another clue.
  * When interpreting the clue, Bob has to make sure to also assign the red 1 play instruction to Donald, and not to Cathy.
  * If, instead, Cathy still has green 1 to play from a previous clue, and Donald has an empty *Play Queue*, then Cathy is last in Respond Order, and Cathy will get the instruction to play red 1, and Donald will get a different instruction.
* The first player in *Respond Order* is called the *First Responder*, the last player in *Respond Order* is called the *Last Responder*. Every other player is called an *Intermediate Responder*
* No finesses can be given (which should be obvious if you decide instructions in reverse *Respond Order*).
  * However, you can give play clues that play on top of cards that are already in the *Play Queue* of some player.
  * This is of course only possible if the intermediate card is played before the turn when the player receiving the instruction will try to play their card.
  * The clue giver, and all players interpreting the clue, will know the exactly *Play Queues* of all players, and can decide whether this is true.
* *Critical Instructions* can be given in 4 and 5 player games. They are skipped in 3 player games.
  * In 4 player games, you count from the right to indicate which card is critical. You skip all called cards, and cards that are known to be not critical.
  * Example: If Donald has a r5 in slot 4 that was already called as critical, and you now want to tell him that slot 3 is also critical, you assign them 11 (rightmost critical).
* When giving a *Discard Instruction*, you can and have to clue a card if another copy was already called to be playable in another player's hand.
  * You are **not** allowed to give a discard instruction on a copy of a card if you give a play instruction to another copy of that card in the *same clue* (except if *First Responder Exception* applies)
* After assigning an instruction to everyone, add up the instruction numbers, and look in the table what clue you can give with the specified *Clue Value*.
  * If you have choice, you should give the clue within the specified type that gives the most information on useful cards.
  * Good touch principle doesn't apply, and you are allowed to touch trash if that gives more information on useful cards.
* After cluing, it is possible that this gives enough positive or negative information on a card that this now becomes an *Obvious Play*. In this case, this is added as a play instruction at the end of that player's play clue.
  * If a player received a play instruction, and gets an obvious play in their hand, the play instruction is added to the queue first.
  * If multiple cards become obvious plays, they are added to the hand from left to right.

## First Responder Exception
* A clue giver may give any *Play* or *Discard* instruction to the *First Responder*. This does not need to follow *Instruction Priority*.
* The first player in *Respond Order* is usually the player to your left. If the player to your left has a non-empty play clue, it might be a different player.
* If you give them a *Clue* or *Critical* instruction, that **has** to follow *Instruction Priority*.
* The *First Responder* **has** to follow your instruction. If it is a play or discard instruction, they are not allowed to defer this action, or discard a different card first. If it is a clue or critical instruction, they are required to give a clue.
* This means that as a clue giver, you might choose to repeat a *Discard Instruction* already given to this player.
* You can also give a *Play Instruction* to a card without priority, for example if you see that it leads into another player's hand.

## Interpreting Instructions
* When it is your turn, you should first play any cards still in your play queue from previous clues.
  * You have to do this before interpreting new clues, since later play clues could be calling cards that play on top of your card.
  * This means that a you might not know your exact *Play Queue*, or the length of your *Play Queue*. However, you can always know if your *Play Queue* is non-empty and what the first instruction is in your *Play Queue*.
  * Every player with an empty *Play Queue* also knows the full play clue of every player.
* If your *Play Queue* is empty, you can interpret the next clue (the first clue that you have not interpreted before).
  * This only be accurately be done if every player before you in *Respond Order* has already performed their action (which usually you must wait till your turn to interpret the clue).
  * Often times you can make a good guess of every instruction to the players before you, but make sure to pay attention if they deviate from the expected instructions.
  * When interpreting a clue, make sure to go back to the turn when the clue was given, to correctly interpret the positions of all cards.
* Look at the given clue, and read the *Clue Value* from the table.
* Subtract the *Instruction Value* from all players that were before you in the *Respond Order*.
  * You can determine these *Instruction Values* from the actions of the other players.
  * If a player played a card from this clue, you know they received a *Play Instruction* on that card.
    * Exception: if this card could not have been gotten with the clue (for example if a Finesse was required), then they must have received a different instruction, and they deduced that their card was playable through public or private information.
  * If the first responder discarded a card, they received a *Discard Instruction* on that card.
  * In any other case (if any player gave a clue, or if an *Intermediate Responder* discards), you can deduce what instruction was given to them by applying the *Instruction Priority* on their hand (using the exact state of the board when the clue was given, before using the positive or negative information by that clue).
* Subtract the *Instruction Value* from all players that are after you in the *Respond Order*.
  * You can deduce what instruction was given to them by applying the *Instruction Priority* on their hand.
  * Make sure to assign their instructions in **reverse** *Respond Order*, just like the clue giver did.
* The remaining number is your *Instruction Value*

## Executing Instructions

* As mentioned before, when the *First Responder* is required to follow any play or discard instruction. Moreover, if the *First Responder* receives a clue or critical instruction, they are required to give a clue.
* Any *Intermediate Responder* is required to follow all play instructions given to them. The *Final Responder* should generally also do this, but has *Final Freedom* (see below).
* When they receive any other instruction (discard, critical, clue), they should mark the card as called trash or called critical.
* In this case, they can use their judgment to decide what to do.
  * They can discard a card (either from this instruction, or a previous instruction, or an obvious trash card).
  * They can give a clue (if they think that is useful enough).
  * In rare cases they can play a card.
    * This is uncommon, since usually they would have received a play instruction on that card if they want to play it now.
    * It is possible that this play instruction was illegal (for example if it was a finesse).
    * In this case, they can play this card, and every player can reason that this player did not receive this play instruction.

### After Executing an Action

* If you play a card, this might make some cards in any player's hand *Obviously Playable*. These cards are added to their respective *Play Queues*.
  * If multiple cards are about to be added to a players *Play Queue*, this is done from left to right
    * Usually this will not allow the other card to be added to the *Play Queue*, since the cards could be the same
  * If multiple players are about to add a card to their *Play Queue* the player that is first in *Respond Order* does it first.
    * This is the player with the shortest *Play Queue*. On a tie it is the player first in turn order.
    * This can cause the card in the other player's hand to not be added, if the cards could be identical.
* If you discard a useful card, this sometimes triggers global elimination notes.
  * If you are the *First Responder*, this doesn't happen when you discard a 3 or 4.
    * Sometimes it is necessary to let a useful card die in order to draw playable cards
    * If you discard a 2, the player that doesn't see the other copy of that 2 does make global elimination notes.
  * If you are not the *First Responder*, you make elimination notes when you discard any useful card
  * Sometimes you discard a playable card. This can only happen if another copy of that card is already in someone's play queue.
* If a player is required to make *Global Elimination Notes* everyone should do make these notes on that player.
  * If at some point in the future there is only 1 position for that card, this card will become an obvious critical (or playable) card.
  * If you discarded a useful card and make elimination notes for the other copy that card, these elimination notes are only made to the *right* of the discarded card.
  * If the position of a with elimination notes is not known, you still have to clue it as a critical card with a clue.
* If you clue, every other player should interpret this clue as soon as they have all the required information for it (and have interpreted all clues before this one).

### Final Freedom

* In rare cases, *Final Responder* to a clue can ignore a play clue given to them.
* They are not allowed to do this if they might have received a play clue after this one.
* They generally should only do this if from context they know the exact identity of their playable card, and if they can give a very useful clue.
* When giving a clue in *Final Freedom* or interpreting such clue, players should still assign *Play Instructions* on other copies of the player in *Final Freedom*.  <!-- or not? -->
* If the player in *Final Freedom* knows that they have called the other copy of their card, they can continue to discard their copy.

### Misplays

* If a misplay occurs as the result of a clue, all further instructions from that clue are cancelled, without exception.
* If that leaves a player with no instructions to process, that player will give a clue, and they have to assign play instructions to cards that might have been called already before.
* A player without a new instruction is still allowed to play the card that they thought was targeted (at their digression). This convention only means that when giving new clues, instructions have to be repeated.

### End-game

* Sometimes it is valuable to revert to ordinary conventions
* When there are only 5s left to play, a 5 clue not on the newest card is a non-hat clue, and from then on since an alternative hat clue exists.

### Positional Discards

* In the endgame you can use *Positional Discards* as per usual.

### Variant Specific Tables

* In many variants it's hard to guarantee a clue that touches slot 1 with number/color or that avoids slot 1 with number/color.
* In these cases you will need to remove some rows from the tables.



<br />

## Hat Guessing with Finesses

See [Jeff's document](https://github.com/iamwhoiamhahaha/hanabi/blob/master/hat-guessing/Advanced_Hat_Guessing.md) for tables that allow *Finesses*.

<br />

## Variant-Specific Hat Guessing with Finesses

See [Jeff's document](https://github.com/iamwhoiamhahaha/hanabi/blob/master/hat-guessing/Variant-Specific_Hat_Guessing_Tables.md).
