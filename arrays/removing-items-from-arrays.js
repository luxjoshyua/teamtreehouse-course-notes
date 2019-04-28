.shift()
var numbers = [1, 2, 3, 4, 5, 6]; 
numbers.shift(); 
// 1 is removed
var firstItem = numbers.shift(); 
// returns 1
// now firstItem variable holds the number 1

.pop()
var numbers = [1, 2, 3, 4, 5, 6]; 
numbers.pop(); 
// 6 is removed
var lastItem = numbers.pop();
// returns 6 
// now lastItem variable holds the number 6


var nums = [1, 2, 3, 4, 5]
nums.length
// 5
nums.push(6);
// nums = 1, 2, 3, 4, 5, 6
nums.push(7, 24, 31, 55);
// nums = 1, 2, 3, 4, 5, 6, 7, 24, 31, 55
nums.pop(); 
// 55 is removed from the end of the array
nums.unshift(0);
// 0 is added to the front of the array
// nums = 0, 1, 2, 3, 4, 5, 6, 7, 24, 31
nums.shift();
// 0 is removed from the front of the array
nums.shift();
// 1 is removed from the front of the array
nums.shift();
// 2 is removed from the front of the array

// store var scores into total scores
var scores = [76, 79, 85, 87, 89, 90, 99];
var totalScores = scores.length;
// now scores.length is saved into totalScores