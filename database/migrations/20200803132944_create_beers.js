
exports.up = function(knex) {
  return knex.schema.createTable('beers', (table) => {
    table.increments();
    table.integer('event_id')
      .notNullable()
      .unsigned()
      .index();
    table.integer('position')
      .notNullable()
    table.string('name')
      .notNullable();
    table.timestamp('created_at')
      .defaultTo(knex.fn.now());
    table.foreign('event_id').references('events.id')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('beers');
};
