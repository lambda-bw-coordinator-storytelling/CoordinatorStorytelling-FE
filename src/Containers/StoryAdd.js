import React, { Component } from "react";
import axios from "axios";

import CountryDropdown from "../Helpers/CountryDropdown";

class StoryAdd extends Component {
  state = {
    newStory: {
      date: "",
      title: "",
      country: "",
      description: "",
      content: "",
      url: ""
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

      .then(this.props.history.push("/user"))

      .catch(function(res) {
        console.log("There was an error: ", res.data);
      });
  };

  render() {
    return (
      <div className="add-story-page-container">
        <h2>Add Story</h2>

        <form onSubmit={this.handleAdd}>
          <></>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            value={this.state.newStory.date}
            onChange={this.handleChanges}
          />

          <label htmlFor="title">Title of Story</label>
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.newStory.title}
            onChange={this.handleChanges}
          />

          <label htmlFor="country">Country of Story</label>
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

          <label htmlFor="content">Story Content</label>
          <input
            id="content"
            type="content"
            name="content"
            value={this.state.newStory.content}
            onChange={this.handleChanges}
          />

          <label htmlFor="url">Image URL</label>
          <input
            id="url"
            type="text"
            name="url"
            value={this.state.newStory.url}
            onChange={this.handleChanges}
          />

          <button>Submit Story</button>
        </form>
      </div>
    );
  }
}

export default StoryAdd;
