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
  
  set owner(owner) {
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }
  
  speak() {
    console.log(this.sound);
  }
} 

// setup a new class
class Owner {

  // create constructor method to initialise the name and address properties
  constructor(name, address) {
    this.name = name;
    this.address = address;


  }

  set phone(phone) {
    // use a regex to identify all non-numeric characters
    // use empty string '' to indicate any non-numeric character should replaced by that empty string
    const phoneNormalized = phone.replace(/[^0-9]/g, ''); 
    this._phone = phoneNormalized;
  }

  get phone() {
    return this._phone; 
  }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

// only pass in name and address parameters
ernie.owner = new Owner('Ashley', '123 Main Street'); 

ernie.owner.phone = '(555) 555-5555'; 
// check the properties are logging correctly
console.log(ernie.owner); 
console.log(ernie.owner.name); // log the name
console.log(ernie.owner.phone); // log the phone




