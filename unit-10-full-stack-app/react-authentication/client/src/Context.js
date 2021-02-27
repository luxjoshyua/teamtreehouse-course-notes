import React, { Component } from "react";
import Cookies from "js-cookie";
import Data from "./Data";

const Context = React.createContext();

export class Provider extends Component {
  // initialise state
  state = {
    authenticatedUser: null,
  };

  constructor() {
    super();
    this.data = new Data();
  }

  render() {
    // use destructuring assignment to extract authenticatedUser from this.state
    const { authenticatedUser } = this.state;

    // value object that provides the utility methods of the class Data
    const value = {
      // pass state to <Context.Provider> by adding authenticatedUser variable to the value object
      authenticatedUser,
      data: this.data,
      actions: {
        // reference to the signIn function
        signIn: this.signIn,
        // reference to the signOut function
        signOut: this.signOut,
      },
    };
    return (
      // value={value} represents an object containing the context to be shared throughout the component tree
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }

  signIn = async (username, password) => {
    const user = await this.data.getUser(username, password);
    // check if there is a user object
    if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user,
        };
      });
    }
    return user;
  };

  // Function to sign out a user
  signOut = () => {
    // update the authenticatedUser state to null on signOut
    this.setState({ authenticatedUser: null });
  };
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
}
