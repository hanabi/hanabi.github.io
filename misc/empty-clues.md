# Empty Clue Conventions for the H-Group Framework

## Clue Interpretation Tables

### 3-Player

| # mod 5   | action | type of clue                |
| --------- | ------ | --------------------------- |
| 0 (5, 10) | play 5 | number 5 or purple or black |
| 1 (6, 11) | play 1 | number 1 or blue            |
| 2 (7, 12) | play 2 | number 2 or green           |
| 3 (8, 13) | play 3 | number 3 or yellow          |
| 4 (9, 14) | play 4 | number 4 or red             |

### 4-Player

| # mod 5   | action          | type of clue                |
| --------- | --------------- | --------------------------- |
| 0 (5, 10) | clue or discard | number 5 or purple or black |
| 1 (6, 11) | play 1          | number 1 or blue            |
| 2 (7, 12) | play 2          | number 2 or green           |
| 3 (8, 13) | play 3          | number 3 or yellow          |
| 4 (9, 14) | play 4          | number 4 or red             |

### 5-Player / 6-Player (with 5 color clues)

| # mod 6    | action          | type of clue        |
| ---------- | --------------- | ------------------- |
| 0 (6, 12)  | clue or discard | red or purple/black |
| 1 (7, 13)  | play 1          | number 1 or blue    |
| 2 (8, 14)  | play 2          | number 2 or green   |
| 3 (9, 15)  | play 3          | number 3 or yellow  |
| 4 (10, 16) | play 4          | number 4            |
| 5 (11, 17) | chop move       | number 5            |

