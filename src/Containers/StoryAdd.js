import React, { Component } from "react";
import axios from "axios";

import NavBar from "../FunctionalComponents/NavBar";
import Footer from "../FunctionalComponents/Footer";
import CountryDropdown from "../Helpers/CountryDropdown";

class StoryAdd extends Component {
  state = {
    newStory: {
      title: "",
      country: "",
      description: "",
      content: "",
      date: ""
    }
  };

  handleChanges = e => {
    this.setState({
      newStory: {
        ...this.state.newStory,
        [e.target.name]: e.target.value
      }
    });
  };

  handleAdd = e => {
    e.preventDefault();
    const newStory = {
      title: this.state.newStory.title,
      country: this.state.newStory.country,
      description: this.state.newStory.description,
      content: this.state.newStory.content,
      date: this.state.newStory.date
    };
    console.log(newStory);

    axios
      .post(
        "http://coordinator-storytelling.herokuapp.com/stories/story",
        newStory,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      )

      .then(res => {
        console.log(res);
        console.log("Story added: ", res.data);
      })

      .catch(function(res) {
        console.log("There was an error: ", res.data);
      });
  };

  render() {
    return (
      <div className="add-story-page-container">
        <NavBar />
        <h2>Add Story</h2>

        <form onSubmit={this.handleAdd}>
          <label htmlFor="title">Title of Story</label>
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.newStory.title}
            onChange={this.handleChanges}
          />

          <label htmlFor="country">Country Origin of Story</label>
          <select
            required
            id="country"
            name="country"
            value={this.state.newStory.country}
            onChange={this.handleChanges}
          >
            <option value="">Select Country</option>
            <CountryDropdown />
          </select>

          <label htmlFor="description">Story Description</label>
          <input
            id="description"
            type="description"
            name="description"
            value={this.state.newStory.description}
            onChange={this.handleChanges}
          />

          <label htmlFor="content">Add Story Content</label>
          <input
            id="content"
            type="content"
            name="content"
            value={this.state.newStory.content}
            onChange={this.handleChanges}
          />

          <label htmlFor="date">Today's date</label>
          <input
            id="date"
            type="date"
            name="date"
            value={this.state.newStory.date}
            onChange={this.handleChanges}
          />

          <button>Submit Story</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default StoryAdd;
