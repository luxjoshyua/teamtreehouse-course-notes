// if (time = < 0 || numberOfLives === 0) {
//     endGame();
// }

if (isLoggedIn && isAdmin) {
    showSecretPage();
}

/* -- Short Circuit Evaluation
    - stopping code execution as soon as possible
    - often used to quickly assign a value or execute code
*/

console.log(3 === 3 && 'a' === 'a');
// will log true, 

console.log(3 === 3 || 'cow' || 'chicken');
// will log true, because first statement is truthy (3 = 3); 

console.log(3 === 4 || 'cow' || 'chicken');
// will log 'cow'

console.log(3 === 4 || false || 0);
// if all values are falsy, the last one will be returned
// 0 will be logged


function isAdult(age) {
    if (age && age >= 18) {
        return true;
    } else {
        return false;
    }
}

// rewritten using short-circuiting
function isAdult( age ) {
    return age && age >= 18;
}

console.log(isAdult(15)); 
// will log false, because 15 is less than 18

console.log(isAdult(33)); 
// will log true

function countToFive(start) {
    for (var i = start; i <= 5; i += 1) {
        console.log(i);
    }
}

countToFive(2); 
// logs 2, 3, 4, 5

function countToFive(start) {
    start = start || 1; 
    for (var i = start; i <= 5; i += 1) {
        console.log(i);
    }
}

// will log now even if there is no expression, as start = start or 1, 1 then loops through to five
countToFive(); 
// logs 1, 2, 3, 4, 5


function greet(name) {
    name && console.log('Hi, ' + name + '!');
}

// if name is provided, second operand will be evaluated
greet();


function greet(name) {
    name && console.log('Hi, ' + name + '!');
}

// if name is provided, second operand will be evaluated
greet("Sam");