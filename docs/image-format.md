---
id: image-format
title: Technical Documentation for the Example Images
---

import Highlight, {defaultProps} from 'prism-react-renderer';

import SimpleSource from 'raw-loader!@site/image-generator/yml/generator-docs/simple.yml';
import SimpleResult from '@site/static/img/generated/generator-docs/simple.svg';

import TextNameSource from 'raw-loader!@site/image-generator/yml/generator-docs/text-name.yml';
import TextNameResult from '@site/static/img/generated/generator-docs/text-name.svg';

import TypesSource from 'raw-loader!@site/image-generator/yml/generator-docs/types.yml';
import TypesResult from '@site/static/img/generated/generator-docs/types.svg';

import ClueSource from 'raw-loader!@site/image-generator/yml/generator-docs/clue.yml';
import ClueResult from '@site/static/img/generated/generator-docs/clue.svg';

import CardTextSource from 'raw-loader!@site/image-generator/yml/generator-docs/card-text.yml';
import CardTextResult from '@site/static/img/generated/generator-docs/card-text.svg';

import TrashSource from 'raw-loader!@site/image-generator/yml/generator-docs/trash.yml';
import TrashResult from '@site/static/img/generated/generator-docs/trash.svg';

export const Code = ({code}) => (
  <Highlight {...defaultProps} code={code} language="yaml">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre><code>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </code></pre>
    )}
  </Highlight>
);

export const Example = ({code, Image}) => (
  <div class="container">
    <div class="row">
      <div class="col">
        <Code code={code} />
      </div>
      <div class="col">
        <Image className="example" />
      </div>
    </div>
  </div>
);

## Intro

The example images are created from a textual description in YAML format.

Put the .yml file to https://github.com/hanabi/hanabi.github.io/tree/main/image-generator/yml and the build system (`./build.sh`) will create SVG which you can import in .md file and use as React component:

```jsx
import QuadrupleBluffChopPull from '@site/static/img/generated/level-123/quadruple-bluff-chop-pull.svg';

<QuadrupleBluffChopPull className="example" />
```

Note the `className="example"`, that part is required **as is**, otherwise light/dark theme won't work.

For a quicker iteration you can use `./run.sh`, then every time after changing the .yml file, you'll need to run `image-generator/create-svg-all.py`, and existing `./run.sh` will pick up the changes to .svg files automatically.

## File Format

There are 2 main sections: `stacks` and `players`.
- `stacks` is an array of suit:rank pairs of cards which were played on stacks already. The following suits are supported:
  - `r`: red,
  - `g`: green,
  - `b`: blue,
  - `y`: yellow,
  - `p`: purple,
  - `m`: multicolor.
- `players` contains which `cards` players have in hands.

<Example code={SimpleSource} Image={SimpleResult} />

Players are assigned names automatically, in order: Alice, Bob, Cathy, Donald, Emily.
But it's possible to override it via the `name` attribute, which may be useful when e.g. Bob's hand is shown twice - before and after.

`players` can also contain a `text` instead of `cards` which describe some situation in game:

<Example code={TextNameSource} Image={TextNameResult} />

### Cards

Cards in hand can be of various types:
- known exact identity, e.g. `g2` or `5r`
- known suit, e.g. `b` or `b234`
- known rank, e.g. `4` or `4rm`
- clued with multiple possibilities, e.g. `ym45`
- unclued card, `x`
- unclued card with pips displayed: prepend the combination of suits and ranks with `x`: `x23rg`

<Example code={TypesSource} Image={TypesResult} />

By default, clued cards have an orange border, but this can be overridden with the `border` attribute.

### Clues

You can also show the clue itself and who gives the clue:

<Example code={ClueSource} Image={ClueResult} />

### Text on cards

On cards there can be text:
- in middle of card
  - `middle_note` accepts a string like `(R)` or `(3)`, and is automatically colored if it's letter of one of 5 suits
- above
- below
  - `above` and `below` have the same syntax:
  - `above: Green 3` or `above: Rainbow 5` will draw the box with the specified color and text
  - You can override the color using `color` attribute. CSS color are accepted, and additionally `rainbow`
  - You can make it multiline by using an array

<Example code={CardTextSource} Image={CardTextResult} />

### Trash bin

You can show that some cards were already discarded via `discarded` array on the top level:

<Example code={TrashSource} Image={TrashResult} />
