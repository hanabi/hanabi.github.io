# The Hat-Guessing Convention Framework

[Floris van Doorn](https://github.com/fpvandoorn/) created [a convention framework called Hat-Guessing](https://github.com/fpvandoorn/hanabi/blob/master/doc_hat_player.md). This is based on the paper [How to Make the Perfect Fireworks Display: Two Strategies for Hanabi](https://www.researchgate.net/publication/297678249_How_to_Make_the_Perfect_Fireworks_Display_Two_Strategies_for_Hanabi) by Christopher Cox, Jessica De Silva, Phillip Deorsey, and Josh Tobin.

This framework is entirely separate from the Hyphen-ated convention framework. This document contains some helpful tools used for humans who are attempting to play with this framework.

## Clue Interpretation Table

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

## Modulus Cheat Sheet

| operation | result
| --------- | ------
| -9 mod 9  | 0
| -8 mod 9  | 1
| -7 mod 9  | 2
| -6 mod 9  | 3
| -5 mod 9  | 4
| -4 mod 9  | 5
| -3 mod 9  | 6
| -2 mod 9  | 7
| -1 mod 9  | 8
| 0 mod 9   | 0
| 1 mod 9   | 1
| 2 mod 9   | 2
| 3 mod 9   | 3
| 4 mod 9   | 4
| 5 mod 9   | 5
| 6 mod 9   | 6
| 7 mod 9   | 7
| 8 mod 9   | 8
| 9 mod 9   | 0
| 10 mod 9  | 1
| 11 mod 9  | 2
| 12 mod 9  | 3
| 13 mod 9  | 4
| 14 mod 9  | 5
| 15 mod 9  | 6
| 16 mod 9  | 7
| 17 mod 9  | 8
| 18 mod 9  | 0
