"use strict";

const express = require("express");
const bcrypt = require("bcrypt");

// This array is used to keep track of user records
// as they are created.
const users = [];

// Construct a router instance.
const router = express.Router();

// Route that returns a list of users.
router.get("/users", (req, res) => {
  res.json(users);
});

// Route that creates a new user.
router.post("/users", (req, res) => {
  // Get the user from the request body.
  const user = req.body;

  // initialise error variable
  const errors = [];

  // Validate we have a name value
  if (!user.name) {
    // The `user.name` property isn't defined or is set to `undefined`, `null`, or an empty string
    errors.push('Please provide a value for "name"');
  }

  // Validate we have an email value
  if (!user.email) {
    errors.push('Please provide a value for "email"');
  }

  // Validate we have a password value
  let password = user.password;
  if (!password) {
    errors.push('Please provide a value for "password"');
  } else if (password.length < 8 && password.length > 20) {
    errors.push("Your password should be between 8 and 20 characters");
  } else {
    // hash the password using bcrypt
    user.password = bcrypt.hashSync(password, 10);
  }

  // If there are any errors
  if (errors.length > 0) {
    // Return the validation errors to the client
    // Note this is using ES2015 object initialiser shorthand syntax
    // The property and variable names are the same so we don't have to declare twice
    res.status(400).json({ errors });
    // Same as writing this
    // res.status(400).json({ errors: errors });
  } else {
    // there are no errors, add user to the users array
    // Add the user to the `users` array.
    users.push(user);

    // Set the status to 201 Created and end the response.
    res.status(201).end();
  }
});

module.exports = router;
