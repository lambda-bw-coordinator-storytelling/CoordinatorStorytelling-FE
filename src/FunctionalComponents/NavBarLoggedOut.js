import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/NavBars.scss";

class NavBarLoggedOut extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <div
            className="logo-image"
            href="https://drive.google.com/file/d/1oRl_mebkczzAJ-J7h9hnsaFKfkKZM7ha/view"
          />
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
