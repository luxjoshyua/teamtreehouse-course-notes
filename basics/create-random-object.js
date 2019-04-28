Math.random() * 6;
// random between 0 and 6, including decimals
Math.floor()
Math.ceil()
// both convert decimals to integers
// Math.random() * 6 is evaluated first, then Math.floor, which rounds down to an integer
Math.floor( Math.random() * 6 ) + 1
// without the 1, will be random integer between 1 and 5

var dieRoll = Math.floor( Math.random() * 6 ) + 1;
// random number between 1 and 6
alert('You rolled a ' + dieRoll); 