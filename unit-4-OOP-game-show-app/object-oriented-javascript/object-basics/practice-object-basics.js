

/* -- Step Two -- 
Add a method to the object literal called countWords(). 
countWords() should return the number of individual words in the string property. */

const myString = {
	string: "Programming with Treehouse is fun!",
  countWords: function() {
    // the `this` keyword is how an object can access properties and methods that belong to itself
    return this.string.split(' ').length;
  }
}

// another solution
const myString = {
	string: "Programming with Treehouse is fun!",
  countWords: function() {
    // the `this` keyword is how an object can access properties and methods that belong to itself
    const wordArray = this.string.split(' ');
    return wordArray.length; 
  }
}


/* -- Step Three -- 
After the object literal, create a variable called numWords and set it the return value from the countWords() method using either dot or bracket notation. */
const myString = {
	string: "Programming with Treehouse is fun!",
	countWords: function(){
		const wordArray = this.string.split(' ');
		return wordArray.length;
	}
}
// you need the parentheses () because it's a method!
const numWords = myString.countWords(); // dot notation
const numWords = myString['countWords'](); // bracket notation

/* -- Step Four -- 
After the object literal, create a new property (using dot OR bracket notation) called characters. 
This property should be set to the number of characters in the phrase held in the string property. */

const myString = {
	string: "Programming with Treehouse is fun!",
	countWords: function(){
		const wordArray = this.string.split(' ');
		return wordArray.length;
	}
}
const numWords = myString.countWords();

myString.characters = myString.string.length; 

/* -- Step Five -- 
After the object literal, change the value of myString's string property to "I love full stack JavaScript". */

const myString = {
	string: "Programming with Treehouse is fun!",
	countWords: function(){
		const wordArray = this.string.split(' ');
		return wordArray.length;
	}
}

myString.characters = myString.string.length;
myString.string = "I love full stack JavaScript"; 
console.log(myString); // check it's working
var numWords = myString.countWords();
