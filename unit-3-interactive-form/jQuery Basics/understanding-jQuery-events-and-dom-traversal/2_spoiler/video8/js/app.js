/*
-- DOM Traversal --
  - Move from one element to the next

*/

// can chain together
// $($li).eq(1).prev().next().prev().next().css({color: 'green'}); 

// the on() method allows you to assign an event handler to more than one event

$('.spoiler').on('click', 'button', function(event){
  console.log(event.target);
  //Show the spoiler text
  // use event.target to determine which button has been clicked
  $(event.target).prev().show(); 
  // this button, traverse to the element before it, and show it
  // $(this).prev().show(); also works
  //Hide the "Reveal Spoiler" button
  $(event.target).hide();
  // hide this particular element that was clicked
  // $(this).hide(); also works
});

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);
//Hide the spoiler text
$('.spoiler span').hide();




