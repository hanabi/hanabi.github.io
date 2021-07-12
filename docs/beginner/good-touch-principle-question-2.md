---
id: good-touch-principle-question-2
title: Good Touch Principle (Question 2)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import GoodTouchPrincipleQuestion2 from '@site/image-generator/yml/beginner/good-touch-principle-question-2.yml';

<BeginnersGuideProgress id="good-touch-principle-question-2" />

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

- Alice needs to give a *Play Clue* to Bob's red 2 before it is discarded.
- If Alice clues red, then it would focus the red 2, but the red 4 would be duplicated (because it is already clued in Cathy's hand).
- If Alice clues number 2, then it would only touch the red 2.
- Thus, Alice should clue number 2 to Bob.
- Bob will write the following identities on the card:
  - red 2 (as a *Play Clue*)
  - yellow 2 (as a *2 Save*)
- (Bob knows that it cannot be a *2 Save* on a green 2 because that card is present in Cathy's hand and it is not on chop yet.)

</TabItem>
</Tabs>

<GoodTouchPrincipleQuestion2 />
