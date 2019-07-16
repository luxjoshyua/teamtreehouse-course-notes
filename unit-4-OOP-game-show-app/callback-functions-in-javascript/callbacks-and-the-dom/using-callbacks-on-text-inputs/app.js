// -- Using Callbacks on Text Inputs --

// element.addEventListener(eventType, callback); 
// eventType e.g. focus, click, mouseover, mouseout, keydown, keyup

/* function (event) {
  // do something
}

event => {
  // do something
} */

// Event object
// event.type // what type of event triggered the call back
// event.target // target is the element that the event was triggered on, this allows you to use the same callback for multiple types of events or elements

// Option One

const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

// use focus instead of click because tab works on focus
nameInput.addEventListener('focus', event => {
  // target is the element that triggered the event
  event.target.className = 'highlight';
}); 

// event.target accesses the element from the event object triggered by the addEventListener method

nameInput.addEventListener('blur', event => {
  // target is the element that triggered the event
  // removes the highlight when user leaves field
  event.target.className = '';
}); 

messageTextArea.addEventListener('focus', event => {
  event.target.className = 'highlight';
}); 

messageTextArea.addEventListener('blur', event => {
  event.target.className = '';
}); 

// Neater Option Two
const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => {
  event.target.className = 'highlight';
};

const blurHandler = event => {
  event.target.className = '';
}; 

nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('focus', blurHandler); 

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);