import React from "react";
import Banner from "../Banners";
import "../../../Styles/Banner.css";

export default function BannersSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        gap: "16px"
      }}
    >
      <h1 className="title">Banners Section</h1>
      <Banner
        generalMessage="For your information"
        message="There are new updates availables"
        type="info"
      />
      <Banner
        generalMessage="Well done!"
        message="All the updates are up to date"
        type="success"
      />
      <Banner
        generalMessage="Attention!"
        message="Scheduled maintenance at 2am"
        type="warning"
      />
      <Banner
        generalMessage="Service unavailable"
        message="There is a conection problem"
        type="danger"
      />
    </div>
  );
}
