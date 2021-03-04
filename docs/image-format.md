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

<br />

## Intro

Throughout this website, we have example images that show game states. This page describes how to edit them or how to create new ones.

Each example image is created from a [YAML](https://yaml.org/) file, which is a simple textual description that you can easily edit. The YAML files are located in the [`image-generator/yml`](https://github.com/hanabi/hanabi.github.io/tree/main/image-generator/yml) directory.

<br />

## Steps

<!-- lint disable ordered-list-marker-value -->

1. Put a new YAML file or edit an existing YAML file in the [`image-generator/yml`](https://github.com/hanabi/hanabi.github.io/tree/main/image-generator/yml) directory.

2. Run `create-svg-all.sh`, which will re-generate all of the SVG images.

3. On the respective Markdown page, import the SVG file as a React component at the top of the file, like so:

```jsx
import NewChopMove from '@site/static/img/generated/level-123/new-chop-move.svg';
```

(For an example of this, look at the Markdown page for [Level 1](https://github.com/hanabi/hanabi.github.io/blob/main/docs/level-1.md).)

4. Insert the React component at the appropriate place in the Markdown file:

```jsx
<NewChopMove className="example" />
```

(For an example of this, look at the Markdown page for [Level 1](https://github.com/hanabi/hanabi.github.io/blob/main/docs/level-1.md).)

The `className="example"` part is required **as is** in order for the light & dark theme to work properly.

<!-- lint enable ordered-list-marker-value -->

<br />

## Iteration

- When using the `run.sh` script and viewing the page locally, any changes that you make to the website will be automatically updated without having to refresh the page.
- However, this is not the case for YAML files. Whenever you change a YAML file, you will need to re-run the `create-svg-all.sh` in order for it to get updated on the page.

<br />

## YML File Format

There are 2 main sections: `stacks` and `players`.
- `stacks` is an array of cards which have been played on the stacks already. The following suits are supported:
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
