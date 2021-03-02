---
id: level-6
title: Level 6 - Intermediate Chop Moves
---

import OrderChopMove from '@site/static/img/generated/level-6/order-chop-move.svg';
import TempoClueChopMovePart1 from '@site/static/img/generated/level-6/tempo-clue-chop-move-part-1.svg';
import TempoClueChopMovePart2 from '@site/static/img/generated/level-6/tempo-clue-chop-move-part-2.svg';

- Level 6 strategies should only be learned if you have 80+ games of experience with the group.

<br />

## Special Moves

<br />

### The Order Chop Move (OCM)

- First, see the section on [Playing Multiple 1's](level-3.md#playing-multiple-1s).
- We agree that unknown 1's are supposed to be played in a particular order. If a player has unknown 1's and does **not** play them in the correct order, it means that they are trying to send an additional message.
- If a player skips over **one** of the 1's, and there is nothing else special going on, it means that the next player should *Chop Move* one card.
- If a player skips over **two** of the 1s, the message skips over the next player, and the player after that should *Chop Move* one card.
- A skip of **three** 1's means that the player three seats away should *Chop Move*, and so on.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues Bob number 1, which touches three 1's. They are in slot 1, slot 2, and slot 3.
  - Bob is expected to play slot 3 (which is the oldest 1). If he plays slot 3, nothing special happens.
  - If Bob plays slot 2, then he is skipping over one card. Cathy should *Chop Move* one card (her slot 5).
  - If Bob plays slot 1, he is skipping over two cards. Alice should *Chop Move* one card (her slot 5).

<OrderChopMove className="example" />

- If a player decides to do an *Order Chop Move*, on their next turn, they should revert to the original order again.
- For example, continuing from the previous example:
  - Bob decides to play slot 2, performing an *Order Chop Move* on Cathy.
  - Cathy marks her slot 5 card as being *Chop Moved*. Then, Cathy gives an unrelated clue.
  - Alice gives an unrelated clue.
  - Now, Bob has two 1's left in slot 2 and slot 3.
  - Bob is expected to play slot 3 (which is the oldest 1). If he plays slot 3, nothing special happens.
  - If Bob plays slot 2, he is performing another *Order Chop Move*, and Cathy should *Chop Move* one card. (It would be her slot 4, since her slot 5 is already *Chop Moved*.)
- There are some other common situations that do **not** imply an *Order Chop Move*. Use your common sense! Here is a short list:
  - The 1 that was played has a **different amount of positive clues** than the other 1's. (Different negative clues are ignored.)
  - The 1 that was played was originally *Finessed* from a clue that happened **before** the number 1 clue.
  - The 1 that was skipped over is known to be bad from contextual information.

<br />

### The Trash Order Chop Move (TOCM)

- First, see the section on the *[Order Chop Move](#the-order-chop-move-ocm)*.
- Sometimes, a player will have two known trash cards in their hand (and these cards are explicitly known trash, meaning that everyone on the team can equally see that they are known trash).
- In this situation, the player is expected to discard the newest (left-most) trash card.
- Thus, if a player skips over their newest trash card and instead discards the second newest trash card, they must be trying to communicate something extra.
- This means that the next player should *Chop Move* (in a manner similar to a *Order Chop Move*).
- Note that a player is not necessarily trying to perform a *Trash Order Chop Move* if the two trash cards have different kinds of clues on them. For example, by discarding specific trash cards, it can communicate that the player "sees" all of the non-trash possibilities of that card.

<br />

### The Scream Discard Chop Move (SDCM)

- The *Chop Move* is a tool to save multiple cards with one clue. However, sometimes you may not have a clue at all. One way to solve this situation is with a special kind of discard.
- Typically, discarding is a last resort. So, if you have a known playable card in your hand, you can send a powerful message to your teammate by discarding a card instead. This is called a *Scream Discard*. Since your teammate expected you to play, it is like screaming at them to let them know that things are very bad.
- A *Scream Discard* does two things:
  1. The player being "screamed at" should permanently move their chop by one position.
  1. The player being "screamed at" is not allowed to discard on this turn. Instead, they must give a clue. If there are no normal *Play Clues* or *Save Clues* to give, then they are allowed to give "stall" clues, like a *5 Stall*. If there are no *5 Stalls* to give, they can even just "fill-in" some information on an already-clued card (and doing this should not cause a *Finesse*).
- Players are **only allowed** to *Scream Discard* for **cards that are playable or critical** (or a needed 2 that isn't seen anywhere else). (This follows from *Save Principle*.)
- Players are **only allowed** to *Scream Discard* as an absolute last resort. This means *Scream Discards* are almost always performed **while the team is at 0 clues**. (Less commonly, they can also be performed if the team is at 1 clue and the next person happens to be *Locked*.)
- Players are **not** allowed to *Scream Discard* for cards that are *one-away-from-playable*.
- Players are **not** allowed to *Scream Discard* if there was some other, less dangerous way to save the card. It is a "last resort" move.
- Sometimes, a player will discard with a known-playable card in their hand, but they are **not** intending a *Scream Discard* - it is some other special situation:
  1. It is not a *Scream Discard* if the next player **has** to generate a clue for cluing the next player after that. This is called a *Generation Discard*; see below.
  1. It is not a *Scream Discard* when the card that the player did not play was a "blind" card from a *Finesse* **and** the blind card could also be in the next player's *Finesse Position*.

<br />

### The Generation Discard

- Usually, if someone discards a card instead of playing a known playable card, this would indicate a *Scream Discard Chop Move*.
- However, if playing the card (player 1) would cause the next player to discard (player 2) and the next player after that (player 3) to have a critical and/or playable card "ride" on chop, it is a very bad situation. Thus, the discard is **just** for the purposes of generating a clue so that player 2 can clue player 3.
- The *Generation Discard* is **only** to be used as a last resort. If player 3 has something else to do (like play a card or give some obvious clue), then player 1 should just play their card and let the card "ride" on chop.

<br />

### A Scream Discard Flowchart

[Here is a flowchart](https://raw.githubusercontent.com/hanabi/hanabi.github.io/main/static/img/flowcharts/scream-discard-flowchart.png) for determining whether something is a *Scream Discard Chop Move* or a *Generation Discard*. (Ignore the *Echo Scream Discard Chop Move* for now.)

<br />

### The Tempo Clue

- *Tempo Clues* are defined as clues that "get" no new cards. Their purpose is to get 1 or more cards played that **already** had a clue on them.
  - If a clue is given to a card that is **already** known to be playable, then that would **not** count as a *Tempo Clue*. It would instead be a *Burn Clue* (a clue that accomplishes nothing).
- In our group, we do not generally perform *Tempo Clues*, because they do not meet *[Minimum Clue Value Principle](first-principles.md#2-minimum-clue-value-principle)*. However, in the following special circumstances, *Tempo Clues* have enough value to justify giving them:
  1. When it gets two or more clued cards to play
  1. When the clued card is not a 5 and it is "out of order" (meaning that it is impossible for a *Prompt* to get the card played)
  1. When the clued card was *Chop Moved* and it is now playable
  1. When playing the clued card would "unlock" someone's hand (see the section on *Locked Hands* later on)
  1. When the clue giver is in a situation that requires them to stall (e.g. the player is *Locked*, etc.)
- When a *Tempo Clue* touches multiple cards, the focus is on the left-most card.
  - The exception is if one of the cards was previously *Chop Moved*. In that case, the focus is on the left-most *Chop Moved* card.
- If a *Tempo Clue* touches multiple cards, it typically means that all the touched cards are playable. See the *Double Tempo Clue* section below.
- Since they are so inefficient, *Tempo Clues* done outside of the special circumstances listed above are assigned a special meaning. See the *Tempo Clue Chop Moves* section below.

<br />

### The Double Tempo Clue

- Typically, when a *Tempo Clue* is given that touches two or more cards, it means that **all** of the cards touched are playable in order from left to right.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues red to Bob, which touches slot 1, slot 2, and slot 3.
  - Bob plays red 1 from slot 1. The other two red cards in his hand could be nearly anything.
  - Cathy clues red to Bob, which does not introduce any new cards, but it does re-touch slot 2 and slot 3.
  - Bob knows that this is a *Double Tempo* clue. Both must be playable in order, so he must have red 2 in slot 2, and red 3 in slot 3.
- Note that the normal "play all the cards" interpretation does not apply in some special situations:
  - when the clue unlocks a player's hand
  - when the clue got 2+ cards played in total (using cards in someone else's hand)
  - when the clue touched a *Chop Moved* card; in this situation, **only** the *Chop Moved* card is playable

<br />

### The Tempo Clue Chop Move

- In general, *Tempo Clues* do not follow from *Minimum Clue Value Principle*, which states that a clue must get at least 1 new card played or save at least 1 new card from being discarded.
- Thus, a *Tempo Clue* with no other purpose **must** save at least 1 new card, and the player should *Chop Move* their chop card.
- Remember that *Tempo Clue Chop Moves* **do not** apply in the special situations listed above where natural *Tempo Clues* are allowed.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues red to Bob, which touches two cards on slot 1 and slot 2.
  - Bob plays red 1 from slot 1. The red card in slot 2 could be red 2, red 3, red 4, or red 5.
  - Cathy clues number 2 to Bob, which does not introduce any new cards, but it does "fill in" his slot 2 card.
  - Bob now knows that he has exactly red 2 on slot 2 and that this was a *Tempo Clue*. Since it does not get any new cards and only get tempo on one card in total, he knows that he should also *Chop Move* his slot 5 card.

<TempoClueChopMovePart1 className="example" />
<TempoClueChopMovePart2 className="example" />

- Normally, when two cards are retouched with a clue, it is a *Double Tempo Clue* and the player should play both cards. However, this interpretation does not apply if the second card is strictly not playable. In this situation, all players can see that since only one card is getting tempo, the interpretation of the clue should be a *Tempo Clue Chop Move*.
- For example, in a 3-player game:
  - Red 1 is played on the stacks.
  - Green 4 is in the trash.
  - Bob has:
    - a green 4 on slot 3 with no clues on it yet (on chop and critical)
    - a red 2 on slot 4 with a 2 clue on it
    - a red 5 on slot 5 with a 5 clue on it
  - Alice clues red to Bob, which re-touches his slot 4 card and his slot 5 card, "filling" both of them in.
  - Bob knows that this is a *Tempo Clue*, and plays red 2.
  - In most cases, since two cards were re-touched, they should both be playable. However, Bob knows that the red 5 is strictly not playable right now. Thus, since the clue did not get any new cards and only got tempo on one card in total, he knows that he should also *Chop Move* his slot 3 card.

<br />

## General Principles

<br />

### Lines

- During your turn, part of figuring out the best move involves looking into the future to see what the next player will do. If they discard, will it be okay? Is there some obvious clue that they will do? And so on.
- As you get better at Hanabi, you will need to do this prediction not just for the next player, but for an entire go-around of the table. And as you really get good at Hanabi, you will need to do this for as far in the future as you can reasonable predict. (Sometimes, this means 15 moves or more in the future.)
- Similar to chess, initiating a move in which you can predict the next sequence of moves is called initiating a "line".
- In post-game reviews, we will often compare and hypothetically "play through" two different lines to see which one is better.

<br />

### The All 4's Test

- According to *Save Principle*, the team must not let any critical and/or playable cards be discarded. So part of constructing a line is figuring out whether this might happen.
- When considering a line, it is not safe to assume that a player will clue anything in your hand. You should perform the *All 4's Test*: what would everyone do if I have all useless 4's in my hand? If a critical and/or playable card would get discarded, then the line has failed the test, and it is probably a bad idea.

<br />

### Discard Modulation

- Often times, either you or the player who comes after you can perform a clue. And the clue would have the same result if done by either player. So who should do it?
- One way to decide is to look at the next player's chop. Is their chop high-value, low-value, or useless? If it is high-value, then you should discard and let them give the clue. If it is low-value or useless, then you should give the clue and let them discard.
- "Stealing" clues in this way is called *Discard Modulation*. If other players are discarding to let you give all of the clues, you probably have a high-value chop.
- For example, in a 3-player game:
  - All the 1's are played on the stacks except for the red 1.
  - It is the *Early Game*.
  - Alice plays the red 1 from her hand. (It was clued earlier with a *Play Clue*.)
  - Bob sees that from Alice's perspective, there is nothing in Cathy's hand to clue.
  - Cathy has a red 3 on chop. This is a *one-away-from-playable* card that is valuable to the team. However, it would be illegal to clue the card directly with a *Play Clue* or a *Save Clue*.
  - Alice has a red 5 on chop. According to the *Early Game* rules, someone must clue the 5 before ending the *Early Game*. However, Bob knows that as an exception, it is not required to clue the person who came immediately before you. When Alice played the red 1 and did not see anything for Bob to do, Alice was giving permission to Bob to discard.
  - Bob decides to discard instead of saving the 5 in Alice's hand.
  - Cathy clues number 5 to Alice as a *5 Save*.
  - Bob has smartly prevented the discard of the red 3, at least for a little while. This kind of strategy is called *Discard Modulation*.
- For example, in a 3-player game (a similar situation):
  - All the 1's are played on the stacks except for the red 1.
  - It is the *Early Game*.
  - Alice plays the red 1 from her hand. (It was clued earlier with a *Play Clue*.)
  - Bob sees that from Alice's perspective, there is nothing in Cathy's hand to clue.
  - Cathy has a red 1 on chop. This is a trash card.
  - Alice has a red 5 on chop. According to the *Early Game* rules, someone must clue the 5 before ending the *Early Game*. However, Bob knows that as an exception, it is not required to clue the person who came immediately before you. When Alice played the red 1 and did not see anything for Bob to do, Alice was giving permission to Bob to discard.
  - Bob decides to ignore the exception and save the 5 in Alice's hand anyway.
  - Cathy discards the red 1.
  - Bob has smartly orchestrated a line in which a useless card was discarded. This kind of strategy is called *Discard Modulation*.

<br />

### The Value of One-Away-From-Playable Cards

- In general, 3's are pretty high value, and 4's are pretty low value.
- But combined with this, cards that are *one-away-from-playable* are pretty high value, and cards that are two-away (or more) are pretty low value.
- Thus, in some situations, a *one-away-from-playable* 4 may be more valuable than a *two-away-from-playable* 3.
- According to our conventions, it is illegal to clue a *one-away-from-playable* card as the focus of the clue without it being some kind of special move like a *Finesse*. However, sometimes we still want to "save" these cards. Thus, they are prime targets for indirect saves like the *Trash Chop Move* or the *5's Chop Move*.
- However, in most cases, *Chop Moving* the valuable card just won't be possible. So in general, you should try to construct lines that protect high-value cards from being discarded for as long as possible.

<br />

### Blind-Playing Chop Moved Cards

- Often times, cards are *Chop Moved* towards the beginning of the game. Normally, once the time comes, the *Chop Moved* card will be clued directly in order to get it to play.
- However, other times, the *Chop Moved* card will sit there and will never be clued. As the game progresses towards the end, the player with the *Chop Moved* card will learn more and more information about it. For example, they might accumulate a lot of negative clues on the card. Or, they might deduce that it is probably not any of the cards that are already played (which drastically reduces the possibilities towards the end of the game).
- A clever player who accumulates enough information about a *Chop Moved* card may determine that all of the possibilities for the card are playable. In this situation, they do not have to wait for their teammates to clue the card directly - they can simply blind-play the *Chop Moved* card and it will work, regardless of which exact card it is.
- Blind-playing cards in this manner is risky! It is fairly common for players to forgo cluing *Chop Moved* cards directly in favor of using the other copy of the card in someone else's hand. (For example, it may be more efficient to use the non-*Chop Moved* copy if it would be a 2-for-1 clue instead of a 1-for-1 clue.) Thus, there is always the chance that blind-playing a *Chop Moved* card in this manner will get a strike for the team (in the case where the other copy was used or in the case where the *Chop Move* was a mistake).
- For this reason, clever players should try to blind-play their *Chop Moved* cards if they have a pretty good chance of being playable, but **only if the team has one or more strikes to spare**.
- Subsequently, players should **not** clue a now-useless *Chop Moved* card to prevent a future strike. The typical strategy is to just let it be *Chop Moved* for the rest of the game:
  - In the best case scenario, the *Chop Moved* player will naturally figure out that the card is trash and can safely discard it. Or, alternatively, they will keep the card *Chop Moved*, but continue to discard other useless cards from their chop until the end of the game.
  - In the worst case scenario, the *Chop Moved* player will try to blind-play the card and get a strike for the team. But this is not guaranteed, and even if they do, they will only do it if there is a strike to spare.
