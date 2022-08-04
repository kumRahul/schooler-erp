import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import SchoolErp from "./components/SchoolErp";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const loginHandler = (data) => {
    setIsLoggedIn(data.loginStatus);
    setUser(data.user);
  };

  return (
    <Router>
      <div className="App">
        <Header loggedIn={isLoggedIn} user={user} />
        {/* <Banner /> */}
        <Routes>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/schoolerp" element={<SchoolErp />}>
            School ERP
          </Route>
          {/* <Route exact path="/overview">
            Overview
          </Route>
          <Route exact path="/purpose">
            purpose
          </Route>
          <Route exact path="/features">
            Features
          </Route>
          <Route exact path="/modules">
            modules
          </Route>
          <Route exact path="/benefits">
            benefits Us
          </Route>
          <Route exact path="/contactus">
            contactus Us
          </Route> */}
          <Route path="/login" element={<Login onLogin={loginHandler} />}>
            Login Screen
          </Route>
          <Route eaxct path="/dashboard" element={<Dashboard />}>
            Dashboard
          </Route>
          <Route exact path="/" element={<Home />}>
            Home
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
