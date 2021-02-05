---
id: level_11
title: Level 11 - Advanced
---

- Level 11 strategies should only be learned if you have 180+ games of experience with the group.
- This level introduces various moves that have to do with cluing number 5 (which is also referred to as *5 Tech*).

<br />

### The Early 5's Chop Move

- In the *Early Game*, players are only allowed to clue an off-chop 5 if there is nothing left to do. (Or, as a special exception, if there is only one *Play Clue* to give to a card that happens to be on *Finesse Position*.)
- Thus, if someone clues a 5 and there **is** something else to do, they are performing a special move.
- If the 5 is one-away from chop, then they are performing an *Early 5's Chop Move*. This functions in the exact same way a normal *5's Chop Move* does (except it was done in the *Early Game*, which is not normally possible).

### The Low Score Phase and the Normal Score Phase

- At this point, you should already know that we split up the game of Hanabi into the *Early Game* and the *Mid-Game* (based on when someone discards).
- In a similar way, we also split up the game of Hanabi into the *Low Score Phase* and the *Normal Score Phase*:
  - The *Low Score Phase* is defined as when the score is below `2 x number of suits`. (e.g. 10 points in a no variant game, 6 points in a 3-suit game, etc.)
  - The *Normal Score Phase* is defined as when the score is equal to or past this threshold.
- Some special moves using a number 5 clue can only be performed in the *Low Score Phase* of the game.
- On Hanab Live, the score will be colored cyan when the *Low Score Phase* is active.

### No Play Clues with a Number 5 Clue in the Low Score Phase

