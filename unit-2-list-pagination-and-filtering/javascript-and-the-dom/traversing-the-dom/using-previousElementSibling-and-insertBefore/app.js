/*
-- Using previousElementSibling and insertBefore

NonDocumentTypeChildNode.previousElementSibling()
Syntax
prevNode = elementNodeReference.previousElementSibling;

- previousElementSibling is preferred to previousSibling because unlike previousSibling, previousElementSibling
always returns a DOM element

Node.insertBefore()
Syntax
var insertedNode = parentNode.insertBefore(newNode, referenceNode);

- for insertBefore you need three nodes; the parent, the sibling, and the reference to the node you want to insert

Practice: the constant div contains a reference to a DOM element. Select its parent node and store that in the constant
parentOfDiv
const div = document.querySelector('div');
const parentOfDiv = div.parentNode;

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
    // target the button with class of remove
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    // target the button with class of up
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
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


console.log('Hello World, Josh here!');
