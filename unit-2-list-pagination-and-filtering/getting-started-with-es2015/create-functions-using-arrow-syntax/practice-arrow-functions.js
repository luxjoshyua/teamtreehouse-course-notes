// syntax
const function = (parameter/s) => {

}; 

function divide1(a, b) {
    return a / b; 
}
// same as:
const divide = (a, b) => a / b; 

// Task one
function addToTen(num) {
    return 10 + num;
}

// rewritten in arrow syntax
// because we're passing in only one parameter, don't need to enclose in parentheses()
// when passing in 1 parameter, don't need enclosing () parentheses
const addToTen = num => 10 + num; 

// Task two
function divideUs(num1, num2) {
    return num1 / num2;
}

// rewritten in arrow synax
// this function receives two parameters, so need to be enclosed in parantheses
const divideUs = (num1, num2) => num1 / num2; 


// Task three
function printMyName() {
    let myName = 'Ashley';
    console.log(myName);
}

// rewritten in arrow syntax
// this one doesn't take any parameters
// because there are two lines of code, need to keep the curly braces {}
const printMyName = () => {
    let myName = 'Ashley';
    console.log(myName); 
};


// Refactoring Practice
// Task one
const multiplyByTen = (num) => {
	return 10 * num;
}

// refactored as
// doesn't need return
// only passing in one parameter, doesn't need parantheses
const multiplyByTen = num => 10 * num; 

// Task two
// as short as it can be
const printToTen = () => {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}

// Task three
const addUs = (num1, num2) => {
	console.log(num1 + num2);
}

// refactored as
const addUs = (num1, num2) => console.log(num1 + num2); 





// Debug Challenge - check what's wrong with each function

// Task one
const multiplyUs = num1, num2 => console.log(num1 * num2); 

// rewritten as
// needs parantheses as there are two parameters
const multiplyUs = (num1, num2) => console.log(num1 * num2); 

// Task two
const subtractFromTen = num => 
    const diff = 10 - num; 
    // without parentheses, console.log(diff) is in the global scope, so won't work
	console.log(diff);

// Rewritten as
const subtractFromTen = num => {
    const diff = 10 - num;
    console.log(diff); 
}

// Task three
const printDate = date = function() {
	console.log(date);
}

// Rewritten as
// arrow functions don't use the function keyword
// because only one parameter, doesn't need () around date parameter
const printDate = date => console.log(date); 

// Function calls
multiplyUs(2,6);
subtractFromTen(4);
printDate('1/16/18');