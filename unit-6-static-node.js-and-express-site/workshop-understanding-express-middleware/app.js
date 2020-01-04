const express = require('express');
const fav = require('./fav');
const app = express();
app.use(fav);

// Setup middleware function
// Can pass as many arguments as you want to an app.use call, or you can run individually like we have
// for the 'Two' below
// passing in '/one' will route the below to localhost:3000/one, so you'll get one, one and a half, two
// two will still log on localhost:3000
app.use('/one', (req, res, next) => {
    // console.log('One');
    req.message = 'This message made it!';
    // setup new error object 
    const err = new Error('Holy smokes!');
    // app hangs if there is no next(); included
    // always have to end middleware by either calling next() or senidng a response res.send()
    next(err);

    // pass two arguments into the function app.use call
}, (req, res, next) => {
    console.log('One and a half');
    next();
});

// Setup middleware function
app.use((req, res, next) => {
    console.log(req.message);
    console.log('Two');
    next();
});

app.use((req, res) => res.send('<h1>Express is working!</h1>'));
app.listen(3000);