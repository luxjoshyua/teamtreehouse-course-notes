var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

// accesses Sarah
var message = '<p>Hello. My name is ' + person.name + '!</p>';
// accesses US
message += '<p>I live in the ' + person.country + '</p>';
// changes name to Rainbow Dash
person.name = 'Rainbow Dash';
// prints the new object out
message += '<p>But, I wish my name was ' + person.name + '</p>';
// But, I wish my name as Rainbow Dash
// Her age is changed to 36
person.age += 1;
// My age is now 36
message += '<p>My age is now ' + person.age + '</p>';
// output how many skills the student has
// person is the object, skills is the property
message += '<p>I have ' + person.skills.length + ' skills: ' ;
// prints out the students skills
// I have 3 skills: JavaScript, HTML, CSS
message += person.skills.join(', ') + '</p>';
print(message); 