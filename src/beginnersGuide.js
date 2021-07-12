import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TOTAL_PARTS = 60;

export default function Progress({ part }) {
  const percentage = Math.round(((part - 1) / TOTAL_PARTS) * 100);

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
