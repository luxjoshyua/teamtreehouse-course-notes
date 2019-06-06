// create reveal spoiler button
// use $ when declaring a function that contains a jQuery element
const $button = $('<button>Reveal Spoiler</button>');
// append to web page .append()
// pass the element we want to append using $button
$('.spoiler').append($button); 
// .prepend() inserts before the element 
// $('.spoiler').prepend($button); 


//Hide the spoiler text
$('.spoiler span').hide();
// When the button is pressed 
$('.spoiler button').click(function(){
  //Show the spoiler text
  $('.spoiler span').show();
  //Hide the "Reveal Spoiler" button
  $('.spoiler button').hide();
});





