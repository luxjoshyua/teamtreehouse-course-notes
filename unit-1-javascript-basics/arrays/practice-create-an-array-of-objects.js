// Part 1 - 1_objects.js
/* INSTRUCTIONS
To run this file, click in the Console below and type: node 1_object.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an object named book using object literal syntax
// 2. Add a title property to the book object and assign it a string value
// 3. Add an author property to the book object and assign it a string value
// 4. Add a publish_year to the book object and assign it a number to represent the year the book was published


/* 5. Use a for-in loop to print the book object to the console so the final output looks something like this:
title: Harry Potter and the Sorcerer's Stone
author: J.K. Rowling
publish_year: 1997
*/

// 6. Run your code by typing node 1_object.js in the console below

var book = {
	title: 'The Communist Manifesto',
	author: 'Karl Marx',
	publish_year: 1848
}

// k5. Use a for-in loop to print the book object to the console so the final output looks something like this:

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = "<p>The title of my book is " + book.title + "</p>"; 
message += "<br>"; 
message += "<p>It was written by " + book.author + "</p>";
message += "<br>";  
message += "<p>It was published in " + book.publish_year + "</p>"; 

print(message);

// Part 2 - 2_products.js
/* INSTRUCTIONS
To run this file, click in the Console below and type: node 2_product.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an object named product, with the following 3 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price
// before moving to the next step, make sure you've created the object correctly by logging it to the console like this: console.log(product)

// 2. Create a function named addInventory(). The function should accept 2 parameters -- the product object, and the number to add to the inventory. 
// The function adjusts the product object's inventory property by adding the number passed into the function. 
// For example, if the inventory of the product is currently 2, calling addInventory(product, 3) will set the value of inventory to 5
/* Add a console.log() message to the function that includes a message that looks something like this:
"3 chairs added to the inventory"
In this example, "chair" is the name of the product.
*/

// 3. Call the addInventory() function


// 4. Create a function named processSale(). The function should accept 2 parameters -- the product object, and the number of products that were sold. 

// The function adjusts the product object's inventory property by subtracting the number passed into the function. The function also returns the total sale which is the unit_price multiplied by the number passed into the function
// For example, if the inventory of the product is currently 5 and the unit_price is 10, calling processSale(product, 2) will set the value of inventory to 3 and return the value of 20. 
/* Add a console.log() message to the function that includes a message that looks something like this:
"2 chairs sold"
In this example, "chair" is the name of the product.
*/


/* 5. Call the processSale() function. When you call the processSale() function log the return value to the console so the message looks something like this:
"Total sale: $20"
*/

// Step One

let product = {
	name: 'Book',
	inventory: 22,
	unit_price: 45.99
}; 

// Step Two

function addInventory(prod, quantity) {
	prod.inventory += quantity;
	console.log(quantity + " " + prod.name + "s added to the inventory.");
	console.log(prod.inventory + " " + prod.name + "s in stock."); 
}

addInventory(product, 3); 

// Step Three
function processSale(prod, quantity) {
	prod.inventory -= quantity;
	console.log(quantity + " " + prod.name + "s sold");
	return quantity * prod.unit_price; 
}

console.log("Total sale: $" + processSale(product, 3)); 



// Part 3 - 3_final_products.js
/* INSTRUCTIONS
To run this file, click in the Console below and type: node 3_final_products.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 4 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price

let products = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
  }
];

// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.
  // prods is the array that is passed into the function
  function listProducts(prods) {
    let product_names = [  ]; 
    // loop through the array, retrieve the name of each product
    for (let i = 0; i < prods.length; i+= 1) {
      // i accesses the first product in the array, as i is assigned index value 0 above
      product_names.push(prods[i].name); 
    }
    return product_names; 
  }

// 4. Call the listProducts() function and log the returned value to the console.
  console.log(listProducts(products)); 
  // returns chair, table, sofa

// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value
function totalValue(prods) {
  let inventory_value = 0;
  for (let i = 0; i < prods.length; i+=1) {
   inventory_value += prods[i].inventory * prods[i].unit_price; 
  }
  return inventory_value; 
}

// 6. Call the totalValue() function and log the returned value to the console.
console.log(totalValue(products)); 

// 7. Run your code by typing node 3_final_products.js in the console below