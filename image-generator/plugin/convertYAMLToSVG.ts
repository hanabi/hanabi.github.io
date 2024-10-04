// See: https://webpack.js.org/contribute/writing-a-loader/
// TODO: remove all toString
// TODO: add zod

/* eslint-disable max-classes-per-file */

import YAML from "yaml";

const TEXT_COLOR_CLASS = "site-theme-text";
const CARD_WIDTH = 70;
const CARD_HEIGHT = 100;
const CARD_ROUNDED_CORNER_SIZE = 5;
const CLUE_BORDER_COLOR = "orange";
const HORIZONTAL_SPACING_BETWEEN_CARDS = 8;

/**
 * This needs to be long enough for Donald (i.e. the longest player name). This will need to get
 * bigger if the font size for the player name increases.
 */
const HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND = 90;

const VERTICAL_SPACING_BETWEEN_PLAYERS = 20;
const PLAYER_NAMES = ["Alice", "Bob", "Cathy", "Donald", "Emily"] as const;
const PIECES_PATH = "/img/pieces";
const NO_VARIANT_SUITS = ["r", "y", "g", "b", "p"] as const;
const ALL_RANKS: ReadonlySet<string> = new Set(["1", "2", "3", "4", "5"]);

const DEFS_PREFACE = `
        <filter x="0" y="0" width="1" height="1" id="clue_giver">
            <feFlood flood-color="cyan"/>
        </filter>
        <filter id="black_x_rank">
            <feComponentTransfer>
                <feFuncR type="discrete" tableValues="0"/>
                <feFuncG type="discrete" tableValues="0"/>
                <feFuncB type="discrete" tableValues="0"/>
            </feComponentTransfer>
        </filter>
        <filter id="black_x_suit">
            <feColorMatrix type="matrix" values="
                -10 0 0 0 1
                -10 0 0 0 1
                -10 0 0 0 1
                  0 0 0 1 0
            "/>
        </filter>
        <filter id="shadow_rank">
            <feOffset in="SourceAlpha" dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer result="shadow">
                <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="border"/>
            <feMerge>
                <feMergeNode in="shadow"/>
                <feMergeNode in="border"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        <filter id="shadow_suit">
            <feOffset in="SourceAlpha" dx="1" dy="1" result="offsetblur"/>
            <feComponentTransfer result="shadow">
                <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMorphology in="SourceAlpha" operator="dilate" radius="0.5" result="border"/>
            <feMerge>
                <feMergeNode in="shadow"/>
                <feMergeNode in="border"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        <linearGradient id="rainbowtext" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0" stop-color="#ff7777"></stop>
            <stop offset="0.25" stop-color="#ffff77"></stop>
            <stop offset="0.5" stop-color="#77ff77"></stop>
            <stop offset="0.75" stop-color="#77ffff"></stop>
            <stop offset="1" stop-color="#7777ff"></stop>
        </linearGradient>
`;

class SvgNode {
  name: string;
  children: SvgNode[] = [];
  attributes = new Map<string, string>();
  textContent = "";

  constructor(name: string) {
    this.name = name;
  }

  addImage(href: string, opts: Readonly<Record<string, string>>) {
    const node = this.addElement("image", opts);
    node.attributes.set("xlink:href", href);
  }

  addText(text: string, opts: Readonly<Record<string, string>>) {
    const node = this.addElement("text", opts);
    node.textContent = text;
  }

  addSVG(opts: Readonly<Record<string, string>>) {
    const node = this.addElement("svg", opts);
    node.children.push(new SvgNode("defs"));
    return node;
  }

  addRect(opts: Readonly<Record<string, string>>) {
    return this.addElement("rect", opts);
  }

  addElement(name: string, opts: Readonly<Record<string, string>>) {
    const node = new SvgNode(name);
    for (const [key, value] of Object.entries(opts)) {
      node.attributes.set(key, value);
    }
    this.children.push(node);
    return node;
  }

  get attrsText() {
    // Iterator.map isn't supported yet on node, apparently; but also there's no sort() on it
    // TODO: sort() can be removed after py and js start producing the same svg
    return [...this.attributes.entries()]
      .sort((a, b) => {
        if (a[0] < b[0]) {
          return -1;
        }
        if (a[0] > b[0]) {
          return 1;
        }
        return 0;
      })
      .map(([key, value]) => ` ${key}="${value}"`)
      .join("");
  }

