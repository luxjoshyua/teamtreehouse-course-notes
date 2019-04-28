/* Challenge Instructions
Ask at least five questions

Keep track of the number of questions the user answered correctly

Provide a final message after the quiz letting the user know the number of questions he or she got right.

Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all. */

// need score in global scope

// remember parseInt parses a string argument

var usersAnswer = false;
var correctAnswer = 0;

var firstQ = prompt("Who is the current President of America?"); 
 if (firstQ.toUpperCase() === "DONALD TRUMP") {
  usersAnswer = true;
  correctAnswer += 1; 
}

var secQ = prompt("What type of whale is the biggest?"); 
  if (secQ.toUpperCase() === "BLUE WHALE") {
    usersAnswer = true;
    correctAnswer += 1;
}

var thirdQ = prompt("What is the best TV show?"); 
if (thirdQ.toUpperCase() === "THE SOPRANOS") {
   usersAnswer = true;
   correctAnswer += 1;
}

var fourthQ = prompt("Who won best picture this year at the Oscar's?");
if (fourthQ.toUpperCase() === "GREEN BOOK") {
   usersAnswer = true;
   correctAnswer += 1;
}

var fifthQ = prompt("What is the latest iphone called?"); 
if (fifthQ.toUpperCase() === "IPHONE XR") {
   usersAnswer = true;
   correctAnswer += 1;
}

if (correctAnswer === 5) {
  var rank = "GOLD";
} else if (correctAnswer === 3 || correctAnswer === 4) {
  rank = "SILVER"; 
} else if (correctAnswer === 1 || correctAnswer === 2) {
  rank = "BRONZE";
} else {
  rank = "CROWNLESS" 
}

alert("You scored " + correctAnswer + " out of 5 " + " and attained the rank of " + rank + "!"); 

// Teachers Solution

// quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === 'RUBY' ) {
  correct += 1; 
}
var answer2 = prompt("Name a programming language that's also a snake");
if ( answer2.toUpperCase() === 'PYTHON' ) {
  correct += 1; 
}
var answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
  correct += 1; 
}
var answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML' ) {
  correct += 1; 
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
  correct += 1; 
}

// output results
document.write("<p>You got " + correct + " out of 5 questions correct.<p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");  
} else if (correct >= 3) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");  
} else if (correct >= 2) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");  
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}
