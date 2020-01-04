const express = require('express');
const router = express.Router();
const { recipes } = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // 1. Pass all recipe data to 'index' template
  // first argument passed is the view to render
  // second argument is a locals object whose properties
  // define the variables for the view
  res.render('index', {recipes});
});

/* GET recipe page. */
router.get('/recipes/:id', function(req, res, next) {
  const recipeId = req.params.id;
  const recipe = recipes.find( ({ id }) => id === +recipeId );
  if (recipe) {
    // 2. Pass the recipe data to the 'recipe' template
    // render the {recipe} variable
    res.render('recipe', {recipe});
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
