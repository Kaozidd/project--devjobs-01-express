const Router = require('express').Router
const apiRouter = Router()

apiRouter.get('/jobs', function(req, res) {
  const db = req.app.locals.db
  db
    .select()
    .table('jobs')
    .then(function(data) {
      res.json(data)
    })
})

apiRouter.get('/companies', function(req, res) {
  const db = req.app.locals.db
  db
    .select()
    .table('companies')
    .then(function(data) {
      res.json(data)
    })
})

module.exports = apiRouter