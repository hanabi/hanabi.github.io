# 2-Player Conventions for the H-Group Framework

<br />

## Introduction

- Our group generally only plays games with 3 to 5 players, since 2-player games are not as fun / not as skill-based. In general, the _H-Group Conventions Framework_ is **not optimized for only 2-players**.
- With that said, it is possible to use the H-Group convention framework to also play 2-player games. Expert players can usually get perfect scores with ease (depending on the variant).
- This page provides some extra conventions that are used by our group while playing 2-player games.
- The goal of these conventions is to get the highest average score for the classic variants (`No Variant` and `Rainbow (6 Suit)`) over a large series of games. Thus, they are designed to be quite conservative. If you are playing a more difficult variant, then it might be prudent to play more risky by disabling certain conventions (e.g. one-away saves, DDA) and adding other ones (e.g. positional discards).

<br />

## Basic Conventions

### Tempo Change

- _Tempo Clue Chop Moves_ are turned off.
- Additionally, players must give _Tempo Clues_ as soon as reasonably possible.

### Priority Change

- _Priority Prompts_, _Priority Finesses_, and so forth are all "turned off". Instead, if a player plays a card without _Priority_, the other player should write _Priority Elimination Notes_ on their hand for the promised card.

### One-Away Saves

- In non-2-player games, _Save Clues_ must be given to cards that are on chop.
- In 2-player games, _Save Clues_ can **also** be given to cards that are 1-away from chop. This gives players the ability to save 2 critical cards in a row.
- For example, in a 2-player game:
  - All of the 1's are played on the stacks.
  - Blue 4 is in the discard pile.
  - Bob's hand is as follows, from newest to oldest: `red 4, green 4, blue 4, red 5, green 1`
  - Alice knows that both the blue 4 and the red 5 are critical. Alice also knows that there is no way to save both of the cards with one clue. If Alice does not do something soon, either the blue 4 or the red 5 will be discarded.
  - Alice clues number 5 to Bob as a _One-Away Save_.
  - Bob knows that normally, 5's are saved on chop. This 5 clue could be a _One-Away Save_. He might have another critical card on slot 3, but he does not know for sure quite yet.
  - Bob discards his chop, slot 5 (the green 1).
  - Alice clues number 4 to Bob as a normal _Save Clue_.
  - Bob knows that this is probably a _Save Clue_ on a critical blue 4, which would confirm his previous suspicion of having two critical cards in a row.
  - Bob discards his chop, slot 3 (the green 4).
  - Alice has successfully saved both critical cards.
- Players must only do _One-Away_ saves if they are necessary. Thus, a clue that looks like a _One-Away_ save can retroactively turn into a _Play Clue_ if it is not followed up with an additional _Save Clue_.
- _One-Away Saves_ are turned off in hard variants, null variants, and so forth.

### No 5's Chop Move

- The _5's Chop Move_ convention is "turned off". Any 5 that is clued one-away from chop will just look like a normal _One-Away Save_.

### First Turn Stalls

- On the very first turn of the game, if a known-unplayable card is clued, then it should be treated as a _Save Clue_ (instead of a _Self-Finesse_).
  - Players are allowed to use this ability even if there are other playable cards in the hand.

### Second Turn Stalls

- If a _Save Clue_ was given to a chop card on the first turn of the game, then the next player is not allowed to discard. They must instead give a stall clue. (Otherwise, they are allowed to discard.)
- In a _Second Turn Stalling_ situation, if a known-unplayable card is clued, then it should be treated as a _Save Clue_ (instead of a _Self-Finesse_), similar to a _First Turn Stall_.

### The Flush Clue (A Slot 1 Color Clue)

- In non-2-player games, it is permissible to use a color clue to save a slot 1 card. In this situation, the player who received the clue would then have a _Locked Hand_.
- However, this is not legal in a 2-player game. Players must use a number clue if they want to give a _Save Clue_ to a slot 1 card.
- Thus, color clues that are focused on slot 1 are always _Play Clues_. This is referred to as a _Flush Clue_ in order to disambiguate it from a more ordinary _Play Clue_.
- Note that you are also allowed to give a _Flush Clue_ with black.

### The 5's Double Chop Move

- Normally, when a player re-clues one or more 5's with a number 5 clue, it would be a _Play Clue_ - the left-most 5 is playable right now.
- In a 2-player game, if this would require two or more blind-plays (e.g. as a _Self Double Finesse_), then this interpretation is unlikely. Instead, we agree that this should communicate a _Double Chop Move_.

<br />

## Advanced Conventions

### The Delayed Bluff

