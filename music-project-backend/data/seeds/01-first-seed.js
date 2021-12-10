
exports.seed = function(knex) {
  return knex('music').insert([
    {colName: 'rowValue1'},
    {colName: 'rowValue2'},
    {colName: 'rowValue3'}
  ])
}
