---
id: early-game-question-3
title: The Early Game (Question 3)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EarlyGameQuestion3 from '@site/image-generator/yml/beginner/early-game-question-3.yml';

<BeginnersGuideProgress id="early-game-question-3" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- It is currently the *Early Game*. There is 1 clue token left.
- What action should Alice perform?

</TabItem>
<TabItem value="solution">

- The **only** legal action that Alice can perform is to clue purple to Cathy as a *Play Clue* on the purple 2.
  - Alice cannot clue number 2 to Cathy, since that would touch red 2 and would therefore violate *Good Touch Principle*.
  - Alice cannot clue number 5 to Donald as a *5 Stall* because you are not allowed to do a *5 Stall* if there is a legal *Play Clue* to give.

</TabItem>
</Tabs>

<EarlyGameQuestion3 />
