## Introduction

As noted in the [convention changes document](https://github.com/Zamiell/hanabi-conventions/blob/master/misc/Convention_Changes.md), sometimes a change to the conventions is made but is not yet announced due to there being a backlog of things to announce. This document contains the backlog.

The next announcement will be on November 23rd.

<br />

## The Backlog

**The Useless Bluff** (deleted)

```
* This convention is deleted, since it conflicts with *Junk Ejection*. (*Junk Ejection* is a move that is not announced yet.)
```

**Reverse Order Ejection** (deleted)

```
* This convention is deleted, as it is hardly ever used.
```

**The Suboptimal Color Bluff** (deleted)

```
* This convention is deleted, as it is hardly ever used.
```

**Priority Potential Duplication & The Certain Priority Finesse** (by Zamiel & Libster)

```
* Normally, players can perform any particular type of *Finesse* either by giving a clue or by playing a card without *Priority*. For example, it is possible to both do a *Layered Finesse* (by giving a clue) and a *Layered Priority Finesse* (by playing a card).
* One exception to this rule is the *Certain Finesse*. When a player perform a *Certain Finesse*, it calls for a *Certain Discard*. However, when a player uses *Priority* to promise a card that could potentially be in their own hand, this should **not** induce a *Certain Discard*. The other players in this situation should just ignore the *Priority* and instead discard their chop card.
```

**Trash Double Bluff (Form 1)** (by Jeff)

```
* Normally, *Trash Bluffs* are only done as a last resort. When a *Trash Bluff* is performed that is unnecessary, then it is an *Unnecessary Trash Bluff Chop Move*. However, if there are no cards left to *Chop Move*, then this interpretation does not make any sense.
* In this situation, the interpretation should revert to a *Trash Double Bluff*.
```

**Trash Double Bluff (Form 2)** (by Jeff)

```
* Normally, *Trash Bluffs* are only done as a last resort, meaning that the target card cannot be clued directly. In this situation, if a player has the option to initiate the *Trash Bluff* with a single card, then they **must** choose to do so.
* If a player deliberately does not initiate the *Trash Bluff* with a single card and instead initiates a *Trash Bluff* by touching two or more trash cards, then they must be trying to communicate something extra - a *Trash Double Bluff*.
  * If a player is doing a *Unnecessary Trash Bluff Chop Move*, then they can clue as many trash cards as they want and it should not trigger a *Trash Double Bluff*.
* All of the cards touched in this way are promised to be trash.
```

**The 5 Double Pull** (by Jeff)

```
* This convention only applies in the *Early Game*.
* Normally, in the *Early Game*, it is impossible to perform a *5 Pull* on a chop card, because it will instead be interpreted as an an *Early 5's Chop Move*. In this situation, players will almost always just give a direct *Chop-Focus Play Clue* (and then give a *5 Save* to the 5 later on).
* However, what if a player performs an *Early 5's Chop Move* on a playable card instead of just giving a *Chop-Focus Play Clue*? They must be trying to communicate something extra.
* In this situation, they are really trying to perform a *5 Double Pull*, which pulls a card from the next player and also pulls a card from the player who received the number 5 clue. The next player should blind-play their *Finesse Position* card, which gives the clue receiver enough information to know that the move was really a *5 Pull* after all.
* For example, in a 4-player game:
  * It is the first turn and nothing is played on the stacks.
  * Alice clues number 5 to Cathy, touching a red 5 on slot 3.
  * Cathy's slot 4 card is a red 1. (This was her chop card prior to the number 5 clue being given.)
  * It is now Bob's turn. Bob sees that Donald has a red 2 on his slot 2 that could be *Play Clued* with a red color clue.
  * Normally, since it is the *Early Game*, a number 5's clue to Cathy might just be a *5 Stall*. However, since Alice could have given the red *Play Clue* to Donald, this is an "early" 5's clue, so it must be an *Early 5's Chop Move*.  However, this cannot be an *Early 5's Chop Move* either, since Cathy has a playable red 1 on her chop.
  * Thus, Bob knows that this is a *5 Double Pull*, so he blind-plays his *Finesse Position* card. It is blue 1 and it successfully plays.
  * Cathy knows that if this was an *Early 5's Chop Move*, then Bob would not have blind-played anything. Since he blind-played his *Finesse Position* card, this must be a *5 Double Pull*. Cathy blind-plays her slot 4 card (the card to the right of the clued 5).
* More examples of a *5 Double Pull* can be found [here](https://github.com/Zamiell/hanabi-conventions/blob/master/examples/5_Double_Pull.md).
```

**Junk Ejection (with Trash)** (by Jeff)

```
* Normally, when known trash is touched as the focus of the clue, and the known trash is not on chop, it communicates a *Trash Chop Move*.
* However, what if the *Chop Moved* cards are also all trash? The other players can see that this clue must have some other purpose - it should signal an *Ejection* on the very next player.
* *Junk Ejection* can be performed throughout the game. (But keep in mind that in the *End-Game*, a player might just be stalling.)
```

**Junk Ejection (with 5's)** (by Jeff)

```
* First, see the above section "Junk Ejection (with Trash)".
* Normally, if a player performs a *5's Chop Move* on a trash card, it would signal a *Finesse* on all of the cards leading up to the 5.
* If the very next player sees that **they will only have to blind-play one card in their hand to fulfill the *Finesse***, then they should assume that it is a *Finesse*.
* If the very next player sees that they would have to blind-play two or more cards in their hand to fulfill the *Finesse*, then a *Finesse* is unlikely. Instead, players agree that this signals an *Ejection* and that the next player should play their *Second Finesse Position*.
* After the *Ejection*, the player receiving the 5 clue will knows that they have trash on their chop.
* For example, in a 5-player game:
  * It is the *Mid-Game* and all of the 2's are played on the stacks.
  * Alice clues number 5 to Cathy, touching a blue 5 on slot 3.
  * Cathy's slot 4 card is a red 1. (This was her chop prior to the number 5 clue being given.)
  * It is now Bob's turn. Bob knows that since Alice *Chop Moved* a trash card, this would normally signal that the blue 5 is playable right now.
  * However, that would mean that Bob must have both the blue 3 and the blue 4, which is unlikely. Bob knows that *Junk Ejection* takes priority if he is supposed to play two or more blind cards, so he blind-plays his *Second Finesse Position*. It is a green 1 and successfully plays.
  * Cathy knows that if this was an *5's Chop Move*, then Bob would not have blind-played anything. If it was a *Finesse*, then Bob would have blind-played his *Finesse Position*. Since he blind-played his *Second Finesse Position* card, this must be a *Junk Ejection* and her slot 4 card must be trash.
```

**Trash Push Ejection** (by Jeff)

```
* Normally, when known trash is touched as the focus of the clue, and the known trash is on chop, it communicates a *Trash Push*.
* However, what if the *Trash Pushed* card is trash? The other players can see that this clue must have some other purpose - it should signal an *Ejection* on the very next player.
```

**The 5 Pull Ejection and The 5 Pull Ejection Chop Move** (by Jeff)

```
* This convention only applies in the *Early Game*.
* Normally, if someone performs a *5 Pull* on a card that is one-away-from-playable, it promising that someone has the in-between card as a *5 Pull Finesse*.
* Subsequently, if someone performs a *5 Pull* on a card that is two-away (or more) from playable card, then they might be trying to perform a *5 Pull Double Finesse*.
* If the very next player sees that **they will only have to blind-play one card in their hand to fulfill the *Finesse***, then they should assume that it is a *Finesse* and blind-play their *Finesse Position*.
* If the very next player sees that they would have to blind-play two or more cards in their hand to fulfill the *Finesse*, then a *Finesse* is unlikely. Instead, players agree that this signals an *Ejection* and that the next player should play their *Second Finesse Position*.
* The player receiving the clue should also *Chop Move* the *5 Pull* target, as it is likely to be a useful card that the team will need later.
* For example, in a 4-player game:
  * It is the first turn and nothing is played on the stacks.
  * Alice clues number 5 to Cathy, touching a red 5 on slot 1. Cathy has a blue 4 on slot 2. There are other *Play Clues* for Alice to give, so this looks like a *5 Pull* on the blue 4.
  * Bob knows that if no-one on the team does anything, Cathy will go on to misplay the blue 4 as a *5 Pull*.
  * Bob also knows that if he plays his *Finesse Position* card, Cathy will still go on to misplay the blue 4 as a *5 Pull Finesse*.
  * Thus, Bob blind-plays his *Second Finesse Position* card. It is blue 1 and it successfully plays.
  * Cathy now knows that the card to the right of her 5 is two (or more) away from being playable. She also marks the card as being chop moved.
* Rarely, it is possible for a *5 Pull Ejection* to occur where the player who receives the number 5 clue is able to determine that the only "other" thing to clue must be a card in their hand. In this situation, they might be hesitant to discard. By convention, players are allowed to discard in this situation. (This follows from *Guide Principle*.)
```

**Stacked 5 Color Ejection** (by Fireheart)

```
* Normally, you are not allowed to perform a *Bluff* on a player that is already "loaded" with a blind-play for a *Finesse*. (This is because the next player will allow for the possibility of a *Layered Finesse*, and the *Bluff* will not resolve immediately.)
* Similarly, since *Ejections* follow most of the same rules as *Bluffs*, you are not allowed to perform an *Ejection* on a player that is already "loaded" with a blind-play for a *Finesse*.
* So, if a 5 is clued with color in this situation, the next player is to assume a *Stacked Finesse* instead of a *5 Color Ejection*. Thus, they would then play the card from the original *Finesse* (or play nothing if the card from the original *Finesse* is not yet playable).
* However, what if the next player can know that a *Stacked Finesse* is impossible due to them not having enough possible cards to fulfill the *Finesse*? In this case, it would be a *Known Stacked 5 Color Ejection*.
* When this occurs, players should immediately play their *First Finesse Position* (slot 2) instead of their *Second Finesse* position (slot 3).
* For example, in a 4-player game:
  * Nothing is played on the stacks and it is the first turn of the game.
  * Alice clues red to Donald, touching a red 2. This is a *Finesse* on Cathy's red 1 (in her slot 1).
  * Bob clues blue to Donald, touching a blue 5.
  * Now, it is Cathy's turn. Cathy knows that she has a playable red 1, since no-one else on the team has a red 1.
  * Additionally, Cathy might think that Bob's clue was a *Stacked Finesse* on the blue 5. However, this is impossible, because Cathy sees that no-one else on the team has any blue cards. Thus, for a *Stacked Finesse* to be the case, Cathy would have to have red 1, blue 1, blue 2, blue 3, and blue 4, and Cathy only has 4 cards in her hand (since it is a 4-player game).
  * Since a *Stacked Finesse* is impossible, Cathy knows that this must be a *Stacked 5 Color Ejection*.
  * Alice's clue *Finessed* Cathy. So after Alice's clue, Cathy's *Finesse Position* moved to her slot 2 and her *Second Finesse Position* moved to her slot 3.
  * Normally, *Ejection* calls for the *Second Finesse Position*, but in this case, Cathy knows that *Stacked 5 Color Ejections* call for the *First Finesse Position* instead of the *Second Finesse Position*, so Cathy blind-plays slot 2 (instead of slot 3).
```

**The Bad Touch Finesse (For 2's)**

```
* Normally, if number 2 is clued to a chop card, it is considered to be a *Save Clue* (as the *2 Save* convention).
* However, it is possible for players to transform this *Save Clue* interpretation into a *Play Clue* interpretation if they violate *Good Touch Principle* and intentionally duplicate another 2.
* In this situation, the player who received the clue will know that the chop card matches.
  * If two 2's were clued, then the other 2 is obviously the exact same copy as the chop 2. In this situation, the left-most card can be played and the other card discarded as known trash.
  * If three or more 2's were clued, then any of the other cards could be the duplicated 2. In this situation, the chop card should be discarded and then *Elimination Notes* for that card written on the other 2's.
* For example, in a 3-player game:
  * Nothing is played on the stacks.
  * Alice clues number 2 to Cathy, touching a red 2 on slot 3 and a red 2 on slot 5 (her chop).
  * Bob knows that normally, this would be a *2 Save* on the red 2. However, Alice is violating *Good Touch Principle*, so she must be trying to communicate something extra.
  * Bob blind-plays his *Finesse Position* card and it is red 1.
  * Cathy knows that since a clue that looks like a *2 Save* got Bob to blind-play something, then both of the twos must be red 2. Cathy plays the left-most copy and then discards the other one later.
* The *Bad Touch Finesse* is contextual and does not always apply:
  * If the clue giver was an *Occupied*, then it is an *Occupied Play Clue* and the other 2's are not necessarily duplicated.
  * If the clue giver gave a *2 Save* early and had other *Play Clues* to give instead, the clue could be so bad that it would trigger a *Finesse* and the other 2's are not necessarily duplicated.
```

**The Bad Touch Bluff (For 2's)**

```
* In the same way as the *Bad Touch Finesse*, it is also possible to *Bad Touch Bluff* in order to get unrelated cards played from *Finesse Position*.
* For example, in a 3-player game:
  * Blue 2 and green 2 are played on the stacks.
  * Alice clues number 2 to Cathy, touching a red 2 on slot 3 and a red 2 on slot 5 (her chop).
  * Bob knows that normally, this would be a *2 Save* on the red 2. However, Alice is violating *Good Touch Principle*, so she must be trying to communicate something extra.
  * Bob blind-plays his *Finesse Position* card and it is blue 3.
  * Cathy knows that since a clue that looks like a *2 Save* got Bob to blind-play something, then a duplication occurred and both of the twos must be the same copy. Cathy discards the left-most copy and saves the other one for later.
```

**The Bad Touch Triple Finesse (For 4's)**

```
* In the same way that it is possible to perform a *Bad Touch Double Finesse* to "get around" a *3 Bluff* interpretation, it is also possible to perform a *Bad Touch Triple Finesse* to "get around" a *4 Double Bluff* interpretation.
* For example, in a 5-player game:
  * It is the first turn of the game and nothing is played on the stacks.
  * Alice clues number 4 to Emily, touching two red 4's.
  * Bob blind-plays red 1.
  * Cathy blind-plays red 2.
  * Donald knows that normally, this would be a *4 Double Bluff* and that no-one should play any more cards. However, since the red 4 was duplicated, this must be a *Bad Touch Triple Finesse*, so Cathy blind-plays her *Finesse Position* and it is the red 3.
  * Emily knows that this cannot be a *4 Double Bluff*, or else Donald would not have blind-played anything. Thus, this must be a *Bad Touch Triple Finesse*, so Emily plays her left-most red 4. The next time that Emily discards, she will discard the known trash red 4. 
* It is also possible to *Bad Touch Triple Bluff*, *Bad Touch Triple One Third Bluff*, and so on.
```

**Brown Positional Clues**

```
* This convention only applies to variants with a brown suit.
* In some situations, a player may have multiple brown cards in their hand. If the next brown card to play is not the oldest card, it can be difficult to "get" it to play.
* In cases where a number clue is given that has no other conventional interpretation, it is an indication to the player with two or more brown cards of which slot to play.
* For example, in a 3-player game:
  * All of the 2's are played.
  * Bob has four brown cards clued with a brown color clue on slots 2, 3, 4, and 5.
  * Alice clues Bob number 2, touching a blue 2 on his slot 1.
  * Bob knows that since all of the 2's are already played, whatever 2 this is must be a trash 2.
  * Bob also knows that this cannot be a *Trash Chop Move*, a *Trash Push*, or any of the other trash moves.
  * Bob instead interprets this as a *Brown Positional Clue*, and plays his slot 2 brown card.
```

**The Weak Prompt** (deleted)

```
* This convention is deleted since it is rarely used and increases complexity.
```

**The Pink Lie Prompt & The Pink Lie Finesse** (by Razvogor)

```
* This convention only applies to variants with a pink or omni suit.
* Normally, when players give a clue to a pink card with a number, they exactly match the number of the card in order to satisfy *Pink Promise*.
* Some common situations where players violate *Pink Promise* are covered in the "The Pink Play Clue Lie (which resolves immediately)" and the "The Pink Play Clue Lie (with multiple 1's)" sections above.
* Rarely, it is also possible to lie about the rank of a pink card that is not yet playable. Doing so communicates the slot number of where the connecting card is.
* For example, in a 3-player game:
  * Pink 1 is played on the stacks.
  * Alice clues number 4 to Cathy, touching a pink 3 on slot 1.
  * Bob has no clued cards in his hand.
  * Bob can see that Alice's clue breaks *Pink Promise*. Furthermore, Bob can see that Alice had no good reason to do so: there are no other pink cards in Cathy's hand, so nothing was preventing a pink color clue.
  * Thus, Alice must be trying to communicate something extra. This must be a *Pink Lie Finesse* that communicates which slot to play, so Bob blind-plays his slot 4 card and it is the pink 2.
  * Cathy knows that since Bob blind-played his slot 4 from the number 4 clue, this must be a *Pink Lie Finesse* and that she must have the matching pink 3.
```

**Loaded Play Clues** (rename)

```
* *BGA Play Clues* are now renamed to *Loaded Play Clues*, since new players do not know what BGA is.
```

**Unnecessary Chop Move / Trash Double Bluff** (change) (by NoMercy)

```
* The *Unnecessary Trash Chop Move* now takes priority over the *Trash Double Bluff*.
```

**Null Conventions** (change)

```
* Any variant with a null suit is now treated as a *Hard Variant*, meaning that *Loaded Play Clues* are "turned on" and so forth.
```

**Occupied Focus Inversion** (by Romain)

```
* Normally, when a player is *Occupied* and they give a clue to someone else, it signifies one of the following three situations:
  1) They are giving a *Chop Focus* clue to the next person as an urgent *Play Clue* or *Save Clue* before it gets discarded.
  2) They are giving a clue that would normally look like a *Save Clue* with the intent to transform it into a *Play Clue* (as an *Occupied Play Clue*).
  3) They are giving a clue that would normally look like a 1-for-1 *Play Clue* with the intent to transform it into a 2-for-1 *Self-Finesse* (as an *Occupied Self-Finesse*).
* If none of the above situations apply and an *Occupied* player gives a *Play Clue* that touches two or more brand new cards, then they must be trying to communicate something extra.
* In this situation, they are trying to communicate that the focus of the clue should be inverted. The *Play Clue* is either on the left-most card (if it would normally be *Chop Focus*) or on the right-most card (if it would normally be the left-most card).
* *Occupied Focus Inversion* takes precedence over an *Out-of-Order Finesse*. (This follows from *Occam's Razor*; if it could just be a normal *Focus Inversion* play clue, then it does not necessarily promise any blind-plays.)
* For example, in a 4-player game:
  * It is the first turn and nothing is played on the stacks.
  * Alice clues red to Cathy, touching a red 1 as a *Play Clue*.
  * Bob clues blue to Alice as a *Play Clue* on a blue 1.
  * Instead of playing her red 1, Cathy clues red to Donald, touching a red 3 on slot 2 and a red 2 on slot 3. This must be a *Play Clue*, since these cards are not on Donald's chop.
  * Donald knows that since Cathy is not playing her red 1 and giving a clue, she must have a good reason.
  * Donald looks around the table and does not see the red 2 in anybody else's *Finesse Position*. Thus, this cannot be a *Selfish Finesse*.
  * Donald also knows that this cannot be a *Self Finesse* or *Self Bluff*. (*Self Bluffs* with color are explicitly illegal.)
  * This must be an *Occupied Focus Inversion*, so Donald marks his right-most card as red 2 for later. The other red card in his hand can be red 3, red 4, or red 5. Donald discards.
```

**Rank Choice Ejection** (with a number 2 or a number 5) (by Jeff)

```
* Typically, when a number 2 clue or a number 5 clue is performed on a chop card, it will be treated as a *2 Save* or a *5 Save* and the card will not play.
* If a player performs a *2 Save* or a *5 Save* on a playable card and they could have easily used a normal color *Play Clue*, this is quite strange. They must be trying to communicate something extra.
* In this situation, they intend for an *Ejection* on the very next player.
* For example, in a 3-player game:
  * Red 1 is played on the stacks.
  * Cathy's hand is completely unclued and is as follows, from left to right: red 2, blue 4, blue 4, blue 3, blue 3
  * Alice clues number 2 to Cathy, touching the red 2 as a *2 Save*.
  * Bob sees that the obvious clue to give to Cathy was red, as it would actually get the red 2 played right now.
  * This move is so bad that it must be communicating something extra. Alice must be intending for a *Rank Choice Ejection*. Bob blind-plays his *Second Finesse Position* card and it is a blue 1 and successfully plays.
  * Cathy knows that since a number 2 clue cause Bob to blind-play his *Second Finesse Position*, this must be an *Ejection*. The only type of *Ejection* that matches this kind of clue is a *Rank Choice Ejection*, so Cathy knows that her 2 must be playable and that her 2 must be exactly the red 2. Cathy plays the red 2.
```

**5's Color Ejection (5CE)** (change)

```
* The "*Reverse Finesse*" exception is deleted. Now, when a brand new 5 is touched and you need to determine whether or not it is a 5CE, all you have to do is count the number of blind-plays that you would have to play out of your own hand.
```
