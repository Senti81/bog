
exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.integer('host')
      .notNullable()
      .unsigned()
      .index();
    table.string('date')
    table.string('motto');
    table.string('description')
    table.string('location')
    table.integer('state')
      .defaultTo(0)
    table.timestamp('created_at')
      .defaultTo(knex.fn.now());
    table.foreign('host').references('users.id')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');

};
