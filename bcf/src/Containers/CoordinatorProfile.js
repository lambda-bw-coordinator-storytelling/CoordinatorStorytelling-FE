import React, { Component } from "react";

class CoordinatorProfile extends Component {
  render() {
    return (
      <div className="coordinator-profile-page-container">
        <h2>Your Profile</h2>
        <div className="upload-profile-pic">Upload profile picture</div>

        <form onSubmit={this.signUp}>
          <h2>Create an Account</h2>
          <p>First Name</p>
          <input
            type="text"
            name="firstName"
            value={this.state.credentials.firstName}
            onChange={this.handleChanges}
          />
          <p>Last Name</p>
          <input
            type="text"
            name="lastName"
            value={this.state.credentials.lastName}
            onChange={this.handleChanges}
          />
          <p>Email</p>
          <input
            type="email"
            name="username"
            value={this.state.credentials.email}
            onChange={this.handleChanges}
          />
          <p>Title</p>
          <input
            type="text"
            name="title"
            value={this.state.credentials.title}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="title"
            value={this.state.credentials.title}
            onChange={this.handleChanges}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default CoordinatorProfile;
