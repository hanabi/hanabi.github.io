# Deleted Conventions in the H-Group Framework

## Introduction

As we evolve our convention framework, sometimes we decide to delete existing "moves" or strategies in order to simplify things. And other times, new strategies that we come up with will conflict with older, existing strategies, so we must retire the older ones. This is a short list of some retired strategies.

## Deleted Conventions

### The Weak Prompt

- If a teammate performs a _Prompt_ on you, and you have multiple cards in your hand that match the connecting card, normally you would be promised that the left-most (newest) is playable.
- However, if the card that initiated the prompt was **on chop** when it was touched **and** it was in danger of being imminently discarded, the left-most rule no longer applies, since your teammate had to take drastic measures to prevent the discard of that card.
- So instead, you are promised that you have the connecting card somewhere in your hand, but it could be any of the cards, and not strictly the left-most.
- This convention was deleted since it was rarely used and increased complexity.

### The Early Fix Clue Chop Move

- As noted in the _Fix Clues_ section, a _Fix Clue_ is required before a misplay occurs on duplicated cards. But usually, the misplay will not occur until late in the game, because there is always some other extra card (that is not currently playable) that it could be.
- Thus, if other urgent things are at hand, you can usually defer giving some _Fix Clue_ for a long time and hope that through ancillary information and the context of the game, the player will "naturally" figure out that the card is duplicated.
- So if a _Fix Clue_ is given early to you, it can be strange. You were happily discarding, and now all of a sudden you are being fixed on a card that was just sitting in your hand and was not in danger of being misplayed.
- This usually means that your chop suddenly became important, so the _Fix Clue_ was given early to give you a good discard and keep you occupied. Thus, you should permanently chop move one card.
- This convention was deleted because it was ambiguous as to whether _Fix Clues_ were early or not.

### The Disease Bluff

- In the _Good Touch Bluff_, a _Bluff_ is given that looks like a _Finesse_. However, what if something that looks like a _Good Touch Bluff_ is done, but the "matching" card is not yet clued?
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice goes first.
  - Bob has a red 1 on slot 1 and a blue 2 on slot 2.
  - Alice clues number 2 to Bob, touching a blue 2 on slot 2.
  - Bob does not see any other 1's on _Finesse Position_. Thus, the number 2 clue must be a _Self-Finesse_, so he blind-plays red 1.
  - Cathy comes next. From her perspective, Bob should currently think that his slot 2 card is red 2 (instead of blue 2). If nothing else happens, Bob will go on to misplay that card.
- In the previous example, say that Cathy sees the red 2 in Donald's hand and she could uniquely clue it. If she does, Donald will go on to immediately play it.
- This would "heal" the problem, as Bob would not think that he has red 2 anymore. Thus, this clue is called a _Heal Clue_.
- The original Bluff is called a Disease Bluff, since it requires healing. In a convention framework with _Disease Bluffs_, giving a _Heal Clue_ would be the highest priority interpretation.
- _Disease Bluffs_ were deleted because they were too inefficient.

### The Promise Bluff

- Typically, we are only allowed to _Bluff_ with cards that are 1-away (normal _Bluff_) or a 3 (_3 Bluff_) or a critical 4 (_Critical 4 Bluff_). However, _Bluffs_ can also be performed with cards that are 2 away if the true intermediary card exists on someone's _Finesse Position_. Doing such a move is essentially like doing a _Bluff_ and a _Finesse_ at the same time, with one component of each. This is called a _Promise Bluff_, because it promises the true one-away card in addition to being a _Bluff_.
- _Promise Bluffs_ take priority over _Double Bluffs_; the person after the first blind-player will assumes that it is a _Promise Bluff_ since they will see the true connecting card. And since that player does not blind-play their _Finesse Position_ card, the player with the promised card can know to mark their hand accordingly.
  - As the receiver of the clue that initiates a _Promise Bluff_, it may be ambiguous as to what exactly the connecting card is, if it exists. As long as there is at least one candidate on someone's _Finesse Position_, then you have to assume a _Promise Bluff_ over a _Double Bluff_.
- _Promise Bluffs_ also take priority over _Layered Finesses_. This isn't normally an issue, since it is rare to actually to perform a _Layered Finesse_ from _Bluff Position_, but it is worth mentioning.
- This convention was deleted because it was too rare to be worth the additional cognitive overhead. It also prevents some _Double Bluffs_ from occurring.

### The Double Gentleman's Discard

- Typically, when a player performs a _Gentleman's Discard_, it means that they knew **exactly** what the card was.
- However, in some situations, a card will have a clue on it, and a player will know that it is exactly one of two possible cards.
- If a player discards a card in this state, it promises **both** of the possible cards at the same time. Both cards will be on _Finesse Position_, similar to a normal _Gentleman's Discard_.
- This is called a _Double Gentleman's Discard_ because it "gets" two cards instead of one.
- This convention was removed because it would lead to misplays after players made information-asymmetric reads.

### The Redundant Save Chop Move

- Players that have two or more clued 1's in their hand will often use the _Order Chop Move_ to _Chop Move_ a 2, a 5, or a critical card on the next player's chop.
- Subsequently, if a player with two or more clued 1's in their hand does not play a 1 and instead gives a _Save Clue_ to a 2, a 5, or a critical card on the next player's chop, this is very strange.
- In this situation, if there is nothing else special going on, the player who got clued should _Chop Move_ the card next to the one that was explicitly saved.
- This convention was deleted since it was hardly ever used.

### The Reverse Misplay Chop Move

