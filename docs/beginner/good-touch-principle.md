---
id: good-touch-principle
title: Good Touch Principle (GTP)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import GoodTouchPrinciple1 from '@site/image-generator/yml/beginner/good-touch-principle-1.yml';
import GoodTouchPrinciple2 from '@site/image-generator/yml/beginner/good-touch-principle-2.yml';
import GoodTouchPrinciple3 from '@site/image-generator/yml/beginner/good-touch-principle-3.yml';

<BeginnersGuideProgress part="38" />

- When cluing cards, we follow *Good Touch Principle* - **we only touch cards that will eventually be played**.
  - It would be a *Bad Touch* if someone touched a card that was already played on the stacks or was already clued in someone else's hand.
- *Good Touch Principle* is a powerful building block for logic and reasoning. If everyone only touches good cards, then players can greatly narrow down the possibilities for the clued cards in their hand!
- In the example below:
  - Alice wants to give a *Play Clue* to the red 2.
  - Alice has a choice between cluing red and cluing number 2.
  - If she clues number 2, it would uniquely touch the red 2 on slot 1.
  - If she clues red, then it would touch slot 1, slot 2, and slot 3. This clue would violate *Good Touch Principle*, since the red 4's would be duplicated in Bob's hand.
  - Thus, the correct clue for Alice to give is number 2.

<GoodTouchPrinciple1 />

- In the example below:
  - Alice has an unknown purple card in her hand.
  - Alice can see that the purple stack is played up to purple 4. The only other useful purple card left is the purple 5.
  - Alice also knows that according to *Good Touch Principle*, every clued card will eventually be played.
  - Thus, by process of elimination, she can reason that the unknown purple card in her hand must be purple 5, and she can immediately play it.

<GoodTouchPrinciple2 />

- In the example below:
  - In the middle of a game, Alice clues yellow to Bob, touching slot 2 and slot 3.
  - The focus of the clue is on slot 2. This must be a *Play Clue*, so Bob marks his slot 2 card as a yellow 2.
  - Slot 3 was also touched by the clue, but it was not the focus. From *Good Touch Principle*, Bob knows that it must be playable in the future.
  - Therefore, Bob marks his slot 3 card as either yellow 3, yellow 4, or yellow 5.

<GoodTouchPrinciple3 />
