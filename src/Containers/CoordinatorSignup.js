import React, { Component } from "react";
import axios from "axios";

import LoginHeader from "../FunctionalComponents/LoginHeader";

class CoordinatorSignup extends Component {
  state = {
    user: {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    }
  };

  handleChanges = e => {
    console.log(e.target.value);
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

    // this.props.signUp(
    //   this.state.user.then(() => {
    //     this.props.history.push("/protected");
    //   })
    // );

    const testUser = {
      username: "Harry",
      password: "password",
      firstname: "Harry",
      lastname: "Doe",
      country: "USA",
      email: "john@doe.com",
      title: "owner"
    };

    axios
      .post(
        "http://coordinator-storytelling.herokuapp.com/createnewuser",
        testUser
      )
      .then(results => {
        console.log("Success!");
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  };

  render() {
    return (
      <>
        <div className="coordinator-signup-page-container">
          <LoginHeader />
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
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
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
