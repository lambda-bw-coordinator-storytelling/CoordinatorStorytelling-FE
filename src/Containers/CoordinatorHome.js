import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import StoriesList from "../FunctionalComponents/StoriesList";

class CoordinatorHome extends Component {
  state = {
    stories: []
  };

  componentDidMount() {
    setTimeout(() => {
      axios
        .get("http://coordinator-storytelling.herokuapp.com/stories/mine", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })

        .then(res => {
          console.log(res);

          this.setState(() => ({ stories: res.data }));
        })

        .catch(function() {
          console.log("There was an error: ");
        });
    }, 1000);
  }

  render() {
    return (
      <div className="coordinator-home-page-container">
        <div className="title-container">
          <div className="title-logo" />
          <h2>The Bountiful Children's Foundation</h2>
        </div>
        <Link to="user/addstory">Add a Story</Link>

        <StoriesList country="all" stories={this.state.stories} />
      </div>
    );
  }
}

export default CoordinatorHome;
