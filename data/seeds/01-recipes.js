
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Spaghetti Bolognese'},
    {recipe_name: 'Squash'},
    {recipe_name: 'Test'}
  ]);
};
