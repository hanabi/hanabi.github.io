---
id: special-finesses
title: Special Finesses
---

import AmbiguousFinessePassBack from '@site/image-generator/yml/extras/special-finesses/ambiguous-finesse-pass-back.yml';
import BluffDupeLayeredFinesse from '@site/image-generator/yml/extras/special-finesses/bluff-dupe-layered-finesse.yml';
import CertainFinesseException from '@site/image-generator/yml/extras/special-finesses/certain-finesse-exception.yml';
import PropheticFinesse from '@site/image-generator/yml/extras/special-finesses/prophetic-finesse.yml';
import PropheticFinesse2 from '@site/image-generator/yml/extras/special-finesses/prophetic-finesse-2.yml';
import PatchFinesse from '@site/image-generator/yml/extras/special-finesses/patch-finesse.yml';
import DiseasedClandestineFinesse from '@site/image-generator/yml/extras/special-finesses/diseased-clandestine-finesse.yml';
import CursedFinesse from '@site/image-generator/yml/extras/special-finesses/cursed-finesse.yml';
import SurreptitiousFinesse from '@site/image-generator/yml/extras/special-finesses/surreptitious-finesse.yml';
import InvertedPriorityFinesse from '@site/image-generator/yml/extras/special-finesses/inverted-priority-finesse.yml';
import ShadowFinesse from '@site/image-generator/yml/extras/special-finesses/shadow-finesse.yml';
import ReverseShadowFinesse from '@site/image-generator/yml/extras/special-finesses/reverse-shadow-finesse.yml';
import UnnecessaryForcedReverse from '@site/image-generator/yml/extras/special-finesses/unnecessary-forced-reverse.yml';
import TrashPushInvertedFinesse from '@site/image-generator/yml/extras/special-finesses/trash-push-inverted-finesse.yml';

### The Ambiguous Finesse Pass-Back

- When an *Ambiguous Finesse* occurs, the first player will not play into the *Finesse*, and do something unrelated. At that point, it is usually clear that **another player** on the team **also** has the connecting card. Normally, that other player should then **immediately blind-play**, resolving the *Ambiguous Finesse* as fast as possible.
- However, in some specific situations, the second person **cannot** blind-play the card, or else a misplay would occur. In these situations, the second person has to **also** not play into the *Finesse*. This "passes" the blind-play back to the first person again.
- For example, in a 4-player game:
  - Blue 1 is played on the stacks.
  - Alice clues blue to Donald, touching a blue 4 as a *Play Clue*.
  - Bob sees that Cathy has the blue 2 on her *Finesse Position*. From his position, this must be a *Double Finesse*, with Cathy blind-playing the blue 2, and Bob blind-playing the blue 3 from his own *Finesse Position*. Bob discards.
  - Cathy sees that Bob has the blue 2 on his *Finesse Position* and the blue 3 on his *Second Finesse Position*.
  - Cathy also knows that the only reason that Bob would discard is if Cathy **also** had the blue 2 on her *Finesse Position*. Thus, Bob expects her to blind-play on this turn, and this is an *Ambiguous Finesse*.
  - Normally, Cathy would blind-play the blue 2 herself. However, in this situation, if she blind-plays the blue 2, then Bob would go on to misplay the other blue 2, thinking that it is blue 3.
  - Thus, Cathy must pretend like the *Finesse* is not on her after all, and force Bob to be the one to blind-play first. Cathy discards her chop card, passing the *Finesse* back to Bob.
  - Donald and Alice discard.
  - Bob knows that Cathy was supposed to blind-play the blue 2, but she didn't. He must also have the blue 2. Furthermore, he must also have the blue 3, as that would be an excellent reason for Cathy to pass the *Finesse* back to him. Bob will now blind-play blue 2 and blue 3.

<AmbiguousFinessePassBack />

