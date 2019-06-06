// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);


// $('$element').on('click keypress mouseleave', function() {
//   // do stuff when the element is clicked OR when a key is pressed
// }); 

// on is useful when you want the code to fire on one or more events e.g. click, keypress, mouseleave

//Hide the spoiler text
$('.spoiler span').hide();
// When the button is pressed 
// $('.spoiler button').on('click mouseleave', function(){ // also works on event mouseleave
$('.spoiler button').on('click', function(){
  //Show the spoiler text
  $('.spoiler span').show();
  //Hide the "Reveal Spoiler" button
  $('.spoiler button').hide();
});