- In non-2-player games, _Delayed Bluffs_ are explicitly illegal, since they violate _[Lie Principle](https://hanabi.github.io/docs/level-11/#lie-principle)_. However, in 2-player games, they are allowed.
- Note that this convention also applies to _Double Bluffs_. For example, if cluing a 4 at the beginning of the game causes two 1's to blind-play, then the blind-playing player is not promised to have any more playable cards.

### Scream Discard Modification

- In non-2-player games, _Scream Discards_ are only to be used as a last-resort. For example, you are **not** allowed to _Scream Discard_ to _Chop Move_ a non-critical one-away 3. This is because there is always a risk of discarding a critical card by accident.
- However, this logic does not apply to 2-player games. In a 2-player game, the other player will typically always keep your chop safe.
- Thus, in 2-player games, you can _Scream Discard Chop Move_ a non-critical but-still-useful card if you want.

### Double Discard Save Stalls

- This convention only applies in normal (non-hard) variants
- Just like in 3 to 5-player games, in a 2-player game, players always perform _Hard Double Discard Avoidance_.
- If a player gives a clue in _Double Discard_ situation and then they immediately receive a clue that "matches" the discarded card, then they know that this could be a _Save Clue_ that was unexpected. Since it was unexpected, they might **also** have another critical card after it.
- Thus, in this situation, the player should give (another) stall clue.
- For example, in a 2-player game:
  - Alice discards a red 3.
  - Bob has nothing to do, so he _Hard Burns_ by cluing number 5 to Alice. (This re-clues some 5's, accomplishing nothing.)
  - Alice clues red to Bob, which touches a red card on Bob's chop.
  - Bob interprets this as a potential _Save Clue_ on red 3.
  - Bob also knows that the red 3 is newly critical and that Alice was not expecting to have given this clue.
  - Bob _Hard Burns_ again by cluing number 5 to Alice.
  - Alice clues number 5 to Bob, saving a 5 on chop. Good thing that Bob stalled!

### The Scream Blind-Play (Blind-Playing Chop)

- If a player has no clues and needs to save the next person's chop, normally they will perform a _Scream Discard_. However, this requires a known-playable card in order to work. What if a player has no clues and needs to save the next person's chop when they have no playable cards?
- In this situation, players can instead send a powerful "emergency" message by blind-playing a card. Randomly blind-playing a card is dangerous, as it could be a critical card, so the safest card to blind-play is the chop.
- By doing this, it "screams" at the next player, accomplishing the same thing as a _Scream Discard_.

### The Double Scream Blind-Play (Blind-Playing Chop)

- Normally, a _Scream Blind-Play_ is only performed as a last resort. Namely, the following two things must be true:
  a) the team is at 0 clues
  b) the player had no playable cards (otherwise, they could perform a _Scream Discard_)
- What if a player disregards these things and does a _Scream Blind-Play_ anyway? It must **really** be an emergency. In this situation, the next player should _Chop Move_ twice.

### The Skipped Discard Chop Move

- If the team is at two strikes, players are not able to use the _Scream Blind-Play_ (or _Double Scream Blind-Play_) because then they would probably strike out and lose the game.
- In this situation, players can resort to the _Skipped Discard Chop Move_ instead. Instead of discarding their chop, they discard a card one-away from chop. This would normally indicate that they are _Chop Moved_. However, if no _Chop Move_ has occurred, the other player will be able to tell that an emergency is occurring.
- Players are only allowed to use the _Skipped Discard Chop Move_ if the team is at two strikes because using it risks losing the game by discarding some critical card.

### The Double Skipped Discard Chop Move

- Normally, the _Skipped Discard_ is when the player skips over one card. This signifies that the next player should _Chop Move_ one card.
- If two cards are skipped over, then the next player should _Double Chop Move_. If three cards are skipped over, then the next player should _Triple Chop Move_. And so forth.

### The Scream Push (Anxiety with a Chop Move)

- If a player performs a _Scream Discard Chop Move_ when the team is at 0 clues, it will generate a clue for the next player. Normally, the next player is supposed to _Chop Move_, and then give a _Stall Clue_. (They must give a _Stall Clue_ just in case they have 2 critical cards in a row. If they do, the next player will _Scream Discard Chop Move_ again.)
- However, the above situation does not make sense if the first _Scream Discard_ **locks** the next player. This is because if the next player gives a _Stall Clue_, then the team would be back to 0 clues again, and there would never be any way for the player who performed the _Scream Discard_ to ever clue anything else.
- This situation should be treated the same as _Anxiety_ - even though there is 1 clue available, the locked player **has** to play something to keep the game going.
- If nothing else in their hand makes sense to play, then the locked player should blind-play the _Chop Moved_ card.

<br />

## Variant-Specific Conventions

### The Flush Save

