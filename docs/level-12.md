---
id: level-12
title: Level 12 - Intermediate Bluffs
---

import BluffColorDisconnect from '@site/image-generator/yml/level-12/bluff-color-disconnect.yml';
import Number3WithSuitDisconnect from '@site/image-generator/yml/level-12/number-3-with-suit-disconnect.yml';
import ColorConnectNotValid from '@site/image-generator/yml/level-12/color-connect-not-valid.yml';
import ColorConnectWithRankDisconnect from '@site/image-generator/yml/level-12/color-connect-with-rank-disconnect.yml';
import Number3WithSuitConnect from '@site/image-generator/yml/level-12/number-3-with-suit-connect.yml';
import Critical4Bluff from '@site/image-generator/yml/level-12/critical-4-bluff.yml';
import FinessePromptNotHardBluff from '@site/image-generator/yml/level-12/finesse-prompt-not-hard-bluff.yml';
import HardBluff from '@site/image-generator/yml/level-12/hard-bluff.yml';

## Special Moves

<br />

### The 3 Bluff

- Typically, the player who receives a clue that causes a *Bluff* blind-play knows that the card that was clued is *one-away-from-playable*.
- Our group plays with an artificial *3 Bluffs* convention. This means that in addition to being *one-away-from-playable*, we agree that a *Bluff* can *also* be any 3 that will be useful in the future.
- *3 Bluffs* are mostly used to get 1's played at the beginning of the game. However, similar to a normal *Bluff*, a *3 Bluff* can be used to get any playable card (as long as it doesn't look like a *Finesse*).
- Here are some examples that cover the most common *3 Bluff* situations.

#### Example 1 - **Color Disconnect** (Valid)

- On the first turn of the game, Alice clues Cathy red, which touches a red 3.
- Bob blind-plays blue 1.
- Cathy knows that it is either a red 2 (if it was a normal *Bluff*) or a red 3 (if it was a *3 Bluff*). She marks down both of the possibilities for later.

<BluffColorDisconnect />

#### Example 2 - **Number 3 with Suit Disconnect** (Valid)

- On the first turn of the game, Alice clues Cathy number 3, which touches a red 3.
- Bob blind-plays blue 1.
- Cathy knows that it was a *3 Bluff*, because a played 1 does not "connect" to number 3.
- Beyond that, Cathy knows nothing about the card, besides that it is a 3 (since it has a number 3 clue on it).

<Number3WithSuitDisconnect />

#### Example 3 - **Color Connect** (Not Valid; Looks Like a Finesse)

- On the first turn of the game, Alice clues Cathy red, which touches a red 3.
- Bob blind-plays red 1.
- Cathy sees that Bob does not have red 2. Since red connects to red, Cathy assumes that she has the red 2.
- Cathy misplays the red 3 as a red 2.
- Alternatively, if Cathy saw that Bob had both red 1 and red 2 on his *Finesse Position* at the time the clue was given, she would know that she has the red 2 **or** the red 3. Subsequently, Bob is promised a red 2, since if he does not blind-play a card, Cathy will go on to misplay the red 3 as red 2.

<ColorConnectNotValid />

#### Example 4 - **Color Connect With Rank Disconnect** (Not Valid; Looks Like a Finesse)

- This is a 4-player game.
- Nothing is played on the stacks.
- Alice clues Donald red, touching a red 3 as a play clue.
- Bob blind-plays the red 1.
- Cathy notices that Donald's red card has a negative 2 clue on it. This means that Donald will not go on to misplay the card as the red 2.
- Cathy needs to evaluate whether or not Alice's clue is a *Finesse* or a *3 Bluff*. If this is a *Double Finesse*, then Cathy needs to blind-play the red 2. If this is a *Bluff*, then Alice only intended for Bob to blind-play.
- Cathy knows that since **red connects to red**, this must be a *Double Finesse*, so Cathy assumes that she has the red 2 on her *Finesse Position*.
- Cathy misplays blue 5.

<ColorConnectWithRankDisconnect />

#### Example 5 - **Number 3 With Suit Connect** (Valid)

- On the first turn of the game, Alice clues Cathy number 3, which touches a red 3.
- Bob blind-plays red 1.
- Cathy knows that it was a *3 Bluff*, because a played 1 does not "connect" to number 3.
- Beyond that, Cathy knows nothing about the card, besides that it is a 3 (since it has a number 3 clue on it).
- Even though red 1 and red 3 are the same suit, Bob is not promised a red 2.

<Number3WithSuitConnect />

#### Generic Questions

