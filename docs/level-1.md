---
id: level-1
title: Level 1 - Fundamentals
---

import DelayedPlayClue from '@site/static/img/generated/level-1/delayed-play-clue.svg';

- Level 1 strategies can be learned with no games of Hanabi played. You can either learn them before you play your first game or after you play a few games to learn the basic mechanics.
- This stuff is mostly a repeat of the [beginner's guide](beginner.md), but we go into a bit more detail.

<br />

## Conventions

<br />

### Chop

- When players have to discard, they typically discard their right-most unclued card.
- A player's chop is formally defined as **the next unclued card that they would discard if they had nothing to do**.
- If a player has a clued card that is known useless, then they will typically discard the useless card **instead** of discarding their chop. (But the useless card does **not** count as the chop - their chop remains the right-most unclued card.)

<br />

### Play Clues & Delayed Play Clues

- *Play Clues* are different than *Delayed Play Clues*:
  - If the card will successfully play on the stacks **right now**, then the clue was a *Play Clue*.
  - If the card will successfully play on the stacks after other people have played cards of the same suit, then the clue was a *Delayed Play Clue* that was *through* other cards.



- For example, in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues red to Donald, touching a red 1 as a *Play Clue*. This is a direct *Play Clue* - the red 1 can be played on the stacks as soon as it gets to Donald's turn.
  - Next, it is Bob's turn. Bob clues red to Cathy, touching a red 2 as a *Delayed Play Clue* - the red 2 cannot be played on the stacks as soon as it gets to Cathy's turn.
  - Next, it is Cathy's turn. Cathy must wait patiently for Donald to play the red 1 first, and then play the red 2 on her next turn.
- As a rule, we treat all *Play Clues* as potential *Delayed Play Clues*.
- For example, if Alice was clued about a bunch of 1's and then Bob is given a Play Clue on an unknown 2, Bob must wait for Alice to play all of her 1's first before playing the 2.
- Since we treat all *Play Clues* as potential *Delayed Play Clues*, the distinction between them is pretty much irrelevant. In the *Hyphen-ated Group*, we use the phrase *Play Clue* to mean **either** a *Play Clue* or a *Delayed Play Clue*.

<br />

### The Definition of Playable

- First, see the section on *[Play Clues & Delayed Play Clues](#play-clues--delayed-play-clues)*.
- When we say that an unclued card is currently *playable*, we do **not** mean that the card would be able to play on the stacks right this instant. If an unclued card is *playable*, then what we really mean is that it would be legal for someone to give either a *Play Clue* **or** a *Delayed Play Clue* to the card.
- In other words, if an unclued *playable* card was given a *Delayed Play Clue*, that card would eventually play on the stack without any additional clues needing to be given by anyone else - all the in-between cards, if any, are present and accounted for.

<br />

### One-Away-From-Playable Cards

- As noted in the previous section, sometimes unclued cards happen to be *playable*.
- Additionally, sometimes unclued cards happen to be *one-away-from-playable*.
- A card is *one-away-from-playable* if only one other card would need to be given a *Play Clue* or a *Delayed Play Clue* in order to make the card *playable*.
- For example, in a 3-player game:
  - No red cards are played on the stacks.
  - Bob has a red 2 with a number 2 clue on it. (It was saved with a *2 Save* clue earlier on.)
  - Cathy has an unclued red 3 in her hand.
  - Alice knows that the unclued red 3 is currently *one-away-from-playable*, because there is only one card needed in order to make it *playable* - the red 1.
- Players are **not** allowed to give *Play Clues* or *Delayed Play Clues* to *one-away-from-playable* cards - they are not playable yet!
- Players are **not** allowed to give *Save Clues* to *one-away-from-playable* cards - unless they also happen to be critical.

<br />

### Save Clues

- You are **only** allowed to give a *Save Clue* to a card that is on chop.
  - This means that if a clue focuses a non-chop card, then it must be a *Play Clue*!
- You are **not** allowed to give a *Save Clue* to any card you want. You are **only** allowed to give a *Save Clue* on these specific cards:
  1. 5's (with a *5 Save* clue, e.g. number 5)
  1. 2's (with a *2 Save* clue, e.g. number 2)
  1. Critical cards (with either color or number)
- Additionally, everyone in the group also agrees to never let anyone discard a (unique) playable card. However, a clue to a unique playable card would be defined as a *Play Clue*, not a *Save Clue*.

<br />

### The Early Game

- The *Early Game* is the period of time before someone discards for the first time.
- Players **must** "extinguish" all of the available *Play Clues* and *Save Clues* on the board before ending the *Early Game*.
  - As outlined in the [beginner's guide](beginner.md#3---minimum-clue-value-principle-and-tempo-clues), "extinguishing" all the *Play Clues* does **not** include giving *Tempo Clues*. *Tempo Clues* do not meet *Minimum Clue Value Principle*, so in general, they should almost never be given.

<br />

## Special Moves

<br />

### The 2 Save

- A *2 Save* is when someone uses a number 2 clue to clue a previously-unclued 2 that is on someone's chop. (Everyone agrees that this is just a *Save Clue* instead of a *Play Clue*.)
- By definition, you can only perform a *2 Save* with a number clue.
  - If the other copy of the 2 is in the discard pile, then you can save it with color. But that would not be a *2 Save*, that would just be a "normal" *Save Clue*.

#### The Visible Rule

- Players are **not allowed** to perform a *2 Save* on a 2 if the other copy of the 2 is visible in someone else's hand.

#### Double Chop 2's

- The exception to the *Visible Rule* is when the same 2 is on two people's chops at the same time. In that situation, players are allowed to *2 Save* whichever one they want. And if it is the *Early Game*, then players **must** choose to save one of them before giving a *5 Stall* or before discarding to initiate the *Mid-Game*.

#### Interaction With 5 Stalls

- For level 17 players, there is a [special interaction between *2 Saves* and *5 Stalls*](level-17.md#interaction-between-2-saves-and-5-stalls).

<br />

### The 5 Stall

- A *5 Stall* is when someone uses a number 5 clue to clue a previously-unclued 5 that is not on chop yet.
- *5 Stalls* are only allowed to be performed in the *Early Game* and in other special stalling situations.
- For level 8 players, there are [additional rules](level-8.md#the-5-stall-intermediate-section) relating to the *5 Stall*.

<br />

### The Prompt

- A *Prompt* is when you get a player to play a clued card that was previously unknown.
- If the player **was already going to play** the card, then **it isn't a *Prompt***. *Prompts* can only be on cards that were not going to play otherwise.
- An example of a *Prompt* can be found in the [beginner's guide](beginner.md#the-prompt).
- For level 5 players, see the *[Prompts in Multi-Color Variants](level-5.mdx#prompts-in-multi-color-variants)* section.

<br />

### The Finesse

- A *Finesse* is when you get a player to blind-play a card to fulfill a promise that a certain card is playable right now.
- An example of a *Finesse* can be found in the [beginner's guide](beginner.md#the-finesse).
- *Finesses* must be on "matching" cards. (For example, the red 1 leads directly into the red 2, so they are considered to be a "matching" pair of cards.)
- When a player is *Finessed*, they should blind-play their card right away in order to demonstrate it!

<br />

### Finesse Position

- A player's *Finesse Position* refers to the slot that their **left-most unclued card** is in.

<br />

### Finessed Cards

- Even though *Finessed* cards are unclued, you can think of them as having an invisible clue on them. (Because they are already "gotten".)
- Thus, if a clue touches a *Finessed* card and some other card that did not have a clue on it, then the focus of the clue would be on the other card (because the focus of a clue is always on the "brand new card" introduced).
