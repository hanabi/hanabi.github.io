---
id: level-19
title: Level 19 - Advanced Moves
---

import OutOfOrderPlayClue from '@site/image-generator/yml/level-19/out-of-order-play-clue.yml';
import OutOfOrderFinesse from '@site/image-generator/yml/level-19/out-of-order-finesse.yml';
import FiveColorEjection from '@site/image-generator/yml/level-19/five-color-ejection.yml';
import OutOfOrderFinesse2 from '@site/image-generator/yml/level-19/out-of-order-finesse-2.yml';
import GoodTouchBluff from '@site/image-generator/yml/level-19/good-touch-bluff.yml';
import GoodTouchBluff2 from '@site/image-generator/yml/level-19/good-touch-bluff-2.yml';
import PestilentDoubleBluff from '@site/image-generator/yml/level-19/pestilent-double-bluff.yml';
import NoInformationDoubleFinesse from '@site/image-generator/yml/level-19/no-information-double-finesse.yml';
import NoInformationDoubleBluff from '@site/image-generator/yml/level-19/no-information-double-bluff.yml';

<br />

## Special Moves

<br />

import OccupiedFinesse from '@site/image-generator/yml/level-19/occupied-finesse.yml';

### The Occupied Play Clue & The Occupied Finesse (OPC)

- If a clue could be given by multiple players, who should give the clue? If some players have known-playable cards and other players have nothing to do, then it makes the most sense to leave the clue for the players who have nothing to do.
- If someone gives a clue with a globally-known playable card in their hand and forces the next player to have nothing to do, this is bad teamwork – unless there was a reason!
- One of the reasons is when the occupied player is the only one in position to perform a *Finesse* or other special move.
- Another common reason is to get a playable card using a clue which would normally look like a *Save Clue*. When the clue given by an occupied player would normally be interpreted as a *Save Clue*, then it transforms into an *Occupied Play Clue*.
- All the rules regarding *Play Clues* apply here – for example, if the clued card is one-away from playable, it might be a *Prompt*, a *Bluff*, or a *Finesse* (called an *Occupied Finesse*).
- Note that the concept of being *Occupied* generalizes to lots of different kind of moves. For example, when an *Occupied* player clues an off chop 5, it is certainly not a *5 Stall* – it must be an *Occupied 5 Pull*!
- For example, in a 3-player game:
  - Alice has a globally known playable red 3 in her hand and Bob has nothing to do.
  - Alice clues number 2 to Cathy, which touches a 2 on her chop. This would normally be a *2-Save*, but since Alice is occupied, it is instead an *Occupied Play Clue*.
  - Bob knows that he had nothing to do, and the *2-Save* could have been done by him instead of Alice. Thus, it must be an *Occupied Play Clue*. If Bob does nothing, Cathy will misplay her 2 as a yellow 2. Thus, it must be an *Occupied Finesse* on him! Bob plays his finesse position and it plays successfully as a green 1.

<OccupiedFinesse/>

<br />

### The Out-of-Order Play Clue (Triple O / OOO)

- Sometimes, a player will have two playable cards in their hand of the same suit, but they will be "blocked", meaning that both a color clue and a number clue will not be able to focus the first playable card.
- One technique to get around this is to give a clue that focuses the wrong card, and then have the next player give a *Fix Clue*. This is called an *Out-of-Order Play Clue* because the cards were originally out-of-order, but the original focus is still playable.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Cathy hand is as follows, from left to right: `red 4, red 1, red 2, red 3, blue 4`
  - Alice clues red to Cathy, touching slot 1, slot 2, slot 3, and slot 4.
  - Bob sees that Alice has indicated to Cathy that she has the red 1 on slot 1. Cathy will go on to misplay the red 4 as the red 1.
  - Normally, Bob would think this is a *Finesse* and try to play the red 1 into the red 4. However, that doesn't make any sense, because Cathy has the red 1, and then Alice would be violating *Good Touch Principle*.
  - Instead, Bob knows that the team should be using Cathy's red 1. Thus, Bob knows that he needs to give a *Fix Clue* to Cathy, because Alice intends for her and Bob to work together.
  - Bob clues number 4 to Cathy, touching the blue 4 and "filling in" the red 4.
  - Cathy is surprised because the card that she thought was red 1 is actually a red 4. Cathy knows that since the red 4 was the original focus of Alice's clue, then it must actually be playable right now. Thus, Cathy must have the red 1, the red 2, and the red 3.
  - Cathy plays the red 1 from slot 2 (the left-most red card that could be the red 1). She will go on to play the red 2, the red 3, and the red 4.
  - Cathy (and everyone else on the team) knows that even though the blue 4 was the focus of Bob's clue, it is not actually playable right now, and was just "collateral damage" of Bob's required *Fix Clue*.

