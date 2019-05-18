/* add a class of highlight to a p element that's an immediate previous sibling
of the button being clicked
previousElementSibling syntax

prevNode = elementNodeReference.previousElementSibling

*/

var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.previousElementSibling.className = 'highlight';
  }
});

ul.removeElement(ul.children[0]);
// is functionally the same as
ul.removeElement(ul.firstElementChild);

// using DOM traversal, assign all children of the ul to the constant lis
const ul = document.getElementsByClassName('ul')[0];
const lis = ul.children;

// Practice
// 1. select all child elements of section and assign them to the paragraphs variable
var section = document.querySelector('section');
var paragraphs = section.children;
// 2. change the color of each child paragraph to blue
for (let i = 0; i < paragraphs.length; i++ ) {
  paragraphs[i].style.color = 'blue';
}
