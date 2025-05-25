import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../Style/Navbar.css";
import logo from "../Image/logo-eRVar-dC (1).svg"; // Add your logo image path

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`top-navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        {/* Mobile Logo - Only visible in responsive mode */}
        <img src={logo} alt="Logo" className="mobile-logo" />

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links-nav ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link></li>
          <li><Link to="/project" onClick={() => setMenuOpen(false)}>PROJECTS</Link></li>
          <li><Link to="/pages" onClick={() => setMenuOpen(false)}>PAGES</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
        </ul>

        {/* Action Buttons */}
        <div className="actions">
          <button className="language">🌐Eng</button>
          <button className="quote-btn">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
