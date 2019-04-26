'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String
})

module.exports = blogSchema
