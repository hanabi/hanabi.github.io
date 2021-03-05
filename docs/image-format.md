---
id: image-format
title: Technical Documentation for the Example Images
---

import Highlight, {defaultProps} from 'prism-react-renderer';

import SimpleSource from '!raw-loader!@site/image-generator/yml/generator-docs/simple.yml';
import SimpleResult from '@site/image-generator/yml/generator-docs/simple.yml';

import TextNameSource from '!raw-loader!@site/image-generator/yml/generator-docs/text-name.yml';
import TextNameResult from '@site/image-generator/yml/generator-docs/text-name.yml';

import TypesSource from '!raw-loader!@site/image-generator/yml/generator-docs/types.yml';
import TypesResult from '@site/image-generator/yml/generator-docs/types.yml';

import ClueSource from '!raw-loader!@site/image-generator/yml/generator-docs/clue.yml';
import ClueResult from '@site/image-generator/yml/generator-docs/clue.yml';

import CardTextSource from '!raw-loader!@site/image-generator/yml/generator-docs/card-text.yml';
import CardTextResult from '@site/image-generator/yml/generator-docs/card-text.yml';

import TrashSource from '!raw-loader!@site/image-generator/yml/generator-docs/trash.yml';
import TrashResult from '@site/image-generator/yml/generator-docs/trash.yml';

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
        <Image />
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

2. On the respective Markdown page, import it as a React component at the top of the file, like so:

```jsx
import NewChopMove from '@site/image-generator/yml/level-123/new-chop-move.yml';
```

(For an example of this, look at the Markdown page for [Level 1](https://github.com/hanabi/hanabi.github.io/blob/main/docs/level-1.md).)

3. Insert the React component at the appropriate place in the Markdown file:

```jsx
<NewChopMove />
```

(For an example of this, look at the Markdown page for [Level 1](https://github.com/hanabi/hanabi.github.io/blob/main/docs/level-1.md).)

<!-- lint enable ordered-list-marker-value -->

<br />

## Iteration

When using the `run.sh` script and viewing the page locally, any changes that you make to the website will be automatically updated without having to refresh the page.

<br />

## YML File Format

There are 2 main sections: `stacks` and `players`.
- `stacks` is an array of cards which have been played on the stacks already. The following suits are supported:
  - `r`: red,
  - `g`: green,
  - `b`: blue,
  - `y`: yellow,
  - `p`: purple,
  - `m`: rainbow (multicolor).
- `players` contains an entry for each player. Each entry contains the `cards` that they have in their hand.

<Example code={SimpleSource} Image={SimpleResult} />

Players are assigned the following names automatically: Alice, Bob, Cathy, Donald, and Emily. It is possible to override this with the `name` attribute. For example, this could be useful if Bob's hand is shown twice, before and after something happens.

`players` can also contain a `text` instead of `cards`. This is used to describe something that happens in a game.

<Example code={TextNameSource} Image={TextNameResult} />

<br />

### Cards

Cards in hand can be of various types:
- clued with known exact identity, e.g. `g2`
- clued with known suit, e.g. `b`
- clued with known rank, e.g. `4`
- clued with multiple possibilities, e.g. `b234`, `rm4`, `ym45`
- unclued card without any pips displayed, e.g. `x`
- unclued card with pips displayed, e.g. `xrg23`

By default, clued cards have an orange border, but this can be overridden with the `border` attribute.

<Example code={TypesSource} Image={TypesResult} />

<br />

### Clues

You can use the `clue` attribute to show that a card is in the process of being clued.

By default, there is no clue giver, but this can be specified with the `clue_giver` attribute.

<Example code={ClueSource} Image={ClueResult} />

<br />

### Text on Cards

Text can be placed on a card:
- `middle_note` to put a text label in the middle of the card
  - the string is automatically colored if it is a letter of one of the 5 suits
- `above` to put a note above the card
- `below` to put a note below the card

`above` and `below` have the same syntax:
- `above: Green 3` or `above: Rainbow 5` will draw the box with the specified color and text.
- Several more keywords have a specific color assigned to them: `Focus`, `Chop`.
- You can override the color using `color` attribute. CSS colors are accepted, and additionally `rainbow`.
- You can make it a multi-line note by using an array.

<Example code={CardTextSource} Image={CardTextResult} />

### Discard Pile

For some examples, some cards in the discard pile need to be shown. This is performed with the `discarded` array on the top level.

<Example code={TrashSource} Image={TrashResult} />
