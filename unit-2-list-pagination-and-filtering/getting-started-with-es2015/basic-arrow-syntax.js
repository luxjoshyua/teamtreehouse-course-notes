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

// note: if only passing 1 argument, don't need the parentheses() around the argument

function square(x) {
    return x * x;
}

// rewritten
const square = (x) => {
    return x * x;
}

// rewritten even simpler without parentheses!
const square = x => {
    return x * x;
}

function cube(x) {
    return square(x) * x;
}

// rewritten
const cube = (x) => {
    return square(x) * x;
}

// rewritten even simpler without parentheses!
const cube = x => {
    return square(x) * x;
}

// Multiple arguments
function multiply(x, y) {
    return x * y;
}

const multiply = (x, y) => {
  return x * y; 
}

function add(a, b) {
    return a + b;
}

const add = (a, b) => {
  return a + b; 
}

function subtract(a, b) {
    return a - b;
}

const subtract = (a, b) => {
    return a - b;
}






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

// this function rewritten inn ES6 arrow syntax
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1000);

}