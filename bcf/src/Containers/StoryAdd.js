import React, { Component } from "react";

class StoryAdd extends Component {
  state = {
    user: {
      date: "",
      title: "",
      country: "",
      description: "",
      content: ""
    }
  };

  handleChanges = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
    // console.log(this.state.user);
  };

  handleUpdate = e => {
    e.preventDefault();
    const updatedProfile = {
      date: this.state.user.date,
      title: this.state.user.title,
      country: this.state.user.country,
      description: this.state.user.description,
      content: this.state.user.content
    };
    console.log(updatedProfile);

    // this.props.update(
    //   this.state.user.then(() => {
    //     this.props.history.push("/protected");
    //   })
    // );
  };

  render() {
    return (
      <div className="add-story-page-container">
        <h2>Add Story</h2>

        <form onSubmit={this.handleUpdate}>
          <label htmlFor="date">Today's date</label>
          <input
            id="date"
            type="date"
            name="date"
            value={this.state.user.date}
            onChange={this.handleChanges}
          />

          <label htmlFor="title">Title of Story</label>
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.user.title}
            onChange={this.handleChanges}
          />

          <label htmlFor="country">Country Origin of Story</label>
          <select
            required
            id="country"
            name="country"
            value={this.state.user.country}
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
            value={this.state.user.description}
            onChange={this.handleChanges}
          />

          <label htmlFor="content">Add Story Content</label>
          <input
            id="content"
            type="content"
            name="content"
            value={this.state.user.content}
            onChange={this.handleChanges}
          />

          <button>Submit Story</button>
        </form>
      </div>
    );
  }
}

export default StoryAdd;
