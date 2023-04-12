import express from 'express';
import books from './booksRouters.js';
import authors from './authorsRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({title: 'Main page'})
  });

  app.use(
    express.json(),
    books,
    authors
  )
}

export default routes;