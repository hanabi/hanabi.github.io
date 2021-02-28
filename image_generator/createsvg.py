#!/usr/bin/python3
import yaml
import sys
import svgwrite
import re
import io

# hack to change text color via CSS. Class name would be more proper, but it's mangled by docusaurus.
THEME_TEXT_COLOR = '#000001'

input = yaml.load(sys.stdin, Loader=yaml.SafeLoader)
print('<!-- generated via image_generator script in this repo -->')

draw = svgwrite.Drawing()

if 'title' in input:
    draw.add(draw.text(input['title'], x=[20], dy=[30], fill=THEME_TEXT_COLOR, **{'font-size': 24}))

xoff = 0
for color_value in input['stacks']:
    color, value = next(iter(color_value.items()))
    if value:
        fname = '{}{}'.format(color, value)
    else:
        fname = 'back-{}'.format(color)
    draw.add(draw.image('/img/pieces/{}.png'.format(fname), x=xoff, y=50, width=70, height=100))
    xoff += 72

for line_dict in input['players']:
    if 'cards' in line_dict:
        num_cards_in_row = len(line_dict['cards'])
        break

def textbox(opts, offset):
    if type(opts) == str:
        text = [opts]
        color = text[0].split()[0].lower()
        if color not in ('red', 'yellow', 'black', 'purple', 'blue', 'green'):
            color = 'black'
    else:
        text = opts['text']
        if type(text) == str:
            text = [text]
        color = opts.get('color', 'black')
    r = draw.add(draw.svg((xoff+3, yoff+offset), (64, 20 * len(text))))
    textcolor = 'white'
    r.add(draw.rect((0, 0), (64, 20 * len(text)), stroke=textcolor, fill=color))
    for i, line in enumerate(text):
        l = r.add(draw.svg((0, 20 * i), (64, 20)))
        t = l.add(draw.text(line, x=['50%'], y=['50%'], fill=textcolor))
        t['text-anchor'] = 'middle'
        t['dominant-baseline'] = 'central'
    return 20 * len(text)

ytop = 0
yoff = 0
Xoff = xoff
Xmax = Xoff

for line_dict in input['players']:
    if 'text' in line_dict:
        draw.add(draw.text(line_dict['text'], x=[Xoff + 40], y=[yoff], dy=[20], fill=THEME_TEXT_COLOR))
        yoff += 30
    else:
        draw.add(draw.text(line_dict['name'], x=[Xoff], y=[yoff], dy=[50], fill=THEME_TEXT_COLOR))
        if 'cluegiver' in line_dict:
            draw.add(draw.text('(clue', x=[Xoff], y=[yoff], dy=[70], fill=THEME_TEXT_COLOR))
            draw.add(draw.text('giver)', x=[Xoff], y=[yoff], dy=[90], fill=THEME_TEXT_COLOR))
        xoff = Xoff + 60
        ybelow = 5
        for card in line_dict['cards']:
            t = str(card['type'])
            if t == 'x':
                fname = 'back'
            else:
                fname = t
            if t != 'x':
                draw.add(draw.rect((xoff-1, yoff-1), (72, 102), fill='orange'))
            draw.add(draw.image('/img/pieces/{}.png'.format(fname), x=xoff, y=yoff + (10 if t == 'x' else 0), width=70, height=100))
            if 'clue' in card:
                draw.add(draw.image('/img/pieces/clue-{}.png'.format(card['clue']), x=xoff+10, y=yoff-40, width=50, height=70))
                if yoff < 20:
                    ytop = -20
            if 'above' in card:
                textbox(card['above'], 0)
            if 'below' in card:
                yb = textbox(card['below'], 95)
                if yb > ybelow:
                    ybelow = yb
            if 'ontop' in card:
                draw.add(draw.text(card['ontop'], x=[xoff+20], y=[yoff], dy=[30], fill='black', stroke='white'))
            xoff += 74
        yoff += 120 + ybelow
        if xoff > Xmax:
            Xmax = xoff

draw['width'] = Xmax
draw['height'] = yoff-ytop
draw['viewBox'] = '0 {} {} {}'.format(ytop, Xmax, yoff)

out = io.StringIO()
draw.write(out, pretty=True)
# workround stupid docusaurus/react error similar to this one: https://github.com/facebook/docusaurus/issues/3689
print(re.sub(r'xmlns:ev="(?:.*?)"', '', out.getvalue()))
