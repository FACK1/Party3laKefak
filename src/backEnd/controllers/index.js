const express = require('express')
const services = require('./services')
const service = require('./service')
const signup = require('./signup');

const router = express.Router()

router.get('/', services.get)
router.get('/service/:id', service.get)

router.get('/signup', signup.get)


module.exports = router
