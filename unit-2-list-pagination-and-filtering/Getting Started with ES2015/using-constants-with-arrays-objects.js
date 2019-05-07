// const doesn't prevent complex objects like arrays and objects from being modified, it just prevents them from being reassigned or 
// overwritten completely

// you can modify an array that's assigned as a constant. You just can't assign a NEW value (like a new array) to that variable.

const days = ["Monday"];

const person = {
    first_name: "Imogen"
}

days.push("Tuesday")

console.log(days); 
// Monday Tuesday

person.last_name = "Heap";
console.log(person);
// Object first_name: "Imogen" last_name: "Heap"

// person = {
//     first_name: "Andrew"
// }
// returns an error because you can't overwrite the const person

person.first_name = "Andrew"; 

console.log(person); 

// now person logs Andrew Heap to the console
