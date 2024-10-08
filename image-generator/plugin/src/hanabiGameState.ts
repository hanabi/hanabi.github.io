/* eslint-disable @typescript-eslint/no-empty-object-type */

import z from "zod";

const rankOrEmpty = z.number().min(0).max(5);
const stack = z.record(z.string().length(1), rankOrEmpty).readonly();
const cardType = z.coerce.string().min(1);

const bigText = z
  .object({
    text: z.string().min(1),
    color: z.string().min(1).optional(),
  })
  .strict()
  .readonly();

const textObject = z
  .object({
    text: z
      .string()
      .min(1)
      .or(z.array(z.string().min(1)).min(1).readonly()),
    color: z.string().min(1).optional(),
  })
  .strict()
  .readonly();

const card = z
  .object({
    /** The type of card. For example, "r1" to signify a red 1. */
    type: cardType,

    /** The type of clue that is "on" the card. For example, "r" to signify a red clue. */
    clue: z.coerce.string().min(1).optional(),

    /**
     * If the card is clued, setting this to true will change the color of the clue arrow to make it
     * look like the card is being touched again. Defaults to false.
     */
    retouched: z.boolean().optional(),

    /** Positive rank pips that should be "turned on", if any. */
    orange: z.number().min(1).optional(),

    /**
     * The type of card that can be crossed out. For example, "r1" to signify that it cannot be red
     * and cannot be a 1.
     */
    crossedOut: z.coerce.string().min(1).optional(),

    /**
     * Whether the card has a clue border. A clue border will automatically be drawn if the card has
     * a type, so this allows you to reveal a card without making it look like it is clued.
     */
    border: z.boolean().optional(),

    /** Whether the card has a trash can overlay on top of it. Defaults to false. */
    trash: z.boolean().optional(),

    /**
     * A text label on the top of the card. Can be either a string or an object representing a
     * string.
     */
    above: z.string().min(1).or(textObject).optional(),

    /** A text label in the middle of the card. (This cannot be a multi-line string.) */
    middleNote: z.coerce.string().min(1).optional(),

    /**
     * A text label on the bottom of the card. Can be either a string or an object representing a
     * string.
     */
    below: z.string().min(1).or(textObject).optional(),
  })
  .strict()
  .readonly();

const player = z
  .object({
    name: z.coerce.string().min(1).optional(),
    clueGiver: z.boolean().optional(),
    cards: z.array(card).readonly(),
  })
  .strict()
  .readonly();

const text = z
  .object({
    text: z.coerce
      .string()
      // A null value will coerce to the literal "null", which is not intended.
      .refine((value) => value !== "null", "The text value must not be empty."),
  })
  .strict()
  .readonly();

export const hanabiGameStateSchema = z
  .object({
    suits: z
      .record(z.string().length(1), z.string().min(1))
      .readonly()
      .optional(),
    stacks: z.array(stack).readonly().optional(),
    discarded: z.array(cardType).readonly().optional(),
    bigText: bigText.optional(),
    players: z.array(player.or(text)).min(1).readonly(),
  })
  .strict()
  .readonly();

export interface Stack extends z.infer<typeof stack> {}

export interface BigText extends z.infer<typeof bigText> {}

export interface TextObject extends z.infer<typeof textObject> {}

export interface Card extends z.infer<typeof card> {}

export interface Player extends z.infer<typeof player> {}

export interface Text extends z.infer<typeof text> {}

export interface HanabiGameState
  extends z.infer<typeof hanabiGameStateSchema> {}
