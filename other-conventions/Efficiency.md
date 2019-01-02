# Efficiency Tables

### Starting Pace

| Variant               | 2-player | 3-player | 4-player | 5-player |
| --------------------- | -------- | -------- | -------- | -------- |
| None                  | 17       | 13       | 13       | 10       |
| Orange                | 22       | 18       | 18       | 15       |
| Black (1oE)           | 17       | 13       | 13       | 10       |
| Black & Rainbow (1oE) | 12       | 8        | 8        | 5        |
| Four Suits            | 12       | 8        | 8        | 5        |
| Three Suits           | 7        | 3        | 3        | 0        |

Pace is a measure of how many discards you can perform before a perfect score becomes impossible.

<br />

### Minimum Efficiency Needed for a Perfect Score

| Variant               | 2-player | 3-player | 4-player | 5-player |
| --------------------- | -------- | -------- | -------- | -------- |
| None                  | 0.86     | 1.00     | 1.00     | 1.14     |
| Orange                | 0.86     | 0.97     | 0.97     | 1.07     |
| Black (1oE)           | 1.00     | 1.15     | 1.15     | 1.30     |
| Black & Rainbow (1oE) | 1.20     | 1.43     | 1.43     | 1.67     |
| Four Suits            | 0.87     | 1.05     | 1.05     | 1.25     |
| Three Suits           | ?        | ?        | ?        | ?        |

* Efficiency is defined as: `total cards that need to be played / total number of clues given`
* The formula for this is: `(5 * number of suits) / (pace + number of suits + 7)`
* To calculate the total number of clues given, we use:
  * pace because you get 1 clue per discard
  * number of suits because you get a clue back for each 5 played of the suit
  * +8 for the 8 starting clues
  * -1 for not using the clue that you get for the final 5 played
