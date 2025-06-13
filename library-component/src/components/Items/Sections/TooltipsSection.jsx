import React from "react";
import Tooltip from "../Tooltips";

export default function TooltipsSection() {
  return (
    <div>
      <h1>Tooltips Section</h1>
      <div className="tooltip-wrapper">
        <div className="target">Hover me (Default)</div>
        <Tooltip content="I'm the default tooltip :)" type="default" />
      </div>

      <div className="tooltip-wrapper">
        <div className="target">Hover me (Fancy) </div>
        <Tooltip content="I'm the fancy tooltip :P" type="fancy" />
      </div>
    </div>
  );
}
