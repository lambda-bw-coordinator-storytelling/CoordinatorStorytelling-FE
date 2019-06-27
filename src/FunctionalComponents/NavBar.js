import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo-image" href="" />
          <h2 className="logo-text">BCF</h2>
        </div>
        <NavLink to="/">Stories</NavLink>
        <NavLink to="/login">Coordinator Login</NavLink>
        <NavLink to="/signup">Coordinator Sign Up</NavLink>
      </div>
    );
  }
}

export default NavBar;
