/**
 * Global fetch method
 * 
 * fetch ('api.com') - takes one argument; the resource you want to fetch
 * 
 */

const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getProfiles(json) {
    const profiles = json.people.map(person => {
        const craft = person.craft;
        // need return keyword because we're now returning a promise object during each iteration of map
        return fetch(wikiUrl + person.name)
            .then(response => response.json())
            .then(profile => {
                return {
                    ...profile,
                    craft
                };
            })
            .catch(err => console.log('Error Fetching Wiki: ', err))
    });
    return Promise.all(profiles);
}

function generateHTML(data) {
    // function needs to iterate over the array of objects and create html for each object in the array - use map iteration method
    data.map(person => {
        const section = document.createElement('section');
        peopleList.appendChild(section);
        section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
    });
}

btn.addEventListener('click', (event) => {
    event.target.textContent = "Loading...";
  
    fetch(astrosUrl) // fetch returns a promise, then is fulfilled once it has fetched
      .then( response => response.json() ) // parses the response to json
      .then(getProfiles) // promises get executed in sequence
      .then(generateHTML)
      .catch( err => { // .catch() handles rejected promises
        peopleList.innerHTML = '<h3>Something went wrong!</h3>';
        console.log(err);
      })
      .finally( () => event.target.remove() )
  });