---
id: delayed-play-clues-question-3
title: Delayed Play Clues (Question 3)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DelayedPlayCluesQuestion3 from '@site/image-generator/yml/beginner/delayed-play-clues-question-3.yml';

<BeginnersGuideProgress id="delayed-play-clues-question-3" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice clues number 4 to Bob, which touches one card on slot 1. (This is a *Play Clue*.)
- Bob writes a *card note* with the identity of the card.

1. What *card note* does Bob write? (Be specific.)
2. Is this a *Delayed Play Clue*?
3. What action should Bob perform?

</TabItem>
<TabItem value="solution">

1. Bob writes a *card note* of "red 4, yellow 4, blue 4, purple 4".
    - First, it could be a direct *Play Clue* on a red 4 or a purple 4.
    - Second, it could be a *Delayed Play Clue* on a yellow 4 through Cathy's yellow 2 and yellow 3.
    - Third, it could be a *Delayed Play Clue* on a blue 4 through Donald's blue 3.
2. Bob does not know whether this is a *Play Clue* or a *Delayed Play Clue*. However, since Bob has to treat all *Play Clues* as potential *Delayed Play Clues*, Bob cannot play the 4 on this turn.
3. Since Bob cannot play the 4 yet, he should give an unrelated clue or discard.

</TabItem>
</Tabs>

<DelayedPlayCluesQuestion3 />
