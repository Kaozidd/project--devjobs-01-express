const Router = require('express').Router
const apiRouter = Router()

const Company = require('../models/Company')
const Job = require('../models/Job')

function getAllJobs(req, res) {
  Job
    .query()
    .then(function(data) {
      res.json(data)
    })
}

function getSingleJob(req, res) {
  const id = parseInt(req.params.id)
  Job
    .query()
    .findById(id)
    .then(function(j) {
      res.json(j).status(200)
    })
}

function createNewJob(req, res) {
  Job
    .query()
    .insert(req.body)
    .then(function(newJob) {
      res.json(newJob).status(200)
      console.log(
        `New ${req.body.title} job created!\n
        at location: ${req.body.location}\n
        is Full Time? ${req.body.fillTime}`
      )
    })
}

function editJob(req, res) {
  const id = parseInt(req.params.id)
  const data = req.body
  Job
    .query()
    .updateAndFetchById(id, data)
    .then(function(updatedJob) {
      res.json(updatedJob).status(200)
      console.log(
        `${req.body.title} job updated!\n
        at location: ${req.body.location}\n
        is Full Time? ${req.body.fullTime}`
      )
    })
}

function deleteJob(req, res) {
  const id = parseInt(req.params.id)
  Job
    .query()
    .deleteById(id)
    .then(function(rowsDeleted) {
      res.json({
        jobDeleted: rowsDeleted
      }).status(200)
    })
}

apiRouter
  .get('/jobs', getAllJobs)
  .get('/jobs/:id', getSingleJob)
  .post('/jobs', createNewJob)
  .put('/jobs/:id', editJob)
  .delete('/jobs/:id', deleteJob)

// apiRouter.get('/jobs', function(req, res) {
//   Job
//     .query()
//     .then(function(data) {
//       res.json(data)
//     })
// })

function getAllCompanies(req, res) {
  Company
    .query()
    .then(function(data) {
      res.json(data)
    })
}

function getSingleCompany(req, res) {
  const id = parseInt(req.params.id)
  Company  
    .query()
    .findById(id)
    .then(function(c) {
      res.json(c).status(200)
    })
}

function createNewCompany(req, res) {
  Company
    .query()
    .insert(req.body)
    .then(function(newCompany) {
      res.json(newCompany).status(200) 
      console.log(
        `${req.body.name} Company created!\n
        at location: ${req.body.location}\n
        link to image: ${req.body.imageLink}`
      )
    })
}

function editCompany(req, res) {
  const id = parseInt(req.params.id)
  const data = req.body
  Company
    .query()
    .updateAndFetchById(id, data)
    .then(function(updatedCompany) {
      res.json(updatedCompany).status(200)
      console.log(
        `${req.body.name} Company updated!\n
        at location: ${req.body.location}\n
        link to image: ${req.body.imageLink}`
      )
    })
}

function deleteCompany(req, res) {
  const id = parseInt(req.params.id)
  Job
    .query()
    .delete()
    .where('companyId', '=', id)
    .then(function(rowsDeleted) {
      console.log(`${rowsDeleted} child jobs  of Company had been deleted!`)
    })  
  Company
    .query()
    .deleteById(id)
    .then(function(companyDeleted) {
      res.json({
        companyDeleted: companyDeleted
      })
      console.log(`${companyDeleted} company has been removed`)
    })

}

apiRouter
  .get('/companies', getAllCompanies)
  .get('/companies/:id', getSingleCompany)
  .post('/companies', createNewCompany)
  .put('/companies/:id', editCompany)
  .delete('/companies/:id', deleteCompany)

// apiRouter.get('/companies', function(req, res) {
//   Company
//     .query()
//     .then(function(data) {
//       res.json(data)
//     })
// })

module.exports = apiRouter