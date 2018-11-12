# Empty Clue Conventions for the Hyphen-ated Framework

<br />

## Table of Contents

1. [Clue Interpretation Tables](#clue-interpretation-tables)
2. [Empty Target Priority](#empty-target-priority)
3. [History](#history)
4. [Basic Description](#basic-description)
5. [Dealing with Edge Cases](#dealing-with-edge-cases)
6. [Special Empty Moves](#special-empty-moves)
7. [Alternate Clue Interpretation Tables](#alternate-clue-interpretation-tables)

<br />

## Clue Interpretation Tables

### 3-Player

| # mod 5   | action | type of clue
| --------- | ------ | -------------
| 0 (5, 10) | play 5 | number 5 or purple or black
| 1 (6, 11) | play 1 | number 1 or blue
| 2 (7, 12) | play 2 | number 2 or green
| 3 (8, 13) | play 3 | number 3 or yellow
| 4 (9, 14) | play 4 | number 4 or red

<br />

### 4-Player

| # mod 5   | action          | type of clue
| --------- | --------------- | -------------
| 0 (5, 10) | clue or discard | number 5 or purple or black
| 1 (6, 11) | play 1          | number 1 or blue
| 2 (7, 12) | play 2          | number 2 or green
| 3 (8, 13) | play 3          | number 3 or yellow
| 4 (9, 14) | play 4          | number 4 or red

<br />

### 5-Player (with 5 color clues)

| # mod 6    | action          | type of clue
| ---------- | --------------- | -------------
| 0 (6, 12)  | clue or discard | red or purple/black
| 1 (7, 13)  | play 1          | number 1 or blue
| 2 (8, 14)  | play 2          | number 2 or green
| 3 (9, 15)  | play 3          | number 3 or yellow
| 4 (10, 16) | play 4          | number 4
| 5 (11, 17) | chop move       | number 5

* The chop move action MUST be given to a player (and can only be given to a player) if BOTH of the following are true:
  * they have a globally-known critical card on chop (2's do not count as critical unless the other copy is in the discard pile)
  * they have no new playable cards in their hand to "get" (which includes non-*Prompted* cards that have clues on them already)
* The player receiving the chop move action can clue or discard, just like action 0.

<br />

## Empty Target Priority

* If a player has two or more playable cards, the priority is as follows:
  * #1 - unknown playable cards
    * #1a - unclued & completely unknown playable cards
    * #1b - unclued & unknown *Chop Moved* playable cards
    * #1c - clued & unknown playable cards (which would be an *Empty Prompt* on the card)
  * #2 - known playable cards
    * #2a - unclued & known playable cards (which would be confirming that they are indeed *Finessed*, for example)
    * #2b - clued & known playable cards (which would just be retouching the card, accomplishing nothing new)
* If there two or more cards of the same subcategory above, then the priority is as follows:
  * #1 - lowest rank (even if there is a 5)
  * #2 - left-most

<br />

## History

* In Hanabi, it is generally assumed that you will give clues that "touch" one or more cards in someone else's hand. But what if you want to give a clue that touches NO cards in the hand? We refer to this as an *Empty Clue*.
* *Empty Clues* can be useful in that they give negative information to all other cards in the hand. This is especially useful in the "Rainbow" variant, which is played by expert players as an additional challenge. (In this variant, a 6th suit is added to the deck that is touched by all colors. *Empty Clues* can be used to more easily disambiguate rainbow cards from non-rainbow cards.)
* Hanabi was first released in several European countries. In these initial versions of the game, the printed rules do not specifically disallow *Empty Clues*. The game creator Antoine Bauza clarified on his blog ([French](http://www.antoinebauza.fr/?p=880) - ([English translation](https://boardgamegeek.com/article/6177967#6177967))) that giving empty clues is allowed. 
* In the later American release of the game, [the printed rules](https://github.com/Zamiell/hanabi-conventions/blob/master/other-conventions/Rules.txt) make it a point to explicitly mention:

>IMPORTANT: The player must clearly point to the tiles which he is giving information about. (Thus saying "You have zero of something" is not allowed as you cannot point to anything.)

* *Empty Clues* make it easier for players to get a perfect score and can encourage game-breaking strategies, such as the one described in the 2015 paper [*How to Make the Perfect Fireworks Display: Two Strategies for Hanabi*](https://github.com/Zamiell/hanabi-conventions/raw/master/hanabi-papers/2015-02-01%20-%20How%20to%20Make%20the%20Perfect%20Fireworks%20Display.pdf). This could be the reason that the rule was changed between releases.
* When I contacted Antoine Bauza (the creator of Hanabi) on Twitter, [he was neutral](https://twitter.com/Zamiel_SRL/status/975919901520130048) to the question of whether *Empty Clues* should be legal.
* I acknowledge that players should play the game in the way that they find the most fun. With that said, expert players should challenge themselves to not use *Empty Clues*. Utilizing *Empty Clues* is analogous to using a crutch - good players should be able to get a perfect score without having to resort to them.
* The online implementations of the game handle *Empty Clues* differently:
  * [Board Game Arena's implementation](https://en.boardgamearena.com/) does allow *Empty Clues*.
  * [Keldon's implemenation](http://keldon.net/hanabi/) does not allow *Empty Clues*.
  * [Hanabi Live's implementation](https://hanabi.live) follows Keldon's lead and disables *Empty Clues* by default. However, game creators can allow *Empty Clues* an as optional setting when creating a game.

<br />

## Basic Description

* [Floris van Doorn](https://github.com/fpvandoorn/) created a convention framework called Hat-Guessing in June 2016. This framework is entirely separate from the Hyphen-ated convention framework and is covered in a [separate document](https://github.com/Zamiell/hanabi-conventions/blob/master/Hat_Guessing.md).
* In most Hanabi convention frameworks (including the Hyphen-ated framework), one clue causes one action to take place. In Hat-Guessing, multiple actions can be encoded into one clue by using [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic). This can be extremely efficient.
* Separate from Hat-Guessing, it is also possible to play with a Hat-Guessing-like extension tacked on to the existing Hyphen-ated convention framework.
* If *Empty Clues* are legal, then they can be used as a means to encode multiple actions for the entire team in a manner identical to how Hat-Guessing works.
* When an *Empty Clue* is given, players are told to blind-play a certain card in their hand.
* Thus:
  * In a 3-player game, it is possible to give an *Empty Clue* as a 2-for-1.
  * In a 4-player game, it is possible to give an *Empty Clue* as a 2-for-1 or a 3-for-1.
  * In a 5-player game, it is possible to give an *Empty Clue* as a 2-for-1, a 3-for-1, or a 4-for-1.
* Like Hat Guessing, players should generally blind-play their cards immediately, so that other players can figure out what their action is. (Since players can have duplicate cards in their hand, they cannot necessarily know for sure what action was assigned to a player who choses to defer.) With that said, the last player in a sequence can always defer to do something else, because no-one else's action depends on them.
* Unlike Hat-Guessing, it does not matter which player recieves a clue. If it is possible to give the *Empty Clue* to more than one player, then the clue should be given to player that would benefit the most from the negative information.

### Example

* For example, on the first turn of a 4-player game:
  * Alice goes first.
  * Bob has blue 1 on slot 1, Cathy has red 1 on slot 1, and Donald has green 1 on slot 1.
  * So, Alice wants all three of her teammates to play slot 1.
  * From the clue interpretation table below, we see that "play slot 1" is assigned a value of 1.
  * Alice adds up all of the actions: 1 + 1 + 1 = 3
  * Thus, Alice needs to convey "3" to the team. Bob does not have any 3's in his hand, so Alice clues number 3 to Bob, which is an *Empty Clue*.
  * Bob comes next and has to figure out which move that Alice has planned for him.
  * Bob knows that Alice encoded a value of 3.
  * Bob also can look ahead and see that Cathy will be assigned a value of 1 and Donald will be assigned a value of 1.
  * Bob calculates: 3 (Alice's clue) - 1 (Cathy's future action) - 1 (Donald's future action) = 1 (play slot 1)
  * Bob blind-plays slot 1.
  * Cathy performs a similar analysis that Bob does, but it is a bit easier for her. Instead of having to figure out the actions of two future players (Cathy + Donald), she only has to figure out the action of 1 player (Donald) in order to make her calculation.
  * Cathy calculates: 3 (Alice's clue) - 1 (Bob's past action) - 1 (Donald's future action) = 1 (play slot 1)
  * Cathy blind-plays slot 1.
  * Donald has the easiest time of all. He does not have to figure out anyone's action. He just has to plug in the values for what the two previous players did in order to determine that he is supposed to play slot 1.
  * Donald calculates: 3 (Alice's clue) - 1 (Bob's past action) - 1 (Cathy's past action) = 1 (play slot 1)
  * Donald blind-plays slot 1.

<br />

## Dealing with Edge Cases

### Empty Minimum Clue Value Principle

* Normally, a clue is allowed to touch a single card as a 1-for-1. However, this does not apply to *Empty Clues*. *Empty Clues* must be better than this.
* At a bare minimum, an *Empty Clue* must get one brand new card and do one other useful thing. In other words, an empty clue can:
  * get two brand new cards blind-played (as a 2-for-1)
  * get one brand new card blind-played (as a 1-for-1) and *Prompt* at least one card that would not have played otherwise
  * get one brand new card blind-played (as a 1-for-1) and *Chop Move* a player
* For example, it would be illegal for an empty clue to be:
  * *Prompting* three separate cards
  * *Chop Moving* three separate cards
* If a player is occupied and still does an *Empty Clue*, then the minimum value needed increases - the clue must get at least two new cards blind-played and do one other useful thing.

### Giving Plays to Already Called Cards (Good)

* As per the empty target priority list above, if a player only has one playable card in their hand and it is already fully known, then you CANNOT assign them a 0 action (a.k.a. a clue or discard" action). In this case, you would tell them to blind-play the slot of the card that they already have full knowledge about.
* However, if a player is *Finessed* for a card that will not yet be playable when it reaches their turn AND they have no other currently playable cards, then you MUST assign them a "clue or discard" action, since they cannot immediately play anything on their turn.

### Giving an Empty Clue After a Finesse (Bad)

* After a *Finesse* is given, one or more blind-plays must occur to "prove" what is going on. Another way of stating this is that when a *Finesse* occurs, the team becomes desynchronized, and then when the blind-play happens, the team becomes synchronized again.
* Giving an *Empty Clue* immediately after a *Finesse* is a BAD IDEA in most cases. This is because players lose the ability the "prove" that a *Finesse* happened, since the resulting blind-play will now be a result of the *Empty Clue* instead of the *Finesse*.
* Because of this, care has to be taken to only give an *Empty Clue* if there are no other *Finesses* going on, or if confusion will be minimal at the very least.

### Final Freedom

* When you are told to blind-play a card from an *Empty Clue*, you must do it immediately - you can't mess around with giving a clue, even if it is a really good clue. This is because someone else will assume that they have the same card that you have, and will try to play it.
* However, as an exception, the final player to take an action in the *Empty Clue* chain is not required to play immediately - they can stop to give a clue if they want. This is because the empty target is safely locked in and there is no-one after them that will get confused.

### Stacked Empty Clues (Through Their Own Hand)

* With normal Hyphen-ated conventions, you must treat all *Play Clues* as *Delayed Play Clues*. For example, if you get clued about four 1's, and then are clued about one 2, then you must play all four of the 1's before playing the 2.
* With blind-plays from *Empty Clues*, this does NOT apply. You must immediately blind-play the cards indicated from an *Empty Clue* (unless you are the final person in the chain).
* However, as a special exception, you DO have to treat an *Empty Clue* blind-play as a *Delayed Play Clue* if you have one or more cards in your hand that are already known-playable. Even if you can determine that the blind-play from the is unrelated to the clued cards, you **still have to play all of the clued cards first**.
* For this reason, you can use an *Empty Clue* to get a red 2 to play from the same hand that has a known red 1.
* For example, in a 3-player game:
  * Alice clues Bob 1's, which touches two 1's.
  * Bob plays the right-most 1.
  * Cathy gives an empty clue of number 2, with the intent for Alice to blind-play slot 1 and Bob to blind-play slot 1.
  * Alice blind-plays her slot 1.
  * Bob knows that Cathy's clue is telling him to blind-play his slot 1. However, he must play all the known-playable cards in his hand first. So, he marks his slot 1 card as currently playable, and plays his other clued 1 first.
* Players should always assume a *Stacked Empty Clue* interpretation over a re-target interpretation. (This follows from the empty target priority list above.)

### Delayed Empty Clues (Through Other Player's Hands)

* Normally, a stacked play action from an *Empty Clue* should not be related to anyone else's hand. This is because it may not be globally known which cards play into which other cards, so different players will assign different actions and everything will get messed up.
* However, it is possible to give a *Empty Clue* as a *Delayed Play Clue* through someone else's hand if all of the connecting cards are globally known playable. This way, the information never becomes desyncronized. For example, in a 3-player game:
  * Alice has a globally known blue 1 that is already clued.
  * Bob has a globally known blue 2 that is already clued.
  * Cathy is allowed to give an *Empty Clue* that gives a stacked play to blue 3 in Alice's hand, knowing that Alice must play the blue 1 first.
  * Bob knows for sure that Alice would assign a blind-play to the blue 2 in Alice's hand, so he can play his blue 2 into the blue 3 and nothing will get messed up.

### Empty Clue Misplay Agreement

* Sometimes, a player is given an *Empty Clue* action and plays the wrong card, causing a misplay.
* In this situation, even though they might be able to go back into the in-game replay and figure out their mistake, everyone agrees that the original card that was supposed to be "gotten" from the *Empty Clue* needs to be re-clued.

<br />

## Special Empty Moves

### Empty Ejection (Ejection Disabled)

* If *Empty Clues* are enabled for the game, then it is agreed that all conventions relating to *Ejection* are "turned off".
* Clues that would trigger an *Ejection* are instead interpreted as an *Empty Clue*. (This is more efficient, since an *Ejection* is a 1-for-1 and an *Empty Clue* will always be better than this.)
* Care has to be taken to ONLY perform *Ejection*-style clues that are globally known as being *Ejection*-like. For example, often times giving an *Unknown Trash Ejection*-style clue will NOT be globally known, and will then lead to the wrong cards being played.

### The Final Freedom Certain Finesse

* If a player uses their *Final Freedom* to perform a *Finesse*, then they could be potentially duplicating the card that they are supposed to be blind-playing from their own hand.
* Thus, all *Finesses* performed in this situation are to be treated as a *Certain Finesse*.

### The Empty Finesse

* If an *Empty Clue* does NOT meet *Minimum Empty Clue Value Principle*, then this is quite strange. In this situation, the clue giver must be trying to communicate something extra, or else they would not bother to use an *Empty Clue* in the first place.
* In this situation, the clue IS actually meeting *Minimum Empty Clue Value Principle* in the form of a *Finesse* - a card in one player's hand hand leads into a card in the next player's hand.
* How does the first player know which card to play? They use the same play priority as above, but use it to find a one-away card.

### The Empty Bluff

* This convention only applies to 3-player games.
* When an *Empty Clue* is given that doesn't make sense, it is usually a signal for the other players to look one level deeper and look for an *Empty Finesse*.
* However, after the first blind-play, if the *Empty Finesse* is telling the 2nd player to play a strictly unplayable card, it must have been an *Empty Bluff*.
* *Empty Bluffs* do not meet *Empty Minimum Value Clue Principle*, but they can be useful to get a 1-for-1 on a card that is otherwise blocked. Alternatively, they can be used to get a 1-for-1 on a card while also telling the other player that a particular card is exactly 1-away from being playable.
* It is also possible to do a *Known Empty Bluff*, in which the blind-playing player knows that they are playing an unrelated card. In this situation, it would be the only way for the *Empty Clue* to make sense.

<br />

## Alternate Clue Interpretation Tables

### 5-Player (with 6 color clues)

| # mod 6    | action          | type of clue
| ---------- | --------------- | -------------
| 0 (6, 12)  | clue or discard | purple or black
| 1 (7, 13)  | play 1          | number 1 or blue
| 2 (8, 14)  | play 2          | number 2 or green
| 3 (9, 15)  | play 3          | number 3 or yellow
| 4 (10, 16) | play 4          | number 4 or red
| 5 (11, 17) | chop move       | number 5

<br />

### 4-Player or 5-Player (with 4 color clues)

| # mod 5   | action          | type of clue
| --------- | --------------- | -------------
| 0 (5, 10) | clue or discard | number 5
| 1 (6, 11) | play 1          | number 1 or color 1
| 2 (7, 12) | play 2          | number 2 or color 2
| 3 (8, 13) | play 3          | number 3 or color 3
| 4 (9, 14) | play 4          | number 4 or color 4

<br />

### 3-Player (with 4 color clues)

| # mod 5   | action          | type of clue
| --------- | --------------- | -------------
| 0 (5, 10) | play 5          | number 5
| 1 (6, 11) | play 1          | number 1 or color 1
| 2 (7, 12) | play 2          | number 2 or color 2
| 3 (8, 13) | play 3          | number 3 or color 3
| 4 (9, 14) | play 4          | number 4 or color 4
