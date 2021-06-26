## Introduction

As noted in the [convention changes document](convention-changes.md), sometimes a change to the conventions is made but is not yet announced due to there being a backlog of things to announce. This document contains the backlog.

<br />

## The Backlog (General Conventions)

**The Cursed Finesse** (by pianoblook)

- Commonly, players can use a *Double Finesse* or a *Clandestine Finesse* to "get" multiple cards from the next player. This works because the first blind-play "connects" to the clued card.
- However, what if a player intentionally performs a *Bluff* where other players can see that it was actually possible to perform a *Double Finesse* or a *Clandestine Finesse*?
- In this situation, if the cluer is not making a mistake, they are trying to send a deeper message - they want an extra person to blind-play.
- This is called a *Cursed Finesse* because it requires the situation to be "cured". By performing a *Cure Blind-Play*, the move is transformed from a *Bluff* into a real *Finesse*.
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Bob's hand is as follows, from left to right: `red 1, blue 1, green 3, green 3`
  - Donald's hand is as follows, from left to right: `blue 2, green 4, green 4, yellow 4`
  - Thus, Alice has a *Free Choice* between cluing blue to Donald and number 2 to Donald. If Alice chooses blue, then it will cause a *Bluff* (as a 2-for-1). If Alice chooses number 2, it will cause a *Clandestine Finesse* (as a 3-for-1).
  - Alice clues blue to Donald, touching a single blue 2.
  - Bob tries to blind-play the blue 1 from his *Finesse Position*. Instead, it is a red 1 and it successfully plays. Bob now knows that he was *Bluffed*.
  - Cathy sees that Alice could have done a *Clandestine Finesse* instead of a *Bluff*. Thus, Cathy knows that this must be a *Cursed Finesse*. Cathy blind-plays her *Finesse Position* (as a *Cure Blind-Play*). It is a red 2 and it successfully plays.
  - Bob and Donald both gasp in surprise when Cathy blind-plays:
    - From Bob's perspective, the focus of the clue is a *one-away-from-playable* card, so this cannot be a *Double Bluff*.
    - From Donald's perspective, this cannot be a normal *Finesse* or a *Double Bluff*, because Cathy would have done nothing, waiting for Bob to play the blue 1 (as a *Finesse*)
    - From both Bob and Donald's perspective, Bob's red 1 did not connect to Donald's blue card, so this cannot be a *Pestilent Double Bluff*.
  - Therefore, the team knows that this must have been a *Cursed Finesse*. Bob will now continue to blind-play until he finds his promised blue 1.
- *Cursed Finesses* can only occur if there is a *Free Choice* during the initial clue.

<br />

## The Backlog (Variant-Specific Conventions)

@everyone New variant-specific conventions:

**The White Loaded Play Clue** (by rkass)

- This convention only applies to variants with a white suit.
- *Loaded Play Clues* are "turned on" for white cards.
- Normally, *Loaded Play Clues* are "turned off" in the *Early Game*. However, note that *Loaded Play Clues* **always** apply to white cards, even in the *Early Game*.
- This means that if a player is *Loaded*, and a *Chop-Focused* card *could* be white, then they will always assume that it is a *White Loaded Play Clue*.
- For example, in a 3-player game:
  - White 2 is played on the stacks. Blue 3 is in the trash.
  - Bob has a globally-known playable red 1 in his hand.
  - Alice clues number 3 to Bob, touching a 3 on Bob's chop.
  - Normally, Bob would interpret this as an *Early Save* on the blue 3.
  - However, Bob knows that white 3 is currently playable and that he is *Loaded*. Thus, this must be a *White Loaded Play Clue* on a white 3.
- As an exception, *White Loaded Play Clues* do not apply to number 5 clues in the *Low Score Phase*.

**The White Loaded Self-Finesse** (by rkass)

- This convention only applies to variants with a white suit.
- Since players will always assume *White Loaded Play Clues*, you can also use them to perform *Self-Finesses*.
- For example, in a 3-player game:
  - White 1 is played on the stacks. Blue 3 is in the trash.
  - Bob has a globally-known playable red 1 in his hand.
  - Alice clues number 3 to Bob, touching a 3 on Bob's chop.
  - Normally, Bob would interpret this as an *Early Save* on the blue 3.
  - However, Bob knows that he is *Loaded* and that this 3 could be a white 3. Thus, this must be a *White Loaded Play Clue* on a white 3.
  - Bob does not see any white 2's, so he knows that he must have the white 2 as a *Self-Finesse*. Bob blind plays his *Finesse Position*. It is a white 2 and it successfully plays.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues Cathy red, touching a red 1 as a *Play Clue*.
  - Bob clues Cathy number 2, touching a 2 on her chop.
  - Normally, Cathy would interpret this as an *Early 2 Save* on any 2 in the game.
  - However, Cathy knows that she is *Loaded* and that the 2 could be a white 2. Thus, this must be a *White Loaded Play Clue* on a white 2.
  - Bob does not see any white 1's, so he knows that he must have the white 1 as a *Self-Finesse*. Bob blind plays his *Finesse Position*. It is a white 1 and it successfully plays.

@everyone New variant-specific conventions:

**Positional Bluffs** (by Zamiel)

- This convention only applies to variants with a null suit.
- *Positional Layered Finesses* are deleted and *Positional Bluffs* are added.
- This means that a *Positional Clue* can be used to get a non-null card.
- Similar to a normal *Bluff*, a *Positional Bluff* only "gets" 1 card. No actual null cards are promised.

**Prism Color Finesses (One-Away-From-Playable)** (by Zamiel)

