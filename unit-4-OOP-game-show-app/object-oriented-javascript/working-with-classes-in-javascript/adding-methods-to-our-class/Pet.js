class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  // this is the new method
  speak() {
    console.log(this.sound);
  }
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const sam = new Pet('dog', 4, 'labrador', 'woof');

ernie.speak();
vera.speak();


// Second Example
class Student {
  // constructor methods aren't required inside of a class
  constructor(gpa, courses) {
    // `this` keyword indicates that a property is available on members of the class
    this.gpa = gpa;
    this.courses = courses;
  }

  printGPA() {
    console.log(this.gpa);
  }
}

// note how creating an instance of a class happens outside the class
const ashley = new Student(3.9);


/* Practice Objects
Call the changeUsername() method on the user1 object. The new username should be "TreehouseStudent2" */

class User {
  constructor(email, username, birthday) {
    this.email = email;
    this.username = username;
    this.birthday = birthday;
  }

  changeUsername(username) {
    this.username = username;
    user1.username = 'TreehouseStudent2'; // dot notation
    user1['changeUsername']("TreehouseStudent2"); // bracket notation
  }
}

var user1 = new User('JavaScriptStudent@teamtreehouse.com', 'JSUser1', '1/08/1991');