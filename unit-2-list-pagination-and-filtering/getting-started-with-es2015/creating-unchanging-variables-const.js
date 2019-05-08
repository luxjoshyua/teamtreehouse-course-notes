// Use const for variables that don't change their value, as const prevents the value from being reassigned
// Use const when selecting elements on a page as these element's don't change
// Wouldn't use const to store the score of a game, as the players score changes

var name = "Andrew";
      
// function overwrites the name variable in the global scope
function createFullName(fName, lName) {
    name = fName + " " + lName;
    console.log(name);
}
console.log(name);
// Logs Andrew
// Logs Joel Kraft

createFullName("Joel", "Kraft");

// Code rewritten
const name = "Andrew";
      
// function overwrites the name variable in the global scope
function createFullName(fName, lName) {
    const name = fName + " " + lName;
    console.log(name);
}
console.log(name);
// Logs Andrew
createFullName("Joel", "Kraft");


