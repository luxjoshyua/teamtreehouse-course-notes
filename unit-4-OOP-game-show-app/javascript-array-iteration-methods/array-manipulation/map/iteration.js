// like filter, map returns a new array
const strings = ['1','2','3','4','5'];

// get a number from a string using parseInt
const numbers = strings.map(string => parseInt(string, 10) ); 

console.log(numbers); // returns the string as numbers


// Challenge: refactor this code using map method

const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = [];

fruits.forEach(fruit => {
  let capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits);

// Refactored code using map()

const fruits = ['apple', 'pear', 'cherry'];
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase() );
console.log(capitalizedFruits);


// Challenge: return the numbers as prices
const prices = [5, 4.23, 6.4, 8.09, 3.20];

// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

// const displayPrices = price.map(price => '$' + price ); // will work

const priceToDollars = price => `$${price.toFixed(2)}`; // turns a number into a price string

const displayPrices = prices.map(priceToDollars); 
console.log(displayPrices); 

/* Challenge with Map
Use the map method on the daysOfWeek array, creating a new array of abbreviated week days. 
Each abbreviated string should be the first three letters of the long version in daysOfWeek. 
Store the new array in the variable abbreviatedDays. */


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// Write your code below

abbreviatedDays = daysOfWeek.map(day => day.substring(0,3) );
console.log( abbreviatedDays ); 