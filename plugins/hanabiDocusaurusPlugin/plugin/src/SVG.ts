import { SVGNode } from "./SVGNode";

const DEFS_PREFACE = `
        <filter x="0" y="0" width="1" height="1" id="clueGiver">
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

export class SVG {
  private readonly root;

  constructor() {
    this.root = new SVGNode("svg");
    this.root.attributes.set("xmlns", "http://www.w3.org/2000/svg");
    this.root.attributes.set("xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.root.attributes.set("baseProfile", "full");
    this.root.attributes.set("version", "1.1");
    const defs = new SVGNode("defs");
    defs.rawTextContent = DEFS_PREFACE;
    this.root.children.push(defs);
  }

  addImage(
    href: string,
    opts: Readonly<Record<string, string | number>>,
  ): void {
    this.root.addImage(href, opts);
  }

  addText(
    text: string | null,
    opts: Readonly<Record<string, string | number>>,
  ): void {
    this.root.addText(text, opts);
  }

  addSVG(opts: Readonly<Record<string, string | number>>): SVGNode {
    return this.root.addSVG(opts);
  }

  addRect(opts: Readonly<Record<string, string | number>>): void {
    this.root.addRect(opts);
  }

  addElement(
    name: string,
    opts: Readonly<Record<string, string | number>>,
  ): SVGNode {
    return this.root.addElement(name, opts);
  }

  get attributes(): Map<string, string | number> {
    return this.root.attributes;
  }

  get text(): string {
    return `<?xml version="1.0" encoding="utf-8" ?>\n${this.root.text()}\n`;
  }
}
