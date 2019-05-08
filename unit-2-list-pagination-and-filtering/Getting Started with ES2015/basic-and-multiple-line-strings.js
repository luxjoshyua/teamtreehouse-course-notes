'This is a string' // string literal
"This is a string" // string literal
`This is a string` // template literal
// all evaluate to the same string

// Example one
const singleQuotes = '<p>Single quotes</p>';
const doubleQuotes = "<p>Double quotes</p>";
const templateLiteral = `<p>Template literal</p>`;

// concatenate the two strings together
const result = singleQuotes + doubleQuotes + templateLiteral;
// place the const into a html element with a class of basic
document.querySelector('.basic').innerHTML = result;

// Example two
// written as a string literal
const fruitList = 
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

// written as a template literal
const vegetableList = `
  <ul>
    <li>Potato</li>
    <li>Onion</li>
    <li>Broccoli</li>
  </ul>
`;

// take multiline string, put into a div with a class of fruits
document.querySelector('.fruits').innerHTML = fruitList;
// take multiline string, put into a div with a class of vegetables
document.querySelector('.vegetables').innerHTML = vegetableList;
