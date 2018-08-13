# The Hat-Guessing Convention Framework

[Floris van Doorn](https://github.com/fpvandoorn/) created [a convention framework called Hat-Guessing](https://github.com/fpvandoorn/hanabi/blob/master/doc_hat_player.md). This is based on the paper [How to Make the Perfect Fireworks Display: Two Strategies for Hanabi](https://www.researchgate.net/publication/297678249_How_to_Make_the_Perfect_Fireworks_Display_Two_Strategies_for_Hanabi) by Christopher Cox, Jessica De Silva, Phillip Deorsey, and Josh Tobin.

This framework is entirely separate from the Hyphen-ated convention framework. This document contains a basic description of how it works and has some helpful tools for people attempting to play with it.

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
  * Bob knows that Alice encoded a value of 3.
  * Bob also can look ahead and see that Cathy will be assigned a value of 1 and Donald will be assigned a value of 1.
  * Bob calculates: 3 - 1 - 1 = 1
  * Bob blind-plays slot 1.
  * Cathy performs a similar analysis that Bob does, but it is a bit easier for her. Instead of having to figure out the actions of two future players (Cathy + Donald), she only has to figure out the action of 1 player (Donald) in order to make her calculation.
  * Cathy plays slot 1.
  * Donald has the easiest time of all. He does not have to figure out anyone's action. He just has to plug in the values for what the two previous players did in order to determine that he is supposed to play slot 1.

<br />

## Loaded Actions

* Players can be "loaded" with only one action. If someone gives a clue, it only gives actions to players who do not already have an action loaded.
* For example, on the first turn of a 4-player game:
  * Alice goes first.
  * Alice tells Bob to give a clue, Cathy to play slot 1, and Donald to play slot 1.
  * Bob gives a "1" clue by giving color to the newest card of Cathy.
  * This "1" clue is ONLY giving an action to Alice, since Bob and Cathy are already loaded.
  * In this case, Alice does not need to perform any addition or subtraction. Since only one action is encoded in the clue, Bob is directly telling Alice to play slot 1.

<br />

## Clue Interpretation Table (4-Player and 5-Player)

| # mod 9 | action    | person clued   | type of clue
| ------- | --------- | -------------- | -------------
| 0       | give clue | 1 player away  | number on newest card
| 1       | play 1    | 1 player away  | color on newest card
| 2       | play 2    | 1 player away  | any clue not touching the newest card
| 3       | play 3    | 2 player away  | number on newest card
| 4       | play 4    | 2 players away | color on newest card
| 5       | discard 1 | 2 players away | any clue not touching the newest card
| 6       | discard 2 | 3 players away | number on newest card
| 7       | discard 3 | 3 players away | color on newest card
| 8       | discard 4 | 3 players away | any clue not touching the newest card

<br />

## Modulus Cheat Sheet

<table>
<tr><td>

| operation | result
| --- | ---
| -9 mod 9  | 0
| -8 mod 9  | 1
| -7 mod 9  | 2
| -6 mod 9  | 3
| -5 mod 9  | 4
| -4 mod 9  | 5
| -3 mod 9  | 6
| -2 mod 9  | 7
| -1 mod 9  | 8

</td><td>

| operation | result
| --- | ---
| 0 mod 9   | 0
| 1 mod 9   | 1
| 2 mod 9   | 2
| 3 mod 9   | 3
| 4 mod 9   | 4
| 5 mod 9   | 5
| 6 mod 9   | 6
| 7 mod 9   | 7
| 8 mod 9   | 8

</td><td>
  
| operation | result
| --- | ---
| 9 mod 9   | 0
| 10 mod 9  | 1
| 11 mod 9  | 2
| 12 mod 9  | 3
| 13 mod 9  | 4
| 14 mod 9  | 5
| 15 mod 9  | 6
| 16 mod 9  | 7
| 17 mod 9  | 8

</td><td>
  
| operation | result
| --- | ---
| 18 mod 9  | 0
| 19 mod 9  | 1
| 20 mod 9  | 2
| 21 mod 9  | 3
| 22 mod 9  | 4
| 23 mod 9  | 5
| 24 mod 9  | 6
| 25 mod 9  | 7
| 26 mod 9  | 8

</td></tr> </table>

<br />

## Clue Interpretation Table (3-Player)

| # mod 9 | action    | person clued   | type of clue
| ------- | --------- | -------------- | -------------
| 0       | give clue | 1 player away  | number on newest card
| 1       | play 1    | 1 player away  | color on newest card
| 2       | discard 5 | 1 player away  | number clue which is not 1 and doesn't hit newest card
| 3       | play 3    | 1 player away  | color clue not on newest card
| 4       | play 4    | 2 players away | number on newest card
| 5       | play 5    | 2 players away | color on newest card
| 6       | discard 2 | 2 players away | number clue which is not 1 and doesn't hit newest card
| 7       | discard 3 | 2 players away | color clue not on newest card 
| 8       | discard 4 | any player     | 1 clue not on newest card

<br />

## Other Conventions

### Discarding Threshold

* The discard "threshold" is set to 3 clues.
* When a clue-giver gives a clue:
  * If there are >= 4 clues in the bank, then no discard actions can be given. "Give clue" actions will be given instead to players who have no playable cards.
  * If there are <= 3 clues in the bank, a discard action will be given if a player has no playable cards and one or more *Trash* cards in their hand.
* There is an exception to the >= 4 clues rule above:
  * If the last player in the action chain has one or more *Trash* cards, then you should tell them to discard instead of giving a clue.
  * This gives them the flexibility to discard or give a clue at their discretion.

### Play Priority

* If a player has two or more playable cards, the priority is as follows:
  1) Lowest rank
  2) Left-most