<OutOfOrderPlayClue />

### The Out-of-Order Finesse

- Sometimes, a *Finesse* is initiated by giving a color clue that focuses the wrong card.
- When this happens, the *Finesse* will still work: a player will blind-play a connecting card. However, a *Fix Clue* must then be given to the player who received the clue, or they will go on to misplay.
- Normally, after receiving a *Fix Clue*, a player would "stop" and not assume anything else about his hand. However, when an *Out-of-Order* clue is given, the player should always go on to play the original focus of the clue.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Bob has a red 3 and a red 2 (on slots 1 and 2 respectively).
  - Cathy has a red 1 on slot 1 (in *Finesse Position*).
  - Alice clues Bob red (as an *Out-of-Order Reverse Finesse*). The focus of the clue is the red 3 on slot 1.
  - Bob sees the red 1 on Cathy's *Finesse Position*, so he has to respect that it could be *Reverse Finesse*. Bob discards.
  - Cathy blind-plays red 1.
  - Alice must now give a *Fix Clue* to Bob, or else red 3 will be misplayed as red 2.
  - Alice clues number 2 to Bob.
  - Bob plays red 2.
  - Bob knows that his other red card **must** be red 3, since it was originally clued as playable and it caused a *Reverse Finesse*.

<OutOfOrderFinesse />

#### Interaction with 5 Color Ejection

- The *5 Color Ejection* takes precedence over the *Out-of-Order Finesse* as long as the two-or-more-blind-plays rule is satisfied.
- For example, in a 3-player game, this would be a *5 Color Ejection*:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues red to Cathy, touching a red 5 on slot 1, a red 1 on slot 2, and a red 2 on slot 3.
  - Bob knows that this could be an *Out-of-Order Finesse*. Specifically, if Bob gives a follow-up number 5 *Fix Clue* to Cathy, then Cathy would play the red 1, Cathy would play the red 2, and Bob would blind-play the red 3, Bob would blind-play the red 4, into Cathy's red 5.
  - However, this line would require Bob to blind-play 2 cards, so Bob knows that he should prefer a *5 Color Ejection* instead.

<FiveColorEjection />

- For example, in a 3-player game, this would be an *Out-of-Order Finesse*:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues red to Cathy, touching a red 5 on slot 1, a red 1 on slot 2, a red 2 on slot 3, and a red 4 on slot 4.
  - Bob knows that this could be an *Out-of-Order Finesse*. Specifically, if Bob gives a follow-up number 5 *Fix Clue* to Cathy, then Cathy would play the red 1, Cathy would play the red 2, Bob would blind-play the red 3, Cathy would play the red 4, and then Cathy would play the red 5.
  - Since this line only requires that Bob blind-plays 1 card, he knows that it cannot be a *5 Color Ejection*, so Bob performs the *Fix Clue* to allow for the *Out-of-Order Finesse*.

<OutOfOrderFinesse2 />

### The Out-of-Order Corollary

