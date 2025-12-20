// See: https://webpack.js.org/contribute/writing-a-loader/
// TODO: go through all variables and remove them potentially

import YAML from "yaml";
import type {
  BigText,
  Card,
  HanabiGameState,
  Player,
  Space,
  Stack,
  Text,
  TextObject,
} from "./hanabiGameState";
import { hanabiGameStateSchema } from "./hanabiGameState";
import { SVG } from "./SVG";
import type { SVGNode } from "./SVGNode";

const TEXT_COLOR_CLASS = "site-theme-text";
const CARD_WIDTH = 70;
const CARD_HEIGHT = 100;
const CARD_ROUNDED_CORNER_SIZE = 5;
const CLUE_BORDER_COLOR = "orange";
const CLUE_BORDER_OVERLAP = 6;
const HORIZONTAL_SPACING_BETWEEN_CARDS = 8;

/**
 * This needs to be long enough for Donald (i.e. the longest player name). This will need to get
 * bigger if the font size for the player name increases.
 */
const HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND = 90;

const VERTICAL_SPACING_BETWEEN_PLAYERS = 20;
const PLAYER_NAMES = ["Alice", "Bob", "Cathy", "Donald", "Emily"] as const;
const PIECES_PATH = "/img/pieces";
const NO_VARIANT_SUIT_ABBREVIATIONS = ["r", "y", "g", "b", "p"] as const;
const ALL_RANKS: ReadonlySet<string> = new Set(["1", "2", "3", "4", "5"]);

const WORD_TO_COLOR: ReadonlyMap<string, string> = new Map([
  // Same colors
  ["red", "red"],
  ["yellow", "yellow"],
  ["black", "black"],
  ["purple", "purple"],
  ["blue", "blue"],
  ["green", "green"],
  ["rainbow", "rainbow"],
  ["pink", "pink"],

  // Other
  ["focus", "gold"],
  ["play", "gold"],
  ["discard", "cyan"],
  ["chop", "darkred"],
  ["fresh", "green"],
  ["bad", "gray"],
  ["brown", "sienna"],
]);

const COLORS_WITH_BLACK_TEXT: ReadonlySet<string> = new Set([
  "gold",
  "yellow",
  "rainbow",
  "pink",
  "white",
  "cyan",
]);

class ImageGenerator {
  /** Includes suits that may not actually be present in the current variant. */
  private readonly suitAbbreviationToWord: ReadonlyMap<string, string>;

  /** The single letter suit abbreviations for the current variant. */
  private readonly suitAbbreviations: readonly string[] = [];

  private xOffset = 0;
  private yOffset = 0;
  private readonly xOffsetWherePlayerBegins: number = 0;
  private xMax = 0;
  private leftYOffset = 0;
  private yTop = 0;
  private yBelow = 0;
  private readonly svgFile: SVG;

  constructor(hanabiGameState: HanabiGameState) {
    const extraSuitEntries =
      hanabiGameState.suits === undefined
        ? []
        : Object.entries(hanabiGameState.suits);
    this.suitAbbreviationToWord = new Map([
      ["r", "red"],
      ["y", "yellow"],
      ["g", "green"],
      ["b", "blue"],
      ["p", "purple"],
      ["m", "multi"],
      ...extraSuitEntries,
    ]);

    this.suitAbbreviations =
      hanabiGameState.stacks === undefined
        ? NO_VARIANT_SUIT_ABBREVIATIONS
        : hanabiGameState.stacks.map((stack) => {
            const keys = Object.keys(stack);
            const key = keys[0];
            if (key === undefined || keys.length !== 1) {
              throw new Error(
                `Failed to parse a stack: ${JSON.stringify(stack)}`,
              );
            }

            return key;
          });

    // Create a new SVG file.
    this.svgFile = new SVG();

    // Draw the play stacks on the top-left part of the image.
    this.drawPlayStacks(hanabiGameState.stacks);

    // Add a bit of spacing between the play stacks and the player hands.
    this.xOffset += CARD_WIDTH + 4;

    this.xOffsetWherePlayerBegins = this.xOffset;
    this.xMax = this.xOffset;

    // Draw the player hands on the right side.
    this.drawPlayerRows(hanabiGameState.players);

    this.drawBigText(hanabiGameState.bigText);

    // Draw discarded cards, if any.
    this.drawDiscardPile(hanabiGameState.discarded);

    // Set the dimensions for the SVG file.
    const width = this.xMax;
    const yMax = Math.max(this.yOffset, this.leftYOffset);
    const height = yMax - this.yTop;
    this.svgFile.attributes.set("width", width);
    this.svgFile.attributes.set("height", height);
    this.svgFile.attributes.set("viewBox", `0 ${this.yTop} ${width} ${height}`);
  }

