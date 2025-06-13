import React from "react";
import { ThemeContext, ThemeButton } from "./components/Button/ThemeButton";
import Menu from "./components/Menu/MenuIndex";
import "../src/index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Items/Sections/Home";
import BadgesSection from "../src/components/Items/Sections/BadgesSection";
import BannersSection from "./components/Items/Sections/BannersSection";
import CardsSection from "./components/Items/Sections/CardsSection";

function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <BrowserRouter>
      <main className={`app-container ${theme}`}>
        <header>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        <div className="content">
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/badges" element={<BadgesSection />} />
              <Route path="/banners" element={<BannersSection />} />
              <Route path="/cards" element={<CardsSection />} />
            </Routes>
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
                <Menu.Item>Testimonials</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          <ThemeButton></ThemeButton>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
