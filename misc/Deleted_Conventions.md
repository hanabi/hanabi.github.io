# Deleted Conventions in the Hyphen-ated Framework

<br />

## Introduction

As we evolve our convention framework, sometimes we decide to delete existing "moves" or strategies in order to simplify things. And other times, new strategies that we come up with will conflict with older, existing strategies, so we must retire the older ones. This is a short list of some retired strategies.

<br />

## Deleted Conventions

### The Weak Prompt

- If a teammate performs a *Prompt* on you, and you have multiple cards in your hand that match the connecting card, normally you would be promised that the left-most (newest) is playable.
- However, if the card that initiated the prompt was **on chop** when it was touched **and** it was in danger of being imminently discarded, the left-most rule no longer applies, since your teammate had to take drastic measures to prevent the discard of that card.
- So instead, you are promised that you have the connecting card somewhere in your hand, but it could be any of the cards, and not strictly the left-most.
- This convention was deleted since it was rarely used and increased complexity.

### The Early Fix Clue Chop Move

- As noted in the *Fix Clues* section, a *Fix Clue* is required before a misplay occurs on duplicated cards. But usually, the misplay will not occur until late in the game, because there is always some other extra card (that is not currently playable) that it could be.
- Thus, if other urgent things are at hand, you can usually defer giving some *Fix Clue* for a long time and hope that through ancillary information and the context of the game, the player will "naturally" figure out that the card is duplicated.
- So if a *Fix Clue* is given early to you, it can be strange. You were happily discarding, and now all of a sudden you are being fixed on a card that was just sitting in your hand and was not in danger of being misplayed.
- This usually means that your chop suddenly became important, so the *Fix Clue* was given early to give you a good discard and keep you occupied. Thus, you should permanently chop move one card.
- This convention was deleted because it was ambiguous as to whether *Fix Clues* were early or not.

### The Disease Bluff

- In the *Good Touch Bluff*, a *Bluff* is given that looks like a *Finesse*. However, what if something that looks like a *Good Touch Bluff* is done, but the "matching" card is not yet clued?
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice goes first.
  - Bob has a red 1 on slot 1 and a blue 2 on slot 2.
  - Alice clues number 2 to Bob, touching a blue 2 on slot 2.
  - Bob does not see any other 1's on *Finesse Position*. Thus, the number 2 clue must be a *Self-Finesse*, so he blind-plays red 1.
  - Cathy comes next. From her perspective, Bob should currently think that his slot 2 card is red 2 (instead of blue 2). If nothing else happens, Bob will go on to misplay that card.
- In the above example, say that Cathy sees the red 2 in Donald's hand and she can uniquely clue it. If she does, Donald will go on to immediately play it.
- This would "heal" the problem, as Bob would not think that he has red 2 anymore. Thus, this clue is called a *Heal Clue*.
- The original Bluff is called a Disease Bluff, since it requires healing. In a convention framework with *Disease Bluffs*, giving a *Heal Clue* would be the highest priority interpretation.
- *Disease Bluffs* were deleted because they were too inefficient.

### The Promise Bluff

- Typically, we are only allowed to *Bluff* with cards that are 1-away (normal *Bluff*) or a 3 (*3 Bluff*) or a critical 4 (*Critical 4 Bluff*). However, *Bluffs* can also be performed with cards that are 2 away if the true intermediary card exists on someone's *Finesse Position*. Doing such a move is essentially like doing a *Bluff* and a *Finesse* at the same time, with one component of each. This is called a *Promise Bluff*, because it promises the true one-away card in addition to being a *Bluff*.
- *Promise Bluffs* take priority over *Double Bluffs*; the person after the first blind-player will assumes that it is a *Promise Bluff* since they will see the true connecting card. And since that player does not blind-play their *Finesse Position* card, the player with the promised card can know to mark their hand accordingly.
  - As the receiver of the clue that initiates a *Promise Bluff*, it may be ambiguous as to what exactly the connecting card is, if it exists. As long as there is at least one candidate on someone's *Finesse Position*, then you have to assume a *Promise Bluff* over a *Double Bluff*.
