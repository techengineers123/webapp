import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">S4 Community</div>
      <div className="navbar-links">
        <button onClick={() => scrollToSection("home")} className="nav-button">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="nav-button">
          About
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="nav-button"
        >
          Contact Us
        </button>
        <button onClick={() => scrollToSection("pyq")} className="nav-button">
          PYQ
        </button>
      </div>
      <div className="navbar-auth">
        <button onClick={() => navigate("/login")} className="auth-button">
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="auth-button register-button"
        >
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
