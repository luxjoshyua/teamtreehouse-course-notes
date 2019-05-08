/*

1) 	Write the code for function addNewTeachers() found on line 35. This function should receive parameter newTeachers, defined on line 52, and add the new teachers to the treehouseTeachers variable. 
 
2)	Find function printTreehouseSummary(). There is something you need to fix in this function so the console.log() on the final line of the function outputs the correct number of JavaScript courses and teachers.
 
3)	At this point, attempt to run your code by typing node let_const.js in your workspace console and hitting enter. You should receive an error message when you do this. Use the clues in this error message to fix the program so it runs.

*/

// changed from const because the number of teachers changes, meaning const wouldn't work because you can't change the value of const variables

let teachers = [{
	name: 'Ashley',
	topicArea: 'Javascript'
}];

// const means the variables can't be reassigned
const courses = [
	'Introducing JavaScript',
	'JavaScript Basics',
	'JavaScript Loops, Arrays and Objects',
	'Getting Started with ES2015',
	'JavaScript and the DOM',
	'DOM Scripting By Example'
	];

var i = courses.length;

function addNewTeachers(newTeachers) {
	// TODO: write a function that adds new teachers to the teachers array 
	// use .push method  
	// access first item
	// teachers.push(newTeachers.name);
	// access second item
	// teachers.push(newTeachers.name);
	teachers.push(newTeachers[0], newTeachers[1]); 

	// can also write with the spread operator
	// spread operator lets you specify an unknown number of array properties
	teachers.push(...newTeachers); 
}

console.log(teachers);

function printTreehouseSummary() {
	// TODO: fix this function so that it prints the correct number of courses and teachers 
	for (let i = 0; i < teachers.length; i++) {
		console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`);
	}

	console.log(`Treehouse has ${i} JavaScript courses, and ${teachers.length} Javascript teachers`);
	// also works
}

// need the log to say 'Treehouse has 6 JavaScript courses, and 3 JavaScript teachers' 

// added these to the function addNewTeachers using .push() method
let newTeachers = [{
		name: 'James',
		topicArea: 'Javascript'
	},
	{
		name: 'Treasure',
		topicArea: 'Javascript'
	}
];

// let and const variables need to be declared at the top of their scope
addNewTeachers(newTeachers);
printTreehouseSummary();
