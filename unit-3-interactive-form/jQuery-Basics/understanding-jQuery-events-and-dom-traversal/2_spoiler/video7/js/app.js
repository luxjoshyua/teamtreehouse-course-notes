/*
 Event Delegation
 - attach an event listener to a parent element that fires when an event occurs on a child element

 Event Propogation
 - When an event moves through the DOM from child to a parent element, that's called Event Propogation, because the event propogates, or moves through the DOM.  

 Event Object
 // event object declared
 element.on('click', function(event) {
   // do something with event on click
 })

*/



// if user clicks spoiler element, or any of the elements nested within that parent element, listen because we may want to do something
// if user clicks button element that is nested within spoiler, run this code
// other common names function(evt) or function(e)
$('.spoiler').on('click', 'button', function(event) {
  // event.target reveals the specific element that was clicked on
  console.log(event.target); 
  // show the spoiler text of either span
  // $('.spoiler span').show();
  // Hide the "Reveal Spoiler" button
  // when the button is clicked, hide the target of the event aka hide the specific button that was clicked on
  $(event.target).hide();
});

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);
//Hide the spoiler text
$('.spoiler span').hide();
