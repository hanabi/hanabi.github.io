export class SVGNode {
  name: string;
  children: SVGNode[] = [];
  attributes = new Map<string, string | number>();
  textContent: string | null = "";
  rawTextContent = "";

  constructor(name: string) {
    this.name = name;
  }

  addImage(
    href: string,
    opts: Readonly<Record<string, string | number>>,
  ): void {
    const node = this.addElement("image", opts);
    node.attributes.set("xlink:href", href);
  }

  addText(
    text: string | null,
    opts: Readonly<Record<string, string | number>>,
  ): void {
    const node = this.addElement("text", opts);
    node.textContent = text;
  }

  addSVG(opts: Readonly<Record<string, string | number>>): SVGNode {
    const node = this.addElement("svg", opts);
    node.children.push(new SVGNode("defs"));
    return node;
  }

  addRect(opts: Readonly<Record<string, string | number>>): SVGNode {
    return this.addElement("rect", opts);
  }

  addElement(
    name: string,
    opts: Readonly<Record<string, string | number>>,
  ): SVGNode {
    const node = new SVGNode(name);
    for (const [key, value] of Object.entries(opts)) {
      node.attributes.set(key, value);
    }
    this.children.push(node);
    return node;
  }

  get attrsText(): string {
    // Iterator.map isn't supported yet on node, apparently; but also there's no sort() on it.
    // TODO: sort() can be removed after py and js start producing the same svg
    return [...this.attributes.entries()]
      .toSorted((a, b) => {
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

  text(offset = 0): string {
    const indent = " ".repeat(offset);
    let result = `${indent}<${this.name}${this.attrsText}`;

    if (this.children.length > 0) {
      result += ">\n";
      for (const child of this.children) {
        result += child.text(offset + 2);
      }
      result += `${indent}</${this.name}>\n`;

      return result;
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (this.textContent) {
      const escaped = this.textContent.replaceAll(
        /["&'<>]/g,
        (character: string) => {
          switch (character) {
            case "<": {
              return "&lt;";
            }

            case ">": {
              return "&gt;";
            }

            case "&": {
              return "&amp;";
            }

            case "'": {
              return "&apos;";
            }

            case '"': {
              return "&quot;";
            }

            default: {
              return character;
            }
          }
        },
      );
      result += `>${escaped}</${this.name}>\n`;

      return result;
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    result += this.rawTextContent
      ? `>${this.rawTextContent}</${this.name}>\n`
      : "/>\n";

    return result;
  }
}
