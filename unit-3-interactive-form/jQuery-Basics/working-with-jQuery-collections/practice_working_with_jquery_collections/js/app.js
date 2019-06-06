// 1. Add a "featured" tag to the second item in the list: 
  //  Append a new span element containing the word "Featured" to the list item
const $featuredTag = $('<span>Featured</span>'); 
$('ul li:nth-child(2)').append($featuredTag); 
// $('li').eq(1).append('<span>Featured</span>'); also works

//  Add a class of "featured" to the new span element. 
$featuredTag.addClass('featured'); 

// 2. Add a class of "new" to the last item in the list. You can traverse to the last item or find a jQuery method that helps you select the last item in the list. 
$('ul li:last-of-type').addClass('new'); 
// $('li').eq(4).addClass('new'); also works
// $('li:last').addClass('new'); also works
// $('li').last().addClass('new'); also works

// 3. Add an attribute to each link so that all anchor tags open in a new tab. 
const $aTags = $('a');
$aTags.attr('target', '_blank'); 
// $('a').attr('target', '_blank'); also works

//4. Select and print the index and text of each anchor tag to the console
// teachers solution

$('a').each(function(index, item) {
  // $(item) represents each individual item in the jQuery collection
  console.log(index, $(item).text()); 
})

// 5. Refactor question #4 using the 'this' keyword. 
$('a').each(function( index ){
  // const a = $(this).attr('href'); 
  const a = $(this).text(); 
  console.log(index + " " + a); 
}); 

// teachers better solution
$('a').each(function(index){
  console.log(index, $(this).text()); 
}); 




