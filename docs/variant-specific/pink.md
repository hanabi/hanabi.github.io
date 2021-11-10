---
id: pink
title: Pink
---

import Promise from '@site/image-generator/yml/extras/variant-specific/pink/promise.yml';
import PromisePrompt from '@site/image-generator/yml/extras/variant-specific/pink/promise-prompt.yml';
import PromptRankException from '@site/image-generator/yml/extras/variant-specific/pink/prompt-rank-exception.yml';
import PlayClueLie1s from '@site/image-generator/yml/extras/variant-specific/pink/play-clue-lie-1s.yml';
import PlayClueLieMismatch from '@site/image-generator/yml/extras/variant-specific/pink/play-clue-lie-mismatch.yml';
import FixClue1s from '@site/image-generator/yml/extras/variant-specific/pink/fix-clue-1s.yml';
import FixPromise from '@site/image-generator/yml/extras/variant-specific/pink/fix-promise.yml';
import FixClue from '@site/image-generator/yml/extras/variant-specific/pink/fix-clue.yml';
import ChoiceTempo from '@site/image-generator/yml/extras/variant-specific/pink/choice-tempo.yml';
import ChoiceFinesse from '@site/image-generator/yml/extras/variant-specific/pink/choice-finesse.yml';
import Positional from '@site/image-generator/yml/extras/variant-specific/pink/positional.yml';
import BubblegumFinesse from '@site/image-generator/yml/extras/variant-specific/pink/bubblegum-finesse.yml';
import BubblegumBluff from '@site/image-generator/yml/extras/variant-specific/pink/bubblegum-bluff.yml';
import TurnaboutEjection from '@site/image-generator/yml/extras/variant-specific/pink/turnabout-ejection.yml';
import FakeFinesse from '@site/image-generator/yml/extras/variant-specific/pink/fake-finesse.yml';
import Promise5Stall from '@site/image-generator/yml/extras/variant-specific/pink/promise-5stall.yml';
import Promise5ChopMove from '@site/image-generator/yml/extras/variant-specific/pink/promise-5cm.yml';
import Promise5Pull from '@site/image-generator/yml/extras/variant-specific/pink/promise-5pull.yml';

These conventions apply to any variant with a pink (touched by all ranks) suit.

<br />

## Level 8 - Basic Pink Principles

### Pink Promise

- When a pink card is focused by a rank clue, the number must match the true identity of the card. In other words, the focused card is *Promised* to match the number of the rank clue.
- *Pink Promise* applies to all clues: *Play Clues*, *Save Clues*, *5 Stalls*, etc.
- For example, in a 3-player game:
  - Cathy has a pink 2 on chop followed by a blue 5.
  - Alice and Bob need to give a *Save Clue* to both the pink 2 and the blue 5.
  - If Alice gave a number 5 clue, it would save both of the cards in one fell swoop, since a number 5 clue would touch the pink 2.
  - However, doing that would break *Pink Promise*, since once Cathy learns that her slot 5 card is a pink card, she will always assume that it is a pink 5.
  - Thus, Alice gives a number 2 clue as a *2 Save* on the pink 2, and then Bob clues a number 5 clue as a *5 Save* on the blue 5.

<Promise />

- *Pink Promise* is the **most important** pink convention! If you need to handle a tricky situation with pink cards, then make sure you first satisfy *Pink Promise* so that it is clear to the team what is going on.

### The 1's Assumption

- Just like in a normal game, when a player gets clued about two or more 1's, then they should play all of them in the normal order.
- In other words, even though the non-focused 1's *could* be non-1 pink cards, players are expected to *assume* that they are real 1's.
- This assumption does **not** apply to the other ranks. For example, if all the 1's are played on the stacks, and a player has a card in their hand with a single positive number 2 clue on it, then they cannot play the 2, because they might be misplaying a pink 5.

### No Order Chop Moves

- Even though we have the *1's Assumption* convention, it is still possible that a player will give a number 1 clue that touches a bunch of 1's and an unplayable pink card.
- In this situation, a *Fix Clue* will need to be given in the future. (*Pink Fix Clues* are covered later on.) But the first card that will be played from the clue will always be a real 1.
- Thus, in pink variants, players are not allowed to perform an *Order Chop Move*, because they could be misplaying a pink card.

### Good Touch Principle

