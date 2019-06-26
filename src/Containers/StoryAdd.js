import React, { Component } from "react";

import NavBar from "../FunctionalComponents/NavBar";
import Footer from "../FunctionalComponents/Footer";
import CountryDropdown from "../Helpers/CountryDropdown";

class StoryAdd extends Component {
  state = {
    newStory: {
      date: "",
      title: "",
      country: "",
      description: "",
      content: ""
    }
  };

  handleChanges = e => {
    this.setState({
      newStory: {
        ...this.setState.newStory,
        [e.target.name]: e.target.value
      }
    });
  };

  handleAdd = e => {
    e.preventDefault();
    const newStory = {
      date: this.state.newStory.date,
      title: this.state.newStory.title,
      country: this.state.newStory.country,
      description: this.state.newStory.description,
      content: this.state.newStory.content
    };
    console.log(newStory);

    // this.props.addStory(
    //   this.state.newStory.then(() => {
    //     this.props.history.push("/protected");
    //   })
    // );
  };

  render() {
    return (
      <div className="add-story-page-container">
        <NavBar />
        <h2>Add Story</h2>

        <form onSubmit={this.handleAdd}>
          <label htmlFor="date">Today's date</label>
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

          <button>Submit Story</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default StoryAdd;
