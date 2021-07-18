---
id: 2-save-question-2
title: The 2 Save (Question 2)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TwoSaveQuestion2 from '@site/image-generator/yml/beginner/2-save-question-2.yml';

<BeginnersGuideProgress id="2-save-question-2" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Previously in the game, Bob was given a *Play Clue* on a 1. He had planned on playing it on his next turn.
- Now, Alice clues number 2 to Bob, touching his slot 5.
- From Bob's perspective, is this a *Play Clue* or a *Save Clue*?
- What *card note* does Bob write? (Be specific.)

</TabItem>
<TabItem value="solution">

- Bob already has a *card note* of "red 1, a blue 1, purple 1" on his 1 (because these are the 1's left to play on the stacks).
- If this is a *Play Clue*, then the identity of his 2 would be:
  - a yellow 2 (directly playable)
  - or a *Delayed Play Clue* on the two that matches his unknown 1 (e.g. red 2, blue 2, or purple 2)
- However, since Alice's clue touched Bob's chop, it could also be a *Save Clue*. If it is a *Save Clue*, then it could be a *2 Save* on an unplayable 2.
- Bob does not know whether or not this is a *Play Clue* or a *Save Clue*, but he has to treat it as a *Save Clue* for the time being until he gets move information.
- Thus, Bob writes a *card note* of "red 2, yellow 2, blue 2, purple 2".
  - (It cannot be a green 2 because that card is already played and is useless to the team; Alice would not waste a clue on a useless card like that.)

</TabItem>
</Tabs>

<TwoSaveQuestion2 />
