# Reasons for Specific Hyphen-ated Conventions

The main [reference document](../Reference.md) lists all of our conventions. But it does not bother listing **why** we implemented a particular convention, because we want to make it as concise as possible. Since beginners sometimes like to know the **why** behind a convention, this page will go into a bit more detail.

<br />

### Play Order of Multiple 1's

* In the Hyphen-ated conventions, we [play 1's in the opening hand from right-to-left](../Reference.md#playing-multiple-1s---play-order-inversion-in-the-starting-hand-part-1). Why?
* First, notice that in Hanabi, when multiple cards are clued, players typically feel that playing the left-most (newest) card is "logical".
* For example, in a 2 player game:
  * It is the first turn of the game and nothing is played on the stacks.
  * Alice goes first.
  * Alice clues Bob about two red cards in slot 1 and slot 2.
  * Alice plays slot 1 as red 1.
* Why does this seem logical? The reason is that a big part of Hanabi is discarding and waiting patiently for playable cards to be drawn. When a new playable card is drawn, it is usually immediately given a clue. So interpreting *Play Clues* as being focused on the card that was just drawn makes a lot of sense.
* This "left-most" logic applies for most of the game. But notice that this logic does not apply to the opening hand. A playable card in the opening hand is **equally likely to be in any slot at all**, since the deck was shuffled randomly. So that explains why it is not necessarily "correct" to play 1's in the starting hand from left-to-right. But is it actually beneficial to play the 1's from right-to-left instead?
* The Hyphen-ated group closely follows *[Good Touch Principle](https://github.com/Zamiell/hanabi-conventions/blob/master/Reference.md#4-good-touch-principle)*. A common problem with *Good Touch Principle* is when one player has two copies of the same card in their hand. Even if the card is playable right now (e.g. a red 1), cluing it would be a no-no, since it would violate *Good Touch Principle*.
* Instead, the typical strategy is to do nothing and patiently wait for that player to discard. Eventually, the player will discard the first copy of the card, allowing the remaining copy to be clued in a "clean" way.
* So, what about the inverse? What about when players do **not** patiently wait for a discard and instead clue two or more 1's immediately? The player who receives the clue knows that out of all of the 1s, the most important 1 must be the chop card (or the card closest to chop). Otherwise, if it were a "bad" 1, then the team would do nothing and let it get discarded!
* It follows that players should always play 1's in the starting hand from right-to-left.

<br />

### 3 Bluffs

* In the Hyphen-ated conventions, we extend the [Bluff](../Reference.md#bluffs) convention, allowing players to *Bluff* with [any 3 that they want](https://github.com/Zamiell/hanabi-conventions/blob/master/Reference.md#the-3-bluff). Why?
* Read the [story of 3 Bluffs](3_Bluffs.md), which is on a separate page.
