// See if you can build a program that collects a number from a user, then prints out a random number from 1 to the number the user selects. Now is the opportunity to practice using some of the commands you learned in this course.

//prompt()
//parseInt()
//Math.random()

// 1. Collect number from user
var input1 = prompt("Please type a starting number");
var input = prompt("Please type a number"); 

//2. Convert input to integer using parseInt()
var topNumber = parseInt(input); 
var bottomNumber = parseInt(input1); 

//3. Print out a random number from 1 to the number the user selects
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber; 

var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>"; 

document.write(message); 