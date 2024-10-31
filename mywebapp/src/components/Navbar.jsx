import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SemSmashers</div>
      <div className="navbar-links">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
