"use strict";

const auth = require("basic-auth");
const bcrypt = require("bcrypt");
const { User } = require("../models");

/**
 * Middleware to authenticate the request using Basic Authentication.
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {Function} next - The function to call to pass execution to the next middleware.
 */
exports.authenticateUser = async (req, res, next) => {
  // store the message to display
  let message;

  // parse the user's credentials from the Authorisation header
  const credentials = auth(req);

  /* If the user's credentials are available....
        Attempt to retrieve the user from the data store
        by their username (i.e. the user's 'key'
        from the Authorisation header).
  */

  //  Check they are available
  if (credentials) {
    const user = await User.findOne({ where: { username: credentials.name } });

    /* If a user was successfully retrieved from the data store...
        Use the bcrypt npm package to compare the user's password
        (from the Authorisation header) to the user's password
        that was retrieved from the data store.
    */
    if (user) {
      /* If the passwords match...
        Store the retrieved user object on the request object
        so any middleware functions that follow this middleware function
        will have access to the user's information
      */
      // use compareSync to compare the user's password (from the Authorisation header)
      // to the encrypted password retrieved from the database
      const authenticated = bcrypt.compareSync(
        credentials.pass,
        user.confirmedPassword
      );

      // check if the passwords match
      if (authenticated) {
        console.log(`Authentication successful for username: ${user.username}`);

        // Add the user account (retrieved from the database) to the Request object
        // Call next() to continue with processing the request
        req.currentUser = user;
      } else {
        message = `Authentication failure for username: ${user.username}`;
      }
    } else {
      message = `User not found for username: ${credentials.name}`;
    }
  } else {
    message = `Auth header not found`;
  }

  if (message) {
    console.warn(message);
    /* If user authentication failed...
        Return a response with 401 Unauthorised HTTP status code
    */
    res.status(401).json({ message: "Access Denied" });
  } else {
    /* Or if user authentication succeeded...
        Call the next() method.
     */
    next();
  }
};
