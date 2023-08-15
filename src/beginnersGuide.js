import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // eslint-disable-line import/no-unassigned-import
import { mainSidebar } from "../sidebars.js";

const beginnersGuidePartsRaw = mainSidebar.find(
  (item) => item["Beginner's Guide"]
)["Beginner's Guide"];
const parts = [];
parseSidebar(parts, beginnersGuidePartsRaw);
if (parts[0] === "beginner") {
  parts.shift();
}

function parseSidebar(acc, partsRaw) {
  for (const item of partsRaw) {
    if (typeof item === "string") {
      acc.push(item);
    } else {
      parseSidebar(acc, Object.values(item)[0]);
    }
  }
}
const TOTAL_PARTS = parts.length;

export default function Progress({ id }) {
  const part = parts.indexOf(`beginner/${id}`);
  if (part === -1) {
    throw new Error("page id not found in sidebar");
  }
  const percentage = Math.round(((part + 1) / TOTAL_PARTS) * 100);

  // Once the component is rendered, stick it underneath the table of contents and make it visible.
  useEffect(() => {
    const toc = document.querySelector("ul.table-of-contents");
    if (toc) {
      toc.style.paddingTop = "6em";
    }
  });

  return (
    <div id="percent">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}
