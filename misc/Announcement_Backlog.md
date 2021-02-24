## Introduction

As noted in the [convention changes document](Convention_Changes.md), sometimes a change to the conventions is made but is not yet announced due to there being a backlog of things to announce. This document contains the backlog.

<br />

## The Backlog (General Conventions)

@everyone Changed conventions:

**The Loaded Play Clue (LPC)** (change)

```
- Now, *Loaded Play Clues* **do not** ever apply to number 5 clues during the *Low Score Phase*.
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
```

**Double Ignition** (change)

```
- Previously, *Double Ignition* had to be on the very next two players.
- Now, *Double Ignition* can be on any two members of the team.
- Sometimes, three players on the team will have playable cards on *Finesse Position*. If a *Double Ignition* is performed in this case, then similar to how an *Ambiguous Finesse* works, it will "get" the cards from the final two players. (Bob will do nothing because he sees that the *Double Ignition* is on Cathy and Donald.)
```

@everyone New conventions:

**Trash Push Ejection**

```
- First, see the section on the [Trash Push](#the-trash-push).
- Normally, when known trash is touched as the focus of the clue, and the known trash is on chop, it communicates a *Trash Push*.
- However, what if the *Trash Pushed* card is two-or-more-away-from-playable? This would normally be a *Trash Push Double Finesse* on Bob, but that is unlikely.
- Instead, we agree that similar to the rules for *5 Color Ejection*, if the *Trash Pushed* card would require two-or-more-blind-plays from Bob, then he interprets the clue as an *Ejection*.
- After a *Trash Push Ejection*, the clue reciever should *Chop Move* the two-or-more-away-from-playable card.
```

**Unknown Dupe Discharge (UDD)** (by Indego)

```
- First, see the section on *[Unknown Trash Discharge](#the-unknown-trash-discharge-1-for-1-form-utd)*.
- Typically, players closely follow *Good Touch Principle*, since duplicating cards is confusing and wastes efficiency on follow-up *Fix Clues*.
- However, there are still plenty of situations where players will intentionally duplicate a card:
  1) When it is the first turn of the game (and there is nothing else to do).
  2) When the team is at 8 clues (and there is nothing else to do).
  3) When a player is in a *Double Discard Situation* (and there is nothing else to do).
  4) When the team is losing and nearing the *End-Game* (and *Tempo* on playable cards is really important).
  5) When the efficiency of getting a *Double Finesse* or *Triple Finesse* outweighs the disadvantage of potentially having to give a *Fix Clue* later.
  6) When a *Phantom Playable Card* is at risk of being discarded and the preceding cards must be clued as soon as possible.
- If a player uses a **color clue** to duplicate a card, and these 6 criteria do not apply, then they must be trying to send an additional message.
- In this case, they intend for a *Discharge* to communicate the "badness" of the focused card. This is called an *Unknown Dupe Discard* (and works in a very similar way to the *Unknown Trash Discharge*).
- After an *Unknown Dupe Discard*, the focus of the clue can be any unknown duplicated card. The player will only know which specific duplicated card it is after they discard it. Once they discard it, they should write *Elimination Notes* on the matching cards in their hand.
```

```
- For example, in a 3-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 5 to Bob as a *5 Save*.
  - Bob clues number 5 to Alice as a *5 Save*.
  - Bob's hand is as follows: `red 2, red 2, red 4, blue 4, blue [5]`
  - Cathy clues red to Bob, touching the red 2 on slot 1, the red 2 on slot 2, and the red 4 on slot 3.
  - Alice knows that Cathy is violating *Good Touch Principle* and duplicating the red 2. There doesn't seem to be a very good reason for this, so this must be an *Unknown Dupe Discharge*.
  - Alice blind-plays her *Third Finesse Position*. It is a blue 1 and it successfully plays on the stacks.
  - Normally, Bob would think that this was an *Unknown Trash Discharge*. However, no red trash cards exist. Thus, this must have been an *Unknown Dupe Discharge*.
  - Bob discards his slot 1 card (the focus of the clue). It is revealed to be a red 2. Now, Bob writes *Elimination Notes* for the red 2 on his slot 2 and his slot 3.
```

