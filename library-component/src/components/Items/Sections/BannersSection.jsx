import React from "react";
import Banner from "../Banners";

export default function BannersSection() {
  return (
    <div>
      <h1>Banners Section</h1>
      <Banner message="Welcome to my world!" type="info" />
      <Banner message="Limited-time offer!" type="success" />
      <Banner message="Scheduled maintenance at 2am" type="warning" />
      <Banner message="Service unavailable" type="danger" />
    </div>
  );
}
