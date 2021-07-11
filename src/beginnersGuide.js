import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TOTAL_PARTS = 51;

export default function Progress({ part }) {
  const percentage = Math.round(((part - 1) / TOTAL_PARTS) * 100);
  return (
    <div
      style={{ position: "fixed", right: "2em", width: "8em", height: "8em" }}
    >
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}
