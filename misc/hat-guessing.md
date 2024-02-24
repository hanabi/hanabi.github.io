# The Hat-Guessing Convention Framework

[Floris van Doorn](https://github.com/fpvandoorn/) created [a convention framework called Hat-Guessing](https://github.com/fpvandoorn/hanabi/blob/master/doc_hat_player.md) in June 2016. This is based on the paper [How to Make the Perfect Fireworks Display: Two Strategies for Hanabi](https://quuxplusone.github.io/blog/images/how-to-make-the-perfect-fireworks-display.pdf) by Christopher Cox, Jessica De Silva, Phillip Deorsey, and Josh Tobin.

This framework is entirely separate from the H-Group convention framework. This document contains a basic description of how it works and has some helpful tools for people attempting to play with it.

## Basic Description

- In most Hanabi convention frameworks, you clue cards to tell the player to play that card (or discard that card). In Hat-Guessing, clues have nothing to do with the cards that are "touched" by the clue.
- When a player gives a clue in Hat-Guessing, they encode actions for all other members of the team within the clue using [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic).
- For example, on the first turn of a 4-player game:
  - Alice goes first.
  - Bob has blue 1 on slot 1, Cathy has red 1 on slot 1, and Donald has green 1 on slot 1.
  - So, Alice wants all three of her teammates to play slot 1.
  - From the clue interpretation table below, we see that "play slot 1" is assigned a value of 1.
  - Alice adds up all of the actions: 1 + 1 + 1 = 3
  - Thus, Alice needs to convey "3" to the team, so she clues red to Bob (which is color not on the newest card to the player one seat away).
  - Bob comes next and has to figure out which move that Alice has planned for him.
  - From the clue interpretation table below, Bob knows that Alice encoded a value of 3.
  - Bob also can look ahead and see that Cathy will be assigned a value of 1 and Donald will be assigned a value of 1.
  - Bob calculates: 3 (Alice's clue) - 1 (Cathy's future action) - 1 (Donald's future action) = 1 (play slot 1)
  - Bob blind-plays slot 1.
  - Cathy performs a similar analysis that Bob does, but it is a bit easier for her. Instead of having to figure out the actions of two future players (Cathy + Donald), she only has to figure out the action of 1 player (Donald) in order to make her calculation.
  - Cathy calculates: 3 (Alice's clue) - 1 (Bob's past action) - 1 (Donald's future action) = 1 (play slot 1)
  - Cathy plays slot 1.
  - Donald has the easiest time of all. He does not have to figure out anyone's action. He just has to plug in the values for what the two previous players did in order to determine that he is supposed to play slot 1.
  - Donald calculates: 3 (Alice's clue) - 1 (Bob's past action) - 1 (Cathy's past action) = 1 (play slot 1)
  - Donald blind-plays slot 1.

## Clue Interpretation Tables

### 3-Player

| # mod 9 | action    | person clued   | type of clue                                           |
| ------- | --------- | -------------- | ------------------------------------------------------ |
| 0 (9)   | give clue | 1 player away  | number on newest card                                  |
| 1 (10)  | play 1    | 1 player away  | color on newest card                                   |
| 2 (11)  | discard 5 | 1 player away  | number clue which is not 1 and doesn't hit newest card |
| 3 (12)  | play 3    | 1 player away  | color clue not on newest card                          |
| 4 (13)  | play 4    | 2 players away | number on newest card                                  |
| 5 (14)  | play 5    | 2 players away | color on newest card                                   |
| 6 (15)  | discard 2 | 2 players away | number clue which is not 1 and doesn't hit newest card |
| 7 (16)  | discard 3 | 2 players away | color clue not on newest card                          |
| 8 (17)  | discard 4 | any player     | 1 clue not on newest card                              |

### 4-Player

| # mod 12 | action                     | person clued   | type of clue              |
| -------- | -------------------------- | -------------- | ------------------------- |
| 0 (12)   | give clue                  | 1 player away  | number on newest card     |
| 1 (13)   | play 1                     | 1 player away  | color on newest card      |
| 2 (14)   | play 2                     | 1 player away  | number not on newest card |
| 3 (15)   | play 3                     | 1 player away  | color not on newest card  |
| 4 (16)   | play 4                     | 2 players away | number on newest card     |
| 5 (17)   | discard 1                  | 2 players away | color on newest card      |
| 6 (18)   | discard 2                  | 2 players away | number not on newest card |
| 7 (19)   | discard 3                  | 2 players away | color not on newest card  |
| 8 (20)   | discard 4                  | 3 players away | number on newest card     |
| 9 (21)   | 3rd right-most is critical | 3 players away | color on newest card      |
| 10 (22)  | 2nd right-most is critical | 3 players away | number not on newest card |
| 11 (23)  | right-most is critical     | 3 players away | color not on newest card  |

### 5-Player

| # mod 13 | action             | person clued   | type of clue              |
| -------- | ------------------ | -------------- | ------------------------- |
| 0 (13)   | give clue          | 1 player away  | number on newest card     |
| 1 (14)   | play 1             | 1 player away  | color on newest card      |
| 2 (15)   | play 2             | 1 player away  | number not on newest card |
| 3 (16)   | play 3             | 1 player away  | color not on newest card  |
| 4 (17)   | play 4             | 2 players away | number on newest card     |
| 5 (18)   | discard 1          | 2 players away | color on newest card      |
| 6 (19)   | discard 2          | 2 players away | number not on newest card |
| 7 (20)   | discard 3          | 2 players away | color not on newest card  |
| 8 (21)   | discard 4          | 3 players away | number on newest card     |
| 9 (22)   | slot 1 is critical | 3 players away | color on newest card      |
| 10 (23)  | slot 2 is critical | 3 players away | number not on newest card |
| 11 (24)  | slot 3 is critical | 3 players away | color not on newest card  |
| 12 (25)  | slot 4 is critical | 4 players away | any clue                  |

## Terminology

First, let's go over some _Hat-Guessing_ terminology before getting into the actual mechanics.

### Obvious Plays

- A **positively identified** (i.e. touched by a clue) card is defined as an _Obvious_ play if it can be deduced as such **purely through**
  - the positive and negative information on it
  - the state of the play stacks
  - the state of the discard stacks
  - totally identified cards in hands
  - _Global Elimination Notes_ (see the subsequent section)
- In a similar fashion, critical cards can be _Obviously_ critical, and known-trash cards can be _Obvious_ discards.
- A card is never _Obvious_ if a player needs to use contextual knowledge to determine the identity.
- The fastest way to check if a card is an _Obvious_ play, an _Obvious_ critical, or an _Obvious_ discard is to:
  - use empathy mode
  - ignoring the crosses that originate from not-totally-identified cards in hands
  - check all resultant possible identities against the play stacks
- This concept is used as an error mitigation tradeoff. For example, it is easy for a player to miss a negative 5 on an unclued chop card, and the benefit of being able to skip cluing non-obviously known cards is quite small.

### Called Cards

- A _called card_ is any card that has been targeted by an instruction.

### Global Elimination Notes

- In _Hat Guessing_, trash cards are called to be discarded.
- If a non-trash card is called to be discarded, this indicates the presence of the other copy in someone else's hand.
- When this happens, all players should make _Elimination Notes_ on the relevant cards. (_Elimination Notes_ are a concept borrowed from the _H-Group Convention Framework_.)
- If the other copy is in the same hand as the one that triggered the _Elimination Notes_, then the _Elimination Notes_ should be written to the right of the card. For example, in a 3-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice gives a _Hat-Guessing_ clue.
  - Bob calculates that Alice told him to discard slot 3, so he discards slot 3, and it is a blue 3.
  - Bob knows that the blue 3 is not a trash card - the team still needs it. Alice was not allowed to make him discard that.
  - Thus, Bob writes _Elimination Notes_ for blue 3 on slot 4 and slot 5 (the two slots to the right of where he originally discarded the blue 3).

### Trash

- Duplicate copies of currently-called playable cards (from a previous clue) are considered to be trash.

## Instruction Priority

- When giving a _Hat-Guessing_ clue, you give each other player an instruction.
- You have to give each player an instruction with the highest possible priority:
  1. Play instruction (regardless of whether it is "touched" by a clue or not)
  1. Discard instruction **or** critical save instruction (see below)
  1. Clue instruction
- You **cannot** target a card that has already been given an instruction from a previous clue.
- You **cannot** target a card that is already an _Obvious_ trash card, an _Obvious_ discard, or an _Obvious_ critical card.

### Play Instruction Priority

- Sometimes, a player has more than one uncalled playable card in his hand.
- In this situation, you must give them a play instruction with the highest possible priority:
  1. Unique cards (e.g. 5s, critical cards, and cards of which the player holds all copies)
  1. Left-most 1 where the player holds two copies
  1. Lowest rank
  1. Left-most

### Discard/Critical Instruction Priority

- If a player does not have any uncalled playable cards, then you can give them a "discard" instruction or a "save this critical card for later" instruction.
- In this situation, you must give them an instruction with the highest possible priority:
  1. Discard of the right-most of the left-most copies of important dupes in a hand
  - (For example, in a hand of `blue 2, red 2, red 2, blue 2`, tell them to discard slot 2.)
  1. Discard of the right-most trash, but only if the receiving player has no queued discard instructions or _Obvious_ trash
  1. Critical save the right-most critical
  1. Discard the right-most trash

## Instruction Rules

- Now that we know the priority of the various instructions, we need to explain how to give the instructions.

### Instructions to Every Player

- Whenever someone gives a clue, it always gives an instruction to every other player.
  - You have to assign the instructions according to the _Instruction Priority_ above. (But see the _First Responder Exception_ below.)

### Play Queue

- Each player has a _Play Queue_.
  - These are the cards that this player will play, in the given order.
  - All play instructions are added at the end of their _Play Queue_.
  - It is impossible to change the order of the queue, or to get a player to play a card in a non-standard order.

### Respond Order

- When giving a clue, you first have to decide in which order the players are able to respond. This is called the _Respond Order_.
  - The players with the longest _Play Queue_ respond to this clue last.
  - If tied, the player furthest away from you responds last.
- You have to decide the instructions in **reverse** _Respond Order_.
  - This is relevant when two players have the same playable card in their hand: you should give this instruction to the last player in _Respond Order_, and give a different instruction to the first player in _Respond Order_.
- For example, in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice sees that both Cathy and Donald both have a red 1 on slot 1.
  - Since Donald is last in _Respond Order_, Donald will receive the instruction to play red 1.
  - Cathy will not receive the instruction to play red 1. Instead, Cathy will get an instruction to play the left-most 1 behind the red 1 (if any), or some other instruction.
  - When interpreting the clue, Bob has to make sure to also assign the red 1 play instruction to Donald, and not to Cathy.
  - If, instead, Cathy still has green 1 to play from a previous clue, and Donald has an empty _Play Queue_, then Cathy is last in Respond Order, and Cathy will get the instruction to play red 1, and Donald will get a different instruction.
- The first player in _Respond Order_ is called the _First Responder_, the last player in _Respond Order_ is called the _Last Responder_. Every other player is called an _Intermediate Responder_.

### Critical Instructions

- _Critical Instructions_ can be given in 4 and 5 player games. They are skipped in 3 player games.
- In 4 player games, you count from the right to indicate which card is critical. You skip all called cards, and cards that are known to be not critical.
  - For example: If Donald has a red 5 in slot 4 that was already called as critical, and you now want to tell him that slot 3 is also critical, you assign them 11 (right-most critical).

### Discard Instructions

- When giving a _Discard Instruction_, if one copy of a card has been given a play instruction from a previous clue, then you must count the other one as trash, even if the first copy is not yet played.
  - You are **not** allowed to give a discard instruction to the second copy of a card if you gave a play instruction to the first copy in the _same clue_ (except if the _First Responder Exception_ applies).

### Giving the Hat-Guessing Clue

- After assigning an instruction to everyone, add up the instruction numbers, and look in the table to see what kind of clue that you should give to convey the specified _Clue Value_.
  - If you could give the same type of clue to two or more different players, then you should give the clue that would touch the most useful cards or give the most new information.
  - _Good Touch Principle_ (from the _H-Group Convention Framework_) does not apply. You are allowed to touch trash cards if that would give more information to other useful cards.

### Cards That Become Obvious

- After giving a clue, the receiving player will obviously gain positive or negative information on the cards in their hand.
- This information might be enough to give them a new _Obvious Play_. If this is the case, the _Obvious Play_ is added as a play instruction at the end of the _Play Queue_.
  - If a player received a play instruction as part of the same clue that gave them the _Obvious Play_, then the play instruction is added to the _Play Queue_ first.
  - If multiple cards become _Obvious Plays_, they are added to the _Play Queue_ from left to right.

### No Finesses

- No _Finesses_ can be performed in the _Hat-Guessing_ framework (which should be obvious if instructions are decided in reverse _Respond Order_).

### Queued Play Instructions

- It is possible to give play instructions to cards that would play on top of cards in the _Play Queue_ of some player.
- This is of course only possible if the intermediate card is played before the turn when the player receiving the instruction will try to play their card.
- The clue giver, and all players interpreting the clue, will know the exactly _Play Queues_ of all players, and can decide whether this is true.

### First Responder Exception

- The _First Responder_ is usually the player to your left. (If the player to your left has a non-empty _Play Queue_, then it might be a different player.)
- As a special exception, a clue giver may give **any** play instruction or discard instruction to the _First Responder_. This does not need to follow _Instruction Priority_. (The reason is because they can immediately demonstrate their action to the rest of the team.)
- For example, in a 3-player No Variant game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Bob's hand is as follows, from newest to oldest: `red 1, yellow 1, green 1, red 3, red 3`
  - Alice knows that normally, the red 1 has play priority, since it is the left-most 1.
  - However, Alice also sees that Bob has the yellow 2 in his hand. It would be useful to get the yellow 1 to play before the red 1, so that the team can get the yellow 2 played sooner than later.
  - Alice also knows that since Bob is her _First Responder_, she can break the play priority and just get Bob to play any card she wants. Alice will give a play instruction for Bob to play the yellow 1.
- Unlike play instructions and discard instructions, clue instructions and critical instructions given to the _First Responder_ still have to follow _Instruction Priority_ as per normal.
- If given a clue instruction or a critical action, the _First Responder_ **must** give a clue.
- If given a play instruction or a discard instruction, the _First Responder_ **must** respond immediately. They are not allowed to defer this action or discard a different card first.
- In some cases, this means that the _First Responder_ might need to "jump" ahead of his previous instruction.
- For example, in a 4-player game:
  - All the 1's are played on the stacks.
  - Alice gives a _Hat-Guessing_ clue that instructs Bob to play slot 1, Cathy to clue, and Donald to discard slot 4.
  - Bob blind-plays slot 1. It is a red 2 and successfully plays.
  - From Cathy's perspective, Donald's hand is as follows, from newest to oldest: `red 4, blue 4, red 1, red 1`
  - Donald already knows that his slot 4 card is trash, and Cathy is not allowed to repeat this instruction, so Cathy needs to tell Donald that his slot 3 card is trash.
  - Cathy gives a _Hat-Guessing_ clue that instructs Donald to discard slot 3, Alice to play slot 1, and Bob to play slot 1.
  - Donald knows that the first clue told him to discard slot 4 and the second clue told him to discard slot 3. Normally, he would follow the instructions in order. But in this case, since he is Cathy's _First Responder_, it is his responsibility to immediately demonstrate Cathy's instruction for him to the entire team. Thus, Donald discards slot 3 (instead of slot 4).
- For example, in a 4-player game:
  - The setup is the exact same as the previous example, except that Donald's hand is: `red 4, blue 4, yellow 4, red 1`
  - In this hand, Cathy has no additional information to convey to Donald. He already knows about his one trash card, and the rest of the cards are not-yet-playable, but still useful to the team.
  - Thus, Cathy needs to give a clue instruction to Donald.
  - On Donald's turn, he knows that Cathy instructed him to give a clue. And since Donald is Cathy's _First Responder_, he must immediately react to whatever Cathy told him.
  - However, this situation is the exception. Donald does not have to give a clue and can discard instead. This is because that everyone else on the team can see that Cathy must have assigned a clue instruction to Donald, because the rest of his hand is useless. Thus, Donald does not have to demonstrate anything in particular.

## Interpreting Instructions

- When it is your turn, you should first play any cards still in your _Play Queue_ from previous clues.
  - You must do this **before** interpreting new clues, since later play instructions could be calling cards that play on top of existing cards in your hand.
  - This means that a player may not know exactly how big their _Play Queue_ is. However, they will always know if their _Play Queue_ is empty or not (and what the first instruction is).
  - Every player with an empty _Play Queue_ also knows the full _Play Queue_ of every player.
- If your _Play Queue_ is empty, you can interpret the next clue (the first clue that you have not interpreted before).
  - This will only be accurate if every player before you in _Respond Order_ has already performed their action. (In other words, you must wait until it is your turn in order to interpret a _Hat-Guessing_ clue.)
  - Often times you can make a good guess of every instruction to the players before you. But make sure to pay attention if they deviate from the expected instructions!
  - When interpreting a clue, make sure to go back to the turn when the clue was given, to correctly interpret the positions of all cards.
- To find out what instructions are contained within a _Hat-Guessing_ clue, read the _Clue Value_ from the table.
- Subtract the _Instruction Value_ from all players that were before you in the _Respond Order_.
  - You can determine these _Instruction Values_ from the actions of the other players.
  - If a player played a card from this clue, you know they received a _Play Instruction_ on that card.
    - Exception: if this card could not have been gotten with the clue (for example, if a _Finesse_ was required), then they must have received a different instruction, and they deduced that their card was playable through public or private information.
  - If the first responder discarded a card, they received a _Discard Instruction_ on that card.
  - In any other case (if any player gave a clue, or if an _Intermediate Responder_ discards), you can deduce what instruction was given to them by applying the _Instruction Priority_ on their hand (using the exact state of the board when the clue was given, before using the positive or negative information by that clue).
- Subtract the _Instruction Value_ from all players that are after you in the _Respond Order_.
  - You can deduce what instruction was given to them by applying the _Instruction Priority_ on their hand.
  - Make sure to assign their instructions in **reverse** _Respond Order_, just like the clue giver did.
- The remaining number is your _Instruction Value_.

## Executing Instructions

- As mentioned previously, the _First Responder_ is required to follow any play or discard instruction. Moreover, if the _First Responder_ receives a clue or critical instruction, they are required to give a clue.
- Any _Intermediate Responder_ is required to follow all play instructions given to them. The _Final Responder_ should generally also do this, but has _Final Freedom_ (see below).
- When they receive any other instruction (discard, critical, clue), they should mark the card as called trash or called critical.
- In this case, they can use their judgment to decide what to do.
  - They can discard a card (either from this instruction, or a previous instruction, or an _Obvious_ trash card).
  - They can give a clue (if they think that is useful enough).
  - In rare cases, they can play a card.
    - This is uncommon, since usually they would have received a play instruction on that card if they want to play it now.
    - It is possible that this play instruction was illegal (for example, if it was a _Finesse_).
    - In this case, they can play this card, and every player can reason that this player did not receive this play instruction.

### After Executing an Action

- If you play a card, this might make some cards in any player's hand _Obviously Playable_. These cards are added to their respective _Play Queues_.
  - If multiple cards are about to be added to a players _Play Queue_, this is done from left to right.
    - Usually this will not allow the other card to be added to the _Play Queue_, since the cards could be the same.
  - If multiple players are about to add a card to their _Play Queue_, the player that is first in _Respond Order_ does it first.
    - This is the player with the shortest _Play Queue_. On a tie it is the player first in turn order.
    - This can cause the card in the other player's hand to not be added, if the cards could be identical.
- If you discard a useful card, this sometimes triggers _Global Elimination Notes_.
  - If you are the _First Responder_, this does not happen when you discard a 3 or 4.
    - Sometimes it is necessary to let a useful card die in order to draw playable cards
  - If you discard a 2, the player that doesn't see the other copy of that 2 does make _Global Elimination Notes_.
  - If you are not the _First Responder_, you make elimination notes when you discard any useful card.
  - Sometimes you can discard a playable card. This will only happen if another copy of that card is already in someone's _Play Queue_.
- If a player is required to make _Global Elimination Notes_, everyone should also make these notes on that player's hand.
  - If at some point in the future there is only 1 position for that card, this card will become _Obviously Critical_ (or _Obviously Playable_).
  - If the position of a critical card with _Global Elimination Notes_ is not yet known, players still have to "get" it with a critical instruction.

### Final Freedom

- In rare cases, the _Final Responder_ to a _Hat-Guessing Clue_ can ignore a play instruction given to them. This is called having _Final Freedom_.
- They are not allowed to do this if they might have a _Play Queue_ longer than 1.
- They should only do this if they know the exact identity of their playable card (from the context of the game), and if they can give a very useful clue.
- If the player in _Final Freedom_ knows that they have called the other copy of their card, they can discard their copy to make it clear to the team what has happened.

### Misplays

- If a misplay occurs as the result of a clue, all further instructions from that clue are cancelled, without exception.
- If that leaves a player with no instructions to process, that player will give a clue, and they have to assign play instructions to cards that might have been called already before.
- A player without a new instruction is still allowed to play the card that they thought was targeted (at their discretion). This convention only means that when giving new clues, instructions have to be repeated.

### End-Game

- Sometimes it is valuable to revert to ordinary conventions.
- When there are only 5s left to play, a 5 clue not on the newest card is a non-hat clue, and from then on since an alternative hat clue exists.

### Positional Discards

- In the _End-Game_, you can use _Positional Discards_ in the same way that the _H-Group Convention Framework_ does.

### Variant Specific Tables

- In many custom variants, it is hard to guarantee that a clue will not be "blocked".
- In these cases you will need to remove some rows from the tables.

## Hat Guessing Tables with Finesses

See [Jeff's document](https://github.com/iamwhoiamhahaha/hanabi/blob/master/hat-guessing/Advanced_Hat_Guessing.md) for tables that allow _Finesses_.

## Variant-Specific Hat Guessing Tables

See [Jeff's document](https://github.com/iamwhoiamhahaha/hanabi/blob/master/hat-guessing/Variant-Specific_Hat_Guessing_Tables.md).
