---
id: level-7
title: Level 7 - End-Game
---

import EndGamePuzzle1 from '@site/image-generator/yml/level-7/end-game-puzzle-1.yml';
import EndGamePuzzle2 from '@site/image-generator/yml/level-7/end-game-puzzle-2.yml';
import EndGamePuzzle3 from '@site/image-generator/yml/level-7/end-game-puzzle-3.yml';

## Conventions

<br />

### End-Game Threshold

- Towards the end of the game, the strategy of the team will change. In most games, you stop becoming concerned with efficiency and become more concerned with *Tempo* - every card needs to play **right now** before the game ends!
- Thus, since clues can mean different things depending on whether you are in the *Mid-Game* or the *End-Game*, you need to be able to keep track of when the *End-Game* has arrived.
- *Pace* is used to determine *End-Game* status. If pace is **less than the number of players**, the *End-Game* has arrived.
  - On [Hanab Live](https://hanab.live), pace will turn yellow when this occurs.
- If pace is **less than the number of players / 2**, you should be very careful with discarding. It might still be the best thing to do, but if there are enough clues in the bank, it is usually better to *Burn* a clue (meaning to deliberately waste a clue).
- If pace is 0, no more discards can happen in order to get the maximum score.
- If pace is below 0, it is impossible to get the maximum score.

<br />

### No Chop Moves in the End-Game

- In the *Early Game* and the *Mid-Game*, it is often useful to *Chop Move* a card for later. The strategic point of a *Chop Move* is that it saves a potentially important card for later on.
- In the *End-Game*, it does not make any sense to save a card for later, because there is no "later" - the team has run out of time! For this reason, *Chop Moves* are "turned off" in the *End-Game*.
- If a player gives a clue that looks like a *Chop Move* in the *End-Game*, then players should reinterpret it as the next-simplest possible interpretation. In practice, this usually means a *Stall Clue*.

<br />

## Special Moves

<br />

### The Positional Discard (Indicating a Play with a Discard)

- Normally, when players discard, they discard their chop card, because discarding anything else could lose an important card.
- However, this does not apply at the end of the game. At the end of the game, if a player can see every card, then they can infer that all of the unknown cards in their hand are just trash. Subsequently, players in this situation can discard any card that they want, and it won't make a difference.
- Thus, players in this situation can communicate information based on which card they discard. We agree that if a player discards a weird slot, it communicates that the chosen slot matches a slot in someone else's hand that should be blind-played. This is called a *Positional Discard*.
- One *Positional Discard* gets one blind-play from another player.
- After a *Positional Discard*, if two or more players have a playable card on the same slot, then the blind-play is always targeted at the final player with the playable card.

<br />

### The Positional Misplay (Indicating a Play with a Misplay)

- Sometimes, a player will want to perform a *Positional Discard*, but it won't work because the other player will interpret it as a normal discard.
- For example, in a 4-player game:
  - All the 4's are played on the stacks.
  - There are 2 cards left in the deck.
  - Alice has 0 clues available.
  - Alice sees that every card needed by the team is currently present in other player's hands.
  - Alice has no clued cards in her hand. Thus, her chop is slot 4.
  - Donald has an unclued red 5 on his slot 4.
- In this example, if Alice tried to perform a *Positional Discard* from slot 4, it would not work, because Donald expects Alice to discard slot 4.
- In order to more strongly communicate the "play this slot" message, players in this situation can instead misplay their chop card. Since the rest of the team can see that the card misplayed for "no reason", they can deduce that it was a *Positional Misplay*.
- One *Positional Misplay* gets one blind-plays from another player (as long as the *Positional Misplay* was needed because a *Positional Discard* wouldn't work).

<br />

### The Double Positional Misplay (Indicating Two Plays with a Misplay)

- Normally, the *Positional Misplay* is used as a last-resort when a *Positional Discard* would not work. But what if a player does a *Positional Misplay* anyway, even if a normal *Positional Discard* would have worked? The player must be trying to communicate something extra.
- We agree that the "extra message" is that two cards are promised to be playable instead of just one.
- One *Positional Misplay* gets two blind-plays from the team (as long as it was "unnecessary").

<br />

### The Distribution Clue

- In the *End-Game*, when a player has many playable cards, there is the risk that they will not be able to play all cards before the end of the game.
- Thus, it might make sense to spend a clue to duplicate one of their playable cards in someone else's hand. This would violate *Good Touch Principle*, but it would relieve the player with the loaded hand from some of the card-playing burden.
- Since it distributes plays more evenly throughout the team, this is called a *Distribution Clue*. *Distribution Clues* better satisfy *Team Distribution Principle*.

<br />

## General Principles

<br />

### Team Distribution Principle

- In general, it is better for useful cards to be distributed **evenly** throughout the team. This is especially important in 5-player games.
- Thus, if one of your teammates has 3 out of 4 cards clued, it may be better for **them** to be the one giving the clues, and you to be the one discarding - even if their chop is known-trash.
- There are multiple reasons for this. First, you don't want them to get a *Locked Hand*, which is generally bad. Second, if they continue to draw playable cards, the game may end before they get a chance to play them all.

<br />

### The Pace +1 Rule

- Players can use *Pace* to determine if it is safe to discard. In general, a group can discard down to pace 0 and still get a perfect score.
- However, as a rule, if pace is +1 and one of the players on your team **does not** have any playable cards, then you cannot discard - **you must let them perform the final discard**.
- If both you and another player do not have any playable cards, then you can do the final discard - the team won't be able to get a perfect score anyway. But if you **could** have an unknown playable card in your hand, then you should be very careful about discarding, because it could ruin a perfect score.

<br />

### Burning (End-Game Stalling)

- In the *End-Game*, often times there are still a lot of cards yet to be played. Thus, you need to be very careful when discarding, since by drawing a card you can make the game end before everyone has a chance to play all of the cards.
- If there are enough clues available, you can choose to stall, by giving a low-value clue (or even a completely useless clue). This is referred to as *Burning* a clue.
- The best way to give a useless clue is to re-clue cards which are already known to be playable.
- Give a *Burn Clue* if:
  - There is a possibility that the game can be completed without anyone discarding from now on.
  - You have two or more useful cards in your hand, and you want to follow *Team Distribution Principle*.
- Do not give a *Burn Clue* if:
  - The end-game has not started yet (see the *End-Game Threshold*).
  - You know that someone else will have to discard in the future.

<br />

### End-Game Strategy

- The previous three sections introduce the *End-Game* at a high-level. When the *End-Game* arrives, you should probably be changing the way you play.
- However, giving specific advice for the *End-Game* is very difficult - things vary widely based on the deal and there are a lot of different things to consider.
- So, you will need to think through each *End-Game* yourself, one step at a time. Ask questions like:
  - Which cards are left in the deck that we need?
  - What is the probability of drawing those cards?
  - Who should be drawing those cards?
  - Does stalling produce a line that is better than playing?

## Questions for Level 7

<!-- lint disable no-undefined-references -->

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- There are 4 cards left in the deck, and no clues available. All remaining useful cards are gotten.
- What action should Alice perform?

</TabItem>
<TabItem value="solution">

- It might be tempting for Alice to play her red 4 to allow Cathy to play her red 5, but in fact, doing so will cost the game.
- This is because the limiting factor is Cathy's ability to play all of her 5s before the deck runs out, and to allow this, the team needs clues in order to stall. Discarding gives back a clue, but playing the 4 does not.
- After counting carefully, Alice finds that she must discard and hold on to her 4 until the deck runs out.
- Bob may freely play his 5, as this generates a clue, but he must ensure that Cathy successfully plays a 5 on this turn, so he may have to clue Cathy to single out her red 5.

</TabItem>
</Tabs>

<EndGamePuzzle1 />

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- There are 5 cards left in the deck, and 3 clues available. The only clued cards are Alice's 5s.
- What action should Alice perform?

</TabItem>
<TabItem value="solution">

- It might be tempting for Alice to clue red to Donald, but in fact, doing so converts a guaranteed winning endgame into a very likely winning endgame.
- This is because the game is guaranteed to end before Alice can make five turns. It is quite possible that Alice will draw two more 5s, and if she takes a turn off to clue the admittedly great finesse, she may not have time to play everything.
- After counting carefully, Alice finds that she must focus on playing her 5s, and let the team figure out the red suit.
- It is quite likely that they will use three clues to get all the red cards, but at this point in the game, cluing each playable card separately is sufficient to win.

</TabItem>
</Tabs>

<EndGamePuzzle2 />

<Tabs
  defaultValue="question"
  values={[
    {label: 'Question', value: 'question'},
    {label: 'Solution', value: 'solution'},
  ]}>
<TabItem value="question">

- There are 2 cards left in the deck, and 3 clues available. No one has any clued cards. One copy of the red 3 is in the discard pile, but Alice has not seen any red 4s yet.
- What action should Alice perform?

</TabItem>
<TabItem value="solution">

- Alice sees the red 3 in Donald's hand and the red 5 in Bob's hand. If Alice has a red 4, the situation is very simple; the team will clue the red cards, and then 3,4,5 can be played.
- However, it is possible that both red 4s are still in the deck. In this case, there would be no time to play the 5 after playing the 4.
- Alice should discard. She is guaranteed to either have had a red 4 in her hand, or to draw one of the copies. Since the team should have chop moved a unique red 4 by now, she should not expect to discard away the win by doing so.
- The team can now clue Alice's red 4 to *Finesse* the red 3, and then the red 5 to close out the game.

</TabItem>
</Tabs>

<EndGamePuzzle3 />