- As a side note, you may be wondering why in the previous example Cathy does not blind-discard her blue 2 from her *Finesse Position* instead of discarding her chop. This is because it is possible that Cathy does **not** have the blue 2 on her *Finesse Position* and instead has some other unrelated playable card as a *Layered Finesse*. Thus, Cathy must play it safe and discard her chop.

<br />

### The Bluff that Causes a Blind-Play of a Known Dupe (Dupe Bluffs / Bluff Dupes)

- If a player performs a *Bluff* that causes a blind-play of a globally-known duplicated card, that is quite strange. Doing this is not very good, as it violates *Good Touch Principle* and does not accomplish very much in general.
- Players agree that this is not a *Bluff* at all, but instead a *Layered Finesse*. The player who blind-played the card should continue to blind-play cards until they find the promised card.
- This section also applies to *Priority Bluffs* that cause the blind-play of a duplicated card.
- For example, in a 3-player game:
  - All of the 2's are played on the stacks.
  - Alice has a globally-known red 3 in her hand. (It is "filled in" with both a red clue and a number 3 clue.)
  - Alice clues blue to Cathy, touching a blue 4 as a *Play Clue*.
  - Bob knows that this must be a *Finesse*, so he attempts to blind-play a blue 3 from his *Finesse Position*. Instead, he blind-plays a red 3.
  - Cathy discards her chop.
  - Alice discards her known red 3 (since it is already played and is now trash).
  - Bob knows that *Bluffs* that duplicate a card like this are supposed to be treated as *Layered Finesses*. Bob blind-plays his *Second Finesse Position* as blue 3 and it successfully plays.

<BluffDupeLayeredFinesse />

### Potential Priority Duplication & The Certain Priority Finesse (or Priority Certain Finesse)

- Normally, players can perform any particular type of *Finesse* either by giving a clue or by playing a card without *Priority*. For example, it is possible to both do a *Layered Finesse* (by giving a clue) and a *Layered Priority Finesse* (by playing a card).
- One exception to this rule is the *Certain Finesse*. When a player perform a *Certain Finesse*, it calls for a *Certain Discard*. However, when a player uses *Priority* to promise a card that could potentially be in their own hand, this should **not** induce a *Certain Discard*. The other players in this situation should just ignore the *Priority* and instead discard their chop card. (Doing it this way is much safer because it allow potential *Layered Finesses* as well as some slack for mistakes.)

<br />

### The Certain Finesse Clandestine Exception

