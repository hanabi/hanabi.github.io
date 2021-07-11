---
id: 2-save-question-1
title: The 2 Save (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TwoSaveQuestion1 from '@site/image-generator/yml/beginner/2-save-question-1.yml';

<BeginnersGuideProgress part="19" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice clues number 2 to Bob, touching his slot 4.
- From Bob's perspective, is this a *Play Clue* or a *Save Clue*?
- What identity does Bob write on the card?

</TabItem>
<TabItem value="solution">

- This cannot be a *Save Clue* because the clue did not touch the card on Bob's chop. Thus, it must be a *Play Clue*.
- The identity of his 2 could be:
  - a blue 2 (directly playable)
  - a yellow 2 (as a *Delayed Play Clue* through Cathy's yellow 1)

</TabItem>
</Tabs>

<TwoSaveQuestion1 />
