# Imports (standard library)
import functools
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
TEXT_COLOR_CLASS = "site-theme-text"
CARD_WIDTH = 70
CARD_HEIGHT = 100
CARD_ROUNDED_CORNER_SIZE = 5
CLUE_BORDER_COLOR = "orange"
HORIZONTAL_SPACING_BETWEEN_CARDS = 8
# This needs to be long enough for Donald (e.g. the longest player name).
# This will need to get bigger if the font size for the player name increases.
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
NO_VARIANT_SUITS = ["r", "y", "g", "b", "p"]
ALL_SUITS = [
    "r",  # Red
    "y",  # Yellow
    "g",  # Green
    "b",  # Blue
    "p",  # Purple
    "t",  # Teal
    "k",  # Black
    "m",  # Rainbow
    "i",  # Pink
    "w",  # White
    "n",  # Brown
    "o",  # Omni
    "u",  # Null
    "s",  # Prism
]
ALL_RANKS = ["1", "2", "3", "4", "5"]

# Global variables
all_suits = []  # Representing the possible suits for the current variant.
x_offset = 0
x_offset_where_player_begins = 0
x_max = 0
y_offset = 0
left_y_offset = 0
y_top = 0
y_below = 0
suit_filenames = {
    "r": "red",
    "y": "yellow",
    "g": "green",
    "b": "blue",
    "p": "purple",
    "m": "multi",
}


def main():
    global all_suits
    global x_offset
    global x_offset_where_player_begins
    global x_max
    global left_y_offset

    # This script reads from standard in, expecting a YAML file. Decode it to YAML.
    yaml_file = yaml.load(sys.stdin, Loader=yaml.SafeLoader)

    # Suits in addition to any standard suits.
    suit_filenames.update(yaml_file.get("suits", {}))

    # Use the play stack to determine the available suits for this particular variant.
    try:
        all_suits = [next(iter(color_pair)) for color_pair in yaml_file["stacks"]]
    except KeyError:
        all_suits = NO_VARIANT_SUITS

    # Create a new SVG file.
    svg_file = svgwrite.Drawing()

    # Draw the play stacks on the top-left part of the image.
    x_offset, left_y_offset = draw_play_stacks(yaml_file, svg_file)

    # Add a bit of spacing between the play stacks and the player hands.
    x_offset += CARD_WIDTH + 4

    x_offset_where_player_begins = x_offset
    x_max = x_offset_where_player_begins

    # Draw the player hands on the right side.
    draw_player_rows(yaml_file, svg_file)

    draw_big_text(yaml_file, svg_file)

    # Draw discarded cards, if any.
    draw_discard_pile(yaml_file, svg_file)

    # Set the dimensions for the SVG file.
    y_max = max(y_offset, left_y_offset)
    svg_file["width"] = x_max
    svg_file["height"] = y_max - y_top
    svg_file["viewBox"] = f"0 {y_top} {x_max} {y_max - y_top}"

    # Print the SVG file to standard out.
    print_svg(svg_file)


def draw_play_stacks(yaml_file, svg_file):
    global x_offset

    if "stacks" not in yaml_file:
        return x_offset, 0

    x_offset = 0
    y_offset = CARD_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS

    for color_value in yaml_file["stacks"]:
        color, value = next(iter(color_value.items()))
        file_name = f"{suit_filenames[color]}{value}"
        stack_base_or_card = svg_file.image(
            f"{PIECES_PATH}/cards/{file_name}.svg",
            x=x_offset,
            y=0,
            width=CARD_WIDTH,
            height=CARD_HEIGHT,
        )
        svg_file.add(stack_base_or_card)

        x_offset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS

    return x_offset, y_offset


def draw_player_rows(yaml_file, svg_file):
    for player_num, player in enumerate(yaml_file["players"]):
        if "text" in player:
            draw_text_divider(svg_file, player["text"])
        else:
            draw_player_name_and_hand(yaml_file, svg_file, player_num, player)


