---
id: variant-specific
title: Introduction
---

import LoadedPlayClue from '@site/image-generator/yml/extras/variant-specific/loaded-play-clue.yml';
import LoadedException from '@site/image-generator/yml/extras/variant-specific/loaded-exception.yml';
import LoadedException2 from '@site/image-generator/yml/extras/variant-specific/loaded-exception-2.yml';

### Hard Variants & Easy Variants

- Some variants demand an enormous amount of efficiency. Since our normal conventions result in conservative play, we agree to change the way that we play in some specific variants in order to win more consistently.
- We define any variant that requires equal to or greater than 1.25 efficiency as a "hard" variant. (Required efficiency can be seen in-game using the Hanab Live interface. Note that a variant can be considered easy in 4-player, but hard in 5-player, for example.)
- Additionally, the following variants are considered to be hard variants even though they may have less than 1.25 required efficiency:
  - Any variant with a null suit
  - Any "Mix" variant
  - Color Mute
  - Number Mute
  - Throw It in a Hole
  - Cow & Pig
  - Duck

<br />

#### Convention Changes for All Hard Variants

- Players are not allowed to *Double Discard Avoid*.
  - Any clue given in a *Double Discard* situation will instead be treated like a clue given in a non-*Double Discard* situation.
- Players are not allowed to *5 Stall* in the *Early Game*.
  - Any clue that looks like a *5 Stall* is instead treated as either a *5's Chop Move* or a *5 Pull*.
