---
id: miscellaneous
title: Miscellaneous
---

import DoublePrompts from '@site/image-generator/yml/extras/miscellaneous/double-prompts.yml';
import EliminationRewrite from '@site/image-generator/yml/extras/miscellaneous/elimination-rewrite.yml';
import FiveDoublePull from '@site/image-generator/yml/extras/five-double-pull.yml';

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
- The card skipped over in this way will be the next thing discarded, as it is now considered known trash.
- If a *Layered Jump* skips over a card that cannot be in your own hand, then you can determine that it must be a mistake. In this situation, the skipped-over card must be clued directly to re-signify that it is good.

### The Playful Ignition

- If a directly playable card is on chop, it's generally very strange to *Chop Move* it if it could just be given a direct *Chop-Focus Play Clue*. This is because doing so can be extremely bad for tempo and can cause issues with *Clue Focus* in the future.
- However, what if a player performs a *Chop Move* on a playable card while there seems to be no good reason to do so? They must be trying to communicate something extra.
- In this situation, they are really trying to perform a *Playful Ignition*, which *Ignites* a card from the next player. The next player should blind-play their *Finesse Position* card, which gives the player with the *Chop Moved* card enough information to know that it is actually playable.
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Cathy's hand is, from newest to oldest: blue 4, blue 4, blue 5, red 1
  - Alice clues number 5 to Cathy, touching a blue 5 on slot 3.
  - It is now Bob's turn. Bob sees that since there were other *Play Clues* for Alice to give, Cathy will interpret this as an *Early 5's Chop Move*.
  - Bob also knows that it is nonsensical to *Chop Move* a playable red 1 - Alice could have just give a red *Chop-Focus Play Clue* to the red 1.
  - Thus, this must be a *Playful Ignition*, so Bob blind-plays his *Finesse Position* card. It is blue 1 and it successfully plays.
  - Cathy knows that if this was an *Early 5's Chop Move*, then Bob would not have blind-played anything. Since he blind-played his *Finesse Position* card, this must be a *Playful Ignition*. Cathy blind-plays her slot 4 card (the card to the right of the clued 5).

<FiveDoublePull />

- Sometimes, it can be useful to *Chop Move* a playable card. Something is only a *Playful Ignition* if there is not some other good reason for the *Chop Move*. Specifically, the player might want to:
  - Avoid violating *Good Touch Principle*.
  - Save a *Delayed Playable* card that is followed by a critical card.
  - Save two important cards when there are a lot of cards to deal with and the team is low on clues.
  - Get a blind-play from *Elimination* when the duplicate is visible.
- More examples of a *Playful Ignition* can be found [here](../examples/5-double-pull.md).

<br />

#### Interaction with 5 Rank Clues

- This interaction is turned **off** when there are no cards left to *Chop Move*.
- When playing with both *Bad Chop Move Ejections* and *Playful Ignitions*, **every** rank clue that newly touches a 5 that is one away from chop should be considered a *Chop Move*.
- In other words, a *5's Chop Move* interpretation **always** takes precedence over a *Direct Play Clue* on the focused 5.
- Therefore, players must remember that regardless of any resulting blind-play, the focused 5 could still be any color. Instead, such a blind-play **always** relates to the card being *Chop Moved* by the clue, not the 5 directly.
- For example, in a 3-player game:
  - It is no longer *Early Game*, and blue 3 and green 2 are on the stack.
  - Cathy's hand is, from newest to oldest: green 2, yellow 3, blue 5, red 1
  - Alice clues 5 to Cathy, touching a green 5 on slot 3.
  - Bob sees this is a *Playful Ignition*, and therefore blind-plays his *Finesse Position* card. It is blue 4 and it successfully plays.
  - It is now Cathy's turn. Even though a blue 4 was just blind-played, Cathy knows that this does not indicate that her 5 is necessarily blue; it could still be any color. Since Alice's clue was by definition a *5's Chop Move*, Cathy knows that this must mean Bob was reacting to the *Chop Move*.
  - Cathy understands that Bob must have blind-played as a *Playful Ignition*. She blind-plays her slot 4 card (the card to the right of the clued 5).

- Inversely, even if a directly playable 5 is given a rank clue while one away from chop, the next player may still be expected to respond as a *Bad Chop Move Ejection* or *Playful Ignition* if the resulting *Chop Move* would be abnormal.