  private drawPlayStacks(stacks?: readonly Stack[]) {
    if (stacks === undefined) {
      this.leftYOffset = 0;
      return;
    }

    let xOffset = 0;
    const yOffset = CARD_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS;

    for (const stack of stacks) {
      const entries = Object.entries(stack);
      const entry = entries[0];
      if (entry === undefined || entries.length !== 1) {
        throw new Error(`Failed to parse a stack: ${JSON.stringify(stack)}`);
      }

      const [suitAbbreviation, rankOrEmpty] = entry;
      const suitWord = this.suitAbbreviationToWord.get(suitAbbreviation);
      if (suitWord === undefined) {
        throw new Error(
          `Failed to find the word for a suit corresponding to the abbreviation of: ${suitAbbreviation}`,
        );
      }

      const fileName = `${suitWord}${rankOrEmpty}`;
      this.svgFile.addImage(`${PIECES_PATH}/cards/${fileName}.svg`, {
        x: xOffset,
        y: 0,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });

      xOffset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS;
    }

    this.xOffset = xOffset;
    this.leftYOffset = yOffset;
  }

  private drawPlayerRows(
    players?: ReadonlyArray<Player | Text | Space | string>,
  ) {
    if (players === undefined) {
      return;
    }
    let playerNum = 0;

    for (const playerOrText of players) {
      if (typeof playerOrText === "string") {
        // "space" is the only allowed literal.
        this.drawTextSeparator("", 25);
      } else if ("space" in playerOrText) {
        this.drawTextSeparator("", playerOrText.space);
      } else if ("text" in playerOrText) {
        this.drawTextSeparator(playerOrText.text);
      } else {
        if (playerOrText.offset !== undefined) {
          playerNum += playerOrText.offset;
        }
        this.drawPlayer(playerNum, playerOrText);
        playerNum++;
      }
    }
  }

  /**
   * Draw a text separator between a player to describe some event taking place.
   * e.g. "After discarding the 1..."
   */
  private drawTextSeparator(text: string | null, offset = 50) {
    this.svgFile.addText(text, {
      x: this.xOffsetWherePlayerBegins + 40,
      y: this.yOffset,
      dy: 20,
      class: TEXT_COLOR_CLASS,
    });
    this.yOffset += offset;
  }

  /** Draw a row representing a player's hand. */
  private drawPlayer(playerNum: number, player: Player) {
    this.drawPlayerName(playerNum, player);
    const { cards } = player;

    this.xOffset =
      this.xOffsetWherePlayerBegins
      + HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND;

    // We need to increase the size of image if there is a tall text box "below" one of cards.
    this.yBelow = 5;

    // Draw each card
    for (const card of cards) {
      this.drawPlayerCard(card);
    }

    this.yOffset +=
      CARD_HEIGHT + this.yBelow + VERTICAL_SPACING_BETWEEN_PLAYERS;
    if (this.xOffset > this.xMax) {
      this.xMax = this.xOffset;
    }
  }