- *3 Bluffs* can be confusing. If you don't want to memorize the five examples above, you can simply ask the following questions:
  1. Does the clue "connect" to the blind-play?
      - If it connects, then it is a *Finesse*.
      - If it does not connect, then it is a *Bluff*.
      - Red connects to red, but red does **not** connect to blue.
      - 2 connects to 3, but 1 does **not** connect to 3.
  1. Will the player who received the clue go on to misplay if nothing else is blind-played?
      - If yes, then it is a *Finesse*.
      - If no, then it is a *Bluff*.

<br />

### The Critical 4 Bluff

- Building on the *3 Bluffs* convention, we also agree that it is possible for a card that initiates a *Bluff* to be a copy of any of the 4s that are currently in the discard pile, but only if **a color clue** is used.
- For example, in a 3-player game:
  - Nothing is played on the stacks. Red 4 is currently in the discard pile.
  - Alice clues Cathy red, touching a red 4 as a *Play Clue*.
  - Bob blind-plays a blue 1.
  - Cathy marks her red card as the *one-away-from-playable* red card, the red 2.
  - However, Cathy also knows that *3 Bluffs* are a thing, so she *also* marks her red card as possibly a red 3.
  - However, Cathy also knows that *Critical 4 Bluffs* are a thing, so she *also* marks her red card as possibly a red 4.

<Critical4Bluff />

<br />

### The Hard Bluff

- First, see the section on *[Cathy's Connecting Principle](level-10.md#cathys-connecting-principle-part-2)*.
- Sometimes, it can be ambiguous as to whether a player blind-played a card into a *Bluff*, or they blind-played into a *Finesse* + *Prompt*. In this situation, *Occam's Razor* applies, so players should go with the *Bluff* interpretation, since it is simpler. When such a *Bluff* occurs, it is called a *Hard Bluff* to disambiguate from situations where *Bluffs* happen with no ambiguity.
- For example, this is a *Finesse* + *Prompt* and **not** a *Hard Bluff*:
  - Only red 1 is played on the stacks.
  - Cathy has a 3 clued in her hand (with no color information on it).
  - Alice clues Cathy about a new 4.
  - Bob blind-plays red 2.
  - In a normal *Bluff*, a *one-away-from-playable* card is clued. However, Cathy sees that the highest stack is the red stack, so the 4 in her hand must be two-away.
  - Thus, Cathy does **not** read it as a *Bluff*; she is promised red 3 and red 4, so she plays the unknown 3 as a *Self-Prompt* for the red 3.

<FinessePromptNotHardBluff />

- For example, this **is** a *Hard Bluff*:
  - Red 1 and blue 2 are played on the stacks.
  - Cathy has a 3 clued in her hand (with no color information on it).
  - Alice clues Cathy about a new 4.
  - Bob blind-plays red 2.
  - This could be a *Bluff* if the 4 in her hand is blue 4, since blue 4 is currently *one-away-from-playable*. Thus, Cathy **does not** assume that her 4 is red 4, and subsequently, **does not** assume that her unknown 3 is a red 3. However, it could **also** be the case that the 4 is a red 4 (if the 3 in her hand happens to be red 3).
  - Thus, Cathy marks down both possibilities for later and does not play anything right now.

<HardBluff />

<br />

### The Hard 3 Bluff

- Players can use a 3 to *3 Bluff* the 1 of the same suit.
- This is called a *Hard 3 Bluff* to distinguish it from a more-ordinary *3 Bluff*.
- An example of a *Hard 3 Bluff* can be found above as example 5.

<br />

### The Known Bluff

- Usually, when a *Bluff* occurs, the blind-playing player has no idea that is a *Bluff* - they assume they are playing a specific card into a true *Finesse*.
- However, in rare situations, a clue will be given that looks like a *Finesse*, but the next player will know for sure that they do not have the "connecting" card.
- In these situations, if the next player cannot see a better explanation for the clue, then they should blind-play their *Finesse Position* card as a *Known Bluff*.
- For example:
  - The player might see all of the copies of the card that they are supposed to be blind-playing.
  - The player might have negative information on their entire hand (e.g. negative blue on every card when they are supposed to be blind-playing a blue 2).
  - The player might know that they are blind-playing a 1 into a *3 Bluff* (e.g. a card was clued with number 3 and there are no cards played yet).

<br />

## General Principles

<br />

### Legal Bluff-Targets

- The full list of legal *Bluff* targets is as follows:
  - any *one-away-from-playable* card (with either a color clue or a number clue)
  - any 3 (with either a color clue or a number clue)
  - any critical 4 (only with a color clue)
