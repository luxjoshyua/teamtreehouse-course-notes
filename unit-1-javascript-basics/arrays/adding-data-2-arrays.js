// .length
var numbers = [ 1, 2, 3, 4, 5, 6 ];
numbers[ numbers.length ] = 7;
// 7 is added to the end of the array

// .push()
var numbers = [ 1, 2, 3, 4, 5, 6 ];
numbers.push(7);
// 7 is added to the end of the array
numbers.push(7, 8, 9); 
// 7 8 9 are added to the end of the array

// .unshift()
var numbers = [ 1, 2, 3, 4, 5, 6 ];
numbers.unshift(0);
// 0 is added to the start of the array
numbers.unshift(-2, -1, 0);
// -2, -1, 0 are added to the start of the array
