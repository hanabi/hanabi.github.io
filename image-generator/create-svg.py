#!/usr/bin/env python3

# Imports (standard library)
import io
import math
import re
import sys

# Imports (external)
import svgwrite
import yaml

if sys.version_info < (3, 0):
    print("This script requires Python 3.x.")
    sys.exit(1)

# Constants
# Setting the theme text color like this is a hack to change text color via CSS
# Using the class name would be more proper, but it is mangled by Docusaurus
TEXT_COLOR = "#000001"  # This matches the value in CSS selector in custom.css
CARD_WIDTH = 70
CARD_HEIGHT = 100
CARD_ROUNDED_CORNER_SIZE = 5
CLUE_BORDER_COLOR = "orange"
HORIZONTAL_SPACING_BETWEEN_CARDS = 8
# This needs to be long enough for Donald (e.g. the longest player name)
# This will need to get bigger if the font size for the player name increases
HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND = 90
VERTICAL_SPACING_BETWEEN_PLAYERS = 20
PLAYER_NAMES = [
    "Alice",
    "Bob",
    "Cathy",
    "Donald",
    "Emily",
]
PIECES_PATH = "/img/pieces"

# Global variables
all_suits = []
have_rainbow = False
x_offset = 0
x_offset_where_player_begins = 0
x_max = 0
y_offset = 0
y_top = 0
y_below = 0


def main():
    global all_suits
    global x_offset
    global x_offset_where_player_begins
    global x_max

    # This script reads from standard in, expecting a YAML file
    # Decode it to YAML
    yaml_file = yaml.load(sys.stdin, Loader=yaml.SafeLoader)

    # Use the play stack to determine the available suits for this particular
    # variant
    all_suits = [next(iter(color_pair)) for color_pair in yaml_file["stacks"]]

    # Create a new SVG file
    svg_file = svgwrite.Drawing()

    # Draw the play stacks on the top-left part of the image
    x_offset = draw_play_stacks(yaml_file, svg_file)

    # Add a bit of spacing between the play stacks and the player hands
    x_offset += CARD_WIDTH + 4

    x_offset_where_player_begins = x_offset
    x_max = x_offset_where_player_begins

    # Draw the player hands on the right side
    draw_player_row(yaml_file, svg_file)

    # Draw discarded cards, if any
    draw_discard_pile(yaml_file, svg_file)

    # Set the dimensions for the SVG file
    svg_file["width"] = x_max
    svg_file["height"] = y_offset - y_top
    svg_file["viewBox"] = "0 {} {} {}".format(y_top, x_max, y_offset)

    # Print the SVG file to standard out
    print_svg(svg_file)


def draw_play_stacks(yaml_file, svg_file):
    x_offset = 0

    for color_value in yaml_file["stacks"]:
        color, value = next(iter(color_value.items()))
        file_name = "{}{}".format(color, value)
        stack_base_or_card = svg_file.image(
            "{}/cards/{}.svg".format(PIECES_PATH, file_name),
            x=x_offset,
            y=0,
            width=CARD_WIDTH,
            height=CARD_HEIGHT,
        )
        svg_file.add(stack_base_or_card)

        x_offset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS

    return x_offset


def draw_player_row(yaml_file, svg_file):
    for player_num, player in enumerate(yaml_file["players"]):
        if "text" in player:
            draw_text_divider(svg_file, player["text"])
        else:
            draw_player_name_and_hand(yaml_file, svg_file, player_num, player)


# Draw a text separator between a player to describe some event taking place
# e.g. "After discarding the 1..."
def draw_text_divider(svg_file, text):
    global y_offset

    text = svg_file.text(
        text,
        x=[x_offset_where_player_begins + 40],
        y=[y_offset],
        dy=[20],
        fill=TEXT_COLOR,
    )
    svg_file.add(text)

    y_offset += 50


# Draw a row representing a player's hand
def draw_player_name_and_hand(yaml_file, svg_file, player_num, player):
    global x_offset
    global x_max
    global y_offset
    global y_below

    draw_player_name(svg_file, player_num, player)
    x_offset = (
        x_offset_where_player_begins + HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND
    )

    # We need to increase the size of image if there is a tall text box
    # "below" one of cards
    y_below = 5

    # Draw each card
    for card in player["cards"]:
        draw_player_card(yaml_file, svg_file, card)

    y_offset += CARD_HEIGHT + y_below + VERTICAL_SPACING_BETWEEN_PLAYERS
    if x_offset > x_max:
        x_max = x_offset


