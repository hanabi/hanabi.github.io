---
id: discharges
title: Discharges
---

import UnknownDupeDischarge from '@site/image-generator/yml/extras/discharges/unknown-dupe-discharge.yml';
import UnknownDupeDischarge2 from '@site/image-generator/yml/extras/discharges/unknown-dupe-discharge-2.yml';

- A *Discharge* refers to a *Signal Shift* blind-play in which someone plays an unrelated card from their *Third Finesse Position*.
  - For example, if a player's hand is completely unclued, their *Third Finesse Position* is slot 3.
- Just like a *Bluff*, a *Discharge* can only be performed on the very next player.

<br />

### The Unknown Trash Discharge

- The *Unknown Trash Discharge* is introduced at [level 15](../level-15.md#the-unknown-trash-discharge-1-for-1-form-utd).
- This results in a *Signal Shift* from *Play* --> *Trash*.

<br />

### The 5 Number Discharge (5ND)

- The *5 Number Discharge* is introduced in [level 17](../level-17.md#5-number-discharge-5nd).
- This results in a *Signal Shift* from *Play* --> *Trash* (on the *5 Pulled* card).

<br />

### Unknown Dupe Discharge (UDD)

- First, see the section on *[Unknown Trash Discharge](../level-15.md#the-unknown-trash-discharge-1-for-1-form-utd)*.
- Typically, players closely follow *Good Touch Principle*, since duplicating cards is confusing and wastes efficiency on follow-up *Fix Clues*.
- However, there are still plenty of situations where players will intentionally duplicate a card:
  1. When it is the first turn of the game (and there is nothing else to do).
  1. When the team is at 8 clues (and there is nothing else to do).
  1. When a player is in a *Double Discard Situation* (and there is nothing else to do).
  1. When the team is losing and nearing the *End-Game* (and *Tempo* on playable cards is really important).
  1. When the efficiency of getting a *Double Finesse* or *Triple Finesse* outweighs the disadvantage of potentially having to give a *Fix Clue* later.
  1. When a *Phantom Playable Card* is at risk of being discarded and the preceding cards must be clued as soon as possible.
- If a player uses a clue to duplicate a card, and these 6 criteria do not apply, then they must be trying to send an additional message.
- In this case, they intend for a *Discharge* to communicate the "badness" of the focused card. This is called an *Unknown Dupe Discard* (and works in a very similar way to the *Unknown Trash Discharge*).
- After an *Unknown Dupe Discard*, the focus of the clue can be any unknown duplicated card. The player will only know which specific duplicated card it is after they discard it. Once they discard it, they should write *Elimination Notes* on the matching cards in their hand.
- For example, in a 3-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 5 to Bob as a *5 Save*.
  - Bob's hand is as follows: `red 2, red 2, red 4, blue 4, blue [5]`
  - Bob clues green to Cathy as a play clue.
  - Cathy clues red to Bob, touching the red 2 on slot 1, the red 2 on slot 2, and the red 4 on slot 3.
  - Alice knows that Cathy is violating *Good Touch Principle* and duplicating the red 2. There doesn't seem to be a very good reason for this, so this must be an *Unknown Dupe Discharge*.
  - Alice blind-plays her *Third Finesse Position*. It is a blue 1 and it successfully plays on the stacks.
  - Normally, Bob would think that this was an *Unknown Trash Discharge*. However, no red trash cards exist. Thus, this must have been an *Unknown Dupe Discharge*.
  - Bob discards his slot 1 card (the focus of the clue). It is revealed to be a red 2. Now, Bob writes *Elimination Notes* for the red 2 on his slot 2 and his slot 3.

<UnknownDupeDischarge />

- *Unknown Dupe Discharges* can be initiated with either color clues or number clues.
- *Unknown Dupe Discharges* only apply if **the two duplicated cards are in the same person's hand**.
  - It is explicitly illegal to perform an *Unknown Dupe Discharge* that duplicates a card in someone else's hand. If this happens, the clue must have some other meaning.
- Remember that after an *Unknown Dupe Discharge*, the player who received the clue is supposed to *discard the focus of the clue*.
  - However, in the case where only two new cards are touched, then the player who received the clue knows that both of these cards must be the same. In this special case, they can discard the non-focused card to cause a *Trash Order Chop Move*.
- In order for players to determine whether or not a *Double Finesse* or a *Triple Finesse* is happening, they should use the same *two-or-more-blind-plays* rule that applies to *5 Color Ejections*.
- For example, in a 3-player game (similar to the previous example):
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 5 to Bob as a *5 Save*.
  - Bob clues number 5 to Alice as a *5 Save*.
  - Bob's hand is as follows: `red 3, red 3, red 4, blue 4, blue [5]`
  - Cathy clues red to Bob, touching the red 3 on slot 1, the red 3 on slot 2, and the red 4 on slot 3.
  - Alice knows that Cathy is violating *Good Touch Principle* and duplicating the red 3. One excellent reason to do this would be to get a *Double Finesse* on red 1 + red 2 into the red 3.
  - However, Alice also knows that she is supposed to use the *two-or-more-blind-plays* rule in this situation. Since Alice would have to blind-play two cards into the *Finesse*, a *Finesse* is unlikely. Thus, this must be an *Unknown Dupe Discharge*.
  - Alice blind-plays her *Third Finesse Position*. It is a blue 1 and it successfully plays on the stacks.

<UnknownDupeDischarge2 />

### The Trash Push Discharge

- First, see the section on the [Trash Push](../level-13.md#the-trash-push).
- Normally, when known-trash is touched as the focus of the clue, and the known-trash is on chop, it communicates a *Trash Push*.
- However, what if the *Trash Pushed* card is trash? The other players can see that this clue must have some other purpose - it should signal an *Discharge* on the very next player.
- This move is extremely similar to the *Unknown Trash Discharge*. In UTD, the focus of the clue is promised as trash. In the *Trash Push Discharge*, the *Trash Pushed* card is promised as trash.

<br />

### The Prophetic Discharge

- First, see the section on the [Prophetic Finesse](special-finesses.md#the-prophetic-finesse-for-1s).
- *Prophetic Finesses* can only be given with a number 1 clue.
- If a player tries to use a color clue to initiate a *Prophetic Finesse*, they instead intend for the next player to blind-play their *Third Finesse Position* (like an *Unknown Trash Discharge*).
- Other than that, everything else works like a *Prophetic Finesse* (e.g. one of the in-between players is promised to have the matching card on their *Finesse Position*).
- Unlike the *Prophetic Finesse*, the clued player should **only** treat this as *unnecessary* move if the *Discharged* card could have been cleanly clued.
- *Prophetic Discharges* can only be triggered by touching **exactly one 1**.
- *Prophetic Discharges* can only be triggered by using a color clue.
- *Prophetic Discharges* can be *Layered*. (See the *Prophetic Finesse* section for an example of this.)

<br />

### The Junk Discharge (for 1's)

- Usually, when two 1's are touched with a rank *Play Clue*, and one of them is good and one of them is bad, it is a *Stale 1's Clue*.
- However, for a *Stale 1's Clue* to work properly, there has to be enough context in the game for the focused card to be stale. What a number 1 clue is given that clearly focuses the wrong card? This must be communicating something extra.
- This situation cannot call for a *Trash Finesse* or *Trash Bluff*, because those moves promise that all of the ancillary touched cards are also trash (which is untrue in this case).
- Since playing slot 1 won't work, we agree that this should call for a *Discharge*. As a result, the clued player will know to only mark the focused 1 as trash and play the other 1 as normal.
