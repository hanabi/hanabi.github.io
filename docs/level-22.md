---
id: level-22
title: Level 22 - Charms & Miscellaneous
---

import FourCharm from '@site/image-generator/yml/level-22/four-charm.yml';
import BlazeDiscard from '@site/image-generator/yml/level-22/blaze-discard.yml';
import BlazeDiscard2 from '@site/image-generator/yml/level-22/blaze-discard-2.yml';
import HesitationBlindPlay from '@site/image-generator/yml/level-22/hesitation-blind-play.yml';

- Level 22 strategies should only be learned if you have 400+ games of experience with the group.

<br />

## Conventions

<br />

### Charms

- *Charm* is similar to *Ejection* and *Discharge*, except the *Forth Finesse Position* card is blind-played.
- Just like a *Bluff*, a *Charm* can only be performed on the very next player.
- Several different kinds of moves can cause a *Charm*. The most common one is the *4 Charm*.

<br />

## Special Moves

<br />

### The 4 Charm

- When a *Play Clue* is given to a 4 that is not yet playable, Bob must react:
  - The first interpretation is that it is a *Prompt*.
  - If Bob has no matching cards in his hand, then a *Prompt* is impossible.
  - The second interpretation is that it is a *Finesse*.
  - If Bob sees that he would have to **blind-play one card** or **blind-play two cards** to fulfill a *Finesse*, then he should assume that it is a *Finesse*.
  - If Bob sees that he would have to **blind-play three cards** in their hand to fulfill the *Finesse*, then a *Finesse* is unlikely.
  - The third interpretation is that it is a *4 Double Bluff*.
  - If Bob sees that Cathy does not have a playable card (or a *one-away-from-playable* card) on her *Finesse Position*, then a *4 Double Bluff* is impossible.
  - The fourth interpretation is a *4 Charm*; Bob should play his *Fourth Finesse Position*.
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues number 4 clue to Cathy, touching a red 4 on slot 1 as a *Play Clue*.
  - Bob knows that normally, this would be a *Finesse* on the red 4, meaning that he should blind-play a red 1, a red 2, and a red 3. (Bob does not see any red cards in anyone else's hands.)
  - Since the *Finesse* requires three blind-plays, it is unlikely, and Bob knows he is supposed to revert to a different interpretation.
  - Bob sees that Cathy does not have a playable card (or a *one-away-from-playable* card) on her *Finesse Position*, so a *4 Double Bluff* is impossible.
  - Thus, Bob knows that this must be a *4 Charm*. He blind-plays his *Fourth Finesse Position*. It is a blue 1 and it successfully plays.

<FourCharm />

- *4 Charms* can be given with either a color clue or a number clue.
- Similar to a *5 Color Ejection*, *Prompts* don't factor into the "three or more blind-plays" rule. Players only count the number of blind-plays.
- *4 Charms* take precedence over *Safety Charms*. (*Safety Charms* are an advanced move that is covered later.)

<br />

### The Blaze Discard

- Normally, if a player performs a *Gentleman's Discard* and the other card is **not** on *Finesse Position*, it could one of two things:
  1. If the card on *Finesse Position* is itself playable right now, then it would be a *Layered Gentleman's Discard*.
  1. If the card on *Finesse Position* is not playable right now, then it is an emergency situation.
- Alternatively, if a player performs a *Baton Discard* and the other card is **not** on *Finesse Position*, then it is an emergency situation.
- If this is the case, and it is **not** an emergency situation, then the player who is performing the weird *Gentleman's Discard* (or *Baton Discard*) must be trying to communicate something extra.
- In this situation, the discarding player intends for the very next player to blind-play the *Finesse Position* that **matches the true *Finesse Position*** of the other card. This is called a *Blaze Discard* because it "ignites" the next player's hand to fix the problem.
- For example, in a 3-player game:
  - All 1's are played on the stacks.
  - Alice discards a known red 2 as a *Gentleman's Discard*.
  - Bob sees that Cathy's hand is completely unclued and is as follows, from left to right: `red 1 (trash), red 2, green 1 (trash), green 1 (trash), blue 1 (trash)`
  - Bob knows that normally, the *Gentleman's Discard* promises that the other copy of the red 2 is on *Finesse Position*. But Alice is *Lying* to Cathy, because she will go on to misplay the red 1 as the red 2.
  - Bob knows that it would be pointless for Alice to perform a *Gentleman's Discard* and then for Bob to give a *Fix Clue*, as that would waste a clue. So, if Alice is not making a mistake, she must be trying to communicate something extra.
  - Bob knows that this must be a *Blaze Discard* and he must blind-play the *Finesse Position* that matches the *Finesse Position* of the other card. In this case, since the red 2 is on Cathy's *Second Finesse Position* (slot 2), Bob must play his *Second Finesse Position* (slot 2).
  - Bob blind-plays slot 2. It is a blue 2 and it successfully plays.
  - From Cathy's perspective, she first suspects that some kind of *Ejection* is going on, since Bob blind-played his *Second Finesse Position*. However, since the previous action was a *Gentleman's Discard*, Alice knows that this must be a *Blaze Discard*. In other words, Bob was just blind-playing his *Second Finesse Position* to communicate to Cathy that she should play her *Second Finesse Position* instead of her *First Finesse Position*.
  - Cathy blind-plays the red 2 from slot 2.

<BlazeDiscard />

- Remember that *Blaze Discards* work with *Finesse Positions*, **not** with slot numbers.
- *Blaze Discards* must be on the very next player. In other words, Bob has to immediately react to prove where the position of the matching card is.
- *Blaze Discards* do not apply when someone discards a 1 and there are two copies remaining. (In other words, it is still possible to perform a normal *Gentleman's Discard* by discarding a red 1 in the case where Bob has a red 1 on his *Finesse Position* and Cathy has a red 1 on her *Second Finesse Position* behind an unplayable card.)
- It is illegal to perform a *Layered Blaze Discard* (on either the ignited player or the player holding the matching card). We want to keep *Blaze Discards* as simple as possible.
- *Blaze Discards* do not apply when someone performs a *Gentleman's Discard* or a *Baton Discard* that looks like a *Sarcastic Discard*. In these situations, one of the following is true:
  - The discarding player is making a mistake (as a *Wrong Prompt*).
  - The discarding player is not making a mistake and there is enough past context for the player with the cards to be able to tell the difference.
- For example, in a 3-player game:
  - Alice discards a red 3 as a *Blaze Discard*.
  - Bob sees that Cathy has the other copy of the red 3. However, it is on slot 2 instead of on slot 1. (Cathy's hand is completely unclued.) Thus, Bob has to communicate to Cathy that it is actually on her *Second Finesse Position*.
  - Bob has a clued 5 on his slot 1. Thus, Bob's *Finesse Position* is on slot 2 and his *Second Finesse Position* is on slot 3.
  - Bob blind-plays his *Second Finesse Position* (slot 3). It is a blue 1 and it successfully plays.
  - Cathy knows that because Bob blind-played his slot 3, the red 3 must be on her slot 2.

<BlazeDiscard2 />

<br />

### Finesses with a Lie Component

- *Lie Principle* states all that *Fibs* must resolve immediately. An untruth that does not resolve immediately is a *Lie*.
- Normally, *Lies* are expressly illegal. However, some players will occasionally break the rules for the purposes of getting a *Finesse*. We call such moves *Finesses with a Lie Component*.
- Typically, when players *Lie* out of *Bluff Seat*, the game quickly falls apart; subsequent clues will have different meanings to different players and everyone will become "desynchronized". This typically leads to a loss.
- With that said, it is sometimes possible to construct **safe** lines that contain a *Lie Component*. There is usually deep levels of nuance involved in these lines, so this kind of thing is only recommended for advanced and expert players.
- The previously mentioned *Out-of-Order Finesse* is a specific example of a *Finesse* with a *Lie Component*. One key attribute of the *Out-of-Order Finesse* is that the player who receives the *Fix Clue* knows that **all** of the related cards are playable, or it would not have been worth the risk (and the confusion) to perform a line with a *Lie Component* in the first place.
- This concept can be generalized to all *Finesses* that have a *Lie Component*. After a player receives a *Fix Clue* in such a situation, they should assume that the *Finesse* is "still on". So, depending on the situation, they should either know that the initial card that was clued is playable (like in an *Out-of-Order Finesse*) or continue to blind-play cards to fulfill the initial *Finesse* (if the card clued with a *Fix Clue* seems to be unrelated).
- Note that since we want to minimize *Lying* as much as possible, *Finesses with a Lie Component* have the **lowest possible precedence**. For example, this means that you can give a *Delayed Play Clue* to a player who is still blind-playing cards without it looking like a *Fix Clue*.
- Importantly, *Finesses* with a *Lie Component* are **only** allowed if there is not an alternative line that would "get" the same number of cards without any lies. Thus, if you are looking to do a *Finesse* with a *Lie Component*, make sure you carefully consider the efficiency of all of the possible alternatives.

<br />

### The Hesitation Blind-Play

- Sometimes, a player will receive a *Play Clue* on a card. And then, instead of playing it, they will discard their chop instead. This would normally indicate some sort of emergency. However, sometimes it can be seen that there is nothing special going on and that everybody has safe chop cards.
- In such a situation, if the player is not making a mistake, the only reason that they would discard is that they are allowing for the possibility of a *Prompt* or a *Reverse Finesse* - someone else on the team has a playable card (either clued or on *Finesse Position*) that "connects" to the card that they got the *Play Clue* on.
- Depending on the game state, clever players may be able to blind-play their *Finesse Position* card in response to this hesitation, getting a card for "free". This kind of move is called a *Hesitation Blind-Play*.
- For example, in a 3-player game:
  - Red 1 and all of the other 2's are played on the stacks.
  - The team has 5 clues. Nobody on the team has any cards clued in their hand.
  - Alice clues number 3 to Bob, touching a blue 3 on slot 1 as a *Play Clue*. (The team is now at 4 clues.)
  - Bob discards. (The team is now at 5 clues.)
  - From Cathy's perspective, Bob was supposed to play the blue 3 immediately instead of discarding.
  - Cathy knows that since the team has so many clues available, this cannot be a *Scream Discard* from Bob. (*Scream Discards* are only typically done when the team is at 0 or 1 clues.)
  - Thus, Cathy knows that Bob must be hesitating because is he allowing for the possibility of a *Reverse Finesse*. In this situation, the only possible card that could Bob could be hesitating for is red 2.
  - Cathy blind-plays her *Finesse Position* card. It is red 2 and it successfully plays.
  - Alice discards.
  - Bob knows that since Cathy blind-played the red 2, Alice did a *Reverse Finesse* and that he has the red 3.
  - Bob plays the 3, but it is revealed to be blue 3 instead of red 3.
  - Bob now knows that nobody has the red 3 and that Cathy blind-played the red 2 from Bob's hesitation.

<HesitationBlindPlay />

- *Hesitation Blind-Plays* are **not always safe** to do:
  - If a player could be hesitating for a clued card in your hand **or** your *Finesse Position* card, then you cannot act on the hesitation. (If you guess wrong, you could misplay a critical card.)
  - If a player could be hesitating for a card that is identical to the card that was clued, then you cannot act on the hesitation. (If you blind-play the same copy of the card, then they will go on to misplay the clued card.)
  - If blind-playing a particular card would cause the original clue to look like a *Double Finesse* with a "self" component, then you cannot act on the hesitation. (For example, if a number 4 clue causes a *Hesitation Blind-Play* of a red 2, the clue receiver would go on to misplay their *Finesse Position* card as the red 3.)
