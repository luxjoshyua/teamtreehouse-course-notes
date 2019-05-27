/* <h1>Buttons</h1>
    <button>Button 0</button>
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
    <button>Button 5</button>
    <button>Button 6</button>
    <button>Button 7</button>
    <button>Button 8</button>
    <button>Button 9</button>
*/
const buttons = document.getElementsByTagName("button");

// change var i = 0; to let i = 0; because let works in the local scope
// for(var i = 0; i < buttons.length; i++) {
// let makes the i variable distinct for each cycle through the loop


// 1. variable in the global scope called i
// 2. loop through code that creates 10 event handlers, one for every button
// 3. Same time, incrementing the value of the global i variable, so when a handler is created the global i variable changes, until it reaches 10 (the length of the array)
// 4. The script that creates the listener is not capturing the value from the loop, it is putting a variable there instead. 
// This variable refers to the value of the global variable, not for each iteration of the for loop. Now when you click any button, it is going to grab the final value of i, which is 10. 
for (let i = 0; i < buttons.length; i++) {
  // when the loop is complete, the value of i is 10
  const button = buttons[i];
  button.addEventListener("click", function () {
    // when clicking the button, the alert displays the last value of i
    alert("Button " + i + " Pressed");
  });
}