import React, { Component } from "react";
import axios from "axios";

import GeneralNav from "../FunctionalComponents/GeneralNav";
import "../styles/login.scss";

class CoordinatorLogin extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    loggedIn: null
  };

  checkAuth() {
    localStorage.getItem("token") != null
      ? this.setState({
          logedIn: true
        })
      : this.setState({
          logedIn: false
        });
  }

  handleChanges = e => {
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
          Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })

      .then(function(res) {
        // console.log(res.data.access_token);
        localStorage.setItem("token", res.data.access_token);
      })
      .then(() => {
        this.props.history.push("/user");
        this.props.getMyStories();
      })

      .catch(function(err) {
        console.log("There was an error: ", err.message);
      });
  };

  render() {
    return (
      <>
        <GeneralNav />
        <div className="coordinator-login-page-container">
          <div className="form-container">
            <form className="styled-form" onSubmit={this.handleLogin}>
              <h2>Welcome Back</h2>
              <label htmlFor="username">Email</label>
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

              <button>Sign In</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CoordinatorLogin;
