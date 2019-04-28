var students = ['Sascha', 'Lynn', 'Jennifer', 'Paul'];
// will stop after 4, hence not good option
// for (var i = 0; i < 4; i+= 1)
// keep cycling through the students array
for (var i = 0; i < students.length; i += 1) {
  console.log(students[i]); 
}
// Sascha, Lynn, Jennifer, Paul

// Rewriting the song selector tool
var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  // loop will run as many times as there are items in the array
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML); 
}

// pass the array playList to the function so it actually runs!
printList(playList);