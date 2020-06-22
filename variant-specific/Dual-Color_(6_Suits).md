# Specific Conventions for Dual-Color (6 Suits)

These conventions apply to the "Dual-Color (6 Suits)" variant.

<br />

### The Negative Prompt

* In this variant, since negative color information conveys just as much information as positive color information, you should include that when deciding which card to play into a *Prompt*.
* For example:
  * Alice has a red card in slot 1 and a red card in slot 2.
  * Alice is *Prompted* for a mahogany 2. (Mahogany is composed of red and black.)
  * Normally, Alice would play slot 1, since *Prompts* promise the left-most card.
  * However, Alice's slot 1 card has no negative clues, and her slot 2 card has a negative yellow clue.
  * Thus, this is a *Negative Prompt* and Alice plays slot 2 instead of slot 1.
