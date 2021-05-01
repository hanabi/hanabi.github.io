---
id: level-5
title: Level 5 - Intermediate Finesses
---

import PromptMultiColor from '@site/image-generator/yml/level-5/prompt-multicolor.yml';
import PromptMultiColorNoNegative from '@site/image-generator/yml/level-5/prompt-multicolor-no-negative.yml';
import HiddenFinesse from '@site/image-generator/yml/level-5/hidden-finesse.yml';
import LayeredFinesse from '@site/image-generator/yml/level-5/layered-finesse.yml';
import LayeredFinesse2 from '@site/image-generator/yml/level-5/layered-finesse-2.yml';
import ClandestineFinesse from '@site/image-generator/yml/level-5/clandestine-finesse.yml';
import AmbiguousFinesse from '@site/image-generator/yml/level-5/ambiguous-finesse.yml';
import UrgencyPrinciple from '@site/image-generator/yml/level-5/urgency-principle.yml';

- Level 5 strategies should only be learned if you have 60+ games of experience with the group.

<br />

## Special Moves

<br />

### Prompts in Multi-Color Variants

- In multi-color variants, *Prompts* apply to the card with the most positive information.
- For example, in a 3-player rainbow game:
  - Red 2 is played on the stacks.
  - Alice clues red to Cathy, touching a red 4 as a *Play Clue*. This is a *Prompt* on Bob for a red 3.
  - In slot 1, Bob has a card with only a red clue on it. (Thus, it can be any red card or any rainbow card.)
  - In slot 2, Bob has a card with a red clue and a 3 clue on it. (Thus, it can be red 3 or rainbow 3.)
  - Since slot 2 has more positive information, Bob should choose to play slot 2 as red 3 (instead of slot 1, the left-most card).

<PromptMultiColor />

- Players are **not** supposed to use information from negative clues.
- For example, in a 3-player rainbow game:
  - Red 2 is played on the stacks.
  - Alice clues red to Cathy, touching a red 4 as a *Play Clue*. This is a *Prompt* on Bob for a red 3.
  - In slot 1, Bob has a card with a positive red clue on it. (Thus, it can be any red card or any rainbow card.)
  - In slot 2, Bob has a card with a positive red clue on it and a negative green clue on it. (Thus, it can be any red card.)
  - Even though slot 2 is technically more likely to be the red 3, Bob knows that players are not supposed to use negative information for determining which card to play into a *Prompt*. Thus, Bob plays the red 3 from slot 1.

<PromptMultiColorNoNegative />

