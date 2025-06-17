import React from "react";
import Tooltip from "../Tooltips";
import "../../../Styles/Tooltip.css";

export default function TooltipsSection() {
  return (
    <div className="tooltips-section">
      <h1>Tooltips Section</h1>
      <div className="tooltips-types">
        <div className="tooltip-wrapper">
          <Tooltip content="I'm the default tooltip 😄" type="default">
            <div className="tooltip-target">Hover me (Default)</div>
          </Tooltip>
        </div>

        <div className="tooltip-wrapper">
          <Tooltip content="I'm the fancy tooltip 😉" type="fancy">
            <div className="tooltip-target">Hover me (Fancy) </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
