const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) {
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);

  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  li.appendChild(editButton);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  li.appendChild(removeButton);

  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const li = createLI(text);
  ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
});

ul.addEventListener('click', (e) => {
  // if click element is a button
  if (e.target.tagName === 'BUTTON') {
    // make code more readable by replacing e.target with button constant
    const button = e.target;
    // group declarations together to make more readable
    const li = e.target.parentNode;
    const ul = li.parentNode;
    // if button text content is remove
    if (button.textContent === 'remove') {
      // then run this code

      ul.removeChild(li);
    } else if (button.textContent === 'edit') {
        // check edit button is registering
        console.log('edit');

    }
  }
});
