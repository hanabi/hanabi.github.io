import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { mainSidebar } from "../sidebars.js";

const beginnersGuidePartsRaw = mainSidebar.find(item => item["Beginner's Guide"])["Beginner's Guide"];
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
  const part = parts.findIndex(id2 => `beginner/${id}` === id2);
  if (part === -1) {
    throw new Error("page id not found in sidebar");
  }
  const percentage = Math.round(((part + 1) / TOTAL_PARTS) * 100);

  // Once the component is rendered, stick it underneath the table of contents and make it visible
  useEffect(() => {
    document
      .querySelector("main > div > div > div:nth-child(2)")
      .append(document.querySelector("#percent"));
    document.querySelector("#percent").style.display = null;
  });

  return (
    <div
      id="percent"
      style={{
        position: "fixed",
        display: "none",
        width: "8em",
        height: "8em",
      }}
    >
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}
