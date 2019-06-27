import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "../styles/NavBars.scss";

class NavBarLoggedIn extends Component {
  logout() {
    localStorage.setItem("token", "");
  }

  render() {
    console.log(this.state);
    return (
      <div className="navbar-container">
        <div id="top" />

        <div className="logo-container">
          <img src="https://i.ibb.co/6Dcfjv4/header-globe.png" alt="globe" />

          <h2 className="logo-text">BCF</h2>
        </div>
        <div className="header-links">
          <NavLink to="/">All Stories</NavLink>
          <div>Welcome!</div>
          <button onClick={this.logout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default NavBarLoggedIn;
