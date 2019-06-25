import React from "react";

const CoordinatorHeader = () => {
  return (
    <div className="coordinator-header-container">
      <div className="logo-container">
        <div className="logo-image" href="" />
        <h2 className="logo-text">BCF</h2>
      </div>
      <a href="">Add Story</a>
      <a href="">Log Out</a>
      <div className="coordinator-welcome-container">
        <p>Welcome, Coordinator</p>
        <div className="coordinator-profile-image" />
      </div>
    </div>
  );
};

export default CoordinatorHeader;
