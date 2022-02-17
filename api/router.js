const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  model.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.log(err);
    })
});

router.get('/:recipe_id', (req, res) => {
  model.getRecipeById(req.params.recipe_id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      console.log(err);
    })
});
module.exports = router;