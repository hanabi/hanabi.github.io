---
id: delayed-play-clues
title: Delayed Play Clues
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import DelayedPlayClues from '@site/image-generator/yml/beginner/delayed-play-clues.yml';

<BeginnersGuideProgress part="10" />

- *Play Clues* are different than *Delayed Play Clues*:
  - If the card will successfully play on the stacks **right now**, then the clue was a *Play Clue*.
  - If the card will successfully play on the stacks after other people have played cards of the same suit, then the clue was a *Delayed Play Clue* that was *through* other cards.
- We treat **all *Play Clues*** as **potential *Delayed Play Clues***.
- For example, in a 3-player game:
  - Alice clues Bob number 2, which is a *Play Clue* on a 2.
  - Now, it is Bob's turn. If his 2 is the red 2, then he can play it right now.
  - However, Bob also knows that this could be a *Delayed Play Clue* through the yellow 1, the green 1, or the blue 1. So, Bob must wait for Cathy to play all of her 1's first before he can try to play the 2.
  - Bob discards.

<DelayedPlayClues />
