import React from "react";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile">
      <div className="dropdown">
        <button className="dropbtn">
          <div className="header__profile">
            <i className="fa-solid fa-user"></i>
            <span className="header__user">{props.user}</span>
          </div>
          <i className="fa fa-caret-down caret"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
