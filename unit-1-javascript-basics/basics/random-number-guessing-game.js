var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
// use parseInt to convert to number
if (parseInt(guess) === randomNumber ) {
  document.write('<p>You guessed the number!</p>'); 
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '</p>'); 
} 

// Rewritten with boolean values
var correctGuess = false; 
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} if ( correctGuess ) {
  document.write('<p>You guessed the number!</p>');
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '.</p>'); 
} 

