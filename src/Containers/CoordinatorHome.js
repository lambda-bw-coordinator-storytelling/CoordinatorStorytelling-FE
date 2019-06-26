import React, { Component } from "react";

import NavBar from "../FunctionalComponents/NavBar";
import Footer from "../FunctionalComponents/Footer";

import StoriesList from "../FunctionalComponents/StoriesList";
import AddStory from "../Containers/StoryAdd";

class CoordinatorHome extends Component {
  render() {
    return (
      <div className="coordinator-home-page-container">
        <NavBar />
        <div className="title-container">
          <div className="title-logo" />
          <h2>The Bountiful Children's Foundation</h2>
        </div>
        <a href="">Add a Story</a>

        {/* Pass coordinator id as filterBy */}
        <Footer />
      </div>
    );
  }
}

export default CoordinatorHome;
