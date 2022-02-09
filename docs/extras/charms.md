---
id: charms
title: Charms
---

import FourCharm from '@site/image-generator/yml/extras/charms/four-charm.yml';
import UnknownTrashCharm from '@site/image-generator/yml/extras/charms/unknown-trash-charm.yml';

- A *Charm* refers to a blind-play in which someone plays an unrelated card from their *Fourth Finesse Position*. For example, if a player's hand is completely unclued, their *Fourth Finesse Position* is slot 4.
- *Charms* fall outside of the *Signal Shift* framework. Instead, playing from *Fourth Finesse Position* is required in order to disambiguate the clue from being a *Finesse*, *Ejection*, or *Discharge*.
- Just like a *Bluff*, a *Charm* can only be performed on the very next player.

<br />

### The 4 Charm

- The *4 Charm* is introduced at [level 22](../level-22.md#the-4-charm).

#### Interaction with Double Bluffs Where Cathy Has a One-Away-From-Playable Card

- As stated in the level 22 section, *Double Bluffs* have precedence over *4 Charms*. However, there is one small exception.
- *Double Bluffs* do not have precedence in the situation where Bob sees that Cathy has a *one-away-from-playable* card on her *Finesse Position*. Here, it is technically possible that Bob will blind-play the exact card that makes Cathy's *Finesse Position* playable. But since this is so unlikely, we agree that players in this situation should revert to a *4 Charm* interpretation.
- For example, in a 4-player game:
  - Red 1 is played on the stacks.
  - Alice clues blue to Donald, touching a blue 4 as a *Play Clue*. (Blue 4 is currently three-away-from-playable.)
  - Bob sees that Cathy has a red 3 on her *Finesse Position*.
  - If Bob has exactly a red 2 on his *Finesse Position*, then he knows that Alice's clue would work as a *4's Double Bluff*.
  - However, since the red 3 on Cathy's *Finesse Position* is *one-away-from-playable*, Bob knows that *4 Charms* should take precedence.
  - Bob blind-plays his *Fourth Finesse Finesse* card. It is a red 2 and successfully plays on the stacks.

#### Interaction with the Out-of-Order Finesse

- First, see the section on the *[Out-of-Order Finesse](../level-19.md#the-out-of-order-finesse)*.
- The *Out-of-Order Finesse* always takes precedence over a *4 Charm* or a *4's Double Bluff*, because of *Bob's Truth Principle*.
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Donald's hand is as follows, from left to right: `red 4, red 1, blue 3, blue 3`
  - Alice clues red to Donald, touching the red 4 on slot 1 and the red 1 on slot 2. This is a *Play Clue*.
  - Bob knows that this could be the truth as an *Out-of-Order Finesse*. If that is the case, he should clue number 4 to Donald, allowing him to play the red 1. Then, Bob can blind-play the red 2 and the red 3 (into the playable red 4).
  - Bob knows that this could also be a *4 Charm*, since the red 4 is *three-away-from-playable* and Bob does not see any other red cards on *Finesse Position*.
  - However, Bob knows that he should always assume the truth over a lie, so he assumes that Alice intends for an *Out-of-Order Finesse*.

<FourCharm />

### The Unknown Trash Charm (UTC)

- First, see the section on the *[Unknown Trash Discharge](../level-15.md#the-unknown-trash-discharge-1-for-1-form-utd)*.
- Normally, after an *Unknown Trash Discharge*, non-focused cards are known to be "good".
- However, what if a player performs an *Unknown Trash Discharge* where **all** of the non-focused cards are trash? A *Discharge* would incorrectly signal that the non-focused cards are useful.
- Instead, this should signal a *Charm* on the very next player.
- For example, in a 3-player game:
  - All of the 2's are played on the stacks.
  - Alice clues red to Cathy, touching a red 1 on slot 1 and a red 2 on slot 2.
  - Normally, Bob would treat this clue as an *Unknown Trash Discharge*. However, if he *Discharges*, then Cathy will discard the red 1 and mark the red 2 as either a red 3, a red 4, or a red 5, which would be a *Lie*.
  - Instead, Bob knows that this signals an *Unknown Trash Charm*, so he blind-plays his *Fourth Finesse Position*. It is a blue 3 and it successfully plays.

<UnknownTrashCharm />

<br />

### The Junk Charm (for 1's)

- Sometimes, when giving a number 1 *Play Clue* for 1's, a *Bad Touch* is unavoidable. But what if a player does this when a color clue would have avoided a *Bad Touch*?
- If all the non-focused 1's are trash, the clue must be calling for something extra - a *Charm* on the very next player.
- After the *Charm* occurs, the clued player will know that **only** the focus of the 1's clue is playable.
- For example, in a 3-player game:
  - Green 1 is played on the stacks.
  - Alice clues number 1 to Cathy, touching a red 1 on slot 5 and a green 1 on slot 2.
  - Cathy's hand is, from newest to oldest: `yellow 2, green 1, blue 3, purple 5, red 1`
  - Bob can see that Alice could have clued red to only touch the red 1 and avoid a *Bad Touch*.
  - Bob knows that this signals a blind-play:
    - A *Finesse Position* blind-play would look like a *Trash Finesse*, which would be a *Lie*.
    - A *Second Finesse Position* blind-play would look like a *Trash Push Ejection*, which would be a *Lie*.
    - A *Third Finesse Position* blind-play would look like a *Junk Discharge*, which would be a *Lie*.
  - Thus, Bob knows this must be a *Junk Charm* and blind-plays his *Fourth Finesse Position*. It is a blue 1 and it successfully plays.