- Due to the nature of pink cards being touched by a lot of different kinds of clues, they are a bit easier to duplicate than a normal suit, or even a rainbow suit.
- However, just like any other suit, *Good Touch Principle* still applies to pink cards. Players should:
  - do their best to not duplicate pink cards
  - assume by default that the remaining pink cards in their hand are "good"

### Prompts with Pink Promise

- The *Pink Promise* convention does **not** change how *Prompts* work - players are still expected to play the left-most card into a *Prompt* (or a *Priority Prompt*), just like they would in any other variant.
- For example, in a 3-player game:
  - Red 1 is played on the stacks.
  - Alice clues number 2 to Bob, touching his slot 2, slot, 3 and slot 5. This must be a *2 Save*.
  - Bob marks his slot 5 card as a true 2, because of *Pink Promise*. The cards on slot 2 and slot 3 could be 2's, but are not necessarily 2's.
  - Later on, Alice clues red to Cathy, touching a red 3 as a *Play Clue*.
  - Bob knows that he is *Prompted* for the red 2. Bob has three cards in his hand marked with a number 2 clue. Even though Bob knows for sure that slot 5 is a 2, Bob knows that the *Prompt* simply calls for the left-most card.
  - Bob plays the red 2 from slot 2.

<PromisePrompt />

### The Pink Prompt Rank Exception

- Normally, *Prompts* take precedence over *Finesses*. This means that if a card in a player's hand has one or more positive clues on it that "match", they should never blind-play their *Finesse Position* and instead play their left-most clued card.
- This rule does **not** apply to potential pink cards that only have a single rank clue on them (and the rank on them does not match the rank of the promised card). In this situation, players should prefer playing their *Finesse Position* instead of playing the clued card.
- For example, in a 3-player game:
  - All of the 2's are played on the stacks.
  - Alice clues pink to Cathy, touching a pink 4 on slot 1 as a *Play Clue*.
  - Bob knows that this is either a *Prompt* or a *Finesse* on the pink 3.
  - Bob's slot 2 card and slot 3 card have a single number 4 clue of them (and no other clues). Thus, the pink 3 could technically be Bob's slot 2 card.
  - Bob knows that *Prompts* normally take precedence over *Finesses*. However, Bob also knows that *Prompts* do not apply to pink cards with a rank mismatch. This is currently the case for him since he is promised a 3 and his clued card has a number 4 clue on it.
  - Thus, Bob plays his *Finesse Position* card as pink 3.

<PromptRankException />

### Remaining 1's After All the 1's Have Been Played

- Often times, in the beginning of the game, a player will receives a number 1 clue that touches a bunch of 1's. In these situations, they will play them all from oldest to newest (using the *1's Assumption*).
- If all of the 1's have been successfully played on the stacks and a player *still* has 1's remaining in their hand, they should mark them as useful pink cards and hold on to them for later.
  - In other words, they should **not** assume that that they have the next playable pink card (e.g. pink 2).
- Later on, if a pink card is *Prompted* from their hand, the player should play the 1.
  - In other words, the *Pink Prompt Rank Exception* does not apply to these cards, because they are considered to be "filled-in" as a pink card.
- This same concept applies to remaining 2's after all of the 2's have been played, and so forth.

<br />

## Level 9 - Violations of *Pink Promise* That Don't Require a Fix

### The Pink Play Clue Lie (With Multiple 1's)

- Players can violate *Pink Promise* with a number 1's clue if all of the cards will successfully play.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues number 1 to Bob, touching a red 1 on slot 1, a pink 3 on slot 2, a pink 2 on slot 3, and a pink 1 on slot 4.
  - Bob knows that from *Good Touch Principle* and the *1's Assumption* that all of his 1's are good, so he can play all of them from oldest to newest.
  - Bob plays the pink 1 from slot 4.
  - On his next turn, Bob plays the pink 2 from slot 3. Bob is immediately surprised that this is not a real 1, but he knows that this kind of thing is allowed and that he should continue to play his remaining 1's.
  - On his next turn, Bob plays the pink 3 from slot 2. Bob is again surprised that this is not a real 1, but he knows that this kind of thing is allowed and that he should continue to play his final 1.
  - On his next turn, Bob plays the red 1 from slot 1.

<PlayClueLie1s />

### The Pink Play Clue Lie (With a Mismatched *Play Clue* That Touches Other Cards)

