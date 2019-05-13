// these are the most flexible of the selectors as they'll accept ID's, classes, tag names, and more

// returns the first element
document.querySelector()

// will return the first li element
document.querySelector("li").style.color = "purple"; 

// select with id
document.querySelector('#myHeading').style.backgroundColor = 'red'; 

// returns all elements
document.querySelectorAll()

// will return all li elements
document.querySelectorAll("li").style.color = "purple";

// select with class name
document.querySelector('.error-not-purple').style.color = "red"; 

// select with label
<html>
<h1 id="myHeading">JavaScript and the DOM</h1>
  <p id="paragraph">Making a web page interactive</p>
  <p title="label">Things that are purple:</p>
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

// select the p element with a title of label
document.querySelector('[title=label]').style.textTransform = 'uppercase';

// select with pseudo class even
const evens = document.querySelectorAll('li:nth-child(even)');

// selects even i element 2, 4, 6 etc
for ( let i = 0; i < evens.length; i+= 1 ) {
     evens[i].style.backgroundColor = 'lightgrey';
}

// select with pseudo class odd
const evens = document.querySelectorAll('li:nth-child(odd)');

// selects odd li element 1, 3, 5 etc
for ( let i = 0; i < evens.length; i+= 1 ) {
     evens[i].style.backgroundColor = 'lightcoral';
}


// Example rainbow list
<html>
<ul id="rainbow">
    <li>This should be red</li>
    <li>This should be orange</li>
    <li>This should be yellow</li>
    <li>This should be green</li>
    <li>This should be blue</li>
    <li>This should be indigo</li>
    <li>This should be violet</li>
</ul>
</html>

const listItems = document.querySelectorAll('li');

const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for (let i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}