def draw_player_name(svg_file, player_num, player):
    if "name" in player:
        name = player["name"]
    else:
        name = PLAYER_NAMES[player_num]

    player_name_text = svg_file.text(
        name,
        x=[x_offset_where_player_begins],
        y=[y_offset],
        # 7 is an arbitrary value to account for the height of the text
        dy=[(CARD_HEIGHT / 2) + 7],
        fill=TEXT_COLOR,
        style="font-size: 1.4em;",
    )
    svg_file.add(player_name_text)

    if "cluegiver" in player:
        # TODO
        # Before, "(clue giver)" was appended after the player name,
        # which was ugly
        # Instead, let's either do it like Russ does or try drawing a teal box
        # around the player name
        pass


def draw_player_card(yaml_file, svg_file, card):
    global x_offset

    card_type = str(card["type"])
    if card_type == "x":
        draw_unclued_card(yaml_file, svg_file, x_offset, y_offset)
    else:
        draw_clued_card(yaml_file, svg_file, card_type, card, x_offset, y_offset)

    draw_extra_card_attributes(svg_file, card)

    x_offset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS


def draw_unclued_card(yaml_file, svg_file, x_offset, y_offset):
    s = svg_file.add(svg_file.svg((x_offset, y_offset), (CARD_WIDTH, CARD_HEIGHT)))
    card_image = svg_file.rect(
        (0, 0),
        (CARD_WIDTH, CARD_HEIGHT),
        fill="gray",
        rx=CARD_ROUNDED_CORNER_SIZE,
        ry=CARD_ROUNDED_CORNER_SIZE,
    )
    s.add(card_image)

    # Draw an unknown card with no pips visible
    draw_unknown_card(yaml_file, svg_file, s, [])


def draw_clued_card(yaml_file, svg_file, card_type, card, x_offset, y_offset):
    # Draw the clue border
    clue_border_overlap = 4
    clue_border = svg_file.rect(
        (
            x_offset - (clue_border_overlap / 2),
            y_offset - (clue_border_overlap / 2),
        ),
        (CARD_WIDTH + clue_border_overlap, CARD_HEIGHT + clue_border_overlap),
        fill=CLUE_BORDER_COLOR,
        rx=CARD_ROUNDED_CORNER_SIZE,
        ry=CARD_ROUNDED_CORNER_SIZE,
    )
    svg_file.add(clue_border)

    # Find the possible ranks
    ranks = set(card_type) & {"1", "2", "3", "4", "5"}
    ranks = set(int(i) for i in ranks)

    # Find the possible suits
    suits = set(card_type) & set(all_suits)

    # Most of the time, we don't want any pips to show
    pips_to_show = set()
    if "show_pips" in card:
        pips_to_show = ranks | suits

    if len(ranks) != 1 and len(suits) != 1:
        # This is a card with an unknown rank and an unknown color
        s = svg_file.add(svg_file.svg((x_offset, y_offset), (CARD_WIDTH, CARD_HEIGHT)))
        rect = svg_file.rect(
            (0, 0),
            (CARD_WIDTH, CARD_HEIGHT),
            fill="gray",
            rx=CARD_ROUNDED_CORNER_SIZE,
            ry=CARD_ROUNDED_CORNER_SIZE,
        )
        s.add(rect)
        # Always draw pips on clued cards with unknown rank + unknown color
        draw_unknown_card(yaml_file, svg_file, s, ranks | suits)
    elif len(ranks) == 1 and len(suits) != 1:
        # This is a card with a known rank and an unknown color
        card_image = svg_file.image(
            "{}/cards/{}.svg".format(PIECES_PATH, next(iter(ranks))),
            x=0,
            y=0,
            width=CARD_WIDTH,
            height=CARD_HEIGHT,
        )
        s = svg_file.add(svg_file.svg((x_offset, y_offset), (CARD_WIDTH, CARD_HEIGHT)))
        s.add(card_image)
        draw_unknown_card(yaml_file, svg_file, s, suits)
    elif len(ranks) != 1 and len(suits) == 1:
        # This is a card with a known color and an unknown rank
        card_image = svg_file.image(
            "{}/cards/{}.svg".format(PIECES_PATH, next(iter(suits))),
            x=0,
            y=0,
            width=CARD_WIDTH,
            height=CARD_HEIGHT,
        )
        s = svg_file.add(svg_file.svg((x_offset, y_offset), (CARD_WIDTH, CARD_HEIGHT)))
        s.add(card_image)
        draw_unknown_card(yaml_file, svg_file, s, ranks)
    else:
        # An exact card identity was specified
        # (e.g. "r1")
        card_image = svg_file.image(
            "{}/cards/{}.svg".format(PIECES_PATH, card_type),
            x=x_offset,
            y=y_offset,
            width=CARD_WIDTH,
            height=CARD_HEIGHT,
        )
        svg_file.add(card_image)


