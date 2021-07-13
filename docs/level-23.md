---
id: level-23
title: Level 23 - Unnecessary Moves
---

import UnnecessaryTrashPushIgnition from '@site/image-generator/yml/level-23/unnecessary-trash-push-ignition.yml';
import UnnecessaryTrashFinesseChopMove from '@site/image-generator/yml/level-23/unnecessary-trash-finesse-chop-move.yml';
import UnnecessaryTrashFinesseTrashPush from '@site/image-generator/yml/level-23/unnecessary-trash-finesse-trash-push.yml';
import UnnecessaryBadChopMoveEjection from '@site/image-generator/yml/level-23/unnecessary-bad-chop-move-ejection.yml';

## Unnecessary Moves

- Experienced players will know about all sorts of tricky ways to "get" cards - the *Trash Bluff*, the *Trash Finesse*, the *Unknown Trash Discharge*, the *Trash Push*, and so forth.
- In most cases, these complicated moves end up being a 1-for-1, which is not very efficient. Consider that doing a complicated move like a *Trash Bluff* as a 1-for-1 is pretty pointless if the cluer can instead just give a direct *Play Clue* to the card that needs to be played as a 1-for-1. Giving "normal" *Play Clues* is much less likely to go wrong!
- Therefore, advanced moves are generally used in situations where the card that needs to be played is hard to clue directly. For example:
  - It could be "blocked" by other cards (e.g. two of the same card in the hand).
  - It could be on chop and "blocked" in the sense that any clue given would look like a *Save Clue* instead of a *Play Clue*.
  - And so on.
- **An *unnecessary* move is defined as a "complicated" move that is performed when the cluer could have instead given a direct *Play Clue*.**
- *Unnecessary* moves do "one extra thing" on top of the normal meaning of the move. Depending on the situation, the "extra" thing will be either:
  - an *Ignition* (with known trash)
  - a *Chop Move* (with unknown trash off chop)
  - a *Trash Push* (with unknown trash on chop)
- Remember that a move is only *unnecessary* if it does not have any side benefits. Specifically:
  - A move is **not** *unnecessary* if it "picked up" an extra useful card (e.g. *Unknown Trash Discharges* commonly do this).
  - A move is **not** *unnecessary* if it also fixed an impending misplay or a violation of *Good Touch Principle*.
  - A move is **not** *unnecessary* if it also "filled-in" previously-clued cards in the hand of the person who received the clue.
    - For simplicity, only positive clues "count" as being *Necessary*. "Filling-in" a card with a negative clue doesn't count.

<br />

### Unnecessary Moves with Known Trash --> Ignition

- If **known trash** is used as clue target, the "extra" thing is an *Ignition*. The *Ignition* can be on anyone on the team, similar to how *Double Ignition* works.

#### Example 1 - An Unnecessary Trash Push (with Ignition)

- For example, this would be an *Unnecessary Trash Push* in a 3-player game:
  - All of the 3's are played on the stacks.
  - Bob's hand is completely unclued.
  - Alice clues number 1 to Bob, touching a single 1 on Bob's slot 5 (his chop).
  - Bob knows that this is a *Trash Push* and blind-plays his slot 4. It is a red 4 and it successfully plays.
  - Cathy sees that Bob has no other red cards in his hand. Thus, Alice could easily clued red to Bob in order to "get" the red 4 in a straightforward way. That means that Alice performed an *Unnecessary Trash Push*.
  - Cathy blind-plays her *Finesse Position*. It is a red 5 and it successfully plays.

<UnnecessaryTrashPushIgnition />

#### Example 2 - An Unnecessary Trash Chop Move (with Ignition)

- For example, if a *Trash Chop Move* was done on a card that could be saved directly, the next player should blind-play their *Finesse Position* as an *Ignition*, and the clue receiver should still *Chop Move*.

<br />

### Unnecessary Moves with Unknown Trash Off Chop --> Chop Move

- If **unknown trash** is used as a clue target that is **off chop**, the team responds as if a *Trash Chop Move* was given.
- Note that *Unnecessary Chop Moves* are tricky in that they have **information asymmetry**: the player who blind-plays will **not** know that the card is chop moved, while everyone else will. All players will have to keep this in mind until the *Chop Move* has been demonstrated.

#### Example 1 - An Unnecessary Trash Finesse (with a Chop Move)

- For example, this would be an *Unnecessary Trash Finesse* in a 3-player game:
  - All of the 2's are played on the stacks except for the red 2.
  - Bob has a red 2 on his *Finesse Position* and no other red cards in his hand. Thus, Alice could give a red clue to Bob in order to "get" the red 2.
  - Cathy's hand is completely unclued.
  - Alice clues number 2 to Cathy, touching a blue 2 on slot 4. (Blue 2 is already played and is therefore trash.)
  - Bob knows that from Cathy's perspective, Alice's clue looks like a *Play Clue* on the final remaining 2 - the red 2. Cathy will go on to misplay the blue 2 as the red 2.
  - Thus, Bob knows that this is a *Trash Finesse* or *Trash Bluff*. He blind-plays his *Finesse Position* card. It is a red 2 and it successfully plays.
  - Cathy now knows that her 2 is trash (since Bob blind-played in response to the clue). However, Cathy also knows that this *Trash Finesse* was *unnecessary*, as Alice could have just clued red to Bob.
  - Thus, Cathy knows that this is an *Unnecessary Trash Finesse*, so she marks her slot 5 card as being *Chop Moved*.

