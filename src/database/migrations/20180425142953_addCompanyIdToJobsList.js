
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('jobs', function(t) {
      t.integer('companyId')
        .unsigned()
        .references('id')
        .inTable('companies')
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('jobs', function(t) {
      t.dropForeign('companyId')
       .dropColumn('companyId')
    })
};
