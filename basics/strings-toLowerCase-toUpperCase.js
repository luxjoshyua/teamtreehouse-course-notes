// .length property indicates the length of a string
// can use length for e.g. checking password entered correctly
var passphrase = 'Open Sesame';
console.log(passphrase.length); 
// 11

var str = 'Life, the universe and everything. Answer:'; 
console.log(str + '' + str.length); 

// .toLowerCase() returns a copy of a string with all lowercase letters
// to convert to lowercase
console.log( "ALPHABET".toLowerCase() ); // "alphabet"

var passphrase = 'Open Sesame';
console.log(passphrase.length);
console.log(passphrase.toLowerCase()); 
console.log(passphrase); 

// .toUpperCase() returns a copy of a string with all uppercase letters
var str = 'upper';
alert( str.toUpperCase() ); 
// opens an alert dialog with the string 'UPPER'

// to convert to uppercase
console.log(passphrase.toUpperCase()); 

// example toUpperCase(); 
var stringToShout = prompt("What should I shout?");
var shout = stringToShout.toUpperCase(); 
shout += "!!!";
alert(shout); 