```
- *Unknown Dupe Discharges* **can only be initiated with color clues**. This is because number clues will cause *Bad Touch Finesses*.
- *Unknown Dupe Discharges* only apply if **the two duplicated cards are in the same person's hand**.
  - It is explicitly illegal to perform an *Unknown Dupe Discharge* that duplicates a card in someone else's hand. If this happens, the clue must have some other meaning.
- In order for players to determine whether or not a *Double Finesse* or a *Triple Finesse* is happening, they should use the same *two-or-more-blind-plays* rule that applies to *5 Color Ejections*.
- For example, in a 3-player game (similar to the previous example):
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 5 to Bob as a *5 Save*.
  - Bob clues number 5 to Alice as a *5 Save*.
  - Bob's hand is as follows: `red 3, red 3, red 4, blue 4, blue [5]`
  - Cathy clues red to Bob, touching the red 3 on slot 1, the red 3 on slot 2, and the red 4 on slot 3.
  - Alice knows that Cathy is violating *Good Touch Principle* and duplicating the red 3. One excellent reason to do this would be to get a *Double Finesse* on red 1 + red 2 into the red 3.
  - However, Alice also knows that she is supposed to use the *two-or-more-blind-plays* rule in this situation. Since Alice would have to blind-play two cards into the *Finesse*, a *Finesse* is unlikely. Thus, this must be an *Unknown Dupe Discharge*.
  - Alice blind-plays her *Third Finesse Position*. It is a blue 1 and it successfully plays on the stacks.
```

**The Shallow Discard** (by Jerry)

```
- At the end of the game, it is normal for players to use a *Positional Discard* to get 1 card to blind-play, and to use a *Positional Misplay* to get 2 cards to blind-play.
- If a player does a *Positional Discard* to only get 1 card when they could have performed a *Positional Misplay* instead, then this is quite strange. If they are not making a mistake, they must be trying to send an additional message.
- In this situation, they intend for it to promise 3 blind-plays instead of 1.
- This is called a *Shallow Discard* because from Bob's perspective, Alice could have performed a deeper move.
- For example, in a 4-player game:
  - The team has 0 strikes.
  - It is the *End-Game* and Alice sees all of the remaining useful cards. Thus, she can *Positionally Discard* or *Positionally Misplay* any card that she wants in her hand.
  - Alice sees that Bob, Cathy, and Donald all have playable cards on slot 2.
  - Alice blind-discards her slot 2 card as a *Shallow Discard*.
  - From Bob's perspective, he sees that Cathy and Donald have a playable card on slot 2. Thus, Bob expected Alice to perform a *Positional Misplay* or her slot 2 card.
  - When Bob sees that Alice performed a *Positional Discard* instead of a *Positional Misplay*, he knows that she must be intending for 3 blind-plays to happen (instead of 1) as a *Shallow Discard*.
  - Bob blind-plays his slot 2 card (to match Alice's slot 2 discard). It successfully plays.
  - Cathy and Donald are both in a similar situation to Bob. (They expected Alice to perform a *Positional Misplay*.)
  - Thus, they both know that this is a *Shallow Discard*, and blind-play their slot 2 cards (to match Alice's slot 2 discard).
- In some specific situations, a *Positional Discard* from chop would not work, because it would just look like a normal discard. In these situations, a *Positional Misplay* would only get 1 blind-play (instead of 2) and a *Shallow Discard* would only get 2 blind-plays (instead of 3).
```

**The Unknown Trash Charm** (by piper)

```
- First, see the section on the *[Unknown Trash Discharge](#the-unknown-trash-discharge-1-for-1-form)*.
- Normally, after an *Unknown Trash Discharge*, non-focused cards are known to be "good".
- However, what if a player performs an *Unknown Trash Discharge* where **all** of the non-focused cards are trash? A *Discharge* would incorrectly signal that the non-focused cards are useful.
- Instead, this should signal a *Charm* on the very next player.
- For example, in a 3-player game:
  - All of the 2's are played on the stacks.
  - Alice clues red to Cathy, touching a red 1 on slot 1 and a red 2 on slot 2.
  - Normally, Bob would treat this clue as an *Unknown Trash Discharge*. However, if he *Discharges*, then Cathy will discard the red 1 and mark the red 2 as either a red 3, a red 4, or a red 5, which would be a *Lie*.
  - Instead, Bob knows that this signals an *Unknown Trash Charm*, so he blind-plays his *Fourth Finesse Position*. It is a blue 3 and it successfully plays.
```

**The Shallow Misplay** (by Jerry)

