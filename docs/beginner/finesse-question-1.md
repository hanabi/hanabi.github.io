---
id: finesse-question-1
title: The Finesse (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FinesseQuestion1 from '@site/image-generator/yml/beginner/finesse-question-1.yml';

<BeginnersGuideProgress id="finesse-question-1" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Enumerate the 5 legal clues that Alice can give right now, along with their clue names.
- What is the best clue?

</TabItem>
<TabItem value="solution">

1. Alice can clue blue to Bob, touching the blue 1 as a *Play Clue*.
1. Alice can clue number 1 to Bob, touching the blue 1 as a *Play Clue*.
1. Alice can clue yellow to Cathy, touching the yellow 2 as a *Play Clue*.
1. Alice can clue blue to Cathy, touching the blue 2 as a *Finesse* on the blue 1.
1. Alice can clue number 2 to Cathy, touching the yellow 2 and the blue 2 as a *2 Save*.

The best clue is the *Finesse* because it gets two cards played right now. (The team can give a *Play Clue* to the yellow 2 later on.)

</TabItem>
</Tabs>

<FinesseQuestion1 />
