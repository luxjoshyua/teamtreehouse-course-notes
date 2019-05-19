const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


// create li
function createLI(text) {
  // create the list item element
  const li = document.createElement('li');
  // assign the value of text as its content
  li.textContent = text;
  // create label for checkbox
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  // set the label type to checkbox
  checkbox.type = 'checkbox';
  // add the checkbox to the parent label
  label.appendChild(checkbox);
  // then add the checkbox the created li element we did above
  li.appendChild(label);
  // add a button each list item
  const button = document.createElement('button');
  // set the label type to button
  button.textContent = 'remove';
  // append the button to our list item
  li.appendChild(button);
  // needs a return statement so we can return the list item element
  // to the handler
  return li; 
}


// submit handler
form.addEventListener('submit', (e) => {
  // cancel the browsers regular submit behaviour
  e.preventDefault();
  // store the input from the text field
  const text = input.value;
  // then clear the input with an empty string
  input.value = '';
  const li = createLI(text);
  ul.appendChild(li);
});

// set eventHandler so when remove button is clicked, name is removed
// event bubbling means though the click event is first received on the button,
// it travels up through the li to the ul
ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // remove the list item from the unordered list
    // get reference to the list item from the parentNode property
    const li = e.target.parentNode;
    const ul = li.parentNode;
    // call remove child on the ul, passing in the li
    ul.removeChild(li);
  }
});

// change is the event type
ul.addEventListener('change', (e) => {
  // console.log(e.target.checked);
  // gets the value - true if checked, false if not checked
  const checkbox = event.target;
  // save true/false into a variable
  const checked = checkbox.checked;
  // traverse to the label element, then traverse to the list item
  const listItem = checkbox.parentNode.parentNode;
  // change the class name depending on if checkbox is ticked/unticked
  // checked is a boolean (true/false)
  if (checked) {
    // if box is checked, add the class of responded
    listItem.className = 'responded';
  } else {
    // if box is unticked, empty string
    listItem.className = '';
    // better approach
    event.target.parentElement.parentElement.classList.remove("responded");
  }
});
