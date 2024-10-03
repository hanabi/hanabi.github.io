// See: https://webpack.js.org/contribute/writing-a-loader/

/* eslint-disable */
// @ts-nocheck

import YAML from "yaml";

// Needed because `Set.intersection` is not in Node 20. This polyfill can be removed when the
// Node.js LTS is brought to version 22.
import "core-js/actual/set/index.js";

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
const PLAYER_NAMES = ["Alice", "Bob", "Cathy", "Donald", "Emily"];
const PIECES_PATH = "/img/pieces";
const NO_VARIANT_SUITS = ["r", "y", "g", "b", "p"];
const ALL_RANKS = new Set(["1", "2", "3", "4", "5"]);

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

  addImage(href: string, opts: Record<string, unknown>) {
    const node = this.addElement("image", opts);
    node.attributes.set("xlink:href", href);
  }

  addText(text: string, opts: Record<string, unknown>) {
    const node = this.addElement("text", opts);
    node.textContent = text;
  }

  addSVG(opts: Record<string, unknown>) {
    const node = this.addElement("svg", opts);
    node.children.push(new SvgNode("defs"));
    return node;
  }

  addRect(opts: Record<string, unknown>) {
    return this.addElement("rect", opts);
  }

  addElement(name: string, opts: Record<string, unknown>) {
    const node = new SvgNode(name);
    for (const a in opts) {
      node.attributes.set(a, opts[a]);
    }
    this.children.push(node);
    return node;
  }

  get attrs_text() {
    // Iterator.map isn't supported yet on node, apparently; but also there's no sort() on it
    // TODO: sort() can be removed after py and js start producing the same svg
    return [...this.attributes.entries()]
      .sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
      })
      .map(([key, value]) => ` ${key}="${value}"`)
      .join("");
  }

  text(offset = 0) {
    const indent = " ".repeat(offset);
    let result = `${indent}<${this.name}${this.attrs_text}`;
    if (this.children.length > 0) {
      result += ">\n";
      for (const child of this.children) {
        result += child.text(offset + 2);
      }
      result += `${indent}</${this.name}>\n`;
    } else if (this.textContent) {
      result += `>${this.textContent}</${this.name}>\n`;
    } else {
      result += "/>\n";
    }
    return result;
  }
}

class SVG {
  #root;

  constructor() {
    this.#root = new SvgNode("svg");
    this.#root.attributes.set("xmlns", "http://www.w3.org/2000/svg");
    this.#root.attributes.set("xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.#root.attributes.set("baseProfile", "full");
    this.#root.attributes.set("version", "1.1");
    const defs = new SvgNode("defs");
    defs.textContent = DEFS_PREFACE;
    this.#root.children.push(defs);
  }

  addImage(href: string, opts: Record<string, unknown>) {
    this.#root.addImage(href, opts);
  }

  addText(text: string, opts: Record<string, unknown>) {
    this.#root.addText(text, opts);
  }

  addSVG(opts: Record<string, unknown>) {
    return this.#root.addSVG(opts);
  }

  addRect(opts: Record<string, unknown>) {
    this.#root.addRect(opts);
  }

  addElement(name: string, opts: Record<string, unknown>) {
    return this.#root.addElement(name, opts);
  }

  get attributes() {
    return this.#root.attributes;
  }

  get text() {
    return (
      '<?xml version="1.0" encoding="utf-8" ?>\n' + this.#root.text() + "\n"
    );
  }
}

class ImageGenerator {
  #allSuits = []; // Representing the possible suits for the current variant.
  #xOffset = 0;
  #yOffset = 0;
  #xOffsetWherePlayerBegins = 0;
  #xMax = 0;
  #leftYOffset = 0;
  #yTop = 0;
  #y_below = 0;
  #yamlMap: Map<string, unknown>;
  #suit_filenames;
  #svgFile;

