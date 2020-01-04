// Import `express` and set up `express.Router`
const express = require('express');
// const app = express();

// Import helpers module
const helpers = require('./helpers'); 

// Import routes
const mainRoutes = require('./routes');

/*
* Route Handlers
*/
// Remove the two route handlers, '/' and '/error', from 'app.js' and add them to 'routes.js'
// Adjust the route handlers to work on the `router` rather than `app`
// Change the two helper function calls in the GET '/' route handler from 'routes.js' to call 
// the `reverseString` and `shortenString` helper functions from the imported module

// Home route
router.get('/', (req, res) => {
    // Log statement to indicate that this function is running
    console.log('Handling request to root or "home" route, "/"');
  
    // Create greeting and use helper functions to reverse and shorten a string
    const greeting = 'Hello World!'
    // access the helpers functions defined in helpers.js by using dot notation
    const reversedGreeting = helpers.reverseString(greeting)
    // access the helpers functions defined in helpers.js by using dot notation
    const shortenedDesc = helpers.shortenString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sapien diam. Vestibulum sed turpis id eros varius cursus.')
    
    // Send greeting to the page
    res.send(`
      <h1>${greeting} &#128075;</h1>
      <p><strong>Reversed greeting:</strong> ${reversedGreeting}</p>
      <p><strong>Shortened description:</strong> ${shortenedDesc}</p>
    `);
  });
  
  // Custom error route
  router.get('/error', (req, res) => {
    // Log statement to indicate that this function is running
    console.log('Handling request to custom "error" route, "/error"');
  
    // Create custom error and print error message to the page
    const err = new Error('err');
    err.message = 'Oops, it looks like an error occurred.';
    throw err;
  });

// Export router
module.exports = router; 
