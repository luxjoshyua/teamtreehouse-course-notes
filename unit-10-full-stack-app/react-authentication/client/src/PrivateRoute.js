import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Consumer } from "./Context";

// destructures and renames the component prop + collects any props passed to it in a ...rest variable
export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      {(context) => (
        <Route
          {...rest}
          render={(props) =>
            // check whether authenticatedUser in state
            context.authenticatedUser ? (
              <Component {...props} />
            ) : (
              <Redirect to="/signin" />
            )
          }
        />
      )}
    </Consumer>
  );
};