- Sometimes, a _Misplay Chop Move_ will not immediately misplay because of circumstances similar to _Focus Inversion_, meaning that there is:
  - negative clues present on the card
  - historical / contextual information about the card (derived from moves that teammates performed earlier on in the game)
- In such a scenario, the clue will look like a _Reverse Finesse_ and then next person will misplay their _Finesse Position_ card.
- After the misplay, the person who received the clue is to treat it like a normal _Misplay Chop Move_, and chop move all the cards to the right of the clued card.
- This convention was deleted since it was hardly ever used.

### Priority in Multi-Color Variants

- Multi-color variants can make finding out which card has _Priority_ a little tricky, because sometimes players will know that a card is playable, but not know its exact identity.
- In these situations, players should always assume that the suit of their playable card is the left-most of the possible suits.
- For example:
  - Alice has a known playable red 2 and a known playable blue card that is either blue 1 or rainbow 3.
  - If the blue card is blue 1, then the blue card would have _Priority_, since it would be the lowest rank. But if the blue card is rainbow 3, then the red 2 would have _Priority_, since that would be the lowest rank.
  - However, since the blue stack is the to the left of the rainbow stack, Alice knows that for the purposes of calculating _Priority_, she has to assume that her blue card is the blue 1.
  - Thus, even if Alice really does have the rainbow 3, playing the red 2 will still cause a _Priority Finesse_ to occur on the red 3.
- This convention was deleted with the rework to make _Priority_ only apply to globally-known cards.

### The Out-of-Position Bluff (OOP) / The Reverse Bluff

- It is legal to perform a _Reverse Finesse_, but it is not legal to perform a _Reverse Bluff_, because it breaks the _Bluff Seat_ rule (and violates _Lie Principle_).
  - Why this policy? It is not possible to play with both _Layered Finesses_ and _Reverse Bluffs_ at the same time. _Layered Finesses_ are much better, so we choose to "turn on" _Layered Finesse_ and "turn off" _Reverse Bluffs_.
