---
id: level-8
title: Level 8 - Stalling
---

import FiveStall from '@site/image-generator/yml/level-8/five-stall.yml';

## Conventions

<br />

### Allowable Stall Clues (Stall Table)

- In certain situations, everyone understands that a player might be giving a "stall" clue. However, there are limits - they are not allowed to just clue anything they want. These are the specific clues that they are allowed to give along with the precedence of each clue:

| Precedence | Type of Clue | Early Game (Severity 1) | Double Discard / Scream Discard (Severity 2) | Locked Hand (Severity 3) | 8 Clues (Severity 4)
| ---------- | ------------ | ----------------------- | -------------------------------------------- | ------------------------ | --------------------
| 1          | Normal *Play Clues* or *Save Clues*                                                                      | ✅ | ✅ | ✅ | ✅
| 2          | *5 Stall*<br />(cluing off chop 5's)                                                                     | ✅ | ✅ | ✅ | ✅
| 3          | *Tempo Clue*<br />(re-cluing a card to make it play)                                                     | ❌ | ✅ | ✅ | ✅
| 4 (tied)   | *Locked Hand Save*<br />(saving any card on chop, as long as doing so would not *Lock* the other player) | ❌ | ❌ | ✅ | ✅
| 4 (tied)   | *8 Clue Save*<br />(saving any card not on slot 1)                                                       | ❌ | ❌ | ❌ | ✅
| 4 (tied)   | *Fill-In Clue*<br />(giving extra information to already-clued cards or *Chop Moved* cards)              | ❌ | ✅ | ✅ | ✅
| 5          | *Hard Burn*<br />(re-cluing an unplayable card that gives no new information, usually a 5)               | ❌ | ✅ | ✅ | ✅

- For example:
  - It is the *Early Game* (severity 1).
  - Alice does not have any normal *Play Clues* or *Save Clues* to give (precedence 1).
  - Alice does not have any *5 Stalls* to give (precedence 2).
  - Thus, Alice is not allowed to perform a *Tempo Clue* (precedence 3), or anything below that. She must discard.
- For example:
  - The team has 8 clues (severity 4).
  - Alice does not have any normal *Play Clues* or *Save Clues* to give (precedence 1).
  - Alice does not have any *5 Stalls* to give (precedence 2).
  - Alice does have a *Tempo Clue* to give (precedence 3).
  - Thus, Alice must perform the *Tempo Clue*. Alice is not allowed to do any moves with precedence 4 or 5.
- What is the point of having a complicated table with defined priorities? Well, normally, players in stalling situations are not able to give tricky-looking *Finesses*, because everyone else will think that they are just giving a stall clue. However, if it can be seen that there is a better clue available for them to give, then everyone can know that they are **not** giving a stall clue. So, because of this precedence table, players in stalling situations are still often able to make *Finesses* happen.
- Obviously, stall clues are not allowed when the player has a known playable card in their hand.

<br />

### The Early Game (Severity 1 Stalling)

- The *Early Game* is introduced in the [beginner's guide](beginner/early-game.md). In short:
  - The *Early Game* is defined as the period of time before the first discard happens.
  - Players **must** "extinguish" all of the available *Play Clues* and *Save Clues* on the board before ending the *Early Game*.
- As an intermediate player, you need to know about a few extra rules about the *Early Game*. We don't bother telling the extra rules to beginners because they deal with some edge-case situations. We have the extra rules because we want to "squeeze" as much value out of the conventions as possible.

#### Ending the Early Game

- The *Early Game* is only ended when the first **completely unknown** card is discarded.
- In other words:
  - Misplaying a card **does not count** as ending the *Early Game*.
  - Discarding known-trash **does not count** as ending the *Early Game*.
  - Doing special discards that "transfer" cards to other players **does not count** as ending the *Early Game*.

#### Extinguishing Every Clue

- Extinguishing every clue **does** include *5 Stalling*, but it is only mandatory for the team to collectively perform one *5 Stall*. If one *5 Stall* clue has already been given and there is another *5 Stall* clue available, players are allowed to clue it if they want, but they don't have to.
- Extinguishing every clue **does not** include giving *Tempo Clues* (e.g. clues that do not meet *Minimum Clue Value Principle*).
- Extinguishing every clue **does not** include cluing something in the hand of the player who came directly before. This is because the player who came before did not see anything for the next player to do, and is therefore giving them "permission" to discard. In this situation, cluing is optional; players can choose to either clue the previous hand or discard at their discretion.
- Extinguishing every clue **does not** include cluing cards that will be almost certainly be *Order Chop Moved* by an upcoming player who already has two or more 1's clued in their hand.

<br />

### Double Discard Situations / Double Discard Avoidance (DDA) (Severity 2 Stalling)

- Often times in Hanabi, two players will discard in a row. However, in rare cases, this can cause a perfect score to be lost.
- For example, in a 3-player game:
  - Alice has nothing to do. Alice discards her chop and it is a red 4.
  - Bob has nothing to do. Bob also has a completely unclued hand. Bob discards his chop and it is the other copy of the red 4.
  - Since both copies of the red 4 are discarded, it is no longer possible to get a perfect score. (The maximum score now is 23 instead of 25.)
  - Normally, someone on the team would give a *Save Clue* to Bob's red 4 before it could get discarded. But since Bob's turn was immediately after Alice's turn, no-one on the team had time to save it.
- In the previous example, on Bob's turn, since Bob *could* have the red 4 on his chop, we would say that Bob is in a *Double Discard Situation* for the red 4.
- More formally, a *Double Discard Situation* is defined as when:
  1. the previous player discards or misplays a card
  1. **and** the current player could be discarding the other copy of that card.
- Players agree to **never** discard in a *Double Discard Situation* if it has the potential to lower the maximum score. Instead, they must give some clue. This is called *Double Discard Avoidance*, or DDA for short.
- If a player in DDA has no normal *Play Clues* or *Save Clues* to give, then they are allowed to give "stall" clues, like a *5 Stall*. If there are no *5 Stalls* to give, they can even just "fill-in" some information on an already-clued card (and doing this should not be read as a *Play Clue* or a *Finesse* or anything like that).
- Let's revisit the above example to show what Bob should have done:
  - Alice has nothing to do. Alice discards her chop and it is a red 4.
  - Bob has nothing to do (meaning that there are no normal *Play Clues* or *Save Clues* to give). Bob also has a completely unclued hand.
  - Bob's chop is his slot 5 card. Since Bob does not see the red 4 in anyone else's hand and Bob's slot 5 card has no positive or negative clues on it, it is possible that Bob's slot 5 card could be the red 4. Thus, Bob knows that he is currently in a *Double Discard Situation* for the red 4.
  - Since there are no normal *Play Clues* or *Save Clues* available, Bob looks around to see if he can give a *5 Stall*. Bob sees that Cathy has a red 5 on her slot 1, so he clues number 5 to Cathy as a *5 Stall*.
  - Cathy knows that since Bob was in a *Double Discard Situation* for the red 4, she should not read too closely into his clues. This number 5 clue must just be a *5 Stall* (as opposed to a *Play Clue* on the 5).

<br />

### Locked Hands (Severity 3 Stalling)

- Generally speaking, it is a bad situation when someone's hand gets fully clued. This is also known as being *Locked*, and it should be avoided if possible. However, sometimes it cannot be helped, like when a player draws three 5's in a row.
- A player with a *Locked Hand* may give a low-value clue because they are not sure that they can play anything (and they can't discard because their hand is fully clued). Similar to a *Double Discard* situation, players should not read too closely into any clues given during this state.
- If the team is out of clues and someone's hand is fully clued, then you **have** to discard to generate a clue for them. Similarly, if there is only 1 clue left, you cannot steal it from them.

<br />

### Clues Given While at 8 Clues (Severity 4 Stalling)

- At the beginning of the game, you start with 8 clues. This section only applies to situations where you climb to 8 clues in the middle of the game.
- A player who has a turn with 8 clue tokens available may give a low-value clue because they cannot play anything (and they cannot discard because the game does not allow you to discard while at 8 clues). Similar to a *Double Discard* or a *Locked Hand* situation, players should not read too closely into any clues given during this state.

<br />

## Special Moves

<br />

### The 5 Stall (Intermediate Section)

- As mentioned in the [beginner's guide](beginner/early-game.md#the-5-stall-cluing-off-chop-5s), *5 Stalls* are when a player clues an off chop 5 purely because they want (or need) to give a stall clue.
- *5 Stalls* are usually performed in the *Early Game*. Less commonly, they can also be performed in the *Mid-Game* if a player happens to be in a special "stalling" situation where they are not allowed to discard.
- In the *Early Game*, the team can give as many *5 Stalls* as they want before initiating the *Mid-Game*.
- Regardless of whether they are done in the *Early Game* or the *Mid-Game*, *5 Stalls* are only allowed if there is nothing else "normal" to do (like playing a card, giving a normal *Play Clue*, or giving a normal *Save Clue*).
  - However, as an exception, players are also allowed to *5 Stall* if there is **only one** *Play Clue* remaining and it would touch a card that someone else on the team could conceivably *Finesse*. (We refer to this as the *Finesse Position Exception*, or FPE.)
  - The *Finesse Position Exception* also applies if the same card is in multiple *Finesse Positions* and there is nothing else to do.
  - The *Finesse Position Exception* applies whenever a player performs a *5 Stall*, regardless of whether it is in the *Early Game* or not.
- *5 Stalls* **must** be given to the 5 that is closest to chop. For example, in a 3-player game:
  - It is the *Early Game*. The only thing left for Alice to do is to clue an off chop 5.
  - Bob has two playable 1's on slots 1 and 2. He has a green 5 on slot 4. Bob's 5 is therefore one-away from chop.
  - Cathy has nothing clued in her hand. She has a purple 5 on slot 3. Cathy's 5 is therefore two-away from chop.
  - Alice must clue number 5 to Bob as a *5 Stall* since his 5 is closer to chop (even though Bob has two playable cards).

<FiveStall />

- Some additional rules for *5 Stalls* are found in the section on [the *Early Game*](#the-early-game-severity-1-stalling).

<br />

### The Locked Hand Save (LHS)

- We agree that players with a *Locked Hand* gain the special ability to save any card they want on chop (as long as it would not *Lock* the other player). This is called a *Locked Hand Save*.
- A *Locked Hand Save* can be performed on **any** card, not just a critical or playable card.
- However, players can only do a *Locked Hand Save* if there are no higher precedence clues available. See the "Allowable Stall Clues" section above.
- A *Locked Hand Save* can be performed with either a color clue or a number clue.
- If a clue that looks like a *Locked Hand Save* would *Lock* another player, it is instead treated as a normal *Play Clue* or a normal *Save Clue*.
- Note that the precedence of a *Locked Hand Save* is tied with a "fill-in" clue. Essentially, this means that players who have a *Locked Hand* are not forced to perform a *Locked Hand Save* if they do not want to. Most of the time, doing a *Locked Hand Save* will be pretty good (as a 1-for-1 or a 2-for-1 instead of a 0-for-1), but *Locked* players can always ignore a *Locked Hand Save* to perform a "fill-in" clue if they want.

<br />

### The Anxiety Play (Forcing a Locked Player to Play)

- Sometimes, someone with a *Locked Hand* has a playable card, but they do not know that they can play it yet. Re-cluing the card would signal this, but that would waste a clue and not be very efficient.
- A better way to signal this information is to deliberately leave them at 0 clues. By convention, this means that one of their cards is actually playable. The player should play the card in their hand that is most likely to be playable. If there is more than one option, then they should know that the left-most is playable. (This follows from *Left-Most Playable Principle*.)
- This is called an *Anxiety Play* because you are putting the *Locked* player in a "do or die" situation.

<br />

### The 8 Clue Save (8CS)

- At the beginning of the game, you start with 8 clues. This section only applies to situations where you climb to 8 clues in the middle of the game.
- We agree that players who have 8 clues available on their turn gain the special ability to save any card they want on **or** off chop (as long as it is not on slot 1). This is called an *8 Clue Save*.
- An *8 Clue Save* can be performed on **any** card, not just a critical or playable card.
- However, players can only do an *8 Clue Save* if there are no higher precedence clues available. See the "Allowable Stall Clues" section above.
- An *8 Clue Save* can be performed with either a color clue or a number clue.
- If a clue that looks like an *8 Clue Save* is on a card that is on slot 1, it is instead treated as a normal *Play Clue* or a normal *Save Clue*.

<br />

### The Fill-In Clue

- A "Fill-In Clue* is defined as a clue that:
  1. only touches card(s) that already have a clue on them (or are *Chop Moved*)
  1. gives additional information to the touched card(s) that was not there before
- *Fill-In Clues* are only used in specific stalling situations - see the stalling table above for the specific situations that you are allowed to perform one. If you give a clue like this in a normal situation, it would just look like a *Play Clue*.

<br />
