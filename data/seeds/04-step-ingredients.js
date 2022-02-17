
exports.seed = function(knex) {
  return knex('step_ingredients').insert([
    {step_id: 1, ingredient_id: 2, quantity: 1},
    {step_id: 3, ingredient_id: 3, quantity: 1},
    {step_id: 1, ingredient_id: 1, quantity: 1},
  ]);
};
