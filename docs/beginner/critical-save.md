---
id: critical-save
title: The Critical Save
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import CriticalSave from '@site/image-generator/yml/beginner/critical-save.yml';

<BeginnersGuideProgress id="critical-save" />

- Critical cards are defined as the final card of a suit and rank combination that is not discarded yet. For example:
  - If Alice has a red 2 in her hand, and the other copy of red 2 is in the deck, then Alice's red 2 is not critical.
  - If Alice has a red 2 in her hand, and the other copy of red 2 is already discarded, then Alice's red 2 is critical.
  - If Alice has a red 5 in her hand, then it is always critical. (There is only one copy of each 5 in a Hanabi deck.)
- For the same reason that 5's need to be saved, critical cards also need to be saved.
- We agree that players can save critical cards with **either a color clue or a number clue**.
- In the example below:
  - Alice clues Bob blue, which touches a card on slot 4.
  - Before this clue, the only clued card in Bob's hand was the 5 on slot 5.
  - Bob's first instinct is that this could be a *Play Clue* on the blue 2. However, since the clue was focused on his chop, this could also be a *Save Clue*.
  - Bob looks through the discard pile and finds that there is a blue 4 there. Thus, this could be a *Save Clue* on the blue 4. So, Bob knows that for now, he has to hold on to the card.
  - Bob marks the card as either a blue 2 or a blue 4, so that he can keep track of it for later. Then, he discards.

<CriticalSave />
