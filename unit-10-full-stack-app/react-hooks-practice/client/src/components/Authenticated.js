import React, { useContext } from "react";
import Context from "../Context";

// first create the context

export default () => {
  // access the context object in the context file
  let context = useContext(Context.Context);
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
