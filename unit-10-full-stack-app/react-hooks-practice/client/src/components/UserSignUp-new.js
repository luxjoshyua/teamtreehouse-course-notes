import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "./Form";
import Context from "../Context";

// useState, useContext, useHistory are the hooks to use

export default function UserSignUp() {
  // access the context object in the context file
  const context = useContext(Context.Context);
  // initialise history
  // history is mutable (can be changed) and has a range of properties and methods (see documentation)
  let history = useHistory();

  // set default name and setName value to empty string
  const [name, setName] = useState("");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [errors, setErrors] = useState([]);

  // define each method before calling in the function
  const change = (event) => {
    const value = event.target.value;

    switch (event.target.name) {
      case "name":
        setName(value);
        break;
      case "username":
        setUser(value);
        break;
      case "password":
        setPass(value);
        break;
      default:
        return;
    }
    // this switch statement works the same as the below if/else
    // if (event.target.name === "name") {
    //   setName(value);
    // } else if (event.target.name === "userName") {
    //   setUser(value);
    // } else if (event.target.name === "name") {
    //   setPass(value);
    // } else {
    //   return;
    // }
  };

  const submit = () => {
    // Create user
    const user = {
      name,
      username,
      password,
    };

    context.data
      .createUser(user)
      .then((errors) => {
        if (errors.length) {
          setErrors(errors);
        } else {
          context.actions.signIn(username, password).then(() => {
            history.push("/authenticated");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        history.push("/error");
      });
  };

  const cancel = () => {
    history.push("/");
  };

  return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign Up</h1>
        <Form
          cancel={cancel}
          errors={errors}
          submit={submit}
          submitButtonText="Sign Up"
          elements={() => (
            <React.Fragment>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={change}
                placeholder="Name"
              />
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={change}
                placeholder="User Name"
                autoComplete="username"
              />
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={change}
                placeholder="Password"
                autoComplete="current-password"
              />
            </React.Fragment>
          )}
        />
        <p>
          Already have a user account? <Link to="/signin">Click here</Link> to
          sign in!
        </p>
      </div>
    </div>
  );
}
