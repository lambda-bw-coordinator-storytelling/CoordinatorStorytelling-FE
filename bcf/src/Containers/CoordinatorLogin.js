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

    var axios = require("axios");

    axios
      .request({
        url: "/oauth/token",
        method: "post",
        baseURL: "http://coordinator-storytelling.herokuapp.com/",
        auth: {
          username: "admin",
          password: "password"
        },
        data: {
          grant_type: "client_credentials",
          scope: "public"
        }
      })
      .then(function(res) {
        console.log(res);
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
