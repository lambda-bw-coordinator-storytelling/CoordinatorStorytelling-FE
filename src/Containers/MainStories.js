import React, { Component } from "react";
import axios from "axios";
import "../styles/storiesList.scss";

import CountryDropdown from "../Helpers/CountryDropdown";
import StoriesList from "../FunctionalComponents/StoriesList";

class MainStories extends Component {
  state = {
    countryFilter: "all",
    stories: []
  };

  setFilter = e => {
    const newCountry = e.target.value;
    this.setState({
      countryFilter: newCountry
    });
  };

  componentDidMount() {
    axios
      .get("http://coordinator-storytelling.herokuapp.com/stories/all")

      .then(res => {
        console.log(res);
        this.setState(() => ({ stories: res.data }));
      })

      .catch(function() {
        console.log("There was an error: ");
      });
  }

  render() {
    return (
      <div className="main-stories-page-container">
        {/*<div className="title-container">
          <div className="title-logo" />
          <img src="https://i.ibb.co/6Dcfjv4/header-globe.png" alt="globe" />
          <h2>
            The Bountiful
            <br /> Children's Foundation
          </h2>
    </div>*/}

        <div className="country-filter-container">
          <form onChange={this.setFilter}>
            <select required id="country" name="country">
              <option>Filter by Country</option>
              <option value="all">All</option>
              <CountryDropdown />
            </select>
          </form>
        </div>

        <StoriesList
          country={this.state.countryFilter}
          stories={this.state.stories}
        />
      </div>
    );
  }
}

export default MainStories;
