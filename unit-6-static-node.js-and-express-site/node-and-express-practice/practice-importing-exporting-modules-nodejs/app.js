// Import Express and set up the app
const express = require('express');
const app = express();

// Import routes
const router = require('./routes');

// Import 404 and global error handlers
const errorHandlers = require('./errorHandlers');

// Export the two functions from 'helpers.js' and import the module into 'routes.js'
const helpers = require('./helpers');

// Pass route route handlers to the app
app.use(router);

// Pass 404 and global error handlers to the app
// Access each function using dot notation and the name of the function defined in errorHandlers.js
app.use(errorHandlers.handleFourOhFour);
app.use(errorHandlers.handleGlobalError);

/*
 * Helpers for Various Tasks
 */
// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})