def draw_unknown_card(yaml_file, svg_file, svg, positives):
    # Count the number of rank possibilities
    rank_possibilities = []
    for n in range(1, 6):
        if n in positives:
            rank_possibilities.append(n)

    rank_pip_width = CARD_WIDTH / 5
    if len(rank_possibilities) > 1:
        for rank_possibility in rank_possibilities:
            rank_pip_rectangle = svg.add(
                svg_file.svg(
                    ((rank_possibility - 1) * rank_pip_width, 80), (rank_pip_width, 20)
                )
            )
            rank_pip_text_element = rank_pip_rectangle.add(
                svg_file.text(
                    str(rank_possibility),
                    x=["50%"],
                    y=["50%"],
                    fill="white",
                    style="filter: url(#shadow)",
                )
            )
            rank_pip_text_element["text-anchor"] = "middle"
            rank_pip_text_element["dominant-baseline"] = "central"

    suit_pips_combined_svg = svg.add(svg_file.svg((0, 0), (CARD_WIDTH, CARD_HEIGHT)))
    suit_pips_combined_svg["viewBox"] = "-35 -50 70 100"
    angle = 2 * math.pi / len(all_suits)
    for i, color in enumerate(all_suits):
        if color in positives:
            suit_pips_combined_svg.add(
                svg_file.image(
                    "{}/pips/{}.svg".format(PIECES_PATH, color),
                    x=-6,
                    y=-6,
                    width=12,
                    height=12,
                    style="filter: url(#shadow)",
                    transform="translate({}, {})".format(
                        -20 * math.sin(angle * i), -20 * math.cos(angle * i)
                    ),
                )
            )


def draw_extra_card_attributes(svg_file, card):
    global y_top
    global y_below

    if "clue" in card:
        svg_file.add(
            svg_file.image(
                "{}/arrow.svg".format(PIECES_PATH),
                x=x_offset + 10,
                y=y_offset - 40,
                width=50,
                height=70,
            )
        )

        # Draw the clue circle on the arrow
        is_color_clue = card["clue"] not in range(1, 6)
        color = {
            "r": "red",
            "b": "blue",
            "g": "lightgreen",
            "y": "yellow",
            "p": "blueviolet",
        }.get(card["clue"], "black")
        svg_file.add(
            svg_file.circle(
                (x_offset + 35, y_offset - 15),
                r=15,
                fill=color,
                stroke="white" if color == "black" else "black",
                **{"stroke-width": 2}
            )
        )

        # For number clues, add the number pip
        if not is_color_clue:
            r = svg_file.add(svg_file.svg((x_offset + 27, y_offset - 23), (16, 16)))
            pip = r.add(
                svg_file.text(
                    str(card["clue"]),
                    x=["50%"],
                    y=["50%"],
                    fill="white",
                    style="font-size: 1.4em;",
                )
            )
            pip["text-anchor"] = "middle"
            pip["dominant-baseline"] = "central"

        if y_offset < 20:
            y_top = -20

    if "above" in card:
        draw_textbox(svg_file, card["above"], 0)

    if "below" in card:
        yb = draw_textbox(svg_file, card["below"], 105)
        if yb > y_below:
            y_below = yb

    if "middle_note" in card:
        color = {
            "(R)": "red",
            "(B)": "cyan",
            "(G)": "lightgreen",
            "(Y)": "yellow",
            "(P)": "violet",
        }.get(card["middle_note"], "white")
        r = svg_file.add(svg_file.svg((x_offset, y_offset), (CARD_WIDTH, CARD_HEIGHT)))
        text = svg_file.text(
            card["middle_note"],
            x=["50%"],
            y=["50%"],
            fill=color,
            stroke=color,
            style="font-size: 1.5em; filter: url(#shadow);",
        )
        text["text-anchor"] = "middle"
        text["dominant-baseline"] = "central"
        r.add(text)


