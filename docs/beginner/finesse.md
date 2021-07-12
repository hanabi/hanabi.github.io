---
id: finesse
title: The Finesse
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Finesse1 from '@site/image-generator/yml/beginner/finesse-1.yml';
import Finesse2 from '@site/image-generator/yml/beginner/finesse-2.yml';

<BeginnersGuideProgress part="60" />

- Normally, players play cards that have been clued by someone else on the team.
- However, it is also possible to tell a player to blind-play a card without any clues on it at all.
- In the example below:
  - Bob has no clued cards in his hand.
  - Alice clues red to Cathy, touching a red 4. This must be a *Play Clue* on the red 4.
  - Bob sees that the red 4 is currently unplayable. Assuming Alice is not making a mistake, this clue implies that someone has the red 3.
  - Bob does not see a red 3 clued in anyone else's hand. So, Alice must be promising him that he has a red 3.
  - Normally, this would indicate a *Prompt*. But Bob does not have any red cards and Bob does not have any 3's. So where is the red 3?
  - Bob knows that this must be a *Finesse* - he is promised that his left-most unclued card is the red 3.
  - Bob blind-plays his slot 1 card, and it is the red 3.
  - Cathy sees the blind-play happen immediately after this red clue, so she knows that she must have the connecting red card, the red 4.
  - Cathy plays the red 4.

<Finesse1 />

### Prompts > Finesses

- Note that ***Prompts* take precedence over *Finesses***. Players should never blind-play a card if the situation can apply to the clued cards in their hand.

<br />

### Finesse Urgency

- When a *Finesse* occurs, it causes temporary information desynchronization.
- For example, in the previous scenario, if Bob discarded instead of blind-played, Cathy would go on to think that she had the red 3. But she really doesn't have the red 3, which means that information is not synchronized throughout the team.
- For this reason, blind-playing a card into a *Finesse* is very important - by doing so, it resynchronizes all of the information. So, **if a player is *Finessed*, they should usually blind-play the card immediately**, even if they have other important cards to play or some good clue to give.

<br />

### Finesse Position

- We define the *Finesse Position* as the slot that a player's left-most unclued card is in. A player's *Finesse Position* can move around, and if it does, it is still possible to *Finesse* them.
- In the example below:
  - Alice clues Cathy red, which touches two red cards on slot 1 and slot 2.
  - Cathy assumes that the slot 1 card is a red 1.
  - Next, Bob clues Donald blue, which touches a blue 2.
  - Now, it is Cathy's turn. Cathy knows that she must have the blue 1 and that Bob is trying to perform a *Finesse*.
  - Blind-playing the blue 1 is more important than playing the red 1.
  - Normally, Cathy's *Finesse Position* would be her left-most card. However, since Cathy's slot 1 and slot 2 card are already clued, her *Finesse Position* card has shifted down to her slot 3. Thus, Cathy must blind-play the blue 1 from slot 3.

<Finesse2 />