- *Promise Bluffs* also take priority over *Layered Finesses*. This isn't normally an issue, since it is rare to actually to perform a *Layered Finesse* from *Bluff Position*, but it is worth mentioning.
- This convention was deleted because it was too rare to be worth the additional cognitive overhead. It also prevents some *Double Bluffs* from occurring.

### The Double Gentleman's Discard

- Typically, when a player performs a *Gentleman's Discard*, it means that they knew **exactly** what the card was.
- However, in some situations, a card will have a clue on it, and a player will know that it is exactly one of two possible cards.
- If a player discards a card in this state, it promises **both** of the possible cards at the same time. Both cards will be on *Finesse Position*, similar to a normal *Gentleman's Discard*.
- This is called a *Double Gentleman's Discard* because it "gets" two cards instead of one.
- This convention was removed because it would lead to misplays after players made information-asymmetric reads.

### The Redundant Save Chop Move

- Players that have two or more clued 1's in their hand will often use the *Order Chop Move* to *Chop Move* a 2, a 5, or a critical card on the next player's chop.
- Subsequently, if a player with two or more clued 1's in their hand does not play a 1 and instead gives a *Save Clue* to a 2, a 5, or a critical card on the next player's chop, this is very strange.
- In this situation, if there is nothing else special going on, the player who got clued should *Chop Move* the card next to the one that was explicitly saved.
- This convention was deleted since it was hardly ever used.

### The Reverse Misplay Chop Move

- Sometimes, a *Misplay Chop Move* will not immediately misplay because of circumstances similar to *Focus Inversion*, meaning that there is:
  - negative clues present on the card
  - historical / contextual information about the card (derived from moves that teammates performed earlier on in the game)
- In such a scenario, the clue will look like a *Reverse Finesse* and then next person will misplay their *Finesse Position* card.
- After the misplay, the person who received the clue is to treat it like a normal *Misplay Chop Move*, and chop move all the cards to the right of the clued card.
- This convention was deleted since it was hardly ever used.

### Priority in Multi-Color Variants

- Multi-color variants can make finding out which card has *Priority* a little tricky, because sometimes players will know that a card is playable, but not know its exact identity.
- In these situations, players should always assume that the suit of their playable card is the left-most of the possible suits.
- For example:
  - Alice has a known playable red 2 and a known playable blue card that is either blue 1 or rainbow 3.
  - If the blue card is blue 1, then the blue card would have *Priority*, since it would be the lowest rank. But if the blue card is rainbow 3, then the red 2 would have *Priority*, since that would be the lowest rank.
  - However, since the blue stack is the to the left of the rainbow stack, Alice knows that for the purposes of calculating *Priority*, she has to assume that her blue card is the blue 1.
  - Thus, even if Alice really does have the rainbow 3, playing the red 2 will still cause a *Priority Finesse* to occur on the red 3.
- This convention was deleted with the rework to make *Priority* only apply to globally-known cards.

### The Suboptimal Color Bluff

- Often, when giving a color clue to a Rainbow or dual-color card, you want to pick a color that will "fill-in" ancillary cards in the hand as to give the maximum amount of information.
- If a suboptimal color is chosen that does not fill in ancillary cards, it follows from *High Value Principle* that there must be a reason, so you should blind-play your *Finesse Position* card.
- This move is contextual in that you don't want to make it appear as if the clued card is currently unplayable. Thus, it is best performed as a *Reverse Bluff* or a *Long-Distance Bluff*.
- This convention was deleted because it was hardly ever used and it increased complexity.

### The Triple Bluff

- In some situations, cluing a 5 with color initiates a special move called a *5 Color Ejection*. And in some situations, cluing a 5 with rank initiates a special move called a *5 Pull* or a *5's Chop Move*. However, if players are in a situation where none of these moves would apply, then it is possible to perform a *Triple Bluff* by giving a *Play Clue* to a 5 (with either color or number).
- For example, in a 5-player game:
  - All the 1's are played on the stacks.
  - Emily has a red 5 that has a number 5 clue on it. (It was *5 Saved* in the *Early Game*.)
  - Alice clues red to Emily, "filling in" the red 5 as a *Play Clue*. (This cannot be a *5 Color Ejection*, because that move requires the 5 to be freshly touched.)
  - Bob sees that no-one else has the red 2. Bob blind-plays his *Finesse Position* card as red 2, but it is instead a blue 2.
  - Cathy knows a blue 2 does not match a red 5, so this must be some kind of *Bluff*. However, a red 5 is not a valid *Bluff* target and it is also not a valid *Double Bluff* target. Thus, this must be a *Triple Bluff*. Cathy blind-plays her *Finesse Position* card as any playable card, and it plays as green 2.
  - Donald also knows that this must be a *Triple Bluff* for the same reasons that Cathy does. Donald blind-plays his *Finesse Position* and it plays as a yellow 2.
