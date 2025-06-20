import React from "react";
import { ThemeContext, ThemeButton } from "./components/Button/ThemeButton";
import "../src/index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Items/Sections/Home";
import { IoLogoReact } from "react-icons/io5";
import BadgesSection from "../src/components/Items/Sections/BadgesSection";
import BannersSection from "./components/Items/Sections/BannersSection";
import CardsSection from "./components/Items/Sections/CardsSection";
import TestimonialsSection from "./components/Items/Sections/TestimonialsSection";
import TooltipsSection from "./components/Items/Sections/TooltipsSection";
import ToastPopupsSection from "./components/Items/Sections/ToastPopupsSection";

function App() {
  const { theme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <BrowserRouter>
      <main className={`app-container ${theme}`}>
        <header className="main-header">
          <span className="react-logo" aria-label="logo" role="img">
            <IoLogoReact size={48} />
          </span>
          <div className="nav-welcome">Welcome to Anuska's Library!</div>
          <nav className="navbar">
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
              <Route path="/testimonials" element={<TestimonialsSection />} />
              <Route path="/tooltips" element={<TooltipsSection />} />
              <Route path="/toast-popups" element={<ToastPopupsSection />} />
            </Routes>
          </div>
        </div>
        <footer className="footer">
          <p>© 2025 Anuska's Library. All rights reserved.</p>
          <ThemeButton />
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;
