# Empty Clue Conventions for the Hyphen-ated Framework

<br />

## Table of Contents

1. [Clue Interpretation Tables](#clue-interpretation-tables)
2. [Empty Target Priority](#empty-target-priority)
3. [History](#history)
4. [Basic Description](#basic-description)
5. [Dealing with Edge Cases](#dealing-with-edge-cases)
6. [Alternate Clue Interpretation Tables](#alternate-clue-interpretation-tables)

## Clue Interpretation Tables

### 3-Player

| # mod 5   | action | type of clue
| --------- | ------ | -------------
| 0 (5, 10) | play 5 | number 5 or purple/black
| 1 (6, 11) | play 1 | number 1 or blue
| 2 (7, 12) | play 2 | number 2 or green
| 3 (8, 13) | play 3 | number 3 or yellow
| 4 (9, 14) | play 4 | number 4 or red

<br />

### 4-Player and 5-Player

| # mod 5   | action          | type of clue
| --------- | --------------- | -------------
| 0 (5, 10) | clue or discard | number 5 or purple/black
| 1 (6, 11) | play 1          | number 1 or blue
| 2 (7, 12) | play 2          | number 2 or green
| 3 (8, 13) | play 3          | number 3 or yellow
| 4 (9, 14) | play 4          | number 4 or red

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

* In Hanabi, it is generally assumed that you will give clues that "touch" one or more cards in someone else's hand. But what if you want to give a clue that touches NO cards in the hand? We refer to this as an "empty" clue.
* Empty clues can be useful in that they give negative information to all other cards in the hand. This is especially useful in the "Rainbow" variant, which is played by expert players as an additional challenge. (In this variant, a 6th suit is added to the deck that is touched by all colors. Empty clues can be used to more easily disambiguate rainbow cards from non-rainbow cards.)
* Hanabi was first released in several European countries. In these initial versions of the game, it is reported that the printed rules do not specifically disallow empty clues, which implies that they are therefore legal.
* In later American releases of the game, [the printed rules](https://github.com/Zamiell/hanabi-conventions/blob/master/other-conventions/Rules.txt) explicitly disallow empty clues.
* Empty clues make it easier for players to get a perfect score and can encourage game-breaking strategies, such as the one described in the 2015 paper [*How to Make the Perfect Fireworks Display: Two Strategies for Hanabi*](https://sites.google.com/site/rmgpgrwc/research-papers/Hanabi_final.pdf?attredirects=0). This could be the reason that the rule was changed between releases.
* When I contacted Antoine Bauza (the creator of Hanabi) on Twitter, [he was neutral](https://twitter.com/Zamiel_SRL/status/975919901520130048) to the question of whether empty clues should be legal.
* I acknowledge that players should play the game in the way that they find the most fun. With that said, expert players should challenge themselves to not use empty clues. Utilizing empty clues is analogous to using a crutch - good players should be able to get a perfect score without having to resort to them.
* The online implementations of the game handle empty clues differently:
  * [Board Game Arena's implementation](https://en.boardgamearena.com/) does allow empty clues.
  * [Keldon's implemenation](http://keldon.net/hanabi/) does not allow empty clues.
  * [Hanabi Live's implementation](https://hanabi.live) follows Keldon's lead and disables empty clues by default. However, game creators can allow empty clues an as optional setting when creating a game.

## Basic Description

* [Floris van Doorn](https://github.com/fpvandoorn/) created a convention framework called Hat-Guessing in June 2016. This framework is entirely separate from the Hyphen-ated convention framework and is covered in a [separate document](https://github.com/Zamiell/hanabi-conventions/blob/master/Hat_Guessing.md).
* In most Hanabi convention frameworks (including the Hyphen-ated framework), one clue causes one action to take place. In Hat-Guessing, multiple actions can be encoded into one clue by using [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic). This can be extremely efficient.
* Separate from Hat-Guessing, it is also possible to play with a Hat-Guessing-like extension tacked on to the existing Hyphen-ated convention framework.
* If empty clues are legal, then they can be used as a means to encode multiple actions for the entire team in a manner identical to how Hat-Guessing works.
* When an empty clue is given, players are told to blind-play a certain card in their hand.
* Thus:
  * In a 3-player game, it is possible to give an empty clue as a 2-for-1.
  * In a 4-player game, it is possible to give an empty clue as a 2-for-1 or a 3-for-1.
  * In a 5-player game, it is possible to give an empty clue as a 2-for-1, a 3-for-1, or a 4-for-1.
* Like Hat Guessing, players should generally blind-play their cards immediately, so that other players can figure out what their action is. (Since players can have duplicate cards in their hand, they cannot necessarily know for sure what action was assigned to a player who choses to defer.) With that said, the last player in a sequence can always defer to do something else, because no-one else's action depends on them.
* Unlike Hat-Guessing, it does not matter which player recieves a clue. If it is possible to give the empty clue to more than one player, then the clue should be given to player that would benefit the most from the negative information.

### Example

* For example, on the first turn of a 4-player game:
  * Alice goes first.
  * Bob has blue 1 on slot 1, Cathy has red 1 on slot 1, and Donald has green 1 on slot 1.
  * So, Alice wants all three of her teammates to play slot 1.
  * From the clue interpretation table below, we see that "play slot 1" is assigned a value of 1.
  * Alice adds up all of the actions: 1 + 1 + 1 = 3
  * Thus, Alice needs to convey "3" to the team. Bob does not have any 3's in his hand, so Alice clues number 3 to Bob, which is an empty clue.
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

### Giving Plays to Already Called Cards

* As per the empty target priority list above, if a player only has one playable card in their hand and it is already fully known, then you CANNOT assign them a "clue or discard" action. In this case, you would tell them to blind-play the slot of the card that they already have full knowledge about.
* However, if a player is *Finessed* for a card that will not yet be playable when it reaches their turn AND they have no other currently playable cards, then you MUST assign them a "clue or discard" action, since they cannot immediately play anything on their turn.

### Empty Clues After Finesses

* After a *Finesse* is given, one or more blind-plays must occur to "prove" what is going on. Another way of stating this is that when a *Finesse* occurs, the team becomes desynchronized, and then when the matching blind-play happens, the team becomes synchronized again.
* Giving an *Empty Clue* immediately after a *Finesse* is a BAD IDEA in most cases. This is because players lose the ability the "prove" that a *Finesse* happened, since the resulting blind-play will now be a result of the *Empty Clue* instead of the *Finesse*.
* Because of this, care has to be taken to only give an *Empty Clue* if there are no other *Finesses* going on, or if confusion will be minimal at the very least.

### Stacked Empty Clues

* With normal Hyphen-ated conventions, you must treat all *Play Clues* as *Delayed Play Clues*. For example, if you get clued about four 1's, and then are clued about one 2, then you must play all of the 1's before playing the 2.
* With empty clue blind-plays, this does NOT apply. You can generally immediately blind-play the cards indicated from an empty clue.
* However, as a special exception, you DO have to treat an empty clue blind-play as a *Delayed Play Clue* if you have one or more cards in your hand that are already known-playable.
* For example, in a 3-player game:
  * Alice clues Bob 1's, which touches two 1's.
  * Bob plays the right-most 1.
  * Cathy gives an empty clue of number 2, with the intent for Alice to blind-play slot 1 and Bob to blind-play slot 1.
  * Alice blind-plays her slot 1.
  * Bob knows that Cathy's clue is telling him to blind-play his slot 1. However, he must play all the known-playable cards in his hand first. So, he marks his slot 1 card as currently playable, and plays his other clued 1 first.
* Players should always assume a stacked empty clue interpretation over a re-target interpretation. (This follows from the empty target priority list above.)
* Note that a blind-play from an empty clue CANNOT be a *Delayed Play Clue* through someone else's hand (or a *Prompt* on someone else's card). **This is extremely important!**

### Jumping Ahead on a Stacked Empty Clue

* Normally, when a player receives an empty clue action, they will first play all of the playable cards in their own hand.
* However, players can and should jump ahead if they can determine that the empty clue blind-play is unrelated to their other cards.
* For example:
  * Alice has a known-playable red 2 on her slot 4.
  * Alice then receives an empty clue instructing her to blind-play slot 2.
  * Normally, before blind-playing, Alice would play the red 2 from slot 4 first, just in case the slot 2 card is red 3.
  * However, in this situation Alice has a negative red clue on her slot 2 card. Thus, she knows that it cannot be red 2.
  * Furthermore, Alice does not see a red 3 elsewhere in other people's hands, so she knows that she does not really need to play the red 2 right now.
  * So, Alice should "jump ahead" and blind-play the slot 2 card BEFORE playing the red 2 from slot 4.

### Stacked Empty Clues Through Other Player's Hands

* From the *Stacked Empty Clues* section, we know that stacking an empty clue target that relies on cards in other people's hands is illegal.
* An ambitious player might try to do this anyway, with the knowledge that the player will play an already known-playable card first, making the clue "just work". This should almost never be done for the following reasons:
  * The player might "jump ahead", as described in the previous section.
  * It may not be globally known which cards play into which other cards, so different players will assign different actions and everything will get messed up.
* The ONLY time it is possible to give an empty clue that involves other people's cards is when that player ALSO has a playable card that leads into the card AND the other connecting cards are globally known. For example, in a 3-player game:
  * Alice has a globally known blue 1 that is already clued.
  * Bob has a globally known blue 2 that is already clued.
  * Cathy is allowed to give an *Empty Clue* that gives a stacked play to blue 3 in Alice's hand, knowing that Alice must play the blue 1 first.
  * Bob knows for sure that Alice would assign a blind-play to the blue 2 in Alice's hand, so he can play his blue 2 into the blue 3 and nothing will get messed up.

### Ejection Disabled

* If *Empty Clues* are enabled for the game, then all conventions relating to *Ejection* are "turned off".
* Clues that would now trigger an *Ejection* instead are interpreted as an *Empty Clue*. (This is more efficient, since an *Ejection* is a 1-for-1 and an *Empty Clue* will always be better than this.)
* Care has to be taken to ONLY perform *Ejection*-style clues that are globally known as being *Ejection*-like. For example, often times giving an *Unknown Trash Ejection*-style clue will NOT be globally known, and will then lead to the wrong cards being played.

### Minimum Empty Clue Value Principle

* Normally, a clue is allowed to touch a single card as a 1-for-1. However, this does not apply to empty clues. Empty clues must be better than this.
* At a bare minimum, an empty clue must either:
  * get two brand new cards blind-played (as a 2-for-1)
  * get one brand new card blind-played (as a 1-for-1) and *Prompt* at least one card that would not have played otherwise

### Empty Finesses

* If an empty clue does NOT meet *Minimum Empty Clue Value Principle*, then this is quite strange. In this situation, the clue giver must be trying to communicate something extra, or else they would not bother to use an empty clue in the first place.
* In this situation, the clue IS actually meeting *Minimum Empty Clue Value Principle* in the form of a *Finesse* - a card in one player's hand hand leads into a card in the next player's hand.
* How does the first player know which card to play? They use the same play priority as above, but use it to find a one-away card.

### The Empty Bluff

* This convention only applies to 3-player games.
* When an empty clue is given that doesn't make sense, it is usually a signal for the other players to look one level deeper and look for an *Empty Finesse*.
* However, after the first blind-play, if the *Empty Finesse* is telling the 2nd player to play a strictly unplayable card, it must have been an *Empty Bluff*.
* *Empty Bluffs* do not meet *Empty Minimum Value Clue Principle*, but they can be useful to get a 1-for-1 on a card that is otherwise blocked. Alternatively, they can be used to get a 1-for-1 on a card while also telling the other player that a particular card is exactly 1-away from being playable.
* It is also possible to do a *Known Empty Bluff*, in which the blind-playing player knows that they are playing an unrelated card. In this situation, it would be the only way for the empty clue to make sense.

<br />

## Alternate Clue Interpretation Tables

### 5-Player (Florrat's Alternate Proposal)

| # mod 6    | action          | type of clue
| ---------- | --------------- | -------------
| 0 (6, 12)  | clue or discard | green or yellow
| 1 (7, 13)  | play 1          | number 1 or blue
| 2 (8, 14)  | play 2          | number 2
| 3 (9, 15)  | play 3          | number 3 or red
| 4 (10, 16) | play 4          | number 4 or purple
| 5 (11, 17) | chop move       | number 5 or black

* The chop move in action 5 is only allowed if the player has:
  * a globally-known critical card on chop
  * no playable cards in hand
* The player receiving this action can clue or discard, just like action 0.
