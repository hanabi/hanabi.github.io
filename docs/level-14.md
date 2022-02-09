---
id: level-14
title: Level 14 - Double Bluffs
---

import DoubleBluffLooksLikeHalf from '@site/image-generator/yml/level-14/double-bluff-looks-like-half.yml';
import DoubleBluffThreeAway from '@site/image-generator/yml/level-14/double-bluff-three-away.yml';
import DoubleBluff from '@site/image-generator/yml/level-14/double-bluff.yml';
import DoubleHalfBluff from '@site/image-generator/yml/level-14/double-half-bluff.yml';
import HardDoubleBluff from '@site/image-generator/yml/level-14/hard-double-bluff.yml';
import PestilentDoubleBluff from '@site/image-generator/yml/level-14/pestilent-double-bluff.yml';
import RainbowDoubleBluff from '@site/image-generator/yml/level-14/rainbow-double-bluff.yml';

## Special Moves

### The Double Bluff

- Sometimes, Bob and Cathy will have playable cards on their *Finesse Position*. In this situation, you might be able to perform a *Double Finesse* to get them to immediately blind-play. However, this is only possible if both cards are related, and the "connecting" card is available to *Play Clue*.
- In the same way that you can sometimes perform a *Bluff* when a *Finesse* is not available, you can also sometimes perform a *Double Bluff* when a *Double Finesse* is not available. This is performed by giving a *Play Clue* to non-trash card that not a legal *Bluff*-target.
- For example, in a 4-player game:
  - Red 1 is currently played on the stacks.
  - Alice clues Donald red, which touches a red 4 as a *Play Clue*.
  - Since red 4 must be playable right now, Bob thinks he has the red 2 and the red 3. Bob blind-plays his *Finesse Position* card, but it is actually a blue 1.
  - Cathy sees that Bob blind-played because of the red clue. However, the red 4 is a non-trash card and not a legal *Bluff*-target. Thus, Alice must intend for a *Double Bluff* instead of a single *Bluff*. Cathy blind-plays her *Finesse Position* card and it is a yellow 1.
  - At first, Donald thought that the red card in his hand was red 2 (as a *Play Clue*).
  - After Bob blind-played, Donald thought that the red card in his hand was red 3 (as a *Bluff*).
  - After Cathy blind-played, Donald knows that his card was not a valid *Bluff* target for the blue 1, and so he must have the red 4 (as a *Double Bluff*).
    - For players not yet at level 15, Donald would also mark the card as a potential red 5 in addition to a red 4.

<DoubleBluff />

- Similar to other kinds of *Bluffs*, *Double Bluffs* may only be performed from *Bluff Seat*, and must be demonstrated immediately. In other words, both blind-plays must occur on the two turns directly following the clue.
- Some more-specific types of *Double Bluffs* are listed below.

<br />

### The Triple Bluff (Illegal)

- We agree that all *Bluff*-style clues should resolve after two-blind plays.
- Thus, there is no such thing as a *Triple Bluff*.

<br />

### The Hard Double Bluff

- Similar to a *Hard 3 Bluff*, it is also possible to perform a *Hard Double Bluff*.
- For example, in a 4-player game:
  - No cards are played on the stacks.
  - Alice clues number 4 to Donald, touching a red 4 as a *Play Clue*.
  - Bob blind-plays red 1 from his *Finesse Position*.
  - Cathy blind-plays red 2 from her *Finesse Position*.
  - Even though red 1 and red 2 are the same suit as the red 4, the team knows that no-one is promised the red 3, since two blind-plays happened immediately after the clue.
  - Donald knows that his clued card can be any 4.

<HardDoubleBluff />

<br />

### The Pestilent Double Bluff

