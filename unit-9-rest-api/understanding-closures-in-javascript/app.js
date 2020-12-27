// two functions are sharing this variable declared in the global scope,
// leading to problems
var count = 0;

function countBirds() {
  count += 1;
  return count + " birds";
}

function countDogs() {
  count += 1;
  return count + " dogs";
}

var birds = 3;

// outer function
function dogHouse() {
  var dogs = 8;
  console.log(birds); // 3
  console.log(dogs); // 8
  // inner function
  function showDogs() {
    console.log(dogs); // 8
  }
  return showDogs;
}

var getDogs = dogHouse();
getDogs(); // 8

console.log(birds); // 3
console.log(dogs); // undefined because dogs is scoped locally to the dogHouse function
