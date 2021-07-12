---
id: clue-interpretation-question-1
title: Clue Interpretation (Question 1)
---

import BeginnersGuideProgress from '@site/src/beginnersGuide.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ClueInterpretationQuestion1 from '@site/image-generator/yml/beginner/clue-interpretation-question-1.yml';

<BeginnersGuideProgress id="clue-interpretation-question-1" />

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- Bob has a completely unclued hand.
- Alice clues green to Bob, touching slot 4 and slot 5.

1. What slot is focused?
1. Is this a *Play Clue* or a *Save Clue*?
1. What identity does Bob write on the focused card?

</TabItem>
<TabItem value="solution">

1. Slot 5 is focused (i.e. the chop card).
1. Since green 2 is played on the stacks, the card on slot 5 must be either a green 3, a green 4, or a green 5.
    - If it is a green 3, then this would be a *Chop-Focus Play Clue*. That is legal.
    - If it is a green 4, then it wouldn't make any sense, because green 4 is neither playable nor critical. (All clues must either be *Play Clues* or *Save Clues*.)
    - If it is a green 5, then it wouldn't make any sense, because green 5 is not playable. Green 5 is critical, but it must be saved with a number 5 clue as a *5 Save*.
    - Thus, it must be a *Chop-Focus Play Clue* on the green 3.
1. Bob writes "green 3" on slot 5.

</TabItem>
</Tabs>

<ClueInterpretationQuestion1 />
