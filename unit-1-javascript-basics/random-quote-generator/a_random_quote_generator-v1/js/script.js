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
    quote: 'Political power grows out of the barrel of a gun.',
    source: 'Mao',
    year: 1938,
    citation: 'Wikipedia'
  },

  // quote two
  {
    quote: 'Mankind is divided into rich and poor, into property owners and exploited; and to abstract oneself from this fundamental division; and from the antagonism between poor and rich means abstracting oneself from fundamental facts.',
    source: 'Stalin',
    citation: 'Wikipedia',
    year: 1930
  },

  // quote three
  {
    quote: 'The history of all hitherto existing society is the history of class struggles.',
    source: 'Karl',
    citation: 'Wikipedia',
    tag: 'Struggle',
    year: 2019
  },

  // quote four
  {
    quote: 'Man will become immeasurably stronger, wiser, and subtler; his body will become more harmonious, his movements more rhythmic, his voice more musical. The forms of life will become dynamically dramatic. The average human type will rise to the heights of an Aristotle, a Goethe, or a Marx. And above these heights, new peaks will rise.',
    source: 'Leonid',
    citation: 'Wikipedia',
    tag: 'Hope',
    year: 1912
  },

  // quote five
  {
    quote: 'Without revolutionary theory there can be no revolutionary movement.',
    source: 'Vladimir',
    citation: 'Dogmatism and "Freedom of Criticism"',
    tag: 'Hope',
    year: 1902  
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


// create the function getRandomQuote()
function getRandomQuote() {
  // generate a random number between 0 and the last index in the array parameter
  let randomQuote = quotes[ Math.floor(Math.random() * quotes.length) ]; 
  // return the randomly selected quote object
  return randomQuote; 
}

// Create a random colour function


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

  // Call the `getRandomQuote` function and assign it to a variable, then use it to build the string below
  let randomQuoteCall = getRandomQuote(); 

  // Create a variable for the HTML string and set it equal to an empty string.
  let html = ''; 

  // parent div here
  let parentDiv = document.getElementById('quote-box'); 
  
  // mark the variable (quoteDiv), attach it to a new element
  let quoteDiv = document.createElement("p");
  quoteDiv.classList.add("quote"); 

  // mark the variable, attach it to the random quote generator variable
  let quoteCopy = document.createTextNode(randomQuoteCall.quote);

  quoteDiv.appendChild(quoteCopy); 

  parentDiv.appendChild(quoteDiv); 

  // add source and class
  // let sourceDiv = document.createElement("p"); 
  // sourceDiv.classList.add("source"); 
  // let sourceDiv = document.createTextNode(randomQuoteCall.source); 


  // Use an if statement to check for the citation property before adding it to the HTML string.
 
  if (randomQuoteCall.citation) {

    // created div, need to insert random citation into child div
    let citation = document.createElement("span"); 

    // add the class of citation
    citation.classList.add("citation"); 

    let citationCopy = document.createTextNode(randomQuoteCall.citation); 
    
    citation.appendChild(citationCopy); 

    // insert into the parentDiv variable created above, append the citation div here to it
    parentDiv.appendChild(citation);

  }

  // source citation

  if (randomQuoteCall.source) {

    // created p, need to insert source citation into child div
    let source  = document.createElement("p");

    // add the class of source
    source.classList.add("source"); 

    let sourceCopy = document.createTextNode(randomQuoteCall.source); 

    source.appendChild(sourceCopy);

    // appendChild source to the parentDiv
    parentDiv.appendChild(source); 
  

  }


  // Use an if statement to check for the year property before adding it to the HTML string.

  if (randomQuoteCall.year) {

    let year = document.createElement("span"); 

    // add the class of year 
    year.classList.add("year"); 
    let yearCopy = document.createTextNode(randomQuoteCall.year); 

    // attach yearCopy 
    year.appendChild(yearCopy);

    // appendChild year to the parentDiv
    parentDiv.appendChild(year); 

  }

  // check the parentDiv is logging
  console.log(parentDiv);

}

printQuote(); 



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.