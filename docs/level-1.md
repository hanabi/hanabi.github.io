---
id: level-1
title: Level 1 - Fundamentals
---

- Level 1 strategies can be learned with no games of Hanabi played. You can either learn them before you play your first game or after you play a few games to learn the basic mechanics.
- This stuff is mostly a repeat of the [beginner's guide](beginner), but we go into a bit more detail here.
- If you have not read the beginner's guide yet, **STOP NOW** and read that instead. Only come back here after you have played 5-10 games. (This page is just intended to be used as a reference for players who have already read the beginner's guide.)

<br />

## Conventions

<br />

### Chop

- When players have to discard, they typically discard their right-most unclued card.
- A player's chop is formally defined as **the next unclued card that they would discard if they had nothing else to do**.
- If a player has a clued card that is known useless, then they will typically discard the useless card **instead** of discarding their chop. (But the useless card does **not** count as the chop - their chop remains the right-most unclued card.)

<br />

### The Definition of Playable

- First, see the section on *[Delayed Play Clues](beginner/delayed-play-clues.md)* from the beginner's guide.
- When we say that an unclued card is currently *playable*, we do **not** mean that the card would be able to play on the stacks right this instant. If an unclued card is *playable*, then what we really mean is that it would be legal for someone to give either a *Play Clue* **or** a *Delayed Play Clue* to the card.
- In other words, if an unclued *playable* card was given a *Delayed Play Clue*, that card would eventually play on the stack without any additional clues needing to be given by anyone else - all the in-between cards, if any, are present and accounted for.

<br />

### One-Away-From-Playable Cards

- As noted in the previous section, sometimes unclued cards happen to be *playable*.
- Additionally, sometimes unclued cards happen to be *one-away-from-playable*.
- A card is *one-away-from-playable* if only one other card would need to be given a *Play Clue* or a *Delayed Play Clue* in order to make the card *playable*.
- For example, in a 3-player game:
  - No red cards are played on the stacks.
  - No player has any red 1's in their hand.
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

### Clue Focus

There is a 4-step process for determining the focus of a clue:

1. If no cards are new, then **the focus is on the left-most re-touched card**.
1. If only one card is new, then **the focus is on the new card**.
1. If two or more cards are new, and one of them was on chop, then **the focus is on the chop**.
1. If two or more cards are new, and none of them were on chop, then **the focus is on the left-most new card**.

This process is represented in the following flowchart:

<img src="/img/flowcharts/clue-focus-flowchart.png" alt="Clue Focus Flowchart" class="flowchart" />

<br />

### The Early Game

- The *Early Game* is the period of time before someone discards for the first time.
- Players **must** "extinguish" all of the available *Play Clues* and *Save Clues* on the board before ending the *Early Game*.
  - As outlined in the [beginner's guide](beginner/minimum-clue-value-principle.md), "extinguishing" all the *Play Clues* does **not** include giving *Tempo Clues*. *Tempo Clues* do not meet *Minimum Clue Value Principle*, so in general, they should almost never be given.

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

- For level 17 players, there is a [special interaction between *2 Saves* and *5 Stalls*](level-17.md#interaction-between-2-saves--5-stalls).

<br />

### The 5 Stall

- A *5 Stall* is when someone uses a number 5 clue to save a previously-unclued 5 that is not on chop yet.
- *5 Stalls* are only allowed to be performed in the *Early Game* and in other special stalling situations.
- Furthermore, you are only allowed to *5 Stall* in the *Early Game* if there is nothing else to do, meaning that all of the "normal" Play Clues and Save Clues have been extinguished.
- For level 8 players, there are [additional rules](level-8.md#the-5-stall-intermediate-section) relating to the *5 Stall*.

<br />

### The Prompt

- A *Prompt* is when you get a player to play a clued card that was previously unknown.
- If the player **was already going to play** the card, then **it isn't a *Prompt***. *Prompts* can only be on cards that were not going to play otherwise.
- An example of a *Prompt* can be found in the [beginner's guide](beginner/prompt.md).
- For level 5 players, see the *[Prompts in Multi-Color Variants](level-5.md#prompts-in-multi-color-variants)* section.

<br />

### The Finesse

- A *Finesse* is when you get a player to blind-play a card to fulfill a promise that a certain card is playable right now.
- An example of a *Finesse* can be found in the [beginner's guide](beginner/finesse.md).
- *Finesses* must be on "connecting" cards. (For example, the red 1 leads directly into the red 2, so they are considered to be a "connecting" pair of cards.)
- When a player is *Finessed*, they should blind-play their card right away in order to demonstrate it!

<br />

### Finesse Position

- A player's *Finesse Position* refers to the slot that their **left-most unclued card** is in.

<br />

### Finessed Cards

- Even though *Finessed* cards are unclued, you can think of them as having an invisible clue on them. (Because they are already "gotten".)
- Thus, if a clue touches a *Finessed* card and some other card that did not have a clue on it, then the focus of the clue would be on the other card (because the focus of a clue is always on the "new" card introduced).

<br />

## Website Features

- If you have played a few games on [Hanab Live](https://hanab.live), then you may have noticed that the website has several features.
- The website has an [extensive documentation](https://github.com/Zamiell/hanabi-live/blob/master/docs/FEATURES.md#notes). You can get to that page by pressing the "Help" icon in the upper-right part of the website lobby.
- Below are a few of the most important features that a beginner should know about.

<br />

### Card Notes

<!-- lint disable no-undefined-references -->

- If you are following the beginner's guide, then you should be [writing card notes](beginner/card-notes) in every game.
- Certain special notes [change the appearance of the card for you](https://github.com/Zamiell/hanabi-live/blob/master/docs/FEATURES.md#notes).
  - If you write the name of a card like "red 2" or "r2", the image of the card will snap to the written card.
  - A note of "f" is used to indicate a card is *Finessed* (meaning that it will blind-play in the future). The website draws a special border around *Finessed* cards.
    - You can use `shift + right-click` as a shortcut to add this note.
  - A note of "cm" is used to indicate a card is *Chop Moved*. The website draws a special border around *Chop Moved* cards. (*Chop Moves* are a special convention introduced in level 3. If you are a level 1 player, don't worry about this for now.)
    - You can use `alt + right-click` as a shortcut to add this note.
  - You can also use brackets to stack multiple notes. For example, "[f] [red 2]".

<!-- lint enable no-undefined-references -->

<br />

### Rewind

- During a game, clicking the arrow button in the bottom-left-hand corner opens the [in-game replay feature](https://github.com/Zamiell/hanabi-live/blob/master/docs/FEATURES.md#in-game-replay).
  - You can also use the arrow keys as a shortcut to move backwards and forwards through time.
- This is useful if you need to recall what happened several turns ago.

<br />

### Empathy

- If you press the space bar or left-click on someone else's hand, you can see how the cards appear to them.
- This is the equivalent of asking "what do you know about your cards?" in real life.
- This feature is referred to as "empathy" by the Hyphen-ated group.
