---
id: level-10
title: Level 10 - Bluffs
---

import Bluff from '@site/image-generator/yml/level-10/bluff.yml';
import BluffThroughClued from '@site/image-generator/yml/level-10/bluff-through-already-clued-cards.yml';
import TruthPrinciple from '@site/image-generator/yml/level-10/truth-principle.yml';
import ColorMatch from '@site/image-generator/yml/level-10/color-match.yml';
import ColorMismatch from '@site/image-generator/yml/level-10/color-mismatch.yml';
import RankMatch from '@site/image-generator/yml/level-10/rank-match.yml';
import RankMismatch from '@site/image-generator/yml/level-10/rank-mismatch.yml';
import RankMismatchBluffImpossible from '@site/image-generator/yml/level-10/rank-mismatch-bluff-impossible.yml';
import RankMatchFinesseImpossible from '@site/image-generator/yml/level-10/rank-match-finesse-impossible.yml';
import ColorMatchRainbow from '@site/image-generator/yml/level-10/color-match-rainbow.yml';
import ColorMatchRainbowFinesseImpossible from '@site/image-generator/yml/level-10/color-match-rainbow-finesse-impossible.yml';

- Level 10 strategies should only be learned if you have 160+ games of experience with the group.

<br />

## Special Moves

<br />

### The Bluff

- *Finesses* are quite efficient. So, when you see a playable card in someone's *Finesse Position* slot, you will often want to "get" the card with a *Finesse* (instead of cluing it directly). However, often times, the proper "connecting" card is not on the table.
- In this situation, players can perform an alternate strategy by fibbing to the next player. By cluing an unrelated, *one-away-from-playable* card, the next player will think that it is a *Finesse* and that they have the matching card. Then, they will blind-play their *Finesse Position* card. This is called a *Bluff*.
- After the card is blind-played, the player who received the clue will realize that something strange has happened - the type of clue **did not match** the card that was blind-played. Thus, the clued card is not currently playable and must be a *one-away-from-playable* card.
- For example, in a 3-player game:
  - All the 2's are played on the stacks.
  - Alice clues Cathy red, which touches a red 4 as a *Play Clue*.
  - Next, it is Bob's turn. Bob sees that, with this red clue, Cathy has just been signaled that she has the red 3.
  - From Bob's perspective, this looks like a *Finesse* - if Bob does not blind-play the red 3 right now, Cathy will go on to misplay the red 4 as the red 3.
  - Bob blind-plays his slot 1 card, expecting it to be a red 3. Instead, it is a blue 3, and it successfully plays on the stacks. Bob now knows that he was *Bluffed* by Alice.
  - Next, Cathy sees that Bob just blind-played a blue 3 immediately after this red clue, so she knows that she must have a *one-away-from-playable* red card - the red 4. Cathy holds on to the red 4 for later and discards.

<Bluff />

