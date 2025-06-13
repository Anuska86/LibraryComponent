import React from "react";
import "../../Styles/Tooltip.css";

export default function Tooltip({ content, type }) {
  return <span className={`tooltip tooltip-${type}`}>{content}</span>;
}
