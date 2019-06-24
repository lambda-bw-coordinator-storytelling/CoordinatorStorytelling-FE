import React, { Component } from "react";

import LoginHeader from "./LoginHeader";

class CoordinatorSignup extends Component {
  state = {
    credentials: {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    console.log(e.target.value);
    this.setState({
      credentials: {
        ...this.state.credientials,
        [e.target.name]: e.target.value
      }
    });
  };

  signUp = e => {
    e.preventDefault();
    console.log("In create account function.");

    // this.props.signUp(
    //   this.state.credentials.then(() => {
    //     this.props.history.push("/protected");
    //   })
    // );
  };

  render() {
    return (
      <>
        <LoginHeader />
        <div className="coordinator-signup-page">
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
            <p>Username</p>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChanges}
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChanges}
            />
            <button>Sign In</button>
          </form>
        </div>
      </>
    );
  }
}

export default CoordinatorSignup;
