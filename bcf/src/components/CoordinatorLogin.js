import React, { Component } from "react";

import LoginHeader from "./LoginHeader";

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
        ...this.state.credientials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log("In login function.");

    // this.props.login(
    //   this.state.credentials.then(() => {
    //     this.props.history.push("/protected");
    //   })
    // );
  };

  render() {
    return (
      <>
        <LoginHeader />
        <div>
          <form onSubmit={this.login}>
            <h2>Welcome Back</h2>
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
