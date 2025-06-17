import React from "react";
import "../../Styles/ToastPopups.css";
import Button from "../Button/Button";

export default function ToastPopup({
  message,
  type,
  onClose,
  showClose = true,
}) {
  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      {showClose && (
        <Button className="toast-close-btn" onClick={onClose}>
          x
        </Button>
      )}
    </div>
  );
}
