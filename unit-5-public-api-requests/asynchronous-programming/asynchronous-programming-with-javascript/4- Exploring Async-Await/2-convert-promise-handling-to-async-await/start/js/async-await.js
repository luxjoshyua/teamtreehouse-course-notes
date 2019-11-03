/**
 * Async tells the function to operate asynchronously
 * Async alaways returns a promise, with that promise resolving with the value
 * returned by the async function, or rejecting with an error thrown from within
 * the function
 * 
 * Only use await keyword within functions marked async
 

// Anonymous async function
const getData = (async function () {
  const response = await fetch('...');
})();

// Async function assignment
const getData = async function () {
  const response = await fetch('...');
};

// Arrow functions
const getData = async () => {
  const response = await fetch('...');
};

// Async Function as an argument
btn.addEventListener('click', async () => {
  const response = await fetch('...');
});

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

fetchData('dog.ceo/dog-api/breeds')
  .then(data => console.log(data))

*/

const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests
async function getPeopleInSpace(url) {
  const peopleResponse = await fetch(url);
  // fetch the URL, then await the json response
  const peopleJSON = await peopleResponse.json();

  // map performs an async opreation on every item in the array, and assign the results to const profiles
  const profiles = peopleJSON.people.map(async person => {
    const craft = person.craft;
    const profileResponse = await fetch(wikiUrl + person.name);
    const profileJSON = await profileResponse.json();
    // ... spread operator copies all the properties from the profileJSON object along with
    // the craft property and object onto the new object {}
    return {
      ...profileJSON,
      craft
    };
  });

  // the value of Promise.all is the result of each of the person map calls; it combines it all together
  // it waits for the aggregated promise to resolve into a single promise, before it returns the data
  return Promise.all(profiles);

}


// Generate the markup for each profile
function generateHTML(data) {
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

// when using await, need to include async in the function
btn.addEventListener('click', async (event) => {
  event.target.textContent = "Loading...";
  // getPeopleInSpace returns a Promise, so you need to await the results, hence include await keyword in front of it
  const astros = await getPeopleInSpace(astrosUrl);
  generateHTML(astros);
  event.target.remove();

});