- This convention was deleted because it was hardly ever used. The similar moves of the *Triple One-Third Bluff*, the *Triple Two-Third Bluff*, and the *5's Triple Bluff* were also deleted.

### The Speculation Prompt & The Speculation Finesse

- Normally, a player needs to know the exact identity of a card in order to initiate a *Priority Prompt* or *Priority Finesse*. However, it is somewhat common that a player will get a *Play Clue* on a card and they will not know its exact identity. (For example, when they get a color *Play Clue* in a multi-color variant.) In this situation, the rules of *Priority* still apply, as enumerated above in the previous section.
- Subsequently, if a player plays a non-priority card that they do not know the exact identity of, this can be quite strange. In this situation, they are trying to perform a speculative *Priority Prompt* or *Priority Finesse* with the intent that it will only work if they happen to be playing a specific suit. This is called a *Speculation Prompt* or a *Speculation Finesse* for short.
- We agree that a *Speculation Prompt* or *Speculation Finesse* only promises the next card in the suit that is the left-most of the possible suits that it could be (when looking at the suits in the middle of the table).
- For example, in a no variant game:
  - Blue 1 and red 1 are played on the stacks.
  - Alice has a known playable yellow 1. She also has a known playable 2 that could be either blue 2 or red 2.
  - The yellow 1 has *Priority* and Alice is expected to play that. Instead, she plays the 2 as a *Speculation Finesse*.
  - Between blue and red, the blue suit is the *Speculation Target*, since it is the left-most suit between blue and red.
  - The card happens to be blue 2. The rest of the team is promised the blue 3, just like a normal *Priority Prompt* or *Priority Finesse*.
- It is also possible for the *Speculation* to fail, meaning that the card does not happen to be the left-most suit. In this situation, the rest of the team is still promised the *Speculation Target*, but they should write *Speculation Elimination Notes* for the card.
- For example, in a no variant game:
  - The setup is the same as the previous example.
  - The card happens to be the red 2 (instead of blue 2).
  - The rest of the team knows that the blue 3 was promised. Bob does not see anyone else with the blue 3, so he writes *Speculation Elimination Notes* on every card in his hand.
- Note that we agree that it is illegal for players to perform a *Ambiguous Speculation Finesse*, so players do not have to account for that possibility.
- This convention was deleted with the rework to make *Priority* only apply to globally-known cards.

### The Speculation Layered Finesse

- Similar to a *Layered Priority Finesse*, it is also possible to *Layered Speculation Finesse*. This is safe to do because if the *Speculation* fails, no lie will have occurred, since the other player will write *Elimination Notes* on their entire hand.
- This convention was deleted with the rework to make *Priority* only apply to globally-known cards.

### The Speculation Elimination Finesse

- In a normal *Elimination Finesse*, the right-most card is called for.
- However, if an *Elimination Finesse* calls for a card that specifically has *Speculation Elimination Notes* on it, then the **left-most** card is called for instead of the right-most card.
- This convention was deleted with the rework to make *Priority* only apply to globally-known cards.

### The Speculation Bluff

