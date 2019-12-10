const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// turn off parser extended option
app.use(bodyParser.urlencoded({
    extended: false
}));

// use the cookie-parser middleware
app.use(cookieParser());

app.set('view engine', 'pug');


// use next middleware
app.use((req, res, next) => {
    console.log('One');
    // think of next() like the next step on the conveyor belt
    next(); 
},
(req, res, next) => {
    console.log('One and a half');
    // think of next() like the next step on the conveyor belt
    next(); 
}); 

app.use((req, res, next) => {
    console.log('Two');
    // think of next() like the next step on the conveyor belt
    next(); 
})


app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) { // if a name is entered, do this
        // because the key and the value are the same, don't need name: name, use ES6 object shorthand
        res.render('index', {
            name
        });
    } else { // else redirect to route localhost:3000/hello
        res.redirect('/hello');
    }
});

// serve the cards route
app.get('/cards', (req, res) => {
    // render the card template
    res.render('card', {
        prompt: "Who is buried in Grant's tomb",
        hint: "Think about whose tomb it is",
        colors
    });
});

// setup new route called hello
app.get('/hello', (req, res) => {
    // declare the name, save to variable
    const name = req.cookies.username;
    // check if name is present or not
    if (name) {
        res.redirect('/');
    } else {
        // tell server to render the hello route
        res.render('hello');
    }
});

app.post('/hello', (req, res) => {
    // set a cookie on the client
    res.cookie('username', req.body.username);
    // implement a redirect
    res.redirect('/');
});

// add new post route
app.post('/goodbye', (req, res) => {
    // clear the cookies username value
    res.clearCookie('username');
    // then redirect to hello route
    res.redirect('/hello');
}); 

// setup a new template called sandbox, experiment
// /sandbox
// First Name | Last Name

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});