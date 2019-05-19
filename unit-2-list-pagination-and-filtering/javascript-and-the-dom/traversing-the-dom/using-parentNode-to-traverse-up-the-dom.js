/*
 
-- Using parentNode to Traverse Up the DOM --

Syntax = Element.parentNode

-- Example One
let paragraph = document.getElementById('myParagraph');
let parent = paragraph.parentNode;
parent.removeChild(paragraph); 

-- Example two
let li = event.target;
let ul = li. parentNode;
ul.removeChild(li); 

*/

/*
-- Relevant HTML --
<body>
  <h1 id="myHeading">JavaScript and the DOM</h1>
  <p>Making a web page interactive</p>
  <button id="toggleList">Hide list</button>
  <div class="list">
    <p class="description">Things that are purple:</p>
    <input type="text" class="description">
    <button class="description">Change list description</button>
    <ul>
      <li>grapes <button>Remove</button></li>
      <li>amethyst <button>Remove</button></li>
      <li>lavender <button>Remove</button></li>
      <li>plums <button>Remove</button></li>
    </ul>
    <input type="text" class="addItemInput">
    <button class="addItemButton">Add item</button>
    
  </div>
*/

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul'); 
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    // can keep pairing parentNode to parentNode, going up the tree
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li); 
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});