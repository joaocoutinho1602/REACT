import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doLogin = props => {
    console.log(props); // props = account{data:{...},errors{...}}
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.doSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login", this.doLogin)}
        </form>
      </div>
    );
  }
}

export default LoginForm;
