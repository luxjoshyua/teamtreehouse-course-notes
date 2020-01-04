const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');
form.addEventListener('submit', postData);

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
/**
 * fetch() always needs one argument; 
 * fetch('mandatory-argument.url') url to fetch as a string
 * you then chain .then() telling it to do things sequentially
 * 
 * 
 * Promise.all()
    - joins two or more promises, and returns only when all the specified promises have been completed or rejected, then do something next


// store urls to fetch in an array
const urls = [
  'https://dog.ceo/api/breeds/list',
  'https://dog.ceo/api/breeds/image/random'
];

// use map() to perform a fetch and handle the response for each url
Promise.all(urls.map(url =>
  fetch(url)
    .then(checkStatus)                 
    .then(parseJSON)
    .catch(logError)
))
.then(data => {
  // do something with the data
})
 */


// create a reusable fetch function
function fetchData(url) {
    // return a promise object once the data is retrieved from the server
    return fetch(url)
        // check the data is pulling as you expected
        // .then(res => console.log(res))

        // if the fetch promise is fulfilled, 
        // 1. first check the status of the response, 
        // 2. then parse the result to json, 
        // 3. then catch any errors
        .then(checkStatus)

        // then parse the result to json
        .then(res => res.json())

        // .catch handles any errors 
        .catch(error => console.log('Looks like there was a problem', error))
}


// waits for both fetch promises to resolve before continuing on, then returns one promise from the two passed to it
// Promise.all is an all or nothing operation, meaning it will reject if any of the promises passed to it fail
Promise.all([
        fetchData('https://dog.ceo/api/breeds/list'),
        fetchData('https://dog.ceo/api/breeds/image/random')
    ])

    .then(data => {
        // assign each object to a variable, using their array index
        const breedList = data[0].message;
        const randomImage = data[1].message;

        generateOptions(breedList);
        generateImage(randomImage);
    })


// fetch the master breeds list
/* fetchData('https://dog.ceo/api/breeds/list')
    // .then(response => response.json()) // is already being parsed above now
    // .then(data => console.log(data))
    .then(data => generateOptions(data.message))


// returns a promise object
fetchData('https://dog.ceo/api/breeds/image/random')
    // check it's working, get the feed
    // .then(response => response.json())
    // do something with the json data, check it's working
    // .then(data => console.log(data.message))
    .then(data => generateImage(data.message))

*/


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
    // if the response from the Promise is ok, normally indicated by status 200
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        // reject the promise
        return Promise.reject(new Error(response.statusText));
    }
}



function generateOptions(data) {
    // iterate over the array, return an option element for each item in the array
    const options = data.map(item => `
        <option value='${item}'>${item}</option>
    `).join(''); // .join removes the commas that .map inserts into each item in the array
    // setup the select dropdown
    select.innerHTML = options;
}

// Separating the functions out helps to keep the code modular

function generateImage(data) {
    const html = `
        <img src="${data}" alt>
        <p>Click to view images of ${select.value}s</p>
    `;
    card.innerHTML = html;
}

function fetchBreedImage() {
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');

    // fetchData returns a promise that is resolved once the data is fetch from the server
    // use `` because we need to interpolate the value of the breed variable in the URL
    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            img.src = data.message;
            img.alt = breed;
            p.textContent = `Click to view more ${breed}s`;
        })
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// listen for change events on the select menu, pass the fetchBreedImage as the callback
select.addEventListener('change', fetchBreedImage);

// call click event listener on card, pass fetchBreedImage as the callback
card.addEventListener('click', fetchBreedImage);



// ------------------------------------------
//  POST DATA
// ------------------------------------------

// e = event
function postData(e) {

    e.preventDefault();
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    const config = {
        // method is the type of request, GET or POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            // ES6 allows you to write the object name the same whenever the key and value are the same
            // name: name,
            name,
            // comment: comment
            comment
        })
    }

    fetch('https://jsonplaceholder.typicode.com/comments', config)

        // check it's returning correctly
        .then(checkStatus)

        // parse the result to json
        .then(res => res.json())

        // handle the data
        .then(data => console.log(data)) // check the data the user enters, console logs the object

}