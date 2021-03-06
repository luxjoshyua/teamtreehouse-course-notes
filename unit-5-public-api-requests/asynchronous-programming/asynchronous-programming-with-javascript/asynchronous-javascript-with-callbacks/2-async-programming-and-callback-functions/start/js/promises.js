/**
 * Promise states
 *  Pending; the default state of a promise
 *  Fulfilled; the operation completed successfully
 *  Rejected; the operation failed
 * 
 * Working with promises
 *  1. Create a promise instance using the Promise() constructor
 *  2. Define what should happen when the promise is fulfilled or rejected
 *  3. Consume the value of a fulfilled promise, or provide a rejection reason for a rejected promise
 */ 



const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}

function getProfiles(json) {
  json.people.map( person => {
    getJSON(wikiUrl + person.name, generateHTML);      
  }); 
}

function generateHTML(data) {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  section.innerHTML = `
    <img src=${data.thumbnail.source}>
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.extract}</p>
  `;
}

btn.addEventListener('click', (event) => {
  getJSON(astrosUrl, getProfiles);
  event.target.remove();
});