```
- First, see the section on the *[Shallow Discard](#the-shallow-discard)*.
- In a 5-player game, it possible to perform a *Shallow Misplay*, causing 4 people to blind-play from the same slot. (This works for the same reasons that a *Shallow Discard* works.)
- For example, in a 5-player game:
  - The team has 0 strikes.
  - It is the *End-Game* and Alice sees all of the remaining useful cards. Thus, she can *Positionally Discard* or *Positionally Misplay* any card that she wants in her hand.
  - Alice sees that Bob, Cathy, Donald, and Emily all have playable cards on slot 2.
  - Alice blind-plays her slot 2 card as a *Shallow Misplay*.
  - From Bob's perspective, he sees that Cathy, Donald, and Emily have a playable card on slot 2. Thus, Bob expected Alice to perform a *Shallow Discard* or her slot 2 card.
  - When Bob sees that Alice performed a *Positional Misplay* instead of a *Shallow Discard*, he knows that she must be intending for 4 blind-plays to happen (instead of 2) as a *Shallow Misplay*.
  - Bob blind-plays his slot 2 card (to match Alice's slot 2 discard). It successfully plays.
  - Cathy, Donald, and Emily are all in a similar situation to Bob. (They expected Alice to perform a *Shallow Discard*.)
  - Thus, they all know that this is a *Shallow Misplay*, and blind-play their slot 2 cards (to match Alice's slot 2 discard).
```

