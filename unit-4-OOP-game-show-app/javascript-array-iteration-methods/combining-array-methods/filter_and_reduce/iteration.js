/* -- Combining filter() and reduce() --

*/


const products = [{
    name: 'hard drive',
    price: 59.99
  },
  {
    name: 'lighbulbs',
    price: 2.59
  },
  {
    name: 'paper towels',
    price: 6.99
  },
  {
    name: 'flatscreen monitor',
    price: 159.99
  },
  {
    name: 'cable ties',
    price: 19.99
  },
  {
    name: 'ballpoint pens',
    price: 4.49
  },
];

// Result: { name: 'paper towels', price: 6.99 }

// return the product that has the highest price under $10

const product = products
  // filter the array of all items under 10
  .filter(product => product.price < 10)
  // then use reduce to collect the highest priced item
  .reduce((highest, product) => {
    if (highest.price > product.price) {
      return highest;
    }
    return product;
  });

console.log(product);


// use filter() and reduce() to return the sum of all items over $10

const total = products
  // filter the array of all items under 10
  .filter(product => product.price > 10)
  // then use reduce to collect the highest priced item
  .reduce((sum, product) => sum + product.price, 0)
  // reduces the decimal places to 2
  .toFixed(2);

// Result: 239.97  
console.log(total);



/* Practice Activity 
Using the filter and reduce methods on the purchaseItems array, add the total price of all the groceries (items with a dept. of groceries). 
Store the total price in the groceryTotal variable. 
The correct amount can be seen in the comments below.

*/

const purchaseItems = [{
    name: 'apples',
    dept: 'groceries',
    price: 2.49
  },
  {
    name: 'bread',
    dept: 'groceries',
    price: 2.99
  },
  {
    name: 'batteries',
    dept: 'electronics',
    price: 5.80
  },
  {
    name: 'eggs',
    dept: 'groceries',
    price: 3.99
  },
  {
    name: 't-shirts',
    dept: 'apparel',
    price: 9.99
  }
];
let groceryTotal;


// Write your code below

groceryTotal = purchaseItems
  .filter(purchaseItem => purchaseItem.dept === 'groceries')
  .reduce((sum, purchaseItem) => sum + purchaseItem.price, 0)
  .toFixed(2);
// groceryTotal should be: 9.47
console.log(groceryTotal);

// can also be written like
groceryTotal = purchaseItems
  .filter(item => item.dept === 'groceries')
  .reduce((sum, item) => sum + item.price, 0);
// groceryTotal should be: 9.47
console.log(groceryTotal);