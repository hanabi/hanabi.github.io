---
id: level-18
title: Level 18 - Priority
---

import PriorityPrompt from '@site/image-generator/yml/level-18/priority-prompt.yml';
import PriorityFinesse from '@site/image-generator/yml/level-18/priority-finesse.yml';
import PriorityBluff from '@site/image-generator/yml/level-18/priority-bluff.yml';
import LoadClue from '@site/image-generator/yml/level-18/load-clue.yml';
import PriorityFinesseSpecial from '@site/image-generator/yml/level-18/priority-finesse-special.yml';
import TrustFinesse from '@site/image-generator/yml/level-18/trust-finesse.yml';

- This level introduces *Priority*, which requires players to pay attention to the order that cards are played in.
- This can take a while to internalize, because signals from *Priority* are easy to miss.
- Make sure that you are totally comfortable with the earlier levels before attempting to add *Priority* to the mix. (We recommend at 250-300 games of experience.)

<br />

## Special Moves

<br />

### The Priority Prompt & The Priority Finesse

- Typically, players will only have one card to play at a time. In this case, unless there is some really good clue to give, there are no decisions to be made - they just play their one playable card.
- What if a player has two or more playable cards to play? Which card should they play first?
- If one of the cards is not completely known yet (e.g. a playable 2 of unknown color), then the player might want to play that card first in order to find out exactly what it is. In general, **nothing special is triggered by players playing an unknown card.**
- On the other hand, something special **can** be triggered if a player plays a fully-known card, because they knew exactly what they were doing. Our group agrees that **playable cards should be played in a specific order**. We refer to this as *Priority*. The agreed *Priority* is as follows:

| Priority | Category of card                                                   | Reason
| -------- | ------------------------------------------------------------------ | ------
| 1        | Blind-plays                                                        | Demonstrating that a *Finesse* or *Bluff* occurred is very important.
| 2        | Cards that lead into clued cards in someone else's hand            | Otherwise, the team would lose *Tempo*.
| 3        | Cards that lead into the player's own hand                         | It is bad for a suit to be "held up" on one player.
| 4        | 5's                                                                | Playing a 5 gets the team a free clue.
| 5        | The lower rank card                                                | The smaller stacks are more important to fill up.
| 6        | The left-most card                                                 | The left-most card is more likely to be good.

