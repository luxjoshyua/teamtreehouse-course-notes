import React from "react";

// extract the context property from props
export default ({ context }) => {
  // store authenticatedUser data
  const authUser = context.authenticatedUser;

  return (
    <div className="bounds">
      <div className="grid-100">
        <h1>{authUser.name} is authenticated!</h1>
        <p>Your username is {authUser.username}.</p>
      </div>
    </div>
  );
};
