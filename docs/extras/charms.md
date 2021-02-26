---
id: charms
title: Charms
---

- A *Charm* refers to a blind-play in which someone plays an unrelated card from their *Fourth Finesse Position*. For example, if a player's hand is completely unclued, their *Fourth Finesse Position* is slot 4.
- *Charms* fall outside of the *Signal Shift* framework. Instead, playing from *Fourth Finesse Position* is required in order to disambiguate the clue from being a *Finesse*, *Ejection*, or *Discharge*.
- Just like a *Bluff*, a *Charm* can only be performed on the very next player.

### The 4 Charm

- The *4 Charm Unknown Trash Discharge* is introduced at [level 18](level_18.md#the-4-charm).

#### Interaction with the Out-of-Order Finesse

- The *Out-of-Order Finesse* always takes precedence over a *4 Charm* or a *4's Double Bluff*, because of *Bob's Truth Principle*.
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Donald's hand is as follows, from left to right: `red 4, red 1, blue 3, blue 3`
  - Alice clues red to Donald, touching the red 4 on slot 1 and the red 1 on slot 2. This is a *Play Clue*.
  - Bob knows that this could be the truth as an *Out-of-Order Finesse*. If that is the case, he should clue number 4 to Donald, allowing him to play the red 1. Then, Bob can blind-play the red 2 and the red 3 (into the playable red 4).
  - Bob knows that this could also be a *4 Charm*, since the red 4 is *three-away-from-playable* and Bob does not see any other red cards on *Finesse Position*.
  - However, Bob knows that he should always assume the truth over a lie, so he assumes that Alice intends for an *Out-of-Order Finesse*.

### The Safety Charm (Declined 5 Pull)

- This convention only applies in the *Low Score Phase*.
- If a card could be freely gotten by initiating a *5 Pull*, it would be very strange if the *5 Pull* was declined and the card was directly touched as a 1-for-1.
- When this occurs, this player is trying to communicate something deeper - a *Charm* on the very next player.
- Normally, when a card is blind-played after an innocent-looking *Play Clue*, the clue receiver knows to not play that card anymore. In this situation, since the *Fourth Finesse Position* card was played instead of the *First*, *Second*, or *Third*, the clue receiver will know that their card is still playable **and** that the unclued card directly to its left must be a 5.
- This untouched 5 is now globally known; everyone on the team should treat it as a *Chop Moved* card.
- For example, in a 4-player game:
  - Red 1 is played on the stacks.
  - It is the *Early Game* and the *Low Score Phase*.
  - Alice clues red to Cathy, touching a new red 2 on slot 2.
  - Cathy hand is, from newest to oldest: `blue 5, red 2, blue 3, blue 2`
  - Bob sees that Alice could have cleanly *5 Pulled* Cathy's red 2. (It is globally known that Alice had another *Play Clue* to give, so a number 5 clue would not have been interpreted as a *5 Stall*.)
  - Bob knows that this signals a blind-play:
    - A *First Finesse Position* blind-play would look like a *Bluff* on a red 3, which would be a *Lie*.
    - A *Second Finesse Position* blind-play would look like a *5 Color Ejection* on a red 5, which would be a *Lie*.
    - A *Third Finesse Position* blind-play would look like an *Unknown Trash Discharge* on a red 1, which would be a *Lie*.
  - Thus, Bob knows that this must be a *Safety Charm*. He blind-plays his *Fourth Finesse Position*. It is a blue 1 and it successfully plays.
  - Cathy knows that she must have the red 2. She also knows that her slot 1 card is a 5 that could have been used for a *5 Pull*. Cathy marks the 5 as being *Chop Moved* for later.
- *4 Charms* take precedence over *Safety Charms*.
- More examples of a *Safety Charm* can be found [here](examples/safety_charm.md).
