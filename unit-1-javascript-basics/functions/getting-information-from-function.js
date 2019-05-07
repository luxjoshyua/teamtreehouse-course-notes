function goToCoffeeShop() {
  return "Espresso is on the way!"; 
}
// alert box opens "Espresso is on the way!"
alert( goToCoffeeShop() ); 


function giveMeFive() {
  // remember return can only return one thing e.g. a string, a variable, a boolean, the contents of a variable - can't return multiple things at once
  return 5;
}
// prints 5 to the console
console.log( giveMeFive() ); 

function isEmailEmpty() {
  var field = document.getElementById('email'); 
  // if email field is an empty string, return true
  if (field.value === '') {
  return true;
  } else {
  // otherwise if words are there, return true
  return false; 
  }
}

var fieldTest = isEmailEmpty();
if (fieldTest === true ) {
  alert('Please provide your email address.'); 
}