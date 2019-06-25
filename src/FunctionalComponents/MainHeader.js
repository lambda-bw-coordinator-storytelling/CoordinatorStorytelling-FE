// This header for display when a user is NOT logged in.

import React from "react";

const MainHeader = () => {
  return (
    <div className="coordinator-header-container">
      <div className="logo-container">
        <div className="logo-image" href="" />
        <h2 className="logo-text">BCF</h2>
      </div>
      <a href="/login">Coordinator Login</a>
      <a href="/signup">Coordinator Sign Up</a>
    </div>
  );
};

export default MainHeader;
