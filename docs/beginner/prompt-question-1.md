---
id: prompt-question-1
title: The Prompt (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PromptQuestion1 from '@site/image-generator/yml/beginner/prompt-question-1.yml';

<BeginnersGuideProgress part="56" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Bob has two unknown 2's in his hand.
- Alice clues red to Cathy.
- What is Bob's interpretation of Alice's clue?

</TabItem>
<TabItem value="solution">

- Since the red 3 is in this trash, this is a *Critical Save* on the red 3 (i.e. a *Save Clue*).
- Bob should therefore not react in any way.
- If the red 3 were not in the trash, then it would be a *Prompt* on Bob's left-most 2.

</TabItem>
</Tabs>

<PromptQuestion1 />
