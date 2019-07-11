/* -- Setters -- 
A setter is a method that sets the value of a specific property
*/


class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  get activity() {
    const today = new Date();
    const hour = today.getHours();

    if (hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }

  get owner() {
    return this._owner;
  }

  // setters always receive exactly 1 parameter: the parameter is the value of the property we'd like to set
  set owner(owner) {
    // the name of a property can never be the same as the name of a getter or setter method
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }

  speak() {
    console.log(this.sound);
  }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

// set the name of the owner
ernie.owner = 'Ashley';

// log the owner property of the ernie object to the console
console.log(ernie);


// Practice Activity: Code Challenge

// Step One: Inside the Student class, create an empty setter method called "major()"
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
    } else if (this.credits > 60) {
      return 'Junior';
    } else if (this.credits > 30) {
      return 'Sophomore';
    } else {
      return 'Freshman';
    }
  }

  // create the setter
  set major(_major) {
    /* Step Two: Inside the major() setter method, set the student's major to a backing property "_major". 
    If the student's level is Junior or Senior, the value of the backing property should be equal to the parameter passed to the setter method. 
    If the student is only a Freshman or Sophomore, set the "_major" backing property equal to 'None'. */

    // if senior or junior, set the backing property equal to _major 
    if (this.level === 'Senior' || this.level === 'Junior') {
      this._major = _major;
    } else {
      this._major = 'None';
    }
  }
}

var student = new Student(3.9, 60);