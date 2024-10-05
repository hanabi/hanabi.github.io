import z from "zod";

const rankOrEmpty = z.number().min(0).max(5);
const stack = z.record(z.string().length(1), rankOrEmpty);
const cardSimple = z.string().regex(/^\w[1-5]$/);

const card = z.object({
  type: z.coerce.string().min(1),
  clue: z.coerce.string().min(1).optional(),
  border: z.boolean().optional(),
  middleNote: z.coerce.string().min(1).optional(),
});

const player = z.object({
  clueGiver: z.boolean().optional(),
  cards: z.array(card),
});

const text = z.object({
  text: z.coerce.string().min(1).or(z.null()),
});

export const hanabiGameStateSchema = z.object({
  stacks: z.array(stack).optional(),
  discarded: z.array(cardSimple).optional(),
  players: z.array(player.or(text)).min(1),
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HanabiGameState
  extends z.infer<typeof hanabiGameStateSchema> {}
