const knex = require('knex')

function dbConnect(config){
  return knex(config)
}

module.exports = dbConnect