- Players can also violate *Pink Promise* if they are giving a *Play Clue* and the lie will be resolved when the player who is clued plays their focused card.
- For example, in a 3-player game:
  - Pink 3 and red 2 are played on the stacks.
  - Alice clues number 3 to Cathy, touching a pink 4 on slot 1 and a blue 3 on slot 2.
  - Bob discards.
  - Cathy plays the card on slot 1, thinking that it is a red 3. It is actually the pink 4.
  - Cathy knows that Alice broke *Pink Promise* and that she was lied to, but that it was a *Pink Play Clue Lie*. Cathy knows that Alice likely did things this way because she wanted a 2-for-1 (to pick up some useful 3 "for free") instead of just a 1-for-1 on just the pink 4.

<PlayClueLieMismatch />

<br />

## Level 10 - Pink Fix Clues

### The Pink Fix Clue (on 1's)

- Normally, when someone receives a number 1 clue that touches a bunch of 1's, they will play all of those 1's from oldest to newest.
- If a subsequent clue "fills in" one of the 1s to be a pink card, then the player will **not** play that card anymore (because it could just be any pink card in the game).
- For example, in a 3-player game:
  - Alice clues number 1 to Bob, touching three 1's in slot 1, slot 2, and slot 3.
  - Bob plays slot 3 and it is a red 1.
  - Cathy discards.
  - Alice discards.
  - Bob plays slot 2, and it is a blue 1.
  - Cathy discards.
  - Alice clues number 5 to Bob, touching a 5 on his chop as a *5 Save*. This also "fills in" the 1 to be a pink card.
  - Bob knows that the pink card in his hand *could* be a pink 1. However, it could also be any other pink card in the game. Bob knows that when 1's are filled in to be pink, they should not be played anymore.
- *Pink Fix Clues* do not necessarily have to be performed "just in time". In other words, **any** rank clue that "fills in" a pink card should stop it from being played, even if the clue was early.

<FixClue1s />

### The Pink Fix Promise (PFP)

