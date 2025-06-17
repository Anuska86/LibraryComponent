import React from "react";
import "../../Styles/Tooltip.css";

export default function Tooltip({ content, type = "default", children }) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      className={`custom-tooltip-container ${
        type === "fancy" ? "fancy" : ""
      }`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ display: "inline", position: "relative" }}
    >
      {" "}
      {children}
      {isVisible && (
        <div className="custom-tooltip-box">
          {content}
          <span className="tooltip-arrow"> </span>
        </div>
      )}
    </div>
  );
}
