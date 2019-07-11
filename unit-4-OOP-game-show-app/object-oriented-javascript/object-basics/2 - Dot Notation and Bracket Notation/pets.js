const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

console.log(ernie.age); // 1 (dot notation)
console.log(ernie['age']); // 1 (bracket notation)

console.log(ernie.breed); // pug (dot notation)
console.log(ernie['breed']); // pug (bracket notation)

ernie.bark(); // call the bark function (dot notation)
ernie['bark'](); // call the bark function (bracket notation)

var prop = 'breed';
ernie[prop]; 

ernie.age = 2;
ernie['age'] = 2;
ernie.color = 'black'; // add a new property to the object

console.log(ernie); 


/* -- Object Literals Referring to Themselves (this) --
to access the value of properties inside a method, can use the `this` keyword instead of the variable name.
This way, you always access the property values attached to that particular object */

const teacher = {
   firstName : "Ashley",
   lastName : "Boucher",
   printName: function(){
      console.log(this.firstName + this.lastName);
   }
}