- First, see the section on the *[Out-of-Order Play Clue](#the-out-of-order-play-clue-triple-o--ooo)*.
- As specified in the sections above, if Alice gives a clue to Cathy touching the next playable card, but the focus is wrong, Bob would normally give a OOO *Fix Clue* instead of blind-playing a card.
- Thus, if Alice gives a clue to Cathy, and Bob does blind-play a card, then by default, Cathy can mark all the cards that were touched with a note of not being the next playable card.
- For example, in a 3-player game:
  - Red 2 is played on the stacks.
  - Alice clues red to Cathy, touching two cards on slot 1 and slot 2.
  - Bob blind-plays an unrelated card.
  - Cathy marks her slot 1 card as the red 4. (Cathy knows that Alice performed a *Bluff* and slot 1 was the focus of the clue.)
  - Cathy also marks her slot 2 card as the red 5. (Cathy knows that if it was a red 3, then Bob would be forced to give a *Fix Clue*.)

<br />

### The Suboptimal Prompt & The Suboptimal Finesse & The Suboptimal Bluff

- If the other copy of a card is in the trash, then the remaining copy is critical and needs to be saved. Critical cards of this nature can be saved with either a color clue or a number clue.
- If both types of clues will **only** introduce one new card, then it is said that that there is a *Free Choice* between the two clue types.
- In this situation, the clue type will be chosen that "fills in" other ancillary cards in the hand or gives important negative information.
- If a clue type is chosen that is **clearly worse** than the other one, then the clue giver must be trying to communicate something extra.
- The means that this innocent-looking *Save Clue* is really a *Play Clue*, and all of the in-between cards are called for.
- Note that for a *Suboptimal Save Finesse* to work, the clue has to be **really bad**, not just technically suboptimal in some slight way.

<br />

### The Good Touch Bluff

- Care has to be taken so that a *Bluff* does not look like a *Finesse*.
- For example, in a 4-player game:
  - Red 2 and blue 2 are played on the stacks.
  - Alice clues Cathy number 4, which touches a red 4.
  - Bob blind-plays a blue 3 from his *Finesse Position*.
  - Since 3 connects to 4, Cathy knows she has the blue 4, and goes on to misplay red 4 as blue 4.
  - Thus, Alice should not have given this clue.

<GoodTouchBluff />

- However, what if someone else on the team already has the connecting card? In this situation, the clue can be given without fear: from *Good Touch Principle*, the clue recipient will know that it is a *Bluff* instead of a *Finesse*.
- For example, in a 4-player game:
  - Red 2 and blue 2 are played on the stacks.
  - Alice clues Cathy number 4, which touches a red 4.
  - Bob blind-plays a blue 3 from his *Finesse Position*.
  - Cathy's first thought is that since 3 connects to 4, she must have the blue 4. However, Cathy sees that Donald already has a clued blue 4 it in his hand. (The blue 4 just has a blue clue on it and the true identity of the card is not yet known to Donald.)
  - Cathy knows that she must **not** have the blue 4, because then Alice's clue would have violated *Good Touch Principle*. Cathy can reason that her 4 is instead some **other** *one-away-from-playable* 4. The only other valid *Bluff* target is the red 4 (because the only *one-away-from-playable* 4 is red 4). So, Cathy marks her number 4 card as a red 4, and discards.
  - Donald is surprised by Alice's clue. From Donald's perspective, Cathy should have misplayed the red 4 as the blue 4, since 3 connects to 4.
  - Since Cathy did not misplay, Donald can reason that **he** must have the blue 4. Donald marks the previously unknown blue card in his hand as blue 4.

<GoodTouchBluff2 />

<br />

### The No-Information Double Finesse

- Sometimes, a card that is two-away-from-playable is re-clued in order to initiate a *Finesse* or a *Bluff*. Most times, the clue will "fill in" or give extra information to the existing card.
- Other times, the clue will give no information (e.g. re-cluing number 3 to an already known 3). In this situation, if it was merely a *Bluff*, it would be pretty low value.
- Thus, by convention, a "no information" clue on a two-away-from-playable card **must** "get" at least 2 new cards (as opposed to a single *Bluff* that only gets 1 new card).
- For example, in a 3-player game:
  - Nothing is played on the stacks.
  - Alice clues 3's to Cathy, which touches one 3, the red 3.
  - Bob blind-plays blue 1. At this point, everyone knows that Alice has performed a *3 Bluff*, and from Cathy's perspective, her 3 can be any 3 at all.
  - Cathy discards.
  - Alice clues 3's to Cathy, which re-touches the red 3 (and gives no additional information to it).
  - Bob blind-plays red 1. If this was a *3 Bluff*, then no-one would be promised the red 2. However, since no new information was given, it must be a *No-Information Double Finesse*. Bob sees that Cathy does not have the red 2, so he must have the red 2, and can blind-play it on his next turn.

<NoInformationDoubleFinesse />

- The "no-information" principle can also be used to perform a *No-Information Layered Finesse* on the next player. (The next player will know that it is a *Layered Finesse* instead of a *Bluff* because some other more-useful clue could have been given to initiate the *Bluff*.)

<br />

### The No-Information Double Bluff

- Usually, a "no-information" clue conveys a *Double Finesse*. But you can also use it to perform a *Double Bluff* (or a *Double Half Bluff*). For example, in a 3-player game:
  - Nothing is played on the stacks.
  - Alice clues 3's to Cathy, which touches one 3, the red 3.
  - Bob blind-plays blue 1. At this point, everyone knows that Alice has performed a *3 Bluff*, and from Cathy's perspective, her 3 can be any 3 at all.
  - Cathy discards.
  - Alice clues 3's to Cathy, which re-touches the red 3 (and gives no additional information to it).
  - Bob blind-plays green 1. If this was a *3 Bluff*, then no-one would be promised the green 2. However, since no new information was given, it must be a *No-Information Double Finesse*.
  - Cathy sees that Bob does not have the green 2, so she must have the green 2, so she blind-plays her *Finesse Position* card, and it is yellow 1 instead of green 2.
  - Since two cards were blind-played (that did not connect to anything), everyone now knows that the *No-Information* clue was a *Double Bluff* instead of a *Double Finesse*. From Cathy's perspective, her 3 can (still) be any 3 at all.

<NoInformationDoubleBluff />
