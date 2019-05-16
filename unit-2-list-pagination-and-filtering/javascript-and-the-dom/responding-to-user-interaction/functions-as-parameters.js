/* -- Functions as Parameters

- A variable is also known as a reference, because it refers to a value

- Being able to pass one function into another is useful because it allows you to have more control
over when and how a function gets executed.

- Functions are called 'first-class citizens' in JavaScript because they can be stored in variables or
passed into functions like any other datatype.

*/

// function declaration
function say(something) {
  console.log(something);
}

// pass the string 'Hello' as the argument
say('Hello');
// Hello is printed to the console

// Can also be written as
const say = function(something) {
  console.log(something);
};

// Example Two
// func is the function
// arg is the argument to be passed to the function
function exec(func, arg) {
  func(arg);
}

// say is the function
// 'Hi, there' is the string
// both are first class citizens, in that they can be passed to the function in the same way
exec(say, 'Hi, there');

// Function expression
function exec(func, arg) {
  func(arg);
}

exec(function say(something) {
  console.log(something);
}, 'Hi, there');

// prints Hi, there to the console

// can also be written as an anonymous function
exec((something) => {
     console.log(something);
}, 'Greetings, everyone!');


// References can be passed to other variables
function say(something) {
  console.log(something)
}
const otherSay = say; // -> otherSay now holds a reference to the 'say' function
otherSay('hello'); // -> logs "hello"

say('message');

// set the following function 'add' up to run after 5 seconds pass
// pass 'add' the arguments 2 and 2 when it runs
function add(num1, num2) {
  console.log(num1 + num2);
}

window.setTimeout(add, 5000, 2, 2);