- This convention only applies to variants with a black suit.
- Normally, black 3 and black 4 are saved with a black color clue. However, if try to save a black 3 or black 4 like this when it is in a player's slot 1, then will interpret it as a _Flush Clue_ and will misplay it.
- Thus, when players are in this situation, they must save using number. Any number 3 or number 4 clue given to a slot 1 card must be treated as a potential save on a black 3 or a black 4, respectively.

### The Dark Chop Move

- This convention only applies to variants with a one-of-each suit where _One-Away Saves_ are turned off.
- Normally, we are only allowed to save black cards on chop. So, if a black clue is performed on a black card that is not on chop, and it is not a stalling situation, then it will normally look like a _Play Clue_ on that black card.
- However, if the black card is one-away from chop, and there is context to know that the card is not playable, then the clue is not a _Play Clue_ at all. Instead, it is understood that the clue is a _Dark Chop Move_, and the player should _Chop Move_ in a manner similar to the _5's Chop Move_.

### Implied Color Truth

- This convention only applies in variants with a rainbow suit.
- In a variant with a rainbow suit, when a player receives a _Play Clue_ on a new card with a color clue, then they know that there are two possibilities that the card could be.
- For example, in a 3-player game:
  - All of the 1's are played on the stacks and nothing is discarded.
  - Alice clues blue to Bob's slot 1 card.
  - Bob writes a note of "blue 2 or rainbow 2" on his card.
  - Bob considers what to do on his turn:
    - Cathy has a blue 3 on chop and is in danger of discarding it.
    - In a hypothetical where Bob happened to have the blue 2, if he played it, Cathy would probably discard the blue 3. This would be bad, since _Save Principle_ states that the team must not let any playable cards get discarded.
    - In a hypothetical where Bob happened to have the rainbow 2 and decided to clue the blue 3, this would be illegal - the blue 3 is not playable and the blue 3 is not allowed to be clued with a _Save Clue_ (since the other copy of blue 3 is not in the trash yet).
    - Thus, Bob must play his blue card and not worry about Cathy's chop. If Bob really does have the blue 2 and Cathy happens to discards the blue 3, then it will not be Bob's fault - it is Alice's responsibility to get the card.
- In a 2-player game, the logic from the previous example does not apply. The two players have to rely on each other - there is no-one else on the team to help out.
- Even though there are two possibilities for the card, players in this situation should just **assume** that they have the "true" copy of the suit, since it is more likely to be a normal suit than the rainbow suit. Subsequently, they can clue the card on chop directly.
- For example, in a 2-player game:
  - All of the 1's are played on the stacks and nothing is discarded.
  - Alice clues blue to Bob's slot 1 card.
  - Bob writes a note of "blue 2 or rainbow 2" on his card.
  - Bob considers what to do on his turn:
    - Alice has a blue 3 on chop and is in danger of discarding it.
    - Bob probably has a blue 2 in his hand, so since Alice is about to discard the blue 3, he is allowed to assume that it is the blue 2.
  - Bob clues blue to Alice.
  - Alice discards.
  - Bob plays the card and it happens to be a blue 2.
  - Alice plays the blue 3.
- Even if the card turns out to be a rainbow card, the other player will know what happened and can adjust.
- For example, in a 2-player game:
  - All of the 1's are played on the stacks and nothing is discarded.
  - Alice clues blue to Bob's slot 1 card.
  - Bob writes a note of "blue 2 or rainbow 2" on his card.
  - Bob considers what to do on his turn:
    - Alice has a blue 3 on chop and is in danger of discarding it.
    - Bob probably has a blue 2 in his hand, so since Alice is about to discard the blue 3, he is allowed to assume that it is the blue 2.
  - Bob clues blue to Alice.
  - Alice discards.
  - Bob plays the card and it happens to be a rainbow 2.
  - Alice knows from context that her blue card cannot be the blue 2, because Bob would have clued it earlier on.
  - Alice knows from context that her blue card is probably not the rainbow 3, because Bob would **not** assume that he has the rainbow 2 from a blue clue.
  - Thus, Alice knows that her blue card must be blue 3. She will hold on to the card for later.

<br />

## Optional Conventions

### Selfish Conventions

Optionally, play clues can have a [different meaning if they are selfish](https://github.com/iamwhoiamhahaha/hanabi/blob/master/2-player/Selfish_Conventions.md).

### Number Mute

Optionally, you can play with [specific conventions](https://github.com/iamwhoiamhahaha/hanabi/blob/master/2-player/Number_Mute_Conventions.md) for "Number Mute" variants.

### Score Hunting

If you are trying to get a perfect score on a difficult variant, then use the conventions in [Jeff's score hunting guide](https://github.com/iamwhoiamhahaha/hanabi/blob/master/2-player/Score_Hunting_Guide.md).
