/*
const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

// remove Samir from the users array
const newUsersArray = users
  .filter(user => user.name !== 'Samir'); 
  .map()


// use map to tell how old each user is e.g. Samir is 27 years old.
const newUsersArray = users
  .map(user => `${user.name} is ${user.age} years old.`); 

console.log( newUsersArray );

// use filter to return a new object
const usersObject = users
  .reduce( (usersObject, user) => {
    usersObject[user.name] = user.age;
    // always have to return a value from our callback, will throw error otherwise
    return usersObject; 
  }, {} ); 

  console.log( usersObject );

*/

/* Practice
Using the map method on the authors array, create an array of full name strings, 
comprising the first name, then a space, then the last name. 
See the comments below for reference. 
Store the new array in the fullAuthorNames variable. */

const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below

fullAuthorNames = authors
  .map(author => `${author.firstName} ${author.lastName}`); 

console.log(fullAuthorNames); 
