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
      content: "",
      url: ""
    }
  };

  handleChanges = e => {
    this.setState({
      activeStory: {
        ...this.state.activeStory,
        [e.target.name]: e.target.value
      }
    });
  };

  handleEdit = e => {
    e.preventDefault();
    const editedStory = {
      date: this.state.activeStory.date,
      title: this.state.activeStory.title,
      country: this.state.activeStory.country,
      description: this.state.activeStory.description,
      content: this.state.activeStory.content,
      url: this.state.activeStory.url
    };

    console.log("Edited story: ", editedStory);

    let storyid = this.props.match.params.id;
    console.log("Story ID: ", storyid);
    axios
      .put(
        `http://coordinator-storytelling.herokuapp.com/stories/story/update/${storyid}`,
        editedStory,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      )

      .then(res => {
        console.log(res);
        console.log("Story added: ", res.data);
        this.props.history.push(`/stories/${storyid}`);
      })

      .catch(function(res) {
        console.log("There was an error: ", res);
      });
  };

  componentDidMount() {
    let storyid = this.props.match.params.id;

    axios
      .get(`http://coordinator-storytelling.herokuapp.com/stories/${storyid}`)
      .then(res => {
        console.log("State before: ", this.state);
        this.setState({
          activeStory: res.data
        });
        console.log("State after: ", this.state);
      })

      .then()
      .catch(function() {
        console.log("There was an error: ");
      });
  }

  render() {
    return (
      <div className="edit-story-page-container">
        <h2>Edit Story</h2>

        <form onSubmit={this.handleEdit}>
          <></>
          <label htmlFor="date">Date</label>
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

          <label htmlFor="country">Country</label>
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

          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="description"
            name="description"
            value={this.state.activeStory.description}
            onChange={this.handleChanges}
          />

          <label htmlFor="content">Content</label>
          <input
            id="content"
            type="content"
            name="content"
            value={this.state.activeStory.content}
            onChange={this.handleChanges}
          />

          <label htmlFor="url">Image URL</label>
          <input
            id="url"
            type="text"
            name="url"
            value={this.state.activeStory.url}
            onChange={this.handleChanges}
          />

          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default StoryEdit;
