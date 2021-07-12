---
id: single-card-focus
title: Single Card Focus
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import LeftMostFocus from '@site/image-generator/yml/beginner/left-most-focus.yml';
import ChopFocus from '@site/image-generator/yml/beginner/chop-focus.yml';

<BeginnersGuideProgress part="26" />

- So far, we have learned about the two types of clues: *Play Clues* and *Save Clues*.
- But all of the *Play Clues* and *Save Clues* that we have seen so far have only "touched" a single card.
- Obviously, it is also possible to give a clue that touches **two or more** cards.
- We agree that if a clue touches two or more cards, the clue only delivers a message about **one specific card**. This is referred to as the *focus* of the clue.
- With every clue, only **one card is focused**. Nothing specific is implied about non-focused cards (beyond that they will be useful at some point later on).
- For example, if Alice gives a *Play Clue* to Bob that touches two cards, then Bob can **only play the focused card**. He has to hold on to the non-focused card for later.

<br />

### Determining the Focus

- So, when two or more cards are touched by a clue, which card is focused?
- The focus is always on the card that **did not have any clues on it already**. (We refer to this as the "brand new card introduced".)
- If there are multiple "new" cards, then:
  - If the chop card is a "new" card, then the **focus is on the chop**.
  - Otherwise, the **focus is on the left-most card**.
- Think of this as a 3-step process:

<img src="/img/flowcharts/clue-focus-flowchart.png" alt="Clue Focus Flowchart" class="flowchart" />

### Example 1: Left-Most Focus

- In the example below, Alice clues red to Bob. This must be a *Play Clue*.
- Before this clue, Bob's hand was completely unclued. So, with this clue, **two new cards were introduced** - the red card on slot 2 and the red card on slot 4.
- Bob knows that in this situation, the focus of the clue is the left-most of the two new cards. This must be a *Play Clue* on a red 1.
- Since the other red card in his hand must be useful, Bob can reason that it is either red 2, red 3, red 4, or red 5. He will hold on to the card for later.

<LeftMostFocus />

### Example 2: Chop-Focus

- In the example below, Alice clues red to Bob. This must be a *Play Clue*.
- Before this clue, Bob's hand was completely unclued. So, with this clue, **three new cards were introduced** - slot 1, slot 2, and slot 5.
- Before this clue, Bob's chop was slot 5. So, since the clue touched his chop and *Chop-Focus* has priority, this must be a *Chop-Focus Play Clue* on a red 1.

<ChopFocus />

- Note that even though it touches Bob's chop card, Bob knows that this cannot be a *Save Clue*. Specifically:
  - It can't be a *5 Save* on a red 5, because Alice would have clued number 5 for that.
  - It can't be a *2 Save* on a red 2, because Alice would have clued number 2 for that.
  - It can't be a *Critical Save*, because there are no red cards in the trash yet.