  private drawPlayerName(playerNum: number, player: Player) {
    const name = player.name ?? PLAYER_NAMES[playerNum] ?? "Unknown";

    const r = this.svgFile.addSVG({
      x: this.xOffsetWherePlayerBegins,
      y: this.yOffset,
      width: HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND,
      height: CARD_HEIGHT,
    });
    r.addText(name, {
      x: "0%",
      y: "50%",
      class: TEXT_COLOR_CLASS,
      style: "font-size: 1.4em;",
      "dominant-baseline": "central",
    });

    if (player.clueGiver === true) {
      // Based on: https://stackoverflow.com/a/42783381/14347173
      const clueGiverDescription = "Clue Giver";
      r.addText(clueGiverDescription, {
        x: "0%",
        y: "50%",
        dy: "30",
        fill: "black",
        "dominant-baseline": "central",
        filter: "url(#clueGiver)",
      });
      r.addText(clueGiverDescription, {
        x: "0%",
        y: "50%",
        dy: "30",
        fill: "black",
        "dominant-baseline": "central",
      });
    }
  }

  private drawPlayerCard(card: Card) {
    const clued = !card.type.startsWith("x");

    // We allow the YAML to specify "border: false" to manually disable the clue border.
    if (card.border === true || (clued && card.border !== false)) {
      this.drawClueBorder();
    }

    if (clued) {
      this.drawCluedCard(
        card.type,
        card.crossedOut,
        card.orange,
        this.xOffset,
        this.yOffset,
      );
    } else {
      this.drawUncluedCard(card);
    }

    this.drawExtraCardAttributes(card);

    this.xOffset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS;
  }

  private drawClueBorder() {
    this.svgFile.addRect({
      x: this.xOffset - CLUE_BORDER_OVERLAP / 2,
      y: this.yOffset - CLUE_BORDER_OVERLAP / 2,
      width: CARD_WIDTH + CLUE_BORDER_OVERLAP,
      height: CARD_HEIGHT + CLUE_BORDER_OVERLAP,
      fill: CLUE_BORDER_COLOR,
      rx: CARD_ROUNDED_CORNER_SIZE,
      ry: CARD_ROUNDED_CORNER_SIZE,
    });

    if (this.yOffset === 0) {
      this.yTop = Math.min(this.yTop, -CLUE_BORDER_OVERLAP / 2);
    }
  }

