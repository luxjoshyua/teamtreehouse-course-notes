/*
-- Combining Filter and Map --

can be useful when you first want to remove some elements and then
transform the remaining elements in some way

*/

// Task One
/*

const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const users = userNames
    .filter(name => name.charAt(0) === 'S')
    .map(name => ({
        name
    }));

console.log(users); // Samir, Shaniqua, Sean


// Task Two

// filter and map to create a string of 30 years and older
const users = [{
        name: 'Samir',
        age: 27
    },
    {
        name: 'Angela',
        age: 33
    },
    {
        name: 'Beatrice',
        age: 42
    },
    {
        name: 'Shaniqua',
        age: 30
    },
    {
        name: 'Marvin',
        age: 23
    },
    {
        name: 'Sean',
        age: 47
    }
];

const userNames = users
    // first filter out 30 and above
    .filter(user => user.age >= 30)
    // then map over that array of objects, returning only the user names
    .map(user => user.name);

console.log(userNames);
// Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];


*/
/* Practice 
Using the filter and map methods on the todos array, create an array of unfinished task strings. 
See the comments below to see the correct result. 
Store the new array in the variable unfinishedTasks.
*/

const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];

// let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below

const unfinishedTasks = todos
    .filter( todo => todo.done === false )
    .map( todo => todo.todo );

console.log(unfinishedTasks); 