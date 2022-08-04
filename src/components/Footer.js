import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-bottom-area">
      <span className="text-light-gray">
        Copyright � 2021 by{" "}
        <a className="text-primary-color" target="_blank" href="#">
          {" "}
          School ERp India
        </a>{" "}
        | All rights reserved
      </span>
    </div>
  );
}

export default Footer;