- Players are not required to clue anything in the *Early Game*; they are allowed to initiate the *Mid-Game* whenever they see fit.
- Players are not allowed to give [*Double Tempo Clues*](level-6.md#the-double-tempo-clue).
  - If a *Tempo Clue* is given that touches two or more cards, only the leftmost card is focused.
  - This will therefore cause a [*Tempo Clue Chop Move*](level-6.md#the-tempo-clue-chop-move-tccm).
- *Loaded Play Clues*, as defined below, are turned on.

<br />

### The Early Save

- Normally, players are allowed to give a *Save Clue* to a card on chop, even if that clued player:
  - has one or more playable cards to play (e.g. they won't discard their chop because they will almost certainly play their playable card)
  - has one or more known-trash cards to discard (e.g. they won't discard their chop because they will almost certainly discard their known-trash card instead)
- If a *Save Clue* is given in this kind of situation, it is referred to as an *Early Save*. In our group, *Early Saves* are normal, and they don't cause anything special to happen. (Allowing *Early Saves* is nice because it allows for *Discard Modulation.*)

<br />

### The Loaded Play Clue (in Hard Variants) (LPC)

- First, see the section on the *[Early Save](#the-early-save)*.
- In [*Hard* variants](#hard-variants--easy-variants), *Early Saves* are not legal. Instead, if an *Early Save* is given to a player, then it is treated as a *Play Clue* on that card.
- This is called a *Loaded Play Clue* to distinguish it from a more ordinary *Play Clue*, because the player receiving the clue is currently "loaded" with a play or "loaded" with a safe discard.
- For example, in a 3-player game of a *Hard* variant:
  - All of the 2's are played on the stacks. Blue 4 is in the trash.
  - Alice clues number 3 to Cathy, touching a 3 as a *Play Clue*.
  - Bob clues number 4 to Cathy, touching a 4 on chop. Is it a *Play Clue* or a *Save Clue*?
  - Cathy knows that normally, Bob's number 4 clue could be an *Early Save* on a blue 4 (which is currently critical).
  - However, Cathy also knows that *Early Saves* are turned off in *Hard* variants. Since Cathy is loaded with her playable 3, Bob's clue must have been a *Loaded Play Clue*.
  - Cathy plays the 3. It is a red 3 and it successfully plays.
  - Cathy now knows that her 4 must be the red 4 (connecting to the red 3).

<LoadedPlayClue />

<br />

#### Exceptions

- *Loaded Play Clues* **do not** apply in the *Early Game* - they are only "turned on" in the *Mid-Game*.
- *Loaded Play Clues* **do not** apply in *Double Discard* situations. (Even though *Double Discard Avoidance* is "turned off" in hard variants in general, players are still allowed to avoid *Double Discarding* by giving *Early Saves* to cards.)
- *Loaded Play Clues* **do not** apply to number 5 clues during the *Low Score Phase*.
- For example, in a 3-player game:
  - It is the *Low Score Phase*.
  - Red 3 is played on the stacks.
  - Bob has a known red 4 in his hand on slot 5.
  - Alice clues number 5 to Bob, touching a 5 on slot 3.
  - Bob knows that he is *Loaded*, because he has a red 4 to play. Bob knows that normally, no-one else is supposed to give *Save Clues* to *Loaded* players (and that they should be transformed into *Play Clues*).
  - However, Bob knows that this rule doesn't apply to number 5 clues during the *Low Score Phase*.
  - Thus, Bob marks his slot 4 card as being *Chop Moved* and plays the red 4.

<LoadedException />

- For example, in a 3-player game (similar to the last example):
  - It is the *Low Score Phase*.
  - Red 3 is played on the stacks.
  - Bob has a known red 4 in his hand on slot 4.
  - Alice clues number 5 to Bob, touching a 5 on slot 5 (Bob's chop).
  - Bob knows that he is *Loaded*, because he has a red 4 to play. Bob knows that normally, no-one else is supposed to give *Save Clues* to *Loaded* players (and that they should be transformed into *Play Clues*).
  - However, Bob knows that this rule doesn't apply to number 5 clues during the *Low Score Phase*.
  - Thus, Bob knows that Alice is performing a simple *5 Save* and plays the red 4.

<LoadedException2 />

### The Always Loaded Principle

- In certain variants, a specific type of clue always looks like a *Save Clue* regardless of which cards are in the discard pile.
- For example:
  - In a Dark Prism variant, a 3 or 4 clue to the chop always looks like a *Save Clue* on prism 3 or prism 4.
  - In a Brown variant, a brown clue to the chop always looks like a *Save Clue* on n2 or n5 or any critical brown card.
- In such cases, we agree that this specific type of clue, if given to a player who is *Loaded*, must always be treated as a play clue throughout the game (including the *Early Game*).
- For example, in a Gray variant game:
  - Gray 1 and blue 1 are played on the stacks, Bob's hand is completely unclued.
  - Alice clues a gray 3 with a rank 3 clue on Cathy, who is currently *Loaded*.
  - Normally, Bob would assume it is an *Early Save*. But in this particular case, he knows that it is a *Loaded Play Clue* due to *The Always Loaded Principle*.
  - Bob plays his finesse position card and it successfully plays as gray 2.
- The consequence of this principle is that sometimes a certain kind of clue on a card is treated as a *Loaded Play Clue*, even if the card does not belong to the suit that causes the invocation of said principle.
- For example, in a Gray variant game:
  - Gray 2 and blue 1 are played on the stacks, Bob's hand is completely unclued.
  - Alice clues a critical blue 3 with a rank 3 clue on Cathy, who is currently *Loaded*.
  - Normally, Bob would assume it is an *Early Save*. But in this particular case, he knows that it is a *Loaded Play Clue* due to *The Always Loaded Principle*. If Bob does nothing, Cathy will assume that it is a *Loaded Play Clue* on gray 3.
  - Bob plays his finesse position card and it successfully plays as blue 2.

<br />

### Precedence of Variant-Specific Conventions

- We have many variant-specific strategies and conventions. Sometimes, it can be confusing as to how they interact with "normal" conventions (e.g. non-variant-specific conventions).
- In general, non-variant-specific conventions take precedence over variant-specific conventions, unless explicitly mentioned otherwise.

<br />

### 2-Player

- In the *Hyphen-ated Group*, we generally only play games with 3 to 5 players. If you are interested in playing 2-player games, then see the [2-player page](https://github.com/hanabi/hanabi.github.io/blob/main/misc/2-player.md).

<br />

### Empty Clues

- *Empty Clues* are clues that touch no cards in a hand. On Hanab Live, each game has the option to allow *Empty Clues*. In our group, we typically disallow this option since it makes the game too easy.
- If *Empty Clues* are enabled, it allows for a much wider channel of information transfer. We have developed an entire convention framework around this channel and it is too complicated to cover in a single section here.
- If you are interested in learning about in the extended *Empty Clue* conventions, they are documented [on a separate page](https://github.com/hanabi/hanabi.github.io/blob/main/misc/empty-clues.md).
