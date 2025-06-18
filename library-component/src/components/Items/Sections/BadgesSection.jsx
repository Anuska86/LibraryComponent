import React from "react";
import Badge from "../Badges";

export default function BadgesSection() {
  return (
    <div className="section badges-section">
      <h1 className="title">Badges Section</h1>
      <h2>Pill Badges</h2>
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          margin: "16px 0",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Badge label="New" color="primary" variant="pill" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Primary</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Badge label="Sale" color="success" variant="pill" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Success</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Badge label="Warning" color="warning" variant="pill" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Warning</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Badge label="Error" color="danger" variant="pill" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Danger</div>
        </div>
      </div>
      <h2>Square Badges</h2>
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          margin: "16px 0",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Badge label="New" color="primary" variant="square" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Primary</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Badge label="Sale" color="success" variant="square" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Success</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Badge label="Warning" color="warning" variant="square" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Warning</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Badge label="Error" color="danger" variant="square" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Danger</div>
        </div>
      </div>
      <h2>Another Shapes</h2>
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "flex-end",
          margin: "16px 0",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Badge label="New" color="primary" variant="circle" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Primary Circle</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Badge label="Sucess" color="success" variant="rectangle" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Success Rectangle</div>
        </div>
         <div style={{ textAlign: "center" }}>
          <Badge label="Warning" color="warning" variant="triangle" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Warning Triangle</div>
        </div>
         <div style={{ textAlign: "center" }}>
          <Badge label="Error" color="danger" variant="octagon" />
          <div style={{ fontSize: 16, marginTop: 8 }}>Error Octagon</div>
        </div>
      </div>
    </div>
  );
}