- First, see the section on the *[Pink Fix Clue (on 1's)](#the-pink-fix-clue-on-1s)*
- Normally, *Pink Promise* only applies when a pink card is the focus of a clue. However, as an exception, *Pink Promise* also applies to a *Pink Fix Clue* that stops a card marked with a number 1 clue from misplaying.
- For example, in a 3-player game:
  - Alice clues number 1 to Bob, touching three 1's in slot 1, slot 2, and slot 3.
  - Bob plays slot 3 and it is a red 1.
  - Cathy discards.
  - Alice discards.
  - Bob plays slot 2, and it is a blue 1.
  - Cathy discards.
  - Alice clues number 3 to Bob, touching a 3 on his chop. This also "fills in" the 1 to be a pink card.
  - Bob knows that the pink card in his hand could technically be a pink 1. However, Bob also knows that when 1's are filled in to be pink, they should not be played anymore.
  - Thus, Bob knows that the point of Alice's clue was a *Fix Clue* to stop him from playing the pink card. The 3 on his chop could be any 3 in the game. Furthermore, Bob knows that *Pink Promise* applies to this *Fix Clue* and that his pink card should be a pink 3.

<FixPromise />

- As an exception, *Pink Fix Promise* does **not** apply when the *Fix Clue* is a number 2 clue or a number 5 clue and the newly introduced card was on chop. An example of this can be found in the [previous section](#the-pink-fix-clue-on-1s). (In the example in this section, Bob's pink card is not necessarily a pink 5; it could be any pink card in the game.)

### Pink Fix Clues (in general)

- Normally, if a clue re-touches pink cards that are known to be pink, it is treated as a *Pink Choice Tempo Clue* or a *Pink Choice Finesse*.
- However, what if the indicated slot is not a pink card? That does not make sense, as *Pink Choice* is typically only used to communicate a play about a pink card.
- In this situation, it must not be a *Play Clue* at all. Instead, it is a *Fix Clue* - the rank of the left-most pink card must match the clue.
- For example, in a 3-player game:
  - All of the 3's are played on the stacks.
  - Bob has a known pink card on slot 4 and a known pink card on slot 5.
  - Alice clues number 3 to Bob, which re-touches the pink cards on slots 4 and 5.
  - Normally, Bob would interpret this as a *Pink Choice Tempo Clue* and play his slot 3 card. However, his slot 3 card is completely unclued.
  - Bob instead knows that this must be a *Pink Fix Clue* and that his left-most pink card (on slot 4) must be exactly the pink 3.
  - Bob discards his slot 4 card as pink 3.

<FixClue />

<br />

## Level 12 - Positional Moves

### Pink Tempo Clues

- If a player gives a *Tempo Clue* to a single pink card, it is never a *Tempo Clue Chop Move*.
- This is because it is fairly valuable to get pink cards out of the hand as soon as possible in case blocking cards are drawn.

### The Pink Choice Tempo Clue

- When one or more pink cards are retouched with a pink clue, the interpretation should be as normal: play the cards from left to right as a *Tempo Clue* (or a *Double Tempo Clue*).
- When one or more pink cards are retouched with a rank clue, and there are no "new" cards introduced (or, if the only "new" cards introduced are trash), then extra information can be conveyed by what rank is chosen.
- The rank chosen should correspond to the slot that they should play.
- For example, in a 3-player game:
  - Bob has two pink cards clued in his hand on slot 3 and slot 4. He does not know the rank of either card.
  - Alice clues number 4 to Bob, which touches both pink cards and nothing else.
  - Bob knows that a rank 4 clue means to play slot 4, so he plays his right-most pink card.
  - Bob holds on to the other pink card for later, knowing that the *Pink Choice Tempo Clue* only "gets" one card.

<ChoiceTempo />

### The Pink Choice Finesse

- The concept of *Pink Choice* can also be used to initiate a *Finesse* on a pink card.
- For example, in a 3-player game:
  - No cards are played on the stacks.
  - Cathy has a clued pink 3 in slot 3 and a clued pink 2 in slot 4. She does not know the rank of either card.
  - Alice clues number 4 to Cathy, which touches both pink cards and nothing else.
  - Bob knows that a number 4 clue means to play slot 4, so the pink 2 must be playable right now. Bob plays his *Finesse Position* card as pink 1.
  - Cathy plays the pink 2 from slot 4.

<ChoiceFinesse />

### Pink Positional Clues

- Towards the end of the game, a player may have multiple pink cards in their hand, with one of them being playable. If the playable pink card is in between other pink cards, it can be difficult to "get" the card to play.
- In cases where a number clue would be nonsensical, it is an indication to the player with two or more pink cards of which slot to play.
- For example, in a 3-player game:
  - The pink 4 is played and all of the other 3's are played.
  - Bob's hand is completely unclued.
  - Alice clues Bob number 2, touching slot 1, slot 2, and slot 3.
  - Bob knows that since all of the 3's are already played, this might be a *Trash Chop Move*. If this is the case, slot 1 is focused, and he should discard that card, and then chop move slot 4 and slot 5.
  - However, Bob also knows that it is near the end of the game and there are no cards left to chop move, so this interpretation does not make much sense.
  - Thus, Bob knows that this must be a *Positional Clue*, and he plays his slot 2 card as the pink 5.
- *Positional Clues* are different from *Pink Choice Tempo Clues* in that they can touch new cards. (*Pink Choice Tempo Clues* only re-touch known pink cards.) For this reason, *Positional Clues* can typically only be done at the end of the game when the clue is not likely to be interpreted as anything else.

<Positional />

<br />

## Level 19 - Bubblegum Moves & Other Special Moves

### The Bubblegum Prompt & The Bubblegum Finesse

- Normally, when players give a clue to a pink card with a number, they exactly match the number of the card in order to satisfy *Pink Promise*.
- Some common situations where players violate *Pink Promise* are covered in the two different *Pink Play Clue Lie* sections above.
- Rarely, it is also possible to lie about the rank of a pink card that is not yet playable. Doing so communicates the slot number of where the connecting card is.
- For example, in a 4-player game:
  - All the 1's are played on the stacks
  - Donald has a pink 3 in his hand clued with pink. He does not know the rank of the card.
  - Alice clues Donald number 4, which only touches the pink 3.
  - Bob knows that since the pink 3 is the focus of the clue, it must be playable right now. However, if this was a normal *Finesse* (and Bob had a pink 2 on his *Finesse Position*), then Alice would have used a pink clue or a number 3 clue (to match the real rank of the card, satisfying *Pink Promise*).
  - Bob knows that since Alice did not do either of these things, she must be trying to communicate something extra. This must be a *Bubblegum Finesse*, indicating which slot the pink 2 is in.
  - Bob sees that Cathy has the pink 2 in slot 4. Thus, he knows that the *Bubblegum Finesse* is not on him. Bob discards.
  - Cathy goes through the same steps as Bob. Cathy does not see the pink 2 anywhere else, so she knows that the *Bubblegum Finesse* is on her. Cathy blind-plays pink 2 from slot 4.
  - Donald knows that since Cathy played her slot 4 card, this was a *Bubblegum Finesse*. Donald's pink card must be the connecting card. Donald plays the pink 3.

<BubblegumFinesse />

- *Bubblegum Finesses* can only be used to get pink cards.
- Note that *4 Charms* have precedence over *Bubblegum* moves.

### The Bubblegum Bluff

- Similar to a *Bubblegum Finesse*, it is also possible to perform a *Bubblegum Bluff*.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues number 3 to Cathy, touching a pink 2 on slot 5.
  - Bob knows that Alice is violating *Pink Promise*. This must mean that he is supposed to play his slot 3 card.
  - Bob blind-plays slot 3 and it is a red 1.
  - Cathy knows that if this was a *3 Bluff*, then Bob would have played his *Finesse Position*. So it cannot be a *3 Bluff*.
  - Thus, Cathy knows that this must be a *Bubblegum* clue. Since red 1 is not a pink card and Alice was in *Bluff Seat* for Bob, this must be a *Bubblegum Bluff*.
  - Cathy marks her slot 5 card as the one-away-from-playable pink card, the pink 2.

<BubblegumBluff />

- *Bubblegum Bluffs* can only be performed on non-pink cards; otherwise, it will look like a *Double Finesse* with one part *Bubblegum Finesse* and one part normal *Finesse*.
- Note that it is impossible to *3 Bluff* and *Bubblegum Bluff* at the same time.

### The Bubblegum Slide

- If a *Bubblegum Prompt* or a *Bubblegum Finesse* is telling a player to play a card in a slot that has negative pink, then that is nonsensical.
- In this situation, if there is no other possible interpretation for the clue other than a *Bubblegum Prompt* or a *Bubblegum Finesse*, and it is unlikely for the cluer to be making a mistake, then the target slot should "slide" to the right.
- If the slot immediately to the right is also impossible to be a pink card, then it should continue to slide right until it finds a pink card, wrapping around to the other side of the hand if necessary.

<br />

## Level 19 - Other Special Moves

### The Turnabout Ejection

- If a player violates *Pink Promise* to falsely indicate a pink 5 as a 1, **or** a playable pink card as a 5, this is a dangerous lie that must be immediately resolved.
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

<TurnaboutEjection />

- If a *Turnabout Ejection* occurs from a number 1 clue that also touches other 1s, the non-focused cards should still be assumed to be 1s (using the *1's Assumption* convention).
- During the *Early Game*, *Turnabout Ejections* take precedence over *Bad Chop Move Ejections (with 5's)*. Afterwards, *Bad Chop Move Ejection* takes precedence.
- *Turnabout Ejections (with 5's)* can only be performed with non-trash cards.
- *Turnabout Ejections (with 1's)* cannot be performed once all 1's have been played.

### The Pink Fake Prompt & The Pink Fake Finesse

- First, see the section on the *[Pink Play Clue Lie](#the-pink-play-clue-lie-with-a-mismatched-play-clue-that-touches-other-cards)*.
- In the *Pink Play Clue Lie*, *Pink Promise* is violated when giving a *Play Clue* to a playable pink card. However, no special actions need to be taken from anyone else on the team, because the lie will automatically resolve when the card is played.
- In some special situations, it is possible to give a *Pink Play Clue Lie* that will **not** resolve automatically. In this situation, the next player must play a card to "fix" the lie.
- For example, in a 3-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice gives a number 2 clue to Cathy, touching a pink 1 on slot 2. (Cathy does not have a playable card on slot 1.)
  - Bob knows that if he does nothing, Cathy will go on to interpret this as a *Self-Finesse*, and play her *Finesse Position*, which will misplay.
  - Thus, Bob plays his *Finesse Position* as a *Pink Fake Finesse*. It is a blue 1 and it successfully plays.
  - From Cathy's perspective, Alice performed a *Finesse* on the blue 1 into the blue 2. Cathy plays the blue 2, but it is actually the pink 1. Now, Cathy knows that Alice performed a *Pink Fake Finesse*.
- Rarely, *Pink Fake Finesses* can be performed *Out of Position*, but only if the *Finessed* card plays into an ancillary-touched card. (This turns the "fake" *Finesse* into a "real" *Finesse* on the non-focused card.)

<FakeFinesse />

https://github.com/hanabi/hanabi.github.io/pull/731

### The Taffy Bluff

- First, see the section on the *[Bubblegum Bluff](#the-bubblegum-bluff)*.
- A *Bubblegum Bluff* is when *Pink Promise* is violated on a *one-away-from-playable* pink card to perform a *Bluff*.
- It is also permissible to violate *Pink Promise* on a *two-away-from-playable* pink card to perform a *Bluff*. This is called a *Taffy Bluff* to distinguish it from the former case.
- For example, in a 3-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues number 2 to Cathy, touching a pink 3 on slot 5. (The pink 3 is *two-away-from-playable*.)
  - Bob knows that Alice is violating *Pink Promise*.
  - If he plays slot 1, then Alice will mark it as the matching 2 and will misplay it.
  - Thus, this must be a *Bubblegum Double Finesse*, meaning that Bob should play the slot that matches the rank that Alice chose.
  - Bob tries to blind-play pink 1 from slot 2, but it is a red 1 instead. It is now revealed to Bob that this was a *Taffy Bluff* instead of a *Bubblegum Double Finesse*.
  - Cathy knows that if her clued card was really a 2, Bob would have played slot 1. Thus, it cannot be a 2. Furthermore, there are no *Ejections* that match this situation, so this must be a *Taffy Bluff* on a pink 3.
- It is also possible to perform a *Taffy Bluff* with cards other than a pink 3. For example:
  - A *two-away-from-playable* pink 4 that is clued with a number 3 clue would cause a blind-play from slot 3.
  - A *two-away-from-playable* pink 5 that is clued with a number 4 clue would cause a blind-play from slot 4.
- *Bubblegum Bluffs* have precedence over *Taffy Bluffs*. In other words, you are only supposed to assume a *Taffy Bluff* if a *Bubblegum Bluff* is impossible.

<br />

## Level 19 - Edge Cases

### Trash Finesses & Trash Bluffs in Pink

- When a *Trash Finesse* or a *Trash Bluff* happens in a normal variant, if more than one card is touched, then all of the touched cards are known to be trash.
- When a *Trash Finesse* or a *Trash Bluff* happens in a variant with a pink suit, if more than one card is touched, and the clue was a number clue, it is possible that only the focused card was trash, and that the other cards touched are useful / critical pink cards.
- In this situation, after discarding the focus of the *Trash Finesse* or *Trash Bluff*, the player should then hold on to the other touched cards.

### Trash Pushes in Pink

- When a *Trash Push* happens in a normal variant, if more than one card is touched, then all of the touched cards are known to be trash.
- When a *Trash Push* happens with a rank clue in a variant with a pink suit, if more than one card is touched, it is possible that only the card on chop was trash, and that the other cards touched are useful / critical pink cards.
- In this situation, after blind-playing the *Trash Pushed* card, the player should first discard the card that initiated the *Trash Push* (the oldest card) and then hold on to the other touched cards.
  - In this situation, *Good Touch Principle* applies to the other touched cards. The other members of the team must give a *Fix Clue* to those cards if they are also trash.

### Pink Precedence

- Normally, non-variant-specific conventions always take precedence over variant-specific conventions.
- As an exception, the *Bubblegum Bluff* and the *Taffy Bluff* conventions usually take precedence over their non-variant-specific alternatives. Specifically:
  - The *Bubblegum* and *Taffy* conventions take precedence over *Rank Choice Ejection (with 2)*.
  - The *Bubblegum* and *Taffy* conventions take precedence over *Unknown Trash Discharge*.
  - The *Bubblegum Bluff* and *Taffy Bluff* holds equal precedence to *4 Charm*; the clued player must therefore write identity notes for either option.
  - A true *Bubblegum Finesse* takes precedence over *4 Charm*. (This is because, unlike in the *Bluff* scenarios, the pink blind-play "connects" to the rank clue).

### Pink Promise with a 5 Stall

- When a player performs a *5 Stall*, it is clearly a type of *Save Clue*. But if two or more 5's are touched as part of the clue, the focus of the clue is unclear.
- We define the focus of the clue to be the specific 5 that is closest to the chop.
- Thus, when a player knows for sure that a number 5 clue indicates a *5 Stall*, *Pink Promise* only applies to the 5 that is closest to the chop.
- For example, in a 3-player game:
  - The variant is "Pink (6 Suits)".
  - It is the *Early Game* and all of the *Play Clues* and *Save Clues* have been extinguished.
  - Bob has a completely unclued hand.
  - Alice clues number 5 to Bob, touching two 5's on slot 1 and slot 2.
  - Bob knows that this is a *5 Stall*. Bob knows that the clue is either focused on slot 1 or slot 2.
  - Because of the "Pink Promise with a 5 Stall" convention, Bob knows that since this clue is focused on slot 2.
  - Thus, *Pink Promise* applies to this card, so he marks slot 2 as a 5.
  - Later on in the game, another rank clue "fills in" Bob's slot 2 card to be a pink card. From *Pink Promise*, Bob knows that it must be exactly the pink 5.

<Promise5Stall />

### Pink Promise with a 5's Chop Move

- First, see the section on *[Pink Promise with a 5 Stall](#pink-promise-with-a-5-stall)*.
- When a player performs a *5's Chop Move*, it is clearly a type of *Save Clue*. But if two or more 5's are touched as part of the clue, the focus of the clue is unclear.
- We define the focus of the clue to be the specific 5 that is one-away from the chop. (This is similar to how *Pink Promise* works with a *5 Stall*.)
- Thus, when a player knows for sure that a number 5 clue indicates a *5's Chop Move*, *Pink Promise* only applies to the 5 that is one-away from the chop.
- For example, in a 3-player game:
  - The variant is "Pink (6 Suits)".
  - It is the middle of the game and no 5's are yet playable.
  - Bob has a completely unclued hand.
  - Alice clues number 5 to Bob, touching two 5's on slot 1 and slot 4.
  - Bob knows that this is a *5's Chop Move*, and marks his slot 5 card as being *Chop Moved*.
  - Bob knows that the clue is either focused on slot 1 or slot 4.
  - Because of the "Pink Promise with a 5's Chop Move" convention, Bob knows that since this clue caused him to *Chop Move*, it is focused on slot 4.
  - Thus, *Pink Promise* applies to this card, so he marks slot 4 as a 5.
  - Later on in the game, another rank clue "fills in" Bob's slot 4 card to be a pink card. From *Pink Promise*, Bob knows that it must be exactly the pink 5.

<Promise5ChopMove />

### Pink Promise with a 5 Pull

- First, see the section on *[Pink Promise with a 5's Chop Move](#pink-promise-with-a-5s-chop-move)*.
- When a player performs a *5 Pull*, it is clearly a type of *Play Clue*. But if two or more 5's are touched as part of the clue, then the focus of the clue is unclear.
- We define the focus of the clue to be the next to the "pulled" card. (This is similar to how *Pink Promise* works with a *5's Chop Move*.)
- Thus, when a player knows for sure that a number 5 clue indicates a *5 Pull*, *Pink Promise* only applies to the 5 that is next to the pulled card.
- For example, in a 3-player game:
  - The variant is "Pink (6 Suits)".
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 5 to Bob, touching two 5's on slot 1 and slot 2.
  - Bob knows that this is a *5 Pull*, because he sees that Cathy has a bunch of playable cards in her hand that Alice could have clued instead.
  - Bob blind-plays his slot 3. It is a red 1 and it successfully plays.
  - Next, Bob retroactively considers the implications of the *5 Pull*. Bob knows that the *5 Pull* was either focused on slot 1 or slot 2.
  - Because of the "Pink Promise with a 5 Pull" convention, Bob knows that since this clue was a *5 Pull*, it must be focused on slot 2 (the card that was next to the pulled card).
  - Thus, *Pink Promise* applies to this card, so he marks slot 2 as a 5.
  - Later on in the game, another rank clue "fills in" Bob's slot 2 card to be a pink card. From *Pink Promise*, Bob knows that it must be exactly the pink 5.

<Promise5Pull />
