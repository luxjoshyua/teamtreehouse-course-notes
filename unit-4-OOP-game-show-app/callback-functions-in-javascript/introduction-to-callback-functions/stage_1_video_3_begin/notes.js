// Example

function sayHello(name) {
    // The string we send in is assigned to the variable name
    console.log('Hello ' + name);
}

function sayHiBack(name) {
    // The string we send in is assigned to the variable name
    console.log('Hi there, ' + name + '! It is nice to meet you.');
}

function executeCallback(functionToExecute, personName) {
    // functionToExecute is now assigned a reference to the sayHello function
    // The next line is equivalent to sayHello(personName);
    functionToExecute(personName);
}


// Call the executeCallback and send it the function sayHello and send in your name
executeCallback(sayHello, "Jason");
// call the executeCallback and send it the function sayHiBack and send in my name
executeCallback(sayHiBack, "Jennifer");



// Example two

function log() {
    console.log("Hello World!");
}
// pass the callback log function as a parameter into functionRunner
functionRunner(log);