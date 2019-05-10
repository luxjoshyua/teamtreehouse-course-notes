// With no arguments

const name = "Andrew";

// function
function sayName() {
    const message = "My name is " + name;
    console.log(message);
}

// function rewritten 
const sayName = function () {
    const message = "My name is " + name;
    console.log(message);
}
sayName();

// rewritten as fat arrow syntax (best practice)
const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}
sayName();



// function
function sayBye() {
    console.log("Bye " + name);
}

// function rewritten in arrow syntax
const sayBye = () => {
    console.log("Bye " + name);
}


// Single arguments

// note: if only passing 1 argument, don't need the parentheses() or return around the argument
// note: you can only omit the return keyword if the arrow function is on a single line without {}

// Example one
function square(x) {
    return x * x;
}

// rewritten
const square = (x) => {
    return x * x;
}

// rewritten even simpler without parentheses or return!
const square = x => { x * x;}

// Example two
function cube(x) {
    return square(x) * x;
}

// rewritten
const cube = (x) => {
    return square(x) * x;
}

// rewritten even simpler without parentheses or return!
const cube = x => {square(x) * x;}

// Multiple arguments


// Example one
function multiply(x, y) {
    return x * y;
}

const multiply = (x, y) => {
  return x * y; 
}

// rewritten even simpler without parentheses or return!
const multiply = (x, y) => {x * y;}

function add(a, b) {
    return a + b;
}

const add = (a, b) => {
  return a + b; 
}

// rewritten even simpler without parentheses or return
const add = (a, b) => a + b; 


function subtract(a, b) {
    return a - b;
}

const subtract = (a, b) => {
    return a - b;
}

// rewritten even simpler without parentheses or return!
const subtract = (a, b) => {a - b};



// this function increases a persons age by 1 every second
function Person() {
    this.age = 0;

    var self = this;

    setInterval(function () {
        self.age++;
    }, 1000);

}

// you have to assign this to a variable, in this case self because whenever you create a function a new this value is defined

// arrow functions do not have a this value defined

// this function rewritten in ES6 arrow syntax
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1000);

}


// Another example
// string, letter are the two parameters passed to the function

const remove = (string, letter) => {
    let regex = new RegExp(letter, 'g');
    return string.replace(regex,''); 
}


// Another example
const backwards = function(string) {
    let stringArray =  string.split("");
    let reverseArray = stringArray.reverse();
    return reverseArray.join("");
  }

// is functionally the same as 
const backwards = string => {
    let stringArray = string.split("");
    let reverseArray = stringArray.reverse();
    return reverseArray.join(""); 
}

// Another example
const add = (num1, num2) => {
    return num1 + num2;
}

