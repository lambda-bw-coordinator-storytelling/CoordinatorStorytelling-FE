import React, { Component } from "react";

import RecentStories from "../FunctionalComponents/RecentStories";
import TodaysStories from "../FunctionalComponents/TodaysStories";
import StoriesList from "../FunctionalComponents/StoriesList";
import CountryDropdown from "../FunctionalComponents/CountryDropdown";

class MainStories extends Component {
  state = {
    countryFilter: "all"
  };

  setFilter = e => {
    this.setState({
      countryFilter: e.target.value
    });
  };

  render() {
    return (
      <div className="main-stories-page-container">
        <div className="title-container">
          <div className="title-logo" />
          <h2>The Bountiful Children's Foundation</h2>
        </div>
        <RecentStories />
        <TodaysStories />
        <a href="">Add a Story</a>
        <div className="country-filter-container">
          <form>
            <select required id="country" name="country" value="" onChange="">
              <option value="all">Select Country</option>
              <CountryDropdown />
            </select>
          </form>
        </div>
        <StoriesList filterBy={this.state.countryFilter} />
        {/* pass country as filterBy */}
      </div>
    );
  }
}

export default MainStories;
