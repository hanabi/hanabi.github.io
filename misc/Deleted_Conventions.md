# Deleted Conventions in the Hyphen-ated Framework

<br />

## Introduction

As we evolve our convention framework, sometimes we decide to delete existing "moves" or strategies in order to simplify things. And other times, new strategies that we come up with will conflict with older, existing strategies, so we must retire the older ones. This is a short lies of some retired strategies.

<br />

### The Promise Bluff

* Typically, we are only allowed to *Bluff* with cards that are 1-away (normal *Bluff*) or a 3 (*3 Bluff*) or a critical 4 (*Critical 4 Bluff*). However, *Bluffs* can also be performed with cards that are 2 away if the true intermediary card exists on someone's *Finesse Position*. Doing such a move is essentially like doing a *Bluff* and a *Finesse* at the same time, with one component of each. This is called a *Promise Bluff*, because it promises the true one-away card in addition to being a *Bluff*.
* *Promise Bluffs* take priority over *Double Bluffs*; the person after the first blind-player will assumes that it is a *Promise Bluff* since they will see the true connecting card. And since that player does not blind-play their *Finesse Position* card, the player with the promised card can know to mark their hand accordingly.
  * As the receiver of the clue that initiates a *Promise Bluff*, it may be ambiguous as to what exactly the connecting card is, if it exists. As long as there is at least one candidate on someone's *Finesse Position*, then you have to assume a *Promise Bluff* over a *Double Bluff*.
* *Promise Bluffs* also take priority over *Layered Finesses*. This isn't normally an issue, since it is rare to actually to perform a *Layered Finesse* from *Bluff Position*, but it is worth mentioning.
* This convention was deleted because it was too rare to be worth the additional cognitive overhead. It also prevents some *Double Bluffs* from occuring.

### The Double Gentleman's Discard

* Typically, when a player performs a *Gentleman's Discard*, it means that they knew **exactly** what the card was.
* However, in some situations, a card will have a clue on it, and a player will know that it is exactly one of two possible cards.
* If a player discards a card in this state, it promises **both** of the possible cards at the same time. Both cards will be on *Finesse Position*, similar to a normal *Gentleman's Discard*.
* This is called a *Double Gentleman's Discard* because it "gets" two cards instead of one.
* This convention was removed because it would lead to misplays after players made information-asymmetric reads.

### The Critical 4 Bluff

* Building on the *3 Bluffs* convention, it is ALSO possible for a card that initiates a *Bluff* to be a copy of any of the 4s that are critical (meaning that the other copy is in the discard pile or it is a black 4).
* This convention was deleted because it was hardly ever used and it increased complexity.

### The Reverse Misplay Chop Move

* Sometimes, a *Misplay Chop Move* will not immediately misplay because of circumstances similar to *Focus Inversion*, meaning that there is:
  * negative clues present on the card
  * historical / contextual information about the card (derived from moves that teammates performed earlier on in the game)
* In such a scenario, the clue will look like a *Reverse Finesse* and then next person will misplay their *Finesse Position* card.
* After the misplay, the person who received the clue is to treat it like a normal *Misplay Chop Move*, and chop move all the cards to the right of the clued card.
* This convention was deleted since it was never used.

### The Known Priority Bluff

* It is possible to perform a *Priority Bluff* that is gloablly-known to be a *Bluff*. For example:
  * Alice has a three known playable cards: red 1, blue 4, and blue 5.
  * Bob has a known red 2.
  * Alice is expected to play the red 1 into the red 2, so the red 1 has *Priority*.
  * Instead, Alice plays the blue 4.
  * Normally, Bob would think that this is a *Priority Finesse* on the blue 5. However, both he and Alice know that Alice has the blue 5.
  * This must be a *Known Priority Bluff*, so Bob plays his *Finesse Position* card as any other playable card.
* This convention was deleted since it conflicts with choosing the correct card to play in an end-game situation.

### Priority in Multi-Color Variants

* Multi-color variants can make finding out which card has *Priority* a little tricky, because sometimes players will know that a card is playable, but not know its exact identity.
* In these situations, players should always assume that the suit of their playable card is the left-most of the possible suits.
* For example:
  * Alice has a known playable red 2 and a known playable blue card that is either blue 1 or rainbow 3.
  * If the blue card is blue 1, then the blue card would have *Priority*, since it would be the lowest rank. But if the blue card is rainbow 3, then the red 2 would have *Priority*, since that would be the lowest rank.
  * However, since the blue stack is the to the left of the rainbow stack, Alice knows that for the purposes of calculating *Priority*, she has to assume that her blue card is the blue 1.
  * Thus, even if Alice really does have the rainbow 3, playing the red 2 will still cause a *Priority Finesse* to occur on the red 3.
* This convention was deleted with the rework to make *Priority* only apply to globally-known cards.

### The Speculation Bluff

* The *Speculation* mechanism in a *Speculation Finesse* can also be used to perform a *Speculation Bluff*, which is similar to a *Priority Bluff*.
* In the case where the card played was indeed the left-most of the possibilities, then this works exactly the same as a *Priority Bluff* - the next player will immediately blind-play their *Finesse Position* card and it will be immediately revealed that a *Bluff* has occured.
* Things become more complicated if the card played does not happen to be the left-most of the possibilities. The next player will mark their *Finesse Position* card in the same way as if a failed *Speculation Finesse* occured. However, the rest of the team will know that it was a *Speculation Bluff*, because they see a playable card in the *Finesse Position* of the next player.
* When this occurs, the bluffed player will mark their card with the wrong note. This is referred to as a *Speculation Mis-mark*.
* For example, in a 3-player game:
  * Blue 1 and red 1 are played on the stacks.
  * Alice has a known playable yellow 1. She also has a known playable 2 that could be either blue 2 or red 2.
  * Alice does not see the blue 3 or the red 3, but she does see a playable green 1 on Bob's *Finesse Position*.
  * Alice plays the 2 as a *Speculation Bluff*, hoping to get the green 1 "for free". However, it happens to be the red 2.
  * Bob knows that Alice was supposed to play the yellow 1, so this must have been a *Speculation Finesse*. Bob marks his *Finesse Position* card as blue 3. Then, Bob discards.
  * Alice and Cathy both mark the green 1 as a "blue 3 *Speculation Mis-mark*". At this point, they can either:
    * Clue green 1 directly to get it to play, which would reveal to everyone that a failed *Speculation Bluff* occured and immediately resyncronize information amoung the team.
    * Let the card sit there until the real blue 2 is played, after which the green 1 will play for free as blue 2. After this happens, the *Speculation Bluff* will be revealed.
* Note that to prevent confusion, we agree that it is illegal for players to perform a *Speculation Finesse* on a player who is two or more seats away if the next player has a playable card in *Finesse Position* that is not already gotten.

### 4 Stalls & Early 4's Chop Move & 4 Pull

* This convention only applies to the *Multi-Fives* variants.
* In the *Early Game*, since it is not possible to clue number 5, players cannot *5 Stall*. However, we agree that a number 4's clue in the early game indicates that the card is really a 5. Thus, it is possible to *4 Stall*. (A *4 Stall* interpretation takes precedence over a *Self-Finesse*.)
  * This is only legal if the clue **only** touches real 5's. In other words, players may not give a *4 Stall* if touches a mix of 4's and 5's.
  * Similar to a *5 Stall*, if there are other things to do and a *4 Stall* is given, then it transforms into a *Early 4's Chop Move* or a *4 Pull*.
  * Once the *Early Game* is over, players may not *4 Stall*.
