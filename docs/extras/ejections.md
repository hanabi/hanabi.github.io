---
id: ejections
title: Ejections
---

import BadChopMove from '@site/image-generator/yml/extras/ejections/bad-chop-move.yml';
import RankChoice from '@site/image-generator/yml/extras/ejections/rank-choice.yml';
import SelfColor from '@site/image-generator/yml/extras/ejections/self-color.yml';

- An *Ejection* refers to a *Signal Shift* blind-play in which someone plays an unrelated card from their *Second Finesse Position*.
  - For example, if a player's hand is completely unclued, their *Second Finesse Position* is slot 2.
- Just like a *Bluff*, an *Ejection* can only be performed on the very next player.

<br />

### The 5 Color Ejection

- The *5 Color Ejection* is covered at [level 15](../level-15.md#the-5-color-ejection-5ce).
- This results in a *Signal Shift* from *Play* --> *Save*.

<br />

### Trash Push Ejection

- First, see the section on the [Trash Push](../level-13.md#the-trash-push).
- Normally, when known trash is touched as the focus of the clue, and the known trash is on chop, it communicates a *Trash Push*.
- However, what if the *Trash Pushed* card is two-or-more-away-from-playable? This would normally be a *Trash Push Double Finesse* on Bob, but that is unlikely.
- Instead, since no single play could ever prevent the *Pushed* card from immediately misplaying, Bob interprets the clue as an *Ejection*.
- After a *Trash Push Ejection*, the clue receiver should *Chop Move* the two-or-more-away-from-playable card.

<br />

### The Bad Chop Move Ejection

- Many moves result in one or more cards becoming *Chop Moved*. However, what if such a move is used when the *Chop Moved* card(s) are all trash? The other players can see that this move must have been done for some other purpose.
- In this situation, it should signal an *Ejection* on the very next player.
- This results in a *Signal Shift* from *Save* --> *Trash*.
- **Any** move that results in a *Chop Move* can be used to initiate such an *Ejection*.
- *Bad Chop Move Ejections* can be performed throughout the game. (But keep in mind that in the *End-Game*, a player might just be stalling.)

<br />

### The Rank Choice Ejection (with a number 2 or a number 5) (RCE)

- Typically, when a number 2 clue or a number 5 clue is performed on a chop card, it will be treated as a *2 Save* or a *5 Save* and the card will not play.
- If a player performs a *2 Save* or a *5 Save* on a playable card and they could have easily used a normal color *Play Clue*, this is quite strange. They must be trying to communicate something extra.
- In this situation, they intend for an *Ejection* on the very next player.
- This results in a *Signal Shift* from *Save* --> *Play*.
- For example, in a 3-player game:
  - Red 1 is played on the stacks.
  - Cathy's hand is completely unclued and is, from newest to oldest: blue 3, blue 3, blue 4, blue 4, red 2
  - Alice clues number 2 to Cathy, touching the red 2 as a *2 Save*.
  - Bob sees that the obvious clue to give to Cathy was red, as it would actually get the red 2 played right now.
  - This move is so bad that it must be communicating something extra. Alice must be intending for a *Rank Choice Ejection*. Bob blind-plays his *Second Finesse Position* card and it is a blue 1 and successfully plays.
  - Cathy knows that since a number 2 clue cause Bob to blind-play his *Second Finesse Position*, this must be an *Ejection*. The only type of *Ejection* that matches this kind of clue is a *Rank Choice Ejection*, so Cathy knows that her 2 must be playable and that her 2 must be exactly the red 2. Cathy plays the red 2.

<RankChoice />

- More examples of a *Rank Choice Ejection* can be found [here](../examples/rank-choice-ejection.md).

<br />

### The Trash Ejection

- First, see the section on the *[Trash Double Ignition](../level-20.md#the-trash-double-ignition)*.
- In certain situations, if a player re-clues a card that is globally known as trash, it triggers a *Trash Double Ignition*.
- However, what if the next player can see that a *Trash Double Ignition* is impossible? In this situation, if the clue-giver is not making a mistake, they instead intend for an *Ejection* on the very next player.

<br />

### The Replay Ejection

- First, see the section on the *[Replay Double Ignition](../level-20.md#the-replay-double-ignition)*.
- Normally, if a player re-clues a card that is globally known as playable, it triggers a *Replay Double Ignition*.
- However, what if the next player can see that a *Replay Double Ignition* is impossible? In this situation, if the clue-giver is not making a mistake, they instead intend for an *Ejection* on the very next player.
- In most circumstances, *Replay Ejections* can not be performed by re-cluing a card in Bob's hand. This is because Bob would interpret it as a *Fix Clue*, meaning that the card that Bob was about to play is actually bad and that he should discard it instead of playing it.
- Note that the *Replay Ejection* is "turned off" in the *End-Game*. (This is because players often clue playable cards as a *Burn Clue*.)

<br />

### The Poke Ejection

- First, see the section on the *[Poke Double Ignition](../level-20.md#the-poke-double-ignition)*.
- Normally, if a player re-clues globally known trash, it triggers a *Poke Double Ignition*.
- However, what if the next player can see that a *Poke Double Ignition* is impossible? In this situation, if the clue-giver is not making a mistake, they instead intend for an *Ejection* on the very next player.

<br />

### The Self Color Ejection

- First, see the section on the *[Self Color Double Bluff](special-bluffs.md#self-color-double-bluff-scdb)*.
- Normally, when a card is "filled in" a card that is two-or-more-away-from-playable, it triggers a *Self Color Double Bluff*.
- However, what if the next player can see that a *Double Bluff* is impossible? In this situation, they instead intend for an *Ejection* on the very next player.
- For example, in a 4-player game:
  - All the 1's are played on the stacks.
  - Bob has a green 4 in his hand that was previously clued with a number 4 clue.
  - Alice clues green to Bob, which fills in the green 4.
  - Bob considers what the clue means:
    - Normally, this would be a *Play Clue* on the green 4, calling for a green 2 and a green 3 to be played as a *Finesse*. However, Bob does not see green 2 and green 3 in anyone else's hands. It also cannot be in his hand (because he has negative green on his entire hand).
    - If it isn't a *Finesse*, then it must be a *Self Color Bluff*. However, *Self Color Bluffs* are only performed on legal *Bluff-Targets* (e.g. one-away-from-playable cards), and the green 4 is two-away-from-playable.
    - If it isn't a *Self Color Bluff*, then it must be a *Self Color Double Bluff*. However, Bob sees that Cathy has a trash card on her *Finesse Position*. If he blind-plays his *Finesse Position*, Cathy will go on to misplay her *Finesse Position*. That means that a *Self Color Double Bluff* does not make sense.
    - If it isn't a *Self Color Double Bluff*, then it must be a *Self Color Ejection*.
  - Bob blind-plays his *Second Finesse Position*. It is a red 2 and it successfully plays.
  - Cathy does nothing; no other cards are promised.

<SelfColor />