  text(offset = 0) {
    const indent = " ".repeat(offset);
    let result = `${indent}<${this.name}${this.attrsText}`;
    if (this.children.length > 0) {
      result += ">\n";
      for (const child of this.children) {
        result += child.text(offset + 2);
      }
      result += `${indent}</${this.name}>\n`;
    } else if (this.textContent === "") {
      result += "/>\n";
    } else {
      result += `>${this.textContent}</${this.name}>\n`;
    }
    return result;
  }
}

class SVG {
  private readonly root;

  constructor() {
    this.root = new SvgNode("svg");
    this.root.attributes.set("xmlns", "http://www.w3.org/2000/svg");
    this.root.attributes.set("xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.root.attributes.set("baseProfile", "full");
    this.root.attributes.set("version", "1.1");
    const defs = new SvgNode("defs");
    defs.textContent = DEFS_PREFACE;
    this.root.children.push(defs);
  }

  addImage(href: string, opts: Readonly<Record<string, string>>) {
    this.root.addImage(href, opts);
  }

  addText(text: string, opts: Readonly<Record<string, string>>) {
    this.root.addText(text, opts);
  }

  addSVG(opts: Readonly<Record<string, string>>) {
    return this.root.addSVG(opts);
  }

  addRect(opts: Readonly<Record<string, string>>) {
    this.root.addRect(opts);
  }

  addElement(name: string, opts: Readonly<Record<string, string>>) {
    return this.root.addElement(name, opts);
  }

  get attributes() {
    return this.root.attributes;
  }

  get text() {
    return `<?xml version="1.0" encoding="utf-8" ?>\n${this.root.text()}\n`;
  }
}

class ImageGenerator {
  /** The suits for the current variant. */
  private readonly allSuits: string[] = [];

  private xOffset = 0;
  private yOffset = 0;
  private readonly xOffsetWherePlayerBegins: number = 0;
  private xMax = 0;
  private leftYOffset = 0;
  private yTop = 0;
  private yBelow = 0;
  private readonly yamlMap: ReadonlyMap<string, unknown>;
  private readonly suitFilenames: Map<string, string>;
  private readonly svgFile: SVG;

  constructor(yamlMap: ReadonlyMap<string, unknown>) {
    this.yamlMap = yamlMap;

    const yamlSuits = yamlMap.get("suits") as Map<string, string> | undefined;
    const extraSuits = yamlSuits ?? new Map<string, string>();

    // Suits in addition to any standard suits.
    this.suitFilenames = new Map([
      ["r", "red"],
      ["y", "yellow"],
      ["g", "green"],
      ["b", "blue"],
      ["p", "purple"],
      ["m", "multi"],
      ...extraSuits,
    ]);

    // Use the play stack to determine the available suits for this particular variant.
    const defaultStacks = NO_VARIANT_SUITS.map((suit) => new Map([[suit, 0]]));
    const stacksMapArray = (yamlMap.get("stacks") ?? defaultStacks) as Array<
      ReadonlyMap<string, number>
    >; // TODO: remove type assertion
    this.allSuits = stacksMapArray.map((stacksMap) => {
      const keys = [...stacksMap.keys()];
      const key = keys[0];
      if (key === undefined || keys.length !== 1) {
        throw new Error("Failed to parse the stacks.");
      }
      return key;
    });

    // Create a new SVG file.
    this.svgFile = new SVG();

    // Draw the play stacks on the top-left part of the image.
    this.drawPlayStacks();

    // Add a bit of spacing between the play stacks and the player hands.
    this.xOffset += CARD_WIDTH + 4;

    this.xOffsetWherePlayerBegins = this.xOffset;
    this.xMax = this.xOffset;

    // Draw the player hands on the right side.
    this.drawPlayerRows();

    this.drawBigText();

    // Draw discarded cards, if any.
    this.drawDiscardPile();

    // Set the dimensions for the SVG file.
    const width = this.xMax;
    this.svgFile.attributes.set("width", width.toString());
    const yMax = Math.max(this.yOffset, this.leftYOffset);
    const height = yMax - this.yTop;
    this.svgFile.attributes.set("height", height.toString());
    this.svgFile.attributes.set(
      "viewBox",
      `0 ${this.yTop} ${this.xMax} ${yMax - this.yTop}`,
    );
  }

