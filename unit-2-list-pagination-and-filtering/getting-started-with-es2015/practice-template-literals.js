const mars = {
  name: 'planet',
  diameter: '4,212 mi',
  moons: '2',
  temp: '-153 to 20 °C',
  orbitDays: '687',
  orbitYears: '1.9',
  description: 'The fourth planet from the Sun and the second smallest planet in the solar system. Named after the Roman god of war, planet is also often described as the “Red Planet” due to its reddish appearance. It\'s a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.',
  facts: 'planet has the largest dust storms in the solar system. They can last for months and cover the entire planet. On planet the Sun appears about half the size as it does on Earth.'
};


// this function takes planet as the argument
// it prints out the string
function createPlanetHTML(planet) {
  // convert the multiline string to a template literal to make it neater and easier to read
  // use interpolation to display the objects property values
  return '<div class="card">' +
    '<div>' +
    '<img src="img/' + planet.name + '.jpg" alt="' + planet.name + '">' +
    '</div>' +
    '<h2>' + planet.name + '</h2>' +
    '<p>' + planet.description + '</p>' +
    '<h3>Planet Profile</h3>' +
    '<ul>' +
    '<li><strong>Diameter: </strong>' + planet.diameter + '</li>' +
    '<li><strong>Moons: </strong>' + planet.moons + '</li>' +
    '<li><strong>Temperature: </strong>' + planet.temp + '</li>' +
    '<li><strong>Orbit Period: </strong>' + planet.orbitDays + ' days ' + '(' + planet.orbitYears + ' years)' + '</li>' +
    '</ul>' +
    '<p>' + planet.facts + '</p>' +
    '</div>';
}

// rewritten as a template literal
const planets = [
  {
    name: 'Saturn',
    diameter: '72,367.4 mi',
    moons: '62',
    temp: '-178 °C',
    orbitDays: '10,756',
    orbitYears: '29.5',
    description: 'Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei.',
    facts: 'Saturn was known to the ancients, including the Babylonians and Far Eastern observers. It is named for the Roman god Saturnus, and was known to the Greeks as Cronus.'
  },
  {
    name: 'Mars',
    diameter: '4,212 mi',
    moons: '2',
    temp: '-153 to 20 °C',
    orbitDays: '687',
    orbitYears: '1.9',
    // description: 'The fourth planet from the Sun and the second smallest planet in the solar system. Named after the Roman god of war, planet is also often described as the “Red Planet” due to its reddish appearance. It\'s a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.',
    // replace with backticks ``, means we don't need the \' before the s
    description: `The fourth planet from the Sun and the second smallest planet in the solar system. Named after the Roman god of war, planet is also often described as the “Red Planet” due to its reddish appearance. It's a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.`,
    facts: 'planet has the largest dust storms in the solar system. They can last for months and cover the entire planet. On planet the Sun appears about half the size as it does on Earth.'
  }
]



function createPlanetHTML(planet) {
  // convert the multiline string to a template literal to make it neater and easier to read
  // use interpolation to display the objects property values
  // 1. create the template literal by enclosing the function with two `` backticks
  // 2. delete all the single quotes and plus symbols between the backticks
  // 3. 
  return `<div class="card">
                <div>
                <img src="img/${planet.name}.jpg" alt="${planet.name}">
                </div>
                <h2>${planet.name}</h2>
                <p>${planet.description}</p>
                <h3>planet Profile</h3>
                <ul>
                <li><strong>Diameter: </strong>${planet.diameter}</li>
                <li><strong>Moons: </strong>${planet.moons}</li>
                <li><strong>Temperature:  </strong>${planet.temp}</li>
                <li><strong>Orbit Period: </strong> ${planet.orbitDays} days ${planet.orbitYears} years</li>
                </ul>
                <p>${planet.facts}</p>
            </div>`;
}

// passes the object planet as the argument
document.querySelector('body').innerHTML = createPlanetHTML(mars);

// will return the saturn object literal
document.querySelector('body').innerHTML = createPlanetHTML(saturn);

// returns both objects in the array
document.querySelector('body').innerHTML = planets.map(planet => createPlanetHTML(planet)).join('');