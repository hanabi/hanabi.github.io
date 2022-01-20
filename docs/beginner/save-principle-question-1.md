---
id: save-principle-question-1
title: Save Principle (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SavePrincipleQuestion1 from '@site/image-generator/yml/beginner/save-principle-question-1.yml';

<BeginnersGuideProgress id="save-principle-question-1" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice clues blue to Bob, touching a card on slot 1. This must be a *Play Clue* on the blue 1.
- Should Bob play the blue 1?

</TabItem>
<TabItem value="solution">

- No. If Bob plays the blue 1 and Cathy discards the green 4, then the maximum score would be decreased.
- As long as there is a chance that Cathy will discard, Bob **must** save the green 4 right now before playing any playable cards.

</TabItem>
</Tabs>

<SavePrincipleQuestion1 />
