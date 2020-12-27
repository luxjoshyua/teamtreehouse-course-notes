// Written better
function countBirds() {
  var count = 0;
  function counter() {
    count += 1;
    return count + " birds";
  }
  // saves and uses the private scope, thus count will increment by 1 instead of staying fixed at 0
  return counter;
}

// can be rewritten in shorter syntax and with more meaningful function name
function makeBirdCounter() {
  var count = 0;
  return function () {
    count += 1;
    return count + " birds";
  };
}

var birdCounter = makeBirdCounter();
birdCounter(); // 1
birdCounter(); // 2
birdCounter(); // 3
birdCounter(); // 4

// has its own private scope separate to birdCounter
// because everytime our counter makeer function runs,
// a new scope is created and all those count variables
// are private values, because every scope is separate.
var birdCounter2 = makeBirdCounter();
birdCounter2(); // 1
birdCounter2(); // 2
birdCounter2(); // 3
birdCounter2(); // 4

function makeDogCounter() {
  var count = 0;
  return function () {
    count += 1;
    return count + " dogs";
  };
}

var dogCounter = makeDogCounter();
dogCounter(); // 1
dogCounter(); // 2
dogCounter(); // 3
dogCounter(); // 4

function makeCounter(noun) {
  var count = 0;
  return function () {
    count += 1;
    return count + " " + noun;
  };
}

var birdCounter = makeCounter("birds");
birdCounter(); // 1 birds
birdCounter(); // 2 birds
var dogCounter = makeCounter("dogs");
dogCounter(); // 1 dogs
dogCounter(); // 2 dogs
var fishCounter = makeCounter("fish");
fishCounter(); // 1 fish
fishCounter(); // 2 fish
