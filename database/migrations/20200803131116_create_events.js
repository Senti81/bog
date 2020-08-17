
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
    table.enu('state',['NEW','PREPARING', 'OPEN', 'CLOSED', 'FINISHED'])
      .defaultTo('NEW')
    table.timestamp('created_at')
      .defaultTo(knex.fn.now());
    table.foreign('host').references('users.id')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');

};
