import React from "react";
import { ThemeContext, ThemeButton } from "./components/Button/ThemeButton";
import Menu from "./components/Menu/MenuIndex";
import "../src/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BadgesSection from "../src/components/Items/Sections/BadgesSection";

function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Router>
      <main className={`app-container ${theme}`}>
        <h1 className="title">Welcome to the Library Component</h1>
        <h2 className="introduction">
          This library provides reusable UI components with predefined styles
          for badges, banners, cards, and testimonials. Designed for
          flexibility, it allows developers to easily integrate these elements
          into their applications.
        </h2>
        <div className="content">
          <Menu onOpen={() => console.log("Menu opened/closed")}>
            <Menu.Button>Menu</Menu.Button>
            <Menu.Dropdown>
              <Menu.Item>Badges</Menu.Item>
              <Menu.Item>Banners</Menu.Item>
              <Menu.Item>Cards</Menu.Item>
              <Menu.Item>Testimonials</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <ThemeButton></ThemeButton>
        <Routes>
          <Route path="/badges" element={<BadgesSection />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
