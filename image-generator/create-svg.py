#!/usr/bin/env python3

import io
import math
import re
import sys

import svgwrite
import yaml

if sys.version_info < (3, 0):
    print("This script requires Python 3.x.")
    sys.exit(1)

# Constants
# A hack to change text color via CSS
# Using the class name would be more proper, but it is mangled by Docusaurus
THEME_TEXT_COLOR = "#000001"

input = yaml.load(sys.stdin, Loader=yaml.SafeLoader)

draw = svgwrite.Drawing()
have_rainbow = False

all_colors = [next(iter(color_pair)) for color_pair in input["stacks"]]

x_offset = 0
y_offset = 0

for color_value in input["stacks"]:
    color, value = next(iter(color_value.items()))
    if value:
        fname = "{}{}".format(color, value)
    else:
        fname = "back-{}".format(color)
    draw.add(
        draw.image(
            "/img/pieces/{}.svg".format(fname), x=x_offset, y=50, width=70, height=100
        )
    )
    x_offset += 72

for line_dict in input["players"]:
    if "cards" in line_dict:
        num_cards_in_row = len(line_dict["cards"])
        break


def textbox(opts, offset):
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
        wid = 85
        r = draw.add(
            draw.svg((x_offset - 10, y_offset + offset), (wid, 20 * len(text)))
        )
    else:
        wid = 64
        r = draw.add(draw.svg((x_offset + 3, y_offset + offset), (wid, 20 * len(text))))
    textcolor = "black" if color in ("gold", "rainbow") else "white"
    if color == "rainbow":
        r.add(
            draw.rect(
                (0, 0),
                (wid, 20 * len(text)),
                stroke=textcolor,
                fill="url(#rainbowtext)",
            )
        )
        global have_rainbow
        have_rainbow = True
    else:
        r.add(draw.rect((0, 0), (wid, 20 * len(text)), stroke=textcolor, fill=color))
    for i, line in enumerate(text):
        l = r.add(draw.svg((0, 20 * i), (wid, 20)))
        t = l.add(draw.text(line, x=["50%"], y=["50%"], fill=textcolor))
        t["text-anchor"] = "middle"
        t["dominant-baseline"] = "central"
    return 20 * len(text)


