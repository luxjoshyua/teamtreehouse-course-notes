/*
  -- Event Bubbling and Delegation --

  - A parent experiences the same event a child does because of event bubbling e.g.
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </ul>
const li = document.querySelector('li');
const ul = document.querySelector('ul');

li.addEventListener('mouseover', () => {
    li.style.listStyleType = 'square';
})
the ul would also be targeted because of event bubbling

Example two
const button = document.querySelector('button.cancel');
button.addEventListener('click', () => {
  console.log('I clicked the button');
});

'I clicked the button' will be logged to the console

 */




const toggleList = document.getElementById('toggleList');
// this is the selector we use to target the li items
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

// when the mouse enters the elements (div) boundaries, change to uppercase
listDiv.addEventListener('mouseover', () => {
// .textContent gets the textContent of the element you've selected above, in this case the li element
listItems[i].textContent = listItems[i].textContent.toUpperCase();
});

// when the mouse enters the elements boundaries, change to uppercase
listDiv.addEventListener('mouseout', () => {
// .textContent gets the textContent of the element you've selected above, in this case the li element
listItems[i].textContent = listItems[i].textContent.toLowerCase();
});


// makes the elements inside .list hidden on click
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
// p.textContent = input.value + ';'
// functions the same as the above
descriptionP.innerHTML = descriptionInput.value + ';'
  // set to empty once text has been entered
  descriptionInput.value = '';
});

// handler
addItemButton.addEventListener('click', () => {
// getElementsByTagName returns a collection like an array
let ul = document.getElementsByTagName('ul')[0];
	// once the li element is created, can add text to it using .textContent
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  // clear the input after text has been entered
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  // getElementsByTagName returns a collection like an array
  let ul = document.getElementsByTagName('ul')[0];
	// once the li element is created, can add text to it using .textContent
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
