const db = require('../data/db-config');

const getRecipes = () => {
  return db('recipes');
}

const getRecipeById = async (recipe_id) => {
  const steps = await db('steps as s')
    .join('recipes as r', 's.recipe_id', 'r.recipe_id')
    .select('r.*', 's.step_id', 's.step_number', 's.step_instructions')
    .where('r.recipe_id', recipe_id)

  const ingredients = await db('step_ingredients as si')
    .join('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .join('steps as s', 'si.step_id', 's.step_id')
    .select('i.*', 'si.quantity')
    .where('s.step_id', steps[0].step_id)

  const recipe = {
    recipe_id: steps[0].recipe_id,
    recipe_name: steps[0].recipe_name,
    created_at: Date.now(),
    steps: steps[0].step_id
      ? steps.map(step => {
        return {
          step_id: step.step_id,
          step_number: step.step_number,
          step_instructions: step.step_instructions,
          ingredients: ingredients
        }
      })
      : []
  }

   return recipe;
}

module.exports = {
  getRecipes,
  getRecipeById
}