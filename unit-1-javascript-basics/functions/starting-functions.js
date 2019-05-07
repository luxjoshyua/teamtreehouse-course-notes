/* Function Names
  - Can only use letters, numbers, the _, and $ characters
  - Can't start with a number
  - Can't include any spaces or other punctuation
  */

// Example one
function goToCoffeeShop() {
  // function in here
  alert( 'Espresso is on the way!' );
}
// call the function!
goToCoffeeShop(); 

// Example two
// function memorised by the browser
function alertRandom() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
  alert(randomNumber); 
}
// call the function!
alertRandom(); 
// call it again 
alertRandom(); 
// and again!
alertRandom(); 
// and again!
alertRandom(); 
// and again!
alertRandom(); 

// anonymous function / function expression
// store the function into a variable
var alertRandom = function() {
  var randomNumber = Math.floor(Math.random() * 6 ) + 1;
  alert(randomNumber); 
}; 


