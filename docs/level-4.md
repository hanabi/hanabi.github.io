---
id: level-4
title: Level 4 - Basic Chop Moves
---

import TrashChopMove1 from '@site/image-generator/yml/level-4/trash-chop-move-1.yml';
import TrashChopMove2 from '@site/image-generator/yml/level-4/trash-chop-move-2.yml';
import TrashChopMove3 from '@site/image-generator/yml/level-4/trash-chop-move-3.yml';
import FivesChopMove1 from '@site/image-generator/yml/level-4/5s-chop-move-1.yml';
import FivesChopMove2 from '@site/image-generator/yml/level-4/5s-chop-move-2.yml';
import ChopMoveNew from '@site/image-generator/yml/level-4/chop-move-new.yml';
import ChopMoveNewException from '@site/image-generator/yml/level-4/chop-move-new-exception.yml';
import ChopMovePrompt from '@site/image-generator/yml/level-4/chop-move-prompt.yml';

- Level 4 strategies should only be learned if you have played with the group for a week or so (40+ games of experience).

<br />

## Conventions

<br />

### Chop Moves

- Normally, players discard their oldest (right-most) unclued card. However, sometimes a player can know that an unclued card is very important.
- A *Chop Move* is a special kind of move that indicates to a player that the unclued card that is currently on their chop is very important.
- After the *Chop Move*, the player considers the card on their chop to be touched with an "invisible" clue. Thus, their chop will "move" to the next right-most unclued card.
- A *Chop Move* is permanent, meaning that a *Chop Moved* card should not be discarded for the remainder of the game.
- The two most common kinds of *Chop Moves* are listed below.

<br />

## Special Moves

<br />

### The Trash Chop Move

- In the middle of a game, if all of the 1's have been played already, and someone clues a 1, this is quite strange. (From *Good Touch Principle*, players are not supposed to touch cards that have already been played.) In this situation, the 1 is considered "trash".
- The clue must have some deeper meaning. We agree that it means that the cards to the right of the trash are important. The point of the clue was to give the player a safe discard.
- However, in addition to giving a safe discard, it should also *Chop Move* **all** of the cards to the right of the trash.
- For example, in a 3-player game:
  - All of the 1's are played.
  - Bob has a completely unclued hand.
  - Alice clues 1's to Bob, which touches a 1 in his slot 4.
  - Bob *Chop Moves* his slot 5.
  - Bob discards the 1.
  - Bob's chop is now his slot 4.

<TrashChopMove1/>

- Most of the time, the *Trash Chop Move* is done for a single card (meaning that the trash card that was clued was one-away from chop). However, you can also use the *Trash Chop Move* to *Chop Move* multiple cards.
- For example, in a 3-player game:
  - All of the 1's have been played on the stacks.
  - Bob has a completely unclued hand.
  - Alice clues 1's to Bob, which touches a 1 in his slot 1.
  - Bob *Chop Moves* his slot 2, his slot 3, his slot 4, and his slot 5 (a quadruple *Chop Move*).
  - Bob discards the 1.
  - Bob's chop is now his slot 1.

<TrashChopMove2/>

- *Trash Chop Moves* are most commonly performed with a number 1 clue because it is likely that in the middle of a game, all of the 1's will be already played. But it could also be done with a number two 2 clue if all the 2's are already played / accounted for. Or, it could be done with a red clue if all of the red cards are already played / accounted for. And so forth.
- Strategy wise, the *Trash Chop Move* is used for two main reasons:
  1. Sometimes there are multiple critical cards in a row on chop and it falls to one player to save all of them. In this situation, a multiple-card *Chop Move* could be the only way to do it.
  1. Some cards (e.g. a *one-away-from-playable* 3) are quite useful to the team, but "illegal" to touch directly (as touching them directly with a clue would imply that they are playable right now). If the game is going well, then it can be useful to "waste" a clue in order to have the card saved permanently.
- Note that you are **not** allowed to *Trash Chop Move* a card that you can just clue directly with a *Save Clue* (unless there are multiple critical cards in a row on chop and you have no other choice). This is because having some positive information is always better than having the card be a mystery.
- If a *Trash Chop Move* touches **multiple** trash cards, then it only *Chop Moves* the cards to the right of the right-most trash card.
- For example, in a 3-player game:
  - All the 1's are played on the stacks.
  - Bob has a completely unclued hand.
  - Alice clues 1's to Bob, which touches a 1 in slot 2 and a 1 in slot 4.
  - Bob **only** *Chop Moves* his slot 5 card.

<TrashChopMove3/>

<br />

### The 5's Chop Move (5CM)

