// .join()
var daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// can pass more than one character in join()
var daysString = daysInWeek.join(','); 
console.log( daysString ); 
// Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday

// .concat()
var currentStudents = ['Joan', 'John', 'Joaquin'];
var newStudents = ['Samantha', 'Traci', 'Tiago'];
// adds newStudents to the end of the array
var allStudents = currentStudents.concat( newStudents ); 
// adds newStudents to the start of the array
var allStudents = newStudents.concat( currentStudents ); 

// .indexOf()
var fruit = ['Apple', 'Orange', 'Grapefruit'];
var position = fruit.indexOf('Apple');
// position variable holds 0
var position = fruit.indexOf('Grapefruit');
// position variable holds 2
var position = fruit.indexOf('Lemon');
// if the list item isn't in the array, returns -1