  private drawPlayStacks() {
    if (!this.yamlMap.has("stacks")) {
      this.leftYOffset = 0;
      return;
    }

    let xOffset = 0;
    const yOffset = CARD_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS;

    const stacks = this.yamlMap.get("stacks") as Array<Map<string, number>>;
    for (const colorValue of stacks) {
      const entries = [...colorValue.entries()];
      const firstEntry = entries[0];
      if (firstEntry === undefined || entries.length !== 1) {
        throw new Error("Failed to parse the stacks.");
      }
      const [color, value] = firstEntry;
      const fileName = `${this.suitFilenames.get(color)}${value}`;
      this.svgFile.addImage(`${PIECES_PATH}/cards/${fileName}.svg`, {
        x: xOffset.toString(),
        y: "0",
        width: CARD_WIDTH.toString(),
        height: CARD_HEIGHT.toString(),
      });

      xOffset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS;
    }

    this.xOffset = xOffset;
    this.leftYOffset = yOffset;
  }

  private drawPlayerRows() {
    const players = this.yamlMap.get("players") as Array<Map<string, unknown>>;

    for (const [playerNum, player] of players.entries()) {
      const text = player.get("text") as string | undefined;
      if (text === undefined) {
        // Draw a row representing a player's hand.
        const name = this.drawPlayerName(playerNum, player);
        const fourOrMorePlayers =
          name === PLAYER_NAMES[3] || name === PLAYER_NAMES[4];
        const cards = player.get("cards") as Array<ReadonlyMap<string, string>>;
        const numCards = cards.length;
        if (fourOrMorePlayers && numCards > 4) {
          throw new Error(
            "The players have too many cards for a 4-player or a 5-player game.",
          );
        }

        this.xOffset =
          this.xOffsetWherePlayerBegins +
          HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND;

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
      } else {
        // Draw a text separator between a player to describe some event taking place.
        // e.g. "After discarding the 1..."
        const x = this.xOffsetWherePlayerBegins + 40;
        this.svgFile.addText(text, {
          x: x.toString(),
          y: this.yOffset.toString(),
          dy: "20",
          class: TEXT_COLOR_CLASS,
        });
        this.yOffset += 50;
      }
    }
  }

  private drawPlayerName(
    playerNum: number,
    player: ReadonlyMap<string, unknown>,
  ) {
    const name = (player.get("name") ??
      PLAYER_NAMES[playerNum] ??
      "Unknown") as string; // TODO

    const r = this.svgFile.addSVG({
      x: this.xOffsetWherePlayerBegins.toString(),
      y: this.yOffset.toString(),
      width: HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND.toString(),
      height: CARD_HEIGHT.toString(),
    });
    r.addText(name, {
      x: "0%",
      y: "50%",
      class: TEXT_COLOR_CLASS,
      style: "font-size: 1.4em;",
      "dominant-baseline": "central",
    });

    if (player.has("clue_giver")) {
      // Based on: https://stackoverflow.com/a/42783381/14347173
      const clueGiverDescription = "Clue Giver";
      r.addText(clueGiverDescription, {
        x: "0%",
        y: "50%",
        dy: "30",
        fill: "black",
        "dominant-baseline": "central",
        filter: "url(#clue_giver)",
      });
      r.addText(clueGiverDescription, {
        x: "0%",
        y: "50%",
        dy: "30",
        fill: "black",
        "dominant-baseline": "central",
      });
    }
    return name;
  }

  private drawPlayerCard(card: ReadonlyMap<string, string>) {
    const cardType = `${card.get("type")}`;
    const clued = !cardType.startsWith("x");

    if (card.has("border") || clued) {
      this.drawClueBorder();
    }

    const crossedOut =
      (card.get("crossed_out") as string | number | undefined)?.toString() ??
      "";
    const orange =
      (card.get("orange") as string | number | undefined)?.toString() ?? "";

    if (clued) {
      this.drawCluedCard(
        cardType,
        crossedOut,
        orange,
        this.xOffset,
        this.yOffset,
      );
    } else {
      const cardTypeWithoutX = new Set(cardType.slice(1));
      this.drawUncluedCard(cardTypeWithoutX, crossedOut, orange);
    }

    this.drawExtraCardAttributes(card);

    this.xOffset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS;
  }

