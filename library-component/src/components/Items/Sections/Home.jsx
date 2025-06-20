import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../Menu/MenuIndex";
import Button from "../../Button/Button";

export default function Home() {
  function handleCopy() {
    navigator.clipboard.writeText("npm install anuska-library");
  }

  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Library Component.</h1>
      <p>
        This library provides reusable UI components with predefined styles for
        badges, banners, cards, and testimonials. Designed for flexibility, it
        allows developers to easily integrate these elements into their
        applications.You can use npm to install the library and start using
        these components in your projects. Thank you for choosing Anuska's
        Library! 😊
      </p>
      <div className="home-flex">
        <div className="home-menu">
          <Menu>
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
              <Menu.Item>
                <Link className="link-button" to="/tooltips">
                  Tooltips
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="link-button" to="/toast-popups">
                  Toast Popups
                </Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>

        <section className="installation-section">
          <h2>Get Started</h2>
          <p>Install the library using npm:</p>
          <div className="install-command">
            <code>npm install anuska-library</code>
            <Button
              className="copy-button"
              variant="secondary"
              size="lg"
              arial-controls="copyButton"
              onClick={handleCopy}
            >
              Copy
            </Button>
          </div>
          <p>
            <a
              href="https:www.npmjsx.package/anuska-library"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on npm
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
