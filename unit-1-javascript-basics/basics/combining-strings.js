var message = "Hello " + visitor + ". Welcome to Treehouse. ";
message = message + "We are so glad that you came by to visit, "; 
// output
// Hello visitor. Welcome to Treehouse. We are so glad that you came by to visit. 

var visitor = prompt('What is your name?');
var message = 'Hello ' + visitor + ". Welcome to Treehouse.";
// message = message + "We are so glad that you came by to visit, "; 
// += does the same as line 8, just shorter
message += "We are so glad that you came by to visit, ";
message += visitor;
message += ". Please come again, when you want to learn some more."; 
document.write(message); 
// output
// dialog box enter your name, then [name entered] Hello Sam. Welcome to Treehouse.We are so glad that you came by to visit, Sam. Please come again, when you want to learn some more.

// example combining strings
var greeting = 'Hi';
greeting = greeting + ' there!'; 

// produces the same result
var greeting = 'Hi';
greeting += ' there!'; 