/*
-- Preventing the browser's default behaviour --

event.preventDefault(); 


*/


const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');


$pdfs.on('click', function(event){
    
    // check if checkbox has been checked using jQuery pseudo selector
    if ($(':checked').length === 0) {
        event.preventDefault(); 

        // alert the user
        alert('Please check the box to allow PDF downloads.'); 

    }; 

    // if zero checkboxes are checked

    // prevent download of document

    

    
}); 

