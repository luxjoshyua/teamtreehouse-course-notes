// basic syntax
do {
} while ()

// basic example
do {
  console.log('Hello');
} while (false)
console.log('Goodbye'); 
// will print Hello then Goodbye once the loop is finished

// Rewriting the random number game as a do while loop
var randomNumber = getRandomNumber(10);
// hold players guess that is typed into the prompt
var guess;
// keep track of how many times the player guesses
var guessCount = 0;
// used to keep track of whether the user has entered the correct number, starts at false because at the beginning of the game, the user has made zero guesses
// is a flag variable
var correctGuess = false; 

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?");
  // because they've answered, increase the guess count
  guessCount += 1;
  // use parseInt to convert from a string into a number
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
  // ! converts a boolean value to its opposite
} while ( ! correctGuess)
  document.write("<h1>You guessed the number!</h1>");
  document.write("It took you " + guessCount + " tries to guess the number " + randomNumber);

// do while challenges

// Challenge one
var x = 1;
do {
  console.log('#' + x );
  x += 2; 
} while ( x <= 15 )
/* need to output
#1
#3
#5
#7
#9
#11
#13
#15 */

// Challenge two
var x = 0;
do {
  console.log('I love JavaScript');
  x += 1; 
} while ( x <= 9 )
// will print 'I love JavaScript' to the console ten times!

// Challenge three
var secret = prompt("What is the secret password?");
while ( secret !== "sesame" ) {
  secret = prompt("What is the secret password?");    
}
document.write("You know the secret password. Welcome.");

// rewrite as a do while loop
var secret = "sesame";
var guess; 
var correctGuess = false; 
do {
  // run a function in here
  guess = prompt("What is the secret password?");
  if (guess === secret) {
    correctGuess = true; 
  }
//so long as the condition (here) remains true
} while ( ! correctGuess  )
document.write("You know the secret password. Welcome.");

