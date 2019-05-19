// select the parent form Node
const form = document.getElementById('registrar');
// select the forms input element childNode
const input = form.querySelector('input');

// pass in submit event (e = event)
form.addEventListener('submit', (e) => {
  // cancels the browsers default submit behaviour
  e.preventDefault();
  // log whatever user enters into the input field into the console
  // console.log(input.value);
  const text = input.value;
  // reset the input to an empty string, so the name entered is cleared from the input field
  input.value = '';
  // select ul element
  const ul = document.getElementById('invitedList');
  // create li element
  const li = document.createElement('li');
  // create textContent for the li element
  li.textContent = text;
  // append the created li element to the parent ul element
  ul.appendChild(li);

});
