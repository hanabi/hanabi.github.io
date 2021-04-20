---
id: level-23
title: Level 23 - Unnecessary Moves
---

import Ignition from '@site/image-generator/yml/level-23/ignition.yml';
import ChopMove from '@site/image-generator/yml/level-23/chop-move.yml';
import TrashPush from '@site/image-generator/yml/level-23/trash-push.yml';
import TrashPushDischarge from '@site/image-generator/yml/level-23/trash-push-discharge.yml';

- Level 23 strategies should only be learned if you have 420+ games of experience with the group.

<br />

## Unnecessary Moves

- Experienced players will know about all sorts of tricky ways to "get" cards - the *Trash Bluff*, the *Trash Finesse*, the *Unknown Trash Discharge*, the *Trash Push*, and so forth.
- In most cases, these complicated moves end up being a 1-for-1, which is not very efficient. Consider that doing a complicated move like a *Trash Bluff* as a 1-for-1 is pretty pointless if the cluer can instead just give a direct *Play Clue* to the card that needs to be played as a 1-for-1. Giving "normal" *Play Clues* is much less likely to go wrong!
- Therefore, advanced moves are generally used in situations where the card that needs to be played is hard to clue directly. For example:
  - It could be "blocked" by other cards (e.g. two of the same card in the hand).
  - It could be on chop and "blocked" in the sense that any clue given would look like a *Save Clue* instead of a *Play Clue*.
  - And so on.
- **An *unnecessary* move is defined as a "complicated" move that is performed when the cluer could have instead given a direct play clue.**
- *Unnecessary* moves do "one extra thing" on top of the normal meaning of the move. Depending on the situation, the "extra" thing will be either:
  - an *Ignition* (with known trash)
  - a *Chop Move* (with unknown trash off-chop)
  - a *Trash Push* (with unknown trash on chop)
- Remember that a move is only *unnecessary* if it does not have any side benefits. Specifically:
  - A move is **not** *unnecessary* if it "picked up" an extra useful card (e.g. *Unknown Trash Discharges* commonly do this).
  - A move is **not** *unnecessary* if it also fixed an impending misplay or a violation of *Good Touch Principle*.
  - A move is **not** *unnecessary* if it also "filled-in" previously-clued cards in the hand of the person who received the clue.
    - For simplicity, only positive clues "count" as being *Necessary*. "Filling-in" a card with a negative clue doesn't count.

<br />

### Unnecessary Moves with Known Trash --> Ignition

- If **known trash** is used as clue target, the "extra" thing is an *Ignition*. The *Ignition* can be on anyone on the team, similar to how *Double Ignition* works.
- For example, this would be an *Unnecessary Trash Push* in a 3-player game:
  - All of the 3's are played on the stacks.
  - Bob's hand is completely unclued.
  - Alice clues number 1 to Bob, touching a single 1 on Bob's slot 5 (his chop).
  - Bob knows that this is a *Trash Push* and blind-plays his slot 4. It is a red 4 and it successfully plays.
  - Cathy sees that Bob has no other red cards in his hand. Thus, Alice could easily clued red to Bob in order to "get" the red 4 in a straightforward way. That means that Alice performed an *Unnecessary Trash Push*.
  - Cathy blind-plays her *Finesse Position*. It is a red 5 and it successfully plays.

<Ignition />

- For example, if an *Unnecessary Trash Chop Move* was done on a card that could be saved directly, the next player should blind-play their *Finesse Position*, and the clue receiver should still *Chop Move*.

<br />

### Unnecessary Moves with Unknown Trash
- If Bob already has to play to tell the clue receiver that the clue target is trash, as an "extra thing" the team also interprets the clue as the **known trash** version of the clue.
- If the focus of the clue was off-chop trash, this will be a *Trash Chop Move*.
- If the focus of the clue was a trash card on chop, this will be a *Trash Push*.

<br />

### Unnecessary Moves with Unknown Trash: Off-Chop Examples

