class Pet {
  constructor(animal, age, breed) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

// setting the animal, age, breed values
const ernie = new Pet('dog', 1, 'pug');
console.log(ernie); // returns an object Pet with 3 key value pairs

const sam = new Pet('dog', 4, 'labrador'); 
console.log(sam); // returns an object Pet with 3 key value pairs

const francesca = new Pet('dog', 5, 'staffy'); 
console.log(francesca); // returns an object Pet with 3 key value pairs

const vera = new Pet('dog', 8, 'border collie'); 
console.log(vera); // returns an object Pet with 3 key value pairs


/* -- Practice Exercise --
Create a variable called student. Set it equal to a new instance of class Student. 
The student object should be instantiated with a gpa of 3.9 */

class Student {
  constructor(gpa){
      this.gpa = gpa;
  }
}
// create a new var, set equal to new instance of class Student
const student = new Student(3.9); 
