const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const li = document.createElement('li');
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
  ul.appendChild(li);
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