- Except in rare circumstances, ***Bluffing* is only permissible when you are the person directly before the player who is blind-playing a card**. This is called being in *Bluff Seat*. Do not *Bluff* unless you are in *Bluff Seat*! (This follows from *[Lie Principle](first-principles.md#8-lie-principle)*.)

<br />

### Bluffs Through Already-Clued Cards

- It is also permissible to *Bluff* "through" cards that are already clued. This can be better than a normal *Bluff*, because in addition to getting the blind-play, it also can give information to the player with the in-between card.
- For example, in a 4-player game:
  - All the 1's are played on the stacks.
  - Bob has nothing clued in his hand.
  - Cathy has a red 3 clued in her hand with just a number 3. She does not know what color it is.
  - Alice clues Donald red, which touches one red 4 as a *Play Clue*.
  - Bob knows that he must have the red 2. If he blind-plays the red 2 (as a *Finesse*), then Cathy will play the red 3 (as a *Prompt*), and Donald will play the red 4.
  - Bob plays his *Finesse Position* card as red 2. Instead, it is a blue 2 and it successfully plays.
  - From Cathy's perspective, she knows that the red 4 is *two-away-from-playable* instead of *one-away-from-playable*. *Bluffs* on *two-away-from-playable* cards are normally illegal. Thus, Cathy's mystery 3 must be exactly red 3, making the red 4 *one-away-from-playable* after all.
  - Cathy discards.
  - From Donald's perspective, since red (the type of clue that was given) does not match blue (the card that was blind-played), this must be a *Bluff*. Normally, since the red 1 is currently played on the stacks, Donald would think that he has the red 3 (e.g. the *one-away-from-playable* red card).
  - However, Cathy already has a clued red 3 in her hand. If Donald also had a red 3, then Alice's clue would be violating *Good Touch Principle*. Thus, Donald must have the red 4 instead.

  <BluffThroughClued />

- Sometimes, the player who has the in-between card might have more than one "matching" clued card. In this situation, the player is promised that they have the in-between card, but they are not promised the position - it can be any of the matching clued cards.

<br />

## General Principles

<br />

### Bob's Truth Principle (Part 1)

- Sometimes, a player will give a clue that looks like it could be either a *Finesse* or a *Bluff*. Between these two moves, which should have precedence?
- For example, in a 4-player game:
  - All of the 1's are played on the stacks.
  - Cathy has a blue 2 on her *Finesse Position*.
  - Alice clues blues to Donald, highlighting a blue 3 as a *Play Clue*.
  - Now, it is Bob's turn.

 <TruthPrinciple />

- What to think **depends** on whether you are Bob or whether you are someone else on the team.
- First, let's consider the case of Bob, the very next player. Bob should **always assume a *Finesse* over a *Bluff***. From his perspective:
  - Bob knows that if this is a *Finesse*, then Cathy will blind-play the blue 2, and then Donald will know that he has the blue 3. If this is the case, Bob should not do anything special.
  - Bob also knows that if this is a *Bluff*, then Bob should blind-play his *Finesse Position* card immediately.
  - Bob knows that if there is any way that this could be a *Finesse* (the truth), he should **assume that the truth is being told**. Thus, Bob knows that it must be a *Finesse* on Cathy and should not blind-play anything.
- This is called *Bob's Truth Principle*, because Bob always assumes the truth over a *Lie*.

<br />

### Cathy's Match Principle (Part 2)

- First, see the section on *[Bob's Truth Principle](#bobs-truth-principle-part-1)*.
- Previously, we considered the case of Bob before he blind-played a card.
- Now, we can consider the case of Bob **after** he has blind-played a card, which also extends to Cathy and every other player on the team. How does everyone know whether Alice did a *Finesse* or a *Bluff* on Bob?
- The way to find out is to look at **whether the card that blind-played "matches" the clue that was given**. If the clue matches, then it is a *Finesse*. If the clue did not match, then it is a *Bluff*.
- This is called *Cathy's Match Principle* in order to highlight that everyone needs to assume different things than Bob did (before he blind-played anything).
- If it is ambiguous whether or not the card matches, then everyone should **assume a *Bluff* over a *Finesse***. Note that this is the **opposite** of the precedence in *Bob's Truth Principle*!
- Example 1 (color match):
  - Red 1 is played on the stacks.
  - Alice clues Cathy red, touching a red card as a *Play Clue*.
  - Bob blind-plays a red 2.
  - This must be a *Finesse*, because **red matches red**. So Cathy should think that she has the red 3.
  - This is a textbook *Finesse*; it can't get any more basic than this.

  <ColorMatch />

- Example 2 (color mismatch):
  - Red 1 is played on the stacks.
  - Alice clues Cathy red, touching a red card as a *Play Clue*.
  - Bob blind-plays a blue 1.
  - This must be a *Bluff*, because **blue does not match red**. So Cathy should think that she has the *one-away-from-playable* red card, the red 3.
  - This is a textbook *Bluff*; it can't get any more basic than this.

    <ColorMismatch />

- Example 3 (rank match):
  - Red 2 is played on the stacks.
  - Alice clues Cathy number 4, touching a 4 as a *Play Clue*.
  - Bob blind-plays the red 3.
  - This must be a *Finesse*, because **3 matches 4**. So Cathy should think that she has the red 4.

    <RankMatch />

- Example 4 (rank mismatch):
  - Red 2 is played on the stacks.
  - Alice clues Cathy number 4, touching a 4 as a *Play Clue*.
  - Bob blind-plays the blue 1.
  - This could be a *Triple Finesse* (on blue 1 + blue 2 + blue 3 into blue 4) or it could be a *Bluff* (on just blue 1 into red 4).
  - However, this must be a *Bluff*, because **1 does not match 4**. So Cathy should think that she has the *one-away-from-playable* 4, the red 4.
  - The point of this example is to show that because a 2 happens to be played on the stacks, the red 4 is a *one-away-from-playable* card and therefore becomes a legal *Bluff* target.

    <RankMismatch />

- Example 5 (rank mismatch where a *Bluff* is impossible):
  - This is a 4-player game.
  - Nothing is played on the stacks.
  - Alice clues Donald number 4, touching a 4 as a *Play Clue*.
  - Bob blind-plays the red 1.
  - Cathy discards.

    <RankMismatchBluffImpossible />

  - Donald needs to evaluate whether or not Alice's clue is a *Finesse* or a *Bluff*. However, he knows that it **cannot** be a *Bluff*, because there are no *one-away-from-playable* 4's. So even though **1 does not match 4**, this must be a *Finesse*, because Alice is not allowed to perform a *Bluff* with any card that she wants.
  - Donald does not see any other red cards in Bob's hand. So Donald should think that he has the red 4, because that would match the blind-play of a red 1. Subsequently, Donald must have red 2 on his *Finesse Position* and red 3 on his *Second Finesse Position*.
- Example 6 (rank match where a *Finesse* is impossible):
  - Red 2 and blue 2 is played on the stacks.
  - Alice clues Cathy number 4, touching a 4 as a *Play Clue*.
  - Bob blind-plays the blue 3.
  - Normally, Cathy would think that this is a *Finesse*, because **3 matches 4**, meaning that Cathy's 4 is the blue 4.
  - However, Cathy notices that her 4 has a negative blue clue on it. Thus, it cannot be the blue 4.
  - This must instead be a *Bluff*. Cathy marks her 4 as the red 4 (since red 4 is the only other *one-away-from-playable* 4).

      <RankMatchFinesseImpossible />

- Example 7 (color match with rainbow):
  - This is a game with a rainbow suit. (The other examples in this section assume a "No Variant" game.)
  - Rainbow 1 is played on the stacks.
  - Alice clues Cathy red, touching a red card as a *Play Clue*.
  - Bob blind-plays a rainbow 2.
  - This must be a *Finesse*, because **red matches red** (rainbow cards match every color). So Cathy should think that she has the rainbow 3.

      <ColorMatchRainbow />

- Example 8 (color match with rainbow where a *Finesse* is impossible):
  - This is a game with a rainbow suit. (The other examples in this section assume a "No Variant" game.)
  - Rainbow 1 and red 2 are played on the stacks.
  - Alice clues Cathy red, touching a red card as a *Play Clue*.
  - Bob blind-plays a rainbow 2.
  - Normally, Cathy would think that this is a *Finesse*, because **red matches red** (rainbow cards match every color), meaning that Cathy's red card is the rainbow 3.
  - However, Cathy notices that her red card has a negative blue clue on it. Thus, it cannot be the rainbow 3.
  - This must instead be a *Bluff*. Cathy marks her red card as the red 4 (since the red 4 is the *one-away-from-playable* red card).

      <ColorMatchRainbowFinesseImpossible />

<br />

### Guide Principle

- Part of Hanabi involves making sure that if you perform an action, someone else on the team won't discard anything important (e.g. *Save Principle*). Additionally, part of Hanabi involves accounting for all the possibilities (e.g. *Schrödinger's Cat Principle*).
- Combined, these two principles usually result in players taking the most conservative possible approach, even if a certain action would have a very low risk of losing the game.
- One exception to the above rules is when Bob is playing into either a *Finesse* or a *Bluff*. In this case, Bob knows that Alice is "guiding" him and he does not have to worry about Cathy's chop card. If Alice needs Bob to save Cathy's chop card, then Alice would wait until later to perform the *Finesse* or *Bluff*.
- For example, in a 3-player game:
  - No cards are played on the stacks.
  - Alice clues red to Donald, touching a red 2 as a *Play Clue*.
  - Bob does not see any red 1's in anyone else's hand. Thus, Bob knows that Alice intends for him to blind-play a card.
  - From Bob's perspective, it can be either a *Finesse* (on exactly red 1) or a *Bluff* (on the 1 of any of the other suits).
  - Cathy has a critical 5 on chop.
  - Should Bob risk blind-playing or should he save the 5?
  - Normally, Bob would play it safe and save the 5. However, in this case, he knows that *Guide Principle* applies, and Alice is guiding him to play right now.
  - Bob blind-plays his *Finesse Position*. It is the red 1 and it successfully plays.
  - Cathy does not discard since Alice saw that Cathy had something to clue.

<br />

### Clue Interpretation & Occam's Razor

- First, see the section on [Schrödinger's Cat Principle](level-5.md#schrödingers-cat-principle).
- When a clue could have multiple interpretations, usually *Schrödinger's Cat Principle* is involved - players must wait a round and see what their teammates do in order to find out the true meaning of the clue. But what if a clue could have multiple interpretations and a player does **not** have to wait for information from anyone else?
- For example:
  - Alice gives a weird clue to Cathy.
  - Bob does not see any "matching" cards in anybody else's hands, so he can rule out a *Prompt* and he can rule out a *Reverse Finesse*.
- In this situation, we would say that Bob is the *reacting player*. If a *reacting player* does not "react" to a clue in some demonstrable way, then someone else on the team will go on to misplay a card. So, the *reacting player* has to immediately decide what the clue means and perform the resulting action.
  - In some situations, there can be two *reacting players* in a row. For example, if Alice clues a *two-away-from-playable* card, then Bob must react **and** Cathy must react.
- So how does a *reacting player* figure out what the clue means? They should use *Occam's Razor* - always assume the simplest possible interpretation.

<!-- lint disable list-item-content-indent -->

1. Assume a direct *Play Clue* or a *Delayed Play Clue* (if it could be possible that no *Prompts* & no blind-plays are involved).
1. Assume a *Prompt* (if it could be possible that no blind-plays are involved).
1. Assume a *Finesse* (or a *Prompt* + *Finesse*) over a *Bluff*.
1. Assume the "move" that results in the least number of blind-plays.
    - In general, this means assuming a one-blind-play *Bluff* over a two-blind-play *Finesse*. But keep in mind that only certain cards are legal *Bluff* targets - you can't just do a *Bluff* with any card.
1. Assume the "move" that results in the least number of *Prompts*.
    - This means that if something could be either a one-blind-play *Finesse* **or** a one-blind-play *Finesse* with a *Prompt* involved, then the pure *Finesse* is simpler and you should assume that.

<!-- lint enable list-item-content-indent -->

<br />

## Common Mistakes

<br />

### Bluff Seat and the Pang of Guilt

- As mentioned in the section on *Bluffs*, you are in *Bluff Seat* for a certain player if you are immediately before them.
- Before cluing a card directly, you should first consider if the card is on *Finesse Position*. If it is, and you clue it directly, you may be "stealing" someone's *Finesse* or *Bluff*.
- Thus, in this situation, it may be better to discard and let the player in *Bluff Seat* get the card. If you do decide to clue the card directly, you should always feel a *Pang of Guilt*.

<br />

### Mistaking a Layered Finesse for a Bluff

- First, see the section on the *[Layered Finesse](level-5.md#the-layered-finesse)*.
- Sometimes, players only play one card into a *Layered Finesse*, and then stop (when they should instead be digging for the promised card).
- To tell the difference between a *Layered Finesse* and a *Bluff*, simply look at the *Bluff Seat*:
  - If the clue-giver was in *Bluff Seat*, then it is a *Bluff*.
  - If the clue-giver was not in *Bluff Seat*, then it is a *Layered Finesse*.

<br />

### Bluff Prompts / Prompt Bluffs (Illegal)

- It is illegal to trick players into thinking that they are *Prompted*. *Prompts* **must** be the truth.
- For example, in a 4-player game:
  - Red 1 and blue 1 are played on the stacks.
  - Bob has a card in his hand with a number 2 clue on it. He does not know its true identity.
  - Alice clues red to Donald, touching a red 3 as a *Play Clue*.
  - Since red 1 is on the stacks, Bob knows that Alice is indicating to the team that someone has the red 2.
  - Bob looks around and sees that no-one else has the red 2.
  - Thus, Bob knows that this must be a *Prompt*, so his unknown 2 must be a red 2. Bob plays the unknown 2. It is instead a blue 2, and it successfully plays on the stacks.
  - Cathy is slightly surprised that Bob played the blue 2. However, this is not completely out of the ordinary, as Bob might have been able to figure it out somehow.
  - Cathy performs the same analysis that Bob does. Namely, Cathy knows that Alice is indicating that someone on the team has the red 2, and Cathy does not see the red 2 in anyone else's hand.
  - Thus, Cathy knows that Alice's clue to Donald must be a *Finesse*, so Cathy must have the red 2 on her *Finesse Position*. Cathy plays her *Finesse Position* card. It is instead the blue 5 and misplays.
  - This was Alice's fault, because *Bluffs* are only allowed if they can be revealed immediately from a blind-play.

<br />

### Stacked Bluffs (Illegal)

- First, see the section on the *[Stacked Finesse](level-5.md#the-stacked-finesse)*.
- *Stacked Finesses* are encouraged, since they have few downsides.
- However, players should **never** stack a *Bluff* on top of a player who is *Finessed*. This is because the blind-playing player will assume that a *Layered Finesse* is occurring and go on to play the card from the first *Finesse*. This means that the *Bluff* will not be resolved immediately, violating *Lie Principle*. (*Lie Principle* is one of the most important principles!) Typically, when this mistake happens, the team will go on to lose the game, because severe *Information Desynchronization* will occur.
- Sometimes, in rare circumstances, expert players can perform *Out-of-Position Bluffs*. (This is normally illegal, so for it to work it has to be a very specific situation.) When this occurs, it is illegal to stack a second *Bluff* on top of them. You cannot stack a *Bluff* on a *Bluff* for the same reason that you cannot stack a *Bluff* on a *Finesse* - the *Fib* will not resolve immediately and will violate *Lie Principle*.
  - Similarly, it is illegal to stack an *Ejection* or a *Discharge* on a *Bluff*. (*Ejections* and *Discharges* are advanced moves that are covered later.)
