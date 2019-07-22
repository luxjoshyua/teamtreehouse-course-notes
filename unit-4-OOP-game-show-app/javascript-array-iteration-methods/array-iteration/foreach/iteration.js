// Example One
const fruits = ['apple', 'pear', 'cherry'];

// empty array that will be filled later
let capitalizedFruits = [];

fruits.forEach(fruit => {
    // capitalise the string
    let capitalizedFruit = fruit.toUpperCase();
    // push the capitalised fruit into the capitalizedFruit array
    capitalizedFruits.push( capitalizedFruit ); 
}); 

console.log(capitalizedFruits); 


// Example Two

const prices = [6.75, 3.10, 4.00, 8.12]; // sums to 21.97
// create a varaiable to hold the total summed price
let totalPrice = 0; 

for (let i = 0; i < prices.length; i++ ) {
   totalPrice += prices[i]; 
   console.log(totalPrice); 
}

// forEach() method

// const prices = [6.75, 3.10, 4.00, 8.12]; // sums to 21.97
// let total = 0;

// prices.forEach(price => {
//     total += price;
// }); 

// console.log(total); 


// Example Three
// Task: only output names starting with S

// how the check the first character of each name
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
// start with empty array that will be added to in the forEach
let sNames = []; 

names.forEach(name => {
    if ( name.charAt(0) === 'S' ) {
        // add it to the array if it does start with S
        sNames.push(name); 
    }
}); 

console.log(sNames); 
// Result: ['Selma', 'Sam', 'Sharon'];


// Example Four
// Task: output each number * 10; 

const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

// loop through each number
numbers.forEach(number => {
    // I need to times each number by 10
    number = number * 10;
    times10.push(number);
}); 

// times10 should be: [10,20,30,40,50,60,70,80,90,100]
console.log(times10); 



