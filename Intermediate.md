# Intermediate Guide for the Hyphen-ated Group

* Have you already read the [beginner's guide](https://github.com/Zamiell/hanabi-conventions/blob/master/Beginner.md) and are looking to learn more? If not, go back and read that, and then wait a little while for that information to digest before coming back here.
* This guide will cover some extra moves that good Hanabi in our group use to squeeze out extra efficiency and solve tricky situations.

## Fix Clues

* 99% of clues are either *Save Clues* or *Play Clues*. The remaining 1% are *Fix Clues*, which are attempting to "fix" an impending misplay.
* *Fix Clues* are often needed when a duplicate card is touched. Cards are not normally duplicated (which follows from *Good Touch Principle*), but sometimes someone makes a mistake, or a sequence of particular cards makes duplicating necessary. Duplicate cards will lead to misplays, so it is the team's responsibility to fix the problem and intervene before this happens.

<img src="img/intermediate/fix_clue.png" height="300" />

* In the above screenshot:
  * Before the clue was given, Alice had an unknown purple card in her hand.
  * From *Good Touch Principle*, Alice concluded that her card must be purple 5, and had planned to play it as soon as possible.
  * Bob clues number 3 to Alice, which "fills in" the purple card and reveals that it is purple 3.
  * Since Alice was just about to play this card, Alice knows that this was a *Fix Clue* and that she can now safely discard the purple 3.

<img src="img/intermediate/fix_clue2.png" height="300" />

* **A clue cannot be a *Play Clue* and a *Fix Clue* at the same time.** If you receive a *Fix Clue* and it touches other ancillary cards, none of them are necessarily playable; the primary point of the clue is to fix the impending misplay.
* In the above screenshot:
  * Before the clue was given, Alice has an unknown 1 in her hand.
  * From *Good Touch Principle*, Alice concluded that her 1 must be green 1, and had planned to play it as soon as possible.
  * Bob clues blue to Alice, which "fills in" the 1 and reveals that it is blue 1. The blue clue also touches a blue card on slot 1.
  * In this situation, Alice might be tempted to think that this is a *Play Clue* on a blue 2 in slot 1, especially considering that the slot 1 card was the only brand new card introduced in the clue (and that the focus of a clue should always be on the brand new card introduced).
  * However, the fact that the blue clue "fixed" an impending misplay means that Bob may have had no choice but to clue blue, and he may not necessarily be trying to give a *Play Clue*.
  * Alice marks the blue card as either blue 2, blue 3, blue 4, or blue 5, and discards the blue 1.
* Usually a *Fix Clue* will "fill in" the card to explicitly make it known that the card is unplayable or duplicated. However, it is also possible to perform a *Fix Clue* just by cluing the card again. For example:
  * Alice clues Bob number 1 and it touches three 1's.
  * Bob successfully plays two 1's.
  * Before Bob can play the 3rd 1, Alice clues Bob number 1 again, and all the clue does is re-touch the remaining 1.
  * Now it is Bob's turn. Since he was going to play the 1 already without Alice doing anything, the clue must have some other meaning. Thus, it is a *Fix Clue*: the remaining 1 is bad, and Bob can safely discard it.
* Note that in general, giving a *Fix Clue* should wait until the card is actually in danger of being misplayed (like in the previous example). If a duplicated card is not in danger of being misplayed anytime soon, then players should defer giving the *Fix Clue* until later. This way, it gives the player a chance to figure out the duplication on their own, which can happen from time to time.

<br />

## Playing Multiple 1's

* If one or more 1's in your hand are clued, **you should assume that they are all playable**. (This only applies to 1's, and follows from *Good Touch Principle*.)
* We agree that playing 1's at the beginning of the game is a special case - you should always **play the 1's in your starting hand from oldest to newest**. (This is a special case because normally, *Play Clues* mean to play the left-most card.)
* However, freshly drawn 1's should always be played before any 1's that were present in the starting hand.

<img src="img/intermediate/playing_multiple_1s.png" height="150" />

* In the above screenshot, Alice clues 1's to Bob, which touches three 1s on slot 2, slot 3, and slot 4.
* From *Good Touch Principle*, Bob knows that he can now play all 3 of these cards.
* Bob should play the slot 4 card first, and then the slot 3 card, and then the slot 2 card.
* Now imagine:
  * Bob plays the slot 4 card. (He then draws a card, and all of the other cards in his hand slide over.)
  * Alice clues 1's to Bob, which touches a brand new card on slot 1 and re-touches the ones on slot 3 and slot 4.

<img src="img/intermediate/playing_multiple_1s2.png" height="150" />

* Bob knows that fresh 1's have priority, so he plays the slot 1 card next. After that, he should play the slot 4 card, and then the slot 3 card (e.g. resuming the play order from before).
