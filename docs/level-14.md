---
id: level-14
title: Level 14 - Double Bluffs
---

import DoubleBluffLooksLikeHalf from '@site/image-generator/yml/level-14/double-bluff-looks-like-half.yml';
import DoubleBluffThreeAway from '@site/image-generator/yml/level-14/double-bluff-three-away.yml';
import DoubleBluff from '@site/image-generator/yml/level-14/double-bluff.yml';
import DoubleHalfBluff from '@site/image-generator/yml/level-14/double-half-bluff.yml';
import Hard4DoubleBluff from '@site/image-generator/yml/level-14/hard-4-double-bluff.yml';
import Hard5DoubleBluff from '@site/image-generator/yml/level-14/hard-5-double-bluff.yml';

- Level 14 strategies should only be learned if you have 240+ games of experience with the group.

<br />

## Special Moves

<br />

### The Double Half Bluff (DHB)

- Sometimes, you see that two players in a row have playable *Finesse Position* cards. However, they are unrelated, so you can't get them both played with a *Double Finesse*. In this situation, by performing a clue that looks like a *Double Finesse*, you can get the first card played like a normal *Finesse* and the second card like a *Bluff*.
- For example, in a 4-player game:
  - Red 1 is played on the stacks.
  - Alice clues Donald red, which touches a red 4 as a *Play Clue*.
  - Bob goes next and assumes that it is a *Double Self-Finesse* - he has the red 2 and red 3 in his two newest slots. Thus, he blind-plays his left-most and it is red 2, as expected.
  - Cathy goes next. Cathy sees that Bob does **not** have red 3 in his *Second Finesse Position* (and no one else has a red 3 in their *Finesse Position* either). Thus, Cathy must have the red 3. Cathy tries to blind-play red 3 from her *Finesse Position*, but is blue 1 instead.
  - Bob now knows he does not have the red 3 anymore, since Cathy blind-played.
  - Cathy now knows that since two blind-plays happened in a row, she does **not** have the red 3 and that she was *Bluffed*.
  - At first, Donald thought that the red card in his hand was red 2 (as a *Play Clue*).
  - After Bob blind-played, Donald thought that the red card in his hand was red 3 (as a *Finesse*).
  - After Cathy blind-played, Donald knows that he must have the red 4 (as a *Double Half Bluff*).

<DoubleHalfBluff />

- Normally, you are only allowed to *Bluff* the very next player (i.e. sitting in *Bluff Seat*). The *Double Half Bluff* bends this rule: Alice is in *Bluff Seat* for Bob (the first blind-player) but not in *Bluff Seat* for Cathy (the second blind-player). Even though this breaks the *Bluff Seat* rule, the *Double Half Bluff* is still allowed because the *Fib* resolves "immediately", which satisfies *Lie Principle*.

<br />

### The Double Bluff

- Similar to a *Double Half Bluff*, it is also possible to get 2 cards played in a row that are completely unrelated. It is distinct from a *Double Half Bluff* because **none** of the blind-played cards connect to the card that is clued.
- For example, in a 4-player game:
  - Red 1 is currently played on the stacks.
  - Alice clues Donald red, which touches a red 4 as a *Play Clue*.
  - Since red 4 must be playable right now, Bob thinks he has the red 2 and the red 3. Bob blind-plays his *Finesse Position* card, but it is actually a blue 1.
  - Cathy sees that Bob blind-played because of the red clue. However, since the red 4 is a two-away from playable card instead of a *one-away-from-playable* card, it must mean that it is a *Double Bluff* instead of a single *Bluff*. Cathy blind-plays her *Finesse Position* card and it is yellow 1.
  - At first, Donald thought that the red card in his hand was red 2 (as a *Play Clue*).
  - After Bob blind-played, Donald thought that the red card in his hand was red 3 (as a *Bluff*).
  - After Cathy blind-played, Donald knows that he must have the red 4 (as a *Double Bluff*).

<DoubleBluff />

- Normally, players are only allowed to perform *Bluffs* while sitting in *Bluff Seat*. The *Double Bluff* is one of the few exceptions to the rule. (It is allowed because the *Fib* still resolves "immediately", which satisfies *Lie Principle*.)

<br />

### The Triple Bluff (Illegal)

- A *Double Bluff* is when a player clues a card that is two-away-from-playable and it gets two unrelated cards to blind-play from *Finesse Position*.
- Logically, it follows from the *Double Bluff* that if a player clues a card that is three-away-from-playable, it would cause three unrelated cards to blind-play from *Finesse Position* as a *Triple Bluff*.
- However, this is not the case. We explicitly agree that *Triple Bluffs* are illegal and not to be used. (*Triple One-Third Bluffs* and *Triple Two-Third Bluffs* are also illegal.)
- The consequence of this is that if a player gives a *Play Clue* to a three-away-from-playable card (e.g. either a 4 or a 5) and it causes two cards to blind-play, then the next player should **not** continue to blind-play any more cards. See the next section for more information.

