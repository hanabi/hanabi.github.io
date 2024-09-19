import { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // eslint-disable-line @typescript-eslint/no-restricted-imports, import-x/no-unassigned-import
import sidebars from "../sidebars";
import { isObject } from "./utils";

const BEGINNERS_GUIDE_PARTS: readonly string[] = (() => {
  const { mainSidebar } = sidebars;
  if (mainSidebar === undefined || !Array.isArray(mainSidebar)) {
    throw new TypeError(
      'Failed to parse the "mainSidebar" from "sidebars.ts".',
    );
  }

  const secondSidebarElement = mainSidebar[1];
  if (secondSidebarElement === undefined || !isObject(secondSidebarElement)) {
    throw new TypeError(
      'Failed to parse the second sidebar element from "sidebars.ts".',
    );
  }

  const beginnersGuideElements = (
    secondSidebarElement as Record<string, unknown>
  )["Beginner's Guide"];
  if (!Array.isArray(beginnersGuideElements)) {
    throw new TypeError(
      'Failed to parse the Beginner\'s Guide element from "sidebars.ts".',
    );
  }

  const beginnersGuideParts: string[] = [];

  function parseSidebar(parts: readonly unknown[]) {
    for (const element of parts) {
      if (typeof element === "string") {
        beginnersGuideParts.push(element);
        continue;
      }

      if (isObject(element)) {
        const subParts = Object.values(element)[0];
        if (!Array.isArray(subParts)) {
          throw new TypeError(
            'Failed to parse a sub-element array in "sidebars.ts".',
          );
        }

        parseSidebar(subParts);
        continue;
      }

      throw new TypeError(
        'Failed to parse one of the sub-elements of the Beginner\'s Guide from "sidebars.ts".',
      );
    }
  }

  parseSidebar(beginnersGuideElements);

  // Remove the intro, since that should not count towards the progress bar.
  if (beginnersGuideParts[0] === "beginner") {
    beginnersGuideParts.shift();
  }

  return beginnersGuideParts;
})();

export default function Progress({ id }: { id: string }): React.JSX.Element {
  const part = BEGINNERS_GUIDE_PARTS.indexOf(`beginner/${id}`);
  if (part === -1) {
    throw new Error("page id not found in sidebar");
  }
  const percentage = Math.round(
    ((part + 1) / BEGINNERS_GUIDE_PARTS.length) * 100,
  );

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