def draw_unknown_card(svg, positives):
    numwid = 70 / 5
    for n in range(1, 6):
        if n in positives:
            numr = svg.add(draw.svg(((n - 1) * numwid, 80), (numwid, 20)))
            numt = numr.add(
                draw.text(
                    str(n),
                    x=["50%"],
                    y=["50%"],
                    fill="white",
                    style="filter: url(#shadow)",
                )
            )
            numt["text-anchor"] = "middle"
            numt["dominant-baseline"] = "central"
    rpips = svg.add(draw.svg((0, 0), (70, 100)))
    rpips["viewBox"] = "-35 -50 70 100"
    angle = 2 * math.pi / len(all_colors)
    for i, color in enumerate(all_colors):
        if color in positives:
            rpips.add(
                draw.image(
                    "/img/pieces/pip-{}.svg".format(color),
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


ytop = 0
Xoff = x_offset
Xmax = Xoff

for line_dict in input["players"]:
    if "text" in line_dict:
        draw.add(
            draw.text(
                line_dict["text"],
                x=[Xoff + 40],
                y=[y_offset],
                dy=[20],
                fill=THEME_TEXT_COLOR,
            )
        )
        y_offset += 30
    else:
        draw.add(
            draw.text(
                line_dict["name"],
                x=[Xoff],
                y=[y_offset],
                dy=[50],
                fill=THEME_TEXT_COLOR,
            )
        )
        if "cluegiver" in line_dict:
            draw.add(
                draw.text(
                    "(clue", x=[Xoff], y=[y_offset], dy=[70], fill=THEME_TEXT_COLOR
                )
            )
            draw.add(
                draw.text(
                    "giver)", x=[Xoff], y=[y_offset], dy=[90], fill=THEME_TEXT_COLOR
                )
            )
        x_offset = Xoff + 60
        ybelow = 5
        negatives = set()
        for card in line_dict["cards"]:
            if "negate" in card:
                negatives.add(card["negate"])
                continue
            t = str(card["type"])
            if t == "x":
                s = draw.add(draw.svg((x_offset, y_offset + 10), (70, 100)))
                s.add(draw.rect((0, 0), (70, 100), fill="gray"))
                draw_unknown_card(s, (set(all_colors) | set(range(1, 6))) - negatives)
            else:
                numbers = set(t) & {"1", "2", "3", "4", "5"}
                if numbers:
                    numbers = set(int(i) for i in numbers)
                else:
                    numbers = set(range(1, 6)) - negatives
                colors = set(t) & set(
                    next(iter(color_pair)) for color_pair in input["stacks"]
                )
                if not colors:
                    colors = (
                        set(next(iter(color_pair)) for color_pair in input["stacks"])
                        - negatives
                    )
                draw.add(
                    draw.rect(
                        (x_offset - 1, y_offset - 1),
                        (72, 102),
                        rx=2,
                        ry=2,
                        fill="orange",
                    )
                )
                if len(numbers) > 1 and len(colors) > 1:
                    s = draw.add(draw.svg((x_offset, y_offset), (70, 100)))
                    s.add(draw.rect((0, 0), (70, 100), fill="gray"))
                    draw_unknown_card(s, numbers | colors)
                elif len(numbers) == 1 and len(colors) > 1:
                    s = draw.add(draw.svg((x_offset, y_offset), (70, 100)))
                    s.add(
                        draw.image(
                            "/img/pieces/{}.svg".format(next(iter(numbers))),
                            x=0,
                            y=0,
                            width=70,
                            height=100,
                        )
                    )
                    draw_unknown_card(s, colors)
                elif len(numbers) > 1 and len(colors) == 1:
                    s = draw.add(draw.svg((x_offset, y_offset), (70, 100)))
                    s.add(
                        draw.image(
                            "/img/pieces/{}.svg".format(next(iter(colors))),
                            x=0,
                            y=0,
                            width=70,
                            height=100,
                        )
                    )
                    draw_unknown_card(s, numbers)
                else:
                    draw.add(
                        draw.image(
                            "/img/pieces/{}.svg".format(t),
                            x=x_offset,
                            y=y_offset,
                            width=70,
                            height=100,
                        )
                    )
            if "clue" in card:
                draw.add(
                    draw.image(
                        "/img/pieces/clue-{}.png".format(card["clue"]),
                        x=x_offset + 10,
                        y=y_offset - 40,
                        width=50,
                        height=70,
                    )
                )
                if y_offset < 20:
                    ytop = -20
            if "above" in card:
                textbox(card["above"], 0)
            if "below" in card:
                yb = textbox(card["below"], 105)
                if yb > ybelow:
                    ybelow = yb
            if "ontop" in card:
                color = {
                    "(R)": "red",
                    "(B)": "cyan",
                    "(G)": "lightgreen",
                    "(Y)": "yellow",
                    "(P)": "violet",
                }.get(card["ontop"], "white")
                draw.add(
                    draw.text(
                        card["ontop"],
                        x=[x_offset + 35],
                        y=[y_offset],
                        dy=[30],
                        fill=color,
                        stroke=color,
                        style="filter: url(#shadow)",
                    )
                )
            x_offset += 74
        y_offset += 120 + ybelow
        if x_offset > Xmax:
            Xmax = x_offset

draw["width"] = Xmax
draw["height"] = y_offset - ytop
draw["viewBox"] = "0 {} {} {}".format(ytop, Xmax, y_offset)

out = io.StringIO()
draw.write(out, pretty=True)
out = out.getvalue()
# workround stupid docusaurus/react error similar to this one: https://github.com/facebook/docusaurus/issues/3689
out = re.sub(r'xmlns:ev="(?:.*?)"', "", out)
# add shadow filter manually, because svgwrite's API for it is awkward
out = re.sub(
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
    out,
    count=1,
)

print(out)
