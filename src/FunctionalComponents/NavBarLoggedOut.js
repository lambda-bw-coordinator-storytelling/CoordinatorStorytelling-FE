import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBarLoggedOut extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo-image" href="" />
          <h2 className="logo-text">BCF</h2>
        </div>
        <NavLink to="/">Stories</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }
}

export default NavBarLoggedOut;
