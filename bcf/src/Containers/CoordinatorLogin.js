import React, { Component } from "react";
import axios from "axios";

import LoginHeader from "../FunctionalComponents/LoginHeader";

class CoordinatorLogin extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    console.log(e.target.value);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();

    const credentials = {
      username: this.state.credentials.username,
      password: this.state.credentials.password
    };

    const body = `grant_type=password&username=${
      credentials.username
    }&password=${credentials.password}`;

    axios
      .post("http://coordinator-storytelling.herokuapp.com/oauth/token", body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${window.btoa("lambda-client:lambda-secret")}`
        }
      })
      .then(function(res) {
        console.log(res.data.access_token);
        localStorage.setItem("token", res.data.access_token);
        this.setState = {
          credentials: {
            username: "",
            password: ""
          }
        };
      })
      .catch(function(err) {
        console.log("There was an error: ", err);
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
              id="username"
              type="text"
              name="username"
              value={this.state.credentials.email}
              onChange={this.handleChanges}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.credentials.password}
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
