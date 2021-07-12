---
id: critical-save-question-1
title: The Critical Save (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CriticalSaveQuestion1 from '@site/image-generator/yml/beginner/critical-save-question-1.yml';

<BeginnersGuideProgress part="23" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice clues number 3 to Bob, touching a card on slot 3.
- Is this a *Play Clue* or a *Save Clue*?
- What identity does Bob write on the card?

</TabItem>
<TabItem value="solution">

- Bob knows that this could be a *Play Clue* on:
  - the yellow 3 (directly playable)
  - the red 3 (as a *Delayed Play Clue* through Cathy's red 2)
- However, since it touched his chop, it could also be a *Save Clue*. Since green 3 is in the trash, a number 3 clue matches that, so it could be the matching green 3.
- Bob does not know whether or not this is a *Play Clue* or a *Save Clue*, but he has to treat it as a *Save Clue* for the time being until he gets move information.
- Bob writes down an identity of yellow 3, red 3, or green 3.

</TabItem>
</Tabs>

<CriticalSaveQuestion1 />
