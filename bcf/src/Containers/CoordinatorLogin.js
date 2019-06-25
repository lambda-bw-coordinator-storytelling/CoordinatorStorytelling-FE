import React, { Component } from "react";
import axios from "axios";

import LoginHeader from "../FunctionalComponents/LoginHeader";

class CoordinatorLogin extends Component {
  state = {
    user: {
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

  handleLogin = e => {
    e.preventDefault();
    console.log("In handleLogin function.");

    // this.props.login(
    //   this.state.user.then(() => {
    //     this.props.history.push("/protected");
    //   })
    // );

    const credentials = {
      username: "admin",
      password: "password"
    };

    axios
      .post(
        "http://coordinator-storytelling.herokuapp.com/oauth/token",
        credentials
      )
      .then(results => {
        localStorage.setItem("token", results.data.payload);
        console.log(results.data.payload);
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  };

  render() {
    return (
      <>
        <div className="coordinator-login-page-container">
          <LoginHeader />
          <form onSubmit={this.handleLogin}>
            <h2>Welcome Back</h2>
            <label htmlFor="email">Username</label>
            <input
              id="email"
              type="email"
              name="email"
              value={this.state.user.email}
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
            <a className="forgotPassword" href="/">
              Forgot your password?
            </a>
            <button>Sign In</button>
          </form>
        </div>
      </>
    );
  }
}

export default CoordinatorLogin;
