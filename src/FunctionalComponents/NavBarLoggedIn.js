import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBarLoggedIn extends Component {
  logout() {
    localStorage.setItem("token", "");
  }

  render() {
    console.log(this.state);
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo-image" href="" />
          <h2 className="logo-text">BCF</h2>
        </div>
        <NavLink to="/">All Stories</NavLink>
        <div>Welcome!</div>
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default NavBarLoggedIn;
