// Example
function sayHello() {
    console.log('Hello');
}

function executeCallback( callback ) {
  callback();
}

executeCallback(sayHello);


// Change to
// Notice how we deleted sayHello, converted it to an anonymous function
function executeCallback( callback ) {
  callback();
}

// inline function
// Print Hello
executeCallback(function () {
  console.log('Hello');
}); 

// Print Goodbye
executeCallback(function () {
  console.log('Goodbye');
}); 


// An anoynmous function is a function without a name
// function () {
//   // do something
// }