- Normally, a *Double Bluff* can only be initiated with a card that is not a legal *Bluff*-target. However, this is not always true.
- Sometimes, Alice can clue a legal *Bluff*-target to make Bob blind-play, and then "force" Cathy to blind-play as well in order to resynchronize the information about the identity of the clued card.
- This is called a *Pestilent Double Bluff* to distinguish it from the more-normal *Double Bluff* where a non-legal *Bluff*-target is used.
- For example, in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 2 to Donald, touching a red 2 as a *Play Clue*.
  - Bob blind-plays a blue 1 from his *Finesse Position*.
  - Cathy sees that right now, Donald will assume that he has the blue 2 (because it directly connects to the blue 1 that Bob blind-played). This is bad, because the card is really a red 2.
  - Cathy knows that because information is still synchronized amongst the team, Alice must intent for Cathy to blind-play a card as a *Pestilent Double Bluff*.
  - Cathy blind-plays her *Finesse Position*. It is a green 1 and it successfully plays.
  - At first, Donald thought that his 2 was either a blue 2 (as a *Finesse* on Bob) or a green 2 (as a *Finesse* on Cathy).
  - After Bob blind-played, Donald thought that his 2 was a blue 2 (as a *Finesse* on Bob).
  - After Cathy blind-played, Donald knows that something weird happened. If his 2 really was blue 2, then Cathy would not have blind-played anything, so his 2 cannot be blue 2.
  - Donald knows that his 2 cannot be green 2 either, or else Bob would not have blind-played anything. (He would have waited for Cathy to blind-play.)
  - Thus, Donald marks his 2 as either red 2, yellow 2, or purple 2.

<PestilentDoubleBluff />

- More examples of a *Pestilent Double Bluff* can be found [here](examples/pestilent-double-bluff.md).

<br />

## General Principles

<br />

### Deferring a Bluff

- From *Urgency Principle*, we know that players are allowed to defer a *Finesse* or a *Bluff* in order to do a *Finesse* or *Bluff* of their own. And indeed, when players see a really good clue, they should probably defer blind-playing to give the clue. But there are limits.
- When a player knows for sure that they are *Finessed* (instead of *Bluffed*), then deferring a *Finesse* (to perform another *Finesse* or *Bluff*) is great! It has almost no downsides, other than the obvious loss of *Tempo*. Everyone on the team is "in the know", so to speak.
- When a player *could* be *Bluffed*, deferring a *Bluff* can be extremely dangerous because it causes *Information Desynchronization* throughout the team.
- Deferring a *Bluff* to perform a *Finesse* can be pretty clear, depending on the situation. It should be done sparingly.
  - Note that deferring a *Bluff* to perform a *Finesse* can potentially lose the game if the original cluer is performing a *Double Half Bluff*. So there is some risk involved.
- Deferring a *Bluff* to perform **another** *Bluff* is much worse. Since the *Bluff* was not immediately resolved, the game state "fractures" into two valid game states for the receivers of each clue (e.g. the player who received the clue that initiated the first *Bluff*, and the player who received the clue that initiated the *Deferred Bluff*). This means that these two players will have to entertain two entire hypothetical game states in their mind and build upon each hypothetical with each new piece of information. This makes it extremely difficult for them to plan ahead or make correct decisions during their turns.
- Thus, deferring a *Bluff* to do another *Bluff* should **almost never be performed**.
- Also, see the below section on *Deferring a Double Bluff*.

<br />

### Deferring a Double Bluff

- First, see the section on *[Deferring a Bluff](#deferring-a-bluff)*.
- If Bob suspects that Alice is performing a *Double Bluff*, then Bob should **never defer**. It is very important that *Double Bluffs* resolve immediately.
- Similarly, if Bob blind-plays, and Cathy can not rule out a *Double Bluff*, then Cathy should **never defer**. (If Cathy defers, it will cause an unrecoverable *Information Desynchronization*, because her future blind-play will not be interpreted as related to the *Double Bluff*.)

<br />

### A Table for Deferring Bluffs

| Alice is deferring a               | to perform a | Ok?
| ---------------------------------- | ------------ | ---
| Finesse                            | Finesse      | Yes!
| Finesse                            | Bluff        | Yes!
| Bluff                              | Finesse      | Sometimes, use sparingly
| Bluff                              | Bluff        | Almost never do this
| Double Bluff (first blind-player)  | Finesse      | No, **never** do this
| Double Bluff (first blind-player)  | Bluff        | No, **never** do this
| Double Bluff (second blind-player) | Finesse      | No, **never** do this
| Double Bluff (second blind-player) | Bluff        | No, **never** do this
