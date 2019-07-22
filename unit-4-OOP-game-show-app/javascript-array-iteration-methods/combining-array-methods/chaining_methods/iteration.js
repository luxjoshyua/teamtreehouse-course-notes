/* -- Chaining Array Methods --

This approach works when your method returns an array, so you can call another array method directly after it.
The same is true for the filter method.

*/

const arr = [1,2,3];

const smallerArr = arr.filter(number => number !== 2);
const incrementedArr = smallerArr.map(number => number + 1);

console.log(incrementedArr); // => [2,4]


// Can be changed to
const arr = [1,2,3];

// first it removes the 2 from the array, and then adds +1 to the remaining items in the array (so 1 becomes 2, 3 becomes 4)
const smallerArr = arr.filter(number => number !== 2).map(number => number + 1);

// easier to understand syntax
const smallerArr = arr
    .filter(number => number !== 2)
    .map(number => number + 1);

console.log(incrementedArr); // => [2,4]


// Removing duplicates from an array

const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter(function(number, index, array) {
    // indexOf method returns the index of the first occurrence that is found in the array.
    // So, indexes of duplicate elements will not equal the index of the first occurrence of their values.
  return index === array.indexOf(number);
});

console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/* Practice Array Iteration Methods
Using the filter and map methods on the years array, create an array of display strings for 
each year in the 21st century (remember: the 21st century starts with the year "2001"). 
Each display string should be the year followed by "A.D." 
See the comments below to see the correct result. Store the new array in the variable displayYears. */

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

displayYears = years
  .filter(year => year > 2000)
  .map(year => year + ' A.D.');


