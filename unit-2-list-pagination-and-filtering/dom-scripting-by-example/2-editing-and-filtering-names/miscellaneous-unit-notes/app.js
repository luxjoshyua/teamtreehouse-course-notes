/*

-- Exercise One --
const card = document.querySelector('.card');
const footer = document.querySelector('footer');
...
card.insertBefore(div, footer);

Given the code above, the insertBefore method will:

a = insert a footer before a div element as a child of .card
b = insert a div before a footer element as a child of .card
c = insert div and footer elements as a children of .card

Answer is b!

 */

/*
 -- Exercise Two --

 There are three list items in the index.html file. 
 We want to be able to enter a 0, 1 or 2 in the text field to embolden the list item with the corresponding index. 
 Can you figure out what condition to put into the if statement to make this code work?

Solution
compare the current loop index with the value that the user has placed in the input box.
And to make it easy, the challenge has already created a variable named index and assigned
it with the numeric value produced by converting the input field. 
You just need to test if the loop index is equal to the user's "index".

both i and index are numeric values that can be compared

*/

const laws = document.getElementsByTagName('li');
const indexText = document.getElementById('boldIndex');
const button = document.getElementById('embolden');

button.addEventListener('click', (e) => {
    // .value of a variable means looking directly at the information
    // that is stored within the labelled space
    const index = parseInt(indexText.value, 10);
  
    for (let i = 0; i < laws.length; i += 1) {
       let law = laws[i];
  
       // replace 'false' with a correct test condition on the line below
       // i represents a number (0, 1, 2)
       if (i == index) {
           law.style.fontWeight = 'bold';
       } else {
           law.style.fontWeight = 'normal';
       }
    }
});
