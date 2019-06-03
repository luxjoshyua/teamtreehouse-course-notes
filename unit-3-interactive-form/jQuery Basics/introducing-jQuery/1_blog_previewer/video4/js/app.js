$('#flashMessage').hide();
// all JS transitions last 400ms by default
$('#flashMessage').slideDown(1000);
// give user 3 seconds to read the message, then slide out of view
$('#flashMessage').delay(3000);
$('#flashMessage').slideUp(); 

// can chain together methods in jQuery on the same element like so
$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp(); 




