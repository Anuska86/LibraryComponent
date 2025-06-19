import React from "react";
import "../../Styles/Banner.css";
import { GoInfo } from "react-icons/go";
import { TiWarningOutline } from "react-icons/ti";
import { VscError } from "react-icons/vsc";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const iconMap = {
  info: <GoInfo size={24} />,
  success: <IoShieldCheckmarkOutline size={24} />,
  warning: <TiWarningOutline size={24} />,
  danger: <VscError size={24} />,
};

export default function Banner({
  message,
  generalMessage,
  showIcon = true,
  type = "info",
}) {
  return (
    <div
      className={`banner banner-${type}`}
      style={{ display: "flex", alignItems: "center" }}
    >
      {showIcon && iconMap[type]}
      <p className="banner-message" style={{ margin: 0 }}>
        <div style={{ fontWeight: "bold" }}>{generalMessage}</div>
        <div>{message}</div>
      </p>
    </div>
  );
}
