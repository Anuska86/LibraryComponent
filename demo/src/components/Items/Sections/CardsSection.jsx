import React from "react";
import Card from "../Cards";
import "../../../Styles/Card.css";

export default function CardsSection() {
  return (
    <div>
      <h1 className="title">Cards Section</h1>
      <div className="cards-container">
        <Card
          title="Card one"
          content="This is the first card"
          showIcon={true}
          footer="Footer text"
        />
        <Card
          title="Card two"
          content="This is the second card and don't have a footer"
          showIcon={true}
        />
        <Card
          title="Card three"
          content="This is the third card and don't have image or footer"
        />
      </div>
    </div>
  );
}
