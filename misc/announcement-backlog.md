## Introduction

As noted in the [convention changes document](convention-changes.md), sometimes a change to the conventions is made but is not yet announced due to there being a backlog of things to announce. This document contains the backlog.

<br />

## The Backlog (General Conventions)


<br />

## The Backlog (Variant-Specific Conventions)

@everyone New variant-specific conventions:

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
- This means that *Pink Promise* no longer applies to off chop cards when they are clued as a 5, unless it was just a *5 Stall*.

**The Fake 5 Pull & The Fake 5 Number Discharge** (by pianoblook)

- This convention only applies to variants with a dark pink, dark omni, or gray pink suit.
- Similar to the Fake 5's Chop Move, players can also violate *Pink Promise* in order to initiate a *5 Pull* or a *5 Number Discharge*.
- Sometimes, when a *5 Pull* is occurring, it can be ambiguous to other players on the team as to whether a *5 Pull* or a *5 Stall* is happening. However, when a *Fake 5 Pull* (or a *Fake 5 Number Discharge*) is happening, everyone can be sure that it is a *5 Pull*, because it would be illegal to violate *Pink Promise* when performing a *5 Stall*.
