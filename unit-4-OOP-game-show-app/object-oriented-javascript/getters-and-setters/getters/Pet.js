/*
-- Getter --

What is a Getter method?
In JS, it's a special method used when you want to have a property that has a dynamic or computed value.
The value of the property is computed in the getter method.
*/

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  // to setup a getter, first write get then then method name
  get activity() {
    // get today's date in universal time
    // calls a new instance of the JS date object
    const today = new Date();
    // get the hour
    // returns the hour on a 24 hour clock
    const hour = today.getHours();

    if (hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }
  speak() {
    console.log(this.sound);
  }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

console.log(ernie.activity);
console.log(ernie); // returns the object


// -- Practice Creating a Getter Method --

class Student {
  constructor(gpa, credits) {
    this.gpa = gpa;
    this.credits = credits;
  }

  stringGPA() {
    return this.gpa.toString();
  }

  get level() {

    if (this.credits > 90) {
      return 'Senior';

    } else if (this.credits <= 90 && this.credits >= 61) {
      return 'Junior';

    } else if (this.credits <= 60 && this.credits >= 31) {
      return 'Sophomore';

    } else {
      return 'Freshman';
    }
  }
}

const student = new Student(3.9);