import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        handleShow(true);
        console.log("header should be fixed");
      } else {
        handleShow(false);
        console.log("header should not be fixed");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <nav className={`navbar ${show && "navbar__fixed"}`}>
      <img
        className="navbar__logo"
        src="http://schoolerpindia.com/images/logo.png"
        alt="School Logo"
      ></img>
      <div className="navbar__header">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/aboutus" className="navbar__link">
          About Us
        </Link>
        <Link to="/schoolerp" className="navbar__link">
          Why School ERP
        </Link>
        <Link to="/overview" className="navbar__link">
          Overview
        </Link>
        <Link to="/purpose" className="navbar__link">
          Purpose
        </Link>
        <Link to="/features" className="navbar__link">
          Features
        </Link>
        <Link to="/modules" className="navbar__link">
          Modules
        </Link>
        <Link to="/benefits" className="navbar__link">
          Benefits
        </Link>
        <Link to="/contactus" className="navbar__link">
          Contact Us
        </Link>
        <a href="#">
          <i className="webex-icon-Search"></i>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
