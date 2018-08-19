# Emtpy Clue Conventions for the Hyphen-ated Framework

<br />

## A Short History of Empty Clues

* In Hanabi, it is generally assumed that you will give clues that "touch" one or more cards in someone else's hand. But what if you want to give a clue that touches NO cards in the hand? We refer to this as an "empty" clue.
* Empty clues can be useful in that they give negative information to all other cards in the hand. This is especially useful in the "Rainbow" variant, which is played by expert players as an additional challenge. (In this variant, a 6th suit is added to the deck that is touched by all colors. Empty clues can be used to more easily disambiguate rainbow cards from non-rainbow cards.)
* Hanabi was first released in several European countries. In these initial versions of the game, it is reported that the printed rules do not specifically disallow empty clues, which implies that they are therefore legal.
* In later American releases of the game, it is reported that the printed rules explicitly disallow empty clues.
* Empty clues make it easier for players to get a perfect score and can encourage game-breaking strategies, such as the one described in the 2015 paper [*How to Make the Perfect Fireworks Display: Two Strategies for Hanabi*](https://sites.google.com/site/rmgpgrwc/research-papers/Hanabi_final.pdf?attredirects=0). This could be the reason that the rule was changed between releases.
* When I contacted Antoine Bauza (the creator of Hanabi) on Twitter, [he was neutral](https://twitter.com/Zamiel_SRL/status/975919901520130048) to the question of whether empty clues should be legal.
* I acknowledge that players should play the game in the way that they find the most fun. With that said, expert players should challenge themselves to not use empty clues. Utilizing empty clues is analogous to using a crutch - good players should be able to get a perfect score without having to resort to them.
* The online implementations of the game handle empty clues differently:
  * [Board Game Arena's implementation](https://en.boardgamearena.com/) does allow empty clues.
  * [Keldon's implemenation](http://keldon.net/hanabi/) does not allow empty clues.
  * [Hanabi Live's implementation](https://hanabi.live) follows Keldon's lead and disables empty clues by default. However, game creators can allow empty clues an as optional setting when creating a game.

<br />

## A Note on "Hat-Guessing"

* [Floris van Doorn](https://github.com/fpvandoorn/) created a convention framework called Hat-Guessing in June 2016. This framework is entirely separate from the Hyphen-ated convention framework and is covered in a [separate document](https://github.com/Zamiell/hanabi-conventions/blob/master/Hat_Guessing.md).
* In most Hanabi convention frameworks (including the Hyphen-ated framework), one clue causes one action to take place. In Hat-Guessing, multiple actions can be encoded into one clue by using [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic). This can be extremely efficient.

<br />

## Basic Description

* Separate from Hat-Guessing, it is also possible to play with a Hat-Guessing-like extension tacked on to the existing Hyphen-ated convention framework.
* If empty clues are legal, then they can be used as a means to encode multiple actions for the entire team in a manner identical to how Hat-Guessing works.
* When an empty clue is given, players should perform one round of of blind-plays (and/or blind-discards).
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
* Unlike Hat-Guessing, it does not matter which player recieves a clue. If it is possible to give the empty clue to more than one player, then the clue should be given to the player that would benefit the most from the negative information.
* Unlike Hat-Guessing, players do not have to blind-play their card immediately, because other players can generally derive what their action is from play priority (which is listed below). For example, if a player is playing into a *Finesse* already, it is often desirable to finish playing into that *Finesse* before moving on to the empty clue blind-play.

<br />

## Play Priority

* If a player has two or more playable cards, the priority is as follows:
  1) unclued & unknown cards
  2) clued & unknown cards (which includes cards from *Finesses*)
  3) clued & known cards
* If there two or more cards of the same category, then the priority is as follows:
  1) lowest rank
  2) left-most

<br />

## Clue Interpretation Tables

### 3-Player

| # mod 5  | action    | type of clue
| -------- | --------- | -------------
| 0 (5)    | play 5    | number 5 or purple
| 1 (6)    | play 1    | number 1 or blue
| 2 (7)    | play 2    | number 2 or green
| 3 (8)    | play 3    | number 3 or yellow
| 4 (9)    | play 4    | number 4 or red

<br />

### 4-Player and 5-Player

| # mod 5  | action          | type of clue
| -------- | --------------- | -------------
| 0 (5)    | clue or discard | number 5 or purple
| 1 (6)    | play 1          | number 1 or blue
| 2 (7)    | play 2          | number 2 or green
| 3 (8)    | play 3          | number 3 or yellow
| 4 (9)    | play 4          | number 4 or red

<br />

## Empty Finesses

* An empty clues must get at least two (new) blind-plays. Otherwise, it would not be worth resorting to an empty clue.
* Thus, if an empty clue is given that looks like it is only getting 1 (or 0) brand new cards, then the clue giver is intending something extra.
* In this situation, the clue is actually a 2-for-1 or better in the form of a *Finesse* - a card in your hand leads into someone else's hand.
* How do the first player know which card to play? They have to enumerate all of the possibilities until they find a sequence that satisfies the initial clue.

<br />

### Other Clue Interpretation Tables

### 5-Player (Alternate)

| # mod 6  | action          | type of clue
| -------- | --------------- | -------------
| 0        | clue or discard | green or yellow
| 1        | play 1          | number 1 or blue
| 2        | play 2          | number 2
| 3        | play 3          | number 3
| 4        | play 4          | number 4 or red
| 5        | chop move       | number 5 or purple

* The chop move in action 5 is only allowed if the player has:
  * a globally-known critical card on chop
  * no playable cards in hand
* The player receiving this action can clue or discard, just like action 0.
