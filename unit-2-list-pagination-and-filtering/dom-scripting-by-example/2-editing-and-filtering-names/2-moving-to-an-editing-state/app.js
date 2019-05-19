const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) {
  const li = document.createElement('li');
  // turn the name entered into a HTML element
  const span = document.createElement('span');

  span.textContent = text;
  li.appendChild(span);

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
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === 'remove') {
      ul.removeChild(li);

    } else if (button.textContent === 'edit') {
      // select the span
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      // when in edit state, change text from edit to save
      button.textContent = 'save';

      // add save functionality
      // need to reverse what we did above with edit, so remove the input element
      // and replace with a span element
    } else if (button.textContent === 'save') {
      // select the input using firstElementChild property, because input
      // is the first element below the li element in the DOM
      const input = li.firstElementChild;
      // don't need to set the span's type, so remove the line below
      // input.type = 'text';
      // create span element to replace the input with
      const span = document.createElement('span');
      // set it's text content to be the value of the input
      span.textContent = input.value;
      // use the input to place the new span element into the DOM using insert before
      li.insertBefore(span, input);
      // call removeChild on the input to remove it
      li.removeChild(input);
      // change the button's text content to say edit, which is what it was
      // in the original state
      button.textContent = 'edit';
    }
  }
});
