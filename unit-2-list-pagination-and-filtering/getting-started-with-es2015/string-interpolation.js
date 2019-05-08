let name = 'Gary';

// ${} marks the dynamic value in the template literal
`Hello, ${name}, nice to see you.`

console.log(name);
// Hello, Gary, nice to see you. 
// `I'll be there at ${2 * 3} o'clock.` can do maths in string interpolation too

function like(thing) {
  return 'I like ' + thing;
}

// const sentence = `<p>` + like(`apples`) + `, but ` + love(`oranges`) + `.</p>`;
// does the same as the above, just shorter
const sentence = `<p>${like('apples')}, but ${love('oranges')}.</p>`;

// document.querySelector('.interpolation').innerHTML = sentence;
// I like apples

function love(thing) {
  return `I love ${thing}`;
}

console.log(sentence);
// I like apples, but I love oranges


// Example two
const cost = 8;
const unitsPurchased = 100;

let total = `Total cost is ${cost * unitsPurchased}.`
console.log(total);
// Total cost is 800

// Example three
let name = "Smith";

function formalName(title, name) {
  return `${title} ${name}`;
}
console.log(`Hello ${formalName("Mrs.", name)}, How are you?`);
// Hello Mrs. Smith, How are you?

// Example four

const name = "Dave";
let message = "Hello " + name + ". How are you?";

// rewritten as a template literal
const name = "Dave";
let message = `Hello ${name}. How are you?`; 