- The *Speculation* mechanism in a *Speculation Finesse* can also be used to perform a *Speculation Bluff*, which is similar to a *Priority Bluff*.
- In the case where the card played was indeed the left-most of the possibilities, then this works exactly the same as a *Priority Bluff* - the next player will immediately blind-play their *Finesse Position* card and it will be immediately revealed that a *Bluff* has occurred.
- Things become more complicated if the card played does not happen to be the left-most of the possibilities. The next player will mark their *Finesse Position* card in the same way as if a failed *Speculation Finesse* occurred. However, the rest of the team will know that it was a *Speculation Bluff*, because they see a playable card in the *Finesse Position* of the next player.
- When this occurs, the bluffed player will mark their card with the wrong note. This is referred to as a *Speculation Mismark*.
- For example, in a 3-player game:
  - Blue 1 and red 1 are played on the stacks.
  - Alice has a known playable yellow 1. She also has a known playable 2 that could be either blue 2 or red 2.
  - Alice does not see the blue 3 or the red 3, but she does see a playable green 1 on Bob's *Finesse Position*.
  - Alice plays the 2 as a *Speculation Bluff*, hoping to get the green 1 "for free". However, it happens to be the red 2.
  - Bob knows that Alice was supposed to play the yellow 1, so this must have been a *Speculation Finesse*. Bob marks his *Finesse Position* card as blue 3. Then, Bob discards.
  - Alice and Cathy both mark the green 1 as a "blue 3 *Speculation Mismark*". At this point, they can either:
    - Clue green 1 directly to get it to play, which would reveal to everyone that a failed *Speculation Bluff* occurred and immediately resynchronize information among the team.
    - Let the card sit there until the real blue 2 is played, after which the green 1 will play for free as blue 2. After this happens, the *Speculation Bluff* will be revealed.
- Note that to prevent confusion, we agree that it is illegal for players to perform a *Speculation Finesse* on a player who is two or more seats away if the next player has a playable card in *Finesse Position* that is not already gotten.
- This convention was deleted because it was too complicated.

### The Misplay Trash Push

- When a card is clued and the next player misplays that card, it is usually the *Misplay Chop Move* - they had no other options and had to protect an important card on chop.
- However, when a card **on chop** is clued and the next player misplays that card, it cannot be the *Misplay Chop Move* - it must be something else.
- Normally, when trash is clued on chop, it is a *Trash Push*. So they should go on to blind-play the card that was touching the trash on their next turn.
- This convention was deleted due to lack of use.

### The Dupe Bluff

- This is where you perform a *Bluff* such that the card that is blind-played is already touched in someone else's hand **and** the player who has the other copy has full knowledge of the card.
- You wouldn't normally do this since it is only a 1-for-1 instead of a 2-for-1. However, it can be useful if you want to touch a card that you wouldn't otherwise be able to, like a one-away from playable card. Alternatively, you may strongly want to give ancillary information to some other card.
- This convention was deleted due to lack of use.

### Reverse Order Ejection

- It is also possible to do a *Reverse Order Ejection*, meaning that the blind-play will occur **after** the person with the critical card has a turn.
- For an *Order Ejection* to work, the player who initiates it must have three or more 1's to choose from. But a *Reverse Order Ejection* is more flexible in that it only requires two 1's.
- For example, in a 4-player game:
  - Blue 1 is played on the stacks.
  - Alice clues Bob 1's, touching a 1 on slot 2 and a 1 on slot 3.
  - Cathy has a 5 on chop (and the rest of her hand is trash).
  - If Bob plays the slot 2 card, this would be a "free" *Order Chop Move* on the 5.
  - Bob plays the 1 from slot 3 (which does nothing special).
  - Cathy clues number 5 to Bob as a *5 Save*.
  - Donald knows that Bob should have *Order Chop Moved* Cathy's 5, so he knows that this is a *Reverse Order Ejection*. Donald blind-plays his slot 2 card and it is a blue 2.
  - Cathy knows that Donald did not blind-play from her *5 Save*, so the blind-play must have been from something else. The only other thing that happened was Bob playing the 1. Thus, Cathy knows that an *Reverse Order Ejection* has occurred and she retroactively *Chop Moves* herself.
