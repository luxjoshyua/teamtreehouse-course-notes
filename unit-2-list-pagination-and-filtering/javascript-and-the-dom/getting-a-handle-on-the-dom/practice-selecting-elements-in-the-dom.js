/*
-- Common Ways of Selecting Elements in the DOM --
*/

// Selecting by anything
document.querySelector(''); // selects the first element
document.querySelectorAll(''); // selects all elements

// Selecting by ID
document.getElementById('idNameHere');
document.getElementById('idNameHere').textContent = 'set the text content here';
document.getElementById('idNameHere').innerHTML = 'set the text content here';

// Selecting by Class
document.getElementsByClassName('');

// Selecting by Tag
document.getElementsByTagName('li')[0]; 

list.getElementsByTagName('li')[0].innerHTML = 'Milk'; // work the same
list.getElementsByTagName('li')[0].textContent = 'Milk'; // work the same

// 1: Select the element with the ID 'about'. 
// Store the element in the variable `about`.
const about = document.getElementById('about'); 
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
// Set the color of the <h2> elements to a different color.
const h2 = document.getElementsByTagName('h2');
// or const h2 = document.querySelectorAll('h2'); 
h2.style.color = 'purple'; 

// iterate through the h2 elements using a for loop
// access each item in the loop using i or index variable on the h2 variable
// can write i++ or i += 1
for ( let i = 0; i < h2.length; i++ ) {
  h2[i].style.backgroundColor = 'red'; 
}

// 3: Select all elements with the class '.card'. 
// Set their background color to the color of your choice.
const card = document.getElementsByClassName('card'); 
for ( let i = 0; i < card.length; i++ ) {
  card[i].style.backgroundColor = 'orange'; 
}

// 4: Select only the first <ul> in the document.
// Assign it to a variable named `ul`.
const ul = document.querySelector('ul'); 

// 5: Select only the second element with the class '.container'.
// Assign it to a variable named `container`.
const container = document.getElementsByClassName('container')[1]; 

// 6: Select all <a> elements that have a 'title' attribute. 
// Set their color value to the color of your choice.
const a = document.querySelectorAll('a[title]'); 
for (let i = 0; i < a.length; i++ ) {
  a[i].style.color = 'salmon'; 
}