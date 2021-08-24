---
id: discards-misplays
title: Discards & Misplays
---

import UnnecessaryGeneration from '@site/image-generator/yml/extras/unnecessary-generation.yml';
import ShallowDiscard from '@site/image-generator/yml/extras/shallow-discard.yml';
import ShallowMisplay from '@site/image-generator/yml/extras/shallow-misplay.yml';
import PromiseClue from '@site/image-generator/yml/extras/promise-clue.yml';

### The Unnecessary Generation Discard

- Sometimes, in order to satisfy *Save Principle*, a player will perform an unnecessary *Generation Discard*, which generates a clue to save a card that they actually already have in their hand.
- This puts the next player in an ambiguous situation: was it really a *Generation Discard*, or could it a *Scream Discard*? In order to cover both situations, they should not *Chop Move*, but they should also not discard on this turn.
- For example, in a 3-player game:
  - Red 3 is played on the stacks. No blue cards are played on the stacks.
  - Alice has a blue 1 in her hand. She knows the exact identity of it, so it is known playable.
  - Alice also has a 4 clued in her hand. She does not know what color it is.
  - There are 0 clues, so if Alice plays the blue 1, Bob will be forced to discard.
  - Alice sees that Cathy has a red 4 on chop, which is playable. If Alice does not have red 4 in her hand, then Cathy could potentially discard the red 4 (after Bob is forced to discard).
  - So, Alice performs a *Generation Discard* to generate a clue so that Bob can clue the get the red 4, if necessary.
  - Bob sees that Alice does indeed already have the red 4 in her hand, so from his perspective, if Alice was performing a *Generation Discard*, it was unnecessary.
  - However, it could also be the case that Bob's chop is unsafe. So, Bob will **not** clue the red 4 on Cathy's chop, but he **will** spend the clue in some other productive fashion. If Bob has nothing productive to do, he must "burn" a clue, similar to what happens when a *Scream Discard* occurs.

<UnnecessaryGeneration />

### The Odd Discard

- At the end of the game, it is normal for players to use a *Positional Discard* to get 1 card to blind-play, and to use a *Positional Misplay* to get 2 cards to blind-play.
- If a player does a *Positional Discard* to only get 1 card when they could have performed a *Positional Misplay* instead, then this is quite odd. If they are not making a mistake, they must be trying to send an additional message.
- In this situation, they intend for it to promise 3 blind-plays instead of 1.
- This is called an *Odd Discard* because from Bob's perspective, Alice could have performed a misplay.
- For example, in a 4-player game:
  - The team has 0 strikes.
  - It is the *End-Game* and Alice sees all of the remaining useful cards. Thus, she can *Positionally Discard* or *Positionally Misplay* any card that she wants in her hand.
  - Alice sees that Bob, Cathy, and Donald all have playable cards on slot 2.
  - Alice blind-discards her slot 2 card as an *Odd Discard*.
  - From Bob's perspective, he sees that Cathy and Donald have a playable card on slot 2. Thus, Bob expected Alice to perform a *Positional Misplay* or her slot 2 card.
  - When Bob sees that Alice performed a *Positional Discard* instead of a *Positional Misplay*, he knows that she must be intending for 3 blind-plays to happen (instead of 1) as an *Odd Discard*.
  - Bob blind-plays his slot 2 card (to match Alice's slot 2 discard). It successfully plays.
  - Cathy and Donald are both in a similar situation to Bob. (They expected Alice to perform a *Positional Misplay*.)
  - Thus, they both know that this is an *Odd Discard*, and blind-play their slot 2 cards (to match Alice's slot 2 discard).

<OddDiscard />

- In some specific situations, a *Positional Discard* from chop would not work, because it would just look like a normal discard. In these situations, a *Positional Misplay* would only get 1 blind-play (instead of 2) and an *Odd Discard* would only get 2 blind-plays (instead of 3).

<br />

### The Even Misplay

- First, see the section on the *[Odd Discard](#the-odd-discard)*.
- In a 5-player game, it possible to perform an *Even Misplay*, causing 4 people to blind-play from the same slot. (This works for the same reasons that an *Odd Discard* works.)
- For example, in a 5-player game:
  - The team has 0 strikes.
  - It is the *End-Game* and Alice sees all of the remaining useful cards. Thus, she can *Positionally Discard* or *Positionally Misplay* any card that she wants in her hand.
  - Alice sees that Bob, Cathy, Donald, and Emily all have playable cards on slot 2.
  - Alice blind-plays her slot 2 card as an *Even Misplay*.
  - From Bob's perspective, he sees that Cathy, Donald, and Emily have a playable card on slot 2. Thus, Bob expected Alice to perform an *Odd Discard* or her slot 2 card.
  - When Bob sees that Alice performed a *Positional Misplay* instead of an *Odd Discard*, he knows that she must be intending for 4 blind-plays to happen (instead of 2) as an *Even Misplay*.
  - Bob blind-plays his slot 2 card (to match Alice's slot 2 discard). It successfully plays.
  - Cathy, Donald, and Emily are all in a similar situation to Bob. (They expected Alice to perform an *Odd Discard*.)
  - Thus, they all know that this is an *Even Misplay*, and blind-play their slot 2 cards (to match Alice's slot 2 discard).

<EvenMisplay />

### The Promise Clue & The Promise Discard

- First, see the section on the *[Certain Finesse](../level-9.md#the-certain-finesse--the-certain-discard)*.
- When a *Certain Finesse* happens, players can blind-discard their *Finesse Position* card, because a *Layered Finesse* is impossible. However, when a normal *Finesse* happens, players cannot blind-discard anything, just in case a *Layered Finesse* is happening.
- Sometimes, after a *Finesse* has occurred, but before the promised card has been blind-played, a teammate might find strategic value in duplicating the promised card.
- If a teammate duplicates the promised card, and the duplication was not a last-resort, then it **promises** that the duplicated card is exactly on *Finesse Position*. This is called a *Promise Clue*.
- The *Promise Clue* allows the recipient of the *Finesse* to blind-discard the card as a *Promise Discard*. (A *Promise Discard* is almost exactly like a *Certain Discard*.)
- Finally, from the perspective of the player receiving the clue, if they play the duplicated card first, then they should know that the focus of the original clue was on the other, non-duplicated card, and they can go on to play it afterwards. (Otherwise, the original clue would be fairly low-value.)
- For example, in a 5-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues red to Donald, touching a red 2 as a *Play Clue*. This is a *Finesse* on Cathy's red 1.
  - Bob sees that Alice has four 1's in her hand. This would be a juicy 4-for-1 clue.
  - Bob clues number 1 to Alice, touching four 1's: red 1, yellow 1, green 1, and blue 1.
  - Cathy knows that Alice performed a *Finesse* on her for the red 1. If she happens to play the red 1, then Alice will go on to misplay the red 1 as a purple 1.
  - Cathy also knows that it is possible that Alice performed a *Layered Finesse* on her. For example, Cathy could have purple 1 in her *Finesse Position* and red 1 in her *Second Finesse Position*. If this were the case, and Cathy blind-discarded the purple 1, then the team could lose the only visible copy of purple 1, which would be really bad.
  - However, because of the *Promise Clue* convention, Cathy knows that Bob has promised that the red 1 happens to be exactly on her *Finesse Position* and that no *Layered Finesse* is happening.
  - Cathy blind-discards her *Finesse Position* card as a *Promise Discard*.

<PromiseClue />

- Note that as long as the duplication clue touches two or more cards (e.g. with an efficiency of a 1-for-1), the *Promise Discard* interpretation takes priority over the *Unknown Trash Discharge* interpretation.
