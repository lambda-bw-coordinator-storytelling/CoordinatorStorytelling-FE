import React, { Component } from "react";
import axios from "axios";

import GeneralNav from "../FunctionalComponents/GeneralNav";
import CountryDropdown from "../Helpers/CountryDropdown";

class CoordinatorSignup extends Component {
  state = {
    user: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      title: "",
      country: ""
    }
  };

  handleChanges = e => {
    // console.log(e.target.value);
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSignup = e => {
    e.preventDefault();
    console.log("In create account function.");

    const newUser = {
      username: this.state.user.username,
      password: this.state.user.password,
      firstname: this.state.user.firstname,
      lastname: this.state.user.lastname,
      country: this.state.user.country,
      email: this.state.user.username,
      title: this.state.user.title
    };

    axios
      .post(
        "http://coordinator-storytelling.herokuapp.com/createnewuser",
        newUser
      )
      .then(res => {
        console.log("Success! ", res);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  };

  render() {
    return (
      <>
        <GeneralNav />
        <div className="coordinator-signup-page-container">
          <form onSubmit={this.handleSignup}>
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

            <label htmlFor="lastname">Company Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={this.state.user.title}
              onChange={this.handleChanges}
            />

            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={this.state.user.country}
              onChange={this.handleChanges}
            >
              <option value="">Select Country</option>
              <CountryDropdown />
            </select>

            <label htmlFor="username">Email</label>
            <input
              id="username"
              type="email"
              name="username"
              value={this.state.user.username}
              onChange={this.handleChanges}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.user.password}
              onChange={this.handleChanges}
            />
            <button>Sign Up</button>
          </form>
        </div>
      </>
    );
  }
}

export default CoordinatorSignup;
