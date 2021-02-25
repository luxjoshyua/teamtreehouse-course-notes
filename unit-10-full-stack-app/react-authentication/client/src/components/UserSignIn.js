import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

export default class UserSignIn extends Component {
  state = {
    username: "",
    password: "",
    errors: [],
  };

  render() {
    const { username, password, errors } = this.state;

    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={this.change}
                  placeholder="User Name"
                  autoComplete="username"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.change}
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </React.Fragment>
            )}
          />
          <p>
            Don't have a user account? <Link to="/signup">Click here</Link> to
            sign up!
          </p>
        </div>
      </div>
    );
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  submit = () => {
    const { context } = this.props;
    // unpacks the two properties from the state object (this.state) into distinct variables
    const { username, password } = this.state;
    // access the signIn function
    context.actions
      .signIn(username, password)
      // get the fulfillment value out of the returned promise as a parameter named user
      .then((user) => {
        if (user === null) {
          this.setState(() => {
            return { errors: ["Sign-in was unsuccessful"] };
          });
        } else {
          this.props.history.push("/authenticated");
          console.log(`SUCCESS! ${username} is now signed in!`);
        }
      })
      // catch signin errors
      // parameter err is the rejection reason
      .catch((err) => {
        console.log(err);
        // navigate user from /signin to /error
        this.props.history.push("/error");
      });
  };

  cancel = () => {
    this.props.history.push("/");
  };
}
