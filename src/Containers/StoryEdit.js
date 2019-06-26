import React, { Component } from "react";
import axios from "axios";
import CountryDropdown from "../Helpers/CountryDropdown";

class StoryEdit extends Component {
  state = {
    activeStory: {
      date: "",
      title: "",
      country: "",
      description: "",
      content: ""
    }
  };

  handleChanges = e => {
    this.setState({
      activeStory: {
        ...this.setState.activeStory,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.activeStory);
  };

  handleEdit = e => {
    e.preventDefault();
    const editedStory = {
      date: this.state.activeStory.date,
      title: this.state.activeStory.title,
      country: this.state.activeStory.country,
      description: this.state.activeStory.description,
      content: this.state.activeStory.content
    };
    console.log(editedStory);

    // this.props.editStory(
    //   this.state.editStory.then(() => {
    //     this.props.history.push("/protected");
    //   })
    // );
  };

  render() {
    console.log(this.state);
    return (
      <div className="edit-story-page-container">
        <h2>Edit Story</h2>

        <form onSubmit={this.handleEdit}>
          <label htmlFor="date">Today's date</label>
          <input
            id="date"
            type="date"
            name="date"
            value={this.state.activeStory.date}
            onChange={this.handleChanges}
          />

          <label htmlFor="title">Title of Story</label>
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.activeStory.title}
            onChange={this.handleChanges}
          />

          <label htmlFor="country">Country Origin of Story</label>
          <select
            required
            id="country"
            name="country"
            value={this.state.activeStory.country}
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
            value={this.state.activeStory.description}
            onChange={this.handleChanges}
          />

          <label htmlFor="content">Add Story Content</label>
          <input
            id="content"
            type="content"
            name="content"
            value={this.state.activeStory.content}
            onChange={this.handleChanges}
          />

          <button>Submit Story</button>
        </form>
      </div>
    );
  }
}

export default StoryEdit;
