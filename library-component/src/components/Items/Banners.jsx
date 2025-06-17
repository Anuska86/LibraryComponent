import React from "react";
import "../../Styles/Banner.css";

export default function Banner({ message, type = "info" }) {
  return (
    <div className={`banner banner-${type}`}>
      <p className="banner-message">{message}</p>
    </div>
  );
}
