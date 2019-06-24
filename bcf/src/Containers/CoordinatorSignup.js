import React, { Component } from "react";

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
        <div className="coordinator-signup-page">
          <form onSubmit={this.signUp}>
            <h2>Create an Account</h2>
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              name="firstName"
              value={this.state.credentials.firstName}
              onChange={this.handleChanges}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              name="lastName"
              value={this.state.credentials.lastName}
              onChange={this.handleChanges}
            />
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.credentials.username}
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
      </>
    );
  }
}

export default CoordinatorSignup;
