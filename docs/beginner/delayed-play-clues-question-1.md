---
id: delayed-play-clues-question-1
title: Delayed Play Clues (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DelayedPlayCluesQuestion1 from '@site/image-generator/yml/beginner/delayed-play-clues-question-1.yml';

<BeginnersGuideProgress id="delayed-play-clues-question-1" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice clues red to Donald, which touches one card on slot 2. (This is a *Play Clue*.)
- Bob clues red to Cathy, which touches one card on slot 3. (This is a *Play Clue*.)
- Cathy writes a *card note* with the identity of the card.

1. What *card note* does Cathy write?
1. Is this a *Delayed Play Clue*?
1. What action should Cathy perform?

</TabItem>
<TabItem value="solution">

1. Cathy writes a *card note* of "red 3".
1. Yes, this is a *Delayed Play Clue* through the red 2.
1. Since Cathy cannot play the red 3 yet, she should give an unrelated clue or discard.

</TabItem>
</Tabs>

<DelayedPlayCluesQuestion1 />
