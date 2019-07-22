const fruits = ['apple', 'pear', 'cherry'];

for (let i = 0; i < fruits.length; i++ ) {
    // use i to access each item in the array
    console.log(fruits[i]);    
}

// forEach
// runs the same as the for loop above
fruits.forEach( fruit => console.log(fruit) ); 