/**
* ==== Promises ====
* Promises are the eventual value or result of an asynchronous operation
* A promise is a regular JS object {} that changes from a pending state to either a fulfilled or rejected state
* You call methods on the Promise object, like then() and catch()
* When the status of a promise changes to resolved, the function passed to then() gets called
* When the status changes to rejected, the function passed to catch() is invoked
* It's best to specify a rejection reason and call catch() on a promise - if you don't, the promise will silently fail
*/

// Setup the promise
const dataPromise = new Promise(); 

/**
 * ==== Named Functions and Promises ====
 * You can also pass then and catch references to named functions
 */

// Setup two functions to handle if the order was accepted or rejected
function onResolve() {
    console.log('Your order is ready, come and get it!');
}

function onReject() {
    console.log(Error('There was a problem with your order!'))
}

// In the Promise constructor, call resolve() if order is true, and reject() if it's false
const breakfastPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve();
        } else {
            reject(); 
        }
    }, 3000); 
})

// Next, pass then a reference to onResolve and catch a reference to onReject
const order = true;
breakfastPromise
    .then(onResolve)
    .catch(onReject)

/**
 *  ==== Promise Chaining ====
 * 
 * .then() itself always returns a new promise, so you're able to call .then() more than once on the same promise
* This means that by chaining multiple thens together, you can transform values or run additional async operations one after another

 * E.g. the functions addFive and double perform a math operation on a number (represented by n). The function finalValue prints a value to the console
 * */


function addFive(n) {
  return n + 5;
}
function double(n) {
  return n * 2;
}
function finalValue(nextValue) {
  console.log(`The final value is ${nextValue}`);
}

const mathPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    // resolve promise if 'value' is a number; otherwise, reject it
    if (typeof value === 'number') {
      resolve(value);
    } else {
      reject('You must specify a number as the value.')
    }
  }, 1000);
});

const value = 5;
mathPromise
  .then(addFive)
  .then(double)
  .then(finalValue)
  .catch( err => console.log(err) )

// The final value is 20

/**
 * We can call and use each function again and again as needed in our promise sequence. E.g. in the example below,
 * addFive gets called twice - before and after double, producing a final value of 25
 */

const value = 5;
mathPromise
  .then(addFive)
  .then(double)
  .then(addFive) // called twice
  .then(finalValue)
  .catch( err => console.log(err) )

// The final value is 25

/**
 * If a promise gets rejected because value is a string, for example, the sequence jumps straight to the catch() method
 */
const value = '5';
mathPromise
  .then(addFive)
  .then(double)
  .then(finalValue)
  .catch( err => console.log(err) )

// You must specify a number as the value.

/**
 * In this example we see how chaining multiple promises together to represent a sequence of asynchronous operations is easier to follow
 * and a lot cleaner than callbacks, especially in more complex programs. Chaining promises also gives you precise control
 * over how and where errors are handled
 */

 /**
  * ==== Promise.all ====
  * Promise.all() method is useful for when your program needs to wait for more than one promise to resolve
  */

 const func1 = getJSON('...');
 const func2 = getJSON('...');
 
 Promise.all([func1, func2])
   .then(results => {
     console.log('Array of results', results);
   })
   .catch(error => {
     console.error(error);
   })