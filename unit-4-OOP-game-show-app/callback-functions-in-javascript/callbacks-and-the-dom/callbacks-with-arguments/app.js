 // Callbacks with arguments

function callbackFunction(arg1, arg2) {
    // do something
}

const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function makeGreen(element) {
    element.style.backgroundColor = "green"; 
}

function addStyleToElement(element, callback) {
    callback(element);
}

// div1 is the first argument, makeRed is the second
addStyleToElement(div1, makeRed); // makeRed becomes the callback function in the addStyleToElement function
addStyleToElement(div2, makeBlue);
addStyleToElement(div3, makeGreen);