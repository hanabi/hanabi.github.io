---
id: clue-interpretation-question-3
title: Clue Interpretation (Question 3)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ClueInterpretationQuestion3 from '@site/image-generator/yml/beginner/clue-interpretation-question-3.yml';

<BeginnersGuideProgress part="35" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Bob has a clued 2 and a clued 5 in this hand.
- Alice clues red to Bob, touching slot 2, slot 3, slot 4, and slot 5.

1. What slot is focused?
1. Is this a *Play Clue* or a *Save Clue*?
1. What identity does Bob write on the focused card?

</TabItem>
<TabItem value="solution">

1. Slot 3 is focused (i.e. the "new" card that was on chop).
1. Red 1 is played on the stacks and Bob already has a red 2 and a red 5. Thus, the focused red card can be either a red 3 or a red 4.
    - If it is a red 3, then this would be a *Chop-Focus Delayed Play Clue* through his own red 2. That is legal.
    - If it is a red 4, then it wouldn't make any sense, because red 4 is neither playable nor critical. (All clues must either be *Play Clues* or *Save Clues*.)
    - Thus, it must be a *Chop-Focus Delayed Play Clue* on the red 3.
1. Bob writes "red 3" on slot 3.

</TabItem>
</Tabs>

<ClueInterpretationQuestion3 />
