const Router = require('express').Router
const apiRouter = Router()

const Company = require('../models/Company')
const Job = require('../models/Job')

apiRouter.get('/jobs', function(req, res) {
  Job
    .query()
    .then(function(data) {
      res.json(data)
    })
})

apiRouter.get('/companies', function(req, res) {
  Company
    .query()
    .then(function(data) {
      res.json(data)
    })
})

module.exports = apiRouter