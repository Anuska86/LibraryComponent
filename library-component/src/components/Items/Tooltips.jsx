import React from "react";
import "../../Styles/Tooltip.css";

export default function Tooltip({ content, type = "default", children }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const tooltipStyles = type !== "default" ? type : "";

  return (
    <div
      className={`custom-tooltip-container ${tooltipStyles}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{
        display: "inline",
        position: "relative",
      }}
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
