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

// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.

// 4. Call the listProducts() function and log the returned value to the console.

// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value

// 6. Call the totalValue() function and log the returned value to the console.

// 7. Run your code by typing node 3_final_products.js in the console below


// Step two
let products = [
    // index value 0
    {
        name: 'Book',
        inventory: 10,
        unit_price: 45.99
    },
    // index value 1
    {
        name: 'CD',
        inventory: 4,
        unit_price: 23.99
    },
    // index value 2
    {
        name: 'Newspaper',
        inventory: 120,
        unit_price: 3.99
    }
];
// returns Book
// console.log(products[0].name); 

// Step three
function listProducts(prods) {
    // because the function returns a list, first need to create an empty array to store that
    let product_names = [];
    // loop through the array of each product, retrieve the name of each product
    // creates a counter variable, each time through the loop, compares i to the passed in array of objects and exits as soon as that item is equal to the number of items in the array
    // runs the code the same number of times as there are array items
    // in the above, there are 3 items, so the loop will run 3 times
    for (let i = 0; i < prods.length; i += 1) {
        // to access the name of each object, first need to access the object using array notation  
        // prods[i] accesses the first item in the array as you've assigned i = 0; above
        // as the loop runs, the value of i increases
        // to access the name property, use prods[i].name - dot syntax
        // use push to push the product names onto the end of the array
        product_names.push(prods[i].name);
    }
    // return the array
    return product_names;
};

// Step four
console.log(listProducts(products)); 


// Step five
function totalValue(prods) {

    // create a variable to hold the calculations
    let inventory_value = 0;
    // setup a loop to cycle through each object
    for (let i = 0; i < prods.length; i += 1) {
        // each time through the loop, add to the inventory_value variable by multiplying the total number of the current product in stock with the unit price of that product
        // add to the inventory_value variable the calculation
        // loop through the array, make the same calculation for each product, and add it to the inventory_value variable
        inventory_value += prods[i].inventory * prods[i].unit_price;
    }
    // then return that variable
    return inventory_value;
}

// Step six
console.log(totalValue(products)); 
