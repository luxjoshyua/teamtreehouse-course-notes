function callbackFunction() {
    // do something
}

// could also be written as, is functionally the same 
const callbackFunction = function () {
    // do something
}

function executeCallback( callback ) {
    // do something
    // invoke the callback with parentheses()
    // invokes the callback immediately aka syncronously
    callback(); 
}

// sayHello is now stored in the callback variable in the scope of the executeCallback function,
// then it's invoked
executeCallback(sayHello); 


// this is how you execute the callback Function; by passing it in as a parameter
executeCallback(callbackFunction)


// Example
function everySecond(callback) {
    // This function runs the callback every second
}

// the getStockData() function is a callback function since it's being invoked by the everySecond function
// Callbacks are just regular functions used by another function at some other time in the future. This can be at regular intervals or from user interaction.
// The easiest way to spot a callback is if it has the name of a function and is being passed into another function call.

function getStockData() {
    // This function gets stock data from the NYSE
}

everySecond(getStockData);


// Example two
function sayHello() {
    console.log('Hello');
}

// Examples of Callbacks
onClick(showHint);
everySecond(tickClock);

readFile("myStory.txt", printStory); // callbacks don't have to be first place in the function call; in this example, it's second
