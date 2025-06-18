import React from "react";
import "../../Styles/Badge.css";

export default function Badge({ label, color = "primary", variant = "pill" }) {
  if (variant === "triangle") {
    const colorMap = {
      primary: "#007bff",
      success: "#28a745",
      warning: "#ffc107",
      danger: "#dc3545",
    };
    const triangleColor = colorMap[color] || "#007bff";
    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        <div
          className="badge-triangle"
          style={{ borderBottomColor: triangleColor }}
        ></div>
        <span
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: color === "warning" ? "black" : "white",
            fontWeight: "bold",
            fontSize: "18px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <span className={`badge badge-${color} badge-${variant}`}>{label} </span>
  );
}
