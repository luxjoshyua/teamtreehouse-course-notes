/* -- Listening for events with addEventListener --
Syntax
[] means optional parameter
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only

-- Common events --
onclick = the user clicks an HTML element
onmouseover = the user moves the mouse over an HTML element
onmouseout = the user moves the mouse away from an HTML element
onchange = an HTML element has been changed
onkeydown = the user pushes a keyboard key
onload = the browser has finished loading the page
*/

  

// type and callBack function
// select all list items
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i += 1) {
  // when the mouse enters the elements boundaries, change to uppercase
  listItems[i].addEventListener('mouseover', () => {
      // .textContent gets the textContent of the element you've selected above, in this case the first 	li element
      listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });

  // when the mouse enters the elements boundaries, change to uppercase
  listItems[i].addEventListener('mouseout', () => {
      // .textContent gets the textContent of the element you've selected above, in this case the first li element
      listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
}