- Unlike a normal *Order Ejection*, the *Reverse Order Ejection* is not guaranteed to work. This is because Cathy is within her rights to "get" the *Second Finesse Position* card of Donald (with a direct *Play Clue* of her own). Thus, *Reverse Order Ejections* should only be done in specific circumstances where it is unlikely that Cathy will do so.
- If a *Reverse Order Ejection* fails, everyone on the team should be aware that they now need to save the chop of Cathy.
- For example, in a 4-player game:
  - The setup is exactly the same as in the previous example.
  - When it gets to Cathy's turn, instead of performing a *5 Save* on Bob, she instead clues Donald's blue 2 directly as a *Play Clue*.
  - Donald plays the blue 2.
  - Bob now knows that the *Reverse Order Ejection* failed and that the 5 will not get retroactively *Chop Moved* anymore. If Cathy might discard on the next turn, Bob should not play his remaining 1 and should instead give a *5 Save* to Cathy.
- This convention was deleted due to lack of use.

### Implied Color Truth

- This convention only applies to variants with a rainbow suit.
- By default, players assume that color clues indicate non-rainbow cards.
- For example, in a 3-player game:
  - All of the 1's are played and there are no cards in the trash.
  - Alice clues blue to Bob, touching a blue card on his slot 1 as a *Play Clue*.
  - Bob knows that technically, this could be a *Play Clue* on a blue 2 or a rainbow 2, but in general he can assume that it is a blue 2.
  - Cathy has a blue 3 on chop and is in danger of discarding it.
  - Thus, Bob assumes that he has a blue 2 and clues blue to Cathy as a *Play Clue* on the blue 3.
- The Hyphen-ated group has never actually used this convention, but it is documented here since it is played with on Board Game Arena.

### The Phantom Finesse

- This convention only applies to variants with a rainbow suit.
- Sometimes, players will have a card to play and see that a *Finesse* is available to perform. However, if they play the card, then the *Finesse* will go away. In these situations, players perform the *Finesse* and then play their own card later.
- Rarely, players can even do this kind of a *Finesse* on **the same suit that they have in their own hand**.
- For example, in a 3-player no variant game:
  - All of the 1's are played on the stacks.
  - Alice clues red to Bob, touching a red 2 on his slot 1 as a *Play Clue*.
  - Bob knows that he has the red 2 and could play it right now.
  - Bob sees that Cathy has the red 3 on her *Finesse Position* and that Alice has the red 4.
  - Bob clues red to Alice, touching the red 4 as a *Finesse* on the red 3.
  - Cathy discards.
  - Alice discards.
  - Bob plays the red 2.
  - Cathy blind-plays the red 3.
  - Alice plays the red 4.
- In a rainbow variant, if the group is playing with *Implied Color Truth*, then this style of *Finesse* has the potential to fail if the player initiating the *Finesse* actually has a rainbow card.
- If this occurs, it is called a *Phantom Finesse*. The *Finesse* will still work but the leading card does not actually exist.
- For example, in a 3-player rainbow game:
  - All of the 1's are played on the stacks.
  - Alice clues red to Bob, touching a red 2 on his slot 1 as a *Play Clue*.
  - Bob knows that he has either the red 2 or the rainbow 2. Both are playable and could play it right now.
  - Bob sees that Cathy has the red 3 on her *Finesse Position* and that Alice has the red 4.
  - Bob uses *Implied Color Truth* to assume that he has the red 2. Subsequently, Bob clues red to Alice, touching the red 4 as a *Finesse* on the red 3.
  - Cathy discards.
  - Alice discards.
  - Bob plays his red card and it turns out to be the rainbow 2.
  - Cathy knows that Bob was using *Implied Color Truth* to assume that he had the red 2. Thus, since red 4 was clued, Cathy knows that at the time of the clue, she must have had a red 3 in her *Finesse Position*. She marks it as such and discards.
  - Alice also knows that Bob was using *Implied Color Truth*. It would not make sense for Bob to defer playing the red 2 in order to clue the red 3 himself. Thus, her red card must be a red 4 and Bob was trying to *Finesse* Cathy's red 3. Alice marks the card as such as discards.
- The Hyphen-ated group has never actually used this convention, but it is documented here since it is played with on Board Game Arena.

### The Unnecessary Trash Finesse/Bluff Chop Move (Alternate Form)