- The chop move action **must** be given to a player (and can only be given to a player) if **both** of the following are true:
  - they have a globally-known critical card on chop (2's do not count as critical unless the other copy is in the discard pile)
  - they have no new playable cards in their hand to "get" (which includes non-_Prompted_ cards that have clues on them already)
- The player receiving the chop move action can clue or discard, just like action 0.

### 5-Player / 6 Player (with 3 color clues)

| # mod 5   | action          | type of clue       |
| --------- | --------------- | ------------------ |
| 0 (5, 10) | clue or discard | number 5           |
| 1 (6, 11) | play 1          | number 1 or blue   |
| 2 (7, 12) | play 2          | number 2 or green  |
| 3 (8, 13) | play 3          | number 3 or yellow |
| 4 (9, 14) | play 4          | number 4           |

## Empty Target Priority

- If a player has two or more playable cards, the priority is as follows:
  - #1 - unknown playable cards
    - #1a - unclued & completely unknown playable cards
    - #1b - unclued & unknown _Chop Moved_ playable cards
    - #1c - clued & unknown playable cards (which would be an _Empty Prompt_ on the card)
  - #2 - known playable cards
    - #2a - unclued & known playable cards (which would be confirming that they are indeed _Finessed_, for example)
    - #2b - clued & known playable cards (which would just be retouching the card, accomplishing nothing new)
- If there two or more cards of the same subcategory above, then the priority is as follows:
  - #1 - unique (e.g. black 1)
  - #2 - lowest rank
  - #3 - left-most
- If playing with 5-players, the _Chop Move_ action has a priority of #1d.

## History

- In Hanabi, it is generally assumed that you will give clues that "touch" one or more cards in someone else's hand. But what if you want to give a clue that touches NO cards in the hand? We refer to this as an _Empty Clue_.
- _Empty Clues_ can be useful for a variety of reasons. In the _Board Game Arena_ convention framework, _Empty Clues_ are used as a "stall" clue, clearly communicating to the team the nothing is currently playable. Furthermore, _Empty Clues_ can also be used to give useful negative information to an entire hand. This is especially useful in the "Rainbow" variant, which is played by expert players as an additional challenge. (In this variant, a 6th suit is added to the deck that is touched by all colors. _Empty Clues_ can be used to more easily disambiguate rainbow cards from non-rainbow cards.)
- Hanabi was first released in several European countries. In the initial German version of the game (and perhaps others), [the printed rules](https://www.brettspiele-report.de/images/h/hanabi/Spielanleitung-Hanabi.pdf) specifically allowed _Empty Clues_ (page 3, section A, #2). Furthermore, Antoine Bauza (the creator of Hanabi) [clarified on his blog](http://www.antoinebauza.fr/?p=880) that giving _Empty Clues_ is allowed. (An [English translation](https://boardgamegeek.com/article/6177967#6177967) of this post is also available.)
- In the later American release of the deluxe (tiles) version of the game, [the printed rules](rules.md) make it a point to explicitly mention:

> IMPORTANT: The player must clearly point to the tiles which he is giving information about. (Thus saying "You have zero of something" is not allowed as you cannot point to anything.)

- _Empty Clues_ make it easier for players to get a perfect score and can encourage game-breaking strategies, such as the one described in the 2015 paper [_How to Make the Perfect Fireworks Display: Two Strategies for Hanabi_](https://quuxplusone.github.io/blog/images/how-to-make-the-perfect-fireworks-display.pdf). This could be the reason that the rule was changed between releases.
- When I contacted Antoine Bauza (the creator of Hanabi) on Twitter, [he was neutral](https://twitter.com/Zamiel_SRL/status/975919901520130048) to the question of whether _Empty Clues_ should be legal.
- I acknowledge that players should play the game in the way that they find the most fun. With that said, expert players should challenge themselves to not use _Empty Clues_. Utilizing _Empty Clues_ is analogous to using a crutch - good players should be able to get a perfect score without having to resort to them.
- The online implementations of the game handle _Empty Clues_ differently:
  - [Board Game Arena's implementation](https://en.boardgamearena.com/) does allow _Empty Clues_.
  - Keldon's implementation (which is now offline) does not allow _Empty Clues_.
  - [Hanab Live's implementation](https://hanab.live) follows Keldon's lead and disables _Empty Clues_ by default. However, game creators can allow _Empty Clues_ an as optional setting when creating a game.

## Basic Description

- [Floris van Doorn](https://github.com/fpvandoorn/) created a convention framework called Hat-Guessing in June 2016. This framework is entirely separate from the main H-Group convention framework and is covered in a [separate document](hat-guessing.md).
- In most Hanabi convention frameworks (including the H-Group framework), one clue causes one action to take place. In Hat-Guessing, multiple actions can be encoded into one clue by using [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic). This can be extremely efficient.
- Separate from Hat-Guessing, it is also possible to play with a Hat-Guessing-like extension tacked on to the existing H-Group convention framework.
- If _Empty Clues_ are legal, then they can be used as a means to encode multiple actions for the entire team in a manner identical to how Hat-Guessing works.
- When an _Empty Clue_ is given, players are told to blind-play a certain card in their hand.
- Thus:
  - In a 3-player game, it is possible to give an _Empty Clue_ as a 2-for-1.
  - In a 4-player game, it is possible to give an _Empty Clue_ as a 2-for-1 or a 3-for-1.
  - In a 5-player game, it is possible to give an _Empty Clue_ as a 2-for-1, a 3-for-1, or a 4-for-1.
- Like Hat Guessing, players should generally blind-play their cards immediately, so that other players can figure out what their action is. (Since players can have duplicate cards in their hand, they cannot necessarily know for sure what action was assigned to a player who choses to defer.) With that said, the last player in a sequence can always defer to do something else, because no-one else's action depends on them.
- Unlike Hat-Guessing, it does not matter which player receives a clue. If it is possible to give the _Empty Clue_ to more than one player, then the clue should be given to player that would benefit the most from the negative information.

### Example

- For example, on the first turn of a 4-player game:
  - Alice goes first.
  - Bob has blue 1 on slot 1, Cathy has red 1 on slot 1, and Donald has green 1 on slot 1.
  - So, Alice wants all three of her teammates to play slot 1.
  - From the clue interpretation table above, we see that "play slot 1" is assigned a value of 1.
  - Alice adds up all of the actions: 1 + 1 + 1 = 3
  - Thus, Alice needs to convey "3" to the team. Bob does not have any 3's in his hand, so Alice clues number 3 to Bob, which is an _Empty Clue_. (Additionally, if Bob does not have any yellow cards his hand, Alice could equally give a yellow color clue, because yellow also means "3".)
  - Bob comes next and has to figure out which move that Alice has planned for him.
  - Bob knows that Alice encoded a value of 3.
  - Bob also can look ahead and see that Cathy will be assigned a value of 1 and Donald will be assigned a value of 1.
  - Bob calculates: 3 (Alice's clue) - 1 (Cathy's future action) - 1 (Donald's future action) = 1 (play slot 1)
  - Bob blind-plays slot 1.
  - Cathy performs a similar analysis that Bob does, but it is a bit easier for her. Instead of having to figure out the actions of two future players (Cathy + Donald), she only has to figure out the action of 1 player (Donald) in order to make her calculation.
  - Cathy calculates: 3 (Alice's clue) - 1 (Bob's past action) - 1 (Donald's future action) = 1 (play slot 1)
  - Cathy blind-plays slot 1.
  - Donald has the easiest time of all. He does not have to figure out anyone's action. He just has to plug in the values for what the two previous players did in order to determine that he is supposed to play slot 1.
  - Donald calculates: 3 (Alice's clue) - 1 (Bob's past action) - 1 (Cathy's past action) = 1 (play slot 1)
  - Donald blind-plays slot 1.

## Dealing with Edge Cases

### Empty Clue Planning

- When mapping out the targets for their _Empty Clue_, players must plan out the line in the opposite order that the cards will play.
- For example, in a 4-player game:
  - It is the first turn of the game.
  - Alice wants to give an empty clue.
  - Alice must work from right to left, so she first decides an action for Donald, then Cathy, and then Bob.
- Planning must be done in this way in case two or more players have the same playable card in their hand.

### Empty Minimum Clue Value Principle

- Normally, a clue is allowed to touch a single card as a 1-for-1. However, this does not apply to _Empty Clues_. _Empty Clues_ must be better than this.
- At a bare minimum, an _Empty Clue_ must get one new card and do one other useful thing. In other words, an empty clue can:
  - get two new cards blind-played (as a 2-for-1)
  - get one new card blind-played (as a 1-for-1) and _Prompt_ at least one card that would not have played otherwise
  - get one new card blind-played (as a 1-for-1) and _Chop Move_ a player
- For example, it would be illegal for an empty clue to be:
  - _Prompting_ three separate cards
  - _Chop Moving_ three separate cards
- If a player is _Occupied_ (meaning that they are supposed to be playing a card) and they do an _Empty Clue_ anyway, then the minimum value needed increases - the clue must get at least two new cards blind-played and do one other useful thing.

### Giving Plays to Already Called Cards (Good)

- As per the empty target priority list above, if a player only has one playable card in their hand and it is already fully known, then you **cannot** assign them a 0 action (a.k.a. a "clue or discard" action). In this case, you would tell them to blind-play the slot of the card that they already have full knowledge about.
- However, if a player is _Finessed_ for a card that will not yet be playable when it reaches their turn AND they have no other currently playable cards, then you MUST assign them a "clue or discard" action, since they cannot immediately play anything on their turn.

### Giving an Empty Clue After a Finesse (Bad)

- After a _Finesse_ is given, one or more blind-plays must occur to "prove" what is going on. Another way of stating this is that when a _Finesse_ occurs, the team becomes desynchronized, and then when the blind-play happens, the team becomes synchronized again.
- Giving an _Empty Clue_ immediately after a _Finesse_ is a **bad idea** in most cases. This is because players lose the ability the "prove" that a _Finesse_ happened, since the resulting blind-play will now be a result of the _Empty Clue_ instead of the _Finesse_.
- Because of this, care has to be taken to only give an _Empty Clue_ if there are no other _Finesses_ going on (or if confusion will be minimal).

### Final Freedom

- When you are told to blind-play a card from an _Empty Clue_, you must do it immediately - you can't mess around with giving a clue, even if it is a really good clue. This is because someone else will assume that they have the same card that you have, and will try to play it.
- However, as an exception, the final player to take an action in the _Empty Clue_ chain is not required to play immediately - they can stop to give a clue if they want. This is because the empty target is safely locked in and there is no-one after them that will get confused.

### Queued Empty Clues (Through Their Own Hand)

- With normal H-Group conventions, you must treat all _Play Clues_ as _Delayed Play Clues_. For example, if you get clued about four 1's, and then are clued about one 2, then you must play all four of the 1's before playing the 2.
- With blind-plays from _Empty Clues_, this does NOT apply. You must immediately blind-play the cards indicated from an _Empty Clue_ (unless you are the final person in the chain).
- However, as a special exception, you DO have to treat an _Empty Clue_ blind-play as a _Delayed Play Clue_ if you have one or more cards in your hand that are already known-playable. Even if you can determine that the blind-play from the is unrelated to the clued cards, you **still have to play all of the clued cards first**.
- For this reason, you can use an _Empty Clue_ to get a red 2 to play from the same hand that has a known red 1.
- For example, in a 3-player game:
  - Alice clues Bob 1's, which touches two 1's.
  - Bob plays the right-most 1.
  - Cathy gives an empty clue of number 2, with the intent for Alice to blind-play slot 1 and Bob to blind-play slot 1.
  - Alice blind-plays her slot 1.
  - Bob knows that Cathy's clue is telling him to blind-play his slot 1. However, he must play all the known-playable cards in his hand first. So, he marks his slot 1 card as currently playable, and plays his other clued 1 first.
- Players should always assume a _Queued Empty Clue_ interpretation over a re-target interpretation. (This follows from the empty target priority list above.)

### Delayed Empty Clues (Through Other Player's Hands)

- Normally, a queued play action from an _Empty Clue_ should not be related to anyone else's hand. This is because it may not be globally known which cards play into which other cards, so different players will assign different actions and everything will get messed up.
- However, it is possible to give a _Empty Clue_ as a _Delayed Play Clue_ through someone else's hand if all of the connecting cards are globally known playable. This way, the information never becomes desynchronized. For example, in a 3-player game:
  - Bob has a globally known blue 1 that is already clued.
  - Cathy has a globally known blue 2 that is already clued.
  - Bob has an unclued blue 3 that is ready to be _Play Clued_ in slot 1.
  - Cathy has an unclued red 1 that is ready to be _Play Clued_ in slot 1.
  - Alice gives an _Empty Clue_ with a value of 2, which is a queued play to blue 3 in Bob's hand and a queued play to red 1 in Cathy's hand. (1 + 1 = 2)
  - Usually, this type of thing is illegal, because the blue 2 that leads into the blue 3 is not played yet and is in someone else's hand. However, since the whole team knows that the blue 3 is playable, everything will work out.
  - First, Bob is able to see that Alice's clue is probably "getting" the red 1 in Cathy's slot 1, so it must also be getting his slot 1. However, he must first play all the known-playable cards in his hand, so he plays the blue 1.
  - Second, Cathy knows that Alice's clue is probably "getting" the blue 3 in Bob's hand, so it must also be getting her slot 1. However, she must first play all the known-playable cards in her hand, so she plays the blue 2.
  - Alice discards.
  - Now that all of his other playable cards are played, Bob can blind-play the _Empty Clue_ target and successfully plays the blue 3 from slot 1.
  - Now that all of her other playable cards are played, Cathy can blind-play the _Empty Clue_ target and successfully plays the red 1 from slot 1.

### Empty Clue Planning with Queued Plays

- When planning an _Empty Clue_, the "right-to-left" rule does not always work if there are one or more players with known playable cards. The reason is somewhat complicated - players will assume that an _Empty Clue_ is giving a _Queued Play_ to the player that already has playable cards to play.
- In this situation, instead of planning from right-to-left, you must plan by starting with the player with the most playable cards, and then the player with the second most playable cards, and so forth. If there is a tie, then you start with the right-most player.
- For example, in a 4-player game:
  - Alice is planning her _Empty Clue_.
  - Bob has a known red 1 and a known red 2 to play.
  - Donald has a known blue 1 to play.
  - Alice would normally plan her line with Donald, Cathy, and then Bob (right-to-left).
  - However, since players have some known playable cards, this won't work.
  - Alice instead plans the line with Bob, Donald, and then Cathy.

### Empty Clue Misplay Agreement

- Sometimes, a player is given an _Empty Clue_ action and plays the wrong card, causing a misplay.
- In this situation, even though they might be able to go back into the in-game replay and figure out their mistake, everyone agrees that the original card that was supposed to be "gotten" from the _Empty Clue_ needs to be re-clued.

## Special Empty Moves

### The Final Freedom Certain Finesse

- If a player uses their _Final Freedom_ to perform a _Finesse_, then they could be potentially duplicating the card that they are supposed to be blind-playing from their own hand.
- Thus, all _Finesses_ performed in this situation are to be treated as a _Certain Finesse_.

### The Empty Finesse

- If an _Empty Clue_ does NOT meet _Minimum Empty Clue Value Principle_, then this is quite strange. In this situation, the clue giver must be trying to communicate something extra, or else they would not bother to use an _Empty Clue_ in the first place.
- In this situation, the clue IS actually meeting _Minimum Empty Clue Value Principle_ in the form of a _Finesse_ - a card in one player's hand leads into a card in the next player's hand.
- How does the first player know which card to play? They use the same play priority as above, but use it to find a one-away card.

### The Empty Bluff

- This convention only applies to 3-player games.
- When an _Empty Clue_ is given that doesn't make sense, it is usually a signal for the other players to look one level deeper and look for an _Empty Finesse_.
- However, after the first blind-play, if the _Empty Finesse_ is telling the 2nd player to play a strictly unplayable card, it must have been an _Empty Bluff_.
- _Empty Bluffs_ do not meet _Empty Minimum Value Clue Principle_, but they can be useful to get a 1-for-1 on a card that is otherwise blocked. Alternatively, they can be used to get a 1-for-1 on a card while also telling the other player that a particular card is exactly 1-away from being playable.
- It is also possible to do a _Known Empty Bluff_, in which the blind-playing player knows that they are playing an unrelated card. In this situation, it would be the only way for the _Empty Clue_ to make sense.

## Alternate Clue Interpretation Tables

### 5-Player (with 6 color clues)

| # mod 6    | action          | type of clue       |
| ---------- | --------------- | ------------------ |
| 0 (6, 12)  | clue or discard | purple or black    |
| 1 (7, 13)  | play 1          | number 1 or blue   |
| 2 (8, 14)  | play 2          | number 2 or green  |
| 3 (9, 15)  | play 3          | number 3 or yellow |
| 4 (10, 16) | play 4          | number 4 or red    |
| 5 (11, 17) | chop move       | number 5           |

### 4-Player or 5-Player (with 4 color clues)

| # mod 5   | action          | type of clue        |
| --------- | --------------- | ------------------- |
| 0 (5, 10) | clue or discard | number 5            |
| 1 (6, 11) | play 1          | number 1 or color 1 |
| 2 (7, 12) | play 2          | number 2 or color 2 |
| 3 (8, 13) | play 3          | number 3 or color 3 |
| 4 (9, 14) | play 4          | number 4 or color 4 |

### 3-Player (with 4 color clues)

| # mod 5   | action | type of clue        |
| --------- | ------ | ------------------- |
| 0 (5, 10) | play 5 | number 5            |
| 1 (6, 11) | play 1 | number 1 or color 1 |
| 2 (7, 12) | play 2 | number 2 or color 2 |
| 3 (8, 13) | play 3 | number 3 or color 3 |
| 4 (9, 14) | play 4 | number 4 or color 4 |
