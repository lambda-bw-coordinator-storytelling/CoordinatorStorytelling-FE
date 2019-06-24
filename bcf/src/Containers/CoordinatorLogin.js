import React, { Component } from "react";

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
  };

  render() {
    return (
      <>
        <div className="coordinator-login-page-container">
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