- An alternate form of the *Unnecessary Trash Finesse/Bluff Chop Move* exists where the unnecessary part is **not** in the clue receivers hand but in someone else's hand.
- For example, in a 4-player game:
  - Blue 1 and red 4 are played on the stacks.
  - Alice clues red to Donald, which touches a red 1 on slot 3.
  - Bob blind-plays his *Finesse Position*, knowing that this is a *Trash Finesse* or *Trash Bluff*. It is a blue 2 and successfully plays.
  - Cathy discards.
  - Donald knows that his red card is trash. However, at the time the clue was given, Donald sees that Alice could have actually clued a blue 3 in Cathy's hand to perform a normal *Finesse*. A normal *Finesse* is a 2-for-1 and a *Trash Bluff* is a 1-for-1, so Donald knows that Alice must have had a good reason for this.
  - Donald knows that this must be the alternate form of the *Unnecessary Trash Bluff Chop Move*, so he marks his slot 4 card as *Chop Moved* and discards the red 1.
  - Cathy does not know that Donald is *Chop Moved*. However, she will be able to retroactively figure it out once the blue 3 is clued. Alternatively, she will know once Donald demonstrates the *Chop Move* by discarding his slot 3.
- This convention was deleted due to lack of use.

### The Stop Blind-Play (Blind-Playing Chop)

- Sometimes, due to a mistake or a complicated situation, you can see that the next player after you is going to misplay a critical card. Additionally, there may be no "fix" clue that you can give that will remedy the situation, or perhaps you are currently at 0 clues.
- If you can't give a clue, as a last resort you can send a signal to your teammate by blind-playing a card. You don't want to accidentally blind-play a critical card, so the safest card to blind-play is your chop.
- By doing this, it sends an emergency signal to the next player, warning them to **stop** whatever it is they were about to do.
- If you see someone blind-play their chop and it works, your first thought may be that it could be a *Stop Blind-Play*. However, it could also be a *Negative Blind-Play* (which is covered later), so it is important to not confuse these two strategies.
- Note that a *Scream Blind-Play* (listed above) is almost exactly the same as this move, but it has a completely different interpretation. Whether or not a move is a *Scream Blind-Play* or a *Stop Blind-Play* is entirely dependent on the context of the situation.
- This convention was deleted due to lack of use.

### The Stop Discard

- Normally, when someone discards with a known play and the next player already has something to do, it is an *Echo Scream Discard*.
- However, it could also be the case that the next player after that does not have a playable/critical card on chop. Or, alternatively, it could be the case that **everyone** has something to do on their turn. Thus, discarding is normally considered a mistake.
- If the player who is discarding is not making a mistake, then they are communicating that the very next player with a "known play" should **stop** what they are doing, because the card is not actually playable.
- This is very similar to a *Stop Blind-Play*, but since the player has a known play, there is no reason to use up one of the strikes when the same message can be communicated in a safer way.
- If there is a card that could potentially be playable on chop, then the *Echo Scream Discard* interpretation takes priority over the *Stop Discard* interpretation.
- This convention was deleted due to lack of use.

### The Skipped Scream Discard

- In emergency situations, players should perform *Scream Discards* and *Generation Discards* to save important cards. These two moves (along with their derivatives, the *Echo Scream Discard* and the *Composition Discard*), should be enough to "solve" almost every tricky situation that could ever come up.
- However, in an extremely difficult variant, or in a situation where a previous player has blundered, it might fall to one player to save the next player's critical chop card. In this situation, they might not be able to perform a *Scream Discard*, because they might not have any playable cards. And they might not be able to perform a *Scream Blind-Play*, because if the team is at 2 strikes, then the game would immediately end.
- In this situation, the player can discard a card one-away from their chop as a *Skipped Scream Discard*. This convention is normally only used in 2-player games, because it is very unsafe, risking the discard of a critical card.
- It is common for players to accidentally *Chop Move* a card. Thus, the *Skipped Scream Discard* interpretation should almost never be entertained, simply because of how rarely it is actually needed.
- Furthermore, this move should never be performed if there is a non-expert player playing or if it is likely to be interpreted as a mistake.
- This convention was deleted due to lack of use (outside of 2-player games).

### Order Ejection

