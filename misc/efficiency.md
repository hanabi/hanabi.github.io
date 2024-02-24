# Efficiency Tables

## Pace

- Pace is a measure of how many discards the team can do before a perfect score becomes impossible.
- The formula for pace is:
  - `total cards in the deck - ((number of cards in a player's hand - 1) * number of players) - (5 * number of suits)`
  - If a game contains the Contrarian detrimental character, `(number of players - 2)` is subtracted from the pace.

## Starting Pace

| Variant Type           | 2-player | 3/4-player | 5-player | 6-player |
| ---------------------- | -------- | ---------- | -------- | -------- |
| 6 Suits                | 22       | 18         | 15       | 18       |
| 6 Suits w/ 1x 1oE      | 17       | 13         | 10       | 13       |
| 6 Suits w/ 2x 1oE      | 12       | 8          | 5        | 8        |
| 6 Suits (Up or Down)   | 16       | 12         | 9        | 12       |
| 6 Suits (Clue Starved) | 22       | 18         | 15       | 18       |
| 5 Suits                | 17       | 13         | 10       | 13       |
| 5 Suits w/ 1x 1oE      | 12       | 8          | 5        | 8        |
| 5 Suits (Up or Down)   | 12       | 8          | 5        | 8        |
| 5 Suits (Clue Starved) | 17       | 13         | 10       | 13       |
| 4 Suits                | 12       | 8          | 5        | 8        |
| 4 Suits w/ 1x 1oE      | 7        | 3          | 0        | 3        |
| 4 Suits (Up or Down)   | 8        | 4          | 1        | 4        |
| 4 Suits (Clue Starved) | 12       | 8          | 5        | 8        |
| 3 Suits                | 7        | 3          | 0        | 3        |
| 3 Suits (Clue Starved) | 7        | 3          | 0        | 3        |

## Efficiency

- Efficiency is a measure of how much value the team is getting with the amount of clues that they have spent thus far.
- The formula for efficiency is:
  - `(number of cards played + number of cards with 1+ clues "on" them) / number of clues given or lost`
  - (This formula assumes the use of _Good Touch Principle_.)

## Minimum Efficiency Needed for a Perfect Score

| Variant Type                           | 2-player | 3/4-player | 5-player | 6-player |
| -------------------------------------- | -------- | ---------- | -------- | -------- |
| 6 Suits                                | 0.86     | 0.97       | 1.11     | 1.00     |
| 6 Suits w/ 1x 1oE                      | 1.00     | 1.15       | 1.36     | 1.20     |
| 6 Suits w/ 2x 1oE                      | 1.20     | 1.43       | 1.76     | 1.50     |
| 6 Suits (Up or Down)                   | 1.03     | 1.20       | 1.43     | 1.25     |
| 6 Suits (Clue Starved)                 | 1.43     | 1.58       | 1.76     | 1.58     |
| 6 Suits (Throw It in a Hole)           | 1.00     | 1.15       | 1.30     | 1.15     |
| 6 Suits (Throw It in a Hole) w/ 1x 1oE | 1.25     | 1.50       | 1.88     | 1.58     |
| 6 Suits (Critical Fours)               | 1.03     | 1.20       | 1.43     | 1.25     |
| 6 Suits (Critical Fours) w/ 1x 1oE     | 1.20     | 1.43       | 1.76     | 1.50     |
| 5 Suits                                | 0.86     | 1.00       | 1.19     | 1.04     |
| 5 Suits w/ 1x 1oE                      | 1.04     | 1.25       | 1.56     | 1.32     |
| 5 Suits (Up or Down)                   | 1.04     | 1.25       | 1.56     | 1.32     |
| 5 Suits (Clue Starved)                 | 1.39     | 1.56       | 1.79     | 1.56     |
| 5 Suits (Throw It in a Hole)           | 1.00     | 1.19       | 1.39     | 1.19     |
| 5 Suits (Throw It in a Hole) w/ 1x 1oE | 1.32     | 1.67       | 2.27     | 1.79     |
| 5 Suits (Critical Fours)               | 1.04     | 1.25       | 1.56     | 1.32     |
| 4 Suits                                | 0.87     | 1.05       | 1.33     | 1.11     |
| 4 Suits w/ 1x 1oE                      | 1.11     | 1.43       | 2.00     | 1.54     |
| 4 Suits (Up or Down)                   | 1.05     | 1.33       | 1.82     | 1.43     |
| 4 Suits (Clue Starved)                 | 1.33     | 1.54       | 1.82     | 1.54     |
| 4 Suits (Throw It in a Hole)           | 1.00     | 1.25       | 1.54     | 1.25     |
| 3 Suits                                | 0.88     | 1.15       | 1.67     | 1.25     |
| 3 Suits (Clue Starved)                 | 1.25     | 1.50       | 1.88     | 1.50     |
| 3 Suits (Throw It in a Hole)           | 1.00     | 1.36       | 1.88     | 1.36     |

- Minimum efficiency is defined as:
  - `total cards that need to be played / maximum number of clues that can be given before the game ends`
- The formula for minimum efficiency is:
  - `(5 * number of suits) / (8 + floor((starting pace + number of suits - unusable clues) / discards per clue))`
  - "unusable clues" is 1 by default, but 2 in a 5/6-player game
  - "unusable clues" is equal to the number of suits in a _Throw It in a Hole_ game
  - "unusable clues" is always 1 if a game contains a Contrarian detrimental character
  - "discards per clue" is 1 by default, but 2 in a _Clue Starved_ game
- To calculate the total number of clues given or lost, we use:
  - +8 for the 8 starting clues
  - starting pace because you get 1 clue per discard
  - number of suits because you get a clue back for each 5 played of the suit
  - unusable clues because you don't get to use the clue that you get for playing the final 5
  - unusable clues is 2 in a 5/6-player game because you cannot play 6 or 7 cards of the same suit in the final round
