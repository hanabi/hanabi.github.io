---
id: minimum-clue-value-principle-question-1
title: Minimum Clue Value Principle (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import MinimumClueValuePrincipleQuestion1 from '@site/image-generator/yml/beginner/minimum-clue-value-principle-question-1.yml';

<BeginnersGuideProgress id="minimum-clue-value-principle-question-1" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice is in a special situation where she cannot discard.
- Bob's blue 4 has been previous touched with a blue clue.
- Cathy's red 2 and yellow 2 have been previous touched with a number 2 clue.
- Enumerate all of the legal *Tempo Clues* that Alice can give.

</TabItem>
<TabItem value="solution">

- Alice could give a *Tempo Clue* to the blue 4 in Bob's hand:
  - A number 4 clue would be legal, since it would only touch slot 4. This would "fill-in" the 4 to be a blue 4.
  - A blue clue would be legal, since it would only touch slot 4. This would not "fill-in" the card, but the clue would still mean to "play the card", so it would still work properly.
- Alice could give a *Tempo Clue* to the red 2 in Cathy's hand:
  - A number 2 clue would not be legal, since it would focus slot 1 instead of slot 4.
  - A red clue would be legal, since it would only touch slot 4.
- Alice cannot give a *Tempo Clue* to the yellow 2 in Cathy's hand:
  - A number 2 clue would not be legal, since it would focus slot 1 instead of slot 5.
  - A yellow clue would not be legal, since it would focus slot 3 instead of slot 5.

</TabItem>
</Tabs>

<MinimumClueValuePrincipleQuestion1 />