- If someone plays a fully-known card and the card does **not** have *Priority*, then the player must be trying to send a special message.
- Based on what card they did play, if you have any clued cards in your hand that match the next "connecting" card, it is a message that you can play it right now as a *Priority Prompt*. (This is similar to a normal *Prompt*, except instead of initiating the *Prompt* with a clue, they initiated it with the order that they played cards.)
- For example, in a 3-player game:
  - Alice has a clued + known playable red 1 and a clued + known playable blue 2 in her hand. Bob has two clued 3s in his hand.
  - Alice plays blue 2.
  - Bob comes next. Bob knows that normally Alice had a choice and therefore were supposed to play the lowest rank card - red 1 (unless it is a blind-play, or it leads into someone's hand, or it is a 5). Alice **did not** play the card with *Priority*.
  - Bob doesn't see blue 3 in Cathy's hand. This must have been a *Priority Prompt*. Bob plays the leftmost clued 3, and it's blue 3.

<PriorityPrompt />

- Similar to a normal *Prompt*, if a *Priority Prompt* could apply to two or more clued cards, then you should play the left-most one.
- Similar to a normal *Prompt*, if a *Priority Prompt* made you play the left-most card and it was not the connecting card, then you should continuing playing clued cards until you find the connecting card.
- Alternatively, if you do not have any clued cards in your hand that connects to the card that they played, then you should play your *Finesse Position* card as a *Priority Finesse*.
- For example, in a 3-player game:
  - Alice has a clued + known playable red 1 and a clued + known playable blue 2 in her hand.
  - Alice plays blue 2.
  - Bob comes next. Bob knows that normally, when you have a choice between two cards, you are supposed to play the lowest rank card (unless it's a blind-play, etc). Bob knows that Alice was supposed to play the red 1 instead of the blue 2. Alice **did not** play the card with *Priority*.
  - Bob sees blue 3 in Cathy's *Finesse Position*. This means that Alice in did a *Priority Finesse* on Cathy, not on Bob. Bob does something unrelated.
  - Cathy blind-plays her *Finesse Position* card. It is a blue 3.

<PriorityFinesse />

<br />

### The Priority Bluff

- Similar to a normal *Bluff*, it is also possible for players to perform a *Priority Bluff*.
- For example, in a 3-player game:
  - Alice has a known playable red 1 and a known playable blue 2 in her hand.
  - Alice plays blue 2.
  - Bob comes next. Bob knows that normally, when you have a choice between two cards, you are supposed to play the lowest rank card. (Unless it is a blind-play, or it leads into someone's hand, or it is a 5.) Bob does not see any blue 3's, so he knows that Alice was supposed to play the red 1 instead of the blue 2. Alice **did not** play the card with *Priority*.
  - This means that Bob must have a blue 3. Bob does not have any clued cards in his hand, so he blind-plays his *Finesse Position* card. It is **not** the blue 3 and is instead the green 1. Bob now knows that he was *Bluffed* and that no-one has the blue 3.

<PriorityBluff />

### A Priority Flowchart (for Choosing Between 2+ Playable Cards)

*Priority* can be confusing. [Here is a flowchart](https://raw.githubusercontent.com/hanabi/hanabi.github.io/main/static/img/flowcharts/priority-flowchart.png) that shows, in general, which card should be played when there is a choice between two cards.

[Here is another flowchart](https://raw.githubusercontent.com/hanabi/hanabi.github.io/main/static/img/flowcharts/priority-unknown-flowchart.png) that shows how *Priority* works when one or more of the cards is unknown.

<br />

### Priority Exceptions

Priority does not always apply. Some common exceptions are listed below.

#### 1) *End-Game*

- *Priority* is generally "turned off" in the *End-Game*, because players often need to play specific cards.
- With that said, *Priority* can still work if a player plays a card that would be really terrible for the team otherwise.

#### 2) The 4's Priority Exception

- If a player has a known playable 5 and a known playable 4 that leads into their own hand, then according to the above *Priority* table, the known playable 4 would have *Priority*. However, this does not make much sense, since the 5 has to be played no matter what, playing the 5 gives the team a clue back, the 4 could be played by someone else, and so on.
- Thus, if a player has a known playable 5 and a known playable 4 that leads into their own hand, then the 5 is said to have *Priority*.

#### 3) Blind-Playing Globally-Known Cards

- Normally, blind-playing cards has *Priority* over everything else.
- However, in some advanced cases, the blind-play does not need to be demonstrated to the team - everyone already has full knowledge of what is going on. In this case, players are supposed to treat the cards as clued for the purposes of finding the *Priority*. (The *Gentleman's Discards* is the main move that this applies to.)

#### 4) "Important" Cards

- Normally, cards that are the same rank should be played from left-to-right.
- However, in certain situations, players can know that some **other** card is **more important** than the left-most card. If a player plays a "more important" card, it should never trigger a "right-to-left" style *Priority Finesse*.
- For example, in a 3-player game:
  - In the *Early Game*, Alice clues number 2 to Bob, touching three 2's on slot 3, slot 4, and slot 5 (his chop). (This is the *2 Save* convention.)
  - Later on in the game, all of the 1's are now played on the stacks.
  - Bob has not received any other clues since then - all of his 2's are known playable, but he has no idea what color they are.
  - Normally, Bob knows that he is supposed to play his 2's from left-to-right. However, he also knows that his 2 on slot 5 is the most important card out of all of them - it was the focus of the original *2 Save* by Alice.
  - Thus, Bob plays his 2 on slot 5 first. After that, he plays the 2's from left-to-right like normal.

<br />

### The Load Clue

- Players will generally play cards without *Priority* if they see the next card in someone else's *Finesse Position*, because this will get the card for "free" as a *Priority Finesse*.
- Less commonly, players will see the next card in someone else's hand, but it will not be in *Finesse Position*. In these cases, it might still be good to play the card without *Priority*, just so that the player with the next card will have something to do on their turn.
- However, if they do play the card without *Priority*, it will cause an impending misplay because the target player will think the card is actually on their *Finesse Position*. Thus, doing this **forces** someone to give a clue to the card directly in order to stop the misplay.
- This clue is similar to a *Fix Clue*, since it fixes an impending misplay. But we specifically call this kind of clue a *Load Clue* to differentiate it from a *Fix Clue* that fixes a *Lie* or mistake. It is a *Load Clue* because it is loading the player up with something to do on their turn.
- If you receive a *Load Clue*, you should suspect that you might have something valuable on your chop, as this would be an excellent reason to commit the team to giving the *Load Clue* in the first place.
- If a player has a choice between playing one card that leads nowhere and playing one card that commits the team to giving a *Load Clue*, then they are not obligated to choose one or the other - they can choose whichever one is best for the situation.
- When a player receives a *Load Clue*, they are to interpret it as a normal *Play Clue* instead of a *Fix Clue*.
- For example, in a 3-player game:
  - Red 1 and blue 1 are played on the stacks.
  - Alice has a choice between playing a known red 2 or a known blue 2. The red 2 has *Priority* because it is the left-most card.
  - Alice plays the blue 2.
  - Bob sees that Cathy's hand is as follows, from newest to oldest: yellow 4, yellow 3, yellow 4, red 1, blue 3.
  - Bob sees that Cathy will think that Alice is performing a *Priority Finesse* on the blue 3. Thus, Bob must now give a *Load Clue* to stop the impending misplay.
  - Bob clues number 3 to Cathy.
  - Cathy is surprised - she was about to play her *Finesse Position* card as a blue 3, but she now knows that it can't be a blue 3.
  - If this was a *Fix Clue*, Cathy might be inclined to play the card that was closest to her slot 1 (which would be the 3 on slot 2).
  - However, Cathy knows that *Load Clues* are to be interpreted as normal *Play Clues* instead of *Fix Clues*, so she interprets this as a normal *Chop-Focus Play Clue* and plays blue 3 from slot 5.

<LoadClue />

### The Layered Priority Finesse

- Similar to a normal *Layered Finesse*, it is also possible to initiate a *Layered Priority Finesse* as long as the blind-playing player is not the very next person.

<br />

### The Priority Finesse (Special Case)

- To review, if a player has two playable cards, and both of them are fully-known, then they always have the ability to trigger a *Priority Finesse*.
- If a player has two playable cards, and only one of them is fully-known, a *Priority Finesse* will never be triggered if they play the unknown card.
- But what if a player plays a fully-known card over an unknown card? They **can still** trigger a *Priority Finesse*, but **only** if every single possibility for the unknown card would have *Priority* over the card that was played.
- For example, in a 3-player game:
  - Red 2 is played on the stacks. The 1's are played on all of the other stacks.
  - Alice has a globally-known red 3. (She was given a *Play Clue* on it earlier.)
  - Alice has a 2 of unknown color. (She was given a *Save Clue* on it earlier, but it is now playable since all of the 1's are down.)
  - Alice's 2 could be either blue 2, green 2, yellow 2, or purple 2.
  - The rest of the team does not have any clued cards in their hands.
  - Alice knows that **all** of the possibilities for the 2 would have *Priority* over the red 3, since all of them are lower rank.
  - Alice plays the red 3 anyway, which triggers a *Priority Finesse* on the red 4.

<PriorityFinesseSpecial />

### The Trust Finesse (A Situational Priority Finesse)

- According to the *Priority* rules, if an unknown card is played, no *Priority Finesse* can be triggered.
- However, even if this is the case, if playing one of the cards over the other would be really dumb, it should still trigger a *Finesse*.
- This type of move is called a *Trust Finesse* to distinguish it from the case where the card is globally known.
- It is also possible to perform a *Trust Prompt*, a *Trust Bluff*, and so forth.
- For example, in a 3-player game:
  - All the 1's are played on the stacks.
  - Alice has two playable cards in her hand:
    - One of the cards has a red clue on it. Since it was originally clued as a *Play Clue*, it is globally known that Alice knows that this is exactly red 2.
    - One of the cards has a number 2 clue on it. Since it was originally clued with a *Save Clue*, it can be any non-red 2. But it is playable because all of the 1's are already played.
  - Bob has a clued and globally known red 3 in his hand.
  - Alice knows that she is expected to play her red 2 into Bob's red 3, because that would be good teamwork.
  - Unknown from the rest of the team, Alice knows from the context of the game that her 2 must be exactly blue 2.
  - Bob has blue 3 on his *Finesse Position*.
  - Alice plays the globally unknown 2 to cause a *Trust Finesse*.

<TrustFinesse />

### The Paused Priority Finesse

- For the purposes of *Priority*, blind-playing a card is the most important thing to do. When players are supposed to be blind-playing a card, they are usually **not** allowed to perform a *Priority Finesse* - they must stick to playing the blind card.
- One exception to this is if a player is in the middle of unraveling the layer of a *Layered Finesse*. Since they have already blind-played their first card in the layer, they have demonstrated that the *Finesse* was on them, and now everyone on the team knows that the rest of the cards inside of the layer are "gotten" for sure.
- Note that this only applies when the card that was blind-played was unrelated to the original *Layered Finesse*.
  - For example, if a player is finessed for both the red 1 and the red 2 and has just blind-played a green 1, then they can perform a *Priority Finesse*, because everyone on the team knows that the green 1 played as red 1 and therefore that the layer is not yet unraveled.
  - However, if a player is finessed for both the red 1 and the red 2 and has just blind-played the red 1, then they **cannot** perform a *Paused Priority Finesse* because they haven't demonstrated to the team that they are still finessed for the red 2.
- Thus, in this situation, a player can "pause" finishing up the *Layered Finesse* and play some other clued card to perform a *Priority Finesse*. This is called a *Paused Priority Finesse*.
