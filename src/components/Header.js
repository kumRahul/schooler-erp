import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Profile from "./profile/Profile";
import SocialIcons from "./SocialIcons";

function Header(props) {
  return (
    <header className="header">
      {/* Phone */}
      <div className="header__phone">
        <i className="fa-solid fa-phone phone__logo"></i>
        <span className="phone-text">+91-9176073707, +91-1234567890</span>
      </div>
      <span className="header__pipe">|</span>
      {/* Address */}
      <div className="header__location">
        <i className="fa fa-map-marker location__logo" />
        <span className="header__text">
          Ayaan Society, Wagholi Road, Wagholi, Pune - 412207
        </span>
      </div>

      {/* Icons */}
      <div className="header__social">
        <SocialIcons />
      </div>
      <span className="header__pipe">|</span>
      {/* <DropDownB */}

      {/* Login */}
      {props.loggedIn ? (
        <Profile user={props.user} />
      ) : (
        <Link to="/login" className="header__login">
          <span className="login__text">Login</span>
        </Link>
      )}
    </header>
  );
}

export default Header;
