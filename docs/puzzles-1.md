---
id: puzzles-1
title: Puzzles for Level 1

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Puzzle1A from '@site/image-generator/yml/puzzles-1/puzzle-1A.yml';
import Puzzle1B from '@site/image-generator/yml/puzzles-1/puzzle-1B.yml';
import Puzzle1C from '@site/image-generator/yml/puzzles-1/puzzle-1C.yml';
import Puzzle1D from '@site/image-generator/yml/puzzles-1/puzzle-1D.yml';
import Puzzle1E from '@site/image-generator/yml/puzzles-1/puzzle-1E.yml';

## Puzzle 1A

<Tabs
  defaultValue="question"
  values={[
    {label: 'Puzzle 1A', value: 'question'},
    {label: 'Solution 1A', value: 'solution'},
  ]}>
<TabItem value="question">

- Cathy gives Alice a 2 clue that touches two brand new cards, as shown.
- Previously, Alice had no information about her hand.
- What notes should Alice write on her two cards?

</TabItem>
<TabItem value="solution">

- The focus of the clue is the leftmost card, since the chop is not touched.
- Since the clue is not chop-focused, it cannot be a save clue.
  Therefore, it must be a play clue.
- Alice looks around to see what 2's are playable right now.
- Alice sees that red 2, green 2, and purple 2 (through Bob's purple 1) are playable.
- But, the red 2 is already gotten in Bob's hand. Cathy should not give this clue if it would duplicate a card, so Alice rules out red 2.
- Hence, Alice writes the note "g2,p2" or her left 2.
- The 2 on the right could be any 2 that is not gotten yet.
- So, Alice writes the note "g2,p2,y2" on her right 2.

</TabItem>
</Tabs>

<Puzzle1A />

## Puzzle 1B

<Tabs
  defaultValue="question"
  values={[
    {label: 'Puzzle 1B', value: 'question'},
    {label: 'Solution 1B', value: 'solution'},
  ]}>
<TabItem value="question">

- Bob gives a blue clue to Alice, using up the last clue.
- Previously, Alice only knew that she had a green 1 and no other green cards.
- What notes should Alice write on her two cards?
- How should those notes change once Cathy moves?

</TabItem>
<TabItem value="solution">

- This clue *is* chop focused. Thus, it could be a play clue or save clue.
- If it is a save clue, it must be a blue 4. No other cards are eligible to be saved by color yet. (Blue 5 should be saved by number.)
- If it is a play clue, it could either be blue 2 or blue 3, by finessing the blue 2 in Cathy's hand.
  - The blue 3 in Bob's hand is irrelevant, since Bob gave the clue and cannot see his own cards.
- Thus, Alice should write blue 2, 3, 4 on her right blue card.
- The other blue card could be any of blue 2, 3, 4, 5 (but not blue 1, because of good touch).
- Alice should probably also make an "f" note now on Cathy's blue 2.
  - If Cathy blind plays blue 2, then Alice knows for sure the right card is blue 3, and can play it.
  - Her other blue card will then be either blue 4 or blue 5.
  - If Cathy does not blind play, then Alice's rightmost blue card could be either blue 2 or blue 4.
- This concludes the answer if we are following conventions like laws. However, if we think critically for a bit, we might realize which case it is.
  - Indeed, Cathy has no clues to spend and no cards to play. So unless Cathy blind-plays a card, she is going to discard. This would cause purple 5 to discard, losing the game!
  - Therefore, it would be really stupid for Bob to give a play clue to a blue 2 for Alice; he should save the purple 5 instead.
  - It would also be really stupid for Bob to save a blue 4 for Alice, because Alice was already going to play green 1 anyways. Saving the purple 5 is much more urgent.
  - So by chasing the logic, assuming Bob is thinking ahead, we should assume the blue 2 is going to blind play next turn, and Alice has blue 3.

</TabItem>
</Tabs>

<Puzzle1B />

## Puzzle 1C

<Tabs
  defaultValue="question"
  values={[
    {label: 'Puzzle 1C', value: 'question'},
    {label: 'Solution 1C', value: 'solution'},
  ]}>
<TabItem value="question">

- Alice was previously given a 2 Save, so she has some marked 2's in her hand.
- Bob now gives the following green clue to Donald.
- What notes should Alice write?

</TabItem>
<TabItem value="solution">

- The clue to green 5 must be a play clue, because we save 5's by number.
- Therefore, Bob is promising the entire team that all the green cards are ready to play.
- Alice should now look around for the connecting green cards.
- Bob has a green 2, but it is irrelevant because Bob is the one making the promise. So, Alice must trust she has green 2.
- Alice is being asked to play her 2's from left to right until she finds green 2. For now, she should make a note on the left 2 saying it is green. If it turns out to not be green, then she would play the other 2.
- Alice can see a green 3 on Cathy's finesse position. So, that is the promised green 3. Alice marks Cathy's green 3 as finessed, highlighting the card in a light blue border.
- Alice can see a green 4 on Cathy's chop. But it is irrelevant, because Cathy would have no way of knowing it was there. Therefore, Alice must have green 4.
- None of Alice's clued cards match 4. So, Alice marks her leftmost unclued card as a finessed green 4 right now. (This way, she will not lose track of it later when she plays a card and her cards shuffle around.)
- Finally, Donald should know he has green 5. Alice makes a note that Donald should suspect his green card is exactly green 5, because he sees all the connecting cards.

</TabItem>
</Tabs>

<Puzzle1C />

## Puzzle 1D

<Tabs
  defaultValue="question"
  values={[
    {label: 'Puzzle 1D', value: 'question'},
    {label: 'Solution 1D', value: 'solution'},
  ]}>
<TabItem value="question">
</TabItem>
<TabItem value="solution">
</TabItem>
</Tabs>

<Puzzle1D />

## Puzzle 1E

<Tabs
  defaultValue="question"
  values={[
    {label: 'Puzzle 1E', value: 'question'},
    {label: 'Solution 1E', value: 'solution'},
  ]}>
<TabItem value="question">
</TabItem>
<TabItem value="solution">
</TabItem>
</Tabs>

<Puzzle1E />
