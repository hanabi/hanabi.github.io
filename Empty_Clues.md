# Empty Clue Conventions for the Hyphen-ated Framework

<br />

## Quick Links

* [Clue Interpretation Tables](https://github.com/Zamiell/hanabi-conventions/blob/master/Empty_Clues.md#clue-interpretation-tables)
* [Empty Target Priority](https://github.com/Zamiell/hanabi-conventions/blob/master/Empty_Clues.md#empty-target-priority)

<br />

## Introduction

### A Short History of Empty Clues

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

### Basic Description

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
* Unlike Hat-Guessing, it does not matter which player recieves a clue. If it is possible to give the empty clue to more than one player, then the clue should be given to the right-most player.

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

### Empty Target Priority

* If a player has two or more playable cards, the priority is as follows:
  * #1 - unknown playable cards
    * #1a - unclued & completely unknown playable cards
    * #1b - unclued & unknown *Chop Moved* playable cards
    * #1c - clued & unknown playable cards (which would be an *Empty Prompt* on the card)
  * #2 - known playable cards
    * #2a - unclued & known playable cards (which would be confirming that they are indeed *Finessed*, for example)
    * #2b - clued & known playable cards (which would just be retouching the card, accomplishing nothing new)
* If there two or more cards of the same subcategory above, then the priority is as follows:
  * #1 - lowest rank
  * #2 - left-most

### Giving Plays to Already Called Cards

* As per the empty clue play priority list above, if a player only has one playable card in their hand and it is already fully known, then you CANNOT assign them a "clue or discard" action. In this case, you would tell them to blind-play the slot of the card that they already have full knowledge about.
* However, if a player is *Finessed* for a card that is currently unplayable AND they have no other current playable cards, then you MUST assign them a "clue or discard" action, since they cannot immediately play anything on their turn.

### Stacked Empty Clues - Through Known Clued Cards

* With normal Hyphen-ated conventions, you must treat all *Play Clues* as *Delayed Play Clues*. For example, if you get clued about four 1's, and then are clued about one 2, then you must play all of the 1's before playing the 2.
* With empty clue blind-plays, this does NOT apply. You can generally immediately blind-play the cards indicated from an empty clue.
* However, as a special exception, you DO have to treat an empty clue blind-play as a *Delayed Play Clue* if you have one or more cards in your hand that are already known-playable.
* For example, in a 3-player game:
  * Alice clues Bob 1's, which touches two 1's.
  * Bob plays the right-most 1.
  * Cathy gives an empty clue of number 2, with the intent for Alice to blind-play slot 1 and Bob to blind-play slot 1.
  * Alice blind-plays her slot 1.
  * Bob knows that Cathy's clue is telling him to blind-play his slot 1. However, he must play all the known-playable cards in his hand first. So, he marks his slot 1 card as currently playable, and plays his other clued 1 first.
* Note that a blind-play from an empty clue CANNOT be a *Delayed Play Clue* through someone else's hand (or a *Prompt* on someone else's card).
* Players should always assume a stacked empty clue interpretation over a re-target interpretation. (This follows from the play priority list above.)

### Stacked Empty Clues - Through Already-Finessed Cards

* From the previous section, we know that players should play all the known-playable cards in his hand first before playing an empty clue blind-play. As you would expect, this includes blind-plays from previous *Finesses*.
* For example, in a 3-player game:
  * All the 1's are played on the stacks.
  * Alice clues number 3 to Cathy, which touches a red 3.
  * Bob interprets this as a *Finesse*, and blind-plays slot 1. Instead of the red 2, it is the blue 2, and Bob now knows that it was a *Clandestine Finesse* instead of a normal *Finesse*.
  * Cathy sees that it could be a *Clandestine Finesse*, so she discards.
  * Alice gives an empty clue of number 2, with the intent to have Bob blind-play slot 1 and Cathy to blind-play slot 1.
  * Bob sees that Cathy has a playable slot 1 card - the yellow 2. Her action must be to play slot 1.
  * Thus, Bob knows that his action is to also play slot 1 (because 1 + 1 = 2).
  * However, Bob has to unravel the layer first before blind-playing the empty clue card, so he plays slot 2 and it is the red 2, as expected.
  * Cathy sees that the only other playable card in Bob's hand besides the red 2 was his slot 1 card, the red 4. His action must be to blind play slot 1.
  * Thus, Cathy knows that her action is to also blind-play slot 1.
  * However, Cathy has to first play the red 3 into Bob's red 4, so she plays the red 3 (with the intent to blind-play her slot 1 card later).
  * Alice discards.
  * Bob blind-plays the red 4.
  * Cathy blind-plays the yellow 2.

### Minimum Empty Clue Value Principle

* Normally, a clue is allowed to touch a single card as a 1-for-1. However, this does not apply to empty clues. Empty clues must be better than this.
* At a bare minimum, an empty clue must either:
  * get two brand new cards blind-played (as a 2-for-1)
  * get one brand new card blind-played (as a 1-for-1) and *Prompt* at least one card that would not have played otherwise

### Empty Finesses

* If an empty clue does NOT meet *Minimum Empty Clue Value Principle*, then this is quite strange. In this situation, the clue giver must be trying to communicate something extra, or else they would not bother to use an empty clue in the first place.
* In this situation, the clue IS actually meeting *Minimum Empty Clue Value Principle* in the form of a *Finesse* - a card in one player's hand hand leads into a card in the next player's hand.
* How does the first player know which card to play? They use the same play priority as above, but use it to find a one-away card.

### The Empty Double-Play (Symmetric Version)

* If an empty clue is given, and that exact empty clue could have been given to three or more players, then the fact that the clue giver had a choice is globally known.
* In this situation, the empty clue should be given to the left-most player. (This roughly follows from *Left-Most Playable Principle*.)
* If the empty clue is given to the right-most player instead, then the clue giver must be trying to communicate something extra.
* This means that the first person assigned with a play action is stacked with another play action on their *Finesse Position*.
* In this situation, the first empty clue card must be blind-played first. Thus, it is possible to stack a *Play Clue* on a currently unplayable card that will be playable on the next round.

### The Empty Double Play (Asymmetric Version)

* It is also possible to perform an *Empty Double Play* when the empty clue is possible to give to exactly two players. However, in this case, it would not be globally known: the 2nd player (who is not clued) would not see that the clue giver had a choice.
* In this case, every player should keep in mind that this player "in the dark" may *Play Clue* the *Double Played* card. (And this would not cause a *Double Play Ejection*.)
* Furthermore, the player "in the dark" may duplicate the *Double Played* card in someone else's hand. (And this would not cause an *Unknown Trash* ejection.) The clue reciever should *Sarcastic Discard* the card if possible.
* However, it will not always be possible to *Sarcastic Discard*, especially if the duplication is in the empty clue giver's hand. Thus, the asymmetric *Empty Double Play* is quite dangerous - it has a decent chance of leading to a misplay. It should only to be done in special circumstances.

<br />

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

## Other Clue Interpretation Tables

### 5-Player (Florrat's Alternate Proposal)

| # mod 6    | action          | type of clue
| ---------- | --------------- | -------------
| 0 (6, 12)  | clue or discard | green or yellow
| 1 (7, 13)  | play 1          | number 1 or blue
| 2 (8, 14)  | play 2          | number 2
| 3 (9, 15)  | play 3          | number 3
| 4 (10, 16) | play 4          | number 4 or red
| 5 (11, 17) | chop move       | number 5 or purple/black

* The chop move in action 5 is only allowed if the player has:
  * a globally-known critical card on chop
  * no playable cards in hand
* The player receiving this action can clue or discard, just like action 0.
