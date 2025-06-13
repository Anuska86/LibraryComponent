import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../Menu/MenuIndex";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Library Component.</h1>
      <p>
        This library provides reusable UI components with predefined styles for
        badges, banners, cards, and testimonials. Designed for flexibility, it
        allows developers to easily integrate these elements into their
        applications.
      </p>
      <div>
        <Menu onOpen={() => console.log("Menu opened/closed")}>
          <Menu.Button>Menu</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item>
              <Link className="link-button" to="/badges">
                Badges
              </Link>
            </Menu.Item>
            <Menu.Item>
              {" "}
              <Link className="link-button" to="/banners">
                Banners
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className="link-button" to="/cards">
                Cards
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className="link-button" to="/testimonials">
                Testimonials
              </Link>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
}
