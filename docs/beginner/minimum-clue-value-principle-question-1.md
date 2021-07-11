---
id: minimum-clue-value-principle-question-1
title: Minimum Clue Value Principle (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import MinimumClueValuePrincipleQuestion1 from '@site/image-generator/yml/beginner/minimum-clue-value-principle-question-1.yml';

<BeginnersGuideProgress part="45" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice is in a special situation where she cannot discard.
- What action should Alice perform?

</TabItem>
<TabItem value="solution">

- Alice needs to give a *Save Clue* to Bob's yellow 2 before it is discarded (because everyone agrees that all unique 2's **must** be saved).
- Alice is not allowed to clue yellow, because 2's must be saved with a *2 Save*.
  - If Alice did clue yellow, then it would look like a *Play Clue* on a yellow card and Bob would try to play it as the yellow 1.
- If Alice clues number 2, then it would be a *2 Save* on the yellow 2, but it would also duplicate the red 2 (which is already played on the stacks).
- Thus, Alice should clue number 2 to Bob as a *2 Save* (because it is more important to save cards than it is to violate *Good Touch Principle*).
- That clue would be focused on slot 5. Bob will write the following identities on the card:
  - green 2 or blue 2 (as a *Play Clue*)
  - yellow 2 or purple 2 (as a *2 Save*)

</TabItem>
</Tabs>

<MinimumClueValuePrincipleQuestion1 />
