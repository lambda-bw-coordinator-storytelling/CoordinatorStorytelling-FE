import React, { Component } from "react";

import RecentStories from "../FunctionalComponents/RecentStories";
import TodaysStories from "../FunctionalComponents/TodaysStories";
import SavedStories from "../FunctionalComponents/SavedStories";

class CoordinatorHome extends Component {
  render() {
    return (
      <div className="coordinator-home-page-container">
        <div className="title-container">
          <div className="title-logo" />
          <h2>The Bountiful Children's Foundation</h2>
        </div>
        <RecentStories />
        <TodaysStories />
        <a href="">AddStory</a>
        <SavedStories />
      </div>
    );
  }
}

export default CoordinatorHome;
