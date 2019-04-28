// EXAMPLE ONE
function goToCoffeeShop(drink) {
  alert( drink + ' is on the way!');
}
// opens alert 'Espresso is on the way!'; 
goToCoffeeShop('Espresso');

// EXAMPLE TWO
// pass more than one parameter to the function
function goToCoffeeShop(drink, pastry) {
  alert( drink + 'and ' + pastry + ' is on the way!');
}
// opens alert 'Espresso is on the way!'; 
goToCoffeeShop("Espresso", "croissant");


// EXAMPLE THREE
// upper is where you pass the information to the function
function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}
// passes 6
console.log(getRandomNumber(6) );
// passes 200
console.log(getRandomNumber(200) ); 
// passes 10000
console.log(getRandomNumber(10000) ); 
// passes 2
console.log(getRandomNumber(2) ); 


// EXAMPLE FOUR

function getArea(width, length, unit) {
  var area = width * length;
  return area + " " + unit;
}

console.log(getArea(10, 20, "sq ft")); 