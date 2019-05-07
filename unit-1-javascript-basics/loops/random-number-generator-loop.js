var upper = 1000;
var randomNumber = getRandomNumber(upper); 
var guess;
var attempts = 0; 

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
// !== called a logical not operator
while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper ); 
  attempts += 1; 
}
document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>"); 