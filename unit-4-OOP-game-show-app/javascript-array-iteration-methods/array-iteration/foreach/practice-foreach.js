// 1: Using forEach, add together all the elements in the numbers array, and store the total in the variable total.
const numbers = [1, 2, 3, 4, 5];
let total = 0;

// Write loop here:
numbers.forEach(number => {
    total += number;
});

// could also be writen
numbers.forEach(number => total += number);

console.log(total);

// 2: Using forEach, copy only the first 2 characters of each string in the days array and store the abbreviations in the dayAbbreviations array
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
days.forEach(day => {
    const dayAbbreviation = day.substring(0, 2);
    // const dayAbbreviation = day.slice(0, 2); also works
    // const dayAbbreviation = day.substr(0, 2); 
    dayAbbreviations.push(dayAbbreviation);
});

// can also be written as
days.forEach(day => dayAbbreviations.push(day.slice(0, 2)));

console.log(dayAbbreviations);


// 3. Using forEach, turn the number strings from the stringPrices array into floats and add them all, storing the total in the variable priceTotal.
const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

// priceTotal should be: 32.92
// Write your code below
stringPrices.forEach(stringPrice => {
    priceTotal += parseFloat(stringPrice); 
});

// teachers solution
stringPrices.forEach(stringPrice => {
    const price = parseFloat(stringPrice);
    priceTotal += price; 
}); 

// even shorter
stringPrices.forEach(stringPrice => priceTotal += 
    parseFloat(stringPrice)); 

console.log(priceTotal); 


// 4. The split method turns a string into an array. In the case of alphabet below, each letter of the string is being turned into an element in an array by split. 
// Using forEach, iterate over the alphabet array and store each letter in the array noel except for the L character.
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

// noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Write your code below
alphabet.forEach(letter => {
    if (letter === 'L') {
        return false
    } else {
        noel.push(letter); 
    }
}); 

// teacher's neater solution
alphabet.forEach(character => {
    if (character !== 'L') {
        noel.push(character)
    }
}); 

console.log(noel); 

// 5. Using forEach, iterate over the percentages and store all percentages over 50 percent in the array upperRange.

const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

// upperRange should be: [67, 90, 82, 99]
// Write your code below

// percentage is the current value parameter
percentages.forEach(percentage => {
    if ( percentage > 50 ) {
        upperRange.push(percentage); 
    }
});

console.log(upperRange); 

// 6. Using forEach, iterate over the colors array and store the hex colors that start with the letter F (ex. #FF0000) in the array filteredColors.

const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

// filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
// Write your code below
colors.forEach(color => {
    if ( color.charAt(1) === 'F' ) {
        filteredColors.push(color); 
    }
}); 

// also works
colors.forEach(color => {
    if ( color[1] === 'F' ) {
        filteredColors.push(color); 
    }
}); 

console.log(filteredColors); 

// 7. Using forEach, capitalize all the strings in the months array and store them in the array capitalizedMonths.

const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// Write your code below

months.forEach(month => {
    const x = month.toUpperCase();
    capitalizedMonths.push(x); 
}); 

console.log( capitalizedMonths ); 


// teachers solution
months.forEach(month => {
    const capitalizedMonth = month.toUpperCase();
    capitalizedMonths.push(capitalizedMonth);
});

// teachers neater solution
months.forEach(month => capitalizedMonths.push(month.toUpperCase())); 

console.log(capitalizedMonths); 
