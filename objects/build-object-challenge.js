// use our function to print the message to the page
function print (message) {
  var outputDiv = document.getElementById('output'); 
  outputDiv.innerHTML += message; 
}
// leave the HTML string empty because will be adding to it with our for loop below
var HTML = ''; 
var students = [
  // each of {} is an object
  {
    name: 'Dave',
    track: 'iOS',
    achievements: 1321,
    points: 2341
  },
  {
    name: 'Sarah',
    track: 'Web Design',
    achievements: 1321,
    points: 2341
  },
  {
    name: 'John',
    track: 'Front End Development',
    achievements: 1321,
    points: 2341
  },
  {
    name: 'Daisy',
    track: 'Python',
    achievements: 1321,
    points: 2341
  },
  {
    name: 'Lola',
    track: 'Android Development',
    achievements: 1321,
    points: 2341
  },
];

// console.log(students[0].name); returns Dave
// console.log(students[3].name); returns Daisy
// setup the loop
for (var i = 0; i <  students.length; i++ ) {
  // add to the loop each item in the object
  HTML += "<h1>Students</h1>";  
  HTML += "<h2>Name: " + students[i].name + "</h2>";
  HTML += "<p>Track: " + students[i].track + "</p>";
  HTML += "<p>Achievements: " + students[i].achievements + "</p>";
  HTML += "<p>Points: " + students[i].points + "</p>";
}
print(HTML); 


// TEACHERS SOLUTION
// each of {} is an object
var students = [
  {
    name: 'Dave',
    track: 'iOS',
    achievements: 1321,
    points: 2341
  },
  {
    name: 'Sarah',
    track: 'Web Design',
    achievements: 1321,
    points: 2341
  },
  {
    name: 'John',
    track: 'Front End Development',
    achievements: 1321,
    points: 2341
  },
  {
    name: 'Daisy',
    track: 'Python',
    achievements: 1321,
    points: 2341
  },
  {
    name: 'Lola',
    track: 'Android Development',
    achievements: 1321,
    points: 2341
  },
  
 ];
// leave the string empty, will be built up below
 var message = '';
 var student; 
 function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message; 
 }
 // dot notation identifies the property and then retrives its value
 // to get to each student, need to run through a loop
 for (var i = 0; i > students.length; i +=1 ) {
  // acces the item using i, store it to variable student 
  student = students[i];
  message += "<h2>Student: " + student.name + "</h2>";
  message += "<p>Track: " + student.track + "</p>";
  message += "<p>Achievements: " + student.achievements + "</p>";
  message += "<p>Points: " + student.points + "</p>";
}
print(message); 

