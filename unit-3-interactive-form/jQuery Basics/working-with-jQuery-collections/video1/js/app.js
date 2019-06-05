/* Selectors in jQuery

- CSS Selectors e.g. tagname, classes, ids, pseudo-classes (e.g. first and last)

- jQuery specific selectors: 

    :radio, :checkbox, :password
    :odd (1, 3, 5 etc index value), :even (0, 2, 4 etc index value)
    :visible, :hidden
*/


// select a elements that are odd so 0, 
const $odd = $('a:odd');
// $odd.hide(); 
// carrot ^ means starts with
const $secureLinks = $('a[href^="https://"]'); 
// hide all the secure links
$secureLinks.hide; 

// would target all inputs with text starting with add, so e.g. addresses
$('input[name^="add"]'); 

// selects all a elements that are pdf links
const $pdfs = $('a[href$=".pdf"]'); 
// hide the pdfs
$pdfs.hide(); 

// find all hidden li elements, then show them
$('li:hidden').show(); 