- First, see the section on the *[Certain Finesse](../level-9.md#the-certain-finesse--the-certain-discard)*.
- This section outlines a specific and rare edge-case for *Certain Finesses*.
- We agree that *Bluffs* take precedence over *Certain Finesses*. This means that a *Certain Finesse* cannot normally be performed from *Bluff Seat*.
- *Certain Finesses* **can** be performed from *Bluff Seat* if it is strictly impossible to be a *Bluff*. In other words, this means that it is illegal for a player to perform a *Clandestine Finesse* on the very next player that targets a potentially duplicated card **and** the other player can rule out the possibility of a *Bluff*.
- For example, in a 3-player game:
  - All of the 2's & blue 3 is played on the stacks. Green 3 is in the discard pile.
  - Alice has an unknown 3 in her hand that happens to be the red 3.
  - Alice clues number 4 to Cathy, touching a red 4 as a *Play Clue*.
  - Bob knows that Alice could be trying to perform a *Finesse* on a red 3. Normally, he would blind-discard his *Finesse Position* card as a *Certain Discard* in order to pass this card back to Alice.
  - However, Bob also knows that this might be a *Bluff*. But wait - his *Finesse Position* card has negative blue on it. So anything that he blind-plays here would have to be a 3. Thus, this cannot be a *Bluff*, since a 3 would connect to 4 and look like a *Finesse*.
  - The only other possibility that Bob has to worry about is a *Clandestine Finesse*. For example, he could be blind-playing a green 3 **and then** a red 3 after that. If he blind-discarded, that could "kill" the green stack, since the other copy of green 3 is already discarded.
  - However, Bob **also** knows that you are not allowed to perform a *Clandestine Finesse* from *Bluff Seat* that could duplicate a card in your hand. Thus, he can discount both the possibility of a *Bluff* **and** the possibility of a *Clandestine Finesse*.
  - Bob performs a *Certain Discard* on his *Finesse Position* card and it is the red 3, successfully passing it back to Alice.

<CertainFinesseException />

- If someone performs a *Certain Discard* and you have two or more clued cards that could be the target, then you are not promised the order, only that you have the card clued somewhere in your hand. (This part works in the exact same way as a more-ordinary *Sarcastic Discard*.)

<br />

### The Prophetic Finesse (for 1's)

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

<PropheticFinesse />

- *Prophetic Finesses* can only be triggered by touching **exactly one 1**.
- *Prophetic Finesses* can only be triggered by using a number 1 clue. (Color clues cause a *[Prophetic Discharge](discharges.md#the-prophetic-discharge)*.)
- *Prophetic Finesses* can not be given in reverse.
- *Prophetic Finesses* can be *Layered*. In other words, in the previous example, if Cathy plays her *Finesse Position* and it is yellow 1, she will be surprised. However, Cathy will know that she is promised to have the blue 1, so she will go on to play the blue 1 from her *Second Finesse Position* on the next turn.
- *Prophetic Finesses* can also be given in situations that cannot be mistaken for *Trash Finesses*.
- For example, in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Alice clues number 1 to Donald, touching a single blue 1 on slot 3.
  - Just like in the previous example, Bob sees that this is a *Prophetic Finesse* (because Cathy has a blue 1 on her *Finesse Position*). Bob blind-plays his *Finesse Position*. It is a green 1 and it successfully plays.
  - Cathy sees that from Donald's perspective:
    - It will not look like a *Trash Finesse*, because no 1's were played at the time of the clue.
    - It will not look like a *Unknown Dupe Discharge*, since only a single 1 was clued.
  - Therefore, as soon Bob blind-plays, both Cathy and Donald can understand that it is a *Prophetic Finesse*.
  - Just like in the previous example, Cathy blind-plays the blue 1, and Donald marks his 1 as trash and *Chop Moves* his slot 4 card.

<PropheticFinesse2 />

### The Patch Finesse

- Sometimes, a player will initiate a *Layered Finesse* on a card that is behind a *one-away-from-playable* card. Normally, this would be quite bad, as the player would blind-play the *one-away-from-playable* card, and it would misplay.
- However, since the *Finesse* target is considered unplayable from the rest of the team, they can be tricked into blind-playing the exact card that makes the one-away card actually playable. This "patches" the *Layered Finesse* problem, and now the layer can be fully unwrapped without issues.
- For example, in a 5-player game:
  - All of the 1's are played on the stacks.
  - Alice clues red to Emily, which is a *Play Clue* on a red 4.
  - Donald has a blue 3 on his *Finesse Position*, followed by a red 2 and a red 3.
  - Bob discards. (We will return to Bob at the end.)
  - Cathy sees that she must have the red 2 and red 3 on her *Finesse Position*, because even though Donald has the red 2 and the red 3, they are behind an unplayable card (blue 3).
  - Cathy tries to blind-play red 2 and it is instead a blue 2.
  - Donald knew that Alice's clue was *Finessing* him, since no-one else on the team has any red cards. So, he gasps in surprise when Cathy blind-plays for seemingly no reason.
  - However, Donald knows that he should trust Alice and he should trust Cathy, so he continues to assume that he has the red 2.
  - Donald tries to blind-play red 2 and it is instead the blue 3. Donald now knows that this is a *Patch Finesse*.
  - Emily sees the playable red 2 and red 3 in Donald's hand, so she also knows that this was a *Patch Finesse*. The red card in her hand is either red 3 or red 4.
  - We skipped over Bob - why did he discard? Normally, Bob should think the same thing as Cathy - that he has both the red 2 and the red 3. However, Bob can look ahead and see that a *Patch Finesse* could occur, so since everything will work perfectly if he does nothing, then he should do nothing. It is also possible that Bob happens to have the red 2 and the red 3, so he should try to blind-play those on the next round if no-one else attempts to blind-play anything.

<PatchFinesse />

### The Known Patch Finesse (Illegal)

- Legal *Patch Finesses* are **always hidden**, meaning that from the person who is blind-playing a card to "patch" will **never** know that it is a *Patch Finesse* until **after** they blind-play.
- In other words, if Alice performs a legal *Patch Finesse*, then **no-one else on the team has to even know that the *Patch Finesse* convention exists** - everything will just work out properly because everyone will just blind-play cards like any other ordinary *Layered Finesse*.
  - The exception is when it comes time for the patched player to begin blind-playing. In this situation, the patched player might be "spooked" from the blind-play of the patcher, because they will not understand why the blind-play happened. In this situation, players need to have full trust and not be spooked when another person on the team successfully blind-plays a card in an unexpected way.

<br />

### The Double Patch Finesse (Illegal)

- Building on the *Patch Finesse*, it is theoretically possible for a *Patch Finesse* to require **two** separate players to patch at the same time.
- However, we expressly forbid this because it is too confusing. Players should **never** consider the possibility of a *Patch Finesse* with two *Patch Components*.

<br />

### The Patch Gentleman's Discard (Illegal)

- Theoretically, it could be possible to perform a *Gentleman's Discard* that contains a *Patch Component*.
- However, we explicitly disallow this. *Gentleman's Discards* **must** be for cards that are on slot 1. Otherwise, it would communicate a *Blaze Discard*.

<br />

### The Pestilent Finesse

- First, see the section on the *[Pestilent Double Bluff](../level-19.md#the-pestilent-double-bluff-pdb)*.
- In the *Pestilent Double Bluff* example, Cathy is supposed to immediately blind-play her *Finesse Position* card in order to "heal" the situation with Bob.
- However, if Cathy sees that someone else on the team has the red 2 in their *Finesse Position*, then Cathy can see that it is a *Pestilent Finesse* instead of a *Pestilent Bluff*. Cathy can simply let the person with the actual red 2 blind-play and that will "heal" the problem in the exact same way.
- A *Pestilent Finesse* cannot be in reverse. (In other words, the blind-play must happen before the clued player can misplay.)

<br />

### The Diseased Clandestine Finesse

- First, see the section on the *[Pestilent Double Bluff](../level-19.md#the-pestilent-double-bluff-pdb)*.
- In the *Pestilent Double Bluff* example, Cathy is supposed to immediately blind-play her *Finesse Position* card in order to "heal" the situation with Bob.
- However, if Cathy sees a clue that she can give that will turn the move into a *Clandestine Finesse* on Bob, then she must always do that.
- For example, in a 4-player game:
  - It is the first turn of the game and nothing is played on the stacks.
  - Bob's hand is as follows, from newest to oldest: `red 1, blue 2, blue 1, blue 5`
  - Donald hand has a red 2 in it.
  - Alice clues number 2 to Bob, touching a blue 2 on slot 2.
  - Bob blind-plays the red 1.
  - Cathy sees that this looks like a *Pestilent Double Bluff* situation. However, she also sees that if she gives a *Play Clue* to the red 2, Donald will play it, and then Bob will reinterpret Alice's clue as a *Clandestine Finesse*.
  - Cathy clues red to Donald, touching a red 2 as a *Play Clue*.
  - Donald plays the red 2.
  - Alice discards.
  - Originally, Bob thought that Alice had performed a *Self-Finesse* on him for the red 1 into the red 2. However, from *Good Touch Principle*, this cannot be the case anymore, because Cathy got Donald's red 2.
  - Thus, Bob's 2 must be some other 2. Bob knows that this would normally cause a *Pestilent Double Bluff*, but Cathy did not blind-play anything.
  - Thus, this must be a *Disease Clandestine Finesse*. In other words, Alice told him that his 2 was playable right now, and no-one else has blind-played any 1s, so Bob must continue to blind-play cards until his 2 is playable.
  - Bob blind-plays his slot 3 card and it successfully plays as the blue 1.
  - Bob knows that his 2 must be the blue 2 to connect to the blue 1.

<DiseasedClandestineFinesse />

### The Cursed Finesse

- Commonly, players use a *Double Finesse* or a *Clandestine Finesse* to "get" multiple cards from the next player. This works because the first blind-play "connects" to the clued card, forcing Bob to blind-play again in order to prevent Cathy from misplaying.
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

<CursedFinesse />

- *Cursed Finesses* can only occur if there is a *Free Choice* during the initial clue.

<br />

### The Surreptitious Finesse

- *Clandestine Finesses* are when a color or rank clue "connects" to the card from a blind-play, but the clue receiver must wait for **additional** connecting playable cards to blind-play. Another way of saying this is that *Clandestine Finesses* have a *Misplay Component*; if the blind-player does not continue to blind-play cards, then the clue receiver will go on to misplay the clued card.
- A similar situation can also happen when a rank clue "connects" the card from a blind-play, but the clue receiver sees **non-connecting** rank cards in the blind-player's hand that are currently playable.
- If the clue receiver waits for these non-connecting cards to blind-play, and they **do** blind-play, then it means that the original clue was on a different suit than it first appeared. This is called a *Surreptitious Self-Finesse* in order to disambiguate it from a more ordinary *Clandestine Finesse*.
- *Surreptitious Finesses* have a *Misplay Component* in almost the exact same way that *Clandestine Finesses* do, but they just involve non-connecting rank cards.
- Generally speaking, this means that when a **rank** clue initiates a *Finesse*, the clue receiver must always allow for the possibility that subsequent non-connecting rank cards in the blind-player's hand (that are of a **lower** rank than the clue) can possibly be caught up in the *Finesse*.
- For example, in a 3-player game:
  - Red 1 is played on the stacks.
  - Alice clues number 3 to Cathy, which touches one 3.
  - Bob blind-plays red 2.
  - Cathy knows that red 2 "connects" to number 3, so she knows that she probably has red 3.
  - However, Cathy also sees that before Bob blind-played the red 2, he had a blue 1 in the slot right after it.
  - Thus, it is possible for Cathy's 3 to actually be blue 3. If it is, Bob will blind-play the blue 1 and Cathy will know that she has blue 2 on her *Finesse Position*.
  - So, Cathy discards (instead of potentially playing the red 3 on this turn) to allow for the possibility of a *Surreptitious Finesse*.

<SurreptitiousFinesse />

- Examples of a *Surreptitious Finesse* can be found [here](../examples/surreptitious-finesse.md).

<br />

### The Distribution Finesse

- On the final round of the game, it is possible to give a *Play Clue* to a player that would be useless - they will not get a chance to play the card before the game ends.
- If a player does this anyway, then it must be communicating something extra. In this situation, it is to be interpreted as a *Finesse* instead of a *Play Clue* for the purposes of better satisfying *Team Distribution Principle*.
- Examples:
  - [Game #16887, turn 29](https://hanab.live/replay/16887#29) if Instantiation clues 5 on the red 5

<br />

### Inverted Priority Finesse

- *Priority Finesses* are considered "free", since they do not cost a clue to perform. Thus, it is extremely rare that a player would decline to perform one if it was possible to do so.
- If a player declines to perform a *Priority Finesse*, and there is nothing else special going on, then they must be trying to communicate something extra.
- They are instead calling for a *Priority Finesse* on the card that had *Priority*. This is called an *Inverted Priority Finesse* because it gets a blind-play from playing a card with *Priority* (as opposed to getting a blind-play from playing a card without *Priority*).
- After a *Inverted Priority Finesse* occurs, the presence of a normal *Priority Finesse* is now known to everyone on the team. Thus, the normal *Priority Finesse* is preserved and should be played into on the next go-around of the table.
- For example, in a 3-player game:
  - Alice has a choice between playing a red 1 and a blue 2. Both cards are fully known, and no-one else has any clued cards, so the red 1 has *Priority*.
  - Alice plays the red 1.
  - Bob sees that if Alice had played the blue 2, she could have performed a *Priority Finesse* on Cathy's slot 1 card, the blue 3.
  - Bob knows that there was no reason for Alice to decline the *Priority Finesse*, so this must be an *Inverted Priority Finesse*. Bob blind-plays his slot 1 card, and it is the red 2.
  - Cathy knows that the red 1 had *Priority*, so playing it should not have caused Bob to blind-play anything. Thus, Cathy knows that this must be an *Inverted Priority Finesse*, and she knows that she has a blue 3 on her slot 1. Cathy discards.
  - Alice plays blue 2.
  - Bob discards.
  - Cathy blind-plays blue 3.

<InvertedPriorityFinesse />

- Note that *Inverted Priority Finesse* **will only work if the players are in a certain order**. Otherwise, the player holding the declined priority card can *Play Clue* the other card, which would destroy the information channel. This means that in most of cases, players should just go with the safer and less complicated option - the normal *Priority Finesse*.

<br />

### Finesses with a Lie Component

- *Lie Principle* states all that *Fibs* must resolve immediately. An untruth that does not resolve immediately is a *Lie*.
- Normally, *Lies* are expressly illegal. However, some players will occasionally break the rules for the purposes of getting a *Finesse*. We call such moves *Finesses with a Lie Component*.
- Typically, when players *Lie* out of *Bluff Seat*, the game quickly falls apart; subsequent clues will have different meanings to different players and everyone will become "desynchronized". This typically leads to a loss.
- With that said, it is sometimes possible to construct **safe** lines that contain a *Lie Component*. There is usually deep levels of nuance involved in these lines, so this kind of thing is only recommended for advanced and expert players.
- The previously mentioned *Out-of-Order Finesse* is a specific example of a *Finesse* with a *Lie Component*. One key attribute of the *Out-of-Order Finesse* is that the player who receives the *Fix Clue* knows that **all** of the related cards are playable, or it would not have been worth the risk (and the confusion) to perform a line with a *Lie Component* in the first place.
- This concept can be generalized to all *Finesses* that have a *Lie Component*. After a player receives a *Fix Clue* in such a situation, they should assume that the *Finesse* is "still on". So, depending on the situation, they should either know that the initial card that was clued is playable (like in an *Out-of-Order Finesse*) or continue to blind-play cards to fulfill the initial *Finesse* (if the card clued with a *Fix Clue* seems to be unrelated).
- Note that since we want to minimize *Lying* as much as possible, *Finesses with a Lie Component* have the **lowest possible precedence**. For example, this means that you can give a *Delayed Play Clue* to a player who is still blind-playing cards without it looking like a *Fix Clue*.
- Importantly, *Finesses* with a *Lie Component* are **only** allowed if there is not an alternative line that would "get" the same number of cards without any lies. Thus, if you are looking to do a *Finesse* with a *Lie Component*, make sure you carefully consider the efficiency of all of the possible alternatives.

<br />

### The Shadow Finesse

- When playing with expert players, it is rare for them to "miss" the chance to *Finesse* a card.
- If an expert player could cleanly *Finesse* a card but instead opts to clue it directly, there must be a good reason.
- If the clue does **not** touch any other new cards, and it is **not** an emergency situation, and it is **not** a mistake, then the player must be trying to communicate something extra.
- In this situation, the player giving the clue intends for the next player to blind-play from the *Finesse Position* that **matches the true *Finesse Position*** of the other card. This is called a *Shadow Finesse* because the positional blind-play is a "shadow" of the card that could have been used for the normal *Finesse*.
- The first card to blind-play is called the *shadow* and the second card to blind-play is called the *shadow target*.
- For example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues number 1 to Cathy, touching a single red 1 on slot 1 as a *Play Clue*.
  - Bob sees that Alice's clue is very strange: Donald has a red 2 on his slot 4. Alice could have instead clued red to Donald to *Finesse* Cathy's red 1.
  - Bob sees no other explanation for this, so he knows that this must be a *Shadow Finesse* - Bob must hold the red 2's "shadow".
  - Since the red 2 is in Donald's *Fourth Finesse Position* (slot 4), Bob immediately plays his *Fourth Finesse Position* (slot 4). It is a blue 1 and it successfully plays.
  - Cathy can see all of the other hands and understands Alice's clue. Cathy plays the clued red 1.
  - Donald is very surprised to see Bob play his *Fourth Finesse Position*. The only thing that could cause this is a *Shadow Finesse*.
  - Donald blind-plays the red 2 (the shadow target) from his slot 4.

<ShadowFinesse />

- The *shadow* in a *Shadow Finesse* **must** exist in the immediate next player's hand, similar to a *Bluff*. And the player holding the *shadow* **must** blind-play it immediately to resynchronize the team, similar to a *Bluff*.
- Once a *shadow* has been blind-played, the team should consider the *shadow target* as being fully known and "touched". (In other words, it no longer occupies a *Finesse Position*.)
- Remember that *Shadow Finesses* work with *Finesse Positions*, **not** with slot numbers.
- Care should be taken to not give a *Shadow Finesse* that could be misinterpreted as some other kind of move. For example:
  - If the *shadow* is on the *First Finesse Position*, then the move might be misinterpreted as a *Bluff* or a *Trash Finesse*.
  - If the *shadow* is on the *Second Finesse Position*, then the move might be misinterpreted as a *5 Color Ejection*
  - If the *shadow* is on the *Third Finesse Position*, then the move might be misinterpreted as an *Unknown Trash Discharge*.
- The *shadow* **must** come before the *shadow target*. In other words, it is **illegal** for Bob to hold the *shadow target*, since he cannot see that a *Shadow Finesse* is occurring (and therefore might try to get the *shadow*).

<br />

### The Reverse Shadow Finesse

- *Shadow Finesses* can also be performed in reverse.
- *Reverse Shadow Finesses* are more complicated than normal *Shadow Finesses*, because the person with the clued card has to look ahead to determine whether or not **they** have the *shadow*, or if a **future** player has the *shadow*.
- For an example, in a 4-player game:
  - It is the first turn and nothing is played on the stacks.
  - Alice clues red to Bob, touching a red card on slot 1 as a *Play Clue*.
  - Bob knows that his red card must be a red 1.
  - Bob sees that Alice's clue is very strange: Alice could have instead clued red to Donald, touching a red 2 as a *Finesse*.
  - Bob recognizes that Alice must be a *Shadow Finesse*. Bob now must determine where the *shadow* lies.
  - Bob sees that Donald's red 2 is on his *Third Finesse Position*.
  - Bob looks at Cathy's *Third Finesse Position*. If it is playable, then Cathy holds the *shadow*. If it is not playable, then Bob holds the *shadow*.
  - Cathy has a blue 1 in her *Third Finesse Position*, so Bob knows that Cathy holds the *shadow*.
  - Bob plays his clued red 1.
  - Similar to Bob, Cathy also knows that this is a *Shadow Finesse*. Cathy blind-plays her *Third Finesse Position*. It is blue 1 and it successfully plays.
  - Donald is very surprised to see Cathy blind-play her *Third Finesse Position*. The only thing that could cause this is a *Shadow Finesse*.
  - Donald blind-plays the *shadow target* from his *Third Finesse Position*.

<ReverseShadowFinesse />

### The Unnecessary Forced Reverse Trash Finesse (A Gentleman's Discard That Looks Like an Unnecessary Reverse Trash Finesse)

- First, see the section on *[Unnecessary Moves with Known-Trash](../level-23.md#unnecessary-moves-with-known-trash----ignition)*, which defines what a *Unnecessary Trash Finesse* is. Basically, if a *Trash Finesse* is unnecessary, then it also causes a *Chop Move*.
- This convention also applies to *Reverse Trash Finesses*. If they are unnecessary, then it causes a *Chop Move* in the same way.
- If a line is chosen that forces a *Gentleman's Discard* to occur (because they have to entertain the possibility of a *Reverse Trash Finesse*), and the blind-playing card could have been clued in some other easier way, then it **still** *Chop Moves* in exactly the same way that an *Unnecessary Reverse Trash Finesse* would.
- For example, in a 3-player game:
  - This is a slightly modified version of the example given for the *Reverse Trash Finesse*.
  - Red 1 is played on the stacks. All of the 2's are played on the other stacks.
  - Alice clues number 2 to Bob, touching his slot 1 card as a *Play Clue*.
  - From Bob's perspective, this is probably just a *Play Clue* on the red 2 (which happens to be the final 2 that needs to be played).
  - However, Bob sees that Cathy also has a red 2 on her *Finesse Position*. That means that this could be a *Reverse Trash Finesse*.
  - If it is a *Reverse Trash Finesse*, then his 2 is a trash 2 (e.g. green 2). By immediately discarding it, it will prove to Cathy that *she* has a red 2.
  - Alternatively, if Bob does indeed have the red 2, then he can discard it to perform a *Gentleman's Discard* on Cathy.
  - Either way, discarding will cover both cases. Bob discards the 2 and it is revealed to be a red 2.
  - Cathy blind-plays her *Finesse Position* card as red 2 and it successfully plays.
  - Alice discards.
  - Bob knows that even though *Gentleman's Discards* are never supposed to cause a *Chop Move*, Alice forced him to discard in exactly the same way as a *Reverse Trash Finesse*. Furthermore, it was possible to cleanly clue the red 2 in Cathy's hand to begin with, and doing so would have been much simpler. Thus, doing the pseudo-*Reverse Trash Finesse* was unnecessary.
  - Since it was unnecessary, Bob chop moves all the cards to the right of where the red 2 was (slot 2, slot 3, slot 4, and slot 5).

<UnnecessaryForcedReverse />

### The Trash Push Inverted Finesse

- First, see the section on *[Unnecessary Moves with Known-Trash](../level-23.md#unnecessary-moves-with-known-trash----ignition)*, which defines what a *Unnecessary Trash Push* is. Basically, if a *Trash Push* is unnecessary, then it also causes an extra blind-play.
- Normally, the *Unnecessary Trash Push* calls for the very next player to blind-play an unrelated card, similar to a *Bluff*.
- However, if the very next player can see that it could be a *Finesse* through the *Trash Pushed* card, then they should prefer that interpretation. This is similar to how Bob should always prefer a *Finesse* interpretation over a *Bluff* interpretation.
- For example, in a 4-player game:
  - All of the 2's are played on the stacks.
  - Alice clues number 1 to Cathy, touching a single 1 on her chop. Since all of the 1's are already played, it is globally known that this must be some kind of *Trash Push*.
  - Bob sees that the pushed card is a red 3. Cathy has no other red cards in her hand, so Alice could have just clued red to Cathy instead of doing a complicated *Trash Push*.
  - Thus, Bob knows that this is an *Unnecessary Trash Push*. Normally, Bob would immediately blind-play his *Finesse Position* card. However, Bob also sees that Donald has a red 4 in his *Finesse Position*. Since *Finesses* take precedence over *Bluffs*, Bob knows that he should let Donald be the one to blind-play from the unnecessariness.
  - Bob discards.
  - Cathy knows that this must be a *Trash Push*. Cathy blind-plays her slot 3 card. It is red 3 instead and it successfully plays.
  - Similar to Bob, Donald also sees that the *Trash Push* was unnecessary. Since Bob did not blind-play anything, this must be a *Trash Push Inverted Finesse*. Donald blind-plays his *Finesse Position* as red 4 and it successfully plays.

<TrashPushInvertedFinesse />
