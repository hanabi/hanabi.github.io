---
id: critical-save-question-4
title: The Critical Save (Question 4)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CriticalSaveQuestion4 from '@site/image-generator/yml/beginner/critical-save-question-4.yml';

<BeginnersGuideProgress id="critical-save-question-4" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice clues red to Bob, touching a card on slot 5.
- Is this a *Play Clue* or a *Save Clue*?
- What identity does Bob write on the card? (Be specific.)

</TabItem>
<TabItem value="solution">

- Bob knows that this could be a *Play Clue* on the red 1.
- However, since it touched his chop, it could also be a *Save Clue*. Since red 2 is in the trash and a red clue matches that card, it could be red 2.
- Bob does not know whether or not this is a *Play Clue* or a *Save Clue*, but he has to treat it as a *Save Clue* for the time being until he gets move information.
- Bob writes down an identity of:
  - red 1 (as a *Play Clue*)
  - red 2 (as a *Critical Save*)
- Note that most of the time, players save two's with a *2 Save*. However, if the first copy of a 2 gets discarded, the second copy of that 2 can be *Critical Saved* in the exact same way that a 3 or a 4 would be.

</TabItem>
</Tabs>

<CriticalSaveQuestion4 />
