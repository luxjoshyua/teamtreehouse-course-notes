/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [

  // quote one
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, dolor eu pretium aliquet, velit ipsum semper nisi, ut blandit ligula leo tempor turpis.',
    source: 'Mao',
    citation: 'Wikipedia',
    year: 2019
  },

  // quote two
  {
    quote: 'Fusce maximus, elit sit amet interdum tempus, elit odio lacinia sapien, quis fermentum tellus diam et odio. Vestibulum pharetra dolor nec vestibulum pellentesque.',
    source: 'Stalin',
    citation: 'Wikipedia',
    year: 2019
  },

  // quote three
  {
    quote: 'Quisque sit amet turpis fermentum, auctor risus in, lobortis ipsum. Suspendisse potenti. Nunc ornare erat sit amet tortor ultricies, id rhoncus ipsum ultricies.',
    source: 'Karl',
    citation: 'Wikipedia',
    tag: 'Hope',
    year: 2019
  },

  // quote four
  {
    quote: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam pretium fermentum massa non eleifend.',
    source: 'Leonid',
    citation: 'Wikipedia',
    tag: 'Hope',
    year: 2019
  },

  // quote five
  {
    quote: 'Phasellus fermentum gravida ligula, faucibus pulvinar ipsum feugiat a. Morbi tristique consequat augue, nec rhoncus nulla elementum non.',
    source: 'Vladimir',
    citation: 'Wikipedia',
    tag: 'Hope',
    year: 2019  
  }

];

console.log(quotes); 


/***
 
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.

   This function needs to:
   1. Generate a random number
   2. Use the random number to grab a quote object from the quotes array
   3. Return the random quote object

***/


// you need to pass parameters to the function - quotes[i].quote? 

// create the function getRandomQuote()
function getRandomQuote() {
  // generate a random number between 0 and the last index in the array parameter
  let randomQuote = quotes[ Math.floor(Math.random() * quotes.length) ]; 
  // return the randomly selected quote object
  return randomQuote; 
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {

  // Call the `getRandomQuote` function and assign it to a variable.
  let randomQuoteCall = getRandomQuote(); 

  // Create a variable for the HTML string and set it equal to an empty string.
  let html = ''; 

  // Add the quote and source section to the HTML string.


  // Use an if statement to check for the citation property before adding it to the HTML string.
 
  if (randomQuote.citation) {
    html += ""
  }

  // Use an if statement to check for the year property before adding it to the HTML string.

  if (randomQuote.year) {

    html += 

  }

  if (randomQuote.citation) {
    html += 
  }

  
  // close the string with the necessary closing HTML tags

  // set the innerHTML of the .quote-box to the complete HTML string



}

printQuoteHTML(); 





/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.