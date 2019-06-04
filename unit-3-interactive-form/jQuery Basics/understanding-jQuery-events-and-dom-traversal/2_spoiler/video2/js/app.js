// hide spoiler text on page load
$('.spoiler span').hide(); 

// when button is pressed, show the spoiler text, hide the 'reveal spoiler' button
$('.spoiler button').click(function() {
  // show the spoiler text
  $('.spoiler span').show(); 
  // hide the 'reveal spoiler' button
  $('.spoiler button').hide(); 
}); 





