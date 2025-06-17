import React from "react";
import { BsCardImage } from "react-icons/bs";
import "../../Styles/Card.css"

export default function Card({ title, content, showIcon = false, footer }) {
  return (
    <div className="card">
      {showIcon && (
        <div className="card-icon">
          <BsCardImage size={48} />
        </div>
      )}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
