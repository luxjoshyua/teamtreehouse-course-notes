/* 
Corresponding HTML
<html>
    <body>
        <h1 id="myHeading">JavaScript and the DOM</h1>
        <p>Making a web page interactive</p>
        <button id="toggleList">Hide list</button>
        <div class="list">
            <p class="description">Things that are purple:</p>
            <input type="text" class="description">
            <button class="description">Change list description</button>
            <ul>
                <li>grapes</li>
                <li>amethyst</li>
                <li>lavender</li>
                <li>plums</li>
            </ul>

            <input type="text" class="addItemInput">
            <button class="addItemButton">Add item</button>
        </div>
    </body>
</html>
*/

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

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
});

addItemButton.addEventListener('click', () => {
  // once the li element is created, can add text to it using .textContent
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
});

