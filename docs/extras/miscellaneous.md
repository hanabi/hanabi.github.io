---
id: miscellaneous
title: Miscellaneous
---

import DoublePrompts from '@site/image-generator/yml/extras/miscellaneous/double-prompts.yml';
import EliminationRewrite from '@site/image-generator/yml/extras/miscellaneous/elimination-rewrite.yml';

### Double Prompts in Multi-Color Variants

- Normally, when a multi-color card is *Prompted* from someone's hand, they should play the card that has the most positive information.
- However, what if they are *Prompted* for two cards of the same multi-color suit? They should play the card with the most positive information first, even if it is not the left-most card.
- For example, in a 3-player rainbow game:
  - Rainbow 1 is played on the stacks.
  - Bob has a slot 1 card that has a blue clue on it. (Thus, it is either a blue card or a rainbow card.)
  - Bob also has a slot 3 card that has a blue clue and a red clue on it. (Thus, it is a known rainbow card.)
  - Alice clues Cathy about a rainbow 4.
  - Bob is promised the rainbow 2 and the rainbow 3, so he knows that these cards must be on slots 1 and slot 3.
  - However, Bob also knows that you should always play the card with the most information on it first, so he plays his slot 3 card as rainbow 2 (instead of slot 1, the left-most card).

<DoublePrompts />

### The Elimination Rewrite (for 1's)

- Normally, when a playable card is discarded, a player will write *Elimination Notes* on their hand for the other copy of the card.
- However, there is a special case when **two** copies of the same 1 are discarded. The original *Elimination Notes* from the discard of the first 1 no longer apply because it is possible that the player has drawn the third copy of the 1 before the second copy could be clued.
- Thus, when a player discards the second copy of a playable 1, they should delete all of their *Elimination Notes* from the first discard and rewrite all of the *Elimination Notes* on the rest of their hand anew (essentially acting like the second discard was the first discard).
- For example, in a 3-player game:
  - Nothing is played on the stacks.
  - Alice discards a red 1. Alice writes *Elimination Notes* on her slot 2, slot 3, slot 4, and slot 5.
  - On her next turn, Alice discards an unrelated card. She now has *Elimination Notes* on slot 3, slot 4, and slot 5.
  - On her next turn, Alice discards another red 1. Normally, she would now have *Elimination Notes* on slot 4 and slot 5. However, because of the *Elimination Rewrite*, she instead writes *Elimination Notes* on slot 2, slot 3, slot 4, and slot 5.

<EliminationRewrite />

### The Negative Blind-Play

- Given enough negative clues on a card (and potentially some ancillary information based on the history of the game), it is possible to narrow down the identity of an unclued card in your hand to possibilities that only include playable cards that are not already touched in someone else's hand.
- In this situation, you are expected to blind-play the card.

<br />

### The Layered Jump

- If a player who is blind-playing into a *Layered Finesse* skips over a card, they are performing a *Layered Jump*. This player has deduced that the card they are skipping over is duplicated (or otherwise bad).
- The card skipped over in this way will be the next thing discarded, as it is now considered known-trash.
- If a *Layered Jump* skips over a card that cannot be in your own hand, then you can determine that it must be a mistake. In this situation, the skipped-over card must be clued directly to re-signify that it is good.
