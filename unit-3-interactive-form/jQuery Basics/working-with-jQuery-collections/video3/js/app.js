/*

Two ways of modifying styles in jQuery
- Direct CSS manipulation
- Manipulating the classes

*/

// $element.css("backgroundColor") // Getter
// $element.css("backgroundColor", "green") // Setter


// $('.my-element').addClass("className"); 

// $('.my-element').removeClass("className"); 

// $('.my-element').toggleClass("className"); 

// $('.my-element').hasClass("className"); // determine whether any of the matched elements are assigned the given class'


const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$odd.css('backgroundColor', 'lightgrey');

$secureLinks.addClass('secure'); 

$pdfs.addClass('pdf');