  private drawClueBorder() {
    const clueBorderOverlap = 6;
    const x = this.xOffset - clueBorderOverlap / 2;
    const y = this.yOffset - clueBorderOverlap / 2;
    const width = CARD_WIDTH + clueBorderOverlap;
    const height = CARD_HEIGHT + clueBorderOverlap;
    this.svgFile.addRect({
      x: x.toString(),
      y: y.toString(),
      width: width.toString(),
      height: height.toString(),
      fill: CLUE_BORDER_COLOR,
      rx: CARD_ROUNDED_CORNER_SIZE.toString(),
      ry: CARD_ROUNDED_CORNER_SIZE.toString(),
    });

    if (this.yOffset === 0) {
      this.yTop = Math.min(this.yTop, -clueBorderOverlap / 2);
    }
  }

  /** `crossedOut` represents suits and ranks that are crossed out from negative clues. */
  private drawUncluedCard(
    pips: ReadonlySet<string> | undefined,
    crossedOut: string,
    orange: string,
  ) {
    this.validateCardType(crossedOut);
    const s = this.svgFile.addSVG({
      x: this.xOffset.toString(),
      y: this.yOffset.toString(),
      width: CARD_WIDTH.toString(),
      height: CARD_HEIGHT.toString(),
    });
    s.addRect({
      x: "0",
      y: "0",
      width: CARD_WIDTH.toString(),
      height: CARD_HEIGHT.toString(),
      fill: "gray",
      rx: CARD_ROUNDED_CORNER_SIZE.toString(),
      ry: CARD_ROUNDED_CORNER_SIZE.toString(),
    });

    if (pips !== undefined) {
      this.drawCardPips(s, pips, crossedOut, orange);
    }
  }