# Draw a text separator between a player to describe some event taking place.
# e.g. "After discarding the 1..."
def draw_text_divider(svg_file, text):
    global y_offset

    # If text is empty, do not output `None`.
    if not text:
        text = ""

    text = svg_file.text(
        text,
        x=[x_offset_where_player_begins + 40],
        y=[y_offset],
        dy=[20],
        class_=TEXT_COLOR_CLASS,
    )
    svg_file.add(text)

    y_offset += 50


# Draw a row representing a player's hand.
def draw_player_name_and_hand(yaml_file, svg_file, player_num, player):
    global x_offset
    global x_max
    global y_offset
    global y_below

    name = draw_player_name(svg_file, player_num, player)
    four_or_more_players = name == PLAYER_NAMES[3] or name == PLAYER_NAMES[4]
    num_cards = len(player["cards"])
    if four_or_more_players and num_cards > 4:
        error("The players have too many cards for a 4-player or a 5-player game.")

    x_offset = (
        x_offset_where_player_begins + HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND
    )

    # We need to increase the size of image if there is a tall text box "below" one of cards.
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

    r = svg_file.add(
        svg_file.svg(
            (x_offset_where_player_begins, y_offset),
            (HORIZONTAL_SPACING_BETWEEN_PLAYER_NAME_AND_HAND, CARD_HEIGHT),
        )
    )
    player_name_text = svg_file.text(
        name,
        x=["0%"],
        y=["50%"],
        class_=TEXT_COLOR_CLASS,
        style="font-size: 1.4em;",
        **{"dominant-baseline": "central"},
    )
    r.add(player_name_text)

    if "clue_giver" in player:
        # Based on: https://stackoverflow.com/a/42783381/14347173
        clue_giver_description = "Clue Giver"
        clue_giver_background = svg_file.text(
            clue_giver_description,
            x=["0%"],
            y=["50%"],
            dy=[30],
            fill="black",
            filter="url(#clue_giver)",
            **{"dominant-baseline": "central"},
        )
        r.add(clue_giver_background)
        clue_giver_text = svg_file.text(
            clue_giver_description,
            x=["0%"],
            y=["50%"],
            dy=[30],
            fill="black",
            **{"dominant-baseline": "central"},
        )
        r.add(clue_giver_text)

    return name


def draw_player_card(yaml_file, svg_file, card):
    global x_offset

    card_type = str(card["type"])
    clued = not card_type.startswith("x")

    if card.get("border", clued):
        draw_clue_border(svg_file)

    crossed_out = str(card.get("crossed_out", ""))
    orange = str(card.get("orange", ""))

    if clued:
        draw_clued_card(svg_file, card_type, crossed_out, orange, x_offset, y_offset)
    else:
        card_type_without_x = card_type[1:]
        draw_unclued_card(
            yaml_file,
            svg_file,
            x_offset,
            y_offset,
            card_type_without_x,
            crossed_out,
            orange,
        )

    draw_extra_card_attributes(svg_file, card)

    x_offset += CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS


def draw_clue_border(svg_file):
    global y_top

    clue_border_overlap = 6
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

    if y_offset == 0:
        y_top = min(y_top, -clue_border_overlap / 2)


def draw_unclued_card(
    yaml_file, svg_file, x_offset, y_offset, pips, crossed_out, orange
):
    # "crossed_out" represents suits and ranks that are crossed out from negative clues.
    validate_card_type(crossed_out)

    s = svg_file.add(svg_file.svg((x_offset, y_offset), (CARD_WIDTH, CARD_HEIGHT)))
    card_image = svg_file.rect(
        (0, 0),
        (CARD_WIDTH, CARD_HEIGHT),
        fill="gray",
        rx=CARD_ROUNDED_CORNER_SIZE,
        ry=CARD_ROUNDED_CORNER_SIZE,
    )
    s.add(card_image)

    if pips:
        draw_card_pips(svg_file, s, pips, crossed_out, orange)


