
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'olive oil'},
    {ingredient_name: 'sauce'},
    {ingredient_name: 'squash'}
  ]);
};
