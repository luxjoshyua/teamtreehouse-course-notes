
/*
  -- Exercise One --

- Step One: alter the event handler on line 4 to run when the form is submitted,
not just when the submit button has been clicked.
- Step Two: alter the callback function to use the event object. Using the event
object, ensure that the browser's default form submit behaviour does not occur when
form is submitted.

*/

const form = document.querySelector('form');
const submitButton = form.querySelector('[type=Submit]');

submitButton.addEventListener('click', () => {

});

// note e is the short var reference for event object which will
// be passed to event handlers
// becomes
form.addEventListener('submit', (e) => {
  e.preventDefault();
})


/*
 -- Exercise Two --
 The div with the ID colorDiv should change red when the red button is clicked, and blue when the blue button is clicked. Currently, though, only the red button is working. Can you figure out how to alter the javascript code without adding any lines to the blue button's event handler?
 Make sure a reference to colorDiv is held in a constant named colorSquare.
 */


 const redButton = document.getElementById('redButton');
 const blueButton = document.getElementById('blueButton');

 redButton.addEventListener('click', (e) => {
   const colorSquare = document.getElementById('colorDiv');
   colorSquare.style.backgroundColor = 'red';
 });

 blueButton.addEventListener('click', (e) => {
   colorSquare.style.backgroundColor = 'blue';
 })

 // becomes
 // const redButton = document.getElementById('redButton');
// const blueButton = document.getElementById('blueButton');
const colorSquare = document.getElementById('colorDiv');

redButton.addEventListener('click', (e) => {
 // const colorSquare = document.getElementById('colorDiv');
 colorSquare.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', (e) => {
 colorSquare.style.backgroundColor = 'blue';
})
