---
id: discharges
title: Discharges
---

import UnknownDupeDischarge from '@site/image-generator/yml/extras/discharges/unknown-dupe-discharge.yml';
import UnknownDupeDischarge2 from '@site/image-generator/yml/extras/discharges/unknown-dupe-discharge-2.yml';

- A *Discharge* refers to a _Signal Shift_ blind-play in which someone plays an unrelated card from their *Third Finesse Position*.
  - For example, if a player's hand is completely unclued, their *Third Finesse Position* is slot 3.
- Just like a *Bluff*, a *Discharge* can only be performed on the very next player.

<br />

### The Unknown Trash Discharge

- The _Unknown Trash Discharge_ is introduced at [level 15](../level-15.md#the-unknown-trash-discharge-1-for-1-form-utd).
- This results in a _Signal Shift_ from _Play_ --> _Trash_.

<br />

### The 5 Number Discharge (5ND)

- The _5 Number Discharge_ is introduced in [level 17](../level-17.md#5-number-discharge-5nd).
- This results in a _Signal Shift_ from _Play_ --> _Trash_ (on the _5 Pulled_ card).

<br />

### Unknown Dupe Discharge (UDD)

- First, see the section on _[Unknown Trash Discharge](../level-15.md#the-unknown-trash-discharge-1-for-1-form-utd)_.
- Typically, players closely follow _Good Touch Principle_, since duplicating cards is confusing and wastes efficiency on follow-up _Fix Clues_.
- However, there are still plenty of situations where players will intentionally duplicate a card:
  1. When it is the first turn of the game (and there is nothing else to do).
  1. When the team is at 8 clues (and there is nothing else to do).
  1. When a player is in a _Double Discard Situation_ (and there is nothing else to do).
  1. When the team is losing and nearing the _End-Game_ (and _Tempo_ on playable cards is really important).
  1. When the efficiency of getting a _Double Finesse_ or _Triple Finesse_ outweighs the disadvantage of potentially having to give a _Fix Clue_ later.
  1. When a _Phantom Playable Card_ is at risk of being discarded and the preceding cards must be clued as soon as possible.
- If a player uses a clue to duplicate a card, and these 6 criteria do not apply, then they must be trying to send an additional message.
- In this case, they intend for a _Discharge_ to communicate the "badness" of the focused card. This is called an _Unknown Dupe Discharge_ (and works in a very similar way to the _Unknown Trash Discharge_).
- After an _Unknown Dupe Discharge_, the focus of the clue can be any unknown duplicated card. The player will only know which specific duplicated card it is after they discard it. Once they discard it, they should write _Elimination Notes_ on the matching cards in their hand.
- For example, in a 3-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 5 to Bob as a _5 Save_.
  - Bob's hand is as follows: `red 2, red 2, red 4, blue 4, blue [5]`
  - Bob clues green to Cathy as a play clue.
  - Cathy clues red to Bob, touching the red 2 on slot 1, the red 2 on slot 2, and the red 4 on slot 3.
  - Alice knows that Cathy is violating _Good Touch Principle_ and duplicating the red 2. There doesn't seem to be a very good reason for this, so this must be an _Unknown Dupe Discharge_.
  - Alice blind-plays her _Third Finesse Position_. It is a blue 1 and it successfully plays on the stacks.
  - Normally, Bob would think that this was an _Unknown Trash Discharge_. However, no red trash cards exist. Thus, this must have been an _Unknown Dupe Discharge_.
  - Bob discards his slot 1 card (the focus of the clue). It is revealed to be a red 2. Now, Bob writes _Elimination Notes_ for the red 2 on his slot 2 and his slot 3.

<UnknownDupeDischarge />

- _Unknown Dupe Discharges_ can be initiated with either color clues or number clues.
- _Unknown Dupe Discharges_ only apply if **the two duplicated cards are in the same person's hand**.
  - It is explicitly illegal to perform an _Unknown Dupe Discharge_ that duplicates a card in someone else's hand. If this happens, the clue must have some other meaning.
- Remember that after an _Unknown Dupe Discharge_, the player who received the clue is supposed to _discard the focus of the clue_.
  - However, in the case where only two new cards are touched, then the player who received the clue knows that both of these cards must be the same. In this special case, they can discard the non-focused card to cause a _Trash Order Chop Move_.
- In order for players to determine whether or not a _Double Finesse_ or a _Triple Finesse_ is happening, they should use the same _two-or-more-blind-plays_ rule that applies to _5 Color Ejections_.
- For example, in a 3-player game (similar to the previous example):
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 5 to Bob as a _5 Save_.
  - Bob clues number 5 to Alice as a _5 Save_.
  - Bob's hand is as follows: `red 3, red 3, red 4, blue 4, blue [5]`
  - Cathy clues red to Bob, touching the red 3 on slot 1, the red 3 on slot 2, and the red 4 on slot 3.
  - Alice knows that Cathy is violating _Good Touch Principle_ and duplicating the red 3. One excellent reason to do this would be to get a _Double Finesse_ on red 1 + red 2 into the red 3.
  - However, Alice also knows that she is supposed to use the _two-or-more-blind-plays_ rule in this situation. Since Alice would have to blind-play two cards into the _Finesse_, a _Finesse_ is unlikely. Thus, this must be an _Unknown Dupe Discharge_.
  - Alice blind-plays her _Third Finesse Position_. It is a blue 1 and it successfully plays on the stacks.

<UnknownDupeDischarge2 />

### The Trash Push Discharge

- First, see the section on the [Trash Push](../level-13.md#the-trash-push).
- Normally, when known-trash is touched as the focus of the clue, and the known-trash is on chop, it communicates a _Trash Push_.
- However, what if the _Trash Pushed_ card is trash? The other players can see that this clue must have some other purpose - it should signal an _Discharge_ on the very next player.
- This move is extremely similar to the _Unknown Trash Discharge_. In UTD, the focus of the clue is promised as trash. In the _Trash Push Discharge_, the _Trash Pushed_ card is promised as trash.

<br />

### The Prophetic Discharge

- First, see the section on the [Prophetic Finesse](special-finesses.md#the-prophetic-finesse-for-1s).
- _Prophetic Finesses_ can only be given with a number 1 clue.
- If a player tries to use a color clue to initiate a _Prophetic Finesse_, they instead intend for the next player to blind-play their _Third Finesse Position_ (like an _Unknown Trash Discharge_).
- Other than that, everything else works like a _Prophetic Finesse_ (e.g. one of the in-between players is promised to have the matching card on their _Finesse Position_).
- Unlike the _Prophetic Finesse_, the clued player should **only** treat this as _unnecessary_ move if the _Discharged_ card could have been cleanly clued.
- _Prophetic Discharges_ can only be triggered by touching **exactly one 1**.
- _Prophetic Discharges_ can only be triggered by using a color clue.
- _Prophetic Discharges_ can be _Layered_. (See the _Prophetic Finesse_ section for an example of this.)

<br />

### The Junk Discharge (for 1's)

- Usually, when two 1's are touched with a rank _Play Clue_, and one of them is good and one of them is bad, it is a _Stale 1's Clue_.
- However, for a _Stale 1's Clue_ to work properly, there has to be enough context in the game for the focused card to be stale. What a number 1 clue is given that clearly focuses the wrong card? This must be communicating something extra.
- This situation cannot call for a _Trash Finesse_ or _Trash Bluff_, because those moves promise that all of the ancillary touched cards are also trash (which is untrue in this case).
- Since playing slot 1 won't work, we agree that this should call for a _Discharge_. As a result, the clued player will know to only mark the focused 1 as trash and play the other 1 as normal.
