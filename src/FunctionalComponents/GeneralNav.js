import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "../styles/navbars.scss";

class GeneralNav extends Component {
  setNav() {
    if (localStorage.getItem("token") != null) {
      return (
        <div className="navbar-container">
          <div id="top" />

          <div className="logo-container">
            <Link to="/">
              <img
                src="https://i.ibb.co/6Dcfjv4/header-globe.png"
                alt="globe"
              />
            </Link>
            <h2 className="logo-text">BCF</h2>
          </div>
          <div className="header-links">
            <NavLink to="/">All Stories</NavLink>
            <div className="welcome">Welcome!</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-container">
          <div id="top" />
          <div className="logo-container">
            <Link to="/">
              <img
                src="https://i.ibb.co/6Dcfjv4/header-globe.png"
                alt="globe"
              />
            </Link>

            <h2 className="logo-text">BCF</h2>
          </div>
          <div className="header-links">
            <NavLink to="/">Stories</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.setNav()}</div>;
  }
}

export default GeneralNav;
