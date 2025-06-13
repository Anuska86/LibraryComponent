import React from "react";
import Card from "../Cards";

export default function CardsSection() {
  return (
    <div>
      <h1>Cards Section</h1>
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
  );
}
