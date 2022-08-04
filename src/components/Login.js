import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { loginService } from "../services/login-services";
import "./Login.css";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [emptyUsername, setEmptyUsername] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const successCallback = (data) => {
    console.log("data->", data);
    setAuthenticated(true);
    const loginData = {
      loginStatus: true,
      user: data.username,
    };
    props.onLogin(loginData);
  };

  const errCallBack = () => {
    setAuthenticated(false);
    setErrorLogin(true);
  };

  const userNameChangeHandler = (event) => {
    setEmptyUsername(false);
    setErrorLogin(false);
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setErrorLogin(false);
    setEmptyPassword(false);
    setPassword(event.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (userName === "") {
      setEmptyUsername(true);
    }
    if (password === "") {
      setEmptyPassword(true);
    }
    if (userName === "" || password === "") {
      console.log("Password or username is empty");
      return;
    }
    const formData = {
      user: userName,
      password: password,
    };
    loginService(formData, successCallback, errCallBack);
  };
  return (
    <div className="login">
      <div className="login__contents">
        <div className="login__logocontents">
          <img
            className="login__logo"
            src="http://schoolerpindia.com/images/logo.png"
            alt="School Logo"
          ></img>
        </div>
        {isAuthenticated && (
          <Navigate to="/dashboard" replace={true} state={true} />
        )}

        <form onSubmit={loginHandler}>
          <div className="login__form">
            <span className="submit__errors">
              {errorLogin && <span>Incorrect username or password</span>}
            </span>
            <div className="login__label">
              <label>Username</label>
              <input value={userName} onChange={userNameChangeHandler} />
            </div>
            <span className="login__errors">
              {emptyUsername && <span>Username cannot be empty</span>}
            </span>
            <div className="login__label">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={passwordChangeHandler}
                className="login__password"
              />
            </div>
            <span className="login__errors">
              {emptyPassword && <span>Password cannot be empty</span>}
            </span>
            <div className="login__buttons">
              <Link to="/">
                <button className="login__button" type="button">
                  Cancel
                </button>
              </Link>
              <button className="login__button submit" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
