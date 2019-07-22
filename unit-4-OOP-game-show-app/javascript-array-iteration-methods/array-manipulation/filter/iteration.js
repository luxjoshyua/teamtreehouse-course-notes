const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let sNames = [];

names.forEach(name => {
  if(name.charAt(0) === 'S') {
    sNames.push(name);
  }
});

console.log(sNames);


/* use filter to remove items from an array

it doesn't affect the original array, rather it 
returns a new array with the filter applied

*/

// rewritten using filter method

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const sNames = names.filter(name => {
  if(name.charAt(0) === 'S') {
    return true; 
  } else {
    return false; 
  }
});

// written in shorter syntax
// arrow functions with one statement can be condensed to one line,
// whose value will be returned

const sNames = names.filter(name => name.charAt(0) === 'S'); 

console.log(sNames);


// written differently again
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const startsWithS = name => name.charAt(0) === 'S';
// pass the variable (startsWithS) to the filter method
const sNames = names.filter( startsWithS ); 

console.log(sNames); 


// Example with numbers
const numbers = [1,2,3,4,5];
// return all numbers except 3
// 
const no3 = numbers.filter(number => number !== 3); 
console.log(no3); // 1, 2, 4, 5

// Return only 2 from the array
const numbers = [1,2,3,4,5];
const only2 = numbers.filter(number => number === 2); 
console.log(only2); 


// Challenge: return only even numbers
const numbers = [1,2,3,4,5,6,7,8,9,10];

// divides by 2 with 0 remainder, this gives you the even numbers
const evens = numbers.filter(number => number % 2 === 0); 
console.log(evens); // Result: [2,4,6,8,10]


// Challenge: return only years in the twentieth century
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20; 

// gets the years that are less than or equal to 2000
century20 = years.filter(year => year <= 2000 );
console.log(century20); 

// century20 should be: [1989, 2000, 1999, 1973]


