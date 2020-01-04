// export the function to app.js using module.exports
// require it in app.js by using const double = require('./double');
// an outer function that returns an inner function is called a closure 
module.exports = (config) => {
    return (req, res, next) => {
        // number is the name of the form input in the template
        // parseFloat parses an argument (converting to string first if needed) and returns a floating number
        const num = parseFloat(req.body.number);
        // if the number isn't defined, move to the next() function
        if (req.body.number === undefined) {
            return next();
        }
        if (isNaN(num)) {
            const err = new Error('Submitted value is not a number');
            // pass the error to next
            // adding return means we make sure the function ends here
            return next(err);
        }
        const result = num * config.by;
        // create a property on the request object, store the result there
        req.multiplied = result;
        // call next so the app moves to the next function
        next();
    }
}
