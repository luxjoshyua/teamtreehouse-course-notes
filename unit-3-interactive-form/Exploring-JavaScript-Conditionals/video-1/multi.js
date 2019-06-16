/*
-- Switch statements --

are useful if you're testing against the value of a single variable e.g. var day = 1; 

*/

var day = 1;

// if (day === 0) {
// 	console.log('Sunday');
// } else if (day === 1) {
// 	console.log('Monday');
// } else if (day === 2) {
// 	console.log('Tuesday');
// } else if (day === 3) {
// 	console.log('Wednesday');
// } else if (day === 4) {
// 	console.log('Thursday');
// } else if (day === 5) {
// 	console.log('Friday');
// } else if (day === 6) {
// 	console.log('Saturday');
// } else {
// 	console.log('Invalid Day');
// }

// the parentheses hold an expression
switch (day) {
	case 0:
		// statements to execute
		console.log('Sunday');
		// if forget break, will print both statement
		break;

		// each case is like a new if/else branch
	case 1:
		// statements to execute
		console.log('Monday');
		break;

	case 2:
		// statements to execute
		console.log('Tuesday');
		break;

	case 3:
		// statements to execute
		console.log('Wednesday');
		break;

	case 4:
		// statements to execute
		console.log('Thursday');
		break;

	case 5:
		// statements to execute
		console.log('Friday');
		break;

	case 6:
		// statements to execute
		console.log('Saturday');
		break;

		// this is option run if no branch equals what is in the parentheses (day)
	default:
		console.log('Invalid Day');
		break;

}