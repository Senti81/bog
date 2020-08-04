
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('userName')
      .notNullable();
    table.string('email')
      .unique()
      .notNullable();
    table.string('password')
      .notNullable();
    table.string('role')
      .defaultTo('USER')
    table.timestamp('created_at')
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
