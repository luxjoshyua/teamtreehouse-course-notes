function getRandomNumber( lower, upper ) {  
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error('one or both numbers in your function call is not a number'); 
    // if fine, run the function like normal
    } 
    return Math.floor(Math.random() * (upper - lower + 1) ) + lower;     
  }

console.log( getRandomNumber( 1, 24 ) );
console.log( getRandomNumber( 1, 100 ) );
//console.log( getRandomNumber( 200, 'five hundred' ) );
console.log( getRandomNumber( 1000, 20000 ) );
console.log( getRandomNumber( 50, 100 ) );