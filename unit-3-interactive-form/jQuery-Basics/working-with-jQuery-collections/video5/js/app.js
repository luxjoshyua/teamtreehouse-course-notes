/*
-- Loops in jQuery --

for ( let index = 0; index < $collection.length; i++ ) {
  const $element = $collection[index];
  // do something with $element...
}

// loop rewritten in jQuery
$collection.each(function(index, element) {
  // do something with each element
}); 

*/

const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
// unobtrusive code, deleted from HTML, inserted here
const $pdfCheckbox = $('<label><input type="checkbox">Allow PDF downloads</label>'); 

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
  //check if checkbox has been checked 
  //if zero checkboxes are checked 
  if ($(':checked').length === 0){
    //prevent download of document 
    event.preventDefault();
    //alert the user 
    alert('Please check the box to allow PDF downloads.');
  }
});

$('#links').append($pdfCheckbox);

// find all the anchor tags on the page
// loop through each of them
// then call a function for each of them
// 'this' means get the href for this element, this being the current item in the collection or the element associated with the current index

$('a').each(function(this){
  // console.log(index, $(element).attr('href')); 
  const url = $(this).attr('href');
  // using string interpolation - template literals ``
  $(this).parent().append(`(${url})`);
}); 

// Given an array named characterList, which .each() loop would console.log the name of each book character?

characterList.each(function(index, character){console.log(character); }); 