- Normally, we are only allowed to save 5's on chop (unless it is done with a *5 Stall* clue, which can happen in the *Early Game* and in other "stalling" situations).
- So, if a number 5 clue is performed on a 5 that is not on chop, and it is **not** a stalling situation, then it will normally look like a *Play Clue* on that 5.
- However, if the 5 is:
  - **one-away** from chop (or, if two or more 5's are clued and the right-most 5 is one-away from chop), and
  - the chop card is not a trash card
- Then, we agree that it has a special meaning, and that the clue is **not** a *Play Clue* at all.
- Instead, it is understood that the clue is a *5's Chop Move*, and the player should *Chop Move* in a manner similar to the *Trash Chop Move*.
- For example, in a 3-player game:
  - All the 1's are played on the stacks.
  - Bob has a completely unclued hand.
  - Alice clues 5's to Bob, which touches a 5 on slot 4.
  - Bob *Chop Moves* his slot 5 card. Bob's new chop is his slot 3.

<FivesChopMove1/>

- Similar to the *Trash Chop Move*, if a *5's Chop Move* touches **multiple** 5's, then it only *Chop Moves* the cards to the right of the right-most 5.
- For example, in a 3-player game:
  - All the 1's are played on the stacks.
  - Bob has a completely unclued hand.
  - Alice clues 5's to Bob, which touches a 5 in slot 2 and a 5 in slot 4.
  - Bob **only** *Chop Moves* his slot 5 card. Bob's new chop is his slot 3.

<FivesChopMove2/>

- Note that the *5's Chop Move* is different than the *Trash Chop Move* in that you can only chop move **one** card with it. Thus, if you clue a 5 and it is **two** (or more) slots away from the chop, then it is to be assumed to be a *Play Clue* on the 5.
  - When counting how far away from chop a card is, you should only look at **unclued** cards.
- Remember that *5 Stalls* takes precedence over *5's Chop Moves*. Thus, if a number 5 clue **could** just be a *5 Stall* (e.g. it is the *Early Game*), then it should not *Chop Move* anything.

<br />

## General Principles

<br />

### Chop Moves & New Clues

- Once a card has been *Chop Moved* and is no longer in danger of being discarded, it is treated as an already-clued card with regards to new clues given to that hand.
- For example, in a 3-player game:
  - All of the 1's have been played on the stacks.
  - Bob has a completely unclued hand.
  - Alice clues 1's to Bob, which touches a 1 in his slot 4.
  - Bob *Chop Moves* his slot 5.
  - Bob discards the 1.
  - Bob's chop is now his slot 4.
  - Cathy clues blue to Bob, which touches his slot 1 (the card he just drew) and his slot 5 (the card that was just *Chop Moved*).
  - Bob knows that the focus of the clue is always on the brand-new card introduced, so this is **not** chop-focus, and the focus of the clue is on slot 1.
  - Thus, Bob will play blue 2 from slot 1 on his next turn.

<ChopMoveNew/>

- The exception to the above rule is if a clue is given that touches a *Chop Moved* card for the first time and only "old" cards are touched.
- For example, in a 3-player game of the rainbow variant:
  - All the 2's are played on the stacks.
  - Bob has an unknown red card on slot 3, an unknown red card on slot 4, and a *Chop Moved* card in slot 5 (that is completely unclued).
  - Alice clues blue to Bob, which touches slot 3, slot 4, and slot 5. (Slot 3 and slot 4 are "filled in" to be rainbow cards and slot 5 is now a true blue card.)
  - Bob knows that the focus of the clue is normally on the brand-new card introduced, but all three of the cards that were touched were "old".
  - Bob knows that when old cards are re-touched, the focus of the clue is the left-most of those cards.
  - However, Bob also knows that this is the exception to the rule. In this specific case, putting a positive clue on the *Chop Moved* card was more important than filling in the rainbow cards, so by convention the focus of the clue is his slot 5.

<ChopMoveNewException/>

<br />

### Chop Moves & Prompts

- *Chop Moves* interact with *Prompts* & *Finesses* in a potentially confusing way. *Chop Moved* cards should **not** be played into *Prompts*, even though they are imagined to have an "invisible" clue on them.
- For example:
  - All the 1's are played on the stacks.
  - Bob has no cards clued in his hand, but he is *Chop Moved* for a mystery card on his slot 5.
  - Alice clues Cathy red, which touches a red 3.
  - Bob knows that he is promised the red 2. If this is a *Finesse*, then he has the red 2 on his *Finesse Position* (slot 1).
  - However, Bob is also *Chop Moved* for a card. Bob knows that *Chop Moved* cards have an "invisible" clue around them, and Bob also knows that *Prompts* are said to take precedence over *Finesses*.
  - So should he play his slot 1 as a *Finesse* or his slot 5 as a *Prompt*? In this situation, Bob knows that *Prompts* do not apply to *Chop Moved* cards, so Bob should play his slot 1.

<ChopMovePrompt/>

<br />

## Common Mistakes

<br />

### Critical Discards after a Chop Move (Mistake)

- If a player *Chop Moves* a card, and then the next time they discard, they discard a critical card, then obviously some kind of mistake occurred.
- The best explanation is that the *Chop Move* was never intended in the first place.
- Thus, when this happens, the player should "undo" the *Chop Move*.

<br />

### Undoing an Accidental Chop Move (Mistake)

- Often times a player can misinterpret a clue as a *Chop Move* when it really had some other meaning. If this happens, after they discard their new *Chop*, everyone else on the team will know that an accidental *Chop Move* has occurred.
- Later on in the game, sometimes a player in this situation can retroactively realize that they have made a mistake by *Chop Moving* earlier on. They might be tempted to shift their chop back to where it is supposed to be.
- However, unless they discard a critical card (see the above section), players should generally **not ever undo a *Chop Move***, because they could be discarding a now-critical card that was not critical at the time of the original mistake. Everyone else on the team did not bother to clue the now-critical card, because they thought it was safely *Chop Moved*.