- Normally, if a player uses a number 5 clue to clue a 5 that is two-or-more-away-from-chop, and that player is not a stalling situation, then it would be a *Play Clue* on the 5.
- However, all number 5 clues in the *Low Score Phase* are **never** to be interpreted as a direct *Play Clue*.
- They are instead interpreted as a more advanced move. (See the [5 Pull](#the-5-pull) section below.)
- This means that if players need to give a *Play Clue* to a playable 5, and the score is less than 2 points per stack, then they **must** use a color clue, or wait until later.

### The 5 Pull

- This convention only applies in the *Low Score Phase*.
- Players are only allowed to perform a *5 Stall* in certain situations. If a player performs a *5 Stall* when it would otherwise be illegal, then it is not a *5 Stall* at all, and would instead be:
  - a *5's Chop Move* if the 5 is one-away-from-chop
  - a *Play Clue* if the 5 is two-or-more-away-from-chop
- However, since *Play Clues* with number 5 clues are "turned off" in the *Low Score Phase*, then the cluing player must be intending something else: a *5 Pull*.
- A *5 Pull* causes the player to blind-play the card to the right of the 5. The clued 5 is not actually related to the blind-play. This is why it is called a *Pull* instead of a *Finesse* or a *Bluff*.
- *5 Pulls* are typically done to 5's that are on slot 1. But, for example, you can also clue a 5 in slot 2 in order to get a blind-play on slot 3.
- *5 Pulls* take precedence over *Finesses* and *Bluffs*, because a number 5 clue is never considered to be *Play Clue*. For example:
  - It is the *Early Game* and the *Low Score Phase*.
  - Red 3 is played on the stacks.
  - Alice clues Cathy number 5, touching a red 5 on slot 1. (There are other *Play Clues* for Alice to give, so this cannot be a *5 Stall*.)
  - Normally, Bob would think that this is a *Finesse* and that he should blind-play his *Finesse Position* card as the red 4.
  - However, Bob knows that *Play Clues* with a number 5 clue are "turned off" in the *Low Score Phase*, which means that Alice is **not** indicating that the red 5 is playable.
  - Bob can see that there is a playable blue 1 to the right of the 5, so Alice must be intending a *5 Pull*. When it gets to Cathy's turn, Cathy will blind-play that card.
- Since *5 Pulls* are never *Play Clues* on the 5, it is possible to *5 Pull* a 4 without promising that the 5 matches the suit.
- Confusingly, *5 Pulls* work differently from *Finesses*. Even though they involve playing a blind card, a *5 Pull* should be treated as a *Delayed Play Clue* (or a potential *Prompt*). This means that the blind card could play through any existing touched cards.
- When a player is *Finessed* or *Bluffed*, they are allowed to defer playing the blind card in order to do a *Finesse* or *Bluff* of their own. However, if they could be *Bluffed*, they are **not** allowed to initiate a *5 Pull*. (Players are still allowed to defer playing into a *Finesse* in order to initiate a *5 Pull*.)
- In the rare case where a *5 Pull* is performed in a 3-player game by touching two 5's in slot 1 and slot 3, then the *5 Pulled* card is slot 2.
- For expert players, we define a specific [interaction between *5's Chop Moves* / *5 Pulls* and *2 Saves*](level_19/save_clues_non_emergency_chop_moves.md#2-saves-advanced-section-interaction-with-5s-chop-moves--5-pulls).

### A Flowchart for Cluing 5's in the Early Game

- Differentiating between a *5 Stall* and a *5 Pull* can sometimes be confusing. [Here is a handy flowchart](https://raw.githubusercontent.com/Zamiell/hanabi-conventions/master/static/img/flowcharts/early_game_5_flowchart.png) that steps you through how you can tell the difference.

### The 5 Pull Prompt & The 5 Pull Finesse

- *5 Pulls* are also allowed to initiate a *Prompt* or *Finesse*.
- For example, in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Cathy's hand is as follows, from newest to oldest: `blue 4, blue 4, blue 5, red 2, red 2`
  - Donald's hand is as follows, from newest to oldest: `yellow 4, yellow 4, green 1, yellow 3, yellow 3`
  - Alice clues number 5 to Cathy, touching the blue 5 on slot 3.
  - Bob knows that since the team is the *Early Game*, Alice's clue might be a *5 Stall*.
  - However, Bob also knows that you are only allowed to perform a *5 Stall* if there are no normal *Save Clues* or *Play Clues* to give. Bob sees that Donald has a green 1 that could be *Play Clued*. Thus, Bob knows that Alice's clue cannot not be a *5 Stall*, which makes it a *5 Pull* instead (since it is two-or-more-away from the chop).
  - Bob knows that if this was a *5 Pull*, it would be pulling the red 2. If Bob does nothing, Cathy might go on to misplay the red 2 as some playable 1.
  - Thus, this must be a *5 Pull Finesse*, so Bob blind-plays his *Finesse Position*. It is a red 1 and it successfully plays.
  - Cathy knows that the only reason that Bob would blind-play a card is it this was a *5 Pull Finesse*. Cathy blind-plays her slot 4 card. It is a red 2 and it successfully plays.
- Unlike other types of *Finesses*, *5 Pull Finesses* **must** be demonstrated with a blind-play between when the *5 Pull* is given and the *5 Pulled* player's next turn (e.g. a *Forward Finesse*).
- Subsequently, *5 Pulls* are **not** allowed to initiate a *Reverse Finesse*. (This is because we don't want the person with the pulled card to have to entertain too many possibilities.)
- Remember that during a *5 Pull Finesse*, the pulled card **always** matches the blind-play. In other words, it impossible to perform a *5 Pull Bluff*.

### The 5 Pull Double Finesse

- First, see the section on the [5 Pull Finesse](#the-5-pull-prompt--the-5-pull-finesse).
- As you would expect, it is also possible to perform a *5 Pull Double Finesse* in the exact same way that you can *5 Pull Finesse*.
- The "pulled" card will always match the final blind-play.
- For example in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Donald's hand is as follows, from newest to oldest: `blue 4, blue 4, blue 5, red 3, blue 2`
  - Alice clues number 5 to Donald, touching the blue 5 on slot 3.
  - Bob blind-plays the red 1 (because he knows that it cannot be a *5 Stall*).
  - Cathy blind-plays the red 2 (because she knows that she needs to play into the *Double Finesse*).
  - Donald knows that the *5 Pulled* card is the red 3 to match the red 1 and the red 2.
- Previously, we said that *5 Pull Finesse* **must** be a *Forward Finesse*. However, *5 Pulled* players **do** have to respect that a *5 Pull Finesse* can be a *5 Pull Double Finesse* with the second blind-play as a *Reverse Finesse*. (Specifically, we refer to this as a *Finesse* with a *Reverse Finesse* component.)
- More examples of a *5 Pull Double Finesse* can be found [here](examples/5_pull_double_finesse.md).

### The 5 Pull Clandestine Finesse

- First, see the section on the [5 Pull Finesse](#the-5-pull-prompt--the-5-pull-finesse).
- A *5 Pull Finesse* **must** be a *Forward Finesse*.
- However, *5 Pulled* players **do** have to respect that the *Finesse* can be *Clandestine*.
- For example in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Bob's hand is as follows, from newest to oldest: `red 1, green 1, green 4, green 4, green 5`
  - Cathy's hand is as follows, from newest to oldest: `blue 4, blue 4, blue 5, green 2, blue 2`
  - Alice clues number 5 to Cathy, touching the blue 5 on slot 3.
  - Bob blind-plays the red 1 (because he knows that it cannot be a *5 Stall*).
  - Normally, Cathy would think that Alice performed a *5 Pull Finesse*, and she would blind-play her slot 4 card as the red 2 (to match the red 1).
  - However, Cathy also sees that at the time of the clue, Bob had a playable green 1 behind the red 1. Thus, it is possible that Alice might be performing a *5 Pull Clandestine Finesse*.
  - Cathy clues number 5 to Bob as a *5 Save*. (This is an unrelated clue.)
  - Alice performs an unrelated action.
  - Bob blind-plays the green 1 from slot 2.
  - Cathy now knows that this was indeed a *5 Pull Clandestine Finesse* and that she has the green 2 on her slot 4.

### The 5 Pull Promise (A Follow-up Play Clue After a 5 Pull)

- Normally, *5 Pulls* have to be treated as *Delayed Play Clues*. This means that sometimes, it can take a long time for the pulled card to blind-play.
- From the perspective of the player who is *5 Pulled*, if a follow up *Play Clue* is given to a currently unplayable card, then they can disregard the *Delayed Play Clue* interpretation - the *5 Pulled* player is **promised** the card that makes the unplayable card playable.
- For example, in a 4-player game:
  - Alice has two clued 1's in her hand - red 1 and blue 1.
  - Bob does a *5 Pull* on Donald. Donald knows that the *5 Pulled* card could be either red 2 or blue 2 (if it is a *Delayed Play Clue*).
  - Cathy clues Alice about a red 3. Now, Donald knows that he is **promised** the red 2 as his *5 Pulled* card (and he no longer has to wait for the blue 1 to come down before blind-playing).

### Finesses While 5 Pulled

- Sometimes, a *5 Pulled* player may not play their pulled card right away. Maybe they have to wait for existing cards to play first, or maybe they want to capitalize on a *Finesse* while it is still available.
- Any *Finesse* that a *5 Pulled* player performs is to be treated as a *Certain Finesse*.
- Any *Certain Discard* that is performed in response to a *Finesse* that a *5 Pulled* player did applies to the *5 Pulled* card.

### The 5 Pull Skip

- If a player is already *Finessed*, it is possible to *Finesse* them again and get them to play their *Second Finesse Position* card.
- Similarly, if a *5 Pull* is performed, and the card immediately to the right of a 5 is already clued or already "gotten", then the *5 Pull* skips over that card and gets the next card after that.
