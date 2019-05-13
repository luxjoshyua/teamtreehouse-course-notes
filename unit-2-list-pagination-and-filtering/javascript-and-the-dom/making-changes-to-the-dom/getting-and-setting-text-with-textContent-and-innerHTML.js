<html>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>    
    <p class="description">Things that are purple:</p>
    <input type="text" class="description">
    <button class="description">Change list description</button>
    <ul>
      <li>grapes</li>
      <li>amethyst</li>
      <li>lavender</li>
      <li>plums</li>
    </ul>
</html>


const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
   p.textContent = input.value + ';'   
   // functions the same as the above
//    p.innerHTML = input.value + ';'   
});     
