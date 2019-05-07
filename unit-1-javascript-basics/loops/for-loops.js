// basic structure of a for loop
for (var i = 0; i < 10; i += 1) {
  // do something in here
}

// can also increment the counter using the ++ operator like this:
for (var i = 0; i < 10; i++) {
  // do something in here
}

// comparing a while loop and a for loop that do the same thing!
// while loop
var counter = 0;
while (counter < 10) {
  document.write( counter );
  counter += 1;
}
// for loop
// counter < 10; is evaluated before the loop runs each time
for ( var counter = 0; counter < 10; counter += 1 ) {
  document.write( counter );
}
// usually would be written as
// i and j are often used for variable names inside of loops
// can increase i <= 1000; will print out 1001 times
for ( var i = 4; i <= 10; i += 1 ) {
  document.write( i );
}

// example for loop
// console log from 4 to 156 in a for loop
// i++ = increase by 1, add 1 to the total
for ( var i = 4; i < 157; i++ ) {
    console.log( i );
}
// {} runs first, then the ()


// example for loop
for (var j = 0; j <= 100; j += 10) {
  console.log(j);
}
// will run 11 times 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100