  constructor(yamlMap: Map<string, unknown>) {
    this.#yamlMap = yamlMap;

    const yamlSuits = yamlMap.get("suits");
    const extraSuits = Array.isArray(yamlSuits) ? yamlSuits : [];

    // Suits in addition to any standard suits.
    this.#suit_filenames = new Map([
      ["r", "red"],
      ["y", "yellow"],
      ["g", "green"],
      ["b", "blue"],
      ["p", "purple"],
      ["m", "multi"],
      ...extraSuits,
    ]);

    // Use the play stack to determine the available suits for this particular variant.
    this.#allSuits = (
      yamlMap.get("stacks") ?? NO_VARIANT_SUITS.map((a) => new Map([[a, 0]]))
    ).map((a) => a.keys().next().value);

    // Create a new SVG file.
    this.#svgFile = new SVG();

    // Draw the play stacks on the top-left part of the image.
    this.#drawPlayStacks();

    // Add a bit of spacing between the play stacks and the player hands.
    this.#xOffset += CARD_WIDTH + 4;

    this.#xOffsetWherePlayerBegins = this.#xOffset;
    this.#xMax = this.#xOffset;

    // Draw the player hands on the right side.
    this.#drawPlayerRows();

    this.#drawBigText();

    // Draw discarded cards, if any.
    this.#drawDiscardPile();

    // Set the dimensions for the SVG file.
    const yMax = Math.max(this.#yOffset, this.#leftYOffset);
    this.#svgFile.attributes.set("width", this.#xMax);
    this.#svgFile.attributes.set("height", yMax - this.#yTop);
    this.#svgFile.attributes.set(
      "viewBox",
      `0 ${this.#yTop} ${this.#xMax} ${yMax - this.#yTop}`,
    );
  }

  #drawPlayStacks() {
    if (!this.#yamlMap.has("stacks")) {
      this.#leftYOffset = 0;
      return;
    }

    let x_offset = 0;
    let y_offset = CARD_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS;

    for (const color_value of this.#yamlMap.get("stacks")) {
      const [color, value] = color_value.entries().next().value;
      const file_name = `${this.#suit_filenames.get(color)}${value}`;
      this.#svgFile.addImage(`${PIECES_PATH}/cards/${file_name}.svg`, {
        x: x_offset,
        y: 0,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });

      x_offset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS;
    }

    this.#xOffset = x_offset;
    this.#leftYOffset = y_offset;
  }

  #drawPlayerRows() {
    this.#yamlMap.get("players").forEach((player, playerNum) => {
      if (player.has("text")) {
        // Draw a text separator between a player to describe some event taking place.
        // e.g. "After discarding the 1..."
        this.#svgFile.addText(player.get("text"), {
          x: this.#xOffsetWherePlayerBegins + 40,
          y: this.#yOffset,
          dy: 20,
          class: TEXT_COLOR_CLASS,
        });
        this.#yOffset += 50;
      } else {
        // Draw a row representing a player's hand.
        const name = this.#draw_player_name(playerNum, player);
        const four_or_more_players =
          name == PLAYER_NAMES[3] || name == PLAYER_NAMES[4];
        const num_cards = player.get("cards").length;
        if (four_or_more_players && num_cards > 4) {
          throw new Error(
            "The players have too many cards for a 4-player or a 5-player game.",
          );
        }

        this.#xOffset =
          this.#xOffsetWherePlayerBegins +
          HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND;

        // We need to increase the size of image if there is a tall text box "below" one of cards.
        this.#y_below = 5;

        // Draw each card
        for (const card of player.get("cards")) {
          this.#draw_player_card(card);
        }

        this.#yOffset +=
          CARD_HEIGHT + this.#y_below + VERTICAL_SPACING_BETWEEN_PLAYERS;
        if (this.#xOffset > this.#xMax) {
          this.#xMax = this.#xOffset;
        }
      }
    });
  }

  #draw_player_name(playerNum, player) {
    const name = player.get("name") ?? PLAYER_NAMES[playerNum];

    const r = this.#svgFile.addSVG({
      x: this.#xOffsetWherePlayerBegins,
      y: this.#yOffset,
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

    if (player.has("clue_giver")) {
      // Based on: https://stackoverflow.com/a/42783381/14347173
      const clue_giver_description = "Clue Giver";
      r.addText(clue_giver_description, {
        x: "0%",
        y: "50%",
        dy: 30,
        fill: "black",
        "dominant-baseline": "central",
        filter: "url(#clue_giver)",
      });
      r.addText(clue_giver_description, {
        x: "0%",
        y: "50%",
        dy: 30,
        fill: "black",
        "dominant-baseline": "central",
      });
    }
    return name;
  }

  #draw_player_card(card) {
    const card_type = card.get("type") + "";
    const clued = !card_type.startsWith("x");

    if (card.get("border") ?? clued) {
      this.#draw_clue_border();
    }

    const crossed_out = (card.get("crossed_out") ?? "") + "";
    const orange = (card.get("orange") ?? "") + "";

    if (clued) {
      this.#drawCluedCard(
        card_type,
        crossed_out,
        orange,
        this.#xOffset,
        this.#yOffset,
      );
    } else {
      const card_type_without_x = new Set(card_type.substring(1));
      this.#draw_unclued_card(card_type_without_x, crossed_out, orange);
    }

    this.#drawExtraCardAttributes(card);

    this.#xOffset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS;
  }

  #draw_clue_border() {
    const clue_border_overlap = 6;
    this.#svgFile.addRect({
      x: this.#xOffset - clue_border_overlap / 2,
      y: this.#yOffset - clue_border_overlap / 2,
      width: CARD_WIDTH + clue_border_overlap,
      height: CARD_HEIGHT + clue_border_overlap,
      fill: CLUE_BORDER_COLOR,
      rx: CARD_ROUNDED_CORNER_SIZE,
      ry: CARD_ROUNDED_CORNER_SIZE,
    });

    if (this.#yOffset == 0) {
      this.#yTop = Math.min(this.#yTop, -clue_border_overlap / 2);
    }
  }

  #draw_unclued_card(pips, crossedOut, orange) {
    // "crossed_out" represents suits and ranks that are crossed out from negative clues.
    this.#validateCardType(crossedOut);
    const s = this.#svgFile.addSVG({
      x: this.#xOffset,
      y: this.#yOffset,
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

    if (pips) {
      this.#drawCardPips(s, pips, crossedOut, orange);
    }
  }

  #drawCluedCard(cardType, crossedOut, orange, x, y) {
    this.#validateCardType(cardType);

    // Use sets to store the possible ranks and suits.
    const card_type_set = new Set(cardType);
    const ranks = card_type_set.intersection(ALL_RANKS);
    const suits = card_type_set.intersection(new Set(this.#allSuits));

    if (ranks.size !== 1 && suits.size !== 1) {
      // This is a card with an unknown rank and an unknown color.
      const s = this.#svgFile.addSVG({
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
      const pips = ranks.union(suits); // Combine the ranks and the suits together.
      this.#drawCardPips(s, pips, crossedOut, orange);
    } else if (ranks.size === 1 && suits.size !== 1) {
      // This is a card with a known rank and an unknown color.
      const s = this.#svgFile.addSVG({
        x,
        y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      s.addImage(`${PIECES_PATH}/cards/${ranks.keys().next().value}.svg`, {
        x: 0,
        y: 0,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      this.#drawCardPips(s, suits, crossedOut, orange);
    } else if (ranks.size !== 1 && suits.size === 1) {
      // This is a card with a known color and an unknown rank.
      const s = this.#svgFile.addSVG({
        x,
        y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      s.addImage(
        `${PIECES_PATH}/cards/${this.#suit_filenames.get(suits.keys().next().value)}.svg`,
        { x: 0, y: 0, width: CARD_WIDTH, height: CARD_HEIGHT },
      );
      this.#drawCardPips(s, ranks, crossedOut, orange);
    } else {
      // An exact card identity was specified. (e.g. "r1")
      this.#svgFile.addImage(
        `${PIECES_PATH}/cards/${this.#suit_filenames.get(suits.keys().next().value)}${ranks.keys().next().value}.svg`,
        { x, y, width: CARD_WIDTH, height: CARD_HEIGHT },
      );
    }
  }

  #validateCardType(card) {
    if (typeof card !== "string") {
      throw new Error("not string: " + JSON.stringify(card));
    }
    // Parse the string that contains:
    // 1) letters (representing card suits)
    // 2) numbers (representing card ranks)
    // e.g. "rb34"
    const letters = [];
    const numbers = [];
    for (const ch of card) {
      if (/^\d$/.test(ch)) {
        numbers.push(ch);
      } else {
        letters.push(ch);
      }
    }

    // Validate the suits.
    for (const letter of letters) {
      if (!this.#allSuits.includes(letter)) {
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
      if (ALL_RANKS.has(card[0])) {
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
        } else {
          if (letters.includes(ch)) {
            throw new Error(
              "When defining a card, the suits and the ranks have to be grouped together.",
            );
          }
        }
      }
    }

    // Validate that the suits come in order (with respect to the play stacks).
    if (letters.length >= 2) {
      const sorted_letters = JSON.parse(JSON.stringify(letters))
        .sort((a, b) => {
          const aa = this.#allSuits.indexOf(a);
          const bb = this.#allSuits.indexOf(b);
          return aa - bb;
        })
        .join("");
      if (letters.join("") !== sorted_letters) {
        throw new Error(
          `When defining a card, the suits must be specified in order from left to right. In other words, "${letters.join("")}" should be "${sorted_letters}".`,
        );
      }
    }
  }

  #drawCardPips(svg, pips, crossedOut, orange) {
    crossedOut = new Set(crossedOut);
    orange = new Set(orange);
    const rank_pip_width = CARD_WIDTH / 5;
    for (let rank = 1; rank < 6; ++rank) {
      if (pips.has(rank + "")) {
        const rect = svg.addSVG({
          x: (rank - 1) * rank_pip_width,
          y: (CARD_HEIGHT * 4) / 5,
          width: rank_pip_width,
          height: CARD_HEIGHT / 5,
        });
        rect.addText(rank, {
          x: "50%",
          y: "50%",
          fill: orange.has(rank + "") ? "orange" : "white",
          style: "filter: url(#shadow_rank)",
          "text-anchor": "middle",
          "dominant-baseline": "central",
        });
        if (crossedOut.has(rank + "")) {
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

    const angle = (2 * Math.PI) / this.#allSuits.length;
    this.#allSuits.forEach((color, i) => {
      if (pips.has(color)) {
        svg.addImage(
          `${PIECES_PATH}/pips/${this.#suit_filenames.get(color)}.svg`,
          {
            x: CARD_WIDTH / 2 - 6 - 20 * Math.sin(angle * i),
            y: CARD_HEIGHT / 2 - 6 - 20 * Math.cos(angle * i),
            width: 12,
            height: 12,
            style: "filter: url(#shadow_suit)",
          },
        );
        if (crossedOut.has(color)) {
          svg.addImage(`${PIECES_PATH}/x.png`, {
            x: CARD_WIDTH / 2 - 6 - 20 * Math.sin(angle * i) - 2,
            y: CARD_HEIGHT / 2 - 6 - 20 * Math.cos(angle * i) - 2,
            width: 16,
            height: 16,
            style: "filter: url(#black_x_suit)",
          });
        }
      }
    });
  }

  #drawExtraCardAttributes(card) {
    if (card.get("trash")) {
      this.#svgFile.addImage(`${PIECES_PATH}/trashcan.png`, {
        x: this.#xOffset + 5,
        y: this.#yOffset + 5,
        width: CARD_WIDTH - 10,
        height: CARD_HEIGHT - 10,
        opacity: 0.4,
      });
    }

    if (card.has("clue")) {
      // Draw the arrow above the card.
      const arrow_name = card.get("retouched") ? "arrow_dark" : "arrow";
      this.#svgFile.addImage(`${PIECES_PATH}/${arrow_name}.svg`, {
        x: this.#xOffset + 10,
        y: this.#yOffset - 40,
        width: 50,
        height: 70,
      });

      // Draw the clue circle on the arrow.
      const colors = new Map([
        ["r", "red"],
        ["b", "blue"],
        ["g", "lightgreen"],
        ["y", "yellow"],
        ["p", "blueviolet"],
        ["pink", "pink"],
      ]);
      const color = colors.get(card.get("clue")) ?? "black";
      this.#svgFile.addElement("circle", {
        cx: this.#xOffset + 35,
        cy: this.#yOffset - 15,
        r: 15,
        fill: color,
        stroke: color === "black" ? "white" : "black",
        "stroke-width": 2,
      });

      if (/^\d$/.test(card.get("clue"))) {
        const r = this.#svgFile.addSVG({
          x: this.#xOffset + 27,
          y: this.#yOffset - 23,
          width: 16,
          height: 16,
        });
        r.addText(card.get("clue"), {
          x: "50%",
          y: "50%",
          fill: "white",
          style: "font-size: 1.4em;",
          "text-anchor": "middle",
          "dominant-baseline": "central",
        });
      }

      if (this.#yOffset === 0) {
        this.#yTop = Math.min(this.#yTop, -35);
      }
    }

    if (card.get("above")) {
      this.#drawTextbox(card.get("above"), 0);
    }

    if (card.get("below")) {
      const yb = this.#drawTextbox(card.get("below"), CARD_HEIGHT + 5);
      if (yb > this.#y_below) {
        this.#y_below = yb;
      }
    }

    if (card.get("middle_note")) {
      const colors = new Map([
        ["(R)", "salmon"],
        ["(B)", "deepskyblue"],
        ["(G)", "lightgreen"],
        ["(Y)", "yellow"],
        ["(P)", "violet"],
      ]);
      const color = colors.get(card.get("middle_note")) ?? "white";
      const r = this.#svgFile.addSVG({
        x: this.#xOffset,
        y: this.#yOffset,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      r.addText(card.get("middle_note"), {
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

  #drawTextbox(opts, offset) {
    if (Array.isArray(opts)) {
      let my_offset = offset;
      for (const part of opts) {
        my_offset += 5 + this.#drawTextbox(part, my_offset);
      }
      return my_offset - offset;
    }

    let text: string[];
    let color;
    if (typeof opts === "string") {
      text = [opts];
      color = opts.split(" ")[0].toLowerCase();
      const same_colors = new Set([
        "red",
        "yellow",
        "black",
        "purple",
        "blue",
        "green",
        "rainbow",
        "pink",
      ]);
      if (!same_colors.has(color)) {
        const colors = new Map([
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
      text = opts.get("text");
      if (typeof text === "string") {
        text = [text];
      }
      color = opts.get("color") ?? "black";
    }

    let width;
    let r;
    // TODO: make this widening more generic
    if (text[0].startsWith("Rainbow")) {
      width = 85;
      r = this.#svgFile.addSVG({
        x: this.#xOffset - 10,
        y: this.#yOffset + offset,
        width,
        height: 20 * text.length,
      });
    } else {
      width = 64;
      r = this.#svgFile.addSVG({
        x: this.#xOffset + 3,
        y: this.#yOffset + offset,
        width,
        height: 20 * text.length,
      });
    }
    const text_color = new Set(["gold", "yellow", "rainbow", "pink"]).has(color)
      ? "black"
      : "white";

    r.addRect({
      x: 0,
      y: 0,
      width,
      height: 20 * text.length,
      stroke: text_color,
      fill: color === "rainbow" ? "url(#rainbowtext)" : color,
    });

    text.forEach((line, i) => {
      r.addSVG({ x: 0, y: 20 * i, width, height: 20 }).addText(line, {
        x: "50%",
        y: "50%",
        fill: text_color,
        "text-anchor": "middle",
        "dominant-baseline": "central",
      });
    });

    return 20 * text.length;
  }

  #drawBigText() {
    // TODO: unify with draw_textbox

    const opts = this.#yamlMap.get("big_text");
    if (!opts) return;
    const text = opts.get("text");

    const TEXT_WIDTH = 200;
    const TEXT_HEIGHT = 50;
    const x_of_text =
      (this.#allSuits.length * (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS) -
        HORIZONTAL_SPACING_BETWEEN_CARDS -
        TEXT_WIDTH) /
      2;
    const y_of_text = this.#leftYOffset;

    // Select specific color for some keywords
    const colors = new Map([
      ["Bluff", "gold"],
      ["Finesse", "green"],
      ["Illegal!", "red"],
    ]);
    const color = colors.get(text) ?? opts.get("color") ?? "black";

    const text_color = new Set(["gold", "yellow", "rainbow"]).has(color)
      ? "black"
      : "white";

    const r = this.#svgFile.addSVG({
      x: x_of_text,
      y: y_of_text,
      width: TEXT_WIDTH,
      height: TEXT_HEIGHT,
    });
    r.addRect({
      x: 0,
      y: 0,
      width: TEXT_WIDTH,
      height: TEXT_HEIGHT,
      stroke: text_color,
      fill: color,
    });
    r.addText(text, {
      x: "50%",
      y: "50%",
      fill: text_color,
      "text-anchor": "middle",
      "dominant-baseline": "central",
      style: "font-size: 2em;",
    });

    this.#leftYOffset += TEXT_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS;
  }

  #drawDiscardPile() {
    const discarded = this.#yamlMap.get("discarded");
    if (!discarded) return;

    const TRASH_WIDTH = 200;
    const TRASH_HEIGHT = 200;
    const xOfDiscardPile =
      (this.#allSuits.length * (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS) -
        HORIZONTAL_SPACING_BETWEEN_CARDS -
        TRASH_WIDTH) /
      2;
    const yOfDiscardPile = this.#leftYOffset;

    this.#svgFile.addImage(`${PIECES_PATH}/trashcan.png`, {
      x: xOfDiscardPile,
      y: yOfDiscardPile,
      width: TRASH_WIDTH,
      height: TRASH_HEIGHT,
      opacity: 0.2,
    });

    const width_total = CARD_WIDTH + ((discarded.length - 1) * CARD_WIDTH) / 2;
    const height_total =
      CARD_HEIGHT + ((discarded.length - 1) * CARD_HEIGHT) / 3;
    let x = xOfDiscardPile + TRASH_WIDTH / 2 - width_total / 2;
    let y = yOfDiscardPile + TRASH_HEIGHT / 2 - height_total / 2;
    for (const card of discarded) {
      this.#drawCluedCard(card, new Set(), new Set(), x, y);
      x += CARD_WIDTH / 2;
      y += CARD_HEIGHT / 3;
    }

    this.#svgFile.addRect({
      x: xOfDiscardPile,
      y: yOfDiscardPile,
      width: TRASH_WIDTH,
      height: TRASH_HEIGHT,
      rx: CARD_ROUNDED_CORNER_SIZE * 2,
      ry: CARD_ROUNDED_CORNER_SIZE * 2,
      stroke: "darkgreen",
      fill: "none",
      "stroke-width": 2,
    });

    this.#leftYOffset = yOfDiscardPile + TRASH_HEIGHT + 2;
  }

  getSVGText() {
    return this.#svgFile.text;
  }
}

export default function convertYAMLToSVG(source: string) {
  const yamlMap = YAML.parse(source, {
    mapAsMap: true,
  }) as Map<string, unknown>;
  const image = new ImageGenerator(yamlMap);
  return image.getSVGText();
}