<br />

### The 4 Double Bluff & The 5 Double Bluff

- Since *Triple Bluffs* are illegal and not to be used, it is possible to perform a *Double Bluff* with a card that is not exactly two-away-from-playable. This is similar to how the *3 Bluff* convention works.
- This is how it works for 4's:
  - If a 4 is given a *Play Clue* and it is *one-away-from-playable*, then it would only trigger a single *Bluff* (and not a *Double Bluff*).
  - If a 4 is given a *Play Clue* and it is *two-away-from-playable*, then it would trigger a *Double Bluff*. (This would be a "normal" *Double Bluff*.)
  - If a 4 is given a *Play Clue* and it is *three-away-from-playable*, then it would still only trigger a double *Bluff* (as a *4's Double Bluff* specifically).
- This is how it works for 5's:
  - If a 5 is given a *Play Clue* and it is *one-away-from-playable*, then it would only trigger a single *Bluff* (and not a *Double Bluff*).
  - If a 5 is given a *Play Clue* and it is *two-away-from-playable*, then it would trigger a *Double Bluff*. (This would be a "normal" *Double Bluff*.)
    - Note that this would only happen if e.g. *5 Color Ejection* and *5 Number Discharge* would not apply. (These are advanced conventions that are covered in later levels.)
  - If a 5 is given a *Play Clue* and it is *three-away-from-playable* or *four-away-from-playable*, then it would still only trigger a double *Bluff* (as a *5's Double Bluff* specifically).
    - Note that this would only happen if e.g. *5 Color Ejection* and *5 Number Discharge* would not apply. (These are advanced conventions that are covered in later levels.)
- For example, in a 4-player game:
  - Nothing is played on the stacks.
  - Alice clues Donald red, which touches a red 4 as a *Play Clue*.
  - Bob tries to blind-play red 1 from his *Finesse Position*, but he instead plays a blue 1.
  - Cathy knows that this must be a *Double Bluff*. She blind-plays yellow 1 from her *Finesse Position*.
  - Now, it is Donald's turn.
    - At first, Donald thought that the red card in his hand was red 1 (as a *Play Clue*).
    - After Bob blind-played, Donald thought that the red card in his hand was either a red 2 (as a *Bluff*) or a red 3 (as a *3 Bluff*).
    - After Cathy blind-played, Donald now knows that the red card in his hand is a red 4 (as a *4's Double Bluff*).
    - (Donald knows that it cannot be a red 5, or else Bob would have blind-played his *Second Finesse Position*.)

<DoubleBluffThreeAway />

<br />

### The 4 Double Bluff That Looks like a Double Half Bluff

- Because any *Bluff* sequence that gets two cards blind-played can be a 4, this means that players have to account for the fact that a card that initiates a *Double Half Bluff* could also be a 4.
- For example, in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues red to Donald, touching a red 3 as a *Play Clue*.
  - Bob blind-plays red 1.
  - Cathy blind-plays blue 1.
  - Normally, Donald would know that his red card is exactly a red 3, as a *Double Half Bluff*.
  - However, Donald also knows that any 4 in the game can be used to perform a *Double Bluff*.
  - Thus, Donald marks his red card as either a red 3 (if it was a *Double Half Bluff*) or a red 4 (if it was a *4 Double Bluff*).

<DoubleBluffLooksLikeHalf />

<br />

### The Hard 4 Double Bluff

- Similar to a *Hard 3 Bluff*, it is also possible to perform a *Hard 4 Double Bluff*.
- For example, in a 4-player game:
  - No cards are played on the stacks.
  - Alice clues number 4 to Donald, touching a red 4 as a *Play Clue*.
  - Bob blind-plays red 1 from his *Finesse Position*.
  - Cathy blind-plays red 2 from her *Finesse Position*.
  - Even though red 1 and red 2 are the same suit as the red 4, the team knows that no-one is promised the red 3.

<Hard4DoubleBluff />

<br />

### The Hard 5 Double Bluff

- Similar to a *Hard 3 Bluff* and a *Hard 4 Double Bluff*, it is also possible to perform a *Hard 5 Double Bluff*.
- For example, in a 5-player game:
  - It is the *Mid-Game* and all the 1's are played on the stacks.
  - Alice clues number 5 to Emily, touching a red 5 as a *Play Clue*.
  - Bob blind-plays a red 2 from his *Finesse Position*.
  - Cathy blind-plays a red 3 from her *Finesse Position*.
  - Donald sees that no-one else has any red cards in their hand. Thus, if this was a *Triple Finesse* on the red 5, then Donald should blind-play the red 4 right now.
  - However, Donald also knows that 5's are valid *Double Bluff* targets. Since number 3 does not connect to number 5, Donald knows that he should prefer the *Double Bluff* interpretation (that gets two blind-plays) over the *Triple Finesse* interpretation (that gets three blind-plays).

<Hard5DoubleBluff />

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