def draw_clued_card(svg_file, card_type, crossed_out, orange, x_offset, y_offset):
    validate_card_type(card_type)

    # Use sets to store the possible ranks and suits.
    card_type_set = set(card_type)
    ranks = card_type_set.intersection(set(ALL_RANKS))
    suits = card_type_set.intersection(set(all_suits))

    if len(ranks) != 1 and len(suits) != 1:
        # This is a card with an unknown rank and an unknown color.
        s = svg_file.add(svg_file.svg((x_offset, y_offset), (CARD_WIDTH, CARD_HEIGHT)))
        rect = svg_file.rect(
            (0, 0),
            (CARD_WIDTH, CARD_HEIGHT),
            fill="gray",
            rx=CARD_ROUNDED_CORNER_SIZE,
            ry=CARD_ROUNDED_CORNER_SIZE,
        )
        s.add(rect)
        # Always draw pips on clued cards with unknown rank + unknown color.
        pips = ranks.union(suits)  # Combine the ranks and the suits together.
        draw_card_pips(svg_file, s, pips, crossed_out, orange)
    elif len(ranks) == 1 and len(suits) != 1:
        # This is a card with a known rank and an unknown color.
        card_image = svg_file.image(
            f"{PIECES_PATH}/cards/{next(iter(ranks))}.svg",
            x=0,
            y=0,
            width=CARD_WIDTH,
            height=CARD_HEIGHT,
        )
        s = svg_file.add(svg_file.svg((x_offset, y_offset), (CARD_WIDTH, CARD_HEIGHT)))
        s.add(card_image)
        draw_card_pips(svg_file, s, suits, crossed_out, orange)
    elif len(ranks) != 1 and len(suits) == 1:
        # This is a card with a known color and an unknown rank.
        card_image = svg_file.image(
            f"{PIECES_PATH}/cards/{suit_filenames[next(iter(suits))]}.svg",
            x=0,
            y=0,
            width=CARD_WIDTH,
            height=CARD_HEIGHT,
        )
        s = svg_file.add(svg_file.svg((x_offset, y_offset), (CARD_WIDTH, CARD_HEIGHT)))
        s.add(card_image)
        draw_card_pips(svg_file, s, ranks, crossed_out, orange)
    else:
        # An exact card identity was specified.
        # (e.g. "r1")
        card_image = svg_file.image(
            f"{PIECES_PATH}/cards/{suit_filenames[next(iter(suits))]}{next(iter(ranks))}.svg",
            x=x_offset,
            y=y_offset,
            width=CARD_WIDTH,
            height=CARD_HEIGHT,
        )
        svg_file.add(card_image)


def validate_card_type(card_type):
    # Parse the string that contains:
    # 1) letters (representing card suits)
    # 2) numbers (representing card ranks)
    # e.g. "rb34"
    letters = []
    numbers = []
    for character in card_type:
        try:
            number = int(character)
            numbers.append(character)
        except:
            letters.append(character)

    # Validate the suits.
    for letter in letters:
        if letter not in all_suits:
            error(f'The suit of "{letter}" is invalid.')

    # Validate the ranks.
    for number in numbers:
        if number not in ALL_RANKS:
            error(f'The rank of "{number}" is invalid.')

    # Validate that the suit comes before the rank.
    # e.g. "b3" instead of "3b"
    if len(letters) > 0 and len(numbers) > 0:
        first_character = card_type[0]
        if first_character in ALL_RANKS:
            error("When defining a card, the suit must come before the rank.")

    # Validate that there are no ranks after any suits.
    # e.g. "b3r4"
    if len(letters) > 0 and len(numbers) > 0:
        iterating_over_suit_characters = True
        for character in card_type:
            if iterating_over_suit_characters:
                if character in numbers:
                    iterating_over_suit_characters = False
            else:
                if character in letters:
                    error(
                        "When defining a card, the suits and the ranks have to be grouped together."
                    )

    # Validate that the suits come in order (with respect to the play stacks).
    if len(letters) >= 2:
        sorted_letters = letters.copy()
        sorted_letters.sort(key=functools.cmp_to_key(compare_suit_letters))
        if letters != sorted_letters:
            letters_string = "".join(letters)
            sorted_letters_string = "".join(sorted_letters)
            error(
                f'When defining a card, the suits must be specified in order from left to right. In other words, "{letters_string}" should be "{sorted_letters_string}".',
            )


def compare_suit_letters(letter1, letter2):
    if ALL_SUITS.index(letter1) > ALL_SUITS.index(letter2):
        return 1

    return -1


