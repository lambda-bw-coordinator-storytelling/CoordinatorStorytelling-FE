import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "../styles/navbar.scss";

class GeneralNav extends Component {
  logout = e => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

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
            <h2 className="logo-text">The Bountiful Children's Foundation</h2>
          </div>
          <div className="header-links">
            <NavLink to="/">All Stories</NavLink>
            <NavLink to="/user">Dashboard</NavLink>
            <div className="logout-caller" onClick={e => this.logout(e)}>
              Log Out
            </div>
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

            <h2 className="logo-text">The Boutiful Children's Foundation</h2>
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
