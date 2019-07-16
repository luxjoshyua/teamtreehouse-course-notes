const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}

const randomTime = Math.random() * 4000; 

setTimeout(showSurprise, randomTime); 


// rewritten as anonymous function
const surpriseSection = document.getElementById('surprise');

const randomTime = Math.random() * 4000; 

// anonymous function
setTimeout(function () {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}, randomTime); 

// converted to arrow syntax
setTimeout( () => surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime ); 




// to cancel a callback
const timeoutID = setTimeout(callback, delay);
clearTimeout(timeoutID); // clears the timeout immediately