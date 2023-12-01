import { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // eslint-disable-line import/no-unassigned-import, @typescript-eslint/no-restricted-imports
import sidebars from "../sidebars";

const { mainSidebar } = sidebars;
if (mainSidebar === undefined || !Array.isArray(mainSidebar)) {
  throw new Error('Failed to parse the "mainSidebar" from "sidebars.ts".');
}

// @ts-expect-error Too lazy to type this.
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const beginnersGuidePartsRaw = mainSidebar.find(
  // @ts-expect-error Too lazy to type this.
  (item) => item["Beginner's Guide"],
)["Beginner's Guide"];
const parts: string[] = [];
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
parseSidebar(parts, beginnersGuidePartsRaw);
if (parts[0] === "beginner") {
  parts.shift();
}

function parseSidebar(acc: string[], partsRaw: unknown[]) {
  for (const item of partsRaw) {
    if (typeof item === "string") {
      acc.push(item);
    } else {
      // @ts-expect-error Too lazy to type this.
      parseSidebar(acc, Object.values(item)[0]);
    }
  }
}
const totalParts = parts.length;

export default function Progress({ id }: { id: string }): React.JSX.Element {
  const part = parts.indexOf(`beginner/${id}`);
  if (part === -1) {
    throw new Error("page id not found in sidebar");
  }
  const percentage = Math.round(((part + 1) / totalParts) * 100);

  // Once the component is rendered, stick it underneath the table of contents and make it visible.
  useEffect(() => {
    const toc = document.querySelector<HTMLElement>("ul.table-of-contents");
    if (toc !== null) {
      toc.style.paddingTop = "6em";
    }
  });

  return (
    <div id="percent">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}
