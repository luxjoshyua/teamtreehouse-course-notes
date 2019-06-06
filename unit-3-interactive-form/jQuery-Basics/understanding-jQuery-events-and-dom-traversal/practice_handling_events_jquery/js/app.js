// 1. Hide/show the text inside the #helpText span element when the user's mouse passes over the text "How are these ranked?" (Hint: use the jQuery toggle() method) 
$('#helpText').on('mouseover', function () {
  $('#helpText span').delay(2000).toggle();
});

// 2. Append a new restaurant to the restaurant list when the user enters a value into the #newRestaurant input and clicks on the #addNew button. 
$('#addNew').on('click', function (event) {
  const newRestaurant = $('#newRestaurantInput').val();
  // BONUS: Before appending the new restaurant to the list, use string concatentation to make sure the new restaurant name is surrounded by an opening and closing <li> tag. 
  "<li>" + $('#newRestaurantInput').val() + "</li>";
  $('ul').append("<li>" + newRestaurant + "</li>");
});

// teacher's solution
$('#addNew').on('click', function() {
  const newRestaurant = $('#newRestaurantInput').val(); 
  $('ul').append('<li>' + newRestaurant + '</li>'); 
  // ES6 syntax
  $('ul').append(`<li>${newRestaurant}</li>`); 
}); 


// 3. Add the class "strike" to the restaurant name each time it's double clicked. Use event delegation on the ul element to listen for a click event on the ul's list items
// BONUS: Refactor challenge 3 using the "this" keyword.
// BONUS: Look up a jQuery method that will let you toggle the .strike class on and off. 
$('ul li').on('dblclick', function (event) {
  // $(this).addClass( 'strike' ); 
  $(event.target).addClass('strike'); 
  $(this).toggleClass('strike'); 
}); 


// teacher's solution
// listening for a click on any list item within the unordered list element
$('ul').on('dblclick', 'li', function(event){
  $(event.target).addClass('strike'); 
  $(this).toggleClass('strike'); 
}); 


