'use strict'

const mongoose = require('mongoose')
const BlogSchema = require('../models/crmModel')
const blogModel = mongoose.model('blog', BlogSchema)

const createBlog = (req, res) => {
  let blog = new blogModel(req.body)
  blog.save((err, blogModel) => {
    if (err) res.send(err)

    res.json(blog)
  })
}

const getAllBlogs = (req, res) => {
  blogModel.find({}, (err, blogs) => {
    if (err) res.send(err)

    res.json(blogs)
  })
}

const getBlogById = (req, res) => {
  blogModel.findById((req.params.blogId), (err, blog) => {
    if (err) res.send(err)

    res.json(blog)
  })
}

const updateBlogById = (req, res) => {
  blogModel.findOneAndUpdate({
      _id: req.params.blogId
    },
    req.body, {
      new: true
    },
    (err, updatedBlog) => {
      if (err) res.send(err)

      res.json(updatedBlog)
    })
}

const deleteBlogById = (req, res) => {
  blogModel.findOneAndRemove({
    _id: req.params.blogId
  }, (err, deletedBlog) => {
    if (err) res.status(500).send(err)

    const response = {
      message: "Blog successfully deleted",
      id: deletedBlog._id
    };

    res.status(200).json(response)
  })
}

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById
}