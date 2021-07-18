---
id: save-principle-question-2
title: Save Principle (Question 2)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SavePrincipleQuestion2 from '@site/image-generator/yml/beginner/save-principle-question-2.yml';

<BeginnersGuideProgress id="save-principle-question-2" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- What action should Alice perform?
- If Alice should give a clue, what identity will be written on the focused card? (Be specific.)

</TabItem>
<TabItem value="solution">

- Alice needs to give a *Save Clue* to Bob's yellow 2 before it is discarded (because everyone agrees that all unique 2's **must** be saved).
- Alice is not allowed to clue yellow, because 2's must be saved with a *2 Save*.
  - If Alice did clue yellow, then it would look like a *Play Clue* on a yellow card and Bob would try to play it as the yellow 1.
- If Alice clues number 2, then it would be a *2 Save* on the yellow 2, but it would also duplicate the red 2 (which is already played on the stacks).
- Thus, Alice should clue number 2 to Bob as a *2 Save* (because it is more important to save cards than it is to violate *Good Touch Principle*).
- That clue would be focused on slot 5. Bob will write a *card note* with the following identities:
  - green 2, blue 2 (as a *Play Clue*)
  - yellow 2, purple 2 (as a *2 Save*)

</TabItem>
</Tabs>

<SavePrincipleQuestion2 />
