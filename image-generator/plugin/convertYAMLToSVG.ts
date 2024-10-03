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
 * This needs to be long enough for Donald (e.g. the longest player name). This will need to get
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
  name;
  children = [];
  attributes = new Map();
  text_content;

  constructor(name) {
    this.name = name;
  }

  addImage(href, opts) {
    const node = this.addElement("image", opts);
    node.attributes.set("xlink:href", href);
  }

  addText(text, opts) {
    const node = this.addElement("text", opts);
    node.text_content = text;
  }

  addSvg(opts) {
    const node = this.addElement("svg", opts);
    node.children.push(new SvgNode("defs"));
    return node;
  }

  addRect(opts) {
    return this.addElement("rect", opts);
  }

  addElement(name, opts) {
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
    } else if (this.text_content) {
      result += `>${this.text_content}</${this.name}>\n`;
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
    defs.text_content = DEFS_PREFACE;
    this.#root.children.push(defs);
  }

  addImage(href, opts) {
    this.#root.addImage(href, opts);
  }

  addText(text, opts) {
    this.#root.addText(text, opts);
  }

  addSvg(opts) {
    return this.#root.addSvg(opts);
  }

  addRect(opts) {
    this.#root.addRect(opts);
  }

  addElement(name, opts) {
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
  #all_suits = []; // Representing the possible suits for the current variant.
  #x_offset = 0;
  #y_offset = 0;
  #x_offset_where_player_begins = 0;
  #x_max = 0;
  #left_y_offset = 0;
  #y_top = 0;
  #y_below = 0;
  #yaml_file;
  #suit_filenames;
  #svg_file;

  constructor(yamlFile) {
    this.#yaml_file = yamlFile;

    // Suits in addition to any standard suits.
    this.#suit_filenames = new Map([
      ["r", "red"],
      ["y", "yellow"],
      ["g", "green"],
      ["b", "blue"],
      ["p", "purple"],
      ["m", "multi"],
      ...(yamlFile.get("suits") ?? []),
    ]);

    // Use the play stack to determine the available suits for this particular variant.
    this.#all_suits = (
      yamlFile.get("stacks") ?? NO_VARIANT_SUITS.map((a) => new Map([[a, 0]]))
    ).map((a) => a.keys().next().value);

    // Create a new SVG file.
    this.#svg_file = new SVG();

    // Draw the play stacks on the top-left part of the image.
    this.#draw_play_stacks();

    // Add a bit of spacing between the play stacks and the player hands.
    this.#x_offset += CARD_WIDTH + 4;

    this.#x_offset_where_player_begins = this.#x_offset;
    this.#x_max = this.#x_offset;

    // Draw the player hands on the right side.
    this.#draw_player_rows();

    this.#draw_big_text();

    // Draw discarded cards, if any.
    this.#draw_discard_pile();

    // Set the dimensions for the SVG file.
    const y_max = Math.max(this.#y_offset, this.#left_y_offset);
    this.#svg_file.attributes.set("width", this.#x_max);
    this.#svg_file.attributes.set("height", y_max - this.#y_top);
    this.#svg_file.attributes.set(
      "viewBox",
      `0 ${this.#y_top} ${this.#x_max} ${y_max - this.#y_top}`,
    );
  }

  #draw_play_stacks() {
    if (!this.#yaml_file.has("stacks")) {
      this.#left_y_offset = 0;
      return;
    }

    let x_offset = 0;
    let y_offset = CARD_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS;

    for (const color_value of this.#yaml_file.get("stacks")) {
      const [color, value] = color_value.entries().next().value;
      const file_name = `${this.#suit_filenames.get(color)}${value}`;
      this.#svg_file.addImage(`${PIECES_PATH}/cards/${file_name}.svg`, {
        x: x_offset,
        y: 0,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });

      x_offset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS;
    }

    this.#x_offset = x_offset;
    this.#left_y_offset = y_offset;
  }

  #draw_player_rows() {
    this.#yaml_file.get("players").forEach((player, player_num) => {
      if (player.has("text")) {
        // Draw a text separator between a player to describe some event taking place.
        // e.g. "After discarding the 1..."
        this.#svg_file.addText(player.get("text"), {
          x: this.#x_offset_where_player_begins + 40,
          y: this.#y_offset,
          dy: 20,
          class: TEXT_COLOR_CLASS,
        });
        this.#y_offset += 50;
      } else {
        // Draw a row representing a player's hand.
        const name = this.#draw_player_name(player_num, player);
        const four_or_more_players =
          name == PLAYER_NAMES[3] || name == PLAYER_NAMES[4];
        const num_cards = player.get("cards").length;
        if (four_or_more_players && num_cards > 4) {
          throw new Error(
            "The players have too many cards for a 4-player or a 5-player game.",
          );
        }

        this.#x_offset =
          this.#x_offset_where_player_begins +
          HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND;

        // We need to increase the size of image if there is a tall text box "below" one of cards.
        this.#y_below = 5;

        // Draw each card
        for (const card of player.get("cards")) {
          this.#draw_player_card(card);
        }

        this.#y_offset +=
          CARD_HEIGHT + this.#y_below + VERTICAL_SPACING_BETWEEN_PLAYERS;
        if (this.#x_offset > this.#x_max) {
          this.#x_max = this.#x_offset;
        }
      }
    });
  }

  #draw_player_name(player_num, player) {
    const name = player.get("name") ?? PLAYER_NAMES[player_num];

    const r = this.#svg_file.addSvg({
      x: this.#x_offset_where_player_begins,
      y: this.#y_offset,
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
      this.#draw_clued_card(
        card_type,
        crossed_out,
        orange,
        this.#x_offset,
        this.#y_offset,
      );
    } else {
      const card_type_without_x = new Set(card_type.substring(1));
      this.#draw_unclued_card(card_type_without_x, crossed_out, orange);
    }

    this.#draw_extra_card_attributes(card);

    this.#x_offset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS;
  }

  #draw_clue_border() {
    const clue_border_overlap = 6;
    this.#svg_file.addRect({
      x: this.#x_offset - clue_border_overlap / 2,
      y: this.#y_offset - clue_border_overlap / 2,
      width: CARD_WIDTH + clue_border_overlap,
      height: CARD_HEIGHT + clue_border_overlap,
      fill: CLUE_BORDER_COLOR,
      rx: CARD_ROUNDED_CORNER_SIZE,
      ry: CARD_ROUNDED_CORNER_SIZE,
    });

    if (this.#y_offset == 0) {
      this.#y_top = Math.min(this.#y_top, -clue_border_overlap / 2);
    }
  }

  #draw_unclued_card(pips, crossed_out, orange) {
    // "crossed_out" represents suits and ranks that are crossed out from negative clues.
    this.#validate_card_type(crossed_out);
    const s = this.#svg_file.addSvg({
      x: this.#x_offset,
      y: this.#y_offset,
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
      this.#draw_card_pips(s, pips, crossed_out, orange);
    }
  }

  #draw_clued_card(card_type, crossed_out, orange, x, y) {
    this.#validate_card_type(card_type);

    // Use sets to store the possible ranks and suits.
    const card_type_set = new Set(card_type);
    const ranks = card_type_set.intersection(ALL_RANKS);
    const suits = card_type_set.intersection(new Set(this.#all_suits));

    if (ranks.size !== 1 && suits.size !== 1) {
      // This is a card with an unknown rank and an unknown color.
      const s = this.#svg_file.addSvg({
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
      this.#draw_card_pips(s, pips, crossed_out, orange);
    } else if (ranks.size === 1 && suits.size !== 1) {
      // This is a card with a known rank and an unknown color.
      const s = this.#svg_file.addSvg({
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
      this.#draw_card_pips(s, suits, crossed_out, orange);
    } else if (ranks.size !== 1 && suits.size === 1) {
      // This is a card with a known color and an unknown rank.
      const s = this.#svg_file.addSvg({
        x,
        y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      s.addImage(
        `${PIECES_PATH}/cards/${this.#suit_filenames.get(suits.keys().next().value)}.svg`,
        { x: 0, y: 0, width: CARD_WIDTH, height: CARD_HEIGHT },
      );
      this.#draw_card_pips(s, ranks, crossed_out, orange);
    } else {
      // An exact card identity was specified. (e.g. "r1")
      this.#svg_file.addImage(
        `${PIECES_PATH}/cards/${this.#suit_filenames.get(suits.keys().next().value)}${ranks.keys().next().value}.svg`,
        { x, y, width: CARD_WIDTH, height: CARD_HEIGHT },
      );
    }
  }

  #validate_card_type(card) {
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
      if (!this.#all_suits.includes(letter)) {
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
      let iterating_over_suit_characters = true;
      for (const ch of card) {
        if (iterating_over_suit_characters) {
          if (numbers.includes(ch)) {
            iterating_over_suit_characters = false;
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
          const aa = this.#all_suits.indexOf(a);
          const bb = this.#all_suits.indexOf(b);
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

  #draw_card_pips(svg, pips, crossed_out, orange) {
    crossed_out = new Set(crossed_out);
    orange = new Set(orange);
    const rank_pip_width = CARD_WIDTH / 5;
    for (let rank = 1; rank < 6; ++rank) {
      if (pips.has(rank + "")) {
        const rect = svg.addSvg({
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
        if (crossed_out.has(rank + "")) {
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

    const angle = (2 * Math.PI) / this.#all_suits.length;
    this.#all_suits.forEach((color, i) => {
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
        if (crossed_out.has(color)) {
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

  #draw_extra_card_attributes(card) {
    if (card.get("trash")) {
      this.#svg_file.addImage(`${PIECES_PATH}/trashcan.png`, {
        x: this.#x_offset + 5,
        y: this.#y_offset + 5,
        width: CARD_WIDTH - 10,
        height: CARD_HEIGHT - 10,
        opacity: 0.4,
      });
    }

    if (card.has("clue")) {
      // Draw the arrow above the card.
      const arrow_name = card.get("retouched") ? "arrow_dark" : "arrow";
      this.#svg_file.addImage(`${PIECES_PATH}/${arrow_name}.svg`, {
        x: this.#x_offset + 10,
        y: this.#y_offset - 40,
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
      this.#svg_file.addElement("circle", {
        cx: this.#x_offset + 35,
        cy: this.#y_offset - 15,
        r: 15,
        fill: color,
        stroke: color === "black" ? "white" : "black",
        "stroke-width": 2,
      });

      if (/^\d$/.test(card.get("clue"))) {
        const r = this.#svg_file.addSvg({
          x: this.#x_offset + 27,
          y: this.#y_offset - 23,
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

      if (this.#y_offset === 0) {
        this.#y_top = Math.min(this.#y_top, -35);
      }
    }

    if (card.get("above")) {
      this.#draw_textbox(card.get("above"), 0);
    }

    if (card.get("below")) {
      const yb = this.#draw_textbox(card.get("below"), CARD_HEIGHT + 5);
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
      const r = this.#svg_file.addSvg({
        x: this.#x_offset,
        y: this.#y_offset,
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

  #draw_textbox(opts, offset) {
    if (opts instanceof Array) {
      let my_offset = offset;
      for (const part of opts) {
        my_offset += 5 + this.#draw_textbox(part, my_offset);
      }
      return my_offset - offset;
    }

    let text;
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
      r = this.#svg_file.addSvg({
        x: this.#x_offset - 10,
        y: this.#y_offset + offset,
        width,
        height: 20 * text.length,
      });
    } else {
      width = 64;
      r = this.#svg_file.addSvg({
        x: this.#x_offset + 3,
        y: this.#y_offset + offset,
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
      r.addSvg({ x: 0, y: 20 * i, width, height: 20 }).addText(line, {
        x: "50%",
        y: "50%",
        fill: text_color,
        "text-anchor": "middle",
        "dominant-baseline": "central",
      });
    });

    return 20 * text.length;
  }

  #draw_big_text() {
    // TODO: unify with draw_textbox

    const opts = this.#yaml_file.get("big_text");
    if (!opts) return;
    const text = opts.get("text");

    const TEXT_WIDTH = 200;
    const TEXT_HEIGHT = 50;
    const x_of_text =
      (this.#all_suits.length *
        (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS) -
        HORIZONTAL_SPACING_BETWEEN_CARDS -
        TEXT_WIDTH) /
      2;
    const y_of_text = this.#left_y_offset;

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

    const r = this.#svg_file.addSvg({
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

    this.#left_y_offset += TEXT_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS;
  }

  #draw_discard_pile() {
    const discarded = this.#yaml_file.get("discarded");
    if (!discarded) return;

    const TRASH_WIDTH = 200;
    const TRASH_HEIGHT = 200;
    const x_of_discard_pile =
      (this.#all_suits.length *
        (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS) -
        HORIZONTAL_SPACING_BETWEEN_CARDS -
        TRASH_WIDTH) /
      2;
    const y_of_discard_pile = this.#left_y_offset;

    this.#svg_file.addImage(`${PIECES_PATH}/trashcan.png`, {
      x: x_of_discard_pile,
      y: y_of_discard_pile,
      width: TRASH_WIDTH,
      height: TRASH_HEIGHT,
      opacity: 0.2,
    });

    const width_total = CARD_WIDTH + ((discarded.length - 1) * CARD_WIDTH) / 2;
    const height_total =
      CARD_HEIGHT + ((discarded.length - 1) * CARD_HEIGHT) / 3;
    let x = x_of_discard_pile + TRASH_WIDTH / 2 - width_total / 2;
    let y = y_of_discard_pile + TRASH_HEIGHT / 2 - height_total / 2;
    for (const card of discarded) {
      this.#draw_clued_card(card, new Set(), new Set(), x, y);
      x += CARD_WIDTH / 2;
      y += CARD_HEIGHT / 3;
    }

    this.#svg_file.addRect({
      x: x_of_discard_pile,
      y: y_of_discard_pile,
      width: TRASH_WIDTH,
      height: TRASH_HEIGHT,
      rx: CARD_ROUNDED_CORNER_SIZE * 2,
      ry: CARD_ROUNDED_CORNER_SIZE * 2,
      stroke: "darkgreen",
      fill: "none",
      "stroke-width": 2,
    });

    this.#left_y_offset = y_of_discard_pile + TRASH_HEIGHT + 2;
  }

  svg_text() {
    return this.#svg_file.text;
  }
}

export default function convertYAMLToSVG(source) {
  const yamlFile = YAML.parse(source, {
    mapAsMap: true,
  });
  const image = new ImageGenerator(yamlFile);
  return image.svg_text();
}