- This convention only applies to variants with a prism suit.
- For the purposes of *Finesses*, prism cards only "connect" if they are the direct next color.
- For example, in a 3-player game of *Prism (5 Suits)*:
  - Prism 1 is played on the stacks.
  - Alice clues green to Cathy, touching a prism 3 as a *Play Clue*.
  - Bob blind-plays a prism 2 from his *Finesse Position*.
  - Cathy knows that since prism 3 is green, prism 2 connects to green. Thus, this must be a *Finesse*.
  - Cathy plays her green as a prism 3.

**Prism Color Bluffs (Two-Away-From-Playable)** (by Zamiel)

- Players can perform a *Bluff* on a prism card with a color, as long as that color represents a prism card that is *two-or-more-away-from-playable*.
- As a consequence of this, you can *Bluff* a prism 1 by cluing a prism 3 (with color).
- For example, in a 3-player game of *Prism (5 Suits)*:
  - Nothing is played on the stacks.
  - Alice clues green to Cathy, touching a prism 3 as a *Play Clue*.
  - Bob blind-plays a prism 1 from his *Finesse Position*.
  - Cathy knows that prism 1 would connect to yellow, but it does not connect to green. Thus, this is just a *Bluff*.
  - Cathy marks her green card as either a green 2 (as a normal *Bluff*, a green 3 (as a *3 Bluff*), or a prism 3 (as a *Hard 3 Bluff*).

**Gray Loaded Play Clues**

- This convention only applies to variants with a gray suit.
- Gray 3 must be saved with a number 3 clue and gray 4 must be saved with a number 4 suit.
- However, these cards cannot be saved "early" - any *Early Saves* to these cards would instead be treated as a *Loaded Play Clue*.

**The Turnabout Ejection (for 1's and 5's)** (by pianoblook)

- If a player uses *Pink Promise* to falsely indicate a pink 1 as a pink 5 **or** a pink 5 as a pink 1, this is a dangerous lie that must be immediately resolved.
- In this situation, the next player must immediately play their *Second Finesse Position* to prove what happened. This is called a *Turnabout Ejection*.
- After the *Ejection*, the player who received the clue will know that the focused card's identity has been "reversed".
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues number 5 to Cathy, which touches a pink 1 on Cathy's chop.
  - Bob knows that Alice is violating *Pink Promise*. This must be a *Turnabout Ejection*.
  - Bob blind-plays his *Second Finesse Position* (slot 2). It is a blue 1 and it successfully plays on the stacks.
  - At first, Cathy thought that the number 5 clue from Alice was a *5 Save*.
  - After Bob blind-plays, Cathy knows that Alice did not perform a *5 Save* and instead did something else.
  - Cathy knows that Alice did not perform a *Bubblegum Bluff*, because Bob would have played his slot 5 card instead of his slot 2 card.
  - Thus, Cathy knows that this must be a *Turnabout Ejection*. She marks her slot 5 card as a pink 1.
- If a *Turnabout Ejection* occurs from a number 1 clue that also touches other 1s, the non-focused cards should still be assumed to be 1s (using the *1's Assumption* convention).

**Dark Omni & Gray Pink Saves**

- This convention only applies in variants with a dark omni or gray pink suit.
- The rules for saving dark omni and gray pink suits have been slightly refined so that players can perform more 2-for-1 clues.
- See the doc for more details: https://github.com/hanabi/hanabi.github.io/blob/main/variant-specific/dark-omni-&-gray-pink.md

**The Pink Fake Prompt & The Pink Fake Finesse** (by Jeff)

- This convention only applies to variants with a pink suit.
- First, see the section on the Pink Play Clue Lie.
- In the *Pink Play Clue Lie*, *Pink Promise* is violated when giving a *Play Clue* to a playable pink card. However, no special actions need to be taken from anyone else on the team, because the lie will automatically resolve when the card is played.
- In some special situations, it is possible to give a *Pink Play Clue Lie* that will **not** resolve automatically. In this situation, the next player must play a card to "fix" the lie.
- For example, in a 3-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice gives a number 2 clue to Cathy, touching a pink 1 on slot 2. (Cathy does not have a playable card on slot 1.)
  - Bob knows that if he does nothing, Cathy will go on to interpret this as a *Self-Finesse*, and play her *Finesse Position*, which will misplay.
  - Thus, Bob plays his *Finesse Position* as a *Pink Fake Finesse*. It is a blue 1 and it successfully plays.
  - From Cathy's perspective, Alice performed a *Finesse* on the blue 1 into the blue 2. Cathy plays the blue 2, but it is actually the pink 1. Now, Cathy knows that Alice performed a *Pink Fake Finesse*.

**The Fake 5's Chop Move** (by pianoblook)

- This convention only applies to variants with a dark pink, dark omni, or gray pink suit.
- Players are allowed to violate *Pink Promise* on dark pink cards in order to perform a *Fake 5's Chop Move*.
- This means that *Pink Promise* no longer applies to off-chop cards when they are clued as a 5, unless it was just a *5 Stall*.

**The Fake 5 Pull & The Fake 5 Number Discharge** (by pianoblook)

- This convention only applies to variants with a dark pink, dark omni, or gray pink suit.
- Similar to the Fake 5's Chop Move, players can also violate *Pink Promise* in order to initiate a *5 Pull* or a *5 Number Discharge*.
- Sometimes, when a *5 Pull* is occurring, it can be ambiguous to other players on the team as to whether a *5 Pull* or a *5 Stall* is happening. However, when a *Fake 5 Pull* (or a *Fake 5 Number Discharge*) is happening, everyone can be sure that it is a *5 Pull*, because it would be illegal to violate *Pink Promise* when performing a *5 Stall*.
