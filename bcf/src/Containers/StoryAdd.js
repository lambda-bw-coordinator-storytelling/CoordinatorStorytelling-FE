import React, { Component } from "react";

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
        ...this.state.newStory,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.newStory);
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
    console.log(this.state);
    return (
      <div className="add-story-page-container">
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
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Ghana">Ghana</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Haiti">Haiti</option>
            <option value="Honduras">Honduras</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Zimbabwe">Zimbabwe</option>
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
      </div>
    );
  }
}

export default StoryAdd;