### Discard Priority

* If a player has two or more trash cards, the priority is to discard the left-most card.

<br />

## Other Clue Interpretation Tables

### 3 Player with Acid Trip

| # mod 11 | action    | person clued   | type of clue
| -------- | --------- | -------------- | --------------
| 0        | give clue | 1 player away  | clue blue
| 1        | play 1    | 1 player away  | clue green
| 2        | play 2    | 1 player away  | clue yellow
| 3        | play 3    | 1 player away  | clue red
| 4        | play 4    | 1 player away  | clue purple
| 5        | play 5    | 1 player away  | clue orange
| 6        | discard 1 | 2 players away | clue blue
| 7        | discard 2 | 2 players away | clue green
| 8        | discard 3 | 2 players away | clue yellow
| 9        | discard 4 | 2 players away | clue red
| 10       | discard 5 | 2 players away | clue purple

<br />

## Hyphen-ated Framework with Empty Clues

* Separate from Hat-Guessing, we can use a Hat-Guessing-like extension tacked on to the existing Hyphen-ated convention framework.
* When an empty clue is given, players drop everything else that they are doing and perform one round of of blind-plays (and/or blind-discards).
* Unlike Hat-Guessing, it does not matter which player recieves a clue. If it is possible to give the empty clue to more than one player, then the clue should be given to the player that would benefit the most from the negative information.

<br />

### Empty Clue Interpretation Table (4-Player and 5-Player)

| # mod 9  | action    | type of clue
| -------- | --------- | -------------
| 0        | clue      | purple
| 1        | play 1    | number 1
| 2        | play 2    | number 2
| 3        | play 3    | number 3
| 4        | play 4    | number 4 or number 5
| 5        | discard 1 | blue
| 6        | discard 2 | green
| 7        | discard 3 | yellow
| 8        | discard 4 | red

<br />

### Empty Clue Interpretation Table (3-Player)

| # mod 5  | action    | number clue | color clue
| -------- | --------- | ----------- | -----------
| 0        | play 5    | 5           | purple
| 1        | play 1    | 1           | blue
| 2        | play 2    | 2           | green
| 3        | play 3    | 3           | yellow
| 4        | play 4    | 4           | red

<br />

### Empty Clue Play Priority

* In normal Hat Guessing, whether or not a card has a clue on it is irrelevant.
* In the empty clue convention, the priority is as follows:
  1) unclued & unknown cards
  2) clued & unknown cards (includes cards from finesses)
  3) clued & known cards
* If there are more than one card that meets the above criteria, the normal Hat Guessing play priority is used.