- However, players **can** rarely break the _Bluff Seat_ rule if **one of the following is true**:
  1. The next player is at 0 clues (and won't blind-play anything / will blind-play an unrelated card).
  1. The next player will think that they have the _Bluffed_ card in their own hand and will not try to _Finesse_ or _Bluff_ the next player. (In this case, the _Bluffed_ card means the card that will blind-play.)
  1. The next player has enough positive or negative clues on their entire hand to know that they cannot have the card that the blind-played card will be played as.
- Essentially, if i. or ii. is true, then the next player cannot act on their state of misinformation. And if iii. is true, then the next player will have full knowledge that a _Lie_ is occurring, so they will not try to "get" the _Bluffed_ card.
- Since valid _Out-of-Position Bluffs_ are so rare, it is important to remember that:
  - Valid _Out-of-Position Bluffs_ take precedence over _Known Bluffs_. In other words, if Bob can see that an _OOP Bluff_ could be valid (meaning it meets one of the three criteria above), then Bob should not blind-play anything as a _Known Bluff_ and let Cathy play instead.
  - Valid _Out-of-Position Bluffs_ take precedence over _Layered Finesses_. In other words, if Cathy can see that an _OOP Bluff_ could be valid (meaning it meets one of the three criteria above), then Cathy should not continue to blind-play cards as a _Layered Finesse_. (This is a common mistake.)
- A _Reverse Bluff_ is just a just a more-specific type of _Out-of-Position Bluff_. All of the same stipulations apply.
- This move was deleted because players were not good enough to recognize valid _Out-of-Position Bluffs_ or know what the criteria were.

### The Suboptimal Color Bluff

- Often, when giving a color clue to a Rainbow or dual-color card, you want to pick a color that will "fill-in" ancillary cards in the hand as to give the maximum amount of information.
- If a suboptimal color is chosen that does not fill in ancillary cards, it follows from _High Value Principle_ that there must be a reason, so you should blind-play your _Finesse Position_ card.
- This move is contextual in that you don't want to make it appear as if the clued card is currently unplayable. Thus, it is best performed as a _Reverse Bluff_ or a _Long-Distance Bluff_.
- This convention was deleted because it was hardly ever used and it increased complexity.

### The Triple Bluff

- In some situations, cluing a 5 with color initiates a special move called a _5 Color Ejection_. And in some situations, cluing a 5 with rank initiates a special move called a _5 Pull_ or a _5's Chop Move_. However, if players are in a situation where none of these moves would apply, then it is possible to perform a _Triple Bluff_ by giving a _Play Clue_ to a 5 (with either color or number).
- For example, in a 5-player game:
  - All the 1's are played on the stacks.
  - Emily has a red 5 that has a number 5 clue on it. (It was _5 Saved_ in the _Early Game_.)
  - Alice clues red to Emily, "filling in" the red 5 as a _Play Clue_. (This cannot be a _5 Color Ejection_, because that move requires the 5 to be freshly touched.)
  - Bob sees that no-one else has the red 2. Bob blind-plays his _Finesse Position_ card as red 2, but it is instead a blue 2.
  - Cathy knows a blue 2 does not connect to a red 5, so this must be some kind of _Bluff_. However, a red 5 is not a valid _Bluff_ target and it is also not a valid _Double Bluff_ target. Thus, this must be a _Triple Bluff_. Cathy blind-plays her _Finesse Position_ card as any playable card, and it plays as green 2.
  - Donald also knows that this must be a _Triple Bluff_ for the same reasons that Cathy does. Donald blind-plays his _Finesse Position_ and it plays as a yellow 2.
- This convention was deleted because it was hardly ever used. The similar moves of the _Triple One-Third Bluff_, the _Triple Two-Third Bluff_, and the _5's Triple Bluff_ were also deleted.

### The Speculation Prompt & The Speculation Finesse

- Normally, a player needs to know the exact identity of a card in order to initiate a _Priority Prompt_ or _Priority Finesse_. However, it is somewhat common that a player will get a _Play Clue_ on a card and they will not know its exact identity. (For example, when they get a color _Play Clue_ in a multi-color variant.) In this situation, the rules of _Priority_ still apply, as enumerated above in the previous section.
- Subsequently, if a player plays a non-priority card that they do not know the exact identity of, this can be quite strange. In this situation, they are trying to perform a speculative _Priority Prompt_ or _Priority Finesse_ with the intent that it will only work if they happen to be playing a specific suit. This is called a _Speculation Prompt_ or a _Speculation Finesse_ for short.
- We agree that a _Speculation Prompt_ or _Speculation Finesse_ only promises the next card in the suit that is the left-most of the possible suits that it could be (when looking at the suits in the middle of the table).
- For example, in a no variant game:
  - Blue 1 and red 1 are played on the stacks.
  - Alice has a known playable yellow 1. She also has a known playable 2 that could be either blue 2 or red 2.
  - The yellow 1 has _Priority_ and Alice is expected to play that. Instead, she plays the 2 as a _Speculation Finesse_.
  - Between blue and red, the blue suit is the _Speculation Target_, since it is the left-most suit between blue and red.
  - The card happens to be blue 2. The rest of the team is promised the blue 3, just like a normal _Priority Prompt_ or _Priority Finesse_.
- It is also possible for the _Speculation_ to fail, meaning that the card does not happen to be the left-most suit. In this situation, the rest of the team is still promised the _Speculation Target_, but they should write _Speculation Elimination Notes_ for the card.
- For example, in a no variant game:
  - The setup is the same as the previous example.
  - The card happens to be the red 2 (instead of blue 2).
  - The rest of the team knows that the blue 3 was promised. Bob does not see anyone else with the blue 3, so he writes _Speculation Elimination Notes_ on every card in his hand.
- Note that we agree that it is illegal for players to perform a _Ambiguous Speculation Finesse_, so players do not have to account for that possibility.
- This convention was deleted with the rework to make _Priority_ only apply to globally-known cards.

### The Speculation Layered Finesse

- Similar to a _Layered Priority Finesse_, it is also possible to _Layered Speculation Finesse_. This is safe to do because if the _Speculation_ fails, no lie will have occurred, since the other player will write _Elimination Notes_ on their entire hand.
- This convention was deleted with the rework to make _Priority_ only apply to globally-known cards.

### The Speculation Elimination Finesse

- In a normal _Elimination Finesse_, the right-most card is called for.
- However, if an _Elimination Finesse_ calls for a card that specifically has _Speculation Elimination Notes_ on it, then the **left-most** card is called for instead of the right-most card.
- This convention was deleted with the rework to make _Priority_ only apply to globally-known cards.

### The Speculation Bluff

- The _Speculation_ mechanism in a _Speculation Finesse_ can also be used to perform a _Speculation Bluff_, which is similar to a _Priority Bluff_.
- In the case where the card played was indeed the left-most of the possibilities, then this works exactly the same as a _Priority Bluff_ - the next player will immediately blind-play their _Finesse Position_ card and it will be immediately revealed that a _Bluff_ has occurred.
- Things become more complicated if the card played does not happen to be the left-most of the possibilities. The next player will mark their _Finesse Position_ card in the same way as if a failed _Speculation Finesse_ occurred. However, the rest of the team will know that it was a _Speculation Bluff_, because they see a playable card in the _Finesse Position_ of the next player.
- When this occurs, the bluffed player will mark their card with the wrong note. This is referred to as a _Speculation Mismark_.
- For example, in a 3-player game:
  - Blue 1 and red 1 are played on the stacks.
  - Alice has a known playable yellow 1. She also has a known playable 2 that could be either blue 2 or red 2.
  - Alice does not see the blue 3 or the red 3, but she does see a playable green 1 on Bob's _Finesse Position_.
  - Alice plays the 2 as a _Speculation Bluff_, hoping to get the green 1 "for free". However, it happens to be the red 2.
  - Bob knows that Alice was supposed to play the yellow 1, so this must have been a _Speculation Finesse_. Bob marks his _Finesse Position_ card as blue 3. Then, Bob discards.
  - Alice and Cathy both mark the green 1 as a "blue 3 _Speculation Mismark_". At this point, they can either:
    - Clue green 1 directly to get it to play, which would reveal to everyone that a failed _Speculation Bluff_ occurred and immediately resynchronize information among the team.
    - Let the card sit there until the real blue 2 is played, after which the green 1 will play for free as blue 2. After this happens, the _Speculation Bluff_ will be revealed.
- Note that to prevent confusion, we agree that it is illegal for players to perform a _Speculation Finesse_ on a player who is two or more seats away if the next player has a playable card in _Finesse Position_ that is not already gotten.
- This convention was deleted because it was too complicated.

### The Misplay Trash Push

- When a card is clued and the next player misplays that card, it is usually the _Misplay Chop Move_ - they had no other options and had to protect an important card on chop.
- However, when a card **on chop** is clued and the next player misplays that card, it cannot be the _Misplay Chop Move_ - it must be something else.
- Normally, when trash is clued on chop, it is a _Trash Push_. So they should go on to blind-play the card that was touching the trash on their next turn.
- This convention was deleted due to lack of use.

### The Dupe Bluff

- This is where you perform a _Bluff_ such that the card that is blind-played is already touched in someone else's hand **and** the player who has the other copy has full knowledge of the card.
- You wouldn't normally do this since it is only a 1-for-1 instead of a 2-for-1. However, it can be useful if you want to touch a card that you wouldn't otherwise be able to, like a one-away from playable card. Alternatively, you may strongly want to give ancillary information to some other card.
- This convention was deleted due to lack of use.

### Implied Color Truth

- This convention only applies to variants with a rainbow suit.
- By default, players assume that color clues indicate non-rainbow cards.
- For example, in a 3-player game:
  - All of the 1's are played and there are no cards in the trash.
  - Alice clues blue to Bob, touching a blue card on his slot 1 as a _Play Clue_.
  - Bob knows that technically, this could be a _Play Clue_ on a blue 2 or a rainbow 2, but in general he can assume that it is a blue 2.
  - Cathy has a blue 3 on chop and is in danger of discarding it.
  - Thus, Bob assumes that he has a blue 2 and clues blue to Cathy as a _Play Clue_ on the blue 3.
- Our group has never actually used this convention, but it is documented here since it is played with on Board Game Arena.

### The Phantom Finesse

- This convention only applies to variants with a rainbow suit.
- Sometimes, players will have a card to play and see that a _Finesse_ is available to perform. However, if they play the card, then the _Finesse_ will go away. In these situations, players perform the _Finesse_ and then play their own card later.
- Rarely, players can even do this kind of a _Finesse_ on **the same suit that they have in their own hand**.
- For example, in a 3-player no variant game:
  - All of the 1's are played on the stacks.
  - Alice clues red to Bob, touching a red 2 on his slot 1 as a _Play Clue_.
  - Bob knows that he has the red 2 and could play it right now.
  - Bob sees that Cathy has the red 3 on her _Finesse Position_ and that Alice has the red 4.
  - Bob clues red to Alice, touching the red 4 as a _Finesse_ on the red 3.
  - Cathy discards.
  - Alice discards.
  - Bob plays the red 2.
  - Cathy blind-plays the red 3.
  - Alice plays the red 4.
- In a rainbow variant, if the group is playing with _Implied Color Truth_, then this style of _Finesse_ has the potential to fail if the player initiating the _Finesse_ actually has a rainbow card.
- If this occurs, it is called a _Phantom Finesse_. The _Finesse_ will still work but the leading card does not actually exist.
- For example, in a 3-player rainbow game:
  - All of the 1's are played on the stacks.
  - Alice clues red to Bob, touching a red 2 on his slot 1 as a _Play Clue_.
  - Bob knows that he has either the red 2 or the rainbow 2. Both are playable and could play it right now.
  - Bob sees that Cathy has the red 3 on her _Finesse Position_ and that Alice has the red 4.
  - Bob uses _Implied Color Truth_ to assume that he has the red 2. Subsequently, Bob clues red to Alice, touching the red 4 as a _Finesse_ on the red 3.
  - Cathy discards.
  - Alice discards.
  - Bob plays his red card and it turns out to be the rainbow 2.
  - Cathy knows that Bob was using _Implied Color Truth_ to assume that he had the red 2. Thus, since red 4 was clued, Cathy knows that at the time of the clue, she must have had a red 3 in her _Finesse Position_. She marks it as such and discards.
  - Alice also knows that Bob was using _Implied Color Truth_. It would not make sense for Bob to defer playing the red 2 in order to clue the red 3 himself. Thus, her red card must be a red 4 and Bob was trying to _Finesse_ Cathy's red 3. Alice marks the card as such as discards.
- Our group has never actually used this convention, but it is documented here since it is played with on Board Game Arena.

### The Unnecessary Trash Finesse/Bluff Chop Move (Alternate Form)

- An alternate form of the _Unnecessary Trash Finesse/Bluff Chop Move_ exists where the unnecessary part is **not** in the clue receivers hand but in someone else's hand.
- For example, in a 4-player game:
  - Blue 1 and red 4 are played on the stacks.
  - Alice clues red to Donald, which touches a red 1 on slot 3.
  - Bob blind-plays his _Finesse Position_, knowing that this is a _Trash Finesse_ or _Trash Bluff_. It is a blue 2 and successfully plays.
  - Cathy discards.
  - Donald knows that his red card is trash. However, at the time the clue was given, Donald sees that Alice could have actually clued a blue 3 in Cathy's hand to perform a normal _Finesse_. A normal _Finesse_ is a 2-for-1 and a _Trash Bluff_ is a 1-for-1, so Donald knows that Alice must have had a good reason for this.
  - Donald knows that this must be the alternate form of the _Unnecessary Trash Bluff Chop Move_, so he marks his slot 4 card as _Chop Moved_ and discards the red 1.
  - Cathy does not know that Donald is _Chop Moved_. However, she will be able to retroactively figure it out once the blue 3 is clued. Alternatively, she will know once Donald demonstrates the _Chop Move_ by discarding his slot 3.
- This convention was deleted due to lack of use.

### The Stop Blind-Play (Blind-Playing Chop)

- Sometimes, due to a mistake or a complicated situation, you can see that the next player after you is going to misplay a critical card. Additionally, there may be no "fix" clue that you can give that will remedy the situation, or perhaps you are currently at 0 clues.
- If you can't give a clue, as a last resort you can send a signal to your teammate by blind-playing a card. You don't want to accidentally blind-play a critical card, so the safest card to blind-play is your chop.
- By doing this, it sends an emergency signal to the next player, warning them to **stop** whatever it is they were about to do.
- If you see someone blind-play their chop and it works, your first thought may be that it could be a _Stop Blind-Play_. However, it could also be a _Negative Blind-Play_ (which is covered later), so it is important to not confuse these two strategies.
- Note that a _Scream Blind-Play_ (listed above) is almost exactly the same as this move, but it has a completely different interpretation. Whether or not a move is a _Scream Blind-Play_ or a _Stop Blind-Play_ is entirely dependent on the context of the situation.
- This convention was deleted due to lack of use.

### The Stop Discard

- Normally, when someone discards with a known play and the next player already has something to do, it is an _Echo Scream Discard_.
- However, it could also be the case that the next player after that does not have a playable/critical card on chop. Or, alternatively, it could be the case that **everyone** has something to do on their turn. Thus, discarding is normally considered a mistake.
- If the player who is discarding is not making a mistake, then they are communicating that the very next player with a "known play" should **stop** what they are doing, because the card is not actually playable.
- This is very similar to a _Stop Blind-Play_, but since the player has a known play, there is no reason to use up one of the strikes when the same message can be communicated in a safer way.
- If there is a card that could potentially be playable on chop, then the _Echo Scream Discard_ interpretation takes priority over the _Stop Discard_ interpretation.
- This convention was deleted due to lack of use.

### The Skipped Scream Discard

- In emergency situations, players should perform _Scream Discards_ and _Generation Discards_ to save important cards. These two moves (along with their derivatives, the _Echo Scream Discard_ and the _Composition Discard_), should be enough to "solve" almost every tricky situation that could ever come up.
- However, in an extremely difficult variant, or in a situation where a previous player has blundered, it might fall to one player to save the next player's critical chop card. In this situation, they might not be able to perform a _Scream Discard_, because they might not have any playable cards. And they might not be able to perform a _Scream Blind-Play_, because if the team is at 2 strikes, then the game would immediately end.
- In this situation, the player can discard a card one-away from their chop as a _Skipped Scream Discard_. This convention is normally only used in 2-player games, because it is very unsafe, risking the discard of a critical card.
- It is common for players to accidentally _Chop Move_ a card. Thus, the _Skipped Scream Discard_ interpretation should almost never be entertained, simply because of how rarely it is actually needed.
- Furthermore, this move should never be performed if there is a non-expert player playing or if it is likely to be interpreted as a mistake.
- This convention was deleted due to lack of use (outside of 2-player games).

### Order Ejection

- When a player can perform an _Skipped Order Chop Move_ on a critical 5 (or a critical one-of-each card) at the beginning of the game, and they don't do it, this is very strange.
- The player must be communicating something extra. In this scenario, they intend for the next person to blind-play slot 2.
- The _Order Ejection_ will also get a free _Chop Move_ in addition to getting the blind-play.
- For example, in a 4-player game:
  - Blue 1 is played on the stacks.
  - Alice clues Bob 1's, touching three 1's on slot 2, slot 3, and slot 4.
  - Donald has a 5 on chop (and the rest of his hand is trash).
  - Bob could play his 1 on slot 2 to _Skipped Order Chop Move_ Donald's 5 for "free".
  - Bob instead plays his 1 on slot 4 (which does nothing special).
  - Cathy sees no possible reason for not getting a "free" _Chop Move_ on a 5, so she knows that this is an _Order Ejection_. Cathy blind-plays slot 2 and it plays as a blue 2.
  - Donald knows that Cathy must be blind-playing slot 2 for a reason. The only thing that happened that could have possibly caused the blind-play was the order that Bob played his 1's in. Thus, Donald knows that an _Order Ejection_ has occurred and that he should _Chop Move_.
  - Furthermore, Donald knows that his _Chop Moved_ card **must** be a 5 or some other critical card. (This is unlike a normal _Order Chop Move_, since _Order Chop Moves_ are allowed to get non-critical cards.)
- Note that _Order Ejections_ only apply if the player did not _Order Chop Move_ a **critical** card. Unique 2's **do not** count as critical in this case.
- This convention was deleted due to lack of use.

### Reverse Order Ejection

- It is also possible to do a _Reverse Order Ejection_, meaning that the blind-play will occur **after** the person with the critical card has a turn.
- For an _Order Ejection_ to work, the player who initiates it must have three or more 1's to choose from. But a _Reverse Order Ejection_ is more flexible in that it only requires two 1's.
- For example, in a 4-player game:
  - Blue 1 is played on the stacks.
  - Alice clues Bob 1's, touching a 1 on slot 2 and a 1 on slot 3.
  - Cathy has a 5 on chop (and the rest of her hand is trash).
  - If Bob plays the slot 2 card, this would be a "free" _Order Chop Move_ on the 5.
  - Bob plays the 1 from slot 3 (which does nothing special).
  - Cathy clues number 5 to Bob as a _5 Save_.
  - Donald knows that Bob should have _Order Chop Moved_ Cathy's 5, so he knows that this is a _Reverse Order Ejection_. Donald blind-plays his slot 2 card and it is a blue 2.
  - Cathy knows that Donald did not blind-play from her _5 Save_, so the blind-play must have been from something else. The only other thing that happened was Bob playing the 1. Thus, Cathy knows that an _Reverse Order Ejection_ has occurred and she retroactively _Chop Moves_ herself.
- Unlike a normal _Order Ejection_, the _Reverse Order Ejection_ is not guaranteed to work. This is because Cathy is within her rights to "get" the _Second Finesse Position_ card of Donald (with a direct _Play Clue_ of her own). Thus, _Reverse Order Ejections_ should only be done in specific circumstances where it is unlikely that Cathy will do so.
- If a _Reverse Order Ejection_ fails, everyone on the team should be aware that they now need to save the chop of Cathy.
- For example, in a 4-player game:
  - The setup is exactly the same as in the previous example.
  - When it gets to Cathy's turn, instead of performing a _5 Save_ on Bob, she instead clues Donald's blue 2 directly as a _Play Clue_.
  - Donald plays the blue 2.
  - Bob now knows that the _Reverse Order Ejection_ failed and that the 5 will not get retroactively _Chop Moved_ anymore. If Cathy might discard on the next turn, Bob should not play his remaining 1 and should instead give a _5 Save_ to Cathy.
- This convention was deleted due to lack of use.

### Known-Trash Ejection

- Often times, a player can have one or more cards that are known duplicates / trash. They will discard them it without being told anything further.
- If a clue is given that **only** touches cards that are already known-trash, then it must have some other purpose - it should signal an _Ejection_ on the very next player.
- This convention was deleted due to lack of use.

### The Dump Truck

- When someone blind-plays their chop, there is usually an emergency happening and it was either a _Scream Blind-Play_ or a _Stop Blind-Play_.
- However, if someone blind-plays their chop and there was no emergency, it must be something else.
- This means that one player has a fully playable hand from left to right. Like a dump truck, they are expected to unload everything onto the table.
- Most times, all cards in the hand will be unclued. But if not, the player is still expected to play everything from left to right in order.
- In the middle of the game, it is relatively safe to blind-play your chop card, since it is known to not be a critical/playable card.
- In the beginning of the game, it may not be safe to blind-play your chop card. In this situation, you may see that multiple players have the opportunity to initiate the _Dump Truck_. Normally, it is best to let the player immediately before the blind-player do it. If they have an unsafe chop, then the 2nd player before the blind-player should do it, and so forth.
- This convention was deleted due to lack of use.

### The Distributed Dump Truck

- This convention only applies to 5-player games.
- In the _Dump Truck_ convention, a blind-play of a chop card induces one person to blind-play their whole hand from left to right.
- Normally, a _Dump Truck_ is not ambiguous - only one player can have a fully-playable hand, so it is clear what is going on.
- However, what if no players have a fully-playable hand? This must be communicating a different strategy. We agree that this should mean a _Quadruple Bluff_.
- For example, in 5-player game:
  - Near the beginning of the game, Alice blind-plays her chop and it fails to play.
  - Bob interprets this as a _Dump Truck_, and blind-plays his _Finesse Position_ card. It is a red 1 and it successfully plays.
  - Cathy sees that this is **not** a _Dump Truck_ - Bob does not have a fully-playable hand. Thus, this move must have some other meaning.
  - Cathy can see that Donald and Emily have playable cards on their _Finesse Position_. Thus, Cathy knows that this is a _Distributed Dump Truck_, and plays her _Finesse Position_ card. It is a red 1 and it successfully plays.
  - Donald can see what is going on, so he plays blue 1 from his _Finesse Position_.
  - Emily plays blue 2 from her _Finesse Position_.
- This convention was deleted due to lack of use.

### The Rank Choice Bluff

- _Reverse Finesses_ take precedence over _Bluffs_. This means that players cannot use cards to _Bluff_ when there are "connecting" cards on other player's _Finesse Positions_.
- However, in some rare situations, when initiating a _Reverse Finesse_, players have a free choice between a color clue and a rank clue, meaning that both rank and color will **only** touch the one target card. Here, players will normally choose color instead of rank, since in most variants, color clues are better than rank clues.
- In this situation, if a player chooses rank instead of color, and there was not a good reason to do so, then the player giving the clue must be trying to communicate something extra - that they really want a _Bluff_ to happen (instead of a _Reverse Finesse_). This is called a _Rank Choice Bluff_.
- It is possible to use the _Rank Choice_ convention with any kind of _Bluff_. Thus, it is possible to _Rank Choice 3 Bluff_, _Rank Choice Double Bluff_, and so forth.
- This convention was deleted because it was confusing and led to accidental misplays.

### The Rank Choice Finesse

- After Bob sees that Alice wants a _Rank Choice Bluff_ to happen, he will blind-play his _Finesse Position_ card, expecting it to be an unrelated card. But what if Bob plays a card that connects to the card that was clued?
- In this situation, it would be a _Rank Choice Finesse_ instead of a _Rank Choice Bluff_. A _Rank Choice Finesse_ may be preferable to a (more ordinary) _Ambiguous Finesse_, which will resolve more slowly.
- This convention was deleted because it was confusing and led to accidental misplays.

### The Trash Finesse (Weak Form)

- When players deliberately touch ancillary trash and there is only one card "missing", then it should trigger _Trash Touch Elimination Notes_. But what if there are two or more cards that are missing?
- In this situation, the clue giver is promising that someone has one of the missing cards on their _Finesse Position_. Once the card is blind-played, the recipient of the clue will know that one of their ancillary cards are trash.
- This is more subtle than the strong _Trash Finesse_. In the strong form, the focus of the clue causes a blind-play. In the weak form, the non-focused cards are what causes the blind-play
- For example, in a 3-player game:
  - Red 2 is played on the stacks. All of the other suits have the 1 played on the stacks.
  - Bob's hand is, from newest to oldest: red 3, red 1, blue 1, green 1, yellow 1.
  - Alice wants to give a play clue to the red 3. Everyone on the team can see that she can give either 3s or red.
    - If she clues number 3, then it will uniquely touch the red 3 (and not violate _Good Touch Principle_).
    - If she clues red, then it will touch the red 3 and the red 1 (which **will** violate _Good Touch Principle_).
  - Alice clues red to Bob. Since nothing was stopping her from cluing number 3, this is very strange.
  - Bob plays the red 3.
  - There are two "missing" red cards - the red 4 and the red 5. Thus, Cathy knows that Alice must be intending a weak form _Trash Finesse_.
  - Cathy immediately blind-plays her _Finesse Position_ card and it is the red 4.
  - Bob sees Cathy blind-play the next red card for seemingly no reason, so he is able to deduce that his slot 2 card is trash.
- This convention was deleted due to lack of use.

### The Double Play Ejection

- If a player knows that a card in their hand is playable, and then they receive **another** clue on that card, it is usually a _Fix Clue_, which means that the card is actually bad and they should discard it instead of playing it.
- However, if this happens on a good card, the other players can see that the clue must have some other purpose - it should signal an _Ejection_ on the very next player.
- This results in a _Signal Shift_ from _Fix_ --> _Play_.
- This convention was removed in favor of the _Replay Double Ignition_ and _Replay Ejection_.

### The Safety Charm (Declined 5 Pull)

- This convention only applies in the _Low Score Phase_.
- If a card could be freely gotten by initiating a _5 Pull_, it would be very strange if the _5 Pull_ was declined and the card was directly touched as a 1-for-1.
- When this occurs, this player is trying to communicate something deeper - a _Charm_ on the very next player.
- Normally, when a card is blind-played after an innocent-looking _Play Clue_, the clue receiver knows to not play that card anymore. In this situation, since the _Fourth Finesse Position_ card was played instead of the _First_, _Second_, or _Third_, the clue receiver will know that their card is still playable **and** that the unclued card directly to its left must be a 5.
- This untouched 5 is now globally known; everyone on the team should treat it as a _Chop Moved_ card.
- For example, in a 4-player game:
  - Red 1 is played on the stacks.
  - It is the _Early Game_ and the _Low Score Phase_.
  - Alice clues red to Cathy, touching a new red 2 on slot 2.
  - Cathy's hand is, from newest to oldest: `blue 5, red 2, blue 3, blue 2`
  - Bob sees that Alice could have cleanly _5 Pulled_ Cathy's red 2. (It is globally known that Alice had another _Play Clue_ to give, so a number 5 clue would not have been interpreted as a _5 Stall_.)
  - Bob knows that this signals a blind-play:
    - A _First Finesse Position_ blind-play would look like a _Bluff_ on a red 3, which would be a _Lie_.
    - A _Second Finesse Position_ blind-play would look like a _5 Color Ejection_ on a red 5, which would be a _Lie_.
    - A _Third Finesse Position_ blind-play would look like an _Unknown Trash Discharge_ on a red 1, which would be a _Lie_.
  - Thus, Bob knows that this must be a _Safety Charm_. He blind-plays his _Fourth Finesse Position_. It is a blue 1 and it successfully plays.
  - Cathy knows that she must have the red 2. She also knows that her slot 1 card is a 5 that could have been used for a _5 Pull_. Cathy marks the 5 as being _Chop Moved_ for later.
- This convention was deleted since it was too hard to see.

### Selfish Focus Inversion (SFI)

- Normally, when a player gives a _Selfish Clue_, they are doing it because no-one else on the team can perform the clue and they want to "lock-in" the value.
- However, if a player gives a _Selfish Clue_ with a color, and that clue could have been easily given by someone else on the team, then that is quite strange. They must be trying to send a deeper message.
- In this situation, they are trying to communicate that the focus of the clue should be inverted. The _Play Clue_ is either on the left-most card (if it would normally be _Chop-Focus_) or on the right-most card (if it would normally be the left-most card).
- _Selfish Focus Inversion_ can **only** be performed with color clues.
- _Selfish Focus Inversion_ takes precedence over an _Out-of-Order Finesse_. (This follows from _Occam's Razor_; if it could just be a normal _Focus Inversion_ play clue, then it does not necessarily promise any blind-plays.)
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues red to Cathy, touching a red 1 as a _Play Clue_.
  - Bob clues blue to Alice as a _Play Clue_ on a blue 1.
  - Instead of playing her red 1, Cathy clues red to Donald, touching a red 3 on slot 1 and a red 2 on slot 2. This must be a _Play Clue_, since these cards are not on Donald's chop.
  - Donald knows that since Cathy is not playing her red 1 and giving a clue, she must have a good reason.
  - Donald looks around the table and does not see the red 2 in anybody else's _Finesse Position_. Thus, this cannot be a _Selfish Finesse_.
  - Donald also knows that this cannot be a _Self Finesse_. (Donald has a negative red clue on his _Finesse Position_ card.)
  - Thus, this must be a _Selfish Focus Inversion_, so Donald marks his right-most card as red 2 for later. The other red card in his hand can be red 3, red 4, or red 5. Donald discards.
- This convention was deleted since it was prone to misinterpretation and was too rare to be useful.

### The Cursed Finesse

- Commonly, players use a _Double Finesse_ or a _Clandestine Finesse_ to "get" multiple cards from the next player. This works because the first blind-play "connects" to the clued card, forcing Bob to blind-play again in order to prevent Cathy from misplaying.
- However, what if a player intentionally performs a _Bluff_ where other players can see that it was actually possible to perform a _Double Finesse_ or a _Clandestine Finesse_?
- In this situation, if the cluer is not making a mistake, they are trying to send a deeper message - they want an extra person to blind-play.
- This is called a _Cursed Finesse_ because it requires the situation to be "cured". By performing a _Cure Blind-Play_, the move is transformed from a _Bluff_ into a real _Finesse_.
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Bob's hand is as follows, from left to right: `red 1, blue 1, green 3, green 3`
  - Donald's hand is as follows, from left to right: `blue 2, green 4, green 4, yellow 4`
  - Thus, Alice has a _Free Choice_ between cluing blue to Donald and number 2 to Donald. If Alice chooses blue, then it will cause a _Bluff_ (as a 2-for-1). If Alice chooses number 2, it will cause a _Clandestine Finesse_ (as a 3-for-1).
  - Alice clues blue to Donald, touching a single blue 2.
  - Bob tries to blind-play the blue 1 from his _Finesse Position_. Instead, it is a red 1 and it successfully plays. Bob now knows that he was _Bluffed_.
  - Cathy sees that Alice could have done a _Clandestine Finesse_ instead of a _Bluff_. Thus, Cathy knows that this must be a _Cursed Finesse_. Cathy blind-plays her _Finesse Position_ (as a _Cure Blind-Play_). It is a red 2 and it successfully plays.
  - Bob and Donald both gasp in surprise when Cathy blind-plays:
    - From Bob's perspective, the focus of the clue is a _one-away-from-playable_ card, so this cannot be a _Double Bluff_.
    - From Donald's perspective, this cannot be a normal _Finesse_ or a _Double Bluff_, because Cathy would have done nothing, waiting for Bob to play the blue 1 (as a _Finesse_)
    - From both Bob and Donald's perspective, Bob's red 1 did not connect to Donald's blue card, so this cannot be a _Pestilent Double Bluff_.
  - Therefore, the team knows that this must have been a _Cursed Finesse_. Bob will now continue to blind-play until he finds his promised blue 1.
- This convention was deleted because no-one ever used it.

### The Self Color Ejection

- Normally, when a card is "filled in" a card that is two-or-more-away-from-playable, it triggers a _Self Color Double Bluff_.
- However, what if the next player can see that a _Double Bluff_ is impossible? In this situation, they instead intend for an _Ejection_ on the very next player.
- For example, in a 4-player game:
  - All the 1's are played on the stacks.
  - Bob has a green 4 in his hand that was previously clued with a number 4 clue.
  - Alice clues green to Bob, which fills in the green 4.
  - Bob considers what the clue means:
    - Normally, this would be a _Play Clue_ on the green 4, calling for a green 2 and a green 3 to be played as a _Finesse_. However, Bob does not see green 2 and green 3 in anyone else's hands. It also cannot be in his hand (because he has negative green on his entire hand).
    - If it isn't a _Finesse_, then it must be a _Self Color Bluff_. However, _Self Color Bluffs_ are only performed on legal _Bluff-Targets_ (e.g. one-away-from-playable cards), and the green 4 is two-away-from-playable.
    - If it isn't a _Self Color Bluff_, then it must be a _Self Color Double Bluff_. However, Bob sees that Cathy has a trash card on her _Finesse Position_. If he blind-plays his _Finesse Position_, Cathy will go on to misplay her _Finesse Position_. That means that a _Self Color Double Bluff_ does not make sense.
    - If it isn't a _Self Color Double Bluff_, then it must be a _Self Color Ejection_.
  - Bob blind-plays his _Second Finesse Position_. It is a red 2 and it successfully plays.
  - Cathy does nothing; no other cards are promised.
- This convention was deleted because no-one ever used it.

### The Trash Push Inverted Finesse

- Normally, the _Unnecessary Trash Push_ calls for the very next player to blind-play an unrelated card, similar to a _Bluff_.
- However, if the very next player can see that it could be a _Finesse_ through the _Trash Pushed_ card, then they should prefer that interpretation. This is similar to how Bob should always prefer a _Finesse_ interpretation over a _Bluff_ interpretation.
- For example, in a 4-player game:
  - All of the 2's are played on the stacks.
  - Alice clues number 1 to Cathy, touching a single 1 on her chop. Since all of the 1's are already played, it is globally known that this must be some kind of _Trash Push_.
  - Bob sees that the pushed card is a red 3. Cathy has no other red cards in her hand, so Alice could have just clued red to Cathy instead of doing a complicated _Trash Push_.
  - Thus, Bob knows that this is an _Unnecessary Trash Push_. Normally, Bob would immediately blind-play his _Finesse Position_ card. However, Bob also sees that Donald has a red 4 in his _Finesse Position_. Since _Finesses_ take precedence over _Bluffs_, Bob knows that he should let Donald be the one to blind-play from the unnecessariness.
  - Bob discards.
  - Cathy knows that this must be a _Trash Push_. Cathy blind-plays her slot 3 card. It is red 3 instead and it successfully plays.
  - Similar to Bob, Donald also sees that the _Trash Push_ was unnecessary. Since Bob did not blind-play anything, this must be a _Trash Push Inverted Finesse_. Donald blind-plays his _Finesse Position_ as red 4 and it successfully plays.
- This convention was deleted because it was too rare.