- When a player can perform an *Skipped Order Chop Move* on a critical 5 (or a critical one-of-each card) at the beginning of the game, and they don't do it, this is very strange.
- The player must be communicating something extra. In this scenario, they intend for the next person to blind-play slot 2.
- The *Order Ejection* will also get a free *Chop Move* in addition to getting the blind-play.
- For example, in a 4-player game:
  - Blue 1 is played on the stacks.
  - Alice clues Bob 1's, touching three 1's on slot 2, slot 3, and slot 4.
  - Donald has a 5 on chop (and the rest of his hand is trash).
  - Bob could play his 1 on slot 2 to *Skipped Order Chop Move* Donald's 5 for "free".
  - Bob instead plays his 1 on slot 4 (which does nothing special).
  - Cathy sees no possible reason for not getting a "free" *Chop Move* on a 5, so she knows that this is an *Order Ejection*. Cathy blind-plays slot 2 and it plays as a blue 2.
  - Donald knows that Cathy must be blind-playing slot 2 for a reason. The only thing that happened that could have possibly caused the blind-play was the order that Bob played his 1's in. Thus, Donald knows that an *Order Ejection* has occurred and that he should *Chop Move*.
  - Furthermore, Donald knows that his *Chop Moved* card **must** be a 5 or some other critical card. (This is unlike a normal *Order Chop Move*, since *Order Chop Moves* are allowed to get non-critical cards.)
- Note that *Order Ejections* only apply if the player did not *Order Chop Move* a **critical** card. Unique 2's **do not** count as critical in this case.
- This convention was deleted due to lack of use.

### Known Trash Ejection

- Often times, a player can have one or more cards that are known duplicates / trash. They will discard them it without being told anything further.
- If a clue is given that **only** touches cards that are already known trash, then it must have some other purpose - it should signal an *Ejection* on the very next player.
- This convention was deleted due to lack of use.

### The Dump Truck

- When someone blind-plays their chop, there is usually an emergency happening and it was either a *Scream Blind-Play* or a *Stop Blind-Play*.
- However, if someone blind-plays their chop and there was no emergency, it must be something else.
- This means that one player has a fully playable hand from left to right. Like a dump truck, they are expected to unload everything onto the table.
- Most times, all cards in the hand will be unclued. But if not, the player is still expected to play everything from left to right in order.
- In the middle of the game, it is relatively safe to blind-play your chop card, since it is known to not be a critical/playable card.
- In the beginning of the game, it may not be safe to blind-play your chop card. In this situation, you may see that multiple players have the opportunity to initiate the *Dump Truck*. Normally, it is best to let the player immediately before the blind-player do it. If they have an unsafe chop, then the 2nd player before the blind-player should do it, and so forth.
- This convention was deleted due to lack of use.

### The Distributed Dump Truck

- This convention only applies to 5-player games.
- In the *Dump Truck* convention, a blind-play of a chop card induces one person to blind-play their whole hand from left to right.
- Normally, a *Dump Truck* is not ambiguous - only one player can have a fully-playable hand, so it is clear what is going on.
- However, what if no players have a fully-playable hand? This must be communicating a different strategy. We agree that this should mean a *Quadruple Bluff*.
- For example, in 5-player game:
  - Near the beginning of the game, Alice blind-plays her chop and it fails to play.
  - Bob interprets this as a *Dump Truck*, and blind-plays his *Finesse Position* card. It is a red 1 and it successfully plays.
  - Cathy sees that this is **not** a *Dump Truck* - Bob does not have a fully-playable hand. Thus, this move must have some other meaning.
  - Cathy can see that Donald and Emily have playable cards on their *Finesse Position*. Thus, Cathy knows that this is a *Distributed Dump Truck*, and plays her *Finesse Position* card. It is a red 1 and it successfully plays.
  - Donald can see what is going on, so he plays blue 1 from his *Finesse Position*.
  - Emily plays blue 2 from her *Finesse Position*.
- This convention was deleted due to lack of use.

### The Rank Choice Bluff