  private drawCluedCard(
    cardType: string,
    crossedOut: string,
    orange: string,
    x: number,
    y: number,
  ) {
    this.validateCardType(cardType);

    // Use sets to store the possible ranks and suits.
    const cardTypeSet = new Set(cardType);
    const cardTypeSetValues = [...cardTypeSet];
    const matchingRanks = cardTypeSetValues.filter((character) =>
      ALL_RANKS.has(character),
    );
    const ranks = new Set(matchingRanks);
    const matchingSuits = cardTypeSetValues.filter((character) =>
      this.allSuits.includes(character),
    );
    const suits = new Set(matchingSuits);

    if (ranks.size !== 1 && suits.size !== 1) {
      // This is a card with an unknown rank and an unknown color.
      const s = this.svgFile.addSVG({
        x: x.toString(),
        y: y.toString(),
        width: CARD_WIDTH.toString(),
        height: CARD_HEIGHT.toString(),
      });
      s.addRect({
        x: "0",
        y: "0",
        width: CARD_WIDTH.toString(),
        height: CARD_HEIGHT.toString(),
        fill: "gray",
        rx: CARD_ROUNDED_CORNER_SIZE.toString(),
        ry: CARD_ROUNDED_CORNER_SIZE.toString(),
      });
      // Always draw pips on clued cards with unknown rank + unknown color.
      const pips = new Set(...ranks, ...suits);
      this.drawCardPips(s, pips, crossedOut, orange);
    } else if (ranks.size === 1 && suits.size !== 1) {
      // This is a card with a known rank and an unknown color.
      const s = this.svgFile.addSVG({
        x: x.toString(),
        y: y.toString(),
        width: CARD_WIDTH.toString(),
        height: CARD_HEIGHT.toString(),
      });
      const rankStrings = [...ranks.values()];
      const firstRank = rankStrings[0];
      if (firstRank === undefined) {
        throw new Error("Failed to parse the first rank.");
      }
      s.addImage(`${PIECES_PATH}/cards/${firstRank}.svg`, {
        x: "0",
        y: "0",
        width: CARD_WIDTH.toString(),
        height: CARD_HEIGHT.toString(),
      });
      this.drawCardPips(s, suits, crossedOut, orange);
    } else if (ranks.size !== 1 && suits.size === 1) {
      // This is a card with a known color and an unknown rank.
      const s = this.svgFile.addSVG({
        x: x.toString(),
        y: y.toString(),
        width: CARD_WIDTH.toString(),
        height: CARD_HEIGHT.toString(),
      });
      const suitStrings = [...suits.values()];
      const firstSuit = suitStrings[0];
      if (firstSuit === undefined) {
        throw new Error("Failed to parse the first suit.");
      }
      const suitName = this.suitFilenames.get(firstSuit);
      if (suitName === undefined) {
        throw new Error("Failed to parse the first suit name.");
      }
      s.addImage(`${PIECES_PATH}/cards/${suitName}.svg`, {
        x: "0",
        y: "0",
        width: CARD_WIDTH.toString(),
        height: CARD_HEIGHT.toString(),
      });
      this.drawCardPips(s, ranks, crossedOut, orange);
    } else {
      // An exact card identity was specified. (e.g. "r1")
      const suitStrings = [...suits.values()];
      const firstSuit = suitStrings[0];
      if (firstSuit === undefined) {
        throw new Error("Failed to parse the first suit.");
      }
      const suitName = this.suitFilenames.get(firstSuit);
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
          x: x.toString(),
          y: y.toString(),
          width: CARD_WIDTH.toString(),
          height: CARD_HEIGHT.toString(),
        },
      );
    }
  }

  private validateCardType(card: string) {
    if (typeof card !== "string") {
      throw new TypeError(`not string: ${JSON.stringify(card)}`);
      // TODO: get rid of this
    }

    // Parse the string that contains:
    // 1) letters (representing card suits)
    // 2) numbers (representing card ranks)
    // e.g. "rb34"
    const letters: string[] = [];
    const numbers: string[] = [];
    for (const ch of card) {
      if (/^\d$/.test(ch)) {
        numbers.push(ch);
      } else {
        letters.push(ch);
      }
    }

    // Validate the suits.
    for (const letter of letters) {
      if (!this.allSuits.includes(letter)) {
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
      const firstCharacter = card[0];
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
      for (const ch of card) {
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
      const sortedLetters = letters.toSorted((a, b) => {
        const aa = this.allSuits.indexOf(a);
        const bb = this.allSuits.indexOf(b);
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
    svg: SvgNode,
    pips: ReadonlySet<string>,
    crossedOutString: string,
    orangeString: string,
  ) {
    const crossedOut = new Set(crossedOutString);
    const orange = new Set(orangeString);
    const rankPipWidth = CARD_WIDTH / 5;
    for (let rank = 1; rank < 6; rank++) {
      if (pips.has(`${rank}`)) {
        const x = (rank - 1) * rankPipWidth;
        const y = (CARD_HEIGHT * 4) / 5;
        const height = CARD_HEIGHT / 5;
        const rect = svg.addSVG({
          x: x.toString(),
          y: y.toString(),
          width: rankPipWidth.toString(),
          height: height.toString(),
        });
        rect.addText(rank.toString(), {
          x: "50%",
          y: "50%",
          fill: orange.has(rank.toString()) ? "orange" : "white",
          style: "filter: url(#shadow_rank)",
          "text-anchor": "middle",
          "dominant-baseline": "central",
        });
        if (crossedOut.has(`${rank}`)) {
          const x2 = CARD_WIDTH / 10 - 6;
          const y2 = CARD_HEIGHT / 10 - 6;
          rect.addImage(`${PIECES_PATH}/x.png`, {
            x: x2.toString(),
            y: y2.toString(),
            width: "12",
            height: "12",
            style: "filter: url(#black_x_rank)",
          });
        }
      }
    }

    const angle = (2 * Math.PI) / this.allSuits.length;
    for (const [i, color] of this.allSuits.entries()) {
      if (pips.has(color)) {
        const x = CARD_WIDTH / 2 - 6 - 20 * Math.sin(angle * i);
        const y = CARD_HEIGHT / 2 - 6 - 20 * Math.cos(angle * i);
        svg.addImage(
          `${PIECES_PATH}/pips/${this.suitFilenames.get(color)}.svg`,
          {
            x: x.toString(),
            y: y.toString(),
            width: "12",
            height: "12",
            style: "filter: url(#shadow_suit)",
          },
        );
        if (crossedOut.has(color)) {
          const x2 = CARD_WIDTH / 2 - 6 - 20 * Math.sin(angle * i) - 2;
          const y2 = CARD_HEIGHT / 2 - 6 - 20 * Math.cos(angle * i) - 2;
          svg.addImage(`${PIECES_PATH}/x.png`, {
            x: x2.toString(),
            y: y2.toString(),
            width: "16",
            height: "16",
            style: "filter: url(#black_x_suit)",
          });
        }
      }
    }
  }

  private drawExtraCardAttributes(card: ReadonlyMap<string, unknown>) {
    if (card.has("trash")) {
      const x = this.xOffset + 5;
      const y = this.yOffset + 5;
      const width = CARD_WIDTH - 10;
      const height = CARD_HEIGHT - 10;
      this.svgFile.addImage(`${PIECES_PATH}/trashcan.png`, {
        x: x.toString(),
        y: y.toString(),
        width: width.toString(),
        height: height.toString(),
        opacity: "0.4",
      });
    }

    const clue = card.get("clue") as string | undefined;
    if (clue !== undefined) {
      // Draw the arrow above the card.
      const arrowName = card.get("retouched") === true ? "arrow_dark" : "arrow";
      const x = this.xOffset + 10;
      const y = this.yOffset - 40;
      this.svgFile.addImage(`${PIECES_PATH}/${arrowName}.svg`, {
        x: x.toString(),
        y: y.toString(),
        width: "50",
        height: "70",
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
        cx: cx.toString(),
        cy: cy.toString(),
        r: "15",
        fill: color,
        stroke: color === "black" ? "white" : "black",
        "stroke-width": "2",
      });

      if (/^\d$/.test(clue)) {
        const x2 = this.xOffset + 27;
        const y2 = this.yOffset - 23;
        const r = this.svgFile.addSVG({
          x: x2.toString(),
          y: y2.toString(),
          width: "16",
          height: "16",
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

    const above = card.get("above") as string | undefined;
    if (above !== undefined) {
      this.drawTextbox(above, 0);
    }

    const below = card.get("below") as string | undefined;
    if (below !== undefined) {
      const yb = this.drawTextbox(below, CARD_HEIGHT + 5);
      if (yb > this.yBelow) {
        this.yBelow = yb;
      }
    }

    const middleNote = card.get("middle_note") as string | undefined;
    if (middleNote !== undefined) {
      const colors: ReadonlyMap<string, string> = new Map([
        ["(R)", "salmon"],
        ["(B)", "deepskyblue"],
        ["(G)", "lightgreen"],
        ["(Y)", "yellow"],
        ["(P)", "violet"],
      ]);
      const color = colors.get(middleNote) ?? "white";
      const r = this.svgFile.addSVG({
        x: this.xOffset.toString(),
        y: this.yOffset.toString(),
        width: CARD_WIDTH.toString(),
        height: CARD_HEIGHT.toString(),
      });
      r.addText(middleNote, {
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

  private drawTextbox(
    opts: string | Map<string, string>,
    offset: number,
  ): number {
    if (Array.isArray(opts)) {
      let myOffset = offset;
      for (const part of opts) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        myOffset += 5 + this.drawTextbox(part, myOffset);
      }
      return myOffset - offset;
    }

    let text: string[];
    let color: string;
    if (typeof opts === "string") {
      text = [opts];
      const firstColor = opts.split(" ")[0];
      if (firstColor === undefined) {
        throw new Error("Failed to parse the first color.");
      }
      color = firstColor.toLowerCase();
      const sameColors = new Set([
        "red",
        "yellow",
        "black",
        "purple",
        "blue",
        "green",
        "rainbow",
        "pink",
      ]);
      if (!sameColors.has(color)) {
        const colors: ReadonlyMap<string, string> = new Map([
          ["focus", "gold"],
          ["play", "gold"],
          ["chop", "darkred"],
          ["fresh", "green"],
          ["bad", "gray"],
          ["brown", "sienna"],
        ]);
        color = colors.get(color) ?? "black";
      }
    } else {
      const newText = opts.get("text") as string | string[];
      text = typeof newText === "string" ? [newText] : newText;
      color = opts.get("color") ?? "black";
    }

    const firstCharacter = text[0];
    if (firstCharacter === undefined) {
      throw new Error("Failed to parse the first character of the text.");
    }

    let width: number;
    let r: SvgNode;
    // TODO: make this widening more generic
    if (firstCharacter.startsWith("Rainbow")) {
      width = 85;
      const x = this.xOffset - 10;
      const y = this.yOffset + offset;
      const height = 20 * text.length;
      r = this.svgFile.addSVG({
        x: x.toString(),
        y: y.toString(),
        width: width.toString(),
        height: height.toString(),
      });
    } else {
      width = 64;
      const x = this.xOffset + 3;
      const y = this.yOffset + offset;
      const height = 20 * text.length;
      r = this.svgFile.addSVG({
        x: x.toString(),
        y: y.toString(),
        width: width.toString(),
        height: height.toString(),
      });
    }
    const textColor = new Set(["gold", "yellow", "rainbow", "pink"]).has(color)
      ? "black"
      : "white";

    const height = 20 * text.length;
    r.addRect({
      x: "0",
      y: "0",
      width: width.toString(),
      height: height.toString(),
      stroke: textColor,
      fill: color === "rainbow" ? "url(#rainbowtext)" : color,
    });

    for (const [i, line] of text.entries()) {
      const y = 20 * i;
      r.addSVG({
        x: "0",
        y: y.toString(),
        width: width.toString(),
        height: "20",
      }).addText(line, {
        x: "50%",
        y: "50%",
        fill: textColor,
        "text-anchor": "middle",
        "dominant-baseline": "central",
      });
    }

    return 20 * text.length;
  }

  // TODO: unify with drawTextbox
  private drawBigText() {
    const bigText = this.yamlMap.get("big_text") as
      | Map<string, string>
      | undefined;
    if (bigText === undefined) {
      return;
    }
    const text = bigText.get("text");
    if (text === undefined) {
      throw new Error('Failed to parse the text in "big_text" element.');
    }

    const TEXT_WIDTH = 200;
    const TEXT_HEIGHT = 50;
    const xOfText =
      (this.allSuits.length * (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS) -
        HORIZONTAL_SPACING_BETWEEN_CARDS -
        TEXT_WIDTH) /
      2;
    const yOfText = this.leftYOffset;

    // Select a specific color for some keywords.
    const colors: ReadonlyMap<string, string> = new Map([
      ["Bluff", "gold"],
      ["Finesse", "green"],
      ["Illegal!", "red"],
    ]);
    const color = colors.get(text) ?? bigText.get("color") ?? "black";

    const textColor = new Set(["gold", "yellow", "rainbow"]).has(color)
      ? "black"
      : "white";

    const r = this.svgFile.addSVG({
      x: xOfText.toString(),
      y: yOfText.toString(),
      width: TEXT_WIDTH.toString(),
      height: TEXT_HEIGHT.toString(),
    });
    r.addRect({
      x: "0",
      y: "0",
      width: TEXT_WIDTH.toString(),
      height: TEXT_HEIGHT.toString(),
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

  private drawDiscardPile() {
    const discarded = this.yamlMap.get("discarded") as string[] | undefined;
    if (discarded === undefined) {
      return;
    }

    const TRASH_WIDTH = 200;
    const TRASH_HEIGHT = 200;
    const xOfDiscardPile =
      (this.allSuits.length * (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS) -
        HORIZONTAL_SPACING_BETWEEN_CARDS -
        TRASH_WIDTH) /
      2;
    const yOfDiscardPile = this.leftYOffset;

    this.svgFile.addImage(`${PIECES_PATH}/trashcan.png`, {
      x: xOfDiscardPile.toString(),
      y: yOfDiscardPile.toString(),
      width: TRASH_WIDTH.toString(),
      height: TRASH_HEIGHT.toString(),
      opacity: "0.2",
    });

    const widthTotal = CARD_WIDTH + ((discarded.length - 1) * CARD_WIDTH) / 2;
    const heightTotal =
      CARD_HEIGHT + ((discarded.length - 1) * CARD_HEIGHT) / 3;
    let x = xOfDiscardPile + TRASH_WIDTH / 2 - widthTotal / 2;
    let y = yOfDiscardPile + TRASH_HEIGHT / 2 - heightTotal / 2;
    for (const card of discarded) {
      this.drawCluedCard(card, "", "", x, y);
      x += CARD_WIDTH / 2;
      y += CARD_HEIGHT / 3;
    }

    const rx = CARD_ROUNDED_CORNER_SIZE * 2;
    const ry = CARD_ROUNDED_CORNER_SIZE * 2;
    this.svgFile.addRect({
      x: xOfDiscardPile.toString(),
      y: yOfDiscardPile.toString(),
      width: TRASH_WIDTH.toString(),
      height: TRASH_HEIGHT.toString(),
      rx: rx.toString(),
      ry: ry.toString(),
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
  const yamlMap = YAML.parse(source, {
    mapAsMap: true,
  }) as Map<string, unknown>;
  const image = new ImageGenerator(yamlMap);
  return image.getSVGText();
}
