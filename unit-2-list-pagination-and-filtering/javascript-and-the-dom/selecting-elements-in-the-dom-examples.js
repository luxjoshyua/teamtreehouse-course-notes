<html>
<body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p id="paragraph">Making a web page interactive</p>
    <input type="text" id="myTextInput"></input>
    <button id="myButton">Change headline color</button>
  </body>
</html>

// Change the heading element to red when user clicks
// reference to the heading element is stored in the constant myHeading
const myHeading = document.getElementById('myHeading');
const paragraph = document.getElementById('paragraph');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

// listen for user mouseclicks
// click is the first parameter passed in, then run the function
myHeading.addEventListener('click', () => {
  // tell the browser to manipulate the event by making the text red for every click event
  myHeading.style.color = 'red';
});

// Change the p element to blue when user clicks
paragraph.addEventListener('click', () => {
// tell the browser to manipulate the event by making the text red for every click event
paragraph.style.color = 'blue';                            
});

// Change the heading color when button is clicked
myButton.addEventListener('click', () => {
  myHeading.style.color = 'red'; 
}); 

// Change the heading colour to what user enters
myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value; 
}); 
  