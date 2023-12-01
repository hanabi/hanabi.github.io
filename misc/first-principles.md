# First Principles

## First Principles Don't Work

As a somewhat advanced Hanabi Group, we have a lot of conventions. Teaching a brand new player all of the conventions is difficult. To solve this problem, we have grouped the conventions into arbitrary "levels", so that new players can learn them bit by bit.

Another possible strategy to solve this problem would be to agree on some basic principles, and then have every convention flow from the basic principles. In that world, new players could just learn the first principles, and then use logic and reasoning to find out the resulting strategy that their teammate is intending. Unfortunately, this strategy does not work very well.

The first problem is that "first principles" collide with each other. When two first principles are in conflict, which one has precedence? In real games, this is messy: we want some principles to have precedence in certain situations, and other principles to have precedence in other situations. And you don't start to get an intuition for this until you have played hundreds and hundreds of games.

Another problem is that Hanabi is filled with situations where a clue could mean two or more things at the same time. Sometimes, in these types of situations, all of the possible clue interpretations would be "logical" and provide value. So there really isn't a clear way for a new player to "reason" themselves into the intended strategy in a consistent way, because they just might arrive at an entirely separately logical conclusion. Here, the only solution here is to strongly define a precedence and have players arbitrarily memorize it.

Thus, _First Principles_ are a nice idea, but do not work well enough in practice for a game as complicated as Hanabi. When you have a "simple" system that flows from a few basic principles, you often will have frustrating post-game reviews that are filled with arguments about what a clue "should" mean, and which _First Principle_ should take precedence in this particular situation. People often have strong intuitions about this that can not be reconciled! This problem is mostly solved by having a more strongly defined set of rules. Instead, our post-game reviews are focused on finding the most efficient moves and strategies within a shared framework, which is much more productive and fun!

<br>

## A First Principles List

If you absolutely had to come up with a set of _First Principles_ that our conventions "flowed from", you could do it, but it would not be very accurate or very useful or very good (as explained above). But if you did, it would look something like this:

<br>

### 1. Chop Principle

- The "chop" is the right-most (oldest) unclued card.
- When a player needs to discard and has no known safe discards, they should discard the chop card.

<br />

### 2. Minimum Clue Value Principle

- A given clue must either:
  - indicate sufficient information for **one or more previously unclued** cards to be played (as a _Play Clue_)
  - prevent the possible discard of **one or more previously unclued** cards that need to be saved (as a _Save Clue_)

<br />

### 3. Save Principle

- Cards that meet the following criteria must not be discarded:
  - only one copy remains (e.g. 5's or unplayed cards in the discard pile)
  - it is a 2 and not visible elsewhere in players' hands
  - it is currently playable and not visible elsewhere in players' hands
- When a card that needs to be saved is at immediate risk of being discarded, it must be indicated with a _Save Clue_ (or a _Play Clue_ if it happens to be playable).
- If a player receives a clue that could be either a _Save Clue_ or a _Play Clue_, they **must** consider both possibilities. Specifically, this means that the player must hold on to the card until they know for sure.

<br />

### 4. Good Touch Principle

- A safe discard is defined as:
  - a copy of a card that has already been played
  - a copy of a card that is in someone's hand and has been clued
- Safe discards should **not** be clued (unless there's an important reason to).
- Players should generally assume that any clued card in their hand will eventually be played.

<br />

### 5. Play Order Principle

- When a _Play Clue_ touches multiple cards, if it includes the chop, it's focused on the chop. (This is referred to as the _Chop-Focus_ convention.)
- Otherwise, the clue is focused on the newest (e.g. left-most) of cards that did not have a clue "on" them already.
- The non-focused cards may or may not be playable.

<br />

### 6. Left-Most Playable Principle

- When a player is expected to play a card (or know a card is playable) in a situation not covered by the _Play Order Principle_, the card to be played is the left-most of the various cards that are most likely to be it.

<br />

### 7. Information Lock Principle

- What is indicated by a clue is determined by the known information at the time the clue is given. Subsequent clues may build upon that information, but do not override it unless a direct conflict is evident.

<br />

### 8. Lie Principle

- Normally, players try to make their clues as clear as possible and convey the exact identity of a card.
- Rarely, players can use clues to trick other players into thinking that they have cards that they really don't.
- If this untruth **resolves immediately** (i.e. the very next turn), it is called a _Fib_. For intermediate and advanced players, _Fibs_ are legal and expected.
- If this untruth does **not resolve immediately**, it is called a _Lie_. _Lies_ are illegal. Players should **never** assume that they are _Lied_ to.

<br />

### 9. High Value Principle

- The highest value clue is expected. If a clue is given, it should be interpreted to be the highest value move available to that player.
- In other words, you can draw many important conclusions from the fact that a player did not do some other (potentially higher-value) move.
