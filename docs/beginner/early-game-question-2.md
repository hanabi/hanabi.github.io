---
id: early-game-question-2
title: The Early Game (Question 2)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EarlyGameQuestion2 from '@site/image-generator/yml/beginner/early-game-question-2.yml';

<BeginnersGuideProgress part="50" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- It is currently the *Early Game*. There is 1 clue token left.
- Previously, Bob was clued about some 1's. He will go on to play the purple 1 and the green 1 in the future.
- What action should Alice perform?

</TabItem>
<TabItem value="solution">

- The **only** legal action that Alice can perform is to clue green to Bob as a *Delayed Play Clue* on the green 2.
  - Other than this green clue, there are no other possible legal clues to give.
  - Alice is not allowed to discard because it is the *Early Game* and all of the *Play Clues* have not been extinguished yet.

</TabItem>
</Tabs>

<EarlyGameQuestion2 />
