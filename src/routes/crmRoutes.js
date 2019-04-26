'use strict'

const controller = require('../controllers/crmController')
const routes = (app) => {

  app.route('/api/')
    .get((req, res) => {
      res.send('This is the GET method')
    })

    .post((req, res) => {
      res.send('This is the POST method')
    })

    .put((req, res) => {
      res.send('This is the PUT method')
    })

    .delete((req, res) => {
      res.send('This is the DELETE Method')
    })

  // Route Creación Nuevo Blog
  app.post('/api/newBlog', controller.createBlog)

  // Route Ver Blogs Creados
  app.get('/api/getBlogs', controller.getAllBlogs)

  // Route Ver un Blog
  app.get('/api/blog/:blogId', controller.getBlogById)

  // Route Editar un Blog
  app.put('/api/blog/:blogId', controller.updateBlogById)

  // Route Eliminar un Blog
  app.delete('/api/blog/:blogId', controller.deleteBlogById)
}

module.exports = routes