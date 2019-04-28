/* * * INSTRUCTIONS
To run this file, go to "View" in the menu, and select "Show console",
if it doesn't appear in the window below. At the prompt in the console,
type `node doWhileLoops`.
You can clear the console by typing `clear` and pressing enter.
If your program is stuck in an infinite loop, and need to break out of the program,
you can do that by typing ctrl + C.
* * */
let i;
let text;

// 1. Write a while loop to build a string of numbers from 0 to 4, 
//    separated by spaces, and store the string in the variable `text`.
print('1st Loop:');
text = '';
// Write 1st loop here:
// initialise i before the loop starts
i = 0;
do {
  text += i + ' ';
  i += 1
} while (i <= 4)
print(text); // Should print `0 1 2 3 4 `.

// 2. Write a while loop to build a string of numbers from 1 to 5, 
//    separated by spaces, and store the string in the variable `text`.
print('2nd Loop:');
text = '';

// Write 2nd loop here:
i = 0;

do {
  text += i + ' ';
  i += 1
} while ( i <= 5 ) 

print(text); // Should print `1 2 3 4 5 `.

// 3. Write a while loop to build a string of numbers from 5 to 1, 
//    separated by spaces, and store the string in the variable `text`.
print('3rd Loop:');
text = '';

// Write 3rd loop here:
i = 5; 
do {
  text += i + ' ';
  i -= 1
} while ( i >= 0)

print(text); // Should print `5 4 3 2 1 `.

// 4. Write a while loop to build a string of numbers from 5 to 50--by 5's.
//    The numbers should be separated by spaces, and stored in the variable `text`.
print('4th Loop:');
text = '';

// Write 4th loop here:
i = 5;
do {
  text += i + ' ';
  i += 5;
} while ( i <= 50 )

print(text); // Should print `5 10 15 20 25 30 35 40 45 50 `.

// 5. BONUS CHALLENGE: Write a while loop that builds a string of random integers
// between 0 and 9. Stop building the string when the number 8 comes up.
// Be sure that 8 does print as the last character. The resulting string 
// will be a random length.
print('5th Loop:');
text = '';
// Write 5th loop here:

do {
  // don't have to initialise i before do the loop, because do while loops always run at least once
  i = Math.floor(Math.random() * 10); 
  text += i + ' ';
} while (i !== 8)

print(text); // Should print something like `4 7 2 9 8 `, or `9 0 8 ` or `8 `.

// Feel free to ignore this print function. It just formats the output a bit.
function print(text) {
  console.log(text);
  if (!text.endsWith(':')) {
    console.log('');
  }
}