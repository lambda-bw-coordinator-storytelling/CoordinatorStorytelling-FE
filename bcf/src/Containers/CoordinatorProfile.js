import React, { Component } from "react";

import CoordinatorHeader from "../FunctionalComponents/CoordinatorHeader";
import Footer from "../FunctionalComponents/Footer";
import CountryDropdown from "../FunctionalComponents/CountryDropdown";

class CoordinatorProfile extends Component {
  state = {
    user: {
      firstname: "",
      lastname: "",
      email: "",
      title: "",
      country: ""
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
      firstname: this.state.user.firstname,
      lastname: this.state.user.lastname,
      email: this.state.user.email,
      title: this.state.user.title,
      country: this.state.user.country
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
      <div className="coordinator-profile-page-container">
        <CoordinatorHeader />
        <h2>Your Profile</h2>

        <form onSubmit={this.handleUpdate}>
          <h2>Create an Account</h2>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            value={this.state.user.firstname}
            onChange={this.handleChanges}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            value={this.state.user.lastname}
            onChange={this.handleChanges}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChanges}
          />
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.user.title}
            onChange={this.handleChanges}
          />
          <label htmlFor="country">Country</label>
          <select
            required
            id="country"
            name="country"
            value={this.state.user.country}
            onChange={this.handleChanges}
          >
            <option value="">Country</option>
            <CountryDropdown />
          </select>
          <button>Save</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default CoordinatorProfile;
