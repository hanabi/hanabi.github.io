---
id: puzzles-1
title: Puzzles for Level 1

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Puzzle1A from '@site/image-generator/yml/puzzles-1/puzzle-1A.yml';

## Puzzle 1A

<Tabs
  defaultValue="question"
  values={[
    {label: 'Puzzle 1A', value: 'question'},
    {label: 'Solution 1A', value: 'solution'},
  ]}>
<TabItem value="question">
It is the first turn of the game, with Alice to move.

- What are all the legal clues Alice can give?
- Of these, which clue is the best one?

</TabItem>
<TabItem value="solution">
At Level 1, the following is the list of all possible legal moves:

- Alice can give 5 to Cathy, as a *Save Clue*.
- Alice can give 1 to Bob, as a *Play Clue*.
- Alice can give 1 to Cathy, as a *Play Clue*.
- Alice can give 2 to Cathy, as a *Finesse*, causing Bob to blind-play the green 1. This is great.
- Alice can give **green to Cathy**, as a *Finesse*, causing Bob to blind-play the green 1. This is even better, because it also touches the green 4, meaning it gets one more card.

Note that Alice *cannot* give any of the following clues:

- Alice can not clue 2 to Bob as a *2 Save*, because the other green 2 is visible.
- Alice can not clue green to Bob, because it would be a *Play Clue* focused on the green 2 on chop, causing it to misplay.
- Alice can not clue yellow to Cathy, because it would be a *Play Clue* focused on the yellow 3, causing it to misplay.

</TabItem>
</Tabs>

<Puzzle1A />
