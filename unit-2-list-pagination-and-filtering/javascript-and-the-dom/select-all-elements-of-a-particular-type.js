document.getElementsByTagName('element here!'); 

// returns a collection of h1 elements, but in this example there is only 1, select the first in the collection
const myHeading = document.getElementsByTagName('h1')[0]; 


// => <ul id="a">
const el = document.getElementById('a');

// => [<p>, <p>, <p>]
// returns a collection of elements
const els = document.getElementsByTagName('p');

// access the first p element on the page using its index
// access it like you would an element in an array
let el = els[0];

// loop through each one
for (let i = 0; i < els.length; i += 1) {
  els[i] // do something with each element
}

// Example app
<html>
<h1 id="myHeading">JavaScript and the DOM</h1>
  <p id="paragraph">Making a web page interactive</p>
  <p>Things that are purple:</p>
    <ul>
      <li>grapes</li>
      <li>amethyst</li>
      <li>lavender</li>
      <li>plums</li>
    </ul>
</html>

// select li elements
const myList = document.getElementsByTagName('li');

// loop through the li elements
for ( let i = 0; i < myList.length; i+= 1 ) {
    // make each one purple
     myList[i].style.color = 'purple';
}






