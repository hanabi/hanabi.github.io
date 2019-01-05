# Efficiency Tables

### Starting Pace

| Variant Type         | 2-player | 3/4-player | 5-player | 6-player |
| -------------------- | -------- | ---------- | -------- | -------- |
| 6 Suits              | 22       | 18         | 15       | ?        |
| 6 Suits w/ 1x 1oE    | 17       | 13         | 10       | ?        |
| 6 Suits w/ 2x 1oE    | 12       | 8          | 5        | ?        |
| 6 Suits (Up or Down) | 16       | 12         | 9        | ?        |
| 5 Suits              | 17       | 13         | 10       | ?        |
| 5 Suits w/ 1x 1oE    | 12       | 8          | 5        | ?        |
| 5 Suits (Up or Down) | 12       | 8          | 5        | ?        |
| 4 Suits              | 12       | 8          | 5        | ?        |
| 4 Suits w/ 1x 1oE    | 7        | 3          | 0        | ?        |
| 4 Suits (Up or Down) | 8        | 4          | 1        | ?        |
| 3 Suits              | 7        | 3          | 0        | ?        |

* Pace is a measure of how many discards the team can do before a perfect score becomes impossible.
* The formula for this is: `total cards in the deck - ((number of cards in a player's hand - 1) * number of players) - (5 * number of suits)`

<br />

### Minimum Efficiency Needed for a Perfect Score

| Variant Type         | 2-player | 3/4-player | 5-player | 6-player |
| -------------------- | -------- | ---------- | -------- | -------- |
| 6 Suits              | 0.86     | 0.97       | 1.07     | ?        |
| 6 Suits w/ 1x 1oE    | 1.00     | 1.15       | 1.30     | ?        |
| 6 Suits (Up or Down) | 1.03     | 1.20       | 1.36     | ?        |
| 6 Suits w/ 2x 1oE    | 1.20     | 1.43       | 1.67     | ?        |
| 5 Suits              | 0.86     | 1.00       | 1.14     | ?        |
| 5 Suits w/ 1x 1oE    | 1.04     | 1.25       | 1.47     | ?        |
| 5 Suits (Up or Down) | 1.04     | 1.25       | 1.47     | ?        |
| 4 Suits              | 0.87     | 1.05       | 1.25     | ?        |
| 4 Suits w/ 1x 1oE    | 1.11     | 1.43       | 1.82     | ?        |
| 4 Suits (Up or Down) | 1.05     | 1.33       | 1.67     | ?        |
| 3 Suits              | 0.88     | 1.15       | 1.50     | ?        |

* Efficiency is defined as: `total cards that need to be played / total number of clues given`
* The formula for this is: `(5 * number of suits) / (pace + number of suits + 7 (- 1 if a 5/6-player game))`
* To calculate the total number of clues given, we use:
  * pace because you get 1 clue per discard
  * number of suits because you get a clue back for each 5 played of the suit
  * +8 for the 8 starting clues
  * -1 for not using the clue that you get for the final 5 played
  * -1 if a 5/6-player game because you cannot play 6 or 7 cards of the same suit in the final round
