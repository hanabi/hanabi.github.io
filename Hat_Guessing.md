# The Hat-Guessing Convention Framework

[Floris van Doorn](https://github.com/fpvandoorn/) created [a convention framework called Hat-Guessing](https://github.com/fpvandoorn/hanabi/blob/master/doc_hat_player.md). This is based on the paper [How to Make the Perfect Fireworks Display: Two Strategies for Hanabi](https://www.researchgate.net/publication/297678249_How_to_Make_the_Perfect_Fireworks_Display_Two_Strategies_for_Hanabi) by Christopher Cox, Jessica De Silva, Phillip Deorsey, and Josh Tobin.

This framework is entirely separate from the Hyphen-ated convention framework. This document contains some helpful tools used for humans who are attempting to play with this framework.

<br />

## Clue Interpretation Table (4 Player and 5 Player)

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

## Clue Interpretation Table (3 Player)

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

### Hyphen-ated Framework Empty Clue

| # mod 10 | action    | type of clue
| -------- | --------- | -------------
| 0        | clue      | clue blue
| 1        | play 1    | clue green
| 2        | play 2    | clue yellow
| 3        | play 3    | clue red
| 4        | play 4    | clue purple
| 5        | play 5    | clue number 1
| 6        | discard 1 | clue number 2
| 7        | discard 3 | clue number 3
| 8        | discard 4 | clue number 4
| 9        | discard 5 | clue number 5