- *Reverse Finesses* take precedence over *Bluffs*. This means that players cannot use cards to *Bluff* when there are "matching" cards on other player's *Finesse Positions*.
- However, in some rare situations, when initiating a *Reverse Finesse*, players have a free choice between a color clue and a rank clue, meaning that both rank and color will **only** touch the one target card. Here, players will normally choose color instead of rank, since in most variants, color clues are better than rank clues.
- In this situation, if a player chooses rank instead of color, and there was not a good reason to do so, then the player giving the clue must be trying to communicate something extra - that they really want a *Bluff* to happen (instead of a *Reverse Finesse*). This is called a *Rank Choice Bluff*.
- It is possible to use the *Rank Choice* convention with any kind of *Bluff*. Thus, it is possible to *Rank Choice 3 Bluff*, *Rank Choice Double Bluff*, and so forth.
- This convention was deleted because it was confusing and led to accidental misplays.

### The Rank Choice Finesse

- First, see the section on the *[Rank Choice Bluff](#the-rank-choice-bluff)*.
- After Bob sees that Alice wants a *Rank Choice Bluff* to happen, he will blind-play his *Finesse Position* card, expecting it to be an unrelated card. But what if Bob plays a card that matches the card that was clued?
- In this situation, it would be a *Rank Choice Finesse* instead of a *Rank Choice Bluff*. A *Rank Choice Finesse* may be preferable to a (more ordinary) *Ambiguous Finesse*, which will resolve more slowly.
- This convention was deleted because it was confusing and led to accidental misplays.

### The Trash Finesse (Weak Form)

- First, see the section on *[Trash Touch Elimination](miscellaneous.md#trash-touch-elimination)*.
- When players deliberately touch ancillary trash and there is only one card "missing", then it should trigger *Trash Touch Elimination Notes*. But what if there are two or more cards that are missing?
- In this situation, the clue giver is promising that someone has one of the missing cards on their *Finesse Position*. Once the card is blind-played, the recipient of the clue will know that one of their ancillary cards are trash.
- This is more subtle than the strong *Trash Finesse*. In the strong form, the focus of the clue causes a blind-play. In the weak form, the non-focused cards are what causes the blind-play
- For example, in a 3-player game:
  - Red 2 is played on the stacks. All of the other suits have the 1 played on the stacks.
  - Bob's hand is, from newest to oldest: red 3, red 1, blue 1, green 1, yellow 1.
  - Alice wants to give a play clue to the red 3. Everyone on the team can see that she can give either 3s or red.
    - If she clues number 3, then it will uniquely touch the red 3 (and not violate *Good Touch Principle*).
    - If she clues red, then it will touch the red 3 and the red 1 (which **will** violate *Good Touch Principle*).
  - Alice clues red to Bob. Since nothing was stopping her from cluing number 3, this is very strange.
  - Bob plays the red 3.
  - There are two "missing" red cards - the red 4 and the red 5. Thus, Cathy knows that Alice must be intending a weak form *Trash Finesse*.
  - Cathy immediately blind-plays her *Finesse Position* card and it is the red 4.
  - Bob sees Cathy blind-play the next red card for seemingly no reason, so he is able to deduce that his slot 2 card is trash.
- This convention was deleted due to lack of use.

### The Double Play Ejection

- If a player knows that a card in their hand is playable, and then they receive **another** clue on that card, it is usually a *Fix Clue*, which means that the card is actually bad and they should discard it instead of playing it.
- However, if this happens on a good card, the other players can see that the clue must have some other purpose - it should signal an *Ejection* on the very next player.
- This results in a *Signal Shift* from *Fix* --> *Play*.
- This convention was removed in favor of the *Replay Double Ignition* and *Replay Ejection*

<br />

## Deleted Variant-Specific Conventions

### 4 Stalls & Early 4's Chop Move & 4 Pull

- This convention only applies to the *Pink-Fives* variants.
- In the *Early Game*, since it is not possible to clue number 5, players cannot *5 Stall*. However, we agree that a number 4's clue in the early game indicates that the card is really a 5. Thus, it is possible to *4 Stall*. (A *4 Stall* interpretation takes precedence over a *Self-Finesse*.)
  - This is only legal if the clue **only** touches real 5's. In other words, players may not give a *4 Stall* if touches a mix of 4's and 5's.
  - Similar to a *5 Stall*, if there are other things to do and a *4 Stall* is given, then it transforms into a *Early 4's Chop Move* or a *4 Pull*.
  - Once the *Early Game* is over, players may not *4 Stall*.
- This convention was deleted due to conflicting with other conventions.
