// This header for display when a user is NOT logged in.

import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="coordinator-header-container">
      <div className="logo-container">
        <div className="logo-image" href="" />
        <h2 className="logo-text">BCF</h2>
      </div>
      <NavLink to="/">Stories</NavLink>
      <NavLink to="/login">Coordinator Login</NavLink>
      <NavLink to="/signup">Coordinator Sign Up</NavLink>
    </div>
  );
};

export default MainHeader;
