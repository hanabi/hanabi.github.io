---
id: prompt-question-3
title: The Prompt (Question 3)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PromptQuestion3 from '@site/image-generator/yml/beginner/prompt-question-3.yml';

<BeginnersGuideProgress part="59" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Cathy has two unknown purple cards in her hand.
- Alice wants to give a *Play Clue* to the purple 4.
- What clue should Alice give?

</TabItem>
<TabItem value="solution">

- It is possible for Alice to give a *Play Clue* to the purple 4 either by cluing purple or by cluing number 4. Both clues would focus the purple 4.
- However, this would signal a *Prompt* to Cathy, and she would play her purple cards from left-to-right. That means that the purple 3 would misplay from slot 4.
- Thus, Alice is not allowed to give a *Play Clue* to the purple 4.
- Instead, Alice can clue number 3 to Cathy. This would focus the purple 3 as a *Self-Prompt*.
- After that, Alice can give a *Play Clue* to the purple 4 without any problems.
- Note that normally, players are not supposed to give *Tempo Clues*, because they do not meet *Minimum Clue Value Principle*. But here, Alice has a very good reason to give a *Tempo Clue* - Cathy's cards are "out of order". So, it is okay to break the rule.

</TabItem>
</Tabs>

<PromptQuestion3 />
