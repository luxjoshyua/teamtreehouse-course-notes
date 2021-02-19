import React, { useState } from "react";

// first create the context
export const UserContext = React.createContext();

console.log("What is it?", UserContext);

// what is in UserContext?

/**
 * Use useContext hook to access authenticated users
 */

export const Provider = () => {
  const authUser = useState([]);

  return (
    // I think authUser should be the value here
    <UserContext.Provider value={authUser}></UserContext.Provider>
  );
};
