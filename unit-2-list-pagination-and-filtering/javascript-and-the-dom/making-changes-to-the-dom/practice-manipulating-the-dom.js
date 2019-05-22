/* -- Practice Manipulating the DOM --

.appendChild
.textContent = 
.innerHTML = 
.createElement('ul'); 

*/

// 1: Set the text of the <h1> element
const h1 = document.querySelector('h1').textContent = 'h1 text is set here'; 
// 2: Set the color of the <h1> to a different color
h1.style.color = 'purple'; 

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const para = document.getElementsByClassName('desc').innerHTML = '<p>Something something</p>'; 

// 4: Set the class of the <ul> to 'list'
const ul = document.getElementsByTagName('ul');
ul.className = 'list'; 

// 5: Create a new list item and add it to the <ul>
const newLI = document.createElement('li');
ul.appendChild(newLI); 

// 6: Change all <input> elements from text fields to checkboxes
 const input = document.getElementsByTagName('input'); 
 for (let i = 0; i < input.length; i++) {
    input[i].type = 'checkbox'; 
 }
 
// 7: Create a <button> element, and set its text to 'Delete'
// Add the button inside the .extra div
const btn = document.createElement('button');
btn.innerHTML = 'Delete';

const extra = document.getElementsByClassName('extra');
extra.appendChild(btn); 

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

const container = document.getElementsByClassName('container');
btn.addEventListener('click', () => {
  container.removeChild(extra); 
})
