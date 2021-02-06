## Introduction

As noted in the [convention changes document](Convention_Changes.md), sometimes a change to the conventions is made but is not yet announced due to there being a backlog of things to announce. This document contains the backlog.

<br />

## The Backlog (General Conventions)

**The Loaded Play Clue (LPC)** (change)

- Now, *Loaded Play Clues* **do not** apply to number 5 clues during the *Low Score Phase*.
- For example, in a 3-player game:
  - It is the *Low Score Phase*.
  - Red 3 is played on the stacks.
  - Bob has a known red 4 in his hand on slot 5.
  - Alice clues number 5 to Bob, touching a 5 on slot 3.
  - Bob knows that he is *Loaded*, because he has a red 4 to play. Bob knows that normally, no-one else is supposed to give *Save Clues* to *Loaded* players (and that they should be transformed into *Play Clues*).
  - However, Bob knows that this rule doesn't apply to number 5 clues during the *Low Score Phase*.
  - Thus, Bob marks his slot 4 card as being *Chop Moved* and plays the red 4.
- For example, in a 3-player game (similar to the last example):
  - It is the *Low Score Phase*.
  - Red 3 is played on the stacks.
  - Bob has a known red 4 in his hand on slot 4.
  - Alice clues number 5 to Bob, touching a 5 on slot 5 (Bob's chop).
  - Bob knows that he is *Loaded*, because he has a red 4 to play. Bob knows that normally, no-one else is supposed to give *Save Clues* to *Loaded* players (and that they should be transformed into *Play Clues*).
  - However, Bob knows that this rule doesn't apply to number 5 clues during the *Low Score Phase*.
  - Thus, Bob knows that Alice is performing a simple *5 Save* and plays the red 4.

<br />

## The Backlog (Variant-Specific Conventions)

@everyone Deleted variant-specific conventions:

**White Compromise** (deleted)

```
- The *White Compromise* convention is deleted.
- This convention was not used very often and didn't provide very much overall value.
```

@everyone New variant-specific conventions:

**Positional Bluffs** (by Zamiel)

```
- This convention only applies to variants with a null suit.
- *Positional Layered Finesses* are deleted and *Positional Bluffs* are added.
- This means that a *Positional Clue* can be used to get a non-null card.
- Similar to a normal *Bluff*, a *Positional Bluff* only "gets" 1 card. No actual null cards are promised.
```

**Gray Loaded Play Clues**

```
- This convention only applies to variants with a gray suit.
- Gray 3 must be saved with a number 3 clue and gray 4 must be saved with a number 4 suit.
- However, these cards cannot be saved "early" - any *Early Saves* to these cards would instead be treated as a *Loaded Play Clue*.
```

**The Turnabout Ejection (For 1's and 5's)** (by pianoblook)

```
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
```

**Dark Omni & Gray Pink Saves**

```
- This convention only applies in variants with a dark omni or gray pink suit.
- The rules for saving dark omni and gray pink suits have been slightly refined so that players can perform more 2-for-1 clues.
- See the doc for more details: https://github.com/Zamiell/hanabi-conventions/blob/main/variant-specific/Dark_Omni_&_Gray_Pink.md
```

**The Pink Fake Prompt & The Pink Fake Finesse** (by Jeff)

```
* This convention only applies to variants with a pink suit.
* First, read the section on the *[Pink Play Clue Lie](#the-pink-play-clue-lie-with-a-mismatched-play-clue-that-touches-other-cards)*.
* In the *Pink Play Clue Lie*, *Pink Promise* is violated when giving a *Play Clue* to a playable pink card. However, no special actions need to be taken from anyone else on the team, because the lie will automatically resolve when the card is played.
* In some special situations, it is possible to give a *Pink Play Clue Lie* that will **not** resolve automatically. In this situation, the next player must play a card to "fix" the lie.
* For example, in a 3-player game:
  * It is the first turn of the game and nothing is played on the stacks.
  * Alice gives a number 2 clue to Cathy, touching a pink 1 on slot 2. (Cathy does not have a playable card on slot 1.)
  * Bob knows that if he does nothing, Cathy will go on to interpret this as a *Self-Finesse*, and play her *Finesse Position*, which will misplay.
  * Thus, Bob plays his *Finesse Position* as a *Pink Fake Finesse*. It is a blue 1 and it successfully plays.
  * From Cathy's perspective, Alice performed a *Finesse* on the blue 1 into the blue 2. Cathy plays the blue 2, but it is actually the pink 1. Now, Cathy knows that Alice performed a *Pink Fake Finesse*.
```
