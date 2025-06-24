import React from "react";
import Tooltip from "../Tooltips";
import "../../../Styles/Tooltip.css";

export default function TooltipsSection() {
  return (
    <div className="tooltips-section">
      <h1 className="title">Tooltips Section</h1>
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
        <div className="tooltip-wrapper">
          <Tooltip content="Hey! I'm the funny tooltip  😜" type="funny">
            <div className="tooltip-target">Hover me (Funny) </div>
          </Tooltip>
        </div>
            <div className="tooltip-wrapper">
          <Tooltip content="Purrrrr! I'm the feline tooltip 🐾" type="feline">
            <div className="tooltip-target">Hover me (Feline) </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