- For advanced players, also see the section on *[Double Prompts in Multi-Color Variants](extras/miscellaneous.md#double-prompts-in-multi-color-variants)*.

<br />

### The Hidden Finesse

- Sometimes, you want to *Finesse* someone with a clued card already in their hand. However, if you try to *Finesse* them, they will assume it is a *Prompt* and will play their clued card. Which means that a lot of the time, you can't give a *Finesse*, and must instead clue the card directly.
- However, what if the clued card actually is playable? In that case, you can still do the *Finesse* - they will play the *Prompted* card, see that it wasn't the card you had intended, and then blind-play their 2nd newest card on the next turn. This is called a *Hidden Finesse* because the *Finesse* was temporarily hidden by the presence of clued card.
- For example, in a 3-player game:
  - Red 1 and rainbow 2 are played on the stacks.
  - Alice clues red to Cathy, which touches her red 3.
  - Bob has a rainbow 3 clued as red in his hand and he has no idea what it is.
  - Bob sees that Alice's clue must be a *Prompt*, so he plays his red card as red 2. He is surprised to see that it is actually rainbow 3.
  - Bob knows that he really must have the red 2, and it must have been on *Finesse Position* when Alice originally gave the clue. Since he just drew a card after he played the rainbow 3, he now knows that the red 2 is on his slot 2 (the second-newest card).
  - On Bob's next turn, he blind-plays his the red 2 from slot 2.
  - In this example, the red 2 was "hidden" by the rainbow 3.

<HiddenFinesse />

<br />

### The Layered Finesse

- Normally, a *Finesse* promises the exact copy of the card on *Finesse Position*. However, as long as all of the cards leading to the card are playable, you can still promise the exact copy of the card. We do **not** consider this to be a *Lie*, since the blind-playing player does indeed have the true copy of the card.
- We call this a *Layered Finesse* because the intended *Finesse* blind-play target is "layered" behind other playable cards.
- For example, in a 3-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues red to Bob, touching a red 2 as a *Play Clue*.
  - Normally, Bob would think that he has the red 1. However, he also sees that this could be a *Reverse Layered Finesse* on Cathy. Thus, Bob cannot play anything right now - he must wait and see what Cathy does.
  - Bob does something unrelated.
  - Cathy knows that this is a *Reverse Finesse* and that she has the red 1. Cathy blind-plays her *Finesse Position* card. However, it is actually a blue 1, and it successfully plays. Cathy gasps in surprise.
  - Alice does something unrelated.
  - Bob knows that Cathy must have been trying to blind-play a red 1. Thus, he must have the red 2, and Alice did indeed perform a *Layered Finesse*.
  - Bob does something unrelated.
  - Cathy was surprised that she blind-played the blue 1 instead of the red 1. This must be a *Layered Finesse* and Cathy must really have the red 1. Cathy plays her *Second Finesse Position* and it is the red 1.

<LayeredFinesse />

<br />

### The Clandestine Finesse

- To the player who receives a clue that initiates a *Layered Finesse*, it is usually obvious what is going on. For example, in a 4-player game:
  - Alice clues Donald blue, touching one blue card.
  - Bob discards.
  - Cathy blind-plays a green 1.
  - Donald clearly knows that this is a *Layered Finesse* on Cathy - Cathy will continue to play cards until she finds the blue card that connects to the one in his hand.

<LayeredFinesse2 />

- In other words, most *Layered Finesses* cause unrelated cards to blind-play that do not connect to the type of clue given.
- With that said, it is also possible to perform a *Layered Finesse* for unrelated cards that **do** connect to the type of the clue given. When this happens, it is hidden from the receiver of the clue, so we call it a *Clandestine Finesse* to disambiguate it from a (more obvious) *Layered Finesse*.
- For example, in a 3-player game:
  - Alice clues number 3 to Cathy, which touches the red 3 on slot 2. Thus, the red 3 is the focus of the clue. This must be a *Play Clue* on the red 3.
  - Bob knows that the red 3 is currently unplayable, so it must be a *Finesse*. He blind-plays his *Finesse Position* as a red 2. Instead, it is a blue 2, and it successfully plays. Bob gasps in surprise.
  - Normally, Cathy would think that she has the blue 3, because that would connect to the blue 2 that blind-played. (Number 2 connects to number 3.)
  - However, Cathy also sees that Bob had a red 2 on his *Second Finesse Position* at the time of the clue. So there is a possibility that this was a *Clandestine Finesse* instead of a normal *Finesse*. Thus, Cathy has to give Bob a chance to blind-play the red 2. If he does not, then Cathy does indeed have the blue 3.
  - Cathy does something unrelated..
  - Alice does something unrelated.
  - Bob was surprised that he blind-played the blue 2 instead of the red 2. This must be a *Clandestine Finesse* and Bob must really have the red 2.
  - Bob blind-plays his slot 2 card. It is the red 2 and it successfully plays. (Bob knows that if he did not do this, then Cathy would go on to misplay the red 3 as a blue 3.)
  - Cathy plays the red 3.

<ClandestineFinesse />

<br />

### The Stacked Finesse

- If a player has been *Finessed*, then their *Finesse Position* moves right one slot, exactly like if the blind card was clued. (This is a similar concept to how the chop moves left one slot when a player is *Chop Moved*.)
- If **another** *Finesse* is performed on the player who has already been *Finessed*, it is stacking a 2nd *Finesse* on top of the first, and they are expected to blind-play the new *Finesse Position* card.
- However, because of the possibility of *Layered Finesses*, players should always finish blind-playing cards left-to-right into the older *Finesse* before starting to blind-play cards into the newer one.
- In rare cases, players can determine that a *Layered Finesse* was impossible (due to negative clues or some other piece of context). In this situation, if the play order of the cards does not matter, players should always "jump ahead" and play the second card to demonstrate to the team that they "got" both *Finesses*.

<br />

### The Ambiguous Finesse

- Sometimes, the player that is supposed to blind-play a card into a *Finesse* is ambiguous. For example, in a 4-player game:
  - Nothing is played on the stacks.
  - Alice clues Donald about a red 2 as a *Play Clue*.
  - Both Bob **and** Cathy have red 1 on their *Finesse Position*.
  - Bob will think that it is a *Finesse* directed at Cathy, and he will discard.
  - Next, Cathy thinks that Bob made a mistake and "missed" the *Finesse*. Cathy discards.

<AmbiguousFinesse />

- Here, Cathy is actually the one making the mistake. It follows from *High-Value Principle* that you should never assume that your teammates are making a mistake. If Bob is discarding, then it means that Cathy also has the exact same copy of the card, and Cathy should immediately blind-play.

<br />

## General Principles

<br />

### Urgency Principle (Playing Into Finesses as Soon as Possible)

- Normally, when a *Finesse* occurs, someone blind-plays right away. This is extremely important, because it resynchronizes the information among the team. So, as a group, we agree to **blind-play our cards as soon as reasonably possible**. This is called the *Urgency Principle*.
- Thus, if you see that a player does **not** blind-play into the *Finesse*, then you know that the *Finesse* must be **on you**.
- However, there are two important exceptions:
  1. Players are allowed to **defer** playing into a *Finesse* if they are doing a *Finesse* of their own (and no-one else on the team could have done it).
  1. Players are allowed to **defer** playing into a *Finesse* if they are doing something really important, like saving a 5 on chop, giving a *Play Clue* to a card that is about to be discarded, or something along those lines.
- So, if any of the above two conditions apply, then you have to **wait** and give the player yet another turn to demonstrate whether or not they will blind-play.
- For example, in a 5-player game:
  - All of the 1's are played on the stacks.
  - There is 1 clue in the bank.
  - Alice clues red to Emily, touching a red 3 as a *Play Clue*. This is a *Finesse* on the red 2.
  - Bob sees that the *Finesse* is on Cathy. (Cathy has the red 2 in her *Finesse Position*.) Since the team is at 0 clues, Bob discards.
  - Cathy's knows that Alice is performing a *Finesse* and that she must have the red 2. Cathy's first instinct is to blind-play the red 2. This is urgent because otherwise, Emily will think that her red card might be the red 2, and it would misplay.
  - However, Cathy also sees that Donald has a blue 5 on chop that needs to be saved. Furthermore, from Cathy's perspective, Donald could discard on his turn, so the blue 5 is in imminent danger. If Cathy blind-plays into the *Finesse*, then the blue 5 might get discarded.
  - Instead of blind-playing into the *Finesse*, Cathy clues number 5 to Donald as a *5 Save*.
  - Since the team is at 0 clues, Donald discards.
  - After Alice's clue, Emily marked her red card as "red 2 or red 3 if Cathy blind-plays red 2". However, even though Cathy did not blind-play the red 2, Emily could see that Cathy was doing an important, time-sensitive action to prevent the team from losing the game. Thus, Emily knows that she needs to give Cathy another chance to blind-play the red 2. If Cathy does not blind-play the red 2 on her next turn (and nothing else special is going on), then Emily can play her own red card as the red 2.

<UrgencyPrinciple />

<br />

### Schrödinger's Cat Principle

- Often times when you are given a clue, the card could be two or more things. For example:
  - In a no-variant game, a red *Play Clue* might indicate a red 2 or a red 3 depending on whether or not red 2 will blind-play from someone else's hand.
  - In a rainbow-game, a red clue might indicate either a *Play Clue* on a red 1 or a *Delayed Play Clue* on a rainbow 2 through another player's yet-to-be-played rainbow 1.
- After getting a clue, you should immediately mark all of the possibilities down on the card as a note.
- For all of your subsequent turns, you have to treat that card like it is **all of the possibilities** at the same time. This is a lot like the *Schrödinger's Cat* quantum physics analogy, which states a cat is both alive and dead at the same time, and you won't know until you actually open the box and look. Similarly, treat the unknown card as all the possibilities at the same time, and you won't actually know until the card is played.
- The implications of *Schrödinger's Cat Principle* is that players must be very careful. Before playing a card, they will often have to wait for everyone else to have a turn to allow for the possibility of a *Prompt*, *Reverse Finesse*, and so forth.
