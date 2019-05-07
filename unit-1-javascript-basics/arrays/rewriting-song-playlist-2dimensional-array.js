var playList = [
  // [] is an empty array literal
  ['I did it my way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Born to Run', 'Bruce Springsteen'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybellene', 'Chuck Berry']
];

function print(message) {
  document.write(message);
}
// change the parameter ( songs )
function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    // the songs[i] now represents one of the songs in the array
    // in two dimensional arrays, need to acces the inner item and the outer item hence songs[i][0]
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);