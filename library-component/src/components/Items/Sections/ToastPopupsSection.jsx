import React from "react";
import "../../../Styles/ToastPopups.css";
import ToastPopup from "../ToastPopup.jsx";
import Button from "../../Button/Button";

const positions = [
  { label: "Top Right", value: "top-right" },
  { label: "Top Left", value: "top-left" },
  { label: "Bottom Right", value: "bottom-right" },
  { label: "Bottom Left", value: "bottom-left" },
];

export default function ToastPopupsSection() {
  const [toasts, setToasts] = React.useState([]);
  const [position, setPosition] = React.useState("top-right");

  const addToast = (message, type = "info", autoClose = true) => {
    const id = new Date().getTime();
    setToasts((prev) => [...prev, { id, message, type }]);
    if (autoClose) {
      setTimeout(() => removeToast(id), 3000);
    }
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-popups-section">
      <h2 className="title">Toast Demo</h2>
      <div style={{ marginBottom: 16 }}>
        <span>Position: </span>
        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          {positions.map((pos) => (
            <option key={pos.value} value={pos.value}>
              {pos.label}
            </option>
          ))}
        </select>
      </div>
      <Button
        className="toast-button"
        onClick={() => addToast("Success toast!", "success")}
      >
        Success
      </Button>
      <Button
        className="toast-button"
        onClick={() => addToast("Info toast!", "info")}
      >
        Info
      </Button>
      <Button
        className="toast-button"
        onClick={() => addToast("Warning toast!", "warning")}
      >
        Warning
      </Button>
      <Button
        className="toast-button"
        onClick={() => addToast("Error toast!", "error")}
      >
        Error
      </Button>
      <Button
        className="toast-button"
        onClick={() => addToast("Manual close only", "manual", false)}
      >
        Manual Close
      </Button>
      <div className={`toast-container ${position}`}>
        {toasts.map((toast) => (
          <ToastPopup
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
            showClose={true}
          />
        ))}
      </div>
    </div>
  );
}
