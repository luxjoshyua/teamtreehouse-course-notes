const express = require('express');
// setup a new router
const router = express.Router();
// require the data file so we can use it
// ES6 shorthand for objcts, same as saying const dara = require('../data/flashcardData.json').data;
const {data} = require('../data/flashcardData.json');
// ES6 shorthand for objcts, same as saying const cards = data.cards;
const {cards} = data; 


// setup a new route to randomise the questions
router.get('/', ( req, res ) => {
    // get the total number of cards we have to choose from
    const numberOfCards = cards.length;
    // randomise the card shown
    // use Math.floor to convert the number to an integer
    const flashcardId = Math.floor( Math.random() * numberOfCards );
    res.redirect( `/cards/${flashcardId}` )
}); 


// /: tells the server to treat this part of the url as a variable
router.get('/:id', (req, res) => {

    const { side } = req.query;
    const { id } = req.params;

    // if side doesn't exist, redirect to the same card with the query string added, pointing to the question side
   if ( !side ) {
        // using return stops the execution of the function after this line
        return res.redirect(`/cards/${id}?side=question`);
   } 
   
    const name = req.cookies.username; 
    const text = cards[id][side];
    const { hint } = cards[id];
    
    const templateData = { id, text, name };

    // if question on the query string, point to the answer
    if (side === 'question') {
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    // if answer on the query string, point to the question
    } else if ( side === 'answer') {
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }

    res.render('card', templateData); 
});

// export the cards router
module.exports = router; 