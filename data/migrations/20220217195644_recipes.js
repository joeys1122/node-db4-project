
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name').unique().notNullable()
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.integer('step_number').unsigned().notNullable()
      tbl.string('step_instructions').notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name').notNullable()
    })
    .createTable('step_ingredients', tbl => {
      tbl.increments()
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('quantity').unsigned().notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
