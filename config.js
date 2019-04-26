'use strict'

const mongoURI = process.env.MONGODB || 'mongodb://localhost:27017/api-test';
const port = process.env.PORT || 3030

module.exports = {
  port: port,
  db: mongoURI
}