def draw_card_pips(svg_file, svg, pips, crossed_out, orange):
    rank_pip_width = CARD_WIDTH / 5
    for rank in range(1, 6):
        if str(rank) in pips:
            rank_pip_rectangle = svg.add(
                svg_file.svg(
                    ((rank - 1) * rank_pip_width, CARD_HEIGHT * 4 / 5),
                    (rank_pip_width, CARD_HEIGHT / 5),
                )
            )
            rank_pip_text_element = rank_pip_rectangle.add(
                svg_file.text(
                    str(rank),
                    x=["50%"],
                    y=["50%"],
                    fill="orange" if str(rank) in orange else "white",
                    style="filter: url(#shadow_rank)",
                )
            )
            rank_pip_text_element["text-anchor"] = "middle"
            rank_pip_text_element["dominant-baseline"] = "central"
            if str(rank) in crossed_out:
                rank_pip_rectangle.add(
                    svg_file.image(
                        f"{PIECES_PATH}/x.png",
                        x=CARD_WIDTH / 10 - 6,
                        y=CARD_HEIGHT / 10 - 6,
                        width=12,
                        height=12,
                        style="filter: url(#black_x_rank)",
                    )
                )

    angle = 2 * math.pi / len(all_suits)
    for i, color in enumerate(all_suits):
        if color in pips:
            svg.add(
                svg_file.image(
                    f"{PIECES_PATH}/pips/{suit_filenames[color]}.svg",
                    x=CARD_WIDTH / 2 - 6 - 20 * math.sin(angle * i),
                    y=CARD_HEIGHT / 2 - 6 - 20 * math.cos(angle * i),
                    width=12,
                    height=12,
                    style="filter: url(#shadow_suit)",
                )
            )
            if color in crossed_out:
                svg.add(
                    svg_file.image(
                        f"{PIECES_PATH}/x.png",
                        x=CARD_WIDTH / 2 - 6 - 20 * math.sin(angle * i) - 2,
                        y=CARD_HEIGHT / 2 - 6 - 20 * math.cos(angle * i) - 2,
                        width=16,
                        height=16,
                        style="filter: url(#black_x_suit)",
                    )
                )


def draw_extra_card_attributes(svg_file, card):
    global y_top
    global y_below

    if "trash" in card and card["trash"]:
        trash_image = svg_file.image(
            f"{PIECES_PATH}/trashcan.png",
            x=x_offset + 5,
            y=y_offset + 5,
            width=CARD_WIDTH - 10,
            height=CARD_HEIGHT - 10,
            opacity=0.4,
        )
        svg_file.add(trash_image)

    if "clue" in card:
        # Draw the arrow above the card.
        arrow_name = "arrow"
        if "retouched" in card:
            arrow_name += "_dark"
        arrow = svg_file.image(
            f"{PIECES_PATH}/{arrow_name}.svg",
            x=x_offset + 10,
            y=y_offset - 40,
            width=50,
            height=70,
        )
        svg_file.add(arrow)

        # Draw the clue circle on the arrow.
        is_color_clue = card["clue"] not in range(1, 6)
        color = {
            "r": "red",
            "b": "blue",
            "g": "lightgreen",
            "y": "yellow",
            "p": "blueviolet",
            "pink": "pink",
        }.get(card["clue"], "black")
        circle = svg_file.circle(
            (x_offset + 35, y_offset - 15),
            r=15,
            fill=color,
            stroke="white" if color == "black" else "black",
            **{"stroke-width": 2},
        )
        svg_file.add(circle)

        # For number clues, add the number pip.
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

        if y_offset == 0:
            y_top = min(y_top, -35)

    if "above" in card:
        draw_textbox(svg_file, card["above"], 0)

    if "below" in card:
        yb = draw_textbox(svg_file, card["below"], CARD_HEIGHT + 5)
        if yb > y_below:
            y_below = yb

    if "middle_note" in card:
        color = {
            "(R)": "salmon",
            "(B)": "deepskyblue",
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
            style="font-size: 1.5em; filter: url(#shadow_rank);",
        )
        text["text-anchor"] = "middle"
        text["dominant-baseline"] = "central"
        r.add(text)


