const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
];

// arr is the accumulator, it accumulates the results
// ...arr returns all the elements stored in the accumulator
const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], []);

console.log(flatMovies);


// Second Activity
const users = [{
    name: 'Samir',
    age: 27,
    favoriteBooks: [{
        title: 'The Iliad'
      },
      {
        title: 'The Brothers Karamazov'
      }
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks: [{
        title: 'Tenth of December'
      },
      {
        title: 'Cloud Atlas'
      },
      {
        title: 'One Hundred Years of Solitude'
      }
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks: [{
      title: 'Candide'
    }]
  }
];

const books = users
  .map(user => user.favoriteBooks.map(book => book.title))
  .reduce((arr, titles) => [...arr, ...titles], []);

// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];
console.log(books);


/* Practice Activity
Using reduce method, flatten the customerNames array of arrays. 
In other words, take all the names from each array inside customerNames and place them in one big array. 
Store the flattened array in the flattenedCustomerNames variable. 
You can use the array in the comments below for reference.
*/


const customerNames = [
  [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
  [ "Barry", "Wanda", "Jamal", "Hayden" ],
  [ "Portia", "Pam", "Philip" ]
];
let flattenedCustomerNames;

// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
// Write your code below
const flattenedCustomerNames = customerNames.reduce((arr, customers) => [...arr, ...customers], []); 
console.log(flattenedCustomerNames); 









/* Practice Activity Two
Using the reduce method, extract all the customer hobbies into their own array. 
Store the hobbies in the hobbies array. You can use the comments below for reference.

*/

const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies;


// Write your code below
const hobbies = customers
    .map(customer => customer.personal.hobbies.map(hobby => hobby))
    .reduce((arr, hobbies) => [...arr, ...hobbies], []);
// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
console.log(hobbies);



