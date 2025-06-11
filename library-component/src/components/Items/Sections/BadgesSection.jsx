import React from "react";
import Badge from "../Badge";

export default function Badges() {
  return (
    <div>
      <h1>Badges Section</h1>
      <Badge label="New" color="primary" />
      <Badge label="Sale" color="success" />
      <Badge label="Warning" color="warning" />
      <Badge label="Error" color="danger" />
    </div>
  );
}
