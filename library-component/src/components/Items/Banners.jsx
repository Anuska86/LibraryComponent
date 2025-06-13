import React from "react";
import "../../Styles/Banner.css";

export default function Banner({ message, type = "info" }) {
  return (
    <div className={`banner banner-${type}`}>
      <p>{message}</p>
    </div>
  );
}