def draw_textbox(svg_file, opts, offset):
    global have_rainbow

    if type(opts) == str:
        text = [opts]
        color = text[0].split()[0].lower()
        if color not in (
            "red",
            "yellow",
            "black",
            "purple",
            "blue",
            "green",
            "rainbow",
        ):
            color = "black"
    else:
        text = opts["text"]
        if type(text) == str:
            text = [text]
        color = opts.get("color", "black")

    # TODO: make this widening more generic
    if text[0].startswith("Rainbow"):
        width = 85
        r = svg_file.add(
            svg_file.svg((x_offset - 10, y_offset + offset), (width, 20 * len(text)))
        )
    else:
        width = 64
        r = svg_file.add(
            svg_file.svg((x_offset + 3, y_offset + offset), (width, 20 * len(text)))
        )
    text_color = "black" if color in ("gold", "rainbow") else "white"

    if color == "rainbow":
        rect = svg_file.rect(
            (0, 0),
            (width, 20 * len(text)),
            stroke=text_color,
            fill="url(#rainbowtext)",
        )
        r.add(rect)
        have_rainbow = True
    else:
        rect = svg_file.rect(
            (0, 0),
            (width, 20 * len(text)),
            stroke=text_color,
            fill=color,
        )
        r.add(rect)

    for i, line in enumerate(text):
        l = r.add(svg_file.svg((0, 20 * i), (width, 20)))
        t = l.add(svg_file.text(line, x=["50%"], y=["50%"], fill=text_color))
        t["text-anchor"] = "middle"
        t["dominant-baseline"] = "central"

    return 20 * len(text)


def draw_discard_pile(yaml_file, svg_file):
    global y_offset

    if "discarded" not in yaml_file:
        return

    TRASH_WIDTH = 200
    TRASH_HEIGHT = 200
    x_of_discard_pile = (
        len(all_suits) * (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS)
        - HORIZONTAL_SPACING_BETWEEN_CARDS
        - TRASH_WIDTH
    ) / 2
    y_of_discard_pile = CARD_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS

    trash_image = svg_file.image(
        "{}/trashcan.png".format(PIECES_PATH),
        x=x_of_discard_pile,
        y=y_of_discard_pile,
        width=TRASH_WIDTH,
        height=TRASH_HEIGHT,
        opacity=0.2,
    )
    svg_file.add(trash_image)

    width_total = CARD_WIDTH + (len(yaml_file["discarded"]) - 1) * CARD_WIDTH / 2
    height_total = CARD_HEIGHT + (len(yaml_file["discarded"]) - 1) * CARD_HEIGHT / 3
    x = x_of_discard_pile + TRASH_WIDTH / 2 - width_total / 2
    y = y_of_discard_pile + TRASH_HEIGHT / 2 - height_total / 2
    for card in yaml_file["discarded"]:
        card_image = svg_file.image(
            "{}/cards/{}.svg".format(PIECES_PATH, card),
            x=x,
            y=y,
            width=CARD_WIDTH,
            height=CARD_HEIGHT,
        )
        svg_file.add(card_image)
        x += CARD_WIDTH / 2
        y += CARD_HEIGHT / 3

    svg_file.add(
        svg_file.rect(
            (x_of_discard_pile, y_of_discard_pile),
            (TRASH_WIDTH, TRASH_HEIGHT),
            rx=CARD_ROUNDED_CORNER_SIZE * 2,
            ry=CARD_ROUNDED_CORNER_SIZE * 2,
            stroke="darkgreen",
            fill="none",
            **{"stroke-width": 2}
        )
    )

    if y_offset < y_of_discard_pile + TRASH_HEIGHT + 2:
        y_offset = y_of_discard_pile + TRASH_HEIGHT + 2


def print_svg(svg_file):
    output = io.StringIO()
    svg_file.write(output, pretty=True)
    output = output.getvalue()

    # Workround for stupid Docusaurus/React error similar to this one:
    # https://github.com/facebook/docusaurus/issues/3689
    output = re.sub(r'xmlns:ev="(?:.*?)"', "", output)

    # Add shadow filter manually, because svgwrite's API for it is awkward
    output = re.sub(
        r"<defs/>",
        """<defs>
        <filter id="shadow">
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
        </filter>"""
        + (
            """
        <linearGradient id="rainbowtext" x1="0" y1="0" x2="100%" y2="0">
        <stop offset="0" stop-color="#ff7777"></stop>
        <stop offset="0.25" stop-color="#ffff77"></stop>
        <stop offset="0.5" stop-color="#77ff77"></stop>
        <stop offset="0.75" stop-color="#77ffff"></stop>
        <stop offset="1" stop-color="#7777ff"></stop>
        </linearGradient>"""
            if have_rainbow
            else ""
        )
        + """
    </defs>""",
        output,
        count=1,
    )

    # Write the resulting SVG to stdout
    print(output)


if __name__ == "__main__":
    main()
