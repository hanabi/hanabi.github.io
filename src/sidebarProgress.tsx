import { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // eslint-disable-line @typescript-eslint/no-restricted-imports, import-x/no-unassigned-import
import sidebars from "../sidebars";
import { isObject } from "./utils";

/**
 * Extracts a list of page paths from a specific sidebar section or subsection.
 *
 * @param path The path to the section.
 * @returns An array of page paths found at that location in the sidebar.
 */
export function getSidebarParts(...path: readonly string[]): readonly string[] {
  const { mainSidebar } = sidebars;
  if (mainSidebar === undefined || !Array.isArray(mainSidebar)) {
    throw new TypeError(
      'Failed to parse the "mainSidebar" from "sidebars.ts".',
    );
  }

  // Navigate through the path to find the target section.
  let currentElements: readonly unknown[] = mainSidebar;

  for (const name of path) {
    const element = currentElements.find(
      (el) => isObject(el) && name in el,
    ) as Record<string, unknown>;

    if (!isObject(element)) {
      throw new TypeError(`Failed to find "${name}" in "sidebars.ts".`);
    } else if (!Array.isArray(element[name])) {
      throw new TypeError(
        `Failed to parse "${name}" element from "sidebars.ts".`,
      );
    }

    currentElements = element[name];
  }

  // Now flatten all page paths from the current location.
  const parts: string[] = [];

  function parseSidebar(elements: readonly unknown[]) {
    for (const element of elements) {
      if (typeof element === "string") {
        parts.push(element);
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
        'Failed to parse one of the sub-elements from "sidebars.ts".',
      );
    }
  }

  parseSidebar(currentElements);
  return parts;
}

/**
 * Creates a Progress component for a specific sidebar section.
 *
 * @param parts The array of page paths in the sidebar section.
 * @param pathPrefix The path prefix to match against (e.g. "beginner").
 * @returns A React component that displays progress through the section.
 */
export function createProgressComponent(
  parts: readonly string[],
  pathPrefix: string,
): ({ id }: { id: string }) => React.JSX.Element {
  return function Progress({ id }: { id: string }): React.JSX.Element {
    const part = parts.indexOf(`${pathPrefix}/${id}`);
    const percentage =
      part === -1 ? 0 : Math.round((part / (parts.length - 1)) * 100);

    // Once the component is rendered, stick it underneath the table of contents and make it
    // visible.
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
  };
}
