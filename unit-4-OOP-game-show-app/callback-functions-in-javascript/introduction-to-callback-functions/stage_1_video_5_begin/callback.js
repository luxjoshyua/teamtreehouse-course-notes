function executeCallback( callback ) {
  callback();
}


// Print Hello
// if single line of code, can remove the curly braces in arrow syntax
// => often referred to as a fat arrow
executeCallback(() => {
  console.log('Hello'); 
}); 

// becomes
executeCallback( () => console.log('Hello') ); 

// Print Goodbye
executeCallback(function () {
    console.log('Goodbye');
});

// converted to arrow syntax
executeCallback( () => console.log('Goodbye') );
