import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/NavBars.scss";

class NavBarLoggedOut extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="navbar-container">
        <div id="top" />
        <div className="logo-container">
          <NavLink to="/">
            <img src="https://i.ibb.co/6Dcfjv4/header-globe.png" alt="globe" />
          </NavLink>
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

export default NavBarLoggedOut;
