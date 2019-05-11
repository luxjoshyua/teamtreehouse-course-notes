document.getElementsByClassName('class name here');

<html>
<h1 id="myHeading">JavaScript and the DOM</h1>
  <p id="paragraph">Making a web page interactive</p>
  <p>Things that are purple:</p>
    <ul>
      <li>grapes</li>
      <li class="error-not-purple">oranges</li>
      <li>amethyst</li>
      <li>lavender</li>
      <li class="error-not-purple">fire trucks</li>
      <li class="error-not-purple error-not-either">snow</li>
      <li>plums</li>
    </ul>
</html>


// all list items turned purple
const myList = document.getElementsByTagName('li');

for ( let i = 0; i < myList.length; i+= 1 ) {
     myList[i].style.color = 'purple';
}

// list items with class .error-not-purple change color to red
// pass error-not-purple into the method
const errorNotPurple = document.getElementsByClassName('error-not-purple');

for ( let i = 0; i < errorNotPurple.length; i+= 1 ) {
     errorNotPurple[i].style.color = 'red';
}

// list items with class .error-not-either change color to yellow
const errorNotEither = document.getElementsByClassName('error-not-either'); 

for (let i = 0; i < errorNotEither.length; i+=1) {
  errorNotEither[i].style.color = 'yellow'; 
}