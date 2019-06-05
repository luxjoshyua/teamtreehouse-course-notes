/* Selectors in jQuery

- CSS Selectors e.g. tagname, classes, ids, pseudo-classes (e.g. first and last)

- jQuery specific selectors: 

    :radio, :checkbox, :password
    :odd, :even
    :visible, :hidden

*/
// select a elements that are odd so 0, 
const $odd = $('a:odd');
// $odd.hide(); 
// carrot ^ means starts with
const $secureLinks = $('a[href^="https://"]'); 
// hide all the secure links
$secureLinks.hide; 

// selects all a elements that are pdf links
const $pdfs = $('a[href$=".pdf"]'); 
// hide the pdfs
$pdfs.hide(); 

