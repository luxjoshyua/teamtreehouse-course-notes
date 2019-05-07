// this loop prints out ten random numbers from 0 to 6
// while loop
var counter = 0;
// put a test condition inside the parentheses
// run loop ten times
while ( counter < 10 ) { 
  var randNum = randomNumber(6); 
  // ' ' is to separate the numbers when they're printed out to the page
  document.write(randNum + ' '); 
  counter += 1;  
}