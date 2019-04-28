var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

// for is the keyword that introduces the loop
// person is the name of our object
// prop represents the name of a property in our object, acting kind of like a parameter in a function
// prop can be changed to whatever eg could be called key, think of it like a container

for (var prop in person) {
  console.log(prop, ': ', person[prop]);
  // gives us the name of each property in the object
  // name : Sarah
  // country : Us
  // age : 35
  // treehouseStudent : true
  // skills : (3) ["JavaScript", "HTML", "CSS"]
}

// second example
// use a for in loop to log each of the property names of the shanghai object to the console
var shanghai = {
  population: 14.35e6,
  longitude: '31.2000 N',
  latitude: '121.5000 E',
  country: 'CHN'
};

for (var prop in shanghai) {
  console.log(prop,  ': ', shanghai[prop]); 
}

// third example

var student = {
  userName: "Dave",
  email: "dave@teamtreehouse.com",
  badges: 130,
  points: 14888
}
for ( var prop in student ) {
  console.log(student[prop]); 
}
/* will display
  dave
  dave@teamtreehouse.com
  130
  14888
*/