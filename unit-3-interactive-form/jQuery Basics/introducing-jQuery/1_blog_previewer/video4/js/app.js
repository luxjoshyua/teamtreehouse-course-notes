$('#flashMessage').hide();
// all JS transitions last 400ms by default
$('#flashMessage').slideDown(1000);
// give user 3 seconds to read the message, then slide out of view
$('#flashMessage').delay(3000);
$('#flashMessage').slideUp();

$('#element').text();

// change html within the element
$('#element').html(); // getter because it gets the value
$('#element').html("<p>I am setting this HTML!</p>"); // setter because it sets the value

const title = "My First Blog Post";
const content = "This is my <strong>first</strong> post!";

// returns the contents of $('.product-description') as plain text.
$('.product-description').text(); 


$('#flashMessage').hide();

$('#previewButton').click(function () {
  // do something here
  // .val grabs the user's input / retrieves information from a form input field
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);
  // $('#blogContentPreview').text(content); // also works, but won't display the <strong></strong> tags correctly like the .html method
  // can chain together methods in jQuery on the same element like so
  $('#flashMessage').slideDown(1000).delay(3000).slideUp();
});