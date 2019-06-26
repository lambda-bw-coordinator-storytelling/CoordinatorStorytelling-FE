import React, { Component } from "react";

import NavBar from "../FunctionalComponents/NavBar";
import Footer from "../FunctionalComponents/Footer";
import RecentStories from "../FunctionalComponents/RecentStories";
import TodaysStories from "../FunctionalComponents/TodaysStories";
import StoriesList from "../FunctionalComponents/StoriesList";

class CoordinatorHome extends Component {
  render() {
    return (
      <div className="coordinator-home-page-container">
        <NavBar />
        <div className="title-container">
          <div className="title-logo" />
          <h2>The Bountiful Children's Foundation</h2>
        </div>
        <RecentStories />
        <TodaysStories />
        <a href="">Add a Story</a>
        <StoriesList filterBy="" /> {/* Pass coordinator id as filterBy */}
        <Footer />
      </div>
    );
  }
}

export default CoordinatorHome;
