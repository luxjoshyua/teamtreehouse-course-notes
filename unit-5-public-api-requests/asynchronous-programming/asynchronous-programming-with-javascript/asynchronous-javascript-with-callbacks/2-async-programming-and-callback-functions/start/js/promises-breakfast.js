const order = true; 

const breakfastPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // resolve('Your order is ready. Come and get it!'); 
        // reject('Oh no! There was a problem with your order.'); 
        if (order) {
            resolve('Your order is ready. Come and get it!')
        } else {
            reject( Error('Your order cannot be made.')); 
        }
    }, 3000); 
}); 

console.log(breakfastPromise); 
// then() can be called on fulfilled and rejected promises
breakfastPromise
    .then( val => console.log(val) )
    .catch( err => console.log(err) ); 