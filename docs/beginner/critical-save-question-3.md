---
id: critical-save-question-3
title: The Critical Save (Question 3)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CriticalSaveQuestion3 from '@site/image-generator/yml/beginner/critical-save-question-3.yml';

<BeginnersGuideProgress id="critical-save-question-3" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice clues yellow to Bob, touching a card on slot 4.
- Is this a *Play Clue* or a *Save Clue*?
- What *card note* does Bob write? (Be specific.)

</TabItem>
<TabItem value="solution">

- Bob knows that this could be a *Play Clue* on the yellow 1.
- However, since it touched his chop, it could also be a *Save Clue*. Since yellow 3 and yellow 4 are in the trash, a yellow clue matches those cards, so it could be yellow 3 or yellow 4.
- Bob then notices that Cathy has a yellow 3 in her hand. Since there are only two copies of yellow 3 in the deck, Bob cannot have the yellow 3.
- Bob does not know whether or not this is a *Play Clue* or a *Save Clue*, but he has to treat it as a *Save Clue* for the time being until he gets move information.
- Bob writes a *card note* that includes the following identities:
  - yellow 1 (as a *Play Clue*)
  - yellow 4 (as a *Critical Save*)

</TabItem>
</Tabs>

<CriticalSaveQuestion3 />