- If **unknown trash** is used as a clue target that is off-chop, the team responds as if a *Trash Chop Move* was given.
- For example, this would be an *Unnecessary Trash Finesse* in a 3-player game:
  - All of the 2's are played on the stacks except for the red 2.
  - Bob has a red 2 on his *Finesse Position* and no other red cards in his hand. Thus, Alice could give a red clue to Bob in order to "get" the red 2.
  - Cathy's hand is completely unclued.
  - Alice clues number 2 to Cathy, touching a blue 2 on slot 4. (Blue 2 is already played and is therefore trash.)
  - Bob knows that from Cathy's perspective, Alice's clue looks like a *Play Clue* on the final remaining 2 - the red 2. Cathy will go on to misplay the blue 2 as the red 2.
  - Thus, Bob knows that this is a *Trash Finesse* or *Trash Bluff*. He blind-plays his *Finesse Position* card. It is a red 2 and it successfully plays.
  - Cathy now knows that her 2 is trash (since Bob blind-played in response to the clue). However, Cathy also knows that this *Trash Finesse* was *unnecessary*, as Alice could have just clued red to Bob.
  - Thus, Cathy knows that this is an *Unnecessary Trash Finesse*, so she marks her slot 5 card as being *Chop Moved*.

<ChopMove />

- For example, Alice performs an *Unnecessary Unknown Trash Discharge* by cluing Cathy. Then Bob should blind-play his *Third Finesse Position* (from the clue), and Cathy should *Chop Move* the cards right of the clue target (from the unnecessariness).
- For example, Alice performs an *Unnecessary Unknown Trash Discharge* on a single off-chop card in Donald's hand, while Donald's chop is trash. Now Bob blind-plays his *Third Finesse Position* (from the clue). Cathy sees that Bob's card could have been clued directly, so Donald is about to chop move a trash card. Therefore Cathy plays her second finesse position as an additional *Bad Chop Move Ejection*.
- Importantly, note that *Unnecessary Chop Moves* are tricky in that they have **information asymmetry**: the player who blind-plays will **not** know that the card is chop moved, while everyone else will. All players will have to keep this in mind until the *Chop Move* has been demonstrated.

<br />

### Unnecessary Moves with Unknown Trash: On-Chop Examples

- If **unknown trash** is used as a clue target that is on-chop, then the corresponding known-trash clue is a *Trash Push*.
- For example, this would be an *Unnecessary Trash Finesse* in a 3-player game:
  - All of the 2's are played on the stacks except for the red 2.
  - Bob has a red 2 on his *Finesse Position* and no other red cards in his hand. Thus, Alice can give a red clue to Bob in order to "get" the red 2.
  - Cathy's hand is completely unclued.
  - Alice clues number 2 to Cathy, touching a blue 2 on slot 5. (Blue 2 is already played and is therefore trash.)
  - Bob knows that from Cathy's perspective, Alice's clue looks like a *Play Clue* on the final remaining 2 - the red 2. Cathy will go on to misplay the blue 2 as the red 2.
  - Thus, Bob knows that this is a *Trash Finesse*. He blind-plays his *Finesse Position* card. It is a red 2 and it successfully plays.
  - Cathy now knows that her 2 is trash (since Bob blind-played in response to the clue). However, Cathy also knows that this *Trash Finesse* was *unnecessary*, as Alice could have just clued red to Bob.
  - Thus, Cathy knows that this is an *Unnecessary Trash Finesse*. Therefore Cathy additionally responds as if a known trash card was clued on her chop, so she blind-plays her slot 4 as a *Trash Push*.

<TrashPush />

- For example, if an *Unnecessary Trash Push Discharge* was performed by cluing a card in Cathy's hand, Bob should blind-play his *Third Finesse Position* (from the clue). Note that, even though the focus of the card touched by the clue was known trash, Bob had to blind-play to tell Cathy that the card she was about to push is trash, so the 'unknown trash' rules apply. Therefore Cathy also performs a *Trash Push*, playing the card next to the card that she learned is trash.
- The conversion to the known-trash interpretation also holds if the team has to prevent the clue receiver to *Trash Push* a card that's not playable:
  - All of the 2's are played on the stacks.
  - Bob has a red 3 on his *Second Finesse Position* and no other red cards in his hand. Thus, Alice can give a red clue to Bob in order to "get" the red 3.
  - Donald's hand is r1 - g1 - b2 - b1, completely unclued.
  - Alice clues number 2 to Donald, touching the blue 2 on slot 3.
  - Bob knows that from Donald's perspective, Alice's clue looks like a *Trash Chop Move*. Since Donald is about to chop move a trash card, Bob ejects his red 3 as a *Bad Chop Move Ejection*.
  - Since Bob's blind play told Donald about a trash card, namely that the chop-moved blue 1 was trash, Donald will now additionally interpret the clue as a *Trash Push*.
  - Cathy sees that Donald is about to play green 1 as a *Trash Push*, but green 1 is already played.
  - Thus, Cathy plays her third finesse position as a *Trash Push Discharge*.

<TrashPushDischarge />

<br />

### Other Examples

- More examples of *unnecessary* moves can be found [here](examples/unnecessary.md).
