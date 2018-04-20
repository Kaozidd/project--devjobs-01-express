const Router = require('express').Router
const pageRouter = Router()

pageRouter.get('/', function(req, res) {
	res.render('home.ejs')
})

pageRouter.get('/about', function(req, res) {
	res.render('about.ejs')
})

module.exports = pageRouter