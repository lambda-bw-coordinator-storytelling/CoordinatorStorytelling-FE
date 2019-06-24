import React, { Component } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
`;

const Form = styled.form`
  background: #f5f7f7;
  opacity: 0.85;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin-top: 10%;
`;

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
    this.props.login(
      this.state.credentials.then(() => {
        this.props.history.push("/protected");
      })
    );
  };

  render() {
    return (
      <div className="coordinator-login-page">
        <FormContainer>
          <Form>
            <h2>Welcome Back</h2>
            <p>Username</p>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username || ""}
              onChange={this.handleChanges}
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password || ""}
              onChange={this.handleChanges}
            />
            <a className="forgotPassword" href="/">
              Forgot your password?
            </a>
            <Button>Sign In</Button>
          </Form>
        </FormContainer>
      </div>
    );
  }
}

export default CoordinatorLogin;
