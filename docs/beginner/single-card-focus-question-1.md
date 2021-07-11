---
id: single-card-focus-question-1
title: Single Card Focus (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SingleCardFocusQuestion1 from '@site/image-generator/yml/beginner/single-card-focus-question-1.yml';

<BeginnersGuideProgress part="27" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Bob has a completely unclued hand.
- Alice clues purple to Bob, touching four cards.
- Which slot is focused?

</TabItem>
<TabItem value="solution">

- Slot 1, because it is the left-most card.
  - (All of the cards are "new" and none of them are on chop.)

</TabItem>
</Tabs>

<SingleCardFocusQuestion1 />