<UnnecessaryTrashFinesseChopMove />

#### Example 2 - An Unnecessary Unknown Trash Discharge (with a Chop Move)

- For example, if an *Unknown Trash Discharge* was done to *Discharge* a card that could be *Play Clued* directly, the clue receiver should *Chop Move* the cards to the right of the clue target.

#### Example 3 - An Unnecessary Unknown Trash Discharge (with a Bad Chop Move Ejection)

- For example, in a 4-player game:
  - All the 2's are played on the stacks.
  - Donald's hand is as follows: `blue 4, blue 4, red 1, blue 1`
  - Alice clues red to Donald, touching the red 1 on slot 3.
  - Bob sees that this is an *Unknown Trash Discharge*. He plays his *Third Finesse Position*. It is a blue 2 and it successfully plays.
  - Cathy sees that Alice could have given a direct *Play Clue* to Bob's blue 2. Thus, this clue was *Unnecessary*, and Donald will go on to *Chop Move* the blue 1 on slot 4.
  - Thus, Cathy knows that this is a *Bad Chop Move Ejection*. She blind-plays her *Second Finesse Position* card. It is a blue 3 and it successfully plays.

<br />

### Unnecessary Moves with Unknown Trash On Chop --> Trash Push

- If **unknown trash** is used as a clue target that is **on chop**, the team responds as if a *Trash Push* was given.

#### Example 1 - An Unnecessary Trash Finesse (with a Trash Push)

- For example, this would be an *Unnecessary Trash Finesse* in a 3-player game:
  - All of the 2's are played on the stacks except for the red 2.
  - Bob has a red 2 on his *Finesse Position* and no other red cards in his hand. Thus, Alice can give a red clue to Bob in order to "get" the red 2.
  - Cathy's hand is completely unclued.
  - Alice clues number 2 to Cathy, touching a blue 2 on slot 5. (Blue 2 is already played and is therefore trash.)
  - Bob knows that from Cathy's perspective, Alice's clue looks like a *Play Clue* on the final remaining 2 - the red 2. Cathy will go on to misplay the blue 2 as the red 2.
  - Thus, Bob knows that this is a *Trash Finesse*. He blind-plays his *Finesse Position* card. It is a red 2 and it successfully plays.
  - Cathy now knows that her 2 is trash (since Bob blind-played in response to the clue). However, Cathy also knows that this *Trash Finesse* was *unnecessary*, as Alice could have just clued red to Bob.
  - Thus, Cathy knows that this is an *Unnecessary Trash Finesse*. She must respond as if a known-trash card was clued on her chop, so Cathy blind-plays her slot 4 card as a *Trash Push*.

<UnnecessaryTrashFinesseTrashPush />

#### Example 2 - An Unnecessary Trash Push Discharge (with a Trash Push)

- For example, if an *Trash Push Discharge* was performed by cluing a card in Cathy's hand, Bob should blind-play his *Third Finesse Position* to prove that the *Trash Pushed* card is trash. Then, Cathy should blind-play the card next to the card that she learned is trash.

#### Example 3 - An Unnecessary Bad Chop Move Ejection (with a Trash Push Discharge)

- The conversion to the known-trash interpretation also holds if the team has to prevent the clue receiver from *Trash Pushing* a card that's not playable.
- For example, in a 3-player game:
  - All of the 2's are played on the stacks.
  - Bob has a red 3 on his *Second Finesse Position* and no other red cards in his hand. Thus, Alice can give a red clue to Bob in order to "get" the red 3.
  - Donald's hand is as follows, from left-to-right: `red 1, green 1, blue 2, blue 1`
  - Alice clues number 2 to Donald, touching the blue 2 on slot 3.
  - Bob knows that from Donald's perspective, Alice's clue looks like a *Trash Chop Move*. Since Donald is about to chop move a trash card, Bob blind-plays his red 3 as a *Bad Chop Move Ejection*.
  - Since Bob's blind-play told Donald about a trash card, namely that the *Chop Moved* blue 1 was trash, Donald will now additionally interpret the clue as a *Trash Push*.
  - Cathy sees that Donald is about to play green 1 as a *Trash Push*, but green 1 is already played.
  - Thus, Cathy blind-plays her *Third Finesse Position* as a *Trash Push Discharge*.

<UnnecessaryBadChopMoveEjection />

<br />

### Other Examples

- More examples of *unnecessary* moves can be found [here](examples/unnecessary.md).
