---
id: prompt-question-2
title: The Prompt (Question 2)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PromptQuestion2 from '@site/image-generator/yml/beginner/prompt-question-2.yml';

<BeginnersGuideProgress id="prompt-question-2" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Cathy has two unknown 3's in her hand.
- What are the two possible clues that Alice can give?
- Which one is better and why?

</TabItem>
<TabItem value="solution">

- First, Alice can clue yellow to Bob:
  - This would be a *Play Clue* on the yellow 4, which would *Prompt* Cathy.
  - Cathy would play her left-most 3 and then stop.
- Second, Alice can also blue to Bob:
  - This would be a *Play Clue* on the blue 4, which would *Prompt* Cathy.
  - Cathy would try to play blue 3 from slot 3. However, it would be yellow 3, which would successfully play.
  - Cathy would know that she is promised to have the blue 3, so she would go on to play her other 3 as the blue 3.
- The second clue is better than the first clue because it gets Cathy to play two cards instead of one.

</TabItem>
</Tabs>

<PromptQuestion2 />
