function greeting() {
  var person = 'Lilah';
  alert(person);
  // opens an alert dialogue with person's name in it (Lilah)
}

var person = 'George';
greeting(); 
  // opens an alert dialogue with person's name in it (George)
alert(person); 
greeting(); 
// opens an alert dialogue with person's name in it (Lilah)


var message = "Welcome!";
function setMessage() {
  message = "Go away!";
}
setMessage();
alert(message);
/* will open "Go away!" because the var keyword isn't used to declare a message variable inside the function, 
   the function overwrites the value in the global variable message */

var name = "Trish";
function setName() {
  var name = "Sarah";
}

setName();
alert(name);
// will call Trish, because only the name variable inside of the function has the value of "Sarah". That variable can't be accessed outside of that functiion.