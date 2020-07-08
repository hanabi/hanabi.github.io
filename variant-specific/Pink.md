# Specific Conventions for Pink

These conventions apply to any variant with a pink (touched by all ranks) suit.

<br />

## Table of Contents

1. [Basic Pink Principles](#basic-pink-principles)
2. [Finesses and Other Special Moves](#finesses-and-other-special-moves)
3. [Edge Cases](#edge-cases)

<br />

## Basic Pink Principles

### Good Touch Principle

* Due to the nature of pink cards being touched by a lot of different kinds of clues, they are a bit easier to duplicate than a normal suit, or even a rainbow suit.
* However, just like any other suit, *Good Touch Principle* still applies to pink cards. Players should:
  1) Do their best to not duplicate pink cards.
  2) Assume by default that the remaining pink cards in their hand are "good".

### Pink Tempo Clues

* If a player gives a *Tempo Clue* to a pink card, it is never a *Tempo Clue Chop Move*, even if it only gets one card played.
* This is because it is fairly valuable to get pink cards out of the hand as soon as possible in case blocking cards are drawn.

### The Pink Prompt Rank Exception

* Normally, *Prompts* take precedence over *Finesses*. This means that if a card in a player's hand has one or more positive clues on it that "match", they should never blind-play their *Finesse Position* and instead play their left-most clued card.
* This rule does **not** apply to potential pink cards that only have a single rank clue on them (and the rank on them does not match the rank of the promised card). In this situation, players should prefer playing their *Finesse Position* instead of playing the clued card.
* For example, in a 3-player game:
  * All of the 2's are played on the stacks.
  * Alice clues pink to Cathy, touching a pink 4 on slot 1 as a *Play Clue*.
  * Bob's slot 2 card and slot 3 card have a single number 4 clue of them (and no other clues).
  * Bob knows that he is promised the pink 3. Technically, the pink 3 could be his slot 2 card, and *Prompts* normally take precedence over *Finesses*.
  * However, Bob also knows that *Prompts* do not apply to pink cards with a rank mismatch. This is currently the case for him since he is promised a 3 and his clued card has a number 4 clue on it.
  * Thus, Bob plays his *Finesse Position* card as pink 3.

### Pink Promise

* When a pink card is focused by a rank clue, the number must match the true identity of the card. In other words, the focused card is *Promised* to match the number of the rank clue.
* *Pink Promise* applies to all clues: *Play Clues*, *Save Clues*, *5 Stalls*, etc.
* For example, in a 3-player game:
  * Cathy has a pink 2 on chop followed by a blue 5.
  * Alice and Bob need to give a *Save Clue* to both the pink 2 and the blue 5.
  * If Alice gave a number 5 clue, it would save both of the cards in one fell swoop, since a number 5 clue would touch the pink 2.
  * However, doing that would break the *Pink Promise* convention, since once Cathy learns that her slot 5 card is a pink card, she will always assume that it is a pink 5.
  * Thus, Alice gives a number 2 clue as a *2 Save* on the pink 2, and then Bob clues a number 5 clue as a *5 Save* on the blue 5.

### The Pink Play Clue Lie (with multiple 1's)

* Players can violate *Pink Promise* with a number 1's clue if all of the cards will successfully play.
* For example, in a 3-player game:
  * It is the first turn and nothing is played on the stacks.
  * Alice clues number 1 to Bob, touching a red 1 on slot 1, a pink 3 on slot 2, a pink 2 on slot 3, and a pink 1 on slot 4.
  * Bob knows that from *Good Touch Principle*, all of his 1's are good, so now he can play all of them from oldest to newest.
  * Bob plays the pink 1 from slot 4.
  * On his next turn, Bob plays the pink 2 from slot 3. Bob is immediately surprised that this is not a real 1, but he knows that this kind of thing is allowed and that he should continue to play his remaining 1's.
  * On his next turn, Bob plays the pink 3 from slot 2. Bob is again surprised that this is not a real 1, but he knows that this kind of thing is allowed and that he should continue to play his final 1.
  * On his next turn, Bob plays the red 1 from slot 1.

### The Pink Play Clue Lie (with a mismatched *Play Clue* that touches other cards)

* Players can also violate *Pink Promise* if they are giving a *Play Clue* and the lie will be resolved when the player who is clued plays their focused card.
* For example, in a 3-player game:
  * Pink 3 and red 2 are played on the stacks.
  * Alice clues number 3 to Cathy, touching a pink 4 on slot 1 and a blue 3 on slot 2.
  * Bob discards.
  * Cathy plays the card on slot 1, thinking that it is a red 3. It is actually the pink 4.
  * Cathy knows that Alice broke *Pink Promise* and that she was lied to, but that it was a *Pink Play Clue Lie*. Cathy knows that Alice likely did things this way because she wanted a 2-for-1 (to pick up some useful 3 "for free") instead of just a 1-for-1 on just the pink 4.

### No Order Chop Moves

* At the beginning of the game, when you get a clue that touches multiple 1's, you are supposed to play them from right-to-left (in exactly in the same way that you would in a no variant game).
* Players are not allowed to *Order Chop Move*, because they could be misplaying a pink card. (Also see the following two sections, which are related.)

### The Pink Fix Clue (on 1's)

* Normally, when someone receives a number 1 clue that touches a bunch of 1's, they will play all of those 1's from oldest to newest.
* If a subsequent clue "fills in" one of the 1s to be a pink card, then the player will **not** play that card anymore (because it could just be any pink card in the game).
* For example, in a 3-player game:
  * Alice clues number 1 to Bob, touching three 1's in slot 1, slot 2, and slot 3.
  * Bob plays slot 3 and it is a red 1.
  * Cathy discards.
  * Alice discards.
  * Bob plays slot 2, and it is a blue 1.
  * Cathy discards.
  * Alice clues number 5 to Bob, touching a 5 on his chop as a *5 Save*. This also "fills in" the 1 to be a pink card.
  * Bob knows that the pink card in his hand *could* be a pink 1. However, it could also be any other pink card in the game. Bob knows that when 1's are filled in to be pink, they should not be played anymore.
* *Pink Fix Clues* do not necessarily have to be performed "just in time". In other words, **any** rank clue that "fills in" a pink card should stop it from being played, even if the clue was early.

### The Pink Fix Promise (PFP)

* First, see the section on the *[Pink Fix Clue (on 1's)](#the-pink-fix-clue-on-1s)*
* Normally, *Pink Promise* only applies when a pink card is the focus of a clue. However, as an exception, *Pink Promise* also applies to a *Pink Fix Clue* that stops a card marked with a number 1 clue from misplaying.
* For example, in a 3-player game:
  * Alice clues number 1 to Bob, touching three 1's in slot 1, slot 2, and slot 3.
  * Bob plays slot 3 and it is a red 1.
  * Cathy discards.
  * Alice discards.
  * Bob plays slot 2, and it is a blue 1.
  * Cathy discards.
  * Alice clues number 3 to Bob, touching a 3 on his chop. This also "fills in" the 1 to be a pink card.
  * Bob knows that the pink card in his hand could technically be a pink 1. However, Bob also knows that when 1's are filled in to be pink, they should not be played anymore.
  * Thus, Bob knows that the point of Alice's clue was a *Fix Clue* to stop him from playing the pink card. The 3 on his chop could be any 3 in the game. Furthermore, Bob knows that *Pink Promise* applies to this *Fix Clue* and that his pink card should be a pink 3.
* As an exception, *Pink Fix Promise* does **not** apply when the *Fix Clue* is a number 2 clue or a number 5 clue and the newly introduced card was on chop. An example of this can be found in the previous section, "Pink Fix Clues (on 1's)". (In this example, Bob's pink card is not necessarily a pink 5; it can be any pink card in the game.)

### Remaining 1's After All the 1's Have Been Played

* Often times, in the beginning of the game, a player will receives a number 1 clue that touches a bunch of 1's. In these situations, they will play them all from oldest to newest.
* If all of the 1's have been successfully played on the stacks and a player still has 1's remaining in their hand, they should mark them as useful pink cards and hold on to them for later.
  * In other words, they should **not** assume that that they have the next playable pink card (e.g. pink 2).

### Pink Choice Tempo Clue

* When one or more pink cards are retouched with a pink clue, the interpretation should be as normal: play the cards from left to right as a *Tempo Clue* (or a *Double Tempo Clue*).
* When one or more pink cards are retouched with a rank clue, and there are no "new" cards introduced (or, if the only "new" cards introduced are trash), then extra information can be conveyed by what rank is chosen.
* The rank chosen should correspond to the slot that they should play.
* For example, in a 3-player game:
  * Bob has two pink cards clued in his hand on slot 3 and slot 4. He does not know the rank of either card.
  * Alice clues number 4 to Bob, which touches both pink cards and nothing else.
  * Bob knows that a rank 4 clue means to play slot 4, so he plays his right-most pink card.
  * Bob holds on to the other pink card for later, knowing that the *Pink Choice Tempo Clue* only "gets" one card.

### Pink Fix Clues (in general)

* Normally, if a clue re-touches pink cards that are known to be pink, it is treated as a *Pink Choice Tempo Clue* or a *Pink Choice Finesse*.
* However, what if the indicated slot is not a pink card? That does not make sense, as *Pink Choice* is typically only used to communicate a play about a pink card.
* In this situation, it must not be a *Play Clue* at all. Instead, it is a *Fix Clue* - the rank of the left-most pink card must match the clue.
* For example, in a 3-player game:
  * All of the 3's are played on the stacks.
  * Bob has a known pink card on slot 4 and a known pink card on slot 5.
  * Alice clues number 3 to Bob, which re-touches the pink cards on slots 4 and 5.
  * Normally, Bob would interpret this as a *Pink Choice Tempo Clue* and play his slot 3 card. However, his slot 3 card is completely unclued.
  * Bob instead knows that this must be a *Pink Fix Clue* and that his left-most pink card (on slot 4) must be exactly the pink 3.
  * Bob discards his slot 4 card as pink 3.

<br />

## Finesses and Other Special Moves

### The Pink Choice Finesse

* The concept of *Pink Choice* can also be used to initiate a *Finesse* on a pink card.
* For example, in a 3-player game:
  * No cards are played on the stacks.
  * Cathy has a clued pink 3 in slot 3 and a clued pink 2 in slot 4. She does not know the rank of either card.
  * Alice clues number 4 to Cathy, which touches both pink cards and nothing else.
  * Bob knows that a number 4 clue means to play slot 4, so the pink 2 must be playable right now. Bob plays his *Finesse Position* card as pink 1.
  * Cathy plays the pink 2 from slot 4.

### The Bubblegum Prompt & The Bubblegum Finesse

* Normally, when players give a clue to a pink card with a number, they exactly match the number of the card in order to satisfy *Pink Promise*.
* Some common situations where players violate *Pink Promise* are covered in the two different *Pink Play Clue Lie* sections above.
* Rarely, it is also possible to lie about the rank of a pink card that is not yet playable. Doing so communicates the slot number of where the connecting card is.
* For example, in a 4-player game:
  * All the 1's are played on the stacks
  * Donald has a pink 3 in his hand clued with pink. He does not know the rank of the card.
  * Alice clues Donald number 4, which only touches the pink 3.
  * Bob knows that since the pink 3 is the focus of the clue, it must be playable right now. However, if this was a normal *Finesse* (and Bob had a pink 2 on his *Finesse Position*), then Alice would have used a pink clue or a number 3 clue (to match the real rank of the card, satisfying *Pink Promise*).
  * Bob knows that since Alice did not do either of these things, she must be trying to communicate something extra. This must be a *Bubblegum Finesse*, indicating which slot the pink 2 is in.
  * Bob sees that Cathy has the pink 2 in slot 4. Thus, he knows that the *Bubblegum Finesse* is not on him. Bob discards.
  * Cathy goes through the same steps as Bob. Cathy does not see the pink 2 anywhere else, so she knows that the *Bubblegum Finesse* is on her. Cathy blind-plays pink 2 from slot 4.
  * Donald knows that since Cathy played his slot 4 card, this was a *Bubblegum Finesse*, and that his pink card must be the matching card. Donald plays the pink 3.
* *Bubblegum Finesses* can only be used to get pink cards.

### The Bubblegum Bluff

* Similar to a *Bubblegum Finesse*, it is also possible to perform a *Bubblegum Bluff*.
* For example, in a 3-player game:
  * It is the first turn and nothing is played on the stacks.
  * Alice clues number 3 to Cathy, touching a pink 2 on slot 5.
  * Bob knows that Alice is violating *Pink Promise*. This must mean that he is supposed to play his slot 3 card.
  * Bob blind-plays slot 3 and it is a red 1.
  * Cathy knows that if this was a *3 Bluff*, then Bob would have played his *Finesse Position*. So it cannot be a *3 Bluff*.
  * Thus, Cathy knows that this must be a *Bubblegum* clue. Since blue 3 is not a pink card and Alice was in *Bluff Seat* for Bob, this must be a *Bubblegum Bluff*.
  * Cathy marks her slot 5 card as the one-away-from-playable pink card, the pink 2.
* *Bubblegum Bluffs* can only be performed on non-pink cards; otherwise, it will look like a *Double Finesse* with one part *Bubblegum Finesse* and one part normal *Finesse*.
* Note that it is impossible to *3 Bluff* and *Bubblegum Bluff* at the same time.

### Trash Pushes in Pink

* When a *Trash Push* happens in a normal variant, if more than one card is touched, then all of the touched cards are known to be trash.
* When a *Trash Push* happens with a rank clue in a variant with a pink suit, if more than one card is touched, it is possible that only the card on chop was trash and that the other cards touched are useful / critical pink cards.
* In this situation, after blind-playing the *Trash Pushed* card, the player should first discard the card that initiated the *Trash Push* (the oldest card) and then hold on to the other touched cards.

### Pink Positional Clues

* Towards the end of the game, a player may have multiple pink cards in their hand, with one of them being playable. If the playable pink card is in between other pink cards, it can be difficult to "get" the card to play.
* In cases where a number clue would be nonsensical, it is an indication to the player with two or more pink cards of which slot to play.
* For example, in a 3-player game:
  * The pink 4 is played and all of the other 3's are played.
  * Bob's hand is completely unclued.
  * Alice clues Bob number 2, touching slot 1, slot 2, and slot 3.
  * Bob knows that since all of the 3's are already played, this might be a *Trash Chop Move*. If this is the case, slot 1 is focused, and he should discard that card, and then chop move slot 4 and slot 5.
  * However, Bob also knows that it is near the end of the game and there are no cards left to chop move, so this interpretation does not make much sense.
  * Thus, Bob knows that this must be a *Positional Clue*, and he plays his slot 2 card as the pink 5.
* *Positional Clues* are different from *Pink Choice Tempo Clues* in that they can touch brand new cards. (*Pink Choice Tempo Clues* only re-touch known pink cards.) For this reason, *Positional Clues* can typically only be done at the end of the game when the clue is not likely to be interpreted as anything else.

### The Bubblegum Wraparound

* When players violate *Pink Promise* on an unplayable pink card, it usually indicates a *Bubblegum Prompt* or a *Bubblegum Finesse* (with the rank corresponding to the slot number to play).
* In 4-player and 5-player games, there are only 4 cards in the hand. If a player does a *Bubblegum Finesse* with a 5, then that would be nonsensical, since there is no slot 5.
* Similarly, in a 6-player game, there are only 3 cards in the hand. If a player does a *Bubblegum Finesse* with a 4, then that would be nonsensical, since there is no slot 4.
* In this situation, it should "wraparound" to slot 1, communicating that the first slot is playable.
* This kind of thing is useful in some edge-case scenarios (e.g. helping satisfy *Good Touch Principle* in variants with a light pink suit).

### The Bubblegum Slide

* If a *Bubblegum Prompt* or a *Bubblegum Finesse* is telling a player to play a card in a slot that has negative pink, then that is nonsensical.
* In this situation, if there is no other possible interpretation for the clue other than a *Bubblegum Prompt* or a *Bubblegum Finesse*, and it is unlikely for the cluer to be making a mistake, then the target slot should "slide" to the right.
* If the slot immediately to the right is also impossible to be a pink card, then it should continue to slide right until it finds a pink card, wrapping around to the other side of the hand if necessary.

<br />

## Edge Cases

### Pink Promise with a 5 Stall

* When a player performs a *5 Stall*, it is clearly a type of *Save Clue*. But if two or more 5's are touched as part of the clue, the focus of the clue is unclear.
* We define the focus of the clue to be the specific 5 that is closest to the chop.
* Thus, when a player knows for sure that a number 5 clue indicates a *5 Stall*, the *Pink Promise* convention only applies to the 5 that is closest to the chop.
* For example, in a 3-player game:
  * The variant is "Pink (6 Suits)".
  * It is the *Early Game* and all of the *Play Clues* and *Save Clues* have been extinguished.
  * Bob has a completely unclued hand.
  * Alice clues number 5 to Bob, touching two 5's on slot 1 and slot 2.
  * Bob knows that this is a *5 Stall*. Bob knows that the clue is either focused on slot 1 or slot 2.
  * Because of the "Pink Promise with a 5 Stall" convention, Bob knows that since this clue is focused on slot 2.
  * Thus, *Pink Promise* applies to this card, so he marks slot 2 as a 5.
  * Later on in the game, another rank clue "fills in" Bob's slot 2 card to be a pink card. From *Pink Promise*, Bob knows that it must be exactly the pink 5.

### Pink Promise with a 5's Chop Move

* When a player performs a *5's Chop Move*, it is clearly a type of *Save Clue*. But if two or more 5's are touched as part of the clue, the focus of the clue is unclear.
* We define the focus of the clue to be the specific 5 that is one-away from the chop.
* Thus, when a player knows for sure that a number 5 clue indicates a *5's Chop Move*, the *Pink Promise* convention only applies to the 5 that is one-away from the chop.
* For example, in a 3-player game:
  * The variant is "Pink (6 Suits)".
  * It is the middle of the game and no 5's are yet playable.
  * Bob has a completely unclued hand.
  * Alice clues number 5 to Bob, touching two 5's on slot 1 and slot 4.
  * Bob knows that this is a *5's Chop Move*, and marks his slot 5 card as being *Chop Moved*.
  * Bob knows that the clue is either focused on slot 1 or slot 4.
  * Because of the "Pink Promise with a 5's Chop Move" convention, Bob knows that since this clue caused him to *Chop Move*, it is focused on slot 4.
  * Thus, *Pink Promise* applies to this card, so he marks slot 4 as a 5.
  * Later on in the game, another rank clue "fills in" Bob's slot 4 card to be a pink card. From *Pink Promise*, Bob knows that it must be exactly the pink 5.

### Pink Promise with a 5 Pull

* First, see the section on *[Pink Promise with a 5's Chop Move](#pink-promise-with-a-5s-chop-move)*.
* When a player performs a *5 Pull*, it is clearly a type of *Play Clue*. But if two or more 5's are touched as part of the clue, then the focus of the clue is unclear.
* We define the focus of the clue to be the next to the "pulled" card. (This is similar to how *Pink Promise* works with a *5's Chop Move*.)
* Thus, when a player knows for sure that a number 5 clue indicates a *5 Pull*, the *Pink Promise* convention only applies to the 5 that is next to the pulled card.
* For example, in a 3-player game:
  * The variant is "Pink (6 Suits)".
  * It is the first turn of the game and nothing is played on the stacks.
  * Alice clues number 5 to Bob, touching two 5's on slot 1 and slot 2.
  * Bob knows that this is a *5 Pull*, because he sees that Cathy has a bunch of playable cards in her hand that Alice could have clued instead.
  * Bob blind-plays his slot 3. It is a red 1 and it successfully plays.
  * Next, Bob retroactively considers the implications of the *5 Pull*. Bob knows that the *5 Pull* was either focused on slot 1 or slot 2.
  * Because of the "Pink Promise with a 5 Pull" convention, Bob knows that since this clue was a *5 Pull*, it must be focused on slot 2 (the card that was next to the pulled card).
  * Thus, *Pink Promise* applies to this card, so he marks slot 2 as a 5.
  * Later on in the game, another rank clue "fills in" Bob's slot 2 card to be a pink card. From *Pink Promise*, Bob knows that it must be exactly the pink 5.
