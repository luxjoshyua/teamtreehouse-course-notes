const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');


$('#my-image').attr("alt"); // Getter
$('#my-image').attr("alt", "Sunset in Barcelona"); // Setter


// first part is the getter eg target, alt, src, class, id
// second part is the setter
$secureLinks.attr('target', '_blank'); 

// find all pdfs, set to download
$pdfs.attr('download', 'true'); 