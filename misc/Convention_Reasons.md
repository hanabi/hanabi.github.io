# Reasons for Specific Hyphen-ated Conventions

The main [reference document](../Reference.md) lists all of our conventions. But it does not bother listing **why** we implemented a particular convention, because we want to make it as concise as possible. Since beginners sometimes like to know the **why** behind a convention, this page will go into a bit more detail.

<br />

### Chop Focus

- In the Hyphen-ated convention framework, we play with *[Chop Focus](../beginner.md#example-3---chop-focus)*, which allows us to "get" playable cards that are on chop. Nearly all other Hanabi groups play with a simpler system (e.g. *Play Clues* are always focused on the left-most card). Why do we have *Chop Focus*?
- Most Hanabi groups independently come up with the *Finesse* and the *Bluff*; they are considered to be the two core tools that allow players to be highly-efficient. In the Hyphen-ated group, we use these tools as building blocks to compose even more advanced moves, such as the *Layered Finesse* and the *3 Bluff*. These advanced *Finesses* and *Bluffs* allow us to get even more efficient.
- Separately, notice that the strength of the "play the left-most" convention is that it allows players to easily clue the newest card. Meaning that even if the clue "splashes" other unrelated cards in the hand, it will always work to "get" the newest card.
- But also notice that in the Hyphen-ated group (and in any sufficiently advanced group of Hanabi players that does a lot of *Finesses*), we have a lot of good options to "get" a player's *Finesse Position* card - it is uncommon to have to clue it directly. So this convention isn't helping much.
- *Finesses* and *Bluffs* can't "get" a player's chop card. In fact, there are no "moves" that get a player's chop card, at least in our convention framework. So rather than cluing cards on *Finesse Position*, what **is** common for us is to clue playable cards on chop before they get discarded.
- With all of this in mind, we can see that it makes much more sense to have clues be focused on the chop and let cards on *Finesse Position* be *Finessed* or *Bluffed*.

<br />

### Play Order of Multiple 1's

- In the Hyphen-ated convention framework, we [play 1's in the opening hand from right-to-left](../reference.md#playing-multiple-1s---play-order-inversion-in-the-starting-hand-part-1). Why?
- First, notice that in Hanabi, when multiple cards are clued, players typically feel that playing the left-most (newest) card is "logical".
- For example, in a 2 player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice goes first.
  - Alice clues Bob about two red cards in slot 1 and slot 2.
  - Bob plays slot 1 as red 1.
- Why does this seem logical? The reason is that a big part of Hanabi is discarding and waiting patiently for playable cards to be drawn. When a new playable card is drawn, it is usually immediately given a clue. So interpreting *Play Clues* as being focused on the card that was just drawn makes a lot of sense.
- This "left-most" logic applies for most of the game. But notice that this logic does not apply to the opening hand. A playable card in the opening hand is **equally likely to be in any slot at all**, since the deck was shuffled randomly. So that explains why it is not necessarily "correct" to play 1's in the starting hand from left-to-right. But is it actually beneficial to play the 1's from right-to-left instead?
- The Hyphen-ated group closely follows *[Good Touch Principle](https://github.com/Zamiell/hanabi-conventions/blob/master/Reference.md#4-good-touch-principle)*. A common problem with *Good Touch Principle* is when one player has two copies of the same card in their hand. Even if the card is playable right now (e.g. a red 1), cluing it would be a no-no, since it would be a *Bad Touch*.
- Instead, the typical strategy is to do nothing and patiently wait for that player to discard. Eventually, the player will discard the first copy of the card, allowing the remaining copy to be clued in a "clean" way.
- So, what about the inverse? What about when players do **not** patiently wait for a discard and instead clue two or more 1's immediately? The player who receives the clue knows that out of all of the 1s, the most important 1 must be the chop card (or the card closest to chop). Otherwise, if it were a "bad" 1, then the team would do nothing and let it get discarded!
- It follows that players should always play 1's in the starting hand from right-to-left.

<br />

### 3 Bluffs

- In the Hyphen-ated convention framework, we extend the [Bluff](../Reference.md#bluffs) convention, allowing players to *Bluff* with [any 3 that they want](https://github.com/Zamiell/hanabi-conventions/blob/master/Reference.md#the-3-bluff). Why?
- Read the [story of 3 Bluffs](3_Bluffs.md), which is on a separate page.

<br />

### Discarding Trash From Left to Right

- In the Hyphen-ated convention framework, [we discard known trash from left-to-right](https://github.com/Zamiell/hanabi-conventions/blob/master/Reference.md#the-trash-order-chop-move). Why?
- Intuitively, you would expect that trash should be discarded from right-to-left, because that is the order that we normally discard cards in.
- However, this does not work well if you use the *Trash Finesse* convention and it gets deferred.
- For example, consider the following replay: https://hanabi.live/replay/16627#32
  - On turn 32, from xdragun's perspective, Zamiel's clue can be either a *Play Clue* on the purple 1 or a *Trash Finesse*.
  - On turn 34, from xdragun's perspective, it is possible that Libster deferred playing into the *Trash Finesse* in order to perform a *Bluff* of his own. Thus, the card is still in a superposition of these two possibilities.

| Convention Decision | Real Card Identity | Card Identity Assumed | xdragun will   | Outcome
| ------------------- | ------------------ | --------------------- | -------------- | -------
| discard leftmost    | purple 1           | purple 1              | discard slot 1 | *Gentleman's Discard* ✔
| discard leftmost    | purple 1           | trash 1               | discard slot 1 | attempted normal discard that turns into a *Gentleman's Discard* ✔
| discard leftmost    | trash 1            | purple 1              | discard slot 1 | attempted normal discard that turns into a *Gentleman's Discard* ✔
| discard leftmost    | trash 1            | trash 1               | discard slot 1 | normal discard, nothing special happens ✔
| discard rightmost   | purple 1           | purple 1              | discard slot 1 | *Gentleman's Discard* ✔
| discard rightmost   | purple 1           | trash 1               | discard slot 3 | attempted normal discard that turns into a *Trash Order Chop Move* on Libster ❌
| discard rightmost   | trash 1            | purple 1              | discard slot 1 | attempted normal discard that turns into a *Trash Order Chop Move* on Libster ❌
| discard rightmost   | trash 1            | trash 1               | discard slot 3 | normal discard, nothing special happens ✔

<br />

### Elimination Finesse Calling for Oldest Card

- In the Hyphen-ated convention framework, we arbitrarily decide that [*Elimination Finesses* call for the right-most card](https://github.com/Zamiell/hanabi-conventions/blob/master/Reference.md#the-elimination-finesse) instead of the left-most card. Why?
- Intuitively, you would expect the left-most card should be called for, since that is how *Finesses* normally work.
- However, consider the following 3-player game:
  - No red cards are played on the stacks.
  - Alice discards red 1 from slot 5 and writes *Elimination Notes* on her slot 2, slot 3, slot 4, and slot 5.
  - On Alice's first turn of the game, she drew the copy of red 1 that she has now discarded.
  - On Alice's second turn of the game, she drew the card that is now in slot 5.
  - On Alice's third turn of the game, she drew the card that is now in slot 4.
  - On Alice's fourth turn of the game, she drew the card that is now in slot 3.
  - On Alice's fifth turn of the game, she drew the card that is now in slot 2.
- In this example, we can consider which card is likeliest to be the second copy of red 1:
  - If the red 1 is in slot 2, then she had one copy of red 1 in her hand for 4 rounds without her teammates cluing it.
  - If the red 1 is in slot 5, then she had one copy of red 1 in her hand for 1 round without her teammates cluing it.
  - Therefore, the oldest card is the most likely to be the other copy of red 1, because it spent the most time being in the same hand as her other copy.
- Another reason for this convention is that it allows for more possible *Finesses* over time. If the convention was to play the newest card, then as the player keeps discarding, the card on *Elimination Finesse Position* stays the same, but if the convention is the play chop, it changes after each discard.
