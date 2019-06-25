import React, { Component } from "react";

import MainHeader from "../FunctionalComponents/MainHeader";
import Footer from "../FunctionalComponents/Footer";

import RecentStories from "../FunctionalComponents/RecentStories";
import TodaysStories from "../FunctionalComponents/TodaysStories";
import CountryDropdown from "../FunctionalComponents/CountryDropdown";
import StoriesList from "../FunctionalComponents/StoriesList";

class MainStories extends Component {
  state = {
    countryFilter: "all"
  };

  setFilter = e => {
    const newCountry = e.target.value;
    this.setState({
      countryFilter: newCountry
    });
  };

  render() {
    return (
      <div className="main-stories-page-container">
        <MainHeader />
        <div className="title-container">
          <div className="title-logo" />
          <h2>The Bountiful Children's Foundation</h2>
        </div>

        <RecentStories />
        <TodaysStories />
        <div className="country-filter-container">
          <form onChange={this.setFilter}>
            <select required id="country" name="country">
              <option>Select Country</option>
              <CountryDropdown />
            </select>
          </form>
        </div>
        <h2>Explore Stories</h2>
        <StoriesList filterBy={this.state.countryFilter} />
        {/* pass country as filterBy */}
        <Footer />
      </div>
    );
  }
}

export default MainStories;
