// 1: Set the text of the <h1> element
document.querySelector('h1').textContent = 'h1 text content goes here!';

// 2: Set the color of the <h1> to a different color
const h1 = document.querySelector('h1');
h1.style.color = "pink";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
document.querySelector('.desc').innerHTML = 'Text goes here!'; 

// 4: Set the class of the <ul> to 'list'
document.getElementsByTagName('ul')[0].className = 'list';

// 5: Create a new list item and add it to the <ul>
var newListItem = document.createElement('li');
let ul = document.querySelector('ul'); 
ul.appendChild(newListItem); 

// 6: Change all <input> elements from text fields to checkboxes
// document.querySelector('input').type = 'checkbox'; 

const i = document.getElementsByTagName('li').type = 'checkbox'; 


// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const btn = document.createElement('button'); 
btn.innerHTML = 'Delete me';
document.querySelector('.extra').appendChild(btn); 


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const removeItemButton = document.querySelector('button'); 

removeItemButton.addEventListener('click', () => {

  const removeBtn = document.querySelector('button'); 
  
  const extraDiv = document.querySelector('.extra p'); 

  removeBtn.removeChild(extraDiv); 

  // extraDiv.removeChild(removeBtn); 
});