  /**
   * This cannot take in a `Card` because it has to work with the "simple" cards in the discard
   * pile.
   */
  private drawCluedCard(
    cardType: string,
    crossedOut: string | undefined,
    orange: number | undefined,
    x: number,
    y: number,
  ) {
    this.validateCardType(cardType);

    // Use sets to store the possible ranks and suits.
    const cardTypeSet = new Set(cardType);
    const ranks = cardTypeSet.intersection(ALL_RANKS);
    const suits = cardTypeSet.intersection(new Set(this.suitAbbreviations));

    if (ranks.size !== 1 && suits.size !== 1) {
      // This is a card with an unknown rank and an unknown color.
      const s = this.svgFile.addSVG({
        x,
        y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      s.addRect({
        x: 0,
        y: 0,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        fill: "gray",
        rx: CARD_ROUNDED_CORNER_SIZE,
        ry: CARD_ROUNDED_CORNER_SIZE,
      });
      // Always draw pips on clued cards with unknown rank + unknown color.
      const pips = ranks.union(suits);
      this.drawCardPips(s, pips, crossedOut, orange);
    } else if (ranks.size === 1 && suits.size !== 1) {
      // This is a card with a known rank and an unknown color.
      const s = this.svgFile.addSVG({
        x,
        y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      const rankStrings = [...ranks.values()];
      const firstRank = rankStrings[0];
      if (firstRank === undefined) {
        throw new Error("Failed to parse the first rank.");
      }
      s.addImage(`${PIECES_PATH}/cards/${firstRank}.svg`, {
        x: 0,
        y: 0,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      this.drawCardPips(s, suits, crossedOut, orange);
    } else if (ranks.size !== 1 && suits.size === 1) {
      // This is a card with a known color and an unknown rank.
      const s = this.svgFile.addSVG({
        x,
        y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      const suitStrings = [...suits.values()];
      const firstSuit = suitStrings[0];
      if (firstSuit === undefined) {
        throw new Error("Failed to parse the first suit.");
      }
      const suitName = this.suitAbbreviationToWord.get(firstSuit);
      if (suitName === undefined) {
        throw new Error("Failed to parse the first suit name.");
      }
      s.addImage(`${PIECES_PATH}/cards/${suitName}.svg`, {
        x: 0,
        y: 0,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      this.drawCardPips(s, ranks, crossedOut, orange);
    } else {
      // An exact card identity was specified. (e.g. "r1")
      const suitStrings = [...suits.values()];
      const firstSuit = suitStrings[0];
      if (firstSuit === undefined) {
        throw new Error("Failed to parse the first suit.");
      }
      const suitName = this.suitAbbreviationToWord.get(firstSuit);
      if (suitName === undefined) {
        throw new Error("Failed to parse the first suit name.");
      }
      const rankStrings = [...ranks.values()];
      const firstRank = rankStrings[0];
      if (firstRank === undefined) {
        throw new Error("Failed to parse the first rank.");
      }
      this.svgFile.addImage(
        `${PIECES_PATH}/cards/${suitName}${firstRank}.svg`,
        {
          x,
          y,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
        },
      );
    }
  }

  /** `crossedOut` represents suits and ranks that are crossed out from negative clues. */
  private drawUncluedCard(card: Card) {
    if (card.crossedOut !== undefined) {
      this.validateCardType(card.crossedOut);
    }

    const cardTypeWithoutX = card.type.slice(1);
    const pips = new Set(cardTypeWithoutX);

    const s = this.svgFile.addSVG({
      x: this.xOffset,
      y: this.yOffset,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
    });
    s.addRect({
      x: 0,
      y: 0,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      fill: "gray",
      rx: CARD_ROUNDED_CORNER_SIZE,
      ry: CARD_ROUNDED_CORNER_SIZE,
    });

    this.drawCardPips(s, pips, card.crossedOut, card.orange);
  }

  private validateCardType(cardType: string) {
    // Parse the string that contains:
    // 1) letters (representing card suits)
    // 2) numbers (representing card ranks)
    // e.g. "rb34"
    const letters: string[] = [];
    const numbers: string[] = [];
    for (const ch of cardType) {
      if (/^\d$/.test(ch)) {
        numbers.push(ch);
      } else {
        letters.push(ch);
      }
    }

    // Validate the suits.
    for (const letter of letters) {
      if (!this.suitAbbreviations.includes(letter)) {
        throw new Error(`The suit of "${letter}" is invalid.`);
      }
    }

    // Validate the ranks.
    for (const number of numbers) {
      if (!ALL_RANKS.has(number)) {
        throw new Error(`The rank of "${number}" is invalid.`);
      }
    }

    // Validate that the suit comes before the rank.
    // e.g. "b3" instead of "3b"
    if (letters.length > 0 && numbers.length > 0) {
      const firstCharacter = cardType[0];
      if (firstCharacter === undefined) {
        throw new Error("Failed to get the first character of a card.");
      }

      if (ALL_RANKS.has(firstCharacter)) {
        throw new Error(
          "When defining a card, the suit must come before the rank.",
        );
      }
    }

    // Validate that there are no ranks after any suits.
    // e.g. "b3r4"
    if (letters.length > 0 && numbers.length > 0) {
      let iteratingOverSuitCharacters = true;
      for (const ch of cardType) {
        if (iteratingOverSuitCharacters) {
          if (numbers.includes(ch)) {
            iteratingOverSuitCharacters = false;
          }
        } else if (letters.includes(ch)) {
          throw new Error(
            "When defining a card, the suits and the ranks have to be grouped together.",
          );
        }
      }
    }

    // Validate that the suits come in order (with respect to the play stacks).
    if (letters.length >= 2) {
      const sortedLetters = [...letters].toSorted((a, b) => {
        const aa = this.suitAbbreviations.indexOf(a);
        const bb = this.suitAbbreviations.indexOf(b);
        return aa - bb;
      });
      const lettersString = letters.join("");
      const sortedLettersString = sortedLetters.join("");
      if (lettersString !== sortedLettersString) {
        throw new Error(
          `When defining a card, the suits must be specified in order from left to right. In other words, "${lettersString}" should be "${sortedLettersString}".`,
        );
      }
    }
  }

  private drawCardPips(
    svg: SVGNode,
    pips: ReadonlySet<string>,
    crossedOut?: string,
    orange?: number,
  ) {
    const crossedOutSet = new Set(crossedOut);
    const orangeSet = new Set(orange?.toString());
    const rankPipWidth = CARD_WIDTH / 5;
    for (let rank = 1; rank < 6; rank++) {
      if (pips.has(rank.toString())) {
        const rect = svg.addSVG({
          x: (rank - 1) * rankPipWidth,
          y: (CARD_HEIGHT * 4) / 5,
          width: rankPipWidth,
          height: CARD_HEIGHT / 5,
        });
        rect.addText(rank.toString(), {
          x: "50%",
          y: "50%",
          fill: orangeSet.has(rank.toString()) ? "orange" : "white",
          style: "filter: url(#shadow_rank)",
          "text-anchor": "middle",
          "dominant-baseline": "central",
        });
        if (crossedOutSet.has(rank.toString())) {
          rect.addImage(`${PIECES_PATH}/x.png`, {
            x: CARD_WIDTH / 10 - 6,
            y: CARD_HEIGHT / 10 - 6,
            width: 12,
            height: 12,
            style: "filter: url(#black_x_rank)",
          });
        }
      }
    }

    const angle = (2 * Math.PI) / this.suitAbbreviations.length;
    for (const [i, color] of this.suitAbbreviations.entries()) {
      if (pips.has(color)) {
        svg.addImage(
          `${PIECES_PATH}/pips/${this.suitAbbreviationToWord.get(color)}.svg`,
          {
            x: CARD_WIDTH / 2 - 6 - 20 * Math.sin(angle * i),
            y: CARD_HEIGHT / 2 - 6 - 20 * Math.cos(angle * i),
            width: 12,
            height: 12,
            style: "filter: url(#shadow_suit)",
          },
        );
        if (crossedOutSet.has(color)) {
          svg.addImage(`${PIECES_PATH}/x.png`, {
            x: CARD_WIDTH / 2 - 6 - 20 * Math.sin(angle * i) - 2,
            y: CARD_HEIGHT / 2 - 6 - 20 * Math.cos(angle * i) - 2,
            width: 16,
            height: 16,
            style: "filter: url(#black_x_suit)",
          });
        }
      }
    }
  }

  private drawExtraCardAttributes(card: Card) {
    if (card.trash === true) {
      this.svgFile.addImage(`${PIECES_PATH}/trashcan.png`, {
        x: this.xOffset + 5,
        y: this.yOffset + 5,
        width: CARD_WIDTH - 10,
        height: CARD_HEIGHT - 10,
        opacity: "0.4",
      });
    }

    const { clue } = card;
    if (clue !== undefined) {
      // Draw the arrow above the card.
      const arrowName = card.retouched === true ? "arrow_dark" : "arrow";
      this.svgFile.addImage(`${PIECES_PATH}/${arrowName}.svg`, {
        x: this.xOffset + 10,
        y: this.yOffset - 40,
        width: 50,
        height: 70,
      });

      // Draw the clue circle on the arrow.
      const colors: ReadonlyMap<string, string> = new Map([
        ["r", "red"],
        ["b", "blue"],
        ["g", "lightgreen"],
        ["y", "yellow"],
        ["p", "blueviolet"],
        ["pink", "pink"],
      ]);
      const color = colors.get(clue) ?? "black";
      const cx = this.xOffset + 35;
      const cy = this.yOffset - 15;
      this.svgFile.addElement("circle", {
        cx,
        cy,
        r: "15",
        fill: color,
        stroke: color === "black" ? "white" : "black",
        "stroke-width": "2",
      });

      if (/^\d$/.test(clue)) {
        const r = this.svgFile.addSVG({
          x: this.xOffset + 27,
          y: this.yOffset - 23,
          width: 16,
          height: 16,
        });
        r.addText(clue, {
          x: "50%",
          y: "50%",
          fill: "white",
          style: "font-size: 1.4em;",
          "text-anchor": "middle",
          "dominant-baseline": "central",
        });
      }

      if (this.yOffset === 0) {
        this.yTop = Math.min(this.yTop, -35);
      }
    }

    if (card.above !== undefined) {
      this.drawTextbox(card.above, 0);
    }

    if (card.below !== undefined) {
      const yb = this.drawTextbox(card.below, CARD_HEIGHT + 5);
      if (yb > this.yBelow) {
        this.yBelow = yb;
      }
    }

    if (card.middleNote !== undefined) {
      const colors: ReadonlyMap<string, string> = new Map([
        ["(R)", "salmon"],
        ["(B)", "deepskyblue"],
        ["(G)", "lightgreen"],
        ["(Y)", "yellow"],
        ["(P)", "violet"],
      ]);
      const color = colors.get(card.middleNote) ?? "white";
      const r = this.svgFile.addSVG({
        x: this.xOffset,
        y: this.yOffset,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      r.addText(card.middleNote, {
        x: "50%",
        y: "50%",
        fill: color,
        stroke: color,
        style: "font-size: 1.5em; filter: url(#shadow_rank);",
        "text-anchor": "middle",
        "dominant-baseline": "central",
      });
    }
  }

  /** @returns The offset corresponding to the height of the text that was written. */
  private drawTextbox(
    textOrObject: string | TextObject,
    offset: number,
  ): number {
    let lines: readonly string[];
    let color: string;
    const defaultColor = "black";

    if (typeof textOrObject === "string") {
      const words = textOrObject.split(" ");
      const firstWord = words[0];
      if (firstWord === undefined) {
        throw new Error(`Failed to parse the first word of: ${textOrObject}`);
      }
      const colorWord = WORD_TO_COLOR.get(firstWord.toLowerCase());

      lines = [textOrObject];
      color = colorWord ?? defaultColor;
    } else if (typeof textOrObject.text === "string") {
      lines = [textOrObject.text];
      color = textOrObject.color ?? defaultColor;
    } else {
      lines = textOrObject.text;
      color = textOrObject.color ?? defaultColor;
    }

    const firstLine = lines[0];
    if (firstLine === undefined) {
      throw new Error(
        `Failed to parse the first line: ${JSON.stringify(textOrObject)}`,
      );
    }

    let width: number;
    let r: SVGNode;
    if (firstLine.startsWith("Rainbow")) {
      width = 85;
      r = this.svgFile.addSVG({
        x: this.xOffset - 10,
        y: this.yOffset + offset,
        width,
        height: 20 * lines.length,
      });
    } else {
      width = 64;
      r = this.svgFile.addSVG({
        x: this.xOffset + 3,
        y: this.yOffset + offset,
        width,
        height: 20 * lines.length,
      });
    }
    const textColor = COLORS_WITH_BLACK_TEXT.has(color) ? "black" : "white";

    r.addRect({
      x: 0,
      y: 0,
      width,
      height: 20 * lines.length,
      stroke: textColor,
      fill: color === "rainbow" ? "url(#rainbowtext)" : color,
    });

    for (const [i, line] of lines.entries()) {
      r.addSVG({ x: 0, y: 20 * i, width, height: 20 }).addText(line, {
        x: "50%",
        y: "50%",
        fill: textColor,
        "text-anchor": "middle",
        "dominant-baseline": "central",
      });
    }

    return 20 * lines.length;
  }

  private drawBigText(bigText?: BigText) {
    if (bigText === undefined) {
      return;
    }

    const { text } = bigText;

    const TEXT_WIDTH = 200;
    const TEXT_HEIGHT = 50;
    const xOfText =
      (this.suitAbbreviations.length
        * (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS)
        - HORIZONTAL_SPACING_BETWEEN_CARDS
        - TEXT_WIDTH)
      / 2;
    const yOfText = this.leftYOffset;

    // Select a specific color for some keywords.
    const colors: ReadonlyMap<string, string> = new Map([
      ["Bluff", "gold"],
      ["Finesse", "green"],
      ["Illegal!", "red"],
    ]);
    const color = colors.get(text) ?? bigText.color ?? "black";

    const textColor = new Set(["gold", "yellow", "rainbow"]).has(color)
      ? "black"
      : "white";

    const r = this.svgFile.addSVG({
      x: xOfText,
      y: yOfText,
      width: TEXT_WIDTH,
      height: TEXT_HEIGHT,
    });
    r.addRect({
      x: 0,
      y: 0,
      width: TEXT_WIDTH,
      height: TEXT_HEIGHT,
      stroke: textColor,
      fill: color,
    });
    r.addText(text, {
      x: "50%",
      y: "50%",
      fill: textColor,
      "text-anchor": "middle",
      "dominant-baseline": "central",
      style: "font-size: 2em;",
    });

    this.leftYOffset += TEXT_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS;
  }

  private drawDiscardPile(discarded?: readonly string[]) {
    if (discarded === undefined) {
      return;
    }

    const TRASH_WIDTH = 200;
    const TRASH_HEIGHT = 200;
    const xOfDiscardPile =
      (this.suitAbbreviations.length
        * (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS)
        - HORIZONTAL_SPACING_BETWEEN_CARDS
        - TRASH_WIDTH)
      / 2;
    const yOfDiscardPile = this.leftYOffset;

    this.svgFile.addImage(`${PIECES_PATH}/trashcan.png`, {
      x: xOfDiscardPile,
      y: yOfDiscardPile,
      width: TRASH_WIDTH,
      height: TRASH_HEIGHT,
      opacity: "0.2",
    });

    const widthTotal = CARD_WIDTH + ((discarded.length - 1) * CARD_WIDTH) / 2;
    const heightTotal =
      CARD_HEIGHT + ((discarded.length - 1) * CARD_HEIGHT) / 3;
    let x = xOfDiscardPile + TRASH_WIDTH / 2 - widthTotal / 2;
    let y = yOfDiscardPile + TRASH_HEIGHT / 2 - heightTotal / 2;
    for (const cardType of discarded) {
      this.drawCluedCard(cardType, undefined, undefined, x, y);
      x += CARD_WIDTH / 2;
      y += CARD_HEIGHT / 3;
    }

    this.svgFile.addRect({
      x: xOfDiscardPile,
      y: yOfDiscardPile,
      width: TRASH_WIDTH,
      height: TRASH_HEIGHT,
      rx: CARD_ROUNDED_CORNER_SIZE * 2,
      ry: CARD_ROUNDED_CORNER_SIZE * 2,
      stroke: "darkgreen",
      fill: "none",
      "stroke-width": "2",
    });

    this.leftYOffset = yOfDiscardPile + TRASH_HEIGHT + 2;
  }

  getSVGText() {
    return this.svgFile.text;
  }
}

export default function convertYAMLToSVG(source: string): string {
  const yaml = YAML.parse(source) as unknown;
  const hanabiGameState = hanabiGameStateSchema.parse(yaml);
  const image = new ImageGenerator(hanabiGameState);
  return image.getSVGText();
}