**The Prophetic Finesse (for 1's)** (by pianoblook)

```
- In most games, players will avoid giving a number 1 clue to a single playable 1 that is not on *Finesse Position* if a different player has the same 1 on *Finesse Position*. This is because it is usually better to *Finesse* it or to let someone else *Finesse* it.
- If a player does this anyway, and doing so was clearly bad, they must be communicating something extra.
- In this situation, the next player should treat the clue as if were a *Trash Finesse*.
- This is different from a *Trash Finesse* because a second blind-play is needed to prove that the card is not actually trash. The in-between player is promised to have the matching 1 on *Finesse Position*. The in-between blind-play is called a *Prophetic Blind-Play* to distinguish it from a normal blind-play.
- Furthermore, once the *Prophetic Finesse* has resolved, the clued player should **always** treat this as an *unnecessary* move (e.g. as an *Unnecessary Trash Chop Move* or an *Unnecessary Trash Push*).
- For example, in a 4-player game:
  - Red 1 is played on the stacks.
  - Alice clues number 1 to Donald, touching a single blue 1 on slot 3.
  - Bob sees that Cathy has a blue 1 on her *Finesse Position*. Thus, Alice's clue is strange - she should have probably clued Cathy's blue 1, or allowed someone to *Finesse* Cathy's blue 1.
  - Bob knows that Alice must be intending for a *Prophetic Finesse*. Bob blind-plays his *Finesse Position*. It is a green 1 and it successfully plays.
  - Cathy sees that from Donald's perspective, a *Trash Finesse* has just occurred. Donald will mark the blue 1 (playable) as a red 1 (trash), and will discard it. This is bad, so Cathy knows that something else is expected of her.
  - Cathy knows that this a *Prophetic Finesse* and that she is promised to have a blue 1 on her *Finesse Position*. Cathy blind-plays her *Finesse Position* (as a *Prophetic Blind-Play*). It is a blue 1 and it successfully plays.
  - Donald knows that since a number 1 clue touched a single 1 and caused two blind-plays, this must be a *Prophetic Finesse*. Donald marks his touched 1 as trash. He also *Chop Moves* his slot 4 card because of the *unnecessary* part of the move.
- *Prophetic Finesses* can only be triggered by touching **exactly one 1**.
- *Prophetic Finesses* can only be triggered by using a number 1 clue. (Color clues cause a *[Prophetic Discharge](discharges.md#the-prophetic-discharge)*.)
- *Prophetic Finesses* can also be given in situations that cannot be mistaken for *Trash Finesses*, but they will still work in the exact same way.
- For example, in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 1 to Donald, touching a single blue 1 on slot 3.
  - Just like in the previous example, Bob sees that this is a *Prophetic Finesse* (because Cathy has a blue 1 on her *Finesse Position*). Bob blind-plays his *Finesse Position*. It is a green 1 and it successfully plays.
  - Cathy sees that from Donald's perspective:
    - It will not look like a *Trash Finesse*, because no 1's were played at the time of the clue.
    - It will not look like a *Bad Touch Finesse (for 1's)*, since only a single 1 was clued.
  - Therefore, as soon Bob blind-plays, both Cathy and Donald can understand that it is a *Prophetic Finesse*.
  - Just like in the previous example, Cathy blind-plays the blue 1, and Donald marks his 1 as trash and *Chop Moves* his slot 4 card.
```

**The Prophetic Discharge** (by pianoblook)

```
- First, see the section on the [Prophetic Finesse](special_finesses.md#the-prophetic-finesse-for-1s).
- *Prophetic Finesses* can only be given with a number 1 clue.
- If a player tries to use a color clue to initiate a *Prophetic Finesse*, they instead intend for the next player to blind-play their *Third Finesse Position* (like an *Unknown Trash Discharge*).
- Other than that, everything else works like a *Prophetic Finesse* (e.g. one of the in-between players is promised to have the matching card on their *Finesse Position*).
- Unlike the *Prophetic Finesse*, the clued player should **only** treat this as *unnecessary* move if the *Discharged* card could have been cleanly clued.
```

**The Cursed Finesse** (by pianoblook)

```
- Commonly, players can use a *Double Finesse* or a *Clandestine Finesse* to "get" multiple cards from the next player. This works because the first blind-play "matches" the clued card.
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
    - From both Bob and Donald's perspective, Bob's red 1 did not match Donald's blue card, so this cannot be a *Pestilent Double Bluff*.
  - Therefore, the team knows that this must have been a *Cursed Finesse*. Bob will now continue to blind-play until he finds his promised blue 1.
- *Cursed Finesses* can only occur if there is a *Free Choice* during the initial clue.
```

<br />

## The Backlog (Variant-Specific Conventions)

@everyone Deleted variant-specific conventions:

**White Compromise** (deleted)

```
- This convention only applies to variants with a white suit.
- The *White Compromise* convention is deleted.
- This convention was not used very often and didn't provide very much overall value.
```

@everyone New variant-specific conventions:

**The White Loaded Play Clue** (by rkass)

```
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
```

**The White Loaded Self-Finesse** (by rkass)

```
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
```

@everyone New variant-specific conventions:

**Positional Bluffs** (by Zamiel)

```
- This convention only applies to variants with a null suit.
- *Positional Layered Finesses* are deleted and *Positional Bluffs* are added.
- This means that a *Positional Clue* can be used to get a non-null card.
- Similar to a normal *Bluff*, a *Positional Bluff* only "gets" 1 card. No actual null cards are promised.
```

**Prism Color Finesses (One-Away-From-Playable)** (by Zamiel)

```
- This convention only applies to variants with a prism suit.
- For the purposes of *Finesses*, prism cards "match" if they are the direct next color.
- For example, in a 3-player game of *Prism (5 Suits)*:
  - Prism 1 is played on the stacks.
  - Alice clues green to Cathy, touching a prism 3 as a *Play Clue*.
  - Bob blind-plays a prism 2 from his *Finesse Position*.
  - Cathy knows that since prism 3 is green, prism 2 matches green. Thus, this must be a *Finesse*.
  - Cathy plays her green as a prism 3.
```

**Prism Color Bluffs (Two-Away-From-Playable)** (by Zamiel)

```
- Players can perform a *Bluff* on a prism card with a color, as long as that color represents a prism card that is *two-or-more-away-from-playable*.
- As a consequence of this, you can *Bluff* a prism 1 by cluing a prism 3 (with color).
- For example, in a 3-player game of *Prism (5 Suits)*:
  - Nothing is played on the stacks.
  - Alice clues green to Cathy, touching a prism 3 as a *Play Clue*.
  - Bob blind-plays a prism 1 from his *Finesse Position*.
  - Cathy knows that prism 1 would match yellow, but it does not match green. Thus, this is just a *Bluff*.
  - Cathy marks her green card as either a green 2 (as a normal *Bluff*, a green 3 (as a *3 Bluff*), or a prism 3 (as a *Hard 3 Bluff*).
```

**Gray Loaded Play Clues**

```
- This convention only applies to variants with a gray suit.
- Gray 3 must be saved with a number 3 clue and gray 4 must be saved with a number 4 suit.
- However, these cards cannot be saved "early" - any *Early Saves* to these cards would instead be treated as a *Loaded Play Clue*.
```

**The Turnabout Ejection (for 1's and 5's)** (by pianoblook)

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
- See the doc for more details: https://github.com/hanabi/hanabi.github.io/blob/main/variant-specific/Dark_Omni_&_Gray_Pink.md
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
