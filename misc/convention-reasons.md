# Reasons for Specific H-Group Conventions

The main website lists all of our conventions. But it does not bother listing **why** we implemented a particular convention, because we want to make it as concise as possible. Since beginners sometimes like to know the **why** behind a convention, this page will go into a bit more detail.

<br />

## Chop-Focus

- In the H-Group convention framework, we play with _[Chop-Focus](https://hanabi.github.io/docs/beginner/single-card-focus/)_, which allows us to "get" playable cards that are on chop. Nearly all other Hanabi groups play with a simpler system (e.g. _Play Clues_ are always focused on the left-most card). Why do we have _Chop-Focus_?
- Most Hanabi groups independently come up with the _Finesse_ and the _Bluff_; they are considered to be the two core tools that allow players to be highly-efficient. In the H-Group, we use these tools as building blocks to compose even more advanced moves, such as the _Layered Finesse_ and the _3 Bluff_. These advanced _Finesses_ and _Bluffs_ allow us to get even more efficient.
- Separately, notice that the strength of the "play the left-most" convention is that it allows players to easily clue the newest card. Meaning that even if the clue "splashes" other unrelated cards in the hand, it will always work to "get" the newest card.
- But also notice that in the H-Group (and in any sufficiently advanced group of Hanabi players that does a lot of _Finesses_), we have a lot of good options to "get" a player's _Finesse Position_ card - it is uncommon to have to clue it directly. So this convention isn't helping much.
- _Finesses_ and _Bluffs_ can't "get" a player's chop card. In fact, there are no "moves" that get a player's chop card, at least in our convention framework. So rather than cluing cards on _Finesse Position_, what **is** common for us is to clue playable cards on chop before they get discarded.
- With all of this in mind, we can see that it makes much more sense to have clues be focused on the chop and let cards on _Finesse Position_ be _Finessed_ or _Bluffed_.

<br />

## Mandatory 5 Stalling

- In the H-Group convention framework, we require that the team collectively performs one _[5 Stall](https://hanabi.github.io/docs/level-2#the-5-stall-cluing-off-chop-5s)_. Why?
- _5 Stalls_ can be useful because they extend the _Early Game_. Extending the _Early Game_ is good, because it prevents bottom-deck losses.
- On the other hand, _5 Stalls_ are kind of a waste, as they don't accomplish much in-of-themselves. It is more efficient to only save 5's when they actually get on chop and _need_ to be saved.
- Thus, requiring one _5 Stall_ is a compromise between extending the _Early Game_ and not doing too many _5 Stalls_.

<br />

## Play Order of Multiple 1's

- In the H-Group convention framework, we [play 1's in the opening hand from right-to-left](https://hanabi.github.io/docs/level-3/#part-1---play-order-inversion-in-the-starting-hand). Why?
- First, notice that in Hanabi, when multiple cards are clued, players typically feel that playing the left-most (newest) card is "logical".
- For example, in a 2 player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice goes first.
  - Alice clues Bob about two red cards in slot 1 and slot 2.
  - Bob plays slot 1 as red 1.
- Why does this seem logical? The reason is that a big part of Hanabi is discarding and waiting patiently for playable cards to be drawn. When a new playable card is drawn, it is usually immediately given a clue. So interpreting _Play Clues_ as being focused on the card that was just drawn makes a lot of sense.
- This "left-most" logic applies for most of the game. But notice that this logic does not apply to the opening hand. A playable card in the opening hand is **equally likely to be in any slot at all**, since the deck was shuffled randomly. So that explains why it is not necessarily "correct" to play 1's in the starting hand from left-to-right. But is it actually beneficial to play the 1's from right-to-left instead?
- The H-Group closely follows _[Good Touch Principle](https://hanabi.github.io/docs/beginner/good-touch-principle)_. A common problem with _Good Touch Principle_ is when one player has two copies of the same card in their hand. Even if the card is playable right now (e.g. a red 1), cluing it would be a no-no, since it would be a _Bad Touch_.
- Instead, the typical strategy is to do nothing and patiently wait for that player to discard. Eventually, the player will discard the first copy of the card, allowing the remaining copy to be clued in a "clean" way.
- So, what about the inverse? What about when players do **not** patiently wait for a discard and instead clue two or more 1's immediately? The player who receives the clue knows that out of all of the 1s, the most important 1 must be the chop card (or the card closest to chop). Otherwise, if it were a "bad" 1, then the team would do nothing and let it get discarded!
- It follows that players should always play 1's in the starting hand from right-to-left.

<br />

## 3 Bluffs

- In the H-Group convention framework, we extend the _[Bluff](https://hanabi.github.io/docs/level-10#the-bluff)_ convention, allowing players to _Bluff_ with [any 3 that they want](https://hanabi.github.io/docs/level-12#the-3-bluff). Why?
- Read the [story of 3 Bluffs](3-bluffs.md), which is on a separate page.

<br />

## Discarding Trash From Left to Right

- In the H-Group convention framework, [we discard known-trash from left-to-right](https://hanabi.github.io/docs/level-6#the-trash-order-chop-move-tocm). Why?
- Intuitively, you would expect that trash should be discarded from right-to-left, because that is the order that we normally discard cards in.
- However, this does not work well if you use the _Trash Finesse_ convention and it gets deferred.
- For example, consider [this replay](https://hanabi.live/replay/16627#32):
  - On turn 32, from xdragun's perspective, Zamiel's clue can be either a _Play Clue_ (on a purple 1) or a _Trash Finesse_ (on a _Trash_ 1).
  - On turn 34, from xdragun's perspective, it is possible that Libster deferred playing into the _Trash Finesse_ in order to perform a _Bluff_ of his own. Thus, the card is still in a superposition of these two possibilities.

| Convention Decision | Real Card Identity | Card Identity Assumed | xdragun will   | Outcome                                                                          |
| ------------------- | ------------------ | --------------------- | -------------- | -------------------------------------------------------------------------------- |
| discard leftmost    | purple 1           | purple 1              | discard slot 1 | _Gentleman's Discard_ ✔️                                                         |
| discard leftmost    | purple 1           | trash 1               | discard slot 1 | attempted normal discard that turns into a _Gentleman's Discard_ ✔️              |
| discard leftmost    | trash 1            | purple 1              | discard slot 1 | attempted normal discard that turns into a _Gentleman's Discard_ ✔️              |
| discard leftmost    | trash 1            | trash 1               | discard slot 1 | normal discard, nothing special happens ✔️                                       |
| discard rightmost   | purple 1           | purple 1              | discard slot 1 | _Gentleman's Discard_ ✔️                                                         |
| discard rightmost   | purple 1           | trash 1               | discard slot 3 | attempted normal discard that turns into a _Trash Order Chop Move_ on Libster ❌ |
| discard rightmost   | trash 1            | purple 1              | discard slot 1 | attempted normal discard that turns into a _Trash Order Chop Move_ on Libster ❌ |
| discard rightmost   | trash 1            | trash 1               | discard slot 3 | normal discard, nothing special happens ✔️                                       |

<br />

## The Elimination Finesse Calling for Oldest Card

- In the H-Group convention framework, we arbitrarily decide that [_Elimination Finesses_ call for the right-most card](https://hanabi.github.io/docs/level-16#the-elimination-finesse) instead of the left-most card. Why?
- Intuitively, you would expect the left-most card should be called for, since that is how _Finesses_ normally work.
- However, consider the following 3-player game:
  - No red cards are played on the stacks.
  - Alice discards red 1 from slot 5 and writes _Elimination Notes_ on her slot 2, slot 3, slot 4, and slot 5.
  - On Alice's first turn of the game, she drew the copy of red 1 that she has now discarded.
  - On Alice's second turn of the game, she drew the card that is now in slot 5.
  - On Alice's third turn of the game, she drew the card that is now in slot 4.
  - On Alice's fourth turn of the game, she drew the card that is now in slot 3.
  - On Alice's fifth turn of the game, she drew the card that is now in slot 2.
- In this example, we can consider which card is likeliest to be the second copy of red 1:
  - If the red 1 is in slot 2, then she had one copy of red 1 in her hand for 4 rounds without her teammates cluing it.
  - If the red 1 is in slot 5, then she had one copy of red 1 in her hand for 1 round without her teammates cluing it.
  - Therefore, the oldest card is the most likely to be the other copy of red 1, because it spent the most time being in the same hand as her other copy.
- Another reason for this convention is that it allows for more possible _Finesses_ over time. If the convention was to play the newest card, then as the player keeps discarding, the card on _Elimination Finesse Position_ stays the same, but if the convention is the play chop, it changes after each discard.

## The 5-Pull

- In the H-Group convention framework, we play with the _[5 Pull](https://hanabi.github.io/docs/level-17/#the-5-pull)_, which is a move that causes a blind-play to the right of the 5. Where did this arbitrary convention come from?
- Right now, we play with a rule of "you cannot perform a _5 Stall_ if there is something else to do". However, this rule did not always exist. Before this rule was created, we would perform _5 Stalls_ when a 5 was on someone's _Finesse Position_, with the purpose of moving their _Finesse Position_ to the next slot. Then, another player would take advantage of this and perform a _Finesse_ or _Bluff_ to get the card on the next slot.
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Donald's hand is, from left to right: `blue 5, red 1, red 2, green 4`
  - Alice clues number 5 to Donald, touching the blue 5 as a _5 Stall_.
  - Bob sees that thanks to Alice's clue, he can now perform a _Finesse_ on the red 1 and the red 2, since they are now on _Finesse Position_.
  - Bob clues red to Cathy, touching a red 3 as a _Reverse Double Finesse_.
- We called this kind of clue a _5 Stall Setup Clue_, because it was "setting up" a _Finesse_ or _Bluff_ later on.
- In our group, _5 Stall Setup Clues_ were extremely common in the _Early Game_. They were so common that when a very early _5 Stall_ happened, players who received the _5 Stall_ could often predict that their new _Finesse Position_ must be some kind of playable card.
- One day, a player performed a _5 Stall Setup Clue_ on Libster, but the next player declined performing a _Finesse_ or _Bluff_ in order to do something better / something else. When it got to Libster's turn, Libster made the intelligent leap that there was no need to for anyone to _actually_ perform a _Finesse_ or a _Bluff_ on him - he could just simply play the card. He did, and it blind-played successfully.
- From that point on, we agreed that when a _5 Stall Setup Clue_ was given, there was no need to actually _Finesse_ or _Bluff_ the card - it should always just blind-play automatically. Then, we formalized the rules around it, and made some arbitrary extensions (like how the _5 Pull_ should still work the same way even if the 5 was not actually on _Finesse Position_).
