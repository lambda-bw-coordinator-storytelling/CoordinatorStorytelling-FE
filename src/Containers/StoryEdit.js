import React, { Component } from "react";

import NavBar from "../FunctionalComponents/NavBar";
import Footer from "../FunctionalComponents/Footer";
import CountryDropdown from "../Helpers/CountryDropdown";

class StoryEdit extends Component {
  state = {
    activeStory: {
      date: "06/15/19",
      title: "Magna minim incididunt nisi laborum do voluptate.",
      country: "Bolivia",
      description:
        "Elit deserunt nulla est consectetur mollit aliquip non nostrud qui velit aute. Sunt reprehenderit adipisicing labore elit irure non deserunt excepteur aute deserunt excepteur.",
      content:
        "Eiusmod irure nulla exercitation consectetur laboris proident commodo incididunt incididunt tempor quis cillum anim. Est eu anim non pariatur ut ut in pariatur id dolor nostrud. Irure proident dolor consectetur fugiat ut eu laboris ut consequat. Sit excepteur incididunt est amet fugiat. Excepteur est in eu elit magna ullamco do esse. Adipisicing consectetur incididunt consectetur labore sunt enim enim eiusmod exercitation."
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
        <NavBar />
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
        <Footer />
      </div>
    );
  }
}

export default StoryEdit;
