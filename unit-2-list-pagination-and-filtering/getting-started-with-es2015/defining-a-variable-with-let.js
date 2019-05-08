const person = {
  first_name: "Andrew",
  role: "Teacher"
}

function personDescription(person) {
  // if var is changed to const, will get a syntax error because we're trying to reassign the description in the if block
  // let will work
  // let has block-level scoping
  var description = person.first_name;
  if (person.role) {
    description = description + " is a ";
    description = description + person.role;
  }
  console.log(description);
}

personDescription(person);

// Andrew is a teacher