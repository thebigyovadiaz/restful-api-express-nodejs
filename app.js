'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./src/routes/crmRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

routes(app)

module.exports = app