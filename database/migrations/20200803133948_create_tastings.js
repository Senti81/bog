
exports.up = function(knex) {
  return knex.schema.createTable('tastings', (table) => {
    table.increments();
    table.integer('event_id')
      .notNullable()
      .unsigned()
      .index();
    table.integer('user_id')
      .notNullable()
      .unsigned()
      .index();
    table.integer('beer_id')
      .notNullable()
      .unsigned()
      .index();
    table.integer('rating')
    table.string('guess')
    table.timestamp('created_at')
      .defaultTo(knex.fn.now());
    table.foreign('user_id').references('users.id')
    table.foreign('event_id').references('events.id')
    table.foreign('beer_id').references('beers.id')
    });
  };

exports.down = function(knex) {
  return knex.schema.dropTable('tastings');
};