def draw_textbox(svg_file, opts, offset):
    if isinstance(opts, list):
        my_offset = offset
        for part in opts:
            my_offset += 5 + draw_textbox(svg_file, part, my_offset)
        return my_offset - offset
    if isinstance(opts, str):
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
            "pink",
        ):
            color = {
                "focus": "gold",
                "play": "gold",
                "chop": "darkred",
                "fresh": "green",
                "bad": "gray",
                "brown": "sienna",
            }.get(color, "black")
    else:
        text = opts["text"]
        if isinstance(text, str):
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
    text_color = "black" if color in ("gold", "yellow", "rainbow", "pink") else "white"

    if color == "rainbow":
        rect = svg_file.rect(
            (0, 0),
            (width, 20 * len(text)),
            stroke=text_color,
            fill="url(#rainbowtext)",
        )
        r.add(rect)
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


def draw_big_text(yaml_file, svg_file):
    # TODO: unify with draw_textbox
    global left_y_offset

    try:
        opts = yaml_file["big_text"]
    except KeyError:
        return

    TEXT_WIDTH = 200
    TEXT_HEIGHT = 50
    x_of_text = (
        len(all_suits) * (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS)
        - HORIZONTAL_SPACING_BETWEEN_CARDS
        - TEXT_WIDTH
    ) / 2
    y_of_text = left_y_offset

    try:
        color = opts["color"]
    except:
        color = "black"

    # Select specific color for some keywords
    if opts["text"] in ("Bluff", "Finesse", "Illegal!"):
        color = {"Bluff": "gold", "Finesse": "green", "Illegal!": "red"}.get(
            opts["text"], "white"
        )

    text_color = "black" if color in ("gold", "yellow", "rainbow") else "white"

    r = svg_file.svg((x_of_text, y_of_text), (TEXT_WIDTH, TEXT_HEIGHT))
    svg_file.add(r)
    rect = svg_file.rect(
        (0, 0), (TEXT_WIDTH, TEXT_HEIGHT), stroke=text_color, fill=color
    )
    r.add(rect)
    t = r.add(
        svg_file.text(
            opts["text"],
            x=["50%"],
            y=["50%"],
            fill=text_color,
            style="font-size: 2em;",
        )
    )
    t["text-anchor"] = "middle"
    t["dominant-baseline"] = "central"

    left_y_offset += TEXT_HEIGHT + VERTICAL_SPACING_BETWEEN_PLAYERS


def draw_discard_pile(yaml_file, svg_file):
    global left_y_offset

    if "discarded" not in yaml_file:
        return

    TRASH_WIDTH = 200
    TRASH_HEIGHT = 200
    x_of_discard_pile = (
        len(all_suits) * (CARD_WIDTH + HORIZONTAL_SPACING_BETWEEN_CARDS)
        - HORIZONTAL_SPACING_BETWEEN_CARDS
        - TRASH_WIDTH
    ) / 2
    y_of_discard_pile = left_y_offset

    trash_image = svg_file.image(
        f"{PIECES_PATH}/trashcan.png",
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
        draw_clued_card(svg_file, card, set(), set(), x, y)
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
            **{"stroke-width": 2},
        )
    )

    left_y_offset = y_of_discard_pile + TRASH_HEIGHT + 2


def print_svg(svg_file):
    output = io.StringIO()
    svg_file.write(output, pretty=True)
    output = output.getvalue()

    # Workaround for stupid Docusaurus/React error similar to this one:
    # https://github.com/facebook/docusaurus/issues/3689
    output = re.sub(r'xmlns:ev="(?:.*?)"', "", output)

    # Add filters manually, because svgwrite's API for it is awkward.
    output = re.sub(
        r"<defs/>",
        """<defs>
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
    </defs>""",
        output,
        count=1,
    )

    # Write the resulting SVG to stdout
    printf(output)


def printf(*args):
    print(*args, flush=True)


def error(msg: str):
    print(f"Error: {msg}", file=sys.stderr, flush=True)
    sys.exit(1)


if __name__ == "__main__":
    main()
