exports.up = function(knex) {
  return knex.schema
    .createTable('music', table => {
        table.increments('music_id')
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('music')
}
