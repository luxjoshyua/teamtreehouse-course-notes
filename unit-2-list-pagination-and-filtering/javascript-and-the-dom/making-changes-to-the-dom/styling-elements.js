/* 
<html>
<h1 id="myHeading">JavaScript and the DOM</h1>
<p>Making a web page interactive</p>    

<html>
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
  </div>

</html>
*/

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

// makes the elements inside .list hidden on click
toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
}   else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';                          
  }                    
}); 

button.addEventListener('click', () => {
   // p.textContent = input.value + ';'   
   // functions the same as the above
   p.innerHTML = input.value + ';'   
});  




  