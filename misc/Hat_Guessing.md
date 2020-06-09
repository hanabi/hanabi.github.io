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

| # mod 9 | action                    | person clued   | type of clue
| ------- | ------------------------- | -------------- | -------------
| 0  (12) | give clue                 | 1 player away  | number on newest card
| 1  (13) | play 1                    | 1 player away  | color on newest card
| 2  (14) | play 2                    | 1 player away  | number not on newest card
| 3  (15) | play 3                    | 1 player away  | color not on newest card
| 4  (16) | play 4                    | 2 players away | number on newest card
| 5  (17) | discard 1                 | 2 players away | color on newest card
| 6  (18) | discard 2                 | 2 players away | number not on newest card
| 7  (19) | discard 3                 | 2 players away | color not on on newest card
| 8  (20) | discard 4                 | 3 players away | number on newest card
| 9  (21) | 3rd rightmost is critical | 3 players away | color on newest card
| 10 (22) | 2nd rightmost is critical | 3 players away | number not on newest card
| 11 (23) | rightmost is critical     | 3 players away | color not on newest card

<br />

### 5-Player

| # mod 9 | action             | person clued   | type of clue
| ------- | ------------------ | -------------- | -------------
| 0  (13) | give clue          | 1 player away  | number on newest card
| 1  (14) | play 1             | 1 player away  | color on newest card
| 2  (15) | play 2             | 1 player away  | number not on newest card
| 3  (16) | play 3             | 1 player away  | color not on newest card
| 4  (17) | play 4             | 2 players away | number on newest card
| 5  (18) | discard 1          | 2 players away | color on newest card
| 6  (19) | discard 2          | 2 players away | number not on newest card
| 7  (20) | discard 3          | 2 players away | color not on on newest card
| 8  (21) | discard 4          | 3 players away | number on newest card
| 9  (22) | slot 1 is critical | 3 players away | color on newest card
| 10 (23) | slot 2 is critical | 3 players away | number not on newest card
| 11 (24) | slot 3 is critical | 3 players away | color not on newest card
| 12 (25) | slot 4 is critical | 4 players away | any clue

<br />

## Other Conventions

### Clue Planning

* An important limitation of Hat-Guessing is that if Alice gives a clue, Bob has to agree with Alice what actions Cathy, Donald, and Emily will perform. (And Cathy has to agree with both of them on what Donald will do, and so on.)
* This means that the actions of Cathy, Donald and Emily cannot be influenced by the cards in Bob's hand.
* In particular, Alice cannot *Finesse* Bob: if Alice tells Bob to play slot 1 (which is red 1) and Cathy to play slot 3 (which is red 2), Bob will not know that the red 2 is playable, so will assign a different action to Cathy.
* As a clue giver it is best to first look what the player to your right should do, then look at the action to the right of that player, and so on.
  * For example, if Bob and Cathy both have a playable red 1 in their hand, and no other playable cards, Cathy is the one who should play it (because Bob will think that Cathy should play it).
* You always can freely tell the next player what you want them to do, even if the conventions below dictate something else. The reason is that nobody has to agree with you on what the next player should do.
  * Example 1: if you see few playable cards, you can tell the next player to discard a card which is not useless.
  * Example 2: you can tell the next player to play a different card than dictated below, if the other card plays into someone else's hand.

### Loaded Actions

* Players can be "loaded" with only one action. If someone gives a clue, it only gives actions to players who do not already have an action loaded.
* For example, on the first turn of a 4-player game:
  * Alice goes first.
  * Alice tells Bob to give a clue, Cathy to play slot 1, and Donald to play slot 1.
  * Bob gives a "1" clue (by giving color to the newest card of Cathy).
  * This "1" clue is ONLY giving an action to Alice, since Bob and Cathy are already loaded.
  * In this case, Alice does not need to perform any addition or subtraction. Since only one action is encoded in the clue, Bob is directly telling Alice to play slot 1.

### Final Freedom

* The final player instructed by a clue can do something else than what was clued to them.
* Most commonly, they can give a clue when they are instructed to discard, if they think that is more valuable.
  * This is almost always good if the next player has a playable card in their hand.
* They can also clue instead of playing a card. This is only advisable if they know which card they are playing (which is rare, but possible).
* The old action they were instructed to do is not forgotten. If this player is clued again, then they can be told to either play a separate playable card or to discard known trash.
  * Example 1: Alice instructs Emily to discard slot 3, but Emily clues instead. The next time Cathy is cluing Emily to discard, Cathy wants to instruct Emily to discard some other trash card in Emily's hand (if possible).
  * Example 2: Alice instructs Emily to play slot 1, which is a blue 1. From context, Emily knows that this is blue 1 and clues instead. 
    * If Bob has a blue 1 and another playable card in their hand, then Emily will clue Bob to play the other card.
    * If Bob has a blue 1 and no other playable card in their hand, Emily will clue Bob to play blue 1.
    * If Cathy gives a clue before the blue 1 is played, Cathy will try to tell Emily to play a card which is not the blue 1. If no such card exists, Cathy will tell Emily to play the blue 1.

### Play Priority

* If a player has two or more playable cards, the priority is as follows:
  1) Unique (e.g. black 1)
  2) Lowest rank
  3) Left-most
* It doesn't matter whether the card is already clued or not.

### Discard Threshold

* If a player has no playable cards, you have to decide whether they should discard or give a clue. 
* In general, we want to discard aggressively, because then we can give more efficient clues.
* You should *always* tell the last player to discard if they have a safe discard. They can always ignore it if they want with their *Final Freedom*.
* For the other players, you should tell them to discard unless the pace is too low. You should tell them to clue if `pace ≤ 2`. In very hard variants you can tell them to clue if `pace ≤ 1`.

### Discard Priority

* If a player has two or more trash cards, the priority is to discard the right-most useless card.
* A card is useless if
  * it's already played
  * you instructed another player to play that card
* For example:
  * Cathy and Donald both have a playable blue 1, and no other playable cards.
  * Alice tells Donald to play blue 1, and tells Cathy to discard blue 1.

<br />

## Advanced Tables

See [Jeff's document](https://github.com/iamwhoiamhahaha/hanabi/blob/master/hat-guessing/Advanced_Hat_Guessing.md) for tables that allow *Finesses*.

<br />

## Variant-Specific Tables

See [Jeff's document](https://github.com/iamwhoiamhahaha/hanabi/blob/master/hat-guessing/Variant-Specific_Hat_Guessing_Tables.md).
