// $('#flashMessage')
//   .hide()
//   .slideDown(1000)
//   .delay(3000)
//   .slideUp();

// const title = "My First Blog Post";
// const content = "This is my <strong>first</strong> post!";

// $("#blogTitlePreview").text(title);
// $("#blogContentPreview").html(content);

$('#previewButton').click(function() {
  const title = $('#blogTitleInput').val(); 
  console.log(title); 
}); 

// Notes
// 1. Select the heading text with the class of .profile-name
// 2. Use jQuery's text() method to set the contents of .profile-name to the value of the input field

$('button').click(function() {
  const newName = $('#name-input').val();
  // need to pass the newName as an argument to $('.profile-name'); 
  $('.profile-name').text(newName); 
})


// Returns the contents of $('.product-description') as plain text
$('.product-description').text(); 