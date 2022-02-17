const db = require('../data/db-config');

const getRecipe = () => {
  return db('recipes');
}

module.exports = {